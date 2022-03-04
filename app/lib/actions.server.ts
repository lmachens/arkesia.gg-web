import type { AreaNode, User } from "@prisma/client";
import type { NodeOnDiskFile } from "@remix-run/node";
import { badRequest } from "remix-utils";
import {
  deleteNode,
  findNode,
  findUser,
  insertNode,
  updateNode,
} from "./db.server";
import { postToDiscord } from "./discord";
import {
  deleteNodeScreenshot,
  imageToWebp,
  uploadNodeScreenshot,
} from "./storage.server";
import type {
  AreaNodeWithoutId,
  FieldErrors,
  PostNodeActionData,
} from "./validation";
import { validateNode } from "./validation";

export function parseFormData<T extends {}>(
  body: FormData,
  fields: { [key in keyof T]: "string" | "number" }
): Response | T {
  const fieldErrors: FieldErrors = {};
  const result: { [key: string]: string | number } = {};

  Object.entries(fields).forEach(([key, type]) => {
    const entryValue = body.get(key);
    if (entryValue === null) {
      fieldErrors[key] = `${key} is required`;
      return;
    }

    if (type === "string") {
      result[key] = entryValue.toString();
    } else if (type === "number") {
      result[key] = +entryValue.toString();
    }
  });

  if (Object.keys(fieldErrors).length > 0) {
    return badRequest<PostNodeActionData>({
      fieldErrors: fieldErrors,
    });
  }
  return result as T;
}

export async function requestUser(userToken?: string) {
  if (!userToken) {
    return null;
  }
  const user = await findUser(userToken);
  return user;
}

export async function requestCreateNode(
  node: AreaNodeWithoutId,
  fileScreenshot?: NodeOnDiskFile | null
) {
  const fieldErrors = validateNode(node);
  if (Object.keys(fieldErrors).length > 0) {
    return badRequest<PostNodeActionData>({
      fieldErrors,
      fields: node,
    });
  }

  if (fileScreenshot) {
    const imageWebp = await imageToWebp(fileScreenshot);
    const filename =
      `${node.areaName}_${node.type}_${node.position}.webp`.replace(/\s/g, "_");
    node.screenshot = await uploadNodeScreenshot(filename, imageWebp);
  }

  const insertedNode = await insertNode(node);
  postToDiscord("inserted", insertedNode);
}

export async function requestUpdateNode(
  node: Omit<AreaNode, "validationNote">,
  fileScreenshot?: NodeOnDiskFile | null
) {
  const fieldErrors = validateNode(node);
  if (Object.keys(fieldErrors).length > 0) {
    return badRequest<PostNodeActionData>({
      fieldErrors,
      fields: node,
    });
  }
  const oldNode = await findNode(node.id);
  if (!oldNode) {
    return badRequest<PostNodeActionData>({
      formError: "Can not find node",
    });
  }

  if (fileScreenshot) {
    const imageWebp = await imageToWebp(fileScreenshot);
    const filename =
      `${node.areaName}_${node.type}_${node.position}.webp`.replace(/\s/g, "_");
    node.screenshot = await uploadNodeScreenshot(filename, imageWebp);
  }

  const updatedNode = await updateNode(node);

  if (oldNode.screenshot && oldNode.screenshot !== node.screenshot) {
    await deleteNodeScreenshot(oldNode.screenshot);
  }

  postToDiscord("updated", updatedNode);
}

export async function requestDeleteNode(id: number) {
  try {
    const deletedNode = await deleteNode(id);
    if (deletedNode.screenshot) {
      await deleteNodeScreenshot(deletedNode.screenshot);
    }
    postToDiscord("deleted", deletedNode);
  } catch (error) {
    return badRequest<PostNodeActionData>({
      formError: "Deletion failed",
    });
  }
}

export async function requestReportNode(id: number, reason: string) {
  try {
    const node = await findNode(id);
    if (!node) {
      return badRequest<PostNodeActionData>({
        formError: "Can not find node",
      });
    }
    postToDiscord("report", node, reason);
  } catch (error) {
    return badRequest<PostNodeActionData>({
      formError: "Report failed",
    });
  }
}

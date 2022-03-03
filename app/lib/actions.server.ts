import type { AreaNode } from "@prisma/client";
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
    return badRequest<PostNodeActionData>({
      fieldErrors: {
        userId: "User token is required",
      },
    });
  }
  const user = await findUser(userToken);
  if (!user) {
    return badRequest<PostNodeActionData>({
      fieldErrors: { userId: "User not found" },
    });
  }
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
  node: AreaNode,
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

export async function requestDeleteNode(id?: number) {
  if (!id) {
    return badRequest<PostNodeActionData>({
      formError: "Node ID is required",
    });
  }
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

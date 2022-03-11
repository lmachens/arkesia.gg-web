import { badRequest, ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import type { ActionFunction, LoaderFunction } from "remix";
import { redirect, unstable_parseMultipartFormData } from "remix";
import invariant from "tiny-invariant";
import { continents } from "~/lib/static";
import type {
  Area,
  AreaNodeDTO,
  CreateNodeForm,
  UpdateNodeForm,
} from "~/lib/types";
import { AppShell, LoadingOverlay } from "@mantine/core";
import { findNodes } from "~/lib/db.server";
import type { AreaNode } from "@prisma/client";
import { uploadHandler } from "~/lib/storage.server";
import type { AreaNodeWithoutId, PostNodeActionData } from "~/lib/validation";
import {
  parseFormData,
  requestCreateNode,
  requestDeleteNode,
  requestReportNode,
  requestUpdateNode,
  requestUser,
} from "~/lib/actions.server";
import type { NodeOnDiskFile } from "@remix-run/node";
import AppHeader from "~/components/AppHeader";
import Settings from "~/components/Settings";

export type LoaderData = {
  continentName: string;
  area: Area;
  continentNames: string[];
  areaNames: string[];
  nodes: AreaNodeDTO[];
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.continent, "Expected params.continent");
  invariant(params.area, "Expected params.area");

  const continent = continents.find(
    (mapData) => mapData.name === params.continent
  );
  const area = continent?.areas.find((area) => area.name === params.area);

  if (!continent || !area) {
    return redirect("/");
  }
  const [world, ...more] = continents;
  const continentNames = [
    world.name,
    ...more.map((continent) => continent.name).sort(),
  ];
  const areaNames = continent.areas.map((area) => area.name).sort();

  const nodes = await findNodes(area.name);
  return {
    continentName: continent.name,
    area,
    continentNames,
    areaNames,
    nodes,
  } as LoaderData;
};

export const action: ActionFunction = async ({ request }) => {
  const body = await unstable_parseMultipartFormData(request, uploadHandler);
  const user = await requestUser(body.get("userToken")?.toString());

  const action = body.get("_action")?.toString();

  switch (action) {
    case "create":
      {
        const formData = parseFormData<CreateNodeForm>(body, {
          lat: "number",
          lng: "number",
          areaName: "string",
          type: "string",
          name: "string",
          tileId: "number",
          description: "string",
          screenshot: "string",
          transitToId: "number",
        });

        if (formData instanceof Response) {
          return formData;
        }
        const position = [formData.lat, formData.lng];
        const { lat, lng, ...partialFormData } = formData;
        const node: AreaNodeWithoutId = {
          ...partialFormData,
          position,
          description: formData.description.replace("<p><br></p>", ""),
          userId: user ? user.id : null,
          transitToId: formData.transitToId || null,
        };

        const fileScreenshot = body.get(
          "fileScreenshot"
        ) as NodeOnDiskFile | null;
        const createdNode = await requestCreateNode(node, fileScreenshot);
        if (createdNode instanceof Response) {
          return createdNode;
        }
      }
      break;
    case "update":
      {
        if (!user) {
          return badRequest<PostNodeActionData>({
            formError: "You shall not pass",
          });
        }
        const formData = parseFormData<UpdateNodeForm>(body, {
          id: "number",
          lat: "number",
          lng: "number",
          areaName: "string",
          type: "string",
          name: "string",
          tileId: "number",
          description: "string",
          screenshot: "string",
          transitToId: "number",
        });

        if (formData instanceof Response) {
          return formData;
        }
        const position = [formData.lat, formData.lng];
        const { lat, lng, ...partialFormData } = formData;
        const node: Omit<AreaNode, "validationNote"> = {
          ...partialFormData,
          position,
          description: formData.description.replace("<p><br></p>", ""),
          userId: user ? user.id : null,
          transitToId: formData.transitToId || null,
        };
        const fileScreenshot = body.get(
          "fileScreenshot"
        ) as NodeOnDiskFile | null;
        const createdNode = await requestUpdateNode(node, fileScreenshot);
        if (createdNode instanceof Response) {
          return createdNode;
        }
      }
      break;
    case "delete":
      {
        if (!user) {
          return badRequest<PostNodeActionData>({
            formError: "You shall not pass",
          });
        }

        const formData = parseFormData<{ id: number }>(body, {
          id: "number",
        });
        if (formData instanceof Response) {
          return formData;
        }

        const deletedNode = await requestDeleteNode(formData.id);
        if (deletedNode instanceof Response) {
          return deletedNode;
        }
      }
      break;
    case "report":
      {
        const formData = parseFormData<{ id: number; reason: string }>(body, {
          id: "number",
          reason: "string",
        });
        if (formData instanceof Response) {
          return formData;
        }

        requestReportNode(formData.id, formData.reason);
      }
      break;
  }

  return null;
};

export default function MapPage() {
  return (
    <AppShell
      padding={0}
      style={{ overflow: "hidden" }}
      header={
        <AppHeader>
          <Settings />
        </AppHeader>
      }
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.dark[5],
          color: theme.colors.dark[0],
        },
      })}
    >
      <ClientOnly fallback={<LoadingOverlay visible />}>
        {() => <MapView />}
      </ClientOnly>
    </AppShell>
  );
}

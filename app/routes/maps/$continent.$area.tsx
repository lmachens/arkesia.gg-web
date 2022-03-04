import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import type { ActionFunction, LoaderFunction } from "remix";
import {
  redirect,
  unstable_parseMultipartFormData,
  useLoaderData,
} from "remix";
import invariant from "tiny-invariant";
import { continents } from "~/lib/static";
import MapSelect from "~/components/MapSelect";
import type { Area, CreateNodeForm, UpdateNodeForm } from "~/lib/types";
import { AppShell, Header, LoadingOverlay } from "@mantine/core";
import { findNodes } from "~/lib/db.server";
import type { AreaNode } from "@prisma/client";
import { uploadHandler } from "~/lib/storage.server";
import type { AreaNodeWithoutId } from "~/lib/validation";
import {
  parseFormData,
  requestCreateNode,
  requestDeleteNode,
  requestUpdateNode,
  requestUser,
} from "~/lib/actions.server";
import type { NodeOnDiskFile } from "@remix-run/node";

type LoaderData = {
  continentName: string;
  area: Area;
  continentNames: string[];
  areaNames: string[];
  nodes: AreaNode[];
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
  const continentNames = continents.map((continent) => continent.name).sort();
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
  if (user instanceof Response) {
    return user;
  }

  const action = body.get("_action")?.toString();

  if (action === "create") {
    const formData = parseFormData<CreateNodeForm>(body, {
      lat: "number",
      lng: "number",
      areaName: "string",
      type: "string",
      name: "string",
      tileId: "number",
      description: "string",
      screenshot: "string",
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
      userId: user.id,
    };

    const fileScreenshot = body.get("fileScreenshot") as NodeOnDiskFile | null;
    const createdNode = await requestCreateNode(node, fileScreenshot);
    if (createdNode instanceof Response) {
      return createdNode;
    }
  } else if (action === "update") {
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
    });

    if (formData instanceof Response) {
      return formData;
    }
    const position = [formData.lat, formData.lng];
    const { lat, lng, ...partialFormData } = formData;
    const node: AreaNode = {
      ...partialFormData,
      position,
      description: formData.description.replace("<p><br></p>", ""),
      userId: user.id,
    };
    const fileScreenshot = body.get("fileScreenshot") as NodeOnDiskFile | null;
    const createdNode = await requestUpdateNode(node, fileScreenshot);
    if (createdNode instanceof Response) {
      return createdNode;
    }
  } else if (action === "delete") {
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

  return null;
};

export default function MapPage() {
  const { continentName, area, continentNames, areaNames, nodes } =
    useLoaderData<LoaderData>();

  return (
    <AppShell
      padding={0}
      style={{ overflow: "hidden" }}
      header={
        <Header height={60} padding="xs" className="nav">
          <MapSelect
            continentName={continentName}
            areaName={area.name}
            continentNames={continentNames}
            areaNames={areaNames}
          />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.dark[5],
          color: theme.colors.dark[0],
        },
      })}
    >
      <ClientOnly fallback={<LoadingOverlay visible />}>
        {() => <MapView area={area} nodes={nodes} />}
      </ClientOnly>
    </AppShell>
  );
}

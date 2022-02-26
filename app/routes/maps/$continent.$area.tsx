import { badRequest, ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  unstable_parseMultipartFormData,
  useActionData,
  useCatch,
  useLoaderData,
} from "remix";
import invariant from "tiny-invariant";
import { continents } from "~/lib/static";
import MapSelect from "~/components/MapSelect";
import { Area } from "~/lib/types";
import { AppShell, Header } from "@mantine/core";
import { deleteNode, findNodes, findUser, insertNode } from "~/lib/db.server";
import { AreaNode } from "@prisma/client";
import { postToDiscord } from "~/lib/discord";
import {
  deleteNodeScreenshot,
  imageToWebp,
  uploadHandler,
  uploadNodeScreenshot,
} from "~/lib/storage.server";
import type { NodeOnDiskFile } from "@remix-run/node";
import {
  AreaNodeWithoutId,
  PostNodeActionData,
  validateNode,
} from "~/lib/validation";

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
  const user = await findUser(body.get("userToken")!.toString());

  if (request.method === "POST") {
    const partialNode: AreaNodeWithoutId = {
      areaName: body.get("areaName")!.toString(),
      position: [+body.get("lat")!, +body.get("lng")!],
      type: body.get("type")!.toString(),
      name: body.get("name")!.toString(),
      tileId: +body.get("tileId")!.toString(),
      description:
        body.get("description")?.toString().replace("<p><br></p>", "") || "",
      screenshot: "",
      userId: user?.id || 0,
    };

    const fieldErrors = validateNode(partialNode);
    if (Object.keys(fieldErrors).length > 0) {
      return badRequest<PostNodeActionData>({
        fieldErrors,
        fields: partialNode,
      });
    }

    const screenshot = body.get("screenshot") as NodeOnDiskFile | undefined;
    if (screenshot) {
      const imageWebp = await imageToWebp(screenshot);
      const filename =
        `${partialNode.areaName}_${partialNode.type}_${partialNode.position}.webp`.replace(
          /\s/g,
          "_"
        );
      partialNode.screenshot = await uploadNodeScreenshot(filename, imageWebp);
    }

    const node = await insertNode(partialNode);
    postToDiscord("inserted", node);
  } else if (request.method === "DELETE") {
    if (!user) {
      return badRequest<PostNodeActionData>({
        fieldErrors: { userId: "User not found" },
      });
    }

    const deletedNode = await deleteNode(+body.get("nodeId")!);
    if (deletedNode.screenshot) {
      await deleteNodeScreenshot(deletedNode.screenshot);
    }
    postToDiscord("deleted", deletedNode);
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
      <ClientOnly>
        <MapView area={area} nodes={nodes} />
      </ClientOnly>
    </AppShell>
  );
}

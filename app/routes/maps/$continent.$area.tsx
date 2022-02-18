import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { ActionFunction, LoaderFunction, redirect, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { continents, findNodes, insertNode } from "~/lib/db";
import MapSelect from "~/components/MapSelect";
import { useState } from "react";
import { Area, AreaNode } from "~/lib/types";
import { AppShell, Header } from "@mantine/core";

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
  const continentNames = continents.map((continent) => continent.name);
  const areaNames = continent.areas.map((area) => area.name);

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
  const body = await request.formData();

  try {
    const node: AreaNode = {
      areaName: body.get("areaName")!.toString(),
      type: body.get("type")!.toString(),
      position: [+body.get("lat")!, +body.get("lng")!],
    };
    await insertNode(node);
    return node;
  } catch (error) {
    return { errors: [error], values: body };
  }
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

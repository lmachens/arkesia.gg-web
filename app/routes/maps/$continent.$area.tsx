import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { ActionFunction, LoaderFunction, redirect, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { continents } from "~/lib/db";
import MapSelect from "~/components/MapSelect";
import { useState } from "react";
import { Area } from "~/lib/types";
import { AppShell, Header } from "@mantine/core";

type LoaderData = {
  continentName: string;
  area: Area;
  continentNames: string[];
  areaNames: string[];
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

  return {
    continentName: continent.name,
    area,
    continentNames,
    areaNames,
  } as LoaderData;
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();

  const node = {
    lat: +body.get("lat")!,
    lng: +body.get("lng")!,
    type: body.get("type")!,
  };

  return node;
};

export default function MapPage() {
  const { continentName, area, continentNames, areaNames } =
    useLoaderData<LoaderData>();
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);

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
        <MapView area={area} />
      </ClientOnly>
    </AppShell>
  );
}

import type { LoaderFunction } from "remix";
import { redirect } from "remix";
import invariant from "tiny-invariant";
import { countNodesByArea, findNodes } from "./db.server";
import { continents } from "./static";
import type { Area, AreaNodeDTO } from "./types";

export type LoaderData = {
  continentName: string;
  area: Area;
  continentNames: string[];
  areaNames: string[];
  nodes: AreaNodeDTO[];
  nodesByArea: {
    areaName: string;
    type: string;
    count: number;
  }[];
};

export const areaLoader: LoaderFunction = async ({ params }) => {
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

  const nodesByArea = await countNodesByArea();
  return {
    continentName: continent.name,
    area,
    continentNames,
    areaNames,
    nodes,
    nodesByArea,
  } as LoaderData;
};

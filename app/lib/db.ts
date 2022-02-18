import { MongoClient } from "mongodb";
import { Continent, AreaNodeCategory, AreaNode } from "./types";

export const nodeCategories: AreaNodeCategory[] = [
  {
    name: "Collectibles",
    types: [
      {
        name: "Collectible Card",
        iconUrl: "/markers/card-joker.svg",
      },
      {
        name: "Mokoko Seed",
        iconUrl: "/markers/plant-seed.svg",
      },
    ],
  },
  {
    name: "Locations",
    types: [
      {
        name: "Dungeon",
        iconUrl: "/markers/dungeon-gate.svg",
      },
    ],
  },
  {
    name: "Services",
    types: [
      {
        name: "Chef",
        iconUrl: "/markers/chef-toque.svg",
      },
    ],
  },
];

export const nodeTypes = nodeCategories
  .map((nodeCategory) =>
    nodeCategory.types.map((nodeType) => ({
      ...nodeType,
      category: nodeCategory.name,
    }))
  )
  .flat();

export const continents: Continent[] = [
  {
    name: "Yorn",
    areas: [
      {
        name: "Iron Hammer Mine",
        tileURL:
          "/tiles/yorn/iron_hammer_mine/lv_yor_secondwpgv_i_ps_0_{y}x{x}.webp",
        tiles: [7, 7],
      },
      {
        name: "Unfinished Garden",
        tileURL:
          "/tiles/yorn/unfinished_garden/lv_yor_ugarden_f_ps_0_{y}x{x}.webp",
        tiles: [6, 6],
      },
      {
        name: "Hall of Promise",
        tileURL:
          "/tiles/yorn/hall_of_promise/lv_yor_lpromise_f_ps_0_{y}x{x}.webp",
        tiles: [6, 6],
      },
    ],
  },
];

export const requestDataAPI = async (resource: string, payload: any) => {
  if (
    !process.env.DATA_API_BASE_URL ||
    !process.env.DATA_API_KEY ||
    !process.env.CLUSTER_NAME
  ) {
    throw new Error("Missing DATA API environment variables");
  }

  const request = await fetch(`${process.env.DATA_API_BASE_URL}${resource}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.DATA_API_KEY,
    },
    body: JSON.stringify({
      database: "arkesia",
      dataSource: "Arkesia0",
      ...payload,
    }),
  });
  return await request.json();
};

export const findNodes = async (areaName: string) => {
  const result = await requestDataAPI("/action/find", {
    collection: "nodes",
    filter: {
      areaName,
    },
  });
  return result.documents;
};

export const insertNode = async (node: AreaNode) => {
  const result = await requestDataAPI("/action/insertOne", {
    collection: "nodes",
    document: node,
  });
  return result.documents;
};

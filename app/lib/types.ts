import type { AreaNode } from "@prisma/client";

export type Tile = {
  id: number;
  tile: string;
  full: string;
  max: [number, number];
};

export type CreateNodeForm = {
  lat: number;
  lng: number;
  areaName: string;
  type: string;
  name: string;
  tileId: number;
  description: string;
  screenshot: string;
  transitToId: number;
};

export type UpdateNodeForm = {
  id: number;
} & CreateNodeForm;

export type AreaCategory = "Continent" | "Dungeon" | "Island" | "World";

export type Area = {
  name: string;
  category: AreaCategory;
  tiles: Tile[];
};

export type Continent = {
  name: string;
  areas: Area[];
};

export type AreaNodeType = {
  category: string;
  name: string;
  icon: string;
};

type PartialAreaNodeType = Omit<AreaNodeType, "category">;

export type AreaNodeCategory = {
  name: string;
  includes: AreaCategory[];
  types: PartialAreaNodeType[];
};

export type AreaNodeDTO = AreaNode & {
  transitTo: AreaNode | null;
};

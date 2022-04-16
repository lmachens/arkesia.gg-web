import type { AreaNode, AreaNodeLocation } from "@prisma/client";

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

export type CreateNodeLocationForm = {
  nodeId: number;
  lat: number;
  lng: number;
  areaName: string;
  tileId: number;
};

export type UpdateNodeForm = {
  id: number;
  locationId: number;
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
  size?: "lg";
  sizeMultiplicator?: number;
  zIndex?: number;
  hideInSummary?: boolean;
};

type PartialAreaNodeType = Omit<AreaNodeType, "category">;

export type AreaNodeCategory = {
  name: string;
  includes: AreaCategory[];
  types: PartialAreaNodeType[];
  hideInSummary?: boolean;
  zIndex?: number;
};

export type TransitTo = AreaNode & {
  areaNodeLocations: AreaNodeLocation[];
};

export type AreaNodeDTO = AreaNode & {
  transitTo: TransitTo | null;
};

export type AreaNodeLocationDTO = AreaNodeLocation & {
  areaNode: AreaNodeDTO;
};

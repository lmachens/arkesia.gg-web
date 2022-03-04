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
};

export type UpdateNodeForm = {
  id: number;
} & CreateNodeForm;

export type Area = {
  name: string;
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
  types: PartialAreaNodeType[];
};

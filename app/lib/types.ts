export type Tile = {
  id: number;
  tile: string;
  full: string;
  max: [number, number];
};

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
  color: string;
};

type PartialAreaNodeType = Omit<AreaNodeType, "category" | "color"> & {
  color?: string;
};

export type AreaNodeCategory = {
  name: string;
  color: string;
  types: PartialAreaNodeType[];
};

export type Area = {
  name: string;
  tileURL: string;
  tiles: [number, number];
};

export type Continent = {
  name: string;
  areas: Area[];
};

export type AreaNodeType = {
  category: string;
  name: string;
  iconUrl: string;
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

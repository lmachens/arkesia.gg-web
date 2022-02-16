export type Area = {
  name: string;
  tileURL: string;
  tiles: [number, number];
  nodes: AreaNode[];
};

export type Continent = {
  name: string;
  areas: Area[];
};

export type AreaNode = {
  name: string;
  position: [number, number];
};

export type AreaNodeType = {
  name: string;
  iconUrl: string;
};

export type AreaNodeCategory = {
  name: string;
  types: AreaNodeType[];
};

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
  name: string;
  iconUrl: string;
};

export type AreaNodeCategory = {
  name: string;
  types: AreaNodeType[];
};

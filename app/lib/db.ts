import { Continent, AreaNodeCategory } from "./types";

export const nodeCategories: AreaNodeCategory[] = [
  {
    name: "Locations",
    types: [
      {
        name: "Area",
        iconUrl: "",
      },
      {
        name: "Dungeon",
        iconUrl: "",
      },
      {
        name: "Portal",
        iconUrl: "",
      },
    ],
  },
  {
    name: "Services",
    types: [
      {
        name: "Crafting",
        iconUrl: "",
      },
    ],
  },
];

export const nodeTypes = nodeCategories
  .map((nodeCategory) => nodeCategory.types)
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
        nodes: [],
      },
      {
        name: "Unfinished Garden",
        tileURL:
          "/tiles/yorn/unfinished_garden/lv_yor_ugarden_f_ps_0_{y}x{x}.webp",
        tiles: [6, 6],
        nodes: [],
      },
      {
        name: "Hall of Promise",
        tileURL:
          "/tiles/yorn/hall_of_promise/lv_yor_lpromise_f_ps_0_{y}x{x}.webp",
        tiles: [6, 6],
        nodes: [],
      },
    ],
  },
];

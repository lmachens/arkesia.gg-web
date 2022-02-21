import { Continent, AreaNodeCategory, AreaNodeType } from "./types";

export const nodeCategories: AreaNodeCategory[] = [
  {
    name: "Collectibles",
    color: "rgba(200, 200, 200, 0.7)",
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
    name: "Enemies",
    color: "rgba(220, 20, 60, 0.7)",
    types: [
      {
        name: "Boss",
        iconUrl: "/markers/daemon-skull.svg",
      },
      {
        name: "World Boss",
        iconUrl: "/markers/gooey-daemon.svg",
      },
    ],
  },
  {
    name: "Locations",
    color: "rgba(112, 128, 144, 0.7)",
    types: [
      {
        name: "Dungeon",
        iconUrl: "/markers/dungeon-gate.svg",
      },
      {
        name: "Triport",
        iconUrl: "/markers/moebius-triangle.svg",
      },
      {
        name: "Portal",
        iconUrl: "/markers/portal.svg",
      },
      {
        name: "Chaosportal",
        iconUrl: "/markers/magic-portal.svg",
      },
    ],
  },
  {
    name: "Services",
    color: "rgba(34, 139, 34, 0.7)",
    types: [
      {
        name: "Chef",
        iconUrl: "/markers/chef-toque.svg",
      },
    ],
  },
  {
    name: "Miscellaneous",
    color: "rgba(134, 87, 229, 0.7)",
    types: [
      {
        name: "Play Song",
        iconUrl: "/markers/double-quaver.svg",
      },
      {
        name: "Vista",
        iconUrl: "/markers/spyglass.svg",
      },
    ],
  },
];

export const nodeTypes = nodeCategories
  .map((nodeCategory) =>
    nodeCategory.types.map<AreaNodeType>((nodeType) => ({
      ...nodeType,
      category: nodeCategory.name,
      color: nodeType.color || nodeCategory.color,
    }))
  )
  .flat();

export const nodeTypesMap = nodeTypes.reduce(
  (prev, nodeType) => ({
    ...prev,
    [nodeType.name]: nodeType,
  }),
  {} as {
    [name: string]: AreaNodeType;
  }
);

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

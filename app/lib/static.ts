import type { Continent, AreaNodeCategory, AreaNodeType } from "./types";

export const ICON_BASE_URL =
  "https://wtudsavjhvtxvqitnoxr.supabase.co/storage/v1/object/public/cdn/icons/";
export const TILE_BASE_URL =
  "https://wtudsavjhvtxvqitnoxr.supabase.co/storage/v1/object/public/cdn/tiles/";

export const nodeCategories: AreaNodeCategory[] = [
  {
    name: "Areas & Orientation",
    types: [
      {
        name: "Map Transition",
        icon: "minimap_symbol_7.webp",
      },
      {
        name: "Viewpoint",
        icon: "viewpoint.webp",
      },
    ],
  },
  {
    name: "Collectibles",
    types: [
      {
        name: "Mokoko Seeds",
        icon: "minimap_symbol_1_121.webp",
      },
    ],
  },
  {
    name: "Enemies",
    types: [],
  },
  {
    name: "Services",
    types: [
      {
        name: "Chef",
        icon: "minimap_symbol_206.webp",
      },
      {
        name: "Cooking",
        icon: "cooking.webp",
      },
      {
        name: "Trade Merchant",
        icon: "minimap_symbol_152.webp",
      },
    ],
  },
  {
    name: "NPCs",
    types: [
      {
        name: "Rapport",
        icon: "minimap_symbol_84.webp",
      },
      {
        name: "Hidden Story",
        icon: "hidden_story.webp",
      },
    ],
  },
  {
    name: "Symbols",
    types: [
      {
        name: "Main Quest",
        icon: "minimap_symbol_12.webp",
      },
      {
        name: "Side Quest",
        icon: "minimap_symbol_15.webp",
      },
      {
        name: "Sudden Quest (InProgress)",
        icon: "minimap_symbol_81.webp",
      },
      {
        name: "World Quest",
        icon: "minimap_symbol_244.webp",
      },
      {
        name: "Co-op Quest",
        icon: "minimap_symbol_87.webp",
      },
      {
        name: "Co-op Quest Area",
        icon: "minimap_symbol_88.webp",
      },
      {
        name: "Chain Side Quest",
        icon: "minimap_symbol_253.webp",
      },
      {
        name: "Repeatable Quest",
        icon: "minimap_symbol_249.webp",
      },
      {
        name: "Adventure Quest",
        icon: "minimap_symbol_247.webp",
      },
      {
        name: "Chain Adventure Quest",
        icon: "minimap_symbol_239.webp",
      },
      {
        name: "Rapport Quest",
        icon: "minimap_symbol_1_55.webp",
      },
      {
        name: "Co-op Quest",
        icon: "minimap_symbol_1_58.webp",
      },
      {
        name: "Rapport Chain Quest",
        icon: "minimap_symbol_1_279.webp",
      },
      {
        name: "Boss 1",
        icon: "minimap_symbol_1.webp",
      },
      {
        name: "3",
        icon: "minimap_symbol_3.webp",
      },
      {
        name: "Story Mission Portal",
        icon: "minimap_symbol_2.webp",
      },
      {
        name: "Ark Dungeon",
        icon: "minimap_symbol_4.webp",
      },
      {
        name: "Sailing Dungeon",
        icon: "minimap_symbol_1_204.webp",
      },
      {
        name: "Guardian Raid",
        icon: "minimap_symbol_5.webp",
      },
      {
        name: "Chaos Dungeon",
        icon: "minimap_symbol_1_38.webp",
      },
      {
        name: "Adventurer Helper",
        icon: "minimap_symbol_31.webp",
      },
      {
        name: "Arena",
        icon: "minimap_symbol_34.webp",
      },
      {
        name: "Cube",
        icon: "minimap_symbol_1_309.webp",
      },
      {
        name: "Platinum Field",
        icon: "minimap_symbol_1_310.webp",
      },
      {
        name: "Boss Rush",
        icon: "minimap_symbol_1_311.webp",
      },
      {
        name: "Abyssal Dungeon",
        icon: "minimap_symbol_1_312.webp",
      },
      {
        name: "Tower",
        icon: "minimap_symbol_1_322.webp",
      },
      {
        name: "Abyssal Dungeon 2",
        icon: "minimap_symbol_1_339.webp",
      },
      {
        name: "Chaos Gate",
        icon: "minimap_symbol_6.webp",
      },
      {
        name: "Crimson Chaos Gate",
        icon: "minimap_symbol_64.webp",
      },
      {
        name: "Plum Chaos Gate",
        icon: "minimap_symbol_65.webp",
      },
      {
        name: "Lime Chaos Gate",
        icon: "minimap_symbol_66.webp",
      },
      {
        name: "Pink Chaos Gate",
        icon: "minimap_symbol_67.webp",
      },
      {
        name: "Portal Statue",
        icon: "minimap_symbol_1_186.webp",
      },
      {
        name: "Chaos Dungeon Node",
        icon: "minimap_symbol_71.webp",
      },
      {
        name: "Triport (Discovered)",
        icon: "minimap_symbol_73.webp",
      },
      {
        name: "Port",
        icon: "minimap_symbol_92.webp",
      },
      {
        name: "Dock",
        icon: "minimap_symbol_1_47.webp",
      },
      {
        name: "Island",
        icon: "minimap_symbol_219.webp",
      },
      {
        name: "PvP Island",
        icon: "minimap_symbol_218.webp",
      },
      {
        name: "Ghost Ship (Active)",
        icon: "minimap_symbol_1_210.webp",
      },
      {
        name: "Vast Sea",
        icon: "minimap_symbol_1_328.webp",
      },
      {
        name: "Sea Bounty - Mokoko Mushroom",
        icon: "minimap_symbol_96.webp",
      },
      {
        name: "Sea Bounty - Llama",
        icon: "minimap_symbol_97.webp",
      },
      {
        name: "Sea Bounty - Red Sea Turtle",
        icon: "minimap_symbol_98.webp",
      },
      {
        name: "Sea Bounty - Stardust",
        icon: "minimap_symbol_99.webp",
      },
      {
        name: "Sea Bounty - Sea Flower",
        icon: "minimap_symbol_100.webp",
      },
      {
        name: "Sea Bounty - Starfruit",
        icon: "minimap_symbol_101.webp",
      },
      {
        name: "Sea Bounty - Dragonfruit",
        icon: "minimap_symbol_102.webp",
      },
      {
        name: "Sea Bounty - Mandrill",
        icon: "minimap_symbol_103.webp",
      },
      {
        name: "Sea Bounty - Ghost Lizard",
        icon: "minimap_symbol_104.webp",
      },
      {
        name: "Sea Bounty - Five-colored Parrot",
        icon: "minimap_symbol_105.webp",
      },
      {
        name: "Sea Bounty - Tablet of Wind",
        icon: "minimap_symbol_106.webp",
      },
      {
        name: "Sea Bounty - Halfmoon Mask",
        icon: "minimap_symbol_107.webp",
      },
      {
        name: "Sea Bounty - Ancient Rod",
        icon: "minimap_symbol_108.webp",
      },
      {
        name: "Sea Bounty - Eagle?",
        icon: "minimap_symbol_109.webp",
      },
      {
        name: "Sea Bounty - See?",
        icon: "minimap_symbol_110.webp",
      },
      {
        name: "Sea Bounty - Crevasse",
        icon: "minimap_symbol_111.webp",
      },
      {
        name: "Sea Bounty - Smoldering Ice",
        icon: "minimap_symbol_112.webp",
      },
      {
        name: "Sea Bounty - Dolmen",
        icon: "minimap_symbol_113.webp",
      },
      {
        name: "Sea Bounty - Magick Circle",
        icon: "minimap_symbol_114.webp",
      },
      {
        name: "Sea Bounty - Shipwreck",
        icon: "minimap_symbol_115.webp",
      },
      {
        name: "Sea Bounty - Common Dolphin",
        icon: "minimap_symbol_116.webp",
      },
      {
        name: "Sea Bounty - Polar Mammoth",
        icon: "minimap_symbol_117.webp",
      },
      {
        name: "Sea Bounty - Red Camel",
        icon: "minimap_symbol_118.webp",
      },
      {
        name: "Sea Bounty - Unicorn",
        icon: "minimap_symbol_119.webp",
      },
      {
        name: "Sea Bounty - Ghost Stringray",
        icon: "minimap_symbol_120.webp",
      },
      {
        name: "Sea Bounty - Dolphin?",
        icon: "minimap_symbol_121.webp",
      },
      {
        name: "Sea Bounty - Siren",
        icon: "minimap_symbol_122.webp",
      },
      {
        name: "Sea Bounty - Moonkeep",
        icon: "minimap_symbol_123.webp",
      },
      {
        name: "Sea Bounty - Godsent Spear",
        icon: "minimap_symbol_124.webp",
      },
      {
        name: "Sea Bounty - Tablet?",
        icon: "minimap_symbol_125.webp",
      },
      {
        name: "Sea Bounty - Dolmen?",
        icon: "minimap_symbol_126.webp",
      },
      {
        name: "Sea Bounty - Aurora",
        icon: "minimap_symbol_127.webp",
      },
      {
        name: "Sea Bounty - Whirlpool",
        icon: "minimap_symbol_128.webp",
      },
      {
        name: "Sea Bounty - The Hestia",
        icon: "minimap_symbol_129.webp",
      },
      {
        name: "Sea Bounty - Mute Island",
        icon: "minimap_symbol_130.webp",
      },
      {
        name: "Sea Bounty - Totoiki Boat",
        icon: "minimap_symbol_131.webp",
      },
      {
        name: "Sea Bounty - Mysterious Chest",
        icon: "minimap_symbol_132.webp",
      },
      {
        name: "Sea Bounty - Pirate's Peg Leg",
        icon: "minimap_symbol_133.webp",
      },
      {
        name: "Sea Bounty - Pirate Flag",
        icon: "minimap_symbol_134.webp",
      },
      {
        name: "Sea Bounty - Forgotten Lake",
        icon: "minimap_symbol_135.webp",
      },
      {
        name: "Sea Bounty - Whale?",
        icon: "minimap_symbol_223.webp",
      },
      {
        name: "Statue of Gienah (Island Souls)",
        icon: "minimap_symbol_1_109.webp",
      },
      {
        name: "Sea Bounty - PhantomWing",
        icon: "minimap_symbol_1_323.webp",
      },
      {
        name: "Sea Bounty - King Shellfish",
        icon: "minimap_symbol_1_324.webp",
      },
      {
        name: "Sea Bounty - Covered Figurehead",
        icon: "minimap_symbol_1_325.webp",
      },
      {
        name: "Sea Bounty - Ice Statue of a Woman",
        icon: "minimap_symbol_1_326.webp",
      },
      {
        name: "Sandstorm Sea",
        icon: "minimap_symbol_1_307.webp",
      },
      {
        name: "Cold Snap Sea",
        icon: "minimap_symbol_1_304.webp",
      },
      {
        name: "Tempest Sea",
        icon: "minimap_symbol_1_306.webp",
      },
      {
        name: "Siren Sea",
        icon: "minimap_symbol_1_308.webp",
      },
      {
        name: "Dead Waters",
        icon: "minimap_symbol_1_305.webp",
      },
      {
        name: "1_48",
        icon: "minimap_symbol_1_48.webp",
      },
      {
        name: "Marina",
        icon: "minimap_symbol_230.webp",
      },
      {
        name: "Ore",
        icon: "minimap_symbol_21.webp",
      },
      {
        name: "Timber",
        icon: "minimap_symbol_22.webp",
      },
      {
        name: "Foraging",
        icon: "minimap_symbol_23.webp",
      },
      {
        name: "Fishing Spot",
        icon: "minimap_symbol_24.webp",
      },
      {
        name: "1_290",
        icon: "minimap_symbol_1_290.webp",
      },
      {
        name: "162",
        icon: "minimap_symbol_162.webp",
      },
      {
        name: "Trade Skill Merchant",
        icon: "minimap_symbol_171.webp",
      },
      {
        name: "General Merchant",
        icon: "minimap_symbol_175.webp",
      },
      {
        name: "Potion Merchant",
        icon: "minimap_symbol_176.webp",
      },
      {
        name: "177",
        icon: "minimap_symbol_177.webp",
      },
      {
        name: "Food Merchant 1",
        icon: "minimap_symbol_179.webp",
      },
      {
        name: "Luxury Goods Merchant",
        icon: "minimap_symbol_180.webp",
      },
      {
        name: "Luck Shop",
        icon: "minimap_symbol_181.webp",
      },
      {
        name: "Shipbuilder",
        icon: "minimap_symbol_183.webp",
      },

      {
        name: "Wandering Merchant",
        icon: "minimap_symbol_154.webp",
      },
      {
        name: "Trade Skill Material Merchant",
        icon: "minimap_symbol_228.webp",
      },
      {
        name: "1_124",
        icon: "minimap_symbol_1_124.webp",
      },
      {
        name: "Voyage Manager",
        icon: "minimap_symbol_224.webp",
      },
      {
        name: "Map Exchange",
        icon: "minimap_symbol_153.webp",
      },
      {
        name: "1_125",
        icon: "minimap_symbol_1_125.webp",
      },
      {
        name: "Ingredient Merchant",
        icon: "minimap_symbol_184.webp",
      },
      {
        name: "Food Merchant 2",
        icon: "minimap_symbol_190.webp",
      },
      {
        name: "1_202",
        icon: "minimap_symbol_1_202.webp",
      },
      {
        name: "Rapport Exchange",
        icon: "minimap_symbol_1_275.webp",
      },
      {
        name: "Crafting and Processing",
        icon: "minimap_symbol_202.webp",
      },
      {
        name: "Alchemist",
        icon: "minimap_symbol_207.webp",
      },
      {
        name: "Processing",
        icon: "minimap_symbol_208.webp",
      },
      {
        name: "Repairer",
        icon: "minimap_symbol_158.webp",
      },
      {
        name: "Guardian Raid Soul",
        icon: "minimap_symbol_1_274.webp",
      },
      {
        name: "Gem Expert",
        icon: "minimap_symbol_1_296.webp",
      },
      {
        name: "Transfer Skill Tree",
        icon: "minimap_symbol_1_314.webp",
      },
      {
        name: "Storage",
        icon: "minimap_symbol_29.webp",
      },
      {
        name: "Mail",
        icon: "minimap_symbol_35.webp",
      },
      {
        name: "Stone Cutter",
        icon: "minimap_symbol_38.webp",
      },
      {
        name: "Island Soul - Collectable",
        icon: "minimap_symbol_1_40.webp",
      },
      {
        name: "1_39",
        icon: "minimap_symbol_1_39.webp",
      },
      {
        name: "Giants' Heart - Collectable",
        icon: "minimap_symbol_1_122.webp",
      },
      {
        name: "Masterpiece - Collectable",
        icon: "minimap_symbol_1_123.webp",
      },
      {
        name: "Sea Bounty",
        icon: "minimap_symbol_1_318.webp",
      },
      {
        name: "World Tree Leaf",
        icon: "minimap_symbol_1_320.webp",
      },
      {
        name: "Ignea Token",
        icon: "minimap_symbol_1_457.webp",
      },
      {
        name: "Omnium Star",
        icon: "minimap_symbol_1_321.webp",
      },
      {
        name: "Market Broker",
        icon: "minimap_symbol_151.webp",
      },
      {
        name: "Currency Broker",
        icon: "minimap_symbol_1_147.webp",
      },
      {
        name: "Guild Manager",
        icon: "minimap_symbol_157.webp",
      },
      {
        name: "Pet Management",
        icon: "minimap_symbol_1_203.webp",
      },
      {
        name: "Gear Honing",
        icon: "minimap_symbol_1_207.webp",
      },
      {
        name: "Skin Modding",
        icon: "minimap_symbol_1_387.webp",
      },
      {
        name: "Turquoise Portal",
        icon: "minimap_symbol_1_111.webp",
      },
      {
        name: "Boss 2",
        icon: "minimap_symbol_40.webp",
      },
      {
        name: "Water Vehicle",
        icon: "minimap_symbol_72.webp",
      },
      {
        name: "Elevator",
        icon: "minimap_symbol_1_1.webp",
      },
      {
        name: "Travelator",
        icon: "minimap_symbol_1_2.webp",
      },
      {
        name: "1_3",
        icon: "minimap_symbol_1_3.webp",
      },
      {
        name: "Stairs (Up)",
        icon: "minimap_symbol_1_4.webp",
      },
      {
        name: "Stairs (Down)",
        icon: "minimap_symbol_1_5.webp",
      },
      {
        name: "Gold Named Enemy",
        icon: "minimap_symbol_69.webp",
      },
      {
        name: "X",
        icon: "minimap_symbol_1_0.webp",
      },
      {
        name: "Silver Named Enemy",
        icon: "minimap_symbol_76.webp",
      },
      {
        name: "Lime Portal",
        icon: "minimap_symbol_1_315.webp",
      },
      {
        name: "Yellow Portal",
        icon: "minimap_symbol_1_316.webp",
      },
      {
        name: "Purple Portal",
        icon: "minimap_symbol_1_317.webp",
      },
      {
        name: "Siege Status Board",
        icon: "minimap_symbol_1_152.webp",
      },
    ],
  },
];

export const nodeTypes = nodeCategories
  .map((nodeCategory) =>
    nodeCategory.types.map<AreaNodeType>((nodeType) => ({
      ...nodeType,
      category: nodeCategory.name,
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
    name: "World",
    areas: [
      {
        name: "Arkesia",
        tiles: [
          {
            id: 0,
            tile: "world/lv_ocn_world_ps_0_{y}x{x}.webp",
            full: "world/lv_ocn_world_ps_0_voyage_full.webp",
            max: [8, 11],
          },
        ],
      },
    ],
  },
  {
    name: "Trixion",
    areas: [
      {
        name: "Trixion",
        tiles: [
          {
            id: 0,
            tile: "trixion/lv_trision_ps_0_{y}x{x}.webp",
            full: "trixion/lv_trision_ps_0_full.webp",
            max: [3, 2],
          },
          {
            id: 0,
            tile: "trixion/lv_trision_ark_ps_0_{y}x{x}.webp",
            full: "trixion/lv_trision_ark_ps_0_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Trixion Training Grounds",
        tiles: [
          {
            id: 0,
            tile: "trixion_training_grounds/lv_trision_ark_ps_0_{y}x{x}.webp",
            full: "trixion_training_grounds/lv_trision_ark_ps_0_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Training Room",
        tiles: [
          {
            id: 0,
            tile: "training_room/lv_rvr_ruinarena_01_ps_0_{y}x{x}.webp",
            full: "training_room/lv_rvr_ruinarena_01_ps_0_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Sailing Voyage",
        tiles: [
          {
            id: 0,
            tile: "sailing_voyage/lv_ocn_world_ps_0_{y}x{x}.webp",
            full: "sailing_voyage/lv_ocn_world_ps_0_full.webp",
            max: [8, 11],
          },
        ],
      },
      {
        name: "Training Area",
        tiles: [
          {
            id: 0,
            tile: "training_area/lv_guidingrm_ps_0_{y}x{x}.webp",
            full: "training_area/lv_guidingrm_ps_0_full.webp",
            max: [1, 1],
          },
        ],
      },
    ],
  },
  {
    name: "Sailing Voyage",
    areas: [
      {
        name: "Dark Chaos Gate",
        tiles: [
          {
            id: 0,
            tile: "dark_chaos_gate/lv_ocn_gship_fav_ps_0_{y}x{x}.webp",
            full: "dark_chaos_gate/lv_ocn_gship_fav_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "[Open Seas] Sea of Gienah",
        tiles: [
          {
            id: 0,
            tile: "open_seas_sea_of_gienah/lv_ocn_world_ps_0_{y}x{x}.webp",
            full: "open_seas_sea_of_gienah/lv_ocn_world_ps_0_full.webp",
            max: [8, 11],
          },
        ],
      },
      {
        name: "[Open Seas] Sea of Procyon",
        tiles: [
          {
            id: 0,
            tile: "open_seas_sea_of_procyon/lv_ocn_world_ps_0_{y}x{x}.webp",
            full: "open_seas_sea_of_procyon/lv_ocn_world_ps_0_full.webp",
            max: [8, 11],
          },
        ],
      },
      {
        name: "Somewhere in the vast sea",
        tiles: [
          {
            id: 0,
            tile: "somewhere_in_the_vast_sea/lv_ocn_world_ps_0_{y}x{x}.webp",
            full: "somewhere_in_the_vast_sea/lv_ocn_world_ps_0_full.webp",
            max: [8, 11],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 0,
            tile: "secret_dungeon/lv_scd_voyage_ps_0_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_voyage_ps_0_full.webp",
            max: [4, 6],
          },
        ],
      },
      {
        name: "Goblin Island",
        tiles: [
          {
            id: 0,
            tile: "goblin_island/lv_ocn_roundis_ps_0_{y}x{x}.webp",
            full: "goblin_island/lv_ocn_roundis_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Giant Mushroom Island",
        tiles: [
          {
            id: 1,
            tile: "giant_mushroom_island/lv_ocn_mushroomis_ps_1_{y}x{x}.webp",
            full: "giant_mushroom_island/lv_ocn_mushroomis_ps_1_full.webp",
            max: [2, 3],
          },
          {
            id: 2,
            tile: "giant_mushroom_island/lv_ocn_mushroomis_ps_2_{y}x{x}.webp",
            full: "giant_mushroom_island/lv_ocn_mushroomis_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "giant_mushroom_island/lv_ocn_mushroomis_ps_3_{y}x{x}.webp",
            full: "giant_mushroom_island/lv_ocn_mushroomis_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Toto Silver Island",
        tiles: [
          {
            id: 0,
            tile: "toto_silver_island/lv_ocn_totosilveris_ps_0_{y}x{x}.webp",
            full: "toto_silver_island/lv_ocn_totosilveris_ps_0_full.webp",
            max: [4, 4],
          },
          {
            id: 1,
            tile: "toto_silver_island/lv_ocn_totosilveris_ps_1_{y}x{x}.webp",
            full: "toto_silver_island/lv_ocn_totosilveris_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "toto_silver_island/lv_ocn_totosilveris_ps_2_{y}x{x}.webp",
            full: "toto_silver_island/lv_ocn_totosilveris_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Totopia",
        tiles: [
          {
            id: 0,
            tile: "totopia/lv_ocn_totopia_ps_0_{y}x{x}.webp",
            full: "totopia/lv_ocn_totopia_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "totopia/lv_ocn_totopia_ps_3_{y}x{x}.webp",
            full: "totopia/lv_ocn_totopia_ps_3_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Illusion Isle",
        tiles: [
          {
            id: 0,
            tile: "illusion_isle/lv_ocn_illusionis_ps_0_{y}x{x}.webp",
            full: "illusion_isle/lv_ocn_illusionis_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Lullaby Island",
        tiles: [
          {
            id: 0,
            tile: "lullaby_island/lv_ocn_sleepingis_ps_0_{y}x{x}.webp",
            full: "lullaby_island/lv_ocn_sleepingis_ps_0_full.webp",
            max: [4, 5],
          },
          {
            id: 3,
            tile: "lullaby_island/lv_ocn_sleepingis_ps_3_{y}x{x}.webp",
            full: "lullaby_island/lv_ocn_sleepingis_ps_3_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Starlight Isle",
        tiles: [
          {
            id: 0,
            tile: "starlight_isle/lv_ocn_starlightis_ps_0_{y}x{x}.webp",
            full: "starlight_isle/lv_ocn_starlightis_ps_0_full.webp",
            max: [7, 7],
          },
          {
            id: 1,
            tile: "starlight_isle/lv_ocn_starlightis_ps_1_{y}x{x}.webp",
            full: "starlight_isle/lv_ocn_starlightis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "starlight_isle/lv_ocn_starlightis_ps_3_{y}x{x}.webp",
            full: "starlight_isle/lv_ocn_starlightis_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 14,
            tile: "starlight_isle/lv_ocn_starlightis_ps_14_{y}x{x}.webp",
            full: "starlight_isle/lv_ocn_starlightis_ps_14_full.webp",
            max: [2, 2],
          },
          {
            id: 15,
            tile: "starlight_isle/lv_ocn_starlightis_ps_15_{y}x{x}.webp",
            full: "starlight_isle/lv_ocn_starlightis_ps_15_full.webp",
            max: [2, 2],
          },
          {
            id: 16,
            tile: "starlight_isle/lv_ocn_starlightis_ps_16_{y}x{x}.webp",
            full: "starlight_isle/lv_ocn_starlightis_ps_16_full.webp",
            max: [2, 2],
          },
          {
            id: 17,
            tile: "starlight_isle/lv_ocn_starlightis_ps_17_{y}x{x}.webp",
            full: "starlight_isle/lv_ocn_starlightis_ps_17_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Island of Time",
        tiles: [
          {
            id: 0,
            tile: "island_of_time/lv_ocn_timeis_ps_0_{y}x{x}.webp",
            full: "island_of_time/lv_ocn_timeis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "island_of_time/lv_ocn_timeis_ps_1_{y}x{x}.webp",
            full: "island_of_time/lv_ocn_timeis_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Volare Island",
        tiles: [
          {
            id: 0,
            tile: "volare_island/lv_ocn_volareis_ps_0_{y}x{x}.webp",
            full: "volare_island/lv_ocn_volareis_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Tooki Island",
        tiles: [
          {
            id: 0,
            tile: "tooki_island/lv_ocn_dookyis_ps_0_{y}x{x}.webp",
            full: "tooki_island/lv_ocn_dookyis_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Isle of Yearning",
        tiles: [
          {
            id: 0,
            tile: "isle_of_yearning/lv_ocn_longingis_ps_0_{y}x{x}.webp",
            full: "isle_of_yearning/lv_ocn_longingis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "isle_of_yearning/lv_ocn_longingis_ps_1_{y}x{x}.webp",
            full: "isle_of_yearning/lv_ocn_longingis_ps_1_full.webp",
            max: [4, 4],
          },
          {
            id: 6,
            tile: "isle_of_yearning/lv_ocn_longingis_ps_6_{y}x{x}.webp",
            full: "isle_of_yearning/lv_ocn_longingis_ps_6_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Facility X-301",
        tiles: [
          {
            id: 0,
            tile: "facility_x-301/lv_ocn_secretbaseis_ps_0_{y}x{x}.webp",
            full: "facility_x-301/lv_ocn_secretbaseis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "facility_x-301/lv_ocn_secretbaseis_ps_1_{y}x{x}.webp",
            full: "facility_x-301/lv_ocn_secretbaseis_ps_1_full.webp",
            max: [2, 3],
          },
          {
            id: 2,
            tile: "facility_x-301/lv_ocn_secretbaseis_ps_2_{y}x{x}.webp",
            full: "facility_x-301/lv_ocn_secretbaseis_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "facility_x-301/lv_ocn_secretbaseis_ps_3_{y}x{x}.webp",
            full: "facility_x-301/lv_ocn_secretbaseis_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Alteisen",
        tiles: [
          {
            id: 0,
            tile: "alteisen/lv_ocn_alteisen_ps_0_{y}x{x}.webp",
            full: "alteisen/lv_ocn_alteisen_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "alteisen/lv_ocn_alteisen_ps_2_{y}x{x}.webp",
            full: "alteisen/lv_ocn_alteisen_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Meteora",
        tiles: [
          {
            id: 2,
            tile: "meteora/lv_ocn_meteora_ps_2_{y}x{x}.webp",
            full: "meteora/lv_ocn_meteora_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Kalthertz",
        tiles: [
          {
            id: 1,
            tile: "kalthertz/lv_ocn_kalthertz_ps_1_{y}x{x}.webp",
            full: "kalthertz/lv_ocn_kalthertz_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Island of Mist",
        tiles: [
          {
            id: 3,
            tile: "island_of_mist/lv_ocn_mistis_ps_3_{y}x{x}.webp",
            full: "island_of_mist/lv_ocn_mistis_ps_3_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Argon",
        tiles: [
          {
            id: 1,
            tile: "argon/lv_ocn_elpisis_ps_1_{y}x{x}.webp",
            full: "argon/lv_ocn_elpisis_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Frostfire Island",
        tiles: [
          {
            id: 0,
            tile: "frostfire_island/lv_ocn_icefireis_ps_0_{y}x{x}.webp",
            full: "frostfire_island/lv_ocn_icefireis_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Aiwana Island",
        tiles: [
          {
            id: 1,
            tile: "aiwana_island/lv_ocn_bikiniis_ps_1_{y}x{x}.webp",
            full: "aiwana_island/lv_ocn_bikiniis_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Fortuna",
        tiles: [
          {
            id: 0,
            tile: "fortuna/lv_ocn_fortunais_ps_0_{y}x{x}.webp",
            full: "fortuna/lv_ocn_fortunais_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Vairgrys's Nest",
        tiles: [
          {
            id: 0,
            tile: "vairgryss_nest/lv_ocn_evergraceis_ps_0_{y}x{x}.webp",
            full: "vairgryss_nest/lv_ocn_evergraceis_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Spida Island",
        tiles: [
          {
            id: 0,
            tile: "spida_island/lv_ocn_spidais_ps_0_{y}x{x}.webp",
            full: "spida_island/lv_ocn_spidais_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 4,
            tile: "spida_island/lv_ocn_spidais_ps_4_{y}x{x}.webp",
            full: "spida_island/lv_ocn_spidais_ps_4_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Mercia",
        tiles: [
          {
            id: 5,
            tile: "mercia/lv_ocn_merciais_ps_5_{y}x{x}.webp",
            full: "mercia/lv_ocn_merciais_ps_5_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Reminiscence Isle",
        tiles: [
          {
            id: 1,
            tile: "reminiscence_isle/lv_ocn_recallis_ps_1_{y}x{x}.webp",
            full: "reminiscence_isle/lv_ocn_recallis_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Forpe",
        tiles: [
          {
            id: 0,
            tile: "forpe/lv_ocn_forpeis_ps_0_{y}x{x}.webp",
            full: "forpe/lv_ocn_forpeis_ps_0_full.webp",
            max: [2, 1],
          },
          {
            id: 2,
            tile: "forpe/lv_ocn_forpeis_ps_2_{y}x{x}.webp",
            full: "forpe/lv_ocn_forpeis_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "forpe/lv_ocn_forpeis_ps_3_{y}x{x}.webp",
            full: "forpe/lv_ocn_forpeis_ps_3_full.webp",
            max: [1, 2],
          },
          {
            id: 4,
            tile: "forpe/lv_ocn_forpeis_ps_4_{y}x{x}.webp",
            full: "forpe/lv_ocn_forpeis_ps_4_full.webp",
            max: [1, 2],
          },
          {
            id: 5,
            tile: "forpe/lv_ocn_forpeis_ps_5_{y}x{x}.webp",
            full: "forpe/lv_ocn_forpeis_ps_5_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Peyto",
        tiles: [
          {
            id: 0,
            tile: "peyto/lv_ocn_peyto_ps_0_{y}x{x}.webp",
            full: "peyto/lv_ocn_peyto_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "peyto/lv_ocn_peyto_ps_1_{y}x{x}.webp",
            full: "peyto/lv_ocn_peyto_ps_1_full.webp",
            max: [1, 2],
          },
          {
            id: 2,
            tile: "peyto/lv_ocn_peyto_ps_2_{y}x{x}.webp",
            full: "peyto/lv_ocn_peyto_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "peyto/lv_ocn_peyto_ps_3_{y}x{x}.webp",
            full: "peyto/lv_ocn_peyto_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "peyto/lv_ocn_peyto_ps_4_{y}x{x}.webp",
            full: "peyto/lv_ocn_peyto_ps_4_full.webp",
            max: [10, 10],
          },
          {
            id: 5,
            tile: "peyto/lv_ocn_peyto_ps_5_{y}x{x}.webp",
            full: "peyto/lv_ocn_peyto_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "peyto/lv_ocn_peyto_ps_6_{y}x{x}.webp",
            full: "peyto/lv_ocn_peyto_ps_6_full.webp",
            max: [4, 2],
          },
        ],
      },
      {
        name: "Lost City",
        tiles: [
          {
            id: 0,
            tile: "lost_city/lv_ocn_forgottenis_ps_0_{y}x{x}.webp",
            full: "lost_city/lv_ocn_forgottenis_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Blackfang's Den",
        tiles: [
          {
            id: 0,
            tile: "blackfangs_den/lv_ocn_blackteethis_ps_0_{y}x{x}.webp",
            full: "blackfangs_den/lv_ocn_blackteethis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "blackfangs_den/lv_ocn_blackteethis_ps_1_{y}x{x}.webp",
            full: "blackfangs_den/lv_ocn_blackteethis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "blackfangs_den/lv_ocn_blackteethis_fav_ps_0_{y}x{x}.webp",
            full: "blackfangs_den/lv_ocn_blackteethis_fav_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Gravis",
        tiles: [
          {
            id: 0,
            tile: "gravis/lv_ocn_gravis_ps_0_{y}x{x}.webp",
            full: "gravis/lv_ocn_gravis_ps_0_full.webp",
            max: [4, 4],
          },
          {
            id: 7,
            tile: "gravis/lv_ocn_gravis_ps_7_{y}x{x}.webp",
            full: "gravis/lv_ocn_gravis_ps_7_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Opher, the Lonely Island",
        tiles: [
          {
            id: 0,
            tile: "opher_the_lonely_island/lv_ocn_opher_ps_0_{y}x{x}.webp",
            full: "opher_the_lonely_island/lv_ocn_opher_ps_0_full.webp",
            max: [4, 4],
          },
          {
            id: 3,
            tile: "opher_the_lonely_island/lv_ocn_opher_ps_3_{y}x{x}.webp",
            full: "opher_the_lonely_island/lv_ocn_opher_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Sunflower Island",
        tiles: [
          {
            id: 2,
            tile: "sunflower_island/lv_ocn_sunfloweris_ps_2_{y}x{x}.webp",
            full: "sunflower_island/lv_ocn_sunfloweris_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Freedom Isle",
        tiles: [
          {
            id: 0,
            tile: "freedom_isle/lv_ocn_freedomis_ps_0_{y}x{x}.webp",
            full: "freedom_isle/lv_ocn_freedomis_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "freedom_isle/lv_ocn_freedomis_ps_1_{y}x{x}.webp",
            full: "freedom_isle/lv_ocn_freedomis_ps_1_full.webp",
            max: [2, 3],
          },
          {
            id: 2,
            tile: "freedom_isle/lv_ocn_freedomis_ps_2_{y}x{x}.webp",
            full: "freedom_isle/lv_ocn_freedomis_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "freedom_isle/lv_ocn_freedomis_ps_3_{y}x{x}.webp",
            full: "freedom_isle/lv_ocn_freedomis_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "freedom_isle/lv_ocn_freedomis_ps_4_{y}x{x}.webp",
            full: "freedom_isle/lv_ocn_freedomis_ps_4_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Kharmine's Lair",
        tiles: [
          {
            id: 1,
            tile: "kharmines_lair/lv_ocn_camainis_ps_1_{y}x{x}.webp",
            full: "kharmines_lair/lv_ocn_camainis_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Oblivion Isle",
        tiles: [
          {
            id: 0,
            tile: "oblivion_isle/lv_ocn_deathvalley_ps_0_{y}x{x}.webp",
            full: "oblivion_isle/lv_ocn_deathvalley_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Little Luck Island",
        tiles: [
          {
            id: 0,
            tile: "little_luck_island/lv_ocn_valtisland_ps_0_{y}x{x}.webp",
            full: "little_luck_island/lv_ocn_valtisland_ps_0_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Distorted Island",
        tiles: [
          {
            id: 0,
            tile: "distorted_island/lv_ocn_distortedis_ps_0_{y}x{x}.webp",
            full: "distorted_island/lv_ocn_distortedis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "distorted_island/lv_ocn_distortedis_ps_1_{y}x{x}.webp",
            full: "distorted_island/lv_ocn_distortedis_ps_1_full.webp",
            max: [3, 3],
          },
          {
            id: 10,
            tile: "distorted_island/lv_ocn_distortedis_ps_10_{y}x{x}.webp",
            full: "distorted_island/lv_ocn_distortedis_ps_10_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Erasmo's Island",
        tiles: [
          {
            id: 3,
            tile: "erasmos_island/lv_ocn_erasmois_ps_3_{y}x{x}.webp",
            full: "erasmos_island/lv_ocn_erasmois_ps_3_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Fomona Island",
        tiles: [
          {
            id: 0,
            tile: "fomona_island/lv_ocn_fomonais_ps_0_{y}x{x}.webp",
            full: "fomona_island/lv_ocn_fomonais_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Runaways Island",
        tiles: [
          {
            id: 0,
            tile: "runaways_island/lv_ocn_runawaysis_ps_0_{y}x{x}.webp",
            full: "runaways_island/lv_ocn_runawaysis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "runaways_island/lv_ocn_runawaysis_ps_1_{y}x{x}.webp",
            full: "runaways_island/lv_ocn_runawaysis_ps_1_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Medeia",
        tiles: [
          {
            id: 0,
            tile: "medeia/lv_ocn_medeiais_ps_0_{y}x{x}.webp",
            full: "medeia/lv_ocn_medeiais_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Liebeheim",
        tiles: [
          {
            id: 1,
            tile: "liebeheim/lv_ocn_liebeheimis_ps_1_{y}x{x}.webp",
            full: "liebeheim/lv_ocn_liebeheimis_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Lush Reed Island",
        tiles: [
          {
            id: 0,
            tile: "lush_reed_island/lv_ocn_lushreedis_ps_0_{y}x{x}.webp",
            full: "lush_reed_island/lv_ocn_lushreedis_ps_0_full.webp",
            max: [2, 4],
          },
        ],
      },
      {
        name: "Metus Islands",
        tiles: [
          {
            id: 0,
            tile: "metus_islands/lv_ocn_fearis_ps_0_{y}x{x}.webp",
            full: "metus_islands/lv_ocn_fearis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "metus_islands/lv_ocn_fearis_ps_1_{y}x{x}.webp",
            full: "metus_islands/lv_ocn_fearis_ps_1_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Atlas",
        tiles: [
          {
            id: 0,
            tile: "atlas/lv_ocn_nautilusis_ps_0_{y}x{x}.webp",
            full: "atlas/lv_ocn_nautilusis_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Wisdom Isle",
        tiles: [
          {
            id: 0,
            tile: "wisdom_isle/lv_ocn_wisdomis_ps_0_{y}x{x}.webp",
            full: "wisdom_isle/lv_ocn_wisdomis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "wisdom_isle/lv_ocn_wisdomis_ps_1_{y}x{x}.webp",
            full: "wisdom_isle/lv_ocn_wisdomis_ps_1_full.webp",
            max: [3, 3],
          },
          {
            id: 2,
            tile: "wisdom_isle/lv_ocn_wisdomis_ps_2_{y}x{x}.webp",
            full: "wisdom_isle/lv_ocn_wisdomis_ps_2_full.webp",
            max: [4, 2],
          },
          {
            id: 3,
            tile: "wisdom_isle/lv_ocn_wisdomis_ps_3_{y}x{x}.webp",
            full: "wisdom_isle/lv_ocn_wisdomis_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 10,
            tile: "wisdom_isle/lv_ocn_wisdomis_ps_10_{y}x{x}.webp",
            full: "wisdom_isle/lv_ocn_wisdomis_ps_10_full.webp",
            max: [2, 2],
          },
          {
            id: 11,
            tile: "wisdom_isle/lv_ocn_wisdomis_ps_11_{y}x{x}.webp",
            full: "wisdom_isle/lv_ocn_wisdomis_ps_11_full.webp",
            max: [1, 1],
          },
          {
            id: 12,
            tile: "wisdom_isle/lv_ocn_wisdomis_ps_12_{y}x{x}.webp",
            full: "wisdom_isle/lv_ocn_wisdomis_ps_12_full.webp",
            max: [2, 2],
          },
          {
            id: 13,
            tile: "wisdom_isle/lv_ocn_wisdomis_ps_13_{y}x{x}.webp",
            full: "wisdom_isle/lv_ocn_wisdomis_ps_13_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Crescent Isle",
        tiles: [
          {
            id: 0,
            tile: "crescent_isle/lv_ocn_crescentis_ps_0_{y}x{x}.webp",
            full: "crescent_isle/lv_ocn_crescentis_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Serenity Isle",
        tiles: [
          {
            id: 0,
            tile: "serenity_isle/lv_ocn_sereneis_ps_0_{y}x{x}.webp",
            full: "serenity_isle/lv_ocn_sereneis_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "White Wave Island",
        tiles: [
          {
            id: 0,
            tile: "white_wave_island/lv_ocn_levalis_ps_0_{y}x{x}.webp",
            full: "white_wave_island/lv_ocn_levalis_ps_0_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Outlaw Isle",
        tiles: [
          {
            id: 0,
            tile: "outlaw_isle/lv_ocn_narris_ps_0_{y}x{x}.webp",
            full: "outlaw_isle/lv_ocn_narris_ps_0_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Wildwater Island",
        tiles: [
          {
            id: 0,
            tile: "wildwater_island/lv_ocn_tronais_ps_0_{y}x{x}.webp",
            full: "wildwater_island/lv_ocn_tronais_ps_0_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Naruni Island",
        tiles: [
          {
            id: 0,
            tile: "naruni_island/lv_ocn_naruniis_ps_0_{y}x{x}.webp",
            full: "naruni_island/lv_ocn_naruniis_ps_0_full.webp",
            max: [3, 4],
          },
        ],
      },
      {
        name: "Niheltalop's Thoughts",
        tiles: [
          {
            id: 0,
            tile: "niheltalops_thoughts/lv_ocn_ancientris_ps_0_{y}x{x}.webp",
            full: "niheltalops_thoughts/lv_ocn_ancientris_ps_0_full.webp",
            max: [5, 5],
          },
        ],
      },
      {
        name: "Notos Island",
        tiles: [
          {
            id: 0,
            tile: "notos_island/lv_ocn_icebergis_ps_0_{y}x{x}.webp",
            full: "notos_island/lv_ocn_icebergis_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Monte Island",
        tiles: [
          {
            id: 0,
            tile: "monte_island/lv_ocn_monteis_ps_0_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "monte_island/lv_ocn_monteis_ps_1_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_1_full.webp",
            max: [8, 8],
          },
          {
            id: 2,
            tile: "monte_island/lv_ocn_monteis_ps_2_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "monte_island/lv_ocn_monteis_ps_3_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "monte_island/lv_ocn_monteis_ps_4_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "monte_island/lv_ocn_monteis_ps_5_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "monte_island/lv_ocn_monteis_ps_6_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_6_full.webp",
            max: [2, 2],
          },
          {
            id: 7,
            tile: "monte_island/lv_ocn_monteis_ps_7_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_7_full.webp",
            max: [2, 2],
          },
          {
            id: 8,
            tile: "monte_island/lv_ocn_monteis_ps_8_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_8_full.webp",
            max: [2, 2],
          },
          {
            id: 9,
            tile: "monte_island/lv_ocn_monteis_ps_9_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_9_full.webp",
            max: [2, 2],
          },
          {
            id: 10,
            tile: "monte_island/lv_ocn_monteis_ps_10_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_10_full.webp",
            max: [2, 2],
          },
          {
            id: 11,
            tile: "monte_island/lv_ocn_monteis_ps_11_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_11_full.webp",
            max: [2, 2],
          },
          {
            id: 12,
            tile: "monte_island/lv_ocn_monteis_ps_12_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_12_full.webp",
            max: [2, 2],
          },
          {
            id: 13,
            tile: "monte_island/lv_ocn_monteis_ps_13_{y}x{x}.webp",
            full: "monte_island/lv_ocn_monteis_ps_13_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Panda Island",
        tiles: [
          {
            id: 0,
            tile: "panda_island/lv_ocn_pandapupuis_ps_0_{y}x{x}.webp",
            full: "panda_island/lv_ocn_pandapupuis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "panda_island/lv_ocn_pandapupuis_ps_1_{y}x{x}.webp",
            full: "panda_island/lv_ocn_pandapupuis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "panda_island/lv_ocn_pandapupuis_ps_2_{y}x{x}.webp",
            full: "panda_island/lv_ocn_pandapupuis_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Fantasm Island",
        tiles: [
          {
            id: 0,
            tile: "fantasm_island/lv_ocn_fantasyis_ps_0_{y}x{x}.webp",
            full: "fantasm_island/lv_ocn_fantasyis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "fantasm_island/lv_ocn_fantasyis_ps_1_{y}x{x}.webp",
            full: "fantasm_island/lv_ocn_fantasyis_ps_1_full.webp",
            max: [4, 4],
          },
          {
            id: 2,
            tile: "fantasm_island/lv_ocn_fantasyis_ps_2_{y}x{x}.webp",
            full: "fantasm_island/lv_ocn_fantasyis_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Harmony Island",
        tiles: [
          {
            id: 0,
            tile: "harmony_island/lv_ocn_harmonyis_ps_0_{y}x{x}.webp",
            full: "harmony_island/lv_ocn_harmonyis_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Dreamgull Island",
        tiles: [
          {
            id: 0,
            tile: "dreamgull_island/lv_ocn_dgullis_ps_0_{y}x{x}.webp",
            full: "dreamgull_island/lv_ocn_dgullis_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Glacier Isle",
        tiles: [
          {
            id: 0,
            tile: "glacier_isle/lv_ocn_islandbgis_ps_0_{y}x{x}.webp",
            full: "glacier_isle/lv_ocn_islandbgis_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Lagoon Island",
        tiles: [
          {
            id: 4,
            tile: "lagoon_island/lv_ocn_bhislandis_ps_4_{y}x{x}.webp",
            full: "lagoon_island/lv_ocn_bhislandis_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "lagoon_island/lv_ocn_bhislandis_ps_5_{y}x{x}.webp",
            full: "lagoon_island/lv_ocn_bhislandis_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "lagoon_island/lv_ocn_bhislandis_ps_6_{y}x{x}.webp",
            full: "lagoon_island/lv_ocn_bhislandis_ps_6_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Turtle Island",
        tiles: [
          {
            id: 1,
            tile: "turtle_island/lv_ocn_ttislandis_ps_1_{y}x{x}.webp",
            full: "turtle_island/lv_ocn_ttislandis_ps_1_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Hope Island",
        tiles: [
          {
            id: 2,
            tile: "hope_island/lv_ocn_islandofis_ps_2_{y}x{x}.webp",
            full: "hope_island/lv_ocn_islandofis_ps_2_full.webp",
            max: [4, 5],
          },
        ],
      },
      {
        name: "Lopang Island",
        tiles: [
          {
            id: 1,
            tile: "lopang_island/lv_ocn_loislandis_ps_1_{y}x{x}.webp",
            full: "lopang_island/lv_ocn_loislandis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "lopang_island/lv_ocn_loislandis_ps_6_{y}x{x}.webp",
            full: "lopang_island/lv_ocn_loislandis_ps_6_full.webp",
            max: [5, 5],
          },
          {
            id: 8,
            tile: "lopang_island/lv_ocn_loislandis_ps_8_{y}x{x}.webp",
            full: "lopang_island/lv_ocn_loislandis_ps_8_full.webp",
            max: [5, 5],
          },
          {
            id: 10,
            tile: "lopang_island/lv_ocn_loislandis_ps_10_{y}x{x}.webp",
            full: "lopang_island/lv_ocn_loislandis_ps_10_full.webp",
            max: [4, 5],
          },
        ],
      },
      {
        name: "Eternity Isle",
        tiles: [
          {
            id: 0,
            tile: "eternity_isle/lv_ocn_brokengis_ps_0_{y}x{x}.webp",
            full: "eternity_isle/lv_ocn_brokengis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "eternity_isle/lv_ocn_brokengis_ps_1_{y}x{x}.webp",
            full: "eternity_isle/lv_ocn_brokengis_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "eternity_isle/lv_ocn_brokengis_ps_2_{y}x{x}.webp",
            full: "eternity_isle/lv_ocn_brokengis_ps_2_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Hypnos's Eyes",
        tiles: [
          {
            id: 0,
            tile: "hypnoss_eyes/lv_ocn_ehypnosis_ps_0_{y}x{x}.webp",
            full: "hypnoss_eyes/lv_ocn_ehypnosis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "hypnoss_eyes/lv_ocn_ehypnosis_ps_1_{y}x{x}.webp",
            full: "hypnoss_eyes/lv_ocn_ehypnosis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "hypnoss_eyes/lv_ocn_ehypnosis_ps_2_{y}x{x}.webp",
            full: "hypnoss_eyes/lv_ocn_ehypnosis_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "hypnoss_eyes/lv_ocn_ehypnosis_ps_3_{y}x{x}.webp",
            full: "hypnoss_eyes/lv_ocn_ehypnosis_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "hypnoss_eyes/lv_ocn_ehypnosis_ps_6_{y}x{x}.webp",
            full: "hypnoss_eyes/lv_ocn_ehypnosis_ps_6_full.webp",
            max: [2, 2],
          },
          {
            id: 7,
            tile: "hypnoss_eyes/lv_ocn_ehypnosis_ps_7_{y}x{x}.webp",
            full: "hypnoss_eyes/lv_ocn_ehypnosis_ps_7_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "hypnoss_eyes/lv_ocn_ehypnosid_ps_0_{y}x{x}.webp",
            full: "hypnoss_eyes/lv_ocn_ehypnosid_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Sublime Isle",
        tiles: [
          {
            id: 0,
            tile: "sublime_isle/lv_ocn_atalanteis_ps_0_{y}x{x}.webp",
            full: "sublime_isle/lv_ocn_atalanteis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 2,
            tile: "sublime_isle/lv_ocn_atalanteis_ps_2_{y}x{x}.webp",
            full: "sublime_isle/lv_ocn_atalanteis_ps_2_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Death's Hold Island",
        tiles: [
          {
            id: 3,
            tile: "deaths_hold_island/lv_ocn_desireis_ps_3_{y}x{x}.webp",
            full: "deaths_hold_island/lv_ocn_desireis_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Orvis Island",
        tiles: [
          {
            id: 0,
            tile: "orvis_island/lv_ocn_orbisis_ps_0_{y}x{x}.webp",
            full: "orvis_island/lv_ocn_orbisis_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "orvis_island/lv_ocn_orbisis_ps_1_{y}x{x}.webp",
            full: "orvis_island/lv_ocn_orbisis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "orvis_island/lv_ocn_orbisis_ps_2_{y}x{x}.webp",
            full: "orvis_island/lv_ocn_orbisis_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Astella",
        tiles: [
          {
            id: 0,
            tile: "astella/lv_ocn_estis_ps_0_{y}x{x}.webp",
            full: "astella/lv_ocn_estis_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Slime Island",
        tiles: [
          {
            id: 0,
            tile: "slime_island/lv_ocn_slimeis_ps_0_{y}x{x}.webp",
            full: "slime_island/lv_ocn_slimeis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "slime_island/lv_ocn_slimeis_ps_1_{y}x{x}.webp",
            full: "slime_island/lv_ocn_slimeis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "slime_island/lv_ocn_slimeis_ps_2_{y}x{x}.webp",
            full: "slime_island/lv_ocn_slimeis_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Alakkir",
        tiles: [
          {
            id: 1,
            tile: "alakkir/lv_ocn_alacis_ps_1_{y}x{x}.webp",
            full: "alakkir/lv_ocn_alacis_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "alakkir/lv_ocn_alacis_ps_3_{y}x{x}.webp",
            full: "alakkir/lv_ocn_alacis_ps_3_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Opportunity Isle",
        tiles: [
          {
            id: 1,
            tile: "opportunity_isle/lv_ocn_chanceis_ps_1_{y}x{x}.webp",
            full: "opportunity_isle/lv_ocn_chanceis_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Primal Island",
        tiles: [
          {
            id: 0,
            tile: "primal_island/lv_ocn_beginningis_ps_0_{y}x{x}.webp",
            full: "primal_island/lv_ocn_beginningis_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 11,
            tile: "primal_island/lv_ocn_beginningis_ps_11_{y}x{x}.webp",
            full: "primal_island/lv_ocn_beginningis_ps_11_full.webp",
            max: [5, 5],
          },
        ],
      },
      {
        name: "Golden Wave Island",
        tiles: [
          {
            id: 0,
            tile: "golden_wave_island/lv_ocn_goldenwis_ps_0_{y}x{x}.webp",
            full: "golden_wave_island/lv_ocn_goldenwis_ps_0_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Boombling Island",
        tiles: [
          {
            id: 0,
            tile: "boombling_island/lv_ocn_bombis_ps_0_{y}x{x}.webp",
            full: "boombling_island/lv_ocn_bombis_ps_0_full.webp",
            max: [3, 2],
          },
          {
            id: 1,
            tile: "boombling_island/lv_ocn_bombis_ps_1_{y}x{x}.webp",
            full: "boombling_island/lv_ocn_bombis_ps_1_full.webp",
            max: [3, 3],
          },
          {
            id: 7,
            tile: "boombling_island/lv_ocn_bombis_ps_7_{y}x{x}.webp",
            full: "boombling_island/lv_ocn_bombis_ps_7_full.webp",
            max: [1, 1],
          },
          {
            id: 8,
            tile: "boombling_island/lv_ocn_bombis_ps_8_{y}x{x}.webp",
            full: "boombling_island/lv_ocn_bombis_ps_8_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Tranquil Isle",
        tiles: [
          {
            id: 1,
            tile: "tranquil_isle/lv_ocn_sabbathis_ps_1_{y}x{x}.webp",
            full: "tranquil_isle/lv_ocn_sabbathis_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Revelry Row",
        tiles: [
          {
            id: 0,
            tile: "revelry_row/lv_ocn_avenueis_ps_0_{y}x{x}.webp",
            full: "revelry_row/lv_ocn_avenueis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "revelry_row/lv_ocn_avenueis_ps_4_{y}x{x}.webp",
            full: "revelry_row/lv_ocn_avenueis_ps_4_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Asura Island",
        tiles: [
          {
            id: 0,
            tile: "asura_island/lv_ocn_surais_ps_0_{y}x{x}.webp",
            full: "asura_island/lv_ocn_surais_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Promise Isle",
        tiles: [
          {
            id: 0,
            tile: "promise_isle/lv_ocn_promiseis_ps_0_{y}x{x}.webp",
            full: "promise_isle/lv_ocn_promiseis_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Twilight Isle",
        tiles: [
          {
            id: 0,
            tile: "twilight_isle/lv_ocn_twilightis_ps_0_{y}x{x}.webp",
            full: "twilight_isle/lv_ocn_twilightis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "twilight_isle/lv_ocn_twilightis_ps_1_{y}x{x}.webp",
            full: "twilight_isle/lv_ocn_twilightis_ps_1_full.webp",
            max: [3, 3],
          },
          {
            id: 2,
            tile: "twilight_isle/lv_ocn_twilightis_ps_2_{y}x{x}.webp",
            full: "twilight_isle/lv_ocn_twilightis_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Phantomwing Island",
        tiles: [
          {
            id: 0,
            tile: "phantomwing_island/lv_ocn_butterflyis_ps_0_{y}x{x}.webp",
            full: "phantomwing_island/lv_ocn_butterflyis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "phantomwing_island/lv_ocn_butterflyis_ps_2_{y}x{x}.webp",
            full: "phantomwing_island/lv_ocn_butterflyis_ps_2_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Azure Wind Island",
        tiles: [
          {
            id: 0,
            tile: "azure_wind_island/lv_ocn_blueis_ps_0_{y}x{x}.webp",
            full: "azure_wind_island/lv_ocn_blueis_ps_0_full.webp",
            max: [3, 2],
          },
          {
            id: 1,
            tile: "azure_wind_island/lv_ocn_blueis_ps_1_{y}x{x}.webp",
            full: "azure_wind_island/lv_ocn_blueis_ps_1_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "azure_wind_island/lv_ocn_blueis_ps_2_{y}x{x}.webp",
            full: "azure_wind_island/lv_ocn_blueis_ps_2_full.webp",
            max: [5, 2],
          },
          {
            id: 3,
            tile: "azure_wind_island/lv_ocn_blueis_ps_3_{y}x{x}.webp",
            full: "azure_wind_island/lv_ocn_blueis_ps_3_full.webp",
            max: [3, 4],
          },
          {
            id: 4,
            tile: "azure_wind_island/lv_ocn_blueis_ps_4_{y}x{x}.webp",
            full: "azure_wind_island/lv_ocn_blueis_ps_4_full.webp",
            max: [3, 3],
          },
          {
            id: 5,
            tile: "azure_wind_island/lv_ocn_blueis_ps_5_{y}x{x}.webp",
            full: "azure_wind_island/lv_ocn_blueis_ps_5_full.webp",
            max: [5, 2],
          },
          {
            id: 6,
            tile: "azure_wind_island/lv_ocn_blueis_ps_6_{y}x{x}.webp",
            full: "azure_wind_island/lv_ocn_blueis_ps_6_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Shadowmoon Market",
        tiles: [
          {
            id: 0,
            tile: "shadowmoon_market/lv_ocn_shadowis_ps_0_{y}x{x}.webp",
            full: "shadowmoon_market/lv_ocn_shadowis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "shadowmoon_market/lv_ocn_shadowis_ps_1_{y}x{x}.webp",
            full: "shadowmoon_market/lv_ocn_shadowis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "shadowmoon_market/lv_ocn_shadowis_ps_2_{y}x{x}.webp",
            full: "shadowmoon_market/lv_ocn_shadowis_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "shadowmoon_market/lv_ocn_shadowis_ps_3_{y}x{x}.webp",
            full: "shadowmoon_market/lv_ocn_shadowis_ps_3_full.webp",
            max: [5, 3],
          },
          {
            id: 4,
            tile: "shadowmoon_market/lv_ocn_shadowis_ps_4_{y}x{x}.webp",
            full: "shadowmoon_market/lv_ocn_shadowis_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "shadowmoon_market/lv_ocn_shadowis_ps_5_{y}x{x}.webp",
            full: "shadowmoon_market/lv_ocn_shadowis_ps_5_full.webp",
            max: [3, 6],
          },
          {
            id: 6,
            tile: "shadowmoon_market/lv_ocn_shadowis_ps_6_{y}x{x}.webp",
            full: "shadowmoon_market/lv_ocn_shadowis_ps_6_full.webp",
            max: [5, 3],
          },
        ],
      },
      {
        name: "Shangra",
        tiles: [
          {
            id: 0,
            tile: "shangra/lv_ocn_shangis_ps_0_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_0_full.webp",
            max: [5, 4],
          },
          {
            id: 1,
            tile: "shangra/lv_ocn_shangis_ps_1_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_1_full.webp",
            max: [2, 3],
          },
          {
            id: 2,
            tile: "shangra/lv_ocn_shangis_ps_2_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "shangra/lv_ocn_shangis_ps_3_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "shangra/lv_ocn_shangis_ps_4_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "shangra/lv_ocn_shangis_ps_5_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "shangra/lv_ocn_shangis_ps_6_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_6_full.webp",
            max: [2, 2],
          },
          {
            id: 7,
            tile: "shangra/lv_ocn_shangis_ps_7_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_7_full.webp",
            max: [4, 4],
          },
          {
            id: 8,
            tile: "shangra/lv_ocn_shangis_ps_8_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_8_full.webp",
            max: [3, 3],
          },
          {
            id: 9,
            tile: "shangra/lv_ocn_shangis_ps_9_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_9_full.webp",
            max: [2, 2],
          },
          {
            id: 10,
            tile: "shangra/lv_ocn_shangis_ps_10_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_10_full.webp",
            max: [3, 3],
          },
          {
            id: 11,
            tile: "shangra/lv_ocn_shangis_ps_11_{y}x{x}.webp",
            full: "shangra/lv_ocn_shangis_ps_11_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Atropos",
        tiles: [
          {
            id: 0,
            tile: "atropos/lv_ocn_atrois_ps_0_{y}x{x}.webp",
            full: "atropos/lv_ocn_atrois_ps_0_full.webp",
            max: [4, 4],
          },
          {
            id: 1,
            tile: "atropos/lv_ocn_atrois_ps_1_{y}x{x}.webp",
            full: "atropos/lv_ocn_atrois_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "atropos/lv_ocn_atrois_ps_2_{y}x{x}.webp",
            full: "atropos/lv_ocn_atrois_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "atropos/lv_ocn_atrois_ps_3_{y}x{x}.webp",
            full: "atropos/lv_ocn_atrois_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "atropos/lv_ocn_atrois_ps_4_{y}x{x}.webp",
            full: "atropos/lv_ocn_atrois_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "atropos/lv_ocn_atrois_ps_5_{y}x{x}.webp",
            full: "atropos/lv_ocn_atrois_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "atropos/lv_ocn_atrois_ps_6_{y}x{x}.webp",
            full: "atropos/lv_ocn_atrois_ps_6_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Walpurgis",
        tiles: [
          {
            id: 2,
            tile: "walpurgis/lv_ocn_walsis_ps_2_{y}x{x}.webp",
            full: "walpurgis/lv_ocn_walsis_ps_2_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Unknown Island",
        tiles: [
          {
            id: 0,
            tile: "unknown_island/lv_ocn_unknownis_ps_0_{y}x{x}.webp",
            full: "unknown_island/lv_ocn_unknownis_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Gesbroy",
        tiles: [
          {
            id: 0,
            tile: "gesbroy/lv_ocn_zysbrauis_ps_0_{y}x{x}.webp",
            full: "gesbroy/lv_ocn_zysbrauis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "gesbroy/lv_ocn_zysbrauis_ps_1_{y}x{x}.webp",
            full: "gesbroy/lv_ocn_zysbrauis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "gesbroy/lv_ocn_zysbrauis_ps_2_{y}x{x}.webp",
            full: "gesbroy/lv_ocn_zysbrauis_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "gesbroy/lv_ocn_zysbrauis_ps_3_{y}x{x}.webp",
            full: "gesbroy/lv_ocn_zysbrauis_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "gesbroy/lv_ocn_zysbrauis_ps_4_{y}x{x}.webp",
            full: "gesbroy/lv_ocn_zysbrauis_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "gesbroy/lv_ocn_zysbrauis_ps_5_{y}x{x}.webp",
            full: "gesbroy/lv_ocn_zysbrauis_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "gesbroy/lv_ocn_zysbrauis_ps_6_{y}x{x}.webp",
            full: "gesbroy/lv_ocn_zysbrauis_ps_6_full.webp",
            max: [2, 2],
          },
          {
            id: 7,
            tile: "gesbroy/lv_ocn_zysbrauis_ps_7_{y}x{x}.webp",
            full: "gesbroy/lv_ocn_zysbrauis_ps_7_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Land of Truth",
        tiles: [
          {
            id: 0,
            tile: "land_of_truth/lv_ocn_bugis_ps_0_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 1,
            tile: "land_of_truth/lv_ocn_bugis_ps_1_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_1_full.webp",
            max: [5, 2],
          },
          {
            id: 2,
            tile: "land_of_truth/lv_ocn_bugis_ps_2_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_2_full.webp",
            max: [10, 4],
          },
          {
            id: 3,
            tile: "land_of_truth/lv_ocn_bugis_ps_3_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "land_of_truth/lv_ocn_bugis_ps_4_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "land_of_truth/lv_ocn_bugis_ps_5_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "land_of_truth/lv_ocn_bugis_ps_6_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_6_full.webp",
            max: [2, 2],
          },
          {
            id: 7,
            tile: "land_of_truth/lv_ocn_bugis_ps_7_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_7_full.webp",
            max: [2, 2],
          },
          {
            id: 8,
            tile: "land_of_truth/lv_ocn_bugis_ps_8_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_8_full.webp",
            max: [2, 2],
          },
          {
            id: 9,
            tile: "land_of_truth/lv_ocn_bugis_ps_9_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_9_full.webp",
            max: [4, 2],
          },
          {
            id: 10,
            tile: "land_of_truth/lv_ocn_bugis_ps_10_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_10_full.webp",
            max: [2, 2],
          },
          {
            id: 11,
            tile: "land_of_truth/lv_ocn_bugis_ps_11_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_11_full.webp",
            max: [3, 1],
          },
          {
            id: 12,
            tile: "land_of_truth/lv_ocn_bugis_ps_12_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_12_full.webp",
            max: [2, 2],
          },
          {
            id: 13,
            tile: "land_of_truth/lv_ocn_bugis_ps_13_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_13_full.webp",
            max: [2, 2],
          },
          {
            id: 14,
            tile: "land_of_truth/lv_ocn_bugis_ps_14_{y}x{x}.webp",
            full: "land_of_truth/lv_ocn_bugis_ps_14_full.webp",
            max: [4, 2],
          },
        ],
      },
      {
        name: "Tooki Corporation",
        tiles: [
          {
            id: 0,
            tile: "tooki_corporation/lv_ocn_dookypkis_ps_0_{y}x{x}.webp",
            full: "tooki_corporation/lv_ocn_dookypkis_ps_0_full.webp",
            max: [3, 2],
          },
          {
            id: 1,
            tile: "tooki_corporation/lv_ocn_dookypkis_ps_1_{y}x{x}.webp",
            full: "tooki_corporation/lv_ocn_dookypkis_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "tooki_corporation/lv_ocn_dookypkis_ps_3_{y}x{x}.webp",
            full: "tooki_corporation/lv_ocn_dookypkis_ps_3_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Whispering Islet",
        tiles: [
          {
            id: 0,
            tile: "whispering_islet/lv_ocn_whisperis_ps_0_{y}x{x}.webp",
            full: "whispering_islet/lv_ocn_whisperis_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 2,
            tile: "whispering_islet/lv_ocn_whisperis_ps_2_{y}x{x}.webp",
            full: "whispering_islet/lv_ocn_whisperis_ps_2_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Anguished Isle",
        tiles: [
          {
            id: 0,
            tile: "anguished_isle/lv_ocn_griefis_ps_0_{y}x{x}.webp",
            full: "anguished_isle/lv_ocn_griefis_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Drumbeat Island",
        tiles: [
          {
            id: 0,
            tile: "drumbeat_island/lv_ocn_bumbadumis_ps_0_{y}x{x}.webp",
            full: "drumbeat_island/lv_ocn_bumbadumis_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "drumbeat_island/lv_ocn_bumbadumis_ps_2_{y}x{x}.webp",
            full: "drumbeat_island/lv_ocn_bumbadumis_ps_2_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Snowpang Island",
        tiles: [
          {
            id: 1,
            tile: "snowpang_island/lv_ocn_snowpis_ps_1_{y}x{x}.webp",
            full: "snowpang_island/lv_ocn_snowpis_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Past Hidden by Mikeel",
        tiles: [
          {
            id: 3,
            tile: "past_hidden_by_mikeel/lv_ocn_recallid_ps_3_{y}x{x}.webp",
            full: "past_hidden_by_mikeel/lv_ocn_recallid_ps_3_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Werner's Grand Manor",
        tiles: [
          {
            id: 0,
            tile: "werners_grand_manor/lv_ocn_fearid_ps_0_{y}x{x}.webp",
            full: "werners_grand_manor/lv_ocn_fearid_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "werners_grand_manor/lv_ocn_fearid_ps_1_{y}x{x}.webp",
            full: "werners_grand_manor/lv_ocn_fearid_ps_1_full.webp",
            max: [6, 9],
          },
          {
            id: 2,
            tile: "werners_grand_manor/lv_ocn_fearid_ps_2_{y}x{x}.webp",
            full: "werners_grand_manor/lv_ocn_fearid_ps_2_full.webp",
            max: [5, 4],
          },
          {
            id: 3,
            tile: "werners_grand_manor/lv_ocn_fearid_ps_3_{y}x{x}.webp",
            full: "werners_grand_manor/lv_ocn_fearid_ps_3_full.webp",
            max: [2, 4],
          },
        ],
      },
      {
        name: "Shadow Island",
        tiles: [
          {
            id: 0,
            tile: "shadow_island/lv_ocn_rippedl_ps_0_{y}x{x}.webp",
            full: "shadow_island/lv_ocn_rippedl_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "shadow_island/lv_ocn_rippedl_ps_1_{y}x{x}.webp",
            full: "shadow_island/lv_ocn_rippedl_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Secret Laboratory",
        tiles: [
          {
            id: 0,
            tile: "secret_laboratory/lv_ocn_brokengid_ps_0_{y}x{x}.webp",
            full: "secret_laboratory/lv_ocn_brokengid_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Sacrificial Altar",
        tiles: [
          {
            id: 2,
            tile: "sacrificial_altar/lv_ocn_desireid_ps_2_{y}x{x}.webp",
            full: "sacrificial_altar/lv_ocn_desireid_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Twilight Chapel",
        tiles: [
          {
            id: 1,
            tile: "twilight_chapel/lv_ocn_twilightid_ps_1_{y}x{x}.webp",
            full: "twilight_chapel/lv_ocn_twilightid_ps_1_full.webp",
            max: [5, 5],
          },
        ],
      },
      {
        name: "Night of Walpurgis",
        tiles: [
          {
            id: 7,
            tile: "night_of_walpurgis/lv_ocn_walsnaid_ps_7_{y}x{x}.webp",
            full: "night_of_walpurgis/lv_ocn_walsnaid_ps_7_full.webp",
            max: [4, 5],
          },
        ],
      },
      {
        name: "Arena of Blood Low",
        tiles: [
          {
            id: 0,
            tile: "arena_of_blood_low/lv_ocn_suraid_ps_0_{y}x{x}.webp",
            full: "arena_of_blood_low/lv_ocn_suraid_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Garden of Despair",
        tiles: [
          {
            id: 0,
            tile: "garden_of_despair/lv_ocn_griefisid_ps_0_{y}x{x}.webp",
            full: "garden_of_despair/lv_ocn_griefisid_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
    ],
  },
  {
    name: "Rohendel",
    areas: [
      {
        name: "Rothun",
        tiles: [
          {
            id: 0,
            tile: "rothun/lv_rhd_loa_t_ps_0_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_0_full.webp",
            max: [3, 4],
          },
          {
            id: 1,
            tile: "rothun/lv_rhd_loa_t_ps_1_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_1_full.webp",
            max: [3, 3],
          },
          {
            id: 2,
            tile: "rothun/lv_rhd_loa_t_ps_2_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "rothun/lv_rhd_loa_t_ps_3_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_3_full.webp",
            max: [3, 3],
          },
          {
            id: 4,
            tile: "rothun/lv_rhd_loa_t_ps_4_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_4_full.webp",
            max: [4, 3],
          },
          {
            id: 5,
            tile: "rothun/lv_rhd_loa_t_ps_5_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_5_full.webp",
            max: [3, 3],
          },
          {
            id: 6,
            tile: "rothun/lv_rhd_loa_t_ps_6_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_6_full.webp",
            max: [3, 3],
          },
          {
            id: 7,
            tile: "rothun/lv_rhd_loa_t_ps_7_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_7_full.webp",
            max: [3, 3],
          },
          {
            id: 8,
            tile: "rothun/lv_rhd_loa_t_ps_8_{y}x{x}.webp",
            full: "rothun/lv_rhd_loa_t_ps_8_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Queen's Garden",
        tiles: [
          {
            id: 3,
            tile: "queens_garden/lv_rhd_queen_d_ps_3_{y}x{x}.webp",
            full: "queens_garden/lv_rhd_queen_d_ps_3_full.webp",
            max: [3, 4],
          },
        ],
      },
      {
        name: "Lake Shiverwave",
        tiles: [
          {
            id: 0,
            tile: "lake_shiverwave/lv_rhd_silverl_f_ps_0_{y}x{x}.webp",
            full: "lake_shiverwave/lv_rhd_silverl_f_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "lake_shiverwave/lv_rhd_silverl_f_ps_1_{y}x{x}.webp",
            full: "lake_shiverwave/lv_rhd_silverl_f_ps_1_full.webp",
            max: [5, 5],
          },
          {
            id: 2,
            tile: "lake_shiverwave/lv_rhd_silverl_f_ps_2_{y}x{x}.webp",
            full: "lake_shiverwave/lv_rhd_silverl_f_ps_2_full.webp",
            max: [8, 8],
          },
          {
            id: 3,
            tile: "lake_shiverwave/lv_rhd_silverl_f_ps_3_{y}x{x}.webp",
            full: "lake_shiverwave/lv_rhd_silverl_f_ps_3_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Glass Lotus Lake",
        tiles: [
          {
            id: 0,
            tile: "glass_lotus_lake/lv_rhd_lotusap_f_ps_0_{y}x{x}.webp",
            full: "glass_lotus_lake/lv_rhd_lotusap_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "glass_lotus_lake/lv_rhd_lotusap_f_ps_1_{y}x{x}.webp",
            full: "glass_lotus_lake/lv_rhd_lotusap_f_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "glass_lotus_lake/lv_rhd_lotusap_f_ps_2_{y}x{x}.webp",
            full: "glass_lotus_lake/lv_rhd_lotusap_f_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "glass_lotus_lake/lv_rhd_lotusap_f_ps_3_{y}x{x}.webp",
            full: "glass_lotus_lake/lv_rhd_lotusap_f_ps_3_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Breezesome Brae",
        tiles: [
          {
            id: 0,
            tile: "breezesome_brae/lv_rhd_breezeap_f_ps_0_{y}x{x}.webp",
            full: "breezesome_brae/lv_rhd_breezeap_f_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "breezesome_brae/lv_rhd_breezeap_f_ps_2_{y}x{x}.webp",
            full: "breezesome_brae/lv_rhd_breezeap_f_ps_2_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Xeneela Ruins",
        tiles: [
          {
            id: 0,
            tile: "xeneela_ruins/lv_rhd_zenail_f_ps_0_{y}x{x}.webp",
            full: "xeneela_ruins/lv_rhd_zenail_f_ps_0_full.webp",
            max: [5, 5],
          },
          {
            id: 1,
            tile: "xeneela_ruins/lv_rhd_zenail_f_ps_1_{y}x{x}.webp",
            full: "xeneela_ruins/lv_rhd_zenail_f_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "xeneela_ruins/lv_rhd_zenail_f_ps_2_{y}x{x}.webp",
            full: "xeneela_ruins/lv_rhd_zenail_f_ps_2_full.webp",
            max: [5, 5],
          },
          {
            id: 3,
            tile: "xeneela_ruins/lv_rhd_zenail_f_ps_3_{y}x{x}.webp",
            full: "xeneela_ruins/lv_rhd_zenail_f_ps_3_full.webp",
            max: [3, 3],
          },
          {
            id: 4,
            tile: "xeneela_ruins/lv_rhd_zenail_f_ps_4_{y}x{x}.webp",
            full: "xeneela_ruins/lv_rhd_zenail_f_ps_4_full.webp",
            max: [5, 5],
          },
        ],
      },
      {
        name: "Elzowin's Shade",
        tiles: [
          {
            id: 0,
            tile: "elzowins_shade/lv_rhd_shadeel_f_ps_0_{y}x{x}.webp",
            full: "elzowins_shade/lv_rhd_shadeel_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "elzowins_shade/lv_rhd_shadeel_f_ps_2_{y}x{x}.webp",
            full: "elzowins_shade/lv_rhd_shadeel_f_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "elzowins_shade/lv_rhd_shadeel_f_ps_3_{y}x{x}.webp",
            full: "elzowins_shade/lv_rhd_shadeel_f_ps_3_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Rohendel Clementia",
        tiles: [
          {
            id: 0,
            tile: "rohendel_clementia/lv_rhd_silverl_f_ps_0_{y}x{x}.webp",
            full: "rohendel_clementia/lv_rhd_silverl_f_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "rohendel_clementia/lv_rhd_silverl_f_ps_1_{y}x{x}.webp",
            full: "rohendel_clementia/lv_rhd_silverl_f_ps_1_full.webp",
            max: [5, 5],
          },
          {
            id: 2,
            tile: "rohendel_clementia/lv_rhd_silverl_f_ps_2_{y}x{x}.webp",
            full: "rohendel_clementia/lv_rhd_silverl_f_ps_2_full.webp",
            max: [8, 8],
          },
          {
            id: 3,
            tile: "rohendel_clementia/lv_rhd_silverl_f_ps_3_{y}x{x}.webp",
            full: "rohendel_clementia/lv_rhd_silverl_f_ps_3_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Ruptured Seal Site",
        tiles: [
          {
            id: 2,
            tile: "ruptured_seal_site/lv_rhd_floodseal_i_ps_2_{y}x{x}.webp",
            full: "ruptured_seal_site/lv_rhd_floodseal_i_ps_2_full.webp",
            max: [8, 8],
          },
        ],
      },
      {
        name: "Storm Temple",
        tiles: [
          {
            id: 0,
            tile: "storm_temple/lv_rhd_templew_i_ps_0_{y}x{x}.webp",
            full: "storm_temple/lv_rhd_templew_i_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Realm of Elementals",
        tiles: [
          {
            id: 0,
            tile: "realm_of_elementals/lv_rhd_spiritl_d_ps_0_{y}x{x}.webp",
            full: "realm_of_elementals/lv_rhd_spiritl_d_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Phantom Palace",
        tiles: [
          {
            id: 0,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_0_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_0_full.webp",
            max: [10, 6],
          },
          {
            id: 1,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_1_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_1_full.webp",
            max: [3, 3],
          },
          {
            id: 2,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_2_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_3_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_3_full.webp",
            max: [3, 3],
          },
          {
            id: 4,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_4_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_5_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_5_full.webp",
            max: [3, 3],
          },
          {
            id: 6,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_6_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_6_full.webp",
            max: [2, 3],
          },
          {
            id: 7,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_7_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_7_full.webp",
            max: [3, 3],
          },
          {
            id: 8,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_8_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_8_full.webp",
            max: [2, 2],
          },
          {
            id: 9,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_9_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_9_full.webp",
            max: [2, 2],
          },
          {
            id: 11,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_11_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_11_full.webp",
            max: [10, 5],
          },
          {
            id: 12,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_12_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_12_full.webp",
            max: [3, 2],
          },
          {
            id: 13,
            tile: "phantom_palace/lv_rhd_palacedp_c_ps_13_{y}x{x}.webp",
            full: "phantom_palace/lv_rhd_palacedp_c_ps_13_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Forbidden Altar",
        tiles: [
          {
            id: 0,
            tile: "forbidden_altar/lv_rhd_altar_d_ps_0_{y}x{x}.webp",
            full: "forbidden_altar/lv_rhd_altar_d_ps_0_full.webp",
            max: [2, 6],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 1,
            tile: "secret_dungeon/lv_scd_rohendel_ps_1_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_rohendel_ps_1_full.webp",
            max: [17, 24],
          },
        ],
      },
    ],
  },
  {
    name: "Rethramis",
    areas: [
      {
        name: "Trua, the Forgotten Land",
        tiles: [
          {
            id: 0,
            tile: "trua_the_forgotten_land/lv_atm_lltrua_i_ps_0_{y}x{x}.webp",
            full: "trua_the_forgotten_land/lv_atm_lltrua_i_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "trua_the_forgotten_land/lv_atm_lltrua_i_ps_1_{y}x{x}.webp",
            full: "trua_the_forgotten_land/lv_atm_lltrua_i_ps_1_full.webp",
            max: [1, 2],
          },
          {
            id: 4,
            tile: "trua_the_forgotten_land/lv_atm_lltrua_i_ps_4_{y}x{x}.webp",
            full: "trua_the_forgotten_land/lv_atm_lltrua_i_ps_4_full.webp",
            max: [2, 5],
          },
          {
            id: 5,
            tile: "trua_the_forgotten_land/lv_atm_lltrua_i_ps_5_{y}x{x}.webp",
            full: "trua_the_forgotten_land/lv_atm_lltrua_i_ps_5_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Prideholme",
        tiles: [
          {
            id: 0,
            tile: "prideholme/lv_atm_leonhart_t_ps_0_{y}x{x}.webp",
            full: "prideholme/lv_atm_leonhart_t_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "prideholme/lv_atm_leonhart_t_ps_1_{y}x{x}.webp",
            full: "prideholme/lv_atm_leonhart_t_ps_1_full.webp",
            max: [3, 4],
          },
          {
            id: 7,
            tile: "prideholme/lv_atm_leonhart_t_ps_7_{y}x{x}.webp",
            full: "prideholme/lv_atm_leonhart_t_ps_7_full.webp",
            max: [2, 2],
          },
          {
            id: 9,
            tile: "prideholme/lv_atm_leonhart_t_ps_9_{y}x{x}.webp",
            full: "prideholme/lv_atm_leonhart_t_ps_9_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Loghill",
        tiles: [
          {
            id: 0,
            tile: "loghill/lv_atm_loghill_f_ps_0_{y}x{x}.webp",
            full: "loghill/lv_atm_loghill_f_ps_0_full.webp",
            max: [8, 10],
          },
        ],
      },
      {
        name: "Runa Pass",
        tiles: [
          {
            id: 0,
            tile: "runa_pass/lv_atm_runapass_d_ps_0_{y}x{x}.webp",
            full: "runa_pass/lv_atm_runapass_d_ps_0_full.webp",
            max: [4, 3],
          },
          {
            id: 12,
            tile: "runa_pass/lv_atm_runapass_d_ps_12_{y}x{x}.webp",
            full: "runa_pass/lv_atm_runapass_d_ps_12_full.webp",
            max: [4, 2],
          },
        ],
      },
      {
        name: "Prideholme under Attack",
        tiles: [
          {
            id: 0,
            tile: "prideholme_under_attack/lv_atm_dleonhart_d_ps_0_{y}x{x}.webp",
            full: "prideholme_under_attack/lv_atm_dleonhart_d_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "prideholme_under_attack/lv_atm_dleonhart_d_ps_1_{y}x{x}.webp",
            full: "prideholme_under_attack/lv_atm_dleonhart_d_ps_1_full.webp",
            max: [3, 2],
          },
          {
            id: 3,
            tile: "prideholme_under_attack/lv_atm_dleonhart_d_ps_3_{y}x{x}.webp",
            full: "prideholme_under_attack/lv_atm_dleonhart_d_ps_3_full.webp",
            max: [3, 3],
          },
          {
            id: 7,
            tile: "prideholme_under_attack/lv_atm_dleonhart_d_ps_7_{y}x{x}.webp",
            full: "prideholme_under_attack/lv_atm_dleonhart_d_ps_7_full.webp",
            max: [2, 2],
          },
          {
            id: 9,
            tile: "prideholme_under_attack/lv_atm_dleonhart_d_ps_9_{y}x{x}.webp",
            full: "prideholme_under_attack/lv_atm_dleonhart_d_ps_9_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Ankumo Mountain",
        tiles: [
          {
            id: 0,
            tile: "ankumo_mountain/lv_atm_anguemosm_f_ps_0_{y}x{x}.webp",
            full: "ankumo_mountain/lv_atm_anguemosm_f_ps_0_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Rethramis Border",
        tiles: [
          {
            id: 0,
            tile: "rethramis_border/lv_atm_border_f_ps_0_{y}x{x}.webp",
            full: "rethramis_border/lv_atm_border_f_ps_0_full.webp",
            max: [7, 6],
          },
        ],
      },
      {
        name: "Aquilok's Head",
        tiles: [
          {
            id: 0,
            tile: "aquiloks_head/lv_atm_aguilossh_d_ps_0_{y}x{x}.webp",
            full: "aquiloks_head/lv_atm_aguilossh_d_ps_0_full.webp",
            max: [3, 4],
          },
        ],
      },
      {
        name: "Aquilok’s Tail",
        tiles: [
          {
            id: 0,
            tile: "aquiloks_tail/lv_atm_aguilosst_d_ps_0_{y}x{x}.webp",
            full: "aquiloks_tail/lv_atm_aguilosst_d_ps_0_full.webp",
            max: [3, 4],
          },
          {
            id: 3,
            tile: "aquiloks_tail/lv_atm_aguilosst_d_ps_3_{y}x{x}.webp",
            full: "aquiloks_tail/lv_atm_aguilosst_d_ps_3_full.webp",
            max: [5, 4],
          },
        ],
      },
      {
        name: "Toxiclaw Cavern",
        tiles: [
          {
            id: 1,
            tile: "toxiclaw_cavern/lv_atm_poisoncrd_d_ps_1_{y}x{x}.webp",
            full: "toxiclaw_cavern/lv_atm_poisoncrd_d_ps_1_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 0,
            tile: "secret_dungeon/lv_scd_artemis_ps_0_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_artemis_ps_0_full.webp",
            max: [10, 28],
          },
        ],
      },
    ],
  },
  {
    name: "Shushire",
    areas: [
      {
        name: "Rigens Village",
        tiles: [
          {
            id: 0,
            tile: "rigens_village/lv_shs_retown_t_ps_0_{y}x{x}.webp",
            full: "rigens_village/lv_shs_retown_t_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "rigens_village/lv_shs_retown_t_ps_1_{y}x{x}.webp",
            full: "rigens_village/lv_shs_retown_t_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "rigens_village/lv_shs_retown_t_ps_2_{y}x{x}.webp",
            full: "rigens_village/lv_shs_retown_t_ps_2_full.webp",
            max: [3, 4],
          },
        ],
      },
      {
        name: "Red Curtain Arena",
        tiles: [
          {
            id: 0,
            tile: "red_curtain_arena/lv_shs_rcarena_d_ps_0_{y}x{x}.webp",
            full: "red_curtain_arena/lv_shs_rcarena_d_ps_0_full.webp",
            max: [4, 3],
          },
        ],
      },
      {
        name: "Frozen Sea",
        tiles: [
          {
            id: 1,
            tile: "frozen_sea/lv_shs_frozens_f_ps_1_{y}x{x}.webp",
            full: "frozen_sea/lv_shs_frozens_f_ps_1_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Bitterwind Hill",
        tiles: [
          {
            id: 0,
            tile: "bitterwind_hill/lv_shs_hillwind_f_ps_0_{y}x{x}.webp",
            full: "bitterwind_hill/lv_shs_hillwind_f_ps_0_full.webp",
            max: [6, 5],
          },
        ],
      },
      {
        name: "Iceblood Plateau",
        tiles: [
          {
            id: 0,
            tile: "iceblood_plateau/lv_shs_frozenjp_f_ps_0_{y}x{x}.webp",
            full: "iceblood_plateau/lv_shs_frozenjp_f_ps_0_full.webp",
            max: [6, 7],
          },
        ],
      },
      {
        name: "Lake Eternity",
        tiles: [
          {
            id: 2,
            tile: "lake_eternity/lv_shs_laketime_f_ps_2_{y}x{x}.webp",
            full: "lake_eternity/lv_shs_laketime_f_ps_2_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Icewing Heights",
        tiles: [
          {
            id: 0,
            tile: "icewing_heights/lv_shs_frozencl_f_ps_0_{y}x{x}.webp",
            full: "icewing_heights/lv_shs_frozencl_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "The Espada",
        tiles: [
          {
            id: 1,
            tile: "the_espada/lv_shs_frozens_f_ps_1_{y}x{x}.webp",
            full: "the_espada/lv_shs_frozens_f_ps_1_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Lonely Queen's Hideout",
        tiles: [
          {
            id: 0,
            tile: "lonely_queens_hideout/lv_shs_frozencl_f_ps_0_{y}x{x}.webp",
            full: "lonely_queens_hideout/lv_shs_frozencl_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Cold Dusk Alley",
        tiles: [
          {
            id: 0,
            tile: "cold_dusk_alley/lv_shs_retown_t_ps_0_{y}x{x}.webp",
            full: "cold_dusk_alley/lv_shs_retown_t_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "cold_dusk_alley/lv_shs_retown_t_ps_1_{y}x{x}.webp",
            full: "cold_dusk_alley/lv_shs_retown_t_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "cold_dusk_alley/lv_shs_retown_t_ps_2_{y}x{x}.webp",
            full: "cold_dusk_alley/lv_shs_retown_t_ps_2_full.webp",
            max: [3, 4],
          },
        ],
      },
      {
        name: "Frostpeak Temple",
        tiles: [
          {
            id: 0,
            tile: "frostpeak_temple/lv_shs_ccside_d_ps_0_{y}x{x}.webp",
            full: "frostpeak_temple/lv_shs_ccside_d_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Vrad's Hideout",
        tiles: [
          {
            id: 0,
            tile: "vrads_hideout/lv_shs_hideoutb_d_ps_0_{y}x{x}.webp",
            full: "vrads_hideout/lv_shs_hideoutb_d_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Maze of Mirrors",
        tiles: [
          {
            id: 0,
            tile: "maze_of_mirrors/lv_shs_mazeio_d_ps_0_{y}x{x}.webp",
            full: "maze_of_mirrors/lv_shs_mazeio_d_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "maze_of_mirrors/lv_shs_mazeio_d_ps_1_{y}x{x}.webp",
            full: "maze_of_mirrors/lv_shs_mazeio_d_ps_1_full.webp",
            max: [5, 5],
          },
          {
            id: 2,
            tile: "maze_of_mirrors/lv_shs_mazeio_d_ps_2_{y}x{x}.webp",
            full: "maze_of_mirrors/lv_shs_mazeio_d_ps_2_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 1,
            tile: "secret_dungeon/lv_scd_shushire_ps_1_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_shushire_ps_1_full.webp",
            max: [10, 26],
          },
        ],
      },
    ],
  },
  {
    name: "Arthetine",
    areas: [
      {
        name: "Origins of Stern",
        tiles: [
          {
            id: 0,
            tile: "origins_of_stern/lv_att_stern_t_ps_0_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_0_full.webp",
            max: [7, 6],
          },
          {
            id: 1,
            tile: "origins_of_stern/lv_att_stern_t_ps_1_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_1_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "origins_of_stern/lv_att_stern_t_ps_2_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "origins_of_stern/lv_att_stern_t_ps_3_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_3_full.webp",
            max: [2, 3],
          },
          {
            id: 4,
            tile: "origins_of_stern/lv_att_stern_t_ps_4_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "origins_of_stern/lv_att_stern_t_ps_5_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_5_full.webp",
            max: [3, 2],
          },
          {
            id: 6,
            tile: "origins_of_stern/lv_att_stern_t_ps_6_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_6_full.webp",
            max: [3, 3],
          },
          {
            id: 7,
            tile: "origins_of_stern/lv_att_stern_t_ps_7_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_7_full.webp",
            max: [6, 7],
          },
          {
            id: 8,
            tile: "origins_of_stern/lv_att_stern_t_ps_8_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_8_full.webp",
            max: [8, 10],
          },
          {
            id: 9,
            tile: "origins_of_stern/lv_att_stern_t_ps_9_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_9_full.webp",
            max: [3, 5],
          },
          {
            id: 10,
            tile: "origins_of_stern/lv_att_stern_t_ps_10_{y}x{x}.webp",
            full: "origins_of_stern/lv_att_stern_t_ps_10_full.webp",
            max: [2, 3],
          },
        ],
      },
      {
        name: "Dr. Bergstrom's Laboratory",
        tiles: [
          {
            id: 1,
            tile: "dr_bergstroms_laboratory/lv_att_ehmlab_d_ps_1_{y}x{x}.webp",
            full: "dr_bergstroms_laboratory/lv_att_ehmlab_d_ps_1_full.webp",
            max: [4, 4],
          },
          {
            id: 1,
            tile: "dr_bergstroms_laboratory/lv_att_ehmlabap_d_ps_1_{y}x{x}.webp",
            full: "dr_bergstroms_laboratory/lv_att_ehmlabap_d_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Arid Path",
        tiles: [
          {
            id: 0,
            tile: "arid_path/lv_att_parched_f_ps_0_{y}x{x}.webp",
            full: "arid_path/lv_att_parched_f_ps_0_full.webp",
            max: [7, 6],
          },
          {
            id: 2,
            tile: "arid_path/lv_att_parched_f_ps_2_{y}x{x}.webp",
            full: "arid_path/lv_att_parched_f_ps_2_full.webp",
            max: [7, 4],
          },
        ],
      },
      {
        name: "Scraplands",
        tiles: [
          {
            id: 0,
            tile: "scraplands/lv_att_cracked_f_ps_0_{y}x{x}.webp",
            full: "scraplands/lv_att_cracked_f_ps_0_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Nebelhorn",
        tiles: [
          {
            id: 0,
            tile: "nebelhorn/lv_att_nevel_f_ps_0_{y}x{x}.webp",
            full: "nebelhorn/lv_att_nevel_f_ps_0_full.webp",
            max: [8, 8],
          },
        ],
      },
      {
        name: "Windbringer Hills",
        tiles: [
          {
            id: 0,
            tile: "windbringer_hills/lv_att_windbring_f_ps_0_{y}x{x}.webp",
            full: "windbringer_hills/lv_att_windbring_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 3,
            tile: "windbringer_hills/lv_att_windbring_f_ps_3_{y}x{x}.webp",
            full: "windbringer_hills/lv_att_windbring_f_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Totrich",
        tiles: [
          {
            id: 0,
            tile: "totrich/lv_att_totrichap_f_ps_0_{y}x{x}.webp",
            full: "totrich/lv_att_totrichap_f_ps_0_full.webp",
            max: [7, 7],
          },
          {
            id: 1,
            tile: "totrich/lv_att_totrichap_f_ps_1_{y}x{x}.webp",
            full: "totrich/lv_att_totrichap_f_ps_1_full.webp",
            max: [4, 4],
          },
          {
            id: 2,
            tile: "totrich/lv_att_totrichap_f_ps_2_{y}x{x}.webp",
            full: "totrich/lv_att_totrichap_f_ps_2_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Riza Falls",
        tiles: [
          {
            id: 0,
            tile: "riza_falls/lv_att_riese_f_ps_0_{y}x{x}.webp",
            full: "riza_falls/lv_att_riese_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "riza_falls/lv_att_riese_f_ps_1_{y}x{x}.webp",
            full: "riza_falls/lv_att_riese_f_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Schreiber",
        tiles: [
          {
            id: 0,
            tile: "schreiber/lv_att_parched_f_ps_0_{y}x{x}.webp",
            full: "schreiber/lv_att_parched_f_ps_0_full.webp",
            max: [7, 6],
          },
          {
            id: 2,
            tile: "schreiber/lv_att_parched_f_ps_2_{y}x{x}.webp",
            full: "schreiber/lv_att_parched_f_ps_2_full.webp",
            max: [7, 4],
          },
        ],
      },
      {
        name: "Twilight Hill",
        tiles: [
          {
            id: 0,
            tile: "twilight_hill/lv_att_nevel_f_ps_0_{y}x{x}.webp",
            full: "twilight_hill/lv_att_nevel_f_ps_0_full.webp",
            max: [8, 8],
          },
        ],
      },
      {
        name: "Junkyard",
        tiles: [
          {
            id: 0,
            tile: "junkyard/lv_att_windbring_f_ps_0_{y}x{x}.webp",
            full: "junkyard/lv_att_windbring_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 3,
            tile: "junkyard/lv_att_windbring_f_ps_3_{y}x{x}.webp",
            full: "junkyard/lv_att_windbring_f_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Temple of Sceptrum",
        tiles: [
          {
            id: 2,
            tile: "temple_of_sceptrum/lv_att_titemple_d_ps_2_{y}x{x}.webp",
            full: "temple_of_sceptrum/lv_att_titemple_d_ps_2_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Soldier Ant Nest",
        tiles: [
          {
            id: 0,
            tile: "soldier_ant_nest/lv_att_antnest_d_ps_0_{y}x{x}.webp",
            full: "soldier_ant_nest/lv_att_antnest_d_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Verdantier",
        tiles: [
          {
            id: 0,
            tile: "verdantier/lv_att_ehrgeiz_d_ps_0_{y}x{x}.webp",
            full: "verdantier/lv_att_ehrgeiz_d_ps_0_full.webp",
            max: [3, 4],
          },
          {
            id: 1,
            tile: "verdantier/lv_att_ehrgeiz_d_ps_1_{y}x{x}.webp",
            full: "verdantier/lv_att_ehrgeiz_d_ps_1_full.webp",
            max: [1, 2],
          },
          {
            id: 2,
            tile: "verdantier/lv_att_ehrgeiz_d_ps_2_{y}x{x}.webp",
            full: "verdantier/lv_att_ehrgeiz_d_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "verdantier/lv_att_ehrgeiz_d_ps_3_{y}x{x}.webp",
            full: "verdantier/lv_att_ehrgeiz_d_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Heart of Sceptrum",
        tiles: [
          {
            id: 0,
            tile: "heart_of_sceptrum/lv_att_heartkt_c_ps_0_{y}x{x}.webp",
            full: "heart_of_sceptrum/lv_att_heartkt_c_ps_0_full.webp",
            max: [20, 10],
          },
          {
            id: 2,
            tile: "heart_of_sceptrum/lv_att_heartkt_c_ps_2_{y}x{x}.webp",
            full: "heart_of_sceptrum/lv_att_heartkt_c_ps_2_full.webp",
            max: [8, 6],
          },
          {
            id: 3,
            tile: "heart_of_sceptrum/lv_att_heartkt_c_ps_3_{y}x{x}.webp",
            full: "heart_of_sceptrum/lv_att_heartkt_c_ps_3_full.webp",
            max: [1, 1],
          },
          {
            id: 4,
            tile: "heart_of_sceptrum/lv_att_heartkt_c_ps_4_{y}x{x}.webp",
            full: "heart_of_sceptrum/lv_att_heartkt_c_ps_4_full.webp",
            max: [8, 5],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 0,
            tile: "secret_dungeon/lv_scd_arthetine_ps_0_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_arthetine_ps_0_full.webp",
            max: [14, 29],
          },
        ],
      },
    ],
  },
  {
    name: "Yudia",
    areas: [
      {
        name: "Saland Hill",
        tiles: [
          {
            id: 2,
            tile: "saland_hill/lv_eud_sahill_f_ps_2_{y}x{x}.webp",
            full: "saland_hill/lv_eud_sahill_f_ps_2_full.webp",
            max: [10, 13],
          },
        ],
      },
      {
        name: "Ozhorn Hill",
        tiles: [
          {
            id: 1,
            tile: "ozhorn_hill/lv_eud_ozhill_f_ps_1_{y}x{x}.webp",
            full: "ozhorn_hill/lv_eud_ozhill_f_ps_1_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Sapira Cave",
        tiles: [
          {
            id: 2,
            tile: "sapira_cave/lv_eud_sacave_d_ps_2_{y}x{x}.webp",
            full: "sapira_cave/lv_eud_sacave_d_ps_2_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Morai Ruins",
        tiles: [
          {
            id: 0,
            tile: "morai_ruins/lv_eud_moray_c_ps_0_{y}x{x}.webp",
            full: "morai_ruins/lv_eud_moray_c_ps_0_full.webp",
            max: [5, 7],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 1,
            tile: "secret_dungeon/lv_scd_eudia_ps_1_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_eudia_ps_1_full.webp",
            max: [11, 29],
          },
        ],
      },
    ],
  },
  {
    name: "Anikka",
    areas: [
      {
        name: "Port City Changhun",
        tiles: [
          {
            id: 0,
            tile: "port_city_changhun/lv_anh_changc_t_ps_0_{y}x{x}.webp",
            full: "port_city_changhun/lv_anh_changc_t_ps_0_full.webp",
            max: [4, 4],
          },
          {
            id: 1,
            tile: "port_city_changhun/lv_anh_changc_t_ps_1_{y}x{x}.webp",
            full: "port_city_changhun/lv_anh_changc_t_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "port_city_changhun/lv_anh_changc_t_ps_2_{y}x{x}.webp",
            full: "port_city_changhun/lv_anh_changc_t_ps_2_full.webp",
            max: [1, 2],
          },
          {
            id: 3,
            tile: "port_city_changhun/lv_anh_changc_t_ps_3_{y}x{x}.webp",
            full: "port_city_changhun/lv_anh_changc_t_ps_3_full.webp",
            max: [1, 1],
          },
          {
            id: 4,
            tile: "port_city_changhun/lv_anh_changc_t_ps_4_{y}x{x}.webp",
            full: "port_city_changhun/lv_anh_changc_t_ps_4_full.webp",
            max: [1, 2],
          },
          {
            id: 5,
            tile: "port_city_changhun/lv_anh_changc_t_ps_5_{y}x{x}.webp",
            full: "port_city_changhun/lv_anh_changc_t_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 8,
            tile: "port_city_changhun/lv_anh_changc_t_ps_8_{y}x{x}.webp",
            full: "port_city_changhun/lv_anh_changc_t_ps_8_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Clearcloud of Anikka",
        tiles: [
          {
            id: 0,
            tile: "clearcloud_of_anikka/lv_anh_changc_t_ps_0_{y}x{x}.webp",
            full: "clearcloud_of_anikka/lv_anh_changc_t_ps_0_full.webp",
            max: [4, 4],
          },
          {
            id: 1,
            tile: "clearcloud_of_anikka/lv_anh_changc_t_ps_1_{y}x{x}.webp",
            full: "clearcloud_of_anikka/lv_anh_changc_t_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "clearcloud_of_anikka/lv_anh_changc_t_ps_2_{y}x{x}.webp",
            full: "clearcloud_of_anikka/lv_anh_changc_t_ps_2_full.webp",
            max: [1, 2],
          },
          {
            id: 3,
            tile: "clearcloud_of_anikka/lv_anh_changc_t_ps_3_{y}x{x}.webp",
            full: "clearcloud_of_anikka/lv_anh_changc_t_ps_3_full.webp",
            max: [1, 1],
          },
          {
            id: 4,
            tile: "clearcloud_of_anikka/lv_anh_changc_t_ps_4_{y}x{x}.webp",
            full: "clearcloud_of_anikka/lv_anh_changc_t_ps_4_full.webp",
            max: [1, 2],
          },
          {
            id: 5,
            tile: "clearcloud_of_anikka/lv_anh_changc_t_ps_5_{y}x{x}.webp",
            full: "clearcloud_of_anikka/lv_anh_changc_t_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 8,
            tile: "clearcloud_of_anikka/lv_anh_changc_t_ps_8_{y}x{x}.webp",
            full: "clearcloud_of_anikka/lv_anh_changc_t_ps_8_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Delphi Inn",
        tiles: [
          {
            id: 1,
            tile: "delphi_inn/lv_anh_delphiinn_d_ps_1_{y}x{x}.webp",
            full: "delphi_inn/lv_anh_delphiinn_d_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Delphi Township",
        tiles: [
          {
            id: 0,
            tile: "delphi_township/lv_anh_delphica_f_ps_0_{y}x{x}.webp",
            full: "delphi_township/lv_anh_delphica_f_ps_0_full.webp",
            max: [6, 5],
          },
        ],
      },
      {
        name: "Rattan Hill",
        tiles: [
          {
            id: 0,
            tile: "rattan_hill/lv_anh_rattanh_f_ps_0_{y}x{x}.webp",
            full: "rattan_hill/lv_anh_rattanh_f_ps_0_full.webp",
            max: [5, 5],
          },
          {
            id: 1,
            tile: "rattan_hill/lv_anh_rattanh_f_ps_1_{y}x{x}.webp",
            full: "rattan_hill/lv_anh_rattanh_f_ps_1_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Melody Forest",
        tiles: [
          {
            id: 0,
            tile: "melody_forest/lv_anh_melodyf_f_ps_0_{y}x{x}.webp",
            full: "melody_forest/lv_anh_melodyf_f_ps_0_full.webp",
            max: [4, 5],
          },
        ],
      },
      {
        name: "Prisma Valley",
        tiles: [
          {
            id: 1,
            tile: "prisma_valley/lv_anh_mirrorva_f_ps_1_{y}x{x}.webp",
            full: "prisma_valley/lv_anh_mirrorva_f_ps_1_full.webp",
            max: [6, 5],
          },
        ],
      },
      {
        name: "Twilight Mists",
        tiles: [
          {
            id: 0,
            tile: "twilight_mists/lv_anh_twilightm_f_ps_0_{y}x{x}.webp",
            full: "twilight_mists/lv_anh_twilightm_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Guardian Canyon",
        tiles: [
          {
            id: 0,
            tile: "guardian_canyon/lv_anh_gvalley_d_ps_0_{y}x{x}.webp",
            full: "guardian_canyon/lv_anh_gvalley_d_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Moonmist Manor",
        tiles: [
          {
            id: 0,
            tile: "moonmist_manor/lv_anh_fullmoonh_d_ps_0_{y}x{x}.webp",
            full: "moonmist_manor/lv_anh_fullmoonh_d_ps_0_full.webp",
            max: [4, 3],
          },
        ],
      },
      {
        name: "Yeon's Barrier",
        tiles: [
          {
            id: 0,
            tile: "yeons_barrier/lv_anh_barrieroy_d_ps_0_{y}x{x}.webp",
            full: "yeons_barrier/lv_anh_barrieroy_d_ps_0_full.webp",
            max: [5, 5],
          },
        ],
      },
      {
        name: "Jeok's Barrier",
        tiles: [
          {
            id: 0,
            tile: "jeoks_barrier/lv_anh_barrieroj_d_ps_0_{y}x{x}.webp",
            full: "jeoks_barrier/lv_anh_barrieroj_d_ps_0_full.webp",
            max: [6, 4],
          },
        ],
      },
      {
        name: "Foul Hollow",
        tiles: [
          {
            id: 0,
            tile: "foul_hollow/lv_anh_deadsoulc_d_ps_0_{y}x{x}.webp",
            full: "foul_hollow/lv_anh_deadsoulc_d_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Bleak Edge",
        tiles: [
          {
            id: 1,
            tile: "bleak_edge/lv_anh_horizonold_d_ps_1_{y}x{x}.webp",
            full: "bleak_edge/lv_anh_horizonold_d_ps_1_full.webp",
            max: [5, 3],
          },
          {
            id: 4,
            tile: "bleak_edge/lv_anh_horizonold_d_ps_4_{y}x{x}.webp",
            full: "bleak_edge/lv_anh_horizonold_d_ps_4_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 2,
            tile: "secret_dungeon/lv_scd_anihc_ps_2_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_anihc_ps_2_full.webp",
            max: [18, 12],
          },
        ],
      },
    ],
  },
  {
    name: "East Luterra",
    areas: [
      {
        name: "Luterra Castle",
        tiles: [
          {
            id: 0,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_0_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_0_full.webp",
            max: [6, 3],
          },
          {
            id: 1,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_1_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_1_full.webp",
            max: [2, 3],
          },
          {
            id: 2,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_2_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_2_full.webp",
            max: [2, 3],
          },
          {
            id: 3,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_3_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_3_full.webp",
            max: [7, 10],
          },
          {
            id: 4,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_4_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_4_full.webp",
            max: [4, 4],
          },
          {
            id: 5,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_5_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_6_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_6_full.webp",
            max: [4, 4],
          },
          {
            id: 7,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_7_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_7_full.webp",
            max: [2, 2],
          },
          {
            id: 12,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_12_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_12_full.webp",
            max: [2, 1],
          },
          {
            id: 13,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_13_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_13_full.webp",
            max: [3, 2],
          },
          {
            id: 14,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_14_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_14_full.webp",
            max: [2, 2],
          },
          {
            id: 15,
            tile: "luterra_castle/lv_lut_lucastle_t_ps_15_{y}x{x}.webp",
            full: "luterra_castle/lv_lut_lucastle_t_ps_15_full.webp",
            max: [8, 7],
          },
        ],
      },
      {
        name: "Wavestrand Port",
        tiles: [
          {
            id: 0,
            tile: "wavestrand_port/lv_lut_mawport_t_ps_0_{y}x{x}.webp",
            full: "wavestrand_port/lv_lut_mawport_t_ps_0_full.webp",
            max: [3, 2],
          },
          {
            id: 2,
            tile: "wavestrand_port/lv_lut_mawport_t_ps_2_{y}x{x}.webp",
            full: "wavestrand_port/lv_lut_mawport_t_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "wavestrand_port/lv_lut_mawport_t_ps_3_{y}x{x}.webp",
            full: "wavestrand_port/lv_lut_mawport_t_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "wavestrand_port/lv_lut_mawport_t_ps_4_{y}x{x}.webp",
            full: "wavestrand_port/lv_lut_mawport_t_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "wavestrand_port/lv_lut_mawport_t_ps_5_{y}x{x}.webp",
            full: "wavestrand_port/lv_lut_mawport_t_ps_5_full.webp",
            max: [2, 3],
          },
          {
            id: 6,
            tile: "wavestrand_port/lv_lut_mawport_t_ps_6_{y}x{x}.webp",
            full: "wavestrand_port/lv_lut_mawport_t_ps_6_full.webp",
            max: [2, 2],
          },
          {
            id: 7,
            tile: "wavestrand_port/lv_lut_mawport_t_ps_7_{y}x{x}.webp",
            full: "wavestrand_port/lv_lut_mawport_t_ps_7_full.webp",
            max: [4, 3],
          },
        ],
      },
      {
        name: "Luterra Flamberg",
        tiles: [
          {
            id: 0,
            tile: "luterra_flamberg/lv_lut_mawport_t_ps_0_{y}x{x}.webp",
            full: "luterra_flamberg/lv_lut_mawport_t_ps_0_full.webp",
            max: [3, 2],
          },
          {
            id: 2,
            tile: "luterra_flamberg/lv_lut_mawport_t_ps_2_{y}x{x}.webp",
            full: "luterra_flamberg/lv_lut_mawport_t_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "luterra_flamberg/lv_lut_mawport_t_ps_3_{y}x{x}.webp",
            full: "luterra_flamberg/lv_lut_mawport_t_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "luterra_flamberg/lv_lut_mawport_t_ps_4_{y}x{x}.webp",
            full: "luterra_flamberg/lv_lut_mawport_t_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "luterra_flamberg/lv_lut_mawport_t_ps_5_{y}x{x}.webp",
            full: "luterra_flamberg/lv_lut_mawport_t_ps_5_full.webp",
            max: [2, 3],
          },
          {
            id: 6,
            tile: "luterra_flamberg/lv_lut_mawport_t_ps_6_{y}x{x}.webp",
            full: "luterra_flamberg/lv_lut_mawport_t_ps_6_full.webp",
            max: [2, 2],
          },
          {
            id: 7,
            tile: "luterra_flamberg/lv_lut_mawport_t_ps_7_{y}x{x}.webp",
            full: "luterra_flamberg/lv_lut_mawport_t_ps_7_full.webp",
            max: [4, 3],
          },
        ],
      },
      {
        name: "Dyorika Plain",
        tiles: [
          {
            id: 1,
            tile: "dyorika_plain/lv_lut_doplain_f_ps_1_{y}x{x}.webp",
            full: "dyorika_plain/lv_lut_doplain_f_ps_1_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Sunbright Hill",
        tiles: [
          {
            id: 0,
            tile: "sunbright_hill/lv_lut_sohill_f_ps_0_{y}x{x}.webp",
            full: "sunbright_hill/lv_lut_sohill_f_ps_0_full.webp",
            max: [5, 6],
          },
        ],
      },
      {
        name: "Flowering Orchard",
        tiles: [
          {
            id: 0,
            tile: "flowering_orchard/lv_lut_pearhabit_f_ps_0_{y}x{x}.webp",
            full: "flowering_orchard/lv_lut_pearhabit_f_ps_0_full.webp",
            max: [7, 7],
          },
          {
            id: 1,
            tile: "flowering_orchard/lv_lut_pearhabit_f_ps_1_{y}x{x}.webp",
            full: "flowering_orchard/lv_lut_pearhabit_f_ps_1_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Blackrose Chapel",
        tiles: [
          {
            id: 0,
            tile: "blackrose_chapel/lv_lut_brchurch_f_ps_0_{y}x{x}.webp",
            full: "blackrose_chapel/lv_lut_brchurch_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "blackrose_chapel/lv_lut_brchurch_f_ps_2_{y}x{x}.webp",
            full: "blackrose_chapel/lv_lut_brchurch_f_ps_2_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Leyar Terrace",
        tiles: [
          {
            id: 0,
            tile: "leyar_terrace/lv_lut_leterrace_f_ps_0_{y}x{x}.webp",
            full: "leyar_terrace/lv_lut_leterrace_f_ps_0_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Borea's Domain",
        tiles: [
          {
            id: 0,
            tile: "boreas_domain/lv_lut_bodomain_f_ps_0_{y}x{x}.webp",
            full: "boreas_domain/lv_lut_bodomain_f_ps_0_full.webp",
            max: [8, 7],
          },
        ],
      },
      {
        name: "Croconys Seashore",
        tiles: [
          {
            id: 1,
            tile: "croconys_seashore/lv_lut_crseasho_f_ps_1_{y}x{x}.webp",
            full: "croconys_seashore/lv_lut_crseasho_f_ps_1_full.webp",
            max: [5, 11],
          },
        ],
      },
      {
        name: "Blackrose Basement",
        tiles: [
          {
            id: 0,
            tile: "blackrose_basement/lv_lut_brcbase_d_ps_0_{y}x{x}.webp",
            full: "blackrose_basement/lv_lut_brcbase_d_ps_0_full.webp",
            max: [5, 7],
          },
        ],
      },
      {
        name: "Lostwind Cliff",
        tiles: [
          {
            id: 1,
            tile: "lostwind_cliff/lv_lut_bscliff_d_ps_1_{y}x{x}.webp",
            full: "lostwind_cliff/lv_lut_bscliff_d_ps_1_full.webp",
            max: [1, 3],
          },
        ],
      },
      {
        name: "Stormcry Grotto",
        tiles: [
          {
            id: 0,
            tile: "stormcry_grotto/lv_lut_crstorm_d_ps_0_{y}x{x}.webp",
            full: "stormcry_grotto/lv_lut_crstorm_d_ps_0_full.webp",
            max: [5, 6],
          },
        ],
      },
      {
        name: "Lastra Forest",
        tiles: [
          {
            id: 1,
            tile: "lastra_forest/lv_lut_lutomba_c_ps_1_{y}x{x}.webp",
            full: "lastra_forest/lv_lut_lutomba_c_ps_1_full.webp",
            max: [5, 6],
          },
        ],
      },
      {
        name: "Tomb of the Great King Luterra",
        tiles: [
          {
            id: 0,
            tile: "tomb_of_the_great_king_luterra/lv_lut_lutombb_c_ps_0_{y}x{x}.webp",
            full: "tomb_of_the_great_king_luterra/lv_lut_lutombb_c_ps_0_full.webp",
            max: [2, 6],
          },
        ],
      },
      {
        name: "Festival of Madness",
        tiles: [
          {
            id: 0,
            tile: "festival_of_madness/lv_lut_castlebole_i_ps_0_{y}x{x}.webp",
            full: "festival_of_madness/lv_lut_castlebole_i_ps_0_full.webp",
            max: [8, 7],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 2,
            tile: "secret_dungeon/lv_scd_luterane_ps_2_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_luterane_ps_2_full.webp",
            max: [9, 21],
          },
        ],
      },
    ],
  },
  {
    name: "West Luterra",
    areas: [
      {
        name: "Mount Zagoras",
        tiles: [
          {
            id: 0,
            tile: "mount_zagoras/lv_lut_zamount_f_ps_0_{y}x{x}.webp",
            full: "mount_zagoras/lv_lut_zamount_f_ps_0_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Lakebar",
        tiles: [
          {
            id: 1,
            tile: "lakebar/lv_lut_lakebar_f_ps_1_{y}x{x}.webp",
            full: "lakebar/lv_lut_lakebar_f_ps_1_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Medrick Monastery",
        tiles: [
          {
            id: 1,
            tile: "medrick_monastery/lv_lut_memonast_f_ps_1_{y}x{x}.webp",
            full: "medrick_monastery/lv_lut_memonast_f_ps_1_full.webp",
            max: [7, 7],
          },
          {
            id: 3,
            tile: "medrick_monastery/lv_lut_memonast_f_ps_3_{y}x{x}.webp",
            full: "medrick_monastery/lv_lut_memonast_f_ps_3_full.webp",
            max: [4, 4],
          },
          {
            id: 4,
            tile: "medrick_monastery/lv_lut_memonast_f_ps_4_{y}x{x}.webp",
            full: "medrick_monastery/lv_lut_memonast_f_ps_4_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Bilbrin Forest",
        tiles: [
          {
            id: 2,
            tile: "bilbrin_forest/lv_lut_biforest_f_ps_2_{y}x{x}.webp",
            full: "bilbrin_forest/lv_lut_biforest_f_ps_2_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Battlebound Plains",
        tiles: [
          {
            id: 0,
            tile: "battlebound_plains/lv_lut_pofbattle_f_ps_0_{y}x{x}.webp",
            full: "battlebound_plains/lv_lut_pofbattle_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Iron Lake",
        tiles: [
          {
            id: 1,
            tile: "iron_lake/lv_lut_lakebar_f_ps_1_{y}x{x}.webp",
            full: "iron_lake/lv_lut_lakebar_f_ps_1_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Brilliant Ridge",
        tiles: [
          {
            id: 1,
            tile: "brilliant_ridge/lv_lut_rishine_d_ps_1_{y}x{x}.webp",
            full: "brilliant_ridge/lv_lut_rishine_d_ps_1_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Gray Hammer Mine",
        tiles: [
          {
            id: 0,
            tile: "gray_hammer_mine/lv_lut_grayhmine_d_ps_0_{y}x{x}.webp",
            full: "gray_hammer_mine/lv_lut_grayhmine_d_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Glorious Wall",
        tiles: [
          {
            id: 2,
            tile: "glorious_wall/lv_lut_waglory_d_ps_2_{y}x{x}.webp",
            full: "glorious_wall/lv_lut_waglory_d_ps_2_full.webp",
            max: [7, 5],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 0,
            tile: "secret_dungeon/lv_scd_luterans_ps_0_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_luterans_ps_0_full.webp",
            max: [9, 21],
          },
        ],
      },
    ],
  },
  {
    name: "Feiton",
    areas: [
      {
        name: "Kalaja",
        tiles: [
          {
            id: 0,
            tile: "kalaja/lv_fat_karlajavil_t_ps_0_{y}x{x}.webp",
            full: "kalaja/lv_fat_karlajavil_t_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "kalaja/lv_fat_karlajavil_t_ps_1_{y}x{x}.webp",
            full: "kalaja/lv_fat_karlajavil_t_ps_1_full.webp",
            max: [4, 3],
          },
          {
            id: 2,
            tile: "kalaja/lv_fat_karlajavil_t_ps_2_{y}x{x}.webp",
            full: "kalaja/lv_fat_karlajavil_t_ps_2_full.webp",
            max: [3, 5],
          },
          {
            id: 3,
            tile: "kalaja/lv_fat_karlajavil_t_ps_3_{y}x{x}.webp",
            full: "kalaja/lv_fat_karlajavil_t_ps_3_full.webp",
            max: [6, 6],
          },
          {
            id: 4,
            tile: "kalaja/lv_fat_karlajavil_t_ps_4_{y}x{x}.webp",
            full: "kalaja/lv_fat_karlajavil_t_ps_4_full.webp",
            max: [7, 9],
          },
          {
            id: 5,
            tile: "kalaja/lv_fat_karlajavil_t_ps_5_{y}x{x}.webp",
            full: "kalaja/lv_fat_karlajavil_t_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "kalaja/lv_fat_karlajavil_t_ps_6_{y}x{x}.webp",
            full: "kalaja/lv_fat_karlajavil_t_ps_6_full.webp",
            max: [2, 1],
          },
          {
            id: 7,
            tile: "kalaja/lv_fat_karlajavil_t_ps_7_{y}x{x}.webp",
            full: "kalaja/lv_fat_karlajavil_t_ps_7_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Nameless Valley",
        tiles: [
          {
            id: 0,
            tile: "nameless_valley/lv_fat_unravin_f_ps_0_{y}x{x}.webp",
            full: "nameless_valley/lv_fat_unravin_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "nameless_valley/lv_fat_unravin_f_ps_1_{y}x{x}.webp",
            full: "nameless_valley/lv_fat_unravin_f_ps_1_full.webp",
            max: [5, 6],
          },
          {
            id: 2,
            tile: "nameless_valley/lv_fat_unravin_f_ps_2_{y}x{x}.webp",
            full: "nameless_valley/lv_fat_unravin_f_ps_2_full.webp",
            max: [4, 4],
          },
          {
            id: 3,
            tile: "nameless_valley/lv_fat_unravin_f_ps_3_{y}x{x}.webp",
            full: "nameless_valley/lv_fat_unravin_f_ps_3_full.webp",
            max: [1, 2],
          },
          {
            id: 4,
            tile: "nameless_valley/lv_fat_unravin_f_ps_4_{y}x{x}.webp",
            full: "nameless_valley/lv_fat_unravin_f_ps_4_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Wailing Swamp",
        tiles: [
          {
            id: 1,
            tile: "wailing_swamp/lv_fat_wailsw_f_ps_1_{y}x{x}.webp",
            full: "wailing_swamp/lv_fat_wailsw_f_ps_1_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Shady Cliff",
        tiles: [
          {
            id: 0,
            tile: "shady_cliff/lv_fat_shcliff_f_ps_0_{y}x{x}.webp",
            full: "shady_cliff/lv_fat_shcliff_f_ps_0_full.webp",
            max: [6, 7],
          },
          {
            id: 1,
            tile: "shady_cliff/lv_fat_shcliff_f_ps_1_{y}x{x}.webp",
            full: "shady_cliff/lv_fat_shcliff_f_ps_1_full.webp",
            max: [1, 2],
          },
          {
            id: 2,
            tile: "shady_cliff/lv_fat_shcliff_f_ps_2_{y}x{x}.webp",
            full: "shady_cliff/lv_fat_shcliff_f_ps_2_full.webp",
            max: [2, 1],
          },
        ],
      },
      {
        name: "Red Moonshade",
        tiles: [
          {
            id: 0,
            tile: "red_moonshade/lv_fat_prmoon_f_ps_0_{y}x{x}.webp",
            full: "red_moonshade/lv_fat_prmoon_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "red_moonshade/lv_fat_prmoon_f_ps_1_{y}x{x}.webp",
            full: "red_moonshade/lv_fat_prmoon_f_ps_1_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "red_moonshade/lv_fat_prmoon_f_ps_2_{y}x{x}.webp",
            full: "red_moonshade/lv_fat_prmoon_f_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "red_moonshade/lv_fat_prmoon_f_ps_3_{y}x{x}.webp",
            full: "red_moonshade/lv_fat_prmoon_f_ps_3_full.webp",
            max: [1, 1],
          },
          {
            id: 4,
            tile: "red_moonshade/lv_fat_prmoon_f_ps_4_{y}x{x}.webp",
            full: "red_moonshade/lv_fat_prmoon_f_ps_4_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Shadow Monastery",
        tiles: [
          {
            id: 2,
            tile: "shadow_monastery/lv_fat_shmonas_i_ps_2_{y}x{x}.webp",
            full: "shadow_monastery/lv_fat_shmonas_i_ps_2_full.webp",
            max: [2, 4],
          },
        ],
      },
      {
        name: "Feiton Varukas",
        tiles: [
          {
            id: 0,
            tile: "feiton_varukas/lv_fat_unravin_f_ps_0_{y}x{x}.webp",
            full: "feiton_varukas/lv_fat_unravin_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "feiton_varukas/lv_fat_unravin_f_ps_1_{y}x{x}.webp",
            full: "feiton_varukas/lv_fat_unravin_f_ps_1_full.webp",
            max: [5, 6],
          },
          {
            id: 2,
            tile: "feiton_varukas/lv_fat_unravin_f_ps_2_{y}x{x}.webp",
            full: "feiton_varukas/lv_fat_unravin_f_ps_2_full.webp",
            max: [4, 4],
          },
          {
            id: 3,
            tile: "feiton_varukas/lv_fat_unravin_f_ps_3_{y}x{x}.webp",
            full: "feiton_varukas/lv_fat_unravin_f_ps_3_full.webp",
            max: [1, 2],
          },
          {
            id: 4,
            tile: "feiton_varukas/lv_fat_unravin_f_ps_4_{y}x{x}.webp",
            full: "feiton_varukas/lv_fat_unravin_f_ps_4_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Ruined Castle",
        tiles: [
          {
            id: 0,
            tile: "ruined_castle/lv_fat_ocastle_d_ps_0_{y}x{x}.webp",
            full: "ruined_castle/lv_fat_ocastle_d_ps_0_full.webp",
            max: [3, 4],
          },
          {
            id: 1,
            tile: "ruined_castle/lv_fat_ocastle_d_ps_1_{y}x{x}.webp",
            full: "ruined_castle/lv_fat_ocastle_d_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "ruined_castle/lv_fat_ocastle_d_ps_2_{y}x{x}.webp",
            full: "ruined_castle/lv_fat_ocastle_d_ps_2_full.webp",
            max: [1, 2],
          },
          {
            id: 3,
            tile: "ruined_castle/lv_fat_ocastle_d_ps_3_{y}x{x}.webp",
            full: "ruined_castle/lv_fat_ocastle_d_ps_3_full.webp",
            max: [3, 4],
          },
          {
            id: 0,
            tile: "ruined_castle/lv_fat_ocastlea_d_ps_0_{y}x{x}.webp",
            full: "ruined_castle/lv_fat_ocastlea_d_ps_0_full.webp",
            max: [3, 4],
          },
          {
            id: 3,
            tile: "ruined_castle/lv_fat_ocastlea_d_ps_3_{y}x{x}.webp",
            full: "ruined_castle/lv_fat_ocastlea_d_ps_3_full.webp",
            max: [3, 4],
          },
          {
            id: 4,
            tile: "ruined_castle/lv_fat_ocastlea_d_ps_4_{y}x{x}.webp",
            full: "ruined_castle/lv_fat_ocastlea_d_ps_4_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Cave of Sin",
        tiles: [
          {
            id: 0,
            tile: "cave_of_sin/lv_fat_caves_d_ps_0_{y}x{x}.webp",
            full: "cave_of_sin/lv_fat_caves_d_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Dark Rain Plains",
        tiles: [
          {
            id: 0,
            tile: "dark_rain_plains/lv_fat_brainp_i_ps_0_{y}x{x}.webp",
            full: "dark_rain_plains/lv_fat_brainp_i_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 0,
            tile: "secret_dungeon/lv_scd_faten_ps_0_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_faten_ps_0_full.webp",
            max: [14, 20],
          },
        ],
      },
    ],
  },
  {
    name: "Tortoyk",
    areas: [
      {
        name: "Mokoko Village",
        tiles: [
          {
            id: 0,
            tile: "mokoko_village/lv_tot_movillage_t_ps_0_{y}x{x}.webp",
            full: "mokoko_village/lv_tot_movillage_t_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 7,
            tile: "mokoko_village/lv_tot_movillage_t_ps_7_{y}x{x}.webp",
            full: "mokoko_village/lv_tot_movillage_t_ps_7_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Seaswept Woods",
        tiles: [
          {
            id: 0,
            tile: "seaswept_woods/lv_tot_toforest_f_ps_0_{y}x{x}.webp",
            full: "seaswept_woods/lv_tot_toforest_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Sweetwater Forest",
        tiles: [
          {
            id: 2,
            tile: "sweetwater_forest/lv_tot_moforest_f_ps_2_{y}x{x}.webp",
            full: "sweetwater_forest/lv_tot_moforest_f_ps_2_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Skyreach Steppe",
        tiles: [
          {
            id: 0,
            tile: "skyreach_steppe/lv_tot_roforest_f_ps_0_{y}x{x}.webp",
            full: "skyreach_steppe/lv_tot_roforest_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Forest of Giants",
        tiles: [
          {
            id: 0,
            tile: "forest_of_giants/lv_tot_giforest_f_ps_0_{y}x{x}.webp",
            full: "forest_of_giants/lv_tot_giforest_f_ps_0_full.webp",
            max: [8, 8],
          },
        ],
      },
      {
        name: "Tortoyk Parapara Cruise",
        tiles: [
          {
            id: 0,
            tile: "tortoyk_parapara_cruise/lv_tot_toforest_f_ps_0_{y}x{x}.webp",
            full: "tortoyk_parapara_cruise/lv_tot_toforest_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Pirate Den",
        tiles: [
          {
            id: 0,
            tile: "pirate_den/lv_tot_pirateden_d_ps_0_{y}x{x}.webp",
            full: "pirate_den/lv_tot_pirateden_d_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Tortoyk's Heart",
        tiles: [
          {
            id: 0,
            tile: "tortoyks_heart/lv_tot_intortoyk_d_ps_0_{y}x{x}.webp",
            full: "tortoyks_heart/lv_tot_intortoyk_d_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 1,
            tile: "secret_dungeon/lv_scd_tortoyk_ps_1_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_tortoyk_ps_1_full.webp",
            max: [10, 13],
          },
        ],
      },
    ],
  },
  {
    name: "North Vern",
    areas: [
      {
        name: "Rania Village",
        tiles: [
          {
            id: 0,
            tile: "rania_village/lv_ber_raniat_t_ps_0_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_0_full.webp",
            max: [3, 4],
          },
          {
            id: 1,
            tile: "rania_village/lv_ber_raniat_t_ps_1_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_1_full.webp",
            max: [4, 5],
          },
          {
            id: 2,
            tile: "rania_village/lv_ber_raniat_t_ps_2_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 4,
            tile: "rania_village/lv_ber_raniat_t_ps_4_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "rania_village/lv_ber_raniat_t_ps_5_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_5_full.webp",
            max: [3, 3],
          },
          {
            id: 6,
            tile: "rania_village/lv_ber_raniat_t_ps_6_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_6_full.webp",
            max: [4, 3],
          },
          {
            id: 7,
            tile: "rania_village/lv_ber_raniat_t_ps_7_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_7_full.webp",
            max: [3, 2],
          },
          {
            id: 8,
            tile: "rania_village/lv_ber_raniat_t_ps_8_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_8_full.webp",
            max: [3, 3],
          },
          {
            id: 10,
            tile: "rania_village/lv_ber_raniat_t_ps_10_{y}x{x}.webp",
            full: "rania_village/lv_ber_raniat_t_ps_10_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Vern Castle",
        tiles: [
          {
            id: 0,
            tile: "vern_castle/lv_ber_berncastle_t_ps_0_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_0_full.webp",
            max: [5, 5],
          },
          {
            id: 1,
            tile: "vern_castle/lv_ber_berncastle_t_ps_1_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_1_full.webp",
            max: [3, 2],
          },
          {
            id: 2,
            tile: "vern_castle/lv_ber_berncastle_t_ps_2_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_2_full.webp",
            max: [6, 5],
          },
          {
            id: 3,
            tile: "vern_castle/lv_ber_berncastle_t_ps_3_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_3_full.webp",
            max: [3, 3],
          },
          {
            id: 5,
            tile: "vern_castle/lv_ber_berncastle_t_ps_5_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_5_full.webp",
            max: [3, 4],
          },
          {
            id: 6,
            tile: "vern_castle/lv_ber_berncastle_t_ps_6_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_6_full.webp",
            max: [5, 5],
          },
          {
            id: 7,
            tile: "vern_castle/lv_ber_berncastle_t_ps_7_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_7_full.webp",
            max: [4, 5],
          },
          {
            id: 8,
            tile: "vern_castle/lv_ber_berncastle_t_ps_8_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_8_full.webp",
            max: [6, 5],
          },
          {
            id: 9,
            tile: "vern_castle/lv_ber_berncastle_t_ps_9_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_9_full.webp",
            max: [7, 11],
          },
          {
            id: 11,
            tile: "vern_castle/lv_ber_berncastle_t_ps_11_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_11_full.webp",
            max: [3, 3],
          },
          {
            id: 12,
            tile: "vern_castle/lv_ber_berncastle_t_ps_12_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_12_full.webp",
            max: [3, 3],
          },
          {
            id: 14,
            tile: "vern_castle/lv_ber_berncastle_t_ps_14_{y}x{x}.webp",
            full: "vern_castle/lv_ber_berncastle_t_ps_14_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Port Krona",
        tiles: [
          {
            id: 0,
            tile: "port_krona/lv_ber_kronap_f_ps_0_{y}x{x}.webp",
            full: "port_krona/lv_ber_kronap_f_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "port_krona/lv_ber_kronap_f_ps_1_{y}x{x}.webp",
            full: "port_krona/lv_ber_kronap_f_ps_1_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Parna Forest",
        tiles: [
          {
            id: 0,
            tile: "parna_forest/lv_ber_parna_f_ps_0_{y}x{x}.webp",
            full: "parna_forest/lv_ber_parna_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Fesnar Highland",
        tiles: [
          {
            id: 0,
            tile: "fesnar_highland/lv_ber_fesnar_f_ps_0_{y}x{x}.webp",
            full: "fesnar_highland/lv_ber_fesnar_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Vernese Forest",
        tiles: [
          {
            id: 0,
            tile: "vernese_forest/lv_ber_bernilf_f_ps_0_{y}x{x}.webp",
            full: "vernese_forest/lv_ber_bernilf_f_ps_0_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Balankar Mountains",
        tiles: [
          {
            id: 0,
            tile: "balankar_mountains/lv_ber_valankarm_f_ps_0_{y}x{x}.webp",
            full: "balankar_mountains/lv_ber_valankarm_f_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Anemos",
        tiles: [
          {
            id: 0,
            tile: "anemos/lv_ber_kronap_f_ps_0_{y}x{x}.webp",
            full: "anemos/lv_ber_kronap_f_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "anemos/lv_ber_kronap_f_ps_1_{y}x{x}.webp",
            full: "anemos/lv_ber_kronap_f_ps_1_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Gorgon's Nest",
        tiles: [
          {
            id: 0,
            tile: "gorgons_nest/lv_ber_gorgonn_d_ps_0_{y}x{x}.webp",
            full: "gorgons_nest/lv_ber_gorgonn_d_ps_0_full.webp",
            max: [5, 5],
          },
        ],
      },
      {
        name: "Ancient Elveria",
        tiles: [
          {
            id: 0,
            tile: "ancient_elveria/lv_ber_elveria_d_ps_0_{y}x{x}.webp",
            full: "ancient_elveria/lv_ber_elveria_d_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 0,
            tile: "secret_dungeon/lv_scd_bern_ps_0_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_bern_ps_0_full.webp",
            max: [10, 25],
          },
        ],
      },
    ],
  },
  {
    name: "Yorn",
    areas: [
      {
        name: "Great Castle",
        tiles: [
          {
            id: 0,
            tile: "great_castle/lv_yor_greatcs_t_ps_0_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_0_full.webp",
            max: [2, 1],
          },
          {
            id: 1,
            tile: "great_castle/lv_yor_greatcs_t_ps_1_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_1_full.webp",
            max: [3, 4],
          },
          {
            id: 2,
            tile: "great_castle/lv_yor_greatcs_t_ps_2_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_2_full.webp",
            max: [4, 2],
          },
          {
            id: 3,
            tile: "great_castle/lv_yor_greatcs_t_ps_3_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_3_full.webp",
            max: [4, 4],
          },
          {
            id: 4,
            tile: "great_castle/lv_yor_greatcs_t_ps_4_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_4_full.webp",
            max: [4, 5],
          },
          {
            id: 5,
            tile: "great_castle/lv_yor_greatcs_t_ps_5_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_5_full.webp",
            max: [3, 3],
          },
          {
            id: 7,
            tile: "great_castle/lv_yor_greatcs_t_ps_7_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_7_full.webp",
            max: [1, 1],
          },
          {
            id: 8,
            tile: "great_castle/lv_yor_greatcs_t_ps_8_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_8_full.webp",
            max: [4, 3],
          },
          {
            id: 9,
            tile: "great_castle/lv_yor_greatcs_t_ps_9_{y}x{x}.webp",
            full: "great_castle/lv_yor_greatcs_t_ps_9_full.webp",
            max: [4, 5],
          },
        ],
      },
      {
        name: "Yorn's Cradle",
        tiles: [
          {
            id: 0,
            tile: "yorns_cradle/lv_yor_lbeginning_f_ps_0_{y}x{x}.webp",
            full: "yorns_cradle/lv_yor_lbeginning_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "yorns_cradle/lv_yor_lbeginning_f_ps_1_{y}x{x}.webp",
            full: "yorns_cradle/lv_yor_lbeginning_f_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "yorns_cradle/lv_yor_lbeginning_f_ps_2_{y}x{x}.webp",
            full: "yorns_cradle/lv_yor_lbeginning_f_ps_2_full.webp",
            max: [2, 1],
          },
          {
            id: 3,
            tile: "yorns_cradle/lv_yor_lbeginning_f_ps_3_{y}x{x}.webp",
            full: "yorns_cradle/lv_yor_lbeginning_f_ps_3_full.webp",
            max: [2, 3],
          },
          {
            id: 4,
            tile: "yorns_cradle/lv_yor_lbeginning_f_ps_4_{y}x{x}.webp",
            full: "yorns_cradle/lv_yor_lbeginning_f_ps_4_full.webp",
            max: [8, 8],
          },
        ],
      },
      {
        name: "Unfinished Garden",
        tiles: [
          {
            id: 0,
            tile: "unfinished_garden/lv_yor_ugarden_f_ps_0_{y}x{x}.webp",
            full: "unfinished_garden/lv_yor_ugarden_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "unfinished_garden/lv_yor_ugarden_f_ps_1_{y}x{x}.webp",
            full: "unfinished_garden/lv_yor_ugarden_f_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "unfinished_garden/lv_yor_ugarden_f_ps_3_{y}x{x}.webp",
            full: "unfinished_garden/lv_yor_ugarden_f_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Black Anvil Mine",
        tiles: [
          {
            id: 0,
            tile: "black_anvil_mine/lv_yor_firstwp_f_ps_0_{y}x{x}.webp",
            full: "black_anvil_mine/lv_yor_firstwp_f_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 1,
            tile: "black_anvil_mine/lv_yor_firstwp_f_ps_1_{y}x{x}.webp",
            full: "black_anvil_mine/lv_yor_firstwp_f_ps_1_full.webp",
            max: [7, 7],
          },
          {
            id: 2,
            tile: "black_anvil_mine/lv_yor_firstwp_f_ps_2_{y}x{x}.webp",
            full: "black_anvil_mine/lv_yor_firstwp_f_ps_2_full.webp",
            max: [3, 2],
          },
          {
            id: 3,
            tile: "black_anvil_mine/lv_yor_firstwp_f_ps_3_{y}x{x}.webp",
            full: "black_anvil_mine/lv_yor_firstwp_f_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Iron Hammer Mine",
        tiles: [
          {
            id: 0,
            tile: "iron_hammer_mine/lv_yor_secondwp_f_ps_0_{y}x{x}.webp",
            full: "iron_hammer_mine/lv_yor_secondwp_f_ps_0_full.webp",
            max: [7, 7],
          },
          {
            id: 1,
            tile: "iron_hammer_mine/lv_yor_secondwp_f_ps_1_{y}x{x}.webp",
            full: "iron_hammer_mine/lv_yor_secondwp_f_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "iron_hammer_mine/lv_yor_secondwp_f_ps_2_{y}x{x}.webp",
            full: "iron_hammer_mine/lv_yor_secondwp_f_ps_2_full.webp",
            max: [2, 1],
          },
        ],
      },
      {
        name: "Hall of Promise",
        tiles: [
          {
            id: 0,
            tile: "hall_of_promise/lv_yor_lpromise_f_ps_0_{y}x{x}.webp",
            full: "hall_of_promise/lv_yor_lpromise_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "hall_of_promise/lv_yor_lpromise_f_ps_1_{y}x{x}.webp",
            full: "hall_of_promise/lv_yor_lpromise_f_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "hall_of_promise/lv_yor_lpromise_f_ps_4_{y}x{x}.webp",
            full: "hall_of_promise/lv_yor_lpromise_f_ps_4_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "hall_of_promise/lv_yor_lpromise_f_ps_5_{y}x{x}.webp",
            full: "hall_of_promise/lv_yor_lpromise_f_ps_5_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Scorched Ship",
        tiles: [
          {
            id: 3,
            tile: "scorched_ship/lv_yor_scorchedsp_i_ps_3_{y}x{x}.webp",
            full: "scorched_ship/lv_yor_scorchedsp_i_ps_3_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Jewelry Storage",
        tiles: [
          {
            id: 1,
            tile: "jewelry_storage/lv_yor_jewelah_i_ps_1_{y}x{x}.webp",
            full: "jewelry_storage/lv_yor_jewelah_i_ps_1_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Giant Whirlpool",
        tiles: [
          {
            id: 0,
            tile: "giant_whirlpool/lv_yor_secondwpgv_i_ps_0_{y}x{x}.webp",
            full: "giant_whirlpool/lv_yor_secondwpgv_i_ps_0_full.webp",
            max: [7, 7],
          },
        ],
      },
      {
        name: "Umar Sculpture",
        tiles: [
          {
            id: 0,
            tile: "umar_sculpture/lv_yor_lpromisegu_i_ps_0_{y}x{x}.webp",
            full: "umar_sculpture/lv_yor_lpromisegu_i_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "The Seasmith",
        tiles: [
          {
            id: 0,
            tile: "the_seasmith/lv_yor_lbeginning_f_ps_0_{y}x{x}.webp",
            full: "the_seasmith/lv_yor_lbeginning_f_ps_0_full.webp",
            max: [6, 6],
          },
          {
            id: 1,
            tile: "the_seasmith/lv_yor_lbeginning_f_ps_1_{y}x{x}.webp",
            full: "the_seasmith/lv_yor_lbeginning_f_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "the_seasmith/lv_yor_lbeginning_f_ps_2_{y}x{x}.webp",
            full: "the_seasmith/lv_yor_lbeginning_f_ps_2_full.webp",
            max: [2, 1],
          },
          {
            id: 3,
            tile: "the_seasmith/lv_yor_lbeginning_f_ps_3_{y}x{x}.webp",
            full: "the_seasmith/lv_yor_lbeginning_f_ps_3_full.webp",
            max: [2, 3],
          },
          {
            id: 4,
            tile: "the_seasmith/lv_yor_lbeginning_f_ps_4_{y}x{x}.webp",
            full: "the_seasmith/lv_yor_lbeginning_f_ps_4_full.webp",
            max: [8, 8],
          },
        ],
      },
      {
        name: "Wonderful Brewery",
        tiles: [
          {
            id: 0,
            tile: "wonderful_brewery/lv_yor_awesomeb_d_ps_0_{y}x{x}.webp",
            full: "wonderful_brewery/lv_yor_awesomeb_d_ps_0_full.webp",
            max: [4, 5],
          },
          {
            id: 1,
            tile: "wonderful_brewery/lv_yor_awesomeb_d_ps_1_{y}x{x}.webp",
            full: "wonderful_brewery/lv_yor_awesomeb_d_ps_1_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Ark of Arrogance",
        tiles: [
          {
            id: 0,
            tile: "ark_of_arrogance/lv_yor_arroganta_d_ps_0_{y}x{x}.webp",
            full: "ark_of_arrogance/lv_yor_arroganta_d_ps_0_full.webp",
            max: [4, 4],
          },
          {
            id: 1,
            tile: "ark_of_arrogance/lv_yor_arroganta_d_ps_1_{y}x{x}.webp",
            full: "ark_of_arrogance/lv_yor_arroganta_d_ps_1_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 0,
            tile: "secret_dungeon/lv_scd_yorn_ps_0_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_yorn_ps_0_full.webp",
            max: [15, 39],
          },
        ],
      },
    ],
  },
  {
    name: "Punika",
    areas: [
      {
        name: "Nia Village",
        tiles: [
          {
            id: 0,
            tile: "nia_village/lv_pap_niatown_t_ps_0_{y}x{x}.webp",
            full: "nia_village/lv_pap_niatown_t_ps_0_full.webp",
            max: [6, 5],
          },
          {
            id: 1,
            tile: "nia_village/lv_pap_niatown_t_ps_1_{y}x{x}.webp",
            full: "nia_village/lv_pap_niatown_t_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "nia_village/lv_pap_niatown_t_ps_2_{y}x{x}.webp",
            full: "nia_village/lv_pap_niatown_t_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "nia_village/lv_pap_niatown_t_ps_3_{y}x{x}.webp",
            full: "nia_village/lv_pap_niatown_t_ps_3_full.webp",
            max: [3, 3],
          },
          {
            id: 4,
            tile: "nia_village/lv_pap_niatown_t_ps_4_{y}x{x}.webp",
            full: "nia_village/lv_pap_niatown_t_ps_4_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "nia_village/lv_pap_niatown_t_ps_5_{y}x{x}.webp",
            full: "nia_village/lv_pap_niatown_t_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "nia_village/lv_pap_niatown_t_ps_6_{y}x{x}.webp",
            full: "nia_village/lv_pap_niatown_t_ps_6_full.webp",
            max: [4, 3],
          },
        ],
      },
      {
        name: "Tideshelf Path",
        tiles: [
          {
            id: 0,
            tile: "tideshelf_path/lv_pap_scoast_f_ps_0_{y}x{x}.webp",
            full: "tideshelf_path/lv_pap_scoast_f_ps_0_full.webp",
            max: [5, 5],
          },
          {
            id: 1,
            tile: "tideshelf_path/lv_pap_scoast_f_ps_1_{y}x{x}.webp",
            full: "tideshelf_path/lv_pap_scoast_f_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "tideshelf_path/lv_pap_scoast_f_ps_2_{y}x{x}.webp",
            full: "tideshelf_path/lv_pap_scoast_f_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "tideshelf_path/lv_pap_scoast_f_ps_3_{y}x{x}.webp",
            full: "tideshelf_path/lv_pap_scoast_f_ps_3_full.webp",
            max: [1, 1],
          },
          {
            id: 4,
            tile: "tideshelf_path/lv_pap_scoast_f_ps_4_{y}x{x}.webp",
            full: "tideshelf_path/lv_pap_scoast_f_ps_4_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "tideshelf_path/lv_pap_scoast_f_ps_5_{y}x{x}.webp",
            full: "tideshelf_path/lv_pap_scoast_f_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "tideshelf_path/lv_pap_scoast_f_ps_6_{y}x{x}.webp",
            full: "tideshelf_path/lv_pap_scoast_f_ps_6_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Starsand Beach",
        tiles: [
          {
            id: 0,
            tile: "starsand_beach/lv_pap_starsb_f_ps_0_{y}x{x}.webp",
            full: "starsand_beach/lv_pap_starsb_f_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "starsand_beach/lv_pap_starsb_f_ps_1_{y}x{x}.webp",
            full: "starsand_beach/lv_pap_starsb_f_ps_1_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "starsand_beach/lv_pap_starsb_f_ps_2_{y}x{x}.webp",
            full: "starsand_beach/lv_pap_starsb_f_ps_2_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Tikatika Colony",
        tiles: [
          {
            id: 0,
            tile: "tikatika_colony/lv_pap_ticac_f_ps_0_{y}x{x}.webp",
            full: "tikatika_colony/lv_pap_ticac_f_ps_0_full.webp",
            max: [5, 5],
          },
          {
            id: 1,
            tile: "tikatika_colony/lv_pap_ticac_f_ps_1_{y}x{x}.webp",
            full: "tikatika_colony/lv_pap_ticac_f_ps_1_full.webp",
            max: [4, 2],
          },
          {
            id: 2,
            tile: "tikatika_colony/lv_pap_ticac_f_ps_2_{y}x{x}.webp",
            full: "tikatika_colony/lv_pap_ticac_f_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "tikatika_colony/lv_pap_ticac_f_ps_3_{y}x{x}.webp",
            full: "tikatika_colony/lv_pap_ticac_f_ps_3_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Secret Forest",
        tiles: [
          {
            id: 0,
            tile: "secret_forest/lv_pap_sforest_f_ps_0_{y}x{x}.webp",
            full: "secret_forest/lv_pap_sforest_f_ps_0_full.webp",
            max: [4, 4],
          },
          {
            id: 1,
            tile: "secret_forest/lv_pap_sforest_f_ps_1_{y}x{x}.webp",
            full: "secret_forest/lv_pap_sforest_f_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "secret_forest/lv_pap_sforest_f_ps_2_{y}x{x}.webp",
            full: "secret_forest/lv_pap_sforest_f_ps_2_full.webp",
            max: [2, 4],
          },
        ],
      },
      {
        name: "Punika Kleanoi",
        tiles: [
          {
            id: 0,
            tile: "punika_kleanoi/lv_pap_scoast_f_ps_0_{y}x{x}.webp",
            full: "punika_kleanoi/lv_pap_scoast_f_ps_0_full.webp",
            max: [5, 5],
          },
          {
            id: 1,
            tile: "punika_kleanoi/lv_pap_scoast_f_ps_1_{y}x{x}.webp",
            full: "punika_kleanoi/lv_pap_scoast_f_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "punika_kleanoi/lv_pap_scoast_f_ps_2_{y}x{x}.webp",
            full: "punika_kleanoi/lv_pap_scoast_f_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "punika_kleanoi/lv_pap_scoast_f_ps_3_{y}x{x}.webp",
            full: "punika_kleanoi/lv_pap_scoast_f_ps_3_full.webp",
            max: [1, 1],
          },
          {
            id: 4,
            tile: "punika_kleanoi/lv_pap_scoast_f_ps_4_{y}x{x}.webp",
            full: "punika_kleanoi/lv_pap_scoast_f_ps_4_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "punika_kleanoi/lv_pap_scoast_f_ps_5_{y}x{x}.webp",
            full: "punika_kleanoi/lv_pap_scoast_f_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "punika_kleanoi/lv_pap_scoast_f_ps_6_{y}x{x}.webp",
            full: "punika_kleanoi/lv_pap_scoast_f_ps_6_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Tranquil Inath Cliff",
        tiles: [
          {
            id: 0,
            tile: "tranquil_inath_cliff/lv_pap_starsb_f_ps_0_{y}x{x}.webp",
            full: "tranquil_inath_cliff/lv_pap_starsb_f_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "tranquil_inath_cliff/lv_pap_starsb_f_ps_1_{y}x{x}.webp",
            full: "tranquil_inath_cliff/lv_pap_starsb_f_ps_1_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "tranquil_inath_cliff/lv_pap_starsb_f_ps_2_{y}x{x}.webp",
            full: "tranquil_inath_cliff/lv_pap_starsb_f_ps_2_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Tropical Fruit Orchard",
        tiles: [
          {
            id: 0,
            tile: "tropical_fruit_orchard/lv_pap_starsb_f_ps_0_{y}x{x}.webp",
            full: "tropical_fruit_orchard/lv_pap_starsb_f_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "tropical_fruit_orchard/lv_pap_starsb_f_ps_1_{y}x{x}.webp",
            full: "tropical_fruit_orchard/lv_pap_starsb_f_ps_1_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "tropical_fruit_orchard/lv_pap_starsb_f_ps_2_{y}x{x}.webp",
            full: "tropical_fruit_orchard/lv_pap_starsb_f_ps_2_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Sleepy Hot Spring Bath",
        tiles: [
          {
            id: 0,
            tile: "sleepy_hot_spring_bath/lv_pap_starsb_f_ps_0_{y}x{x}.webp",
            full: "sleepy_hot_spring_bath/lv_pap_starsb_f_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "sleepy_hot_spring_bath/lv_pap_starsb_f_ps_1_{y}x{x}.webp",
            full: "sleepy_hot_spring_bath/lv_pap_starsb_f_ps_1_full.webp",
            max: [6, 6],
          },
          {
            id: 2,
            tile: "sleepy_hot_spring_bath/lv_pap_starsb_f_ps_2_{y}x{x}.webp",
            full: "sleepy_hot_spring_bath/lv_pap_starsb_f_ps_2_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Inside the Western Garden",
        tiles: [
          {
            id: 0,
            tile: "inside_the_western_garden/lv_pap_niatown_t_ps_0_{y}x{x}.webp",
            full: "inside_the_western_garden/lv_pap_niatown_t_ps_0_full.webp",
            max: [6, 5],
          },
          {
            id: 1,
            tile: "inside_the_western_garden/lv_pap_niatown_t_ps_1_{y}x{x}.webp",
            full: "inside_the_western_garden/lv_pap_niatown_t_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "inside_the_western_garden/lv_pap_niatown_t_ps_2_{y}x{x}.webp",
            full: "inside_the_western_garden/lv_pap_niatown_t_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "inside_the_western_garden/lv_pap_niatown_t_ps_3_{y}x{x}.webp",
            full: "inside_the_western_garden/lv_pap_niatown_t_ps_3_full.webp",
            max: [3, 3],
          },
          {
            id: 4,
            tile: "inside_the_western_garden/lv_pap_niatown_t_ps_4_{y}x{x}.webp",
            full: "inside_the_western_garden/lv_pap_niatown_t_ps_4_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "inside_the_western_garden/lv_pap_niatown_t_ps_5_{y}x{x}.webp",
            full: "inside_the_western_garden/lv_pap_niatown_t_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "inside_the_western_garden/lv_pap_niatown_t_ps_6_{y}x{x}.webp",
            full: "inside_the_western_garden/lv_pap_niatown_t_ps_6_full.webp",
            max: [4, 3],
          },
        ],
      },
      {
        name: "Mellow Beach",
        tiles: [
          {
            id: 0,
            tile: "mellow_beach/lv_pap_scoast_f_ps_0_{y}x{x}.webp",
            full: "mellow_beach/lv_pap_scoast_f_ps_0_full.webp",
            max: [5, 5],
          },
          {
            id: 1,
            tile: "mellow_beach/lv_pap_scoast_f_ps_1_{y}x{x}.webp",
            full: "mellow_beach/lv_pap_scoast_f_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "mellow_beach/lv_pap_scoast_f_ps_2_{y}x{x}.webp",
            full: "mellow_beach/lv_pap_scoast_f_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "mellow_beach/lv_pap_scoast_f_ps_3_{y}x{x}.webp",
            full: "mellow_beach/lv_pap_scoast_f_ps_3_full.webp",
            max: [1, 1],
          },
          {
            id: 4,
            tile: "mellow_beach/lv_pap_scoast_f_ps_4_{y}x{x}.webp",
            full: "mellow_beach/lv_pap_scoast_f_ps_4_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "mellow_beach/lv_pap_scoast_f_ps_5_{y}x{x}.webp",
            full: "mellow_beach/lv_pap_scoast_f_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "mellow_beach/lv_pap_scoast_f_ps_6_{y}x{x}.webp",
            full: "mellow_beach/lv_pap_scoast_f_ps_6_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Naruna Hot Springs",
        tiles: [
          {
            id: 2,
            tile: "naruna_hot_springs/lv_pap_naskas_d_ps_2_{y}x{x}.webp",
            full: "naruna_hot_springs/lv_pap_naskas_d_ps_2_full.webp",
            max: [3, 3],
          },
          {
            id: 3,
            tile: "naruna_hot_springs/lv_pap_naskas_d_ps_3_{y}x{x}.webp",
            full: "naruna_hot_springs/lv_pap_naskas_d_ps_3_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Oreha's Well",
        tiles: [
          {
            id: 0,
            tile: "orehas_well/lv_pap_orehaw_d_ps_0_{y}x{x}.webp",
            full: "orehas_well/lv_pap_orehaw_d_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "orehas_well/lv_pap_orehaw_d_ps_1_{y}x{x}.webp",
            full: "orehas_well/lv_pap_orehaw_d_ps_1_full.webp",
            max: [4, 8],
          },
          {
            id: 2,
            tile: "orehas_well/lv_pap_orehaw_d_ps_2_{y}x{x}.webp",
            full: "orehas_well/lv_pap_orehaw_d_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "orehas_well/lv_pap_orehaw_d_ps_5_{y}x{x}.webp",
            full: "orehas_well/lv_pap_orehaw_d_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "orehas_well/lv_pap_orehaw_d_ps_6_{y}x{x}.webp",
            full: "orehas_well/lv_pap_orehaw_d_ps_6_full.webp",
            max: [3, 3],
          },
        ],
      },
    ],
  },
  {
    name: "Arkesia",
    areas: [
      {
        name: "Nahun's Domain",
        tiles: [
          {
            id: 3,
            tile: "nahuns_domain/lv_mod_platinuara_ps_3_{y}x{x}.webp",
            full: "nahuns_domain/lv_mod_platinuara_ps_3_full.webp",
            max: [5, 5],
          },
        ],
      },
      {
        name: "Old Yudian Canal",
        tiles: [
          {
            id: 0,
            tile: "old_yudian_canal/lv_mod_platinuarab_ps_0_{y}x{x}.webp",
            full: "old_yudian_canal/lv_mod_platinuarab_ps_0_full.webp",
            max: [5, 5],
          },
        ],
      },
    ],
  },
  {
    name: "Unsorted",
    areas: [
      {
        name: "Silent Hall",
        tiles: [
          {
            id: 5,
            tile: "silent_hall/lv_mod_bossrush_01_ps_5_{y}x{x}.webp",
            full: "silent_hall/lv_mod_bossrush_01_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "silent_hall/lv_mod_bossrush_01_ps_6_{y}x{x}.webp",
            full: "silent_hall/lv_mod_bossrush_01_ps_6_full.webp",
            max: [2, 1],
          },
        ],
      },
      {
        name: "Hall of the Sun",
        tiles: [
          {
            id: 5,
            tile: "hall_of_the_sun/lv_mod_bossrush_02_ps_5_{y}x{x}.webp",
            full: "hall_of_the_sun/lv_mod_bossrush_02_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 6,
            tile: "hall_of_the_sun/lv_mod_bossrush_02_ps_6_{y}x{x}.webp",
            full: "hall_of_the_sun/lv_mod_bossrush_02_ps_6_full.webp",
            max: [2, 1],
          },
        ],
      },
      {
        name: "Golden Eagle Battlefield",
        tiles: [
          {
            id: 0,
            tile: "golden_eagle_battlefield/lv_battle_battlek_ps_0_{y}x{x}.webp",
            full: "golden_eagle_battlefield/lv_battle_battlek_ps_0_full.webp",
            max: [2, 1],
          },
        ],
      },
      {
        name: "Blue Dragon Territory",
        tiles: [
          {
            id: 0,
            tile: "blue_dragon_territory/lv_battle_dtarena_ps_0_{y}x{x}.webp",
            full: "blue_dragon_territory/lv_battle_dtarena_ps_0_full.webp",
            max: [2, 1],
          },
        ],
      },
      {
        name: "Ironlands",
        tiles: [
          {
            id: 0,
            tile: "ironlands/lv_battle_rtheide_ps_0_{y}x{x}.webp",
            full: "ironlands/lv_battle_rtheide_ps_0_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Co-op Fortress Battle",
        tiles: [
          {
            id: 0,
            tile: "co-op_fortress_battle/lv_battle_nergalsh_ps_0_{y}x{x}.webp",
            full: "co-op_fortress_battle/lv_battle_nergalsh_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Guild War",
        tiles: [
          {
            id: 0,
            tile: "guild_war/lv_battle_battlek_ps_0_{y}x{x}.webp",
            full: "guild_war/lv_battle_battlek_ps_0_full.webp",
            max: [2, 1],
          },
          {
            id: 0,
            tile: "guild_war/lv_battle_dtarena_ps_0_{y}x{x}.webp",
            full: "guild_war/lv_battle_dtarena_ps_0_full.webp",
            max: [2, 1],
          },
          {
            id: 0,
            tile: "guild_war/lv_battle_rtheide_ps_0_{y}x{x}.webp",
            full: "guild_war/lv_battle_rtheide_ps_0_full.webp",
            max: [3, 2],
          },
          {
            id: 0,
            tile: "guild_war/lv_battle_battlefir_ps_0_{y}x{x}.webp",
            full: "guild_war/lv_battle_battlefir_ps_0_full.webp",
            max: [2, 1],
          },
          {
            id: 0,
            tile: "guild_war/lv_battle_battledes_ps_0_{y}x{x}.webp",
            full: "guild_war/lv_battle_battledes_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "guild_war/lv_battle_battledes_ps_1_{y}x{x}.webp",
            full: "guild_war/lv_battle_battledes_ps_1_full.webp",
            max: [2, 1],
          },
        ],
      },
      {
        name: "Fortress Battle",
        tiles: [
          {
            id: 0,
            tile: "fortress_battle/lv_battle_nergalsh_ps_0_{y}x{x}.webp",
            full: "fortress_battle/lv_battle_nergalsh_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Raid Match",
        tiles: [
          {
            id: 0,
            tile: "raid_match/lv_battle_forestcs_ps_0_{y}x{x}.webp",
            full: "raid_match/lv_battle_forestcs_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 1,
            tile: "raid_match/lv_battle_rareap77_ps_1_{y}x{x}.webp",
            full: "raid_match/lv_battle_rareap77_ps_1_full.webp",
            max: [2, 3],
          },
          {
            id: 0,
            tile: "raid_match/lv_battle_sfground_ps_0_{y}x{x}.webp",
            full: "raid_match/lv_battle_sfground_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "raid_match/lv_battle_forbiddens_ps_0_{y}x{x}.webp",
            full: "raid_match/lv_battle_forbiddens_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 0,
            tile: "raid_match/lv_battle_shadeos_ps_0_{y}x{x}.webp",
            full: "raid_match/lv_battle_shadeos_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Siege of Volare Island",
        tiles: [
          {
            id: 0,
            tile: "siege_of_volare_island/lv_battle_battleff_ps_0_{y}x{x}.webp",
            full: "siege_of_volare_island/lv_battle_battleff_ps_0_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Nameless Territory",
        tiles: [
          {
            id: 0,
            tile: "nameless_territory/lv_twn_base00_i_ps_0_{y}x{x}.webp",
            full: "nameless_territory/lv_twn_base00_i_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "nameless_territory/lv_twn_base00_i_ps_5_{y}x{x}.webp",
            full: "nameless_territory/lv_twn_base00_i_ps_5_full.webp",
            max: [4, 5],
          },
        ],
      },
      {
        name: "Frost Haven",
        tiles: [
          {
            id: 1,
            tile: "frost_haven/lv_rad_haofcold_ps_1_{y}x{x}.webp",
            full: "frost_haven/lv_rad_haofcold_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Foggy Ridge",
        tiles: [
          {
            id: 0,
            tile: "foggy_ridge/lv_rad_densefog_ps_0_{y}x{x}.webp",
            full: "foggy_ridge/lv_rad_densefog_ps_0_full.webp",
            max: [4, 3],
          },
        ],
      },
      {
        name: "Red Sand Desert",
        tiles: [
          {
            id: 2,
            tile: "red_sand_desert/lv_rad_redsanddst_ps_2_{y}x{x}.webp",
            full: "red_sand_desert/lv_rad_redsanddst_ps_2_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Scarred Crimson Land",
        tiles: [
          {
            id: 1,
            tile: "scarred_crimson_land/lv_rad_drlands_ps_1_{y}x{x}.webp",
            full: "scarred_crimson_land/lv_rad_drlands_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Woeful Drylands",
        tiles: [
          {
            id: 0,
            tile: "woeful_drylands/lv_rad_landdrysc_ps_0_{y}x{x}.webp",
            full: "woeful_drylands/lv_rad_landdrysc_ps_0_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Sea of Indolence",
        tiles: [
          {
            id: 0,
            tile: "sea_of_indolence/lv_ocn_gatepara_c_01_ps_0_{y}x{x}.webp",
            full: "sea_of_indolence/lv_ocn_gatepara_c_01_ps_0_full.webp",
            max: [4, 3],
          },
          {
            id: 1,
            tile: "sea_of_indolence/lv_ocn_gatepara_c_01_ps_1_{y}x{x}.webp",
            full: "sea_of_indolence/lv_ocn_gatepara_c_01_ps_1_full.webp",
            max: [3, 4],
          },
          {
            id: 5,
            tile: "sea_of_indolence/lv_ocn_gatepara_c_01_ps_5_{y}x{x}.webp",
            full: "sea_of_indolence/lv_ocn_gatepara_c_01_ps_5_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Tranquil Karkosa",
        tiles: [
          {
            id: 0,
            tile: "tranquil_karkosa/lv_ocn_gatepara_c_02_ps_0_{y}x{x}.webp",
            full: "tranquil_karkosa/lv_ocn_gatepara_c_02_ps_0_full.webp",
            max: [3, 5],
          },
          {
            id: 1,
            tile: "tranquil_karkosa/lv_ocn_gatepara_c_02_ps_1_{y}x{x}.webp",
            full: "tranquil_karkosa/lv_ocn_gatepara_c_02_ps_1_full.webp",
            max: [2, 2],
          },
        ],
      },
      {
        name: "Alaric's Sanctuary",
        tiles: [
          {
            id: 0,
            tile: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_0_{y}x{x}.webp",
            full: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 1,
            tile: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_1_{y}x{x}.webp",
            full: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_2_{y}x{x}.webp",
            full: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_2_full.webp",
            max: [4, 4],
          },
          {
            id: 3,
            tile: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_3_{y}x{x}.webp",
            full: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 4,
            tile: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_4_{y}x{x}.webp",
            full: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_4_full.webp",
            max: [2, 2],
          },
          {
            id: 5,
            tile: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_5_{y}x{x}.webp",
            full: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_5_full.webp",
            max: [2, 1],
          },
          {
            id: 6,
            tile: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_6_{y}x{x}.webp",
            full: "alarics_sanctuary/lv_ocn_gatepara_c_03_ps_6_full.webp",
            max: [7, 2],
          },
        ],
      },
      {
        name: "Demon Beast Canyon",
        tiles: [
          {
            id: 0,
            tile: "demon_beast_canyon/lv_ber_elveria_ed_01_ps_0_{y}x{x}.webp",
            full: "demon_beast_canyon/lv_ber_elveria_ed_01_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Necromancer's Origin",
        tiles: [
          {
            id: 0,
            tile: "necromancers_origin/lv_ber_elveria_ed_02_ps_0_{y}x{x}.webp",
            full: "necromancers_origin/lv_ber_elveria_ed_02_ps_0_full.webp",
            max: [6, 6],
          },
        ],
      },
      {
        name: "Hall of the Twisted Warlord",
        tiles: [
          {
            id: 0,
            tile: "hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_0_{y}x{x}.webp",
            full: "hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_1_{y}x{x}.webp",
            full: "hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_1_full.webp",
            max: [1, 2],
          },
          {
            id: 2,
            tile: "hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_2_{y}x{x}.webp",
            full: "hall_of_the_twisted_warlord/lv_rhd_palacedp_ed_01_ps_2_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Hildebrandt Palace",
        tiles: [
          {
            id: 0,
            tile: "hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_0_{y}x{x}.webp",
            full: "hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 1,
            tile: "hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_1_{y}x{x}.webp",
            full: "hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_1_full.webp",
            max: [3, 3],
          },
          {
            id: 2,
            tile: "hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_2_{y}x{x}.webp",
            full: "hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_2_full.webp",
            max: [2, 2],
          },
          {
            id: 3,
            tile: "hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_3_{y}x{x}.webp",
            full: "hildebrandt_palace/lv_rhd_palacedp_ed_02_ps_3_full.webp",
            max: [1, 2],
          },
        ],
      },
      {
        name: "Road of Lament",
        tiles: [
          {
            id: 0,
            tile: "road_of_lament/lv_yor_arroganta_ed_01_ps_0_{y}x{x}.webp",
            full: "road_of_lament/lv_yor_arroganta_ed_01_ps_0_full.webp",
            max: [3, 2],
          },
        ],
      },
      {
        name: "Forge of Fallen Pride",
        tiles: [
          {
            id: 0,
            tile: "forge_of_fallen_pride/lv_yor_arroganta_ed_02_ps_0_{y}x{x}.webp",
            full: "forge_of_fallen_pride/lv_yor_arroganta_ed_02_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 1,
            tile: "forge_of_fallen_pride/lv_yor_arroganta_ed_02_ps_1_{y}x{x}.webp",
            full: "forge_of_fallen_pride/lv_yor_arroganta_ed_02_ps_1_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Aira's Oculus",
        tiles: [
          {
            id: 1,
            tile: "airas_oculus/lv_pap_orehaw_ed_01_ps_1_{y}x{x}.webp",
            full: "airas_oculus/lv_pap_orehaw_ed_01_ps_1_full.webp",
            max: [3, 4],
          },
          {
            id: 3,
            tile: "airas_oculus/lv_pap_orehaw_ed_01_ps_3_{y}x{x}.webp",
            full: "airas_oculus/lv_pap_orehaw_ed_01_ps_3_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Oreha Preveza",
        tiles: [
          {
            id: 0,
            tile: "oreha_preveza/lv_pap_orehaw_ed_02_ps_0_{y}x{x}.webp",
            full: "oreha_preveza/lv_pap_orehaw_ed_02_ps_0_full.webp",
            max: [3, 4],
          },
        ],
      },
      {
        name: "Chaos Dungeon",
        tiles: [
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_breeze_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_breeze_01_ps_0_full.webp",
            max: [2, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_zenail_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_zenail_01_ps_0_full.webp",
            max: [1, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_shadeel_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_shadeel_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_loghill_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_loghill_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_border_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_border_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_rcarena_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_rcarena_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_hillwind_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_hillwind_01_ps_0_full.webp",
            max: [3, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_frozencl_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_frozencl_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_parched_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_parched_01_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_cracked_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_cracked_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_nevel_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_nevel_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_windbring_01_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_windbring_01_ps_1_full.webp",
            max: [4, 4],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_totrichap_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_totrichap_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 7,
            tile: "chaos_dungeon/lv_rvr_riese_01_ps_7_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_riese_01_ps_7_full.webp",
            max: [2, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_redsanddst_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_redsanddst_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_sahill_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_sahill_01_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_ozhill_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_ozhill_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_delphica_01_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_delphica_01_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_mirrorva_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_mirrorva_01_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 3,
            tile: "chaos_dungeon/lv_rvr_twilightm_01_ps_3_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_twilightm_01_ps_3_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_zamount_01_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_zamount_01_ps_1_full.webp",
            max: [1, 2],
          },
          {
            id: 4,
            tile: "chaos_dungeon/lv_rvr_lakebar_01_ps_4_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_lakebar_01_ps_4_full.webp",
            max: [1, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_memonast_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_memonast_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "chaos_dungeon/lv_rvr_biforest_01_ps_5_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_biforest_01_ps_5_full.webp",
            max: [2, 2],
          },
          {
            id: 6,
            tile: "chaos_dungeon/lv_rvr_pofbattle_01_ps_6_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_pofbattle_01_ps_6_full.webp",
            max: [3, 3],
          },
          {
            id: 7,
            tile: "chaos_dungeon/lv_rvr_brchurch_01_ps_7_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_brchurch_01_ps_7_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_bodomain_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_bodomain_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 8,
            tile: "chaos_dungeon/lv_rvr_crseasho_01_ps_8_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_crseasho_01_ps_8_full.webp",
            max: [3, 3],
          },
          {
            id: 9,
            tile: "chaos_dungeon/lv_rvr_toforest_01_ps_9_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_toforest_01_ps_9_full.webp",
            max: [3, 2],
          },
          {
            id: 10,
            tile: "chaos_dungeon/lv_rvr_roforest_01_ps_10_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_roforest_01_ps_10_full.webp",
            max: [2, 2],
          },
          {
            id: 11,
            tile: "chaos_dungeon/lv_rvr_giforest_01_ps_11_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_giforest_01_ps_11_full.webp",
            max: [2, 2],
          },
          {
            id: 12,
            tile: "chaos_dungeon/lv_rvr_parna_01_ps_12_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_parna_01_ps_12_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_fesnar_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_fesnar_01_ps_0_full.webp",
            max: [2, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_ugarden_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_ugarden_01_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_secondwp_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_secondwp_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_lpromise_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_lpromise_01_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_roforest_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_roforest_02_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_delphica_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_delphica_02_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_mirrorva_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_mirrorva_02_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_redsanddst_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_redsanddst_02_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_hillwind_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_hillwind_02_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_hillwind_02_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_hillwind_02_ps_1_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_hillwind_03_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_hillwind_03_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 2,
            tile: "chaos_dungeon/lv_rvr_hillwind_03_ps_2_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_hillwind_03_ps_2_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_hillwind_04_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_hillwind_04_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_kronap_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_kronap_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "chaos_dungeon/lv_rvr_kronap_01_ps_3_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_kronap_01_ps_3_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_fesnar_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_fesnar_02_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_fesnar_03_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_fesnar_03_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_fesnar_04_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_fesnar_04_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_valankarm_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_valankarm_01_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_silverl_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_silverl_01_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_lotusap_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_lotusap_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_breeze_02_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_breeze_02_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_zenail_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_zenail_02_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_firstwp_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_firstwp_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_lpromise_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_lpromise_02_ps_0_full.webp",
            max: [2, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_lpromise_03_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_lpromise_03_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 2,
            tile: "chaos_dungeon/lv_rvr_lpromise_03_ps_2_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_lpromise_03_ps_2_full.webp",
            max: [2, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_unravin_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_unravin_01_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_shcliff_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_shcliff_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 4,
            tile: "chaos_dungeon/lv_rvr_shcliff_01_ps_4_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_shcliff_01_ps_4_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_shcliff_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_shcliff_02_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "chaos_dungeon/lv_rvr_shcliff_02_ps_5_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_shcliff_02_ps_5_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_prmoon_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_prmoon_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_prmoon_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_prmoon_02_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_ehrgeiz_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_ehrgeiz_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_gvalley_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_gvalley_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_intortoyk_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_intortoyk_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_elveria_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_elveria_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_firstwp_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_firstwp_02_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_arroganta_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_arroganta_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_ocastle_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_ocastle_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_lakeisland_01_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_lakeisland_01_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_ruinarena_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_ruinarena_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_plateau_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_plateau_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_palacedp_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_palacedp_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_palacedp_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_palacedp_02_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 3,
            tile: "chaos_dungeon/lv_rvr_queen_01_ps_3_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_queen_01_ps_3_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_rohendela_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_rohendela_01_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_lbeginning_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_lbeginning_01_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_secondwp_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_secondwp_02_ps_0_full.webp",
            max: [2, 3],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_wailsw_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_wailsw_01_ps_0_full.webp",
            max: [1, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_shcliff_03_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_shcliff_03_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_scoast_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_scoast_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_ticac_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_ticac_01_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_ticac_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_ticac_02_ps_0_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_sforest_01_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_sforest_01_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 5,
            tile: "chaos_dungeon/lv_rvr_treasure_01_ps_5_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_treasure_01_ps_5_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_treasure_02_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_treasure_02_ps_1_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_treasure_03_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_treasure_03_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 7,
            tile: "chaos_dungeon/lv_rvr_kandad_01_ps_7_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_kandad_01_ps_7_full.webp",
            max: [1, 3],
          },
          {
            id: 2,
            tile: "chaos_dungeon/lv_rvr_kandad_02_ps_2_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_kandad_02_ps_2_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_kandad_03_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_kandad_03_ps_1_full.webp",
            max: [2, 1],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_bellionr_01_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_bellionr_01_ps_1_full.webp",
            max: [2, 2],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_bellionr_02_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_bellionr_02_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_bellionr_03_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_bellionr_03_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 0,
            tile: "chaos_dungeon/lv_rvr_bellionr_04_ps_0_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_bellionr_04_ps_0_full.webp",
            max: [1, 1],
          },
          {
            id: 1,
            tile: "chaos_dungeon/lv_rvr_heigerm_01_ps_1_{y}x{x}.webp",
            full: "chaos_dungeon/lv_rvr_heigerm_01_ps_1_full.webp",
            max: [1, 1],
          },
        ],
      },
      {
        name: "Dark Lands",
        tiles: [
          {
            id: 0,
            tile: "dark_lands/lv_chs_darks_ps_0_{y}x{x}.webp",
            full: "dark_lands/lv_chs_darks_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Phantom Lands",
        tiles: [
          {
            id: 0,
            tile: "phantom_lands/lv_chs_phntms_ps_0_{y}x{x}.webp",
            full: "phantom_lands/lv_chs_phntms_ps_0_full.webp",
            max: [3, 3],
          },
          {
            id: 7,
            tile: "phantom_lands/lv_chs_phntms_ps_7_{y}x{x}.webp",
            full: "phantom_lands/lv_chs_phntms_ps_7_full.webp",
            max: [3, 3],
          },
        ],
      },
      {
        name: "Plague Lands",
        tiles: [
          {
            id: 1,
            tile: "plague_lands/lv_chs_diseases_ps_1_{y}x{x}.webp",
            full: "plague_lands/lv_chs_diseases_ps_1_full.webp",
            max: [4, 4],
          },
        ],
      },
      {
        name: "Mayhem Lands",
        tiles: [
          {
            id: 0,
            tile: "mayhem_lands/lv_chs_madnesss_ps_0_{y}x{x}.webp",
            full: "mayhem_lands/lv_chs_madnesss_ps_0_full.webp",
            max: [3, 3],
          },
        ],
      },
    ],
  },
  {
    name: "South Vern",
    areas: [
      {
        name: "Secret Dungeon",
        tiles: [
          {
            id: 0,
            tile: "secret_dungeon/lv_scd_bernsth_ps_0_{y}x{x}.webp",
            full: "secret_dungeon/lv_scd_bernsth_ps_0_full.webp",
            max: [16, 25],
          },
        ],
      },
    ],
  },
];

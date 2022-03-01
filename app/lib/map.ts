import type { Tile } from "./types";

export function getMapCenter(tile: Tile): [number, number] {
  return [(-64 * tile.max[0]) / 2, (64 * tile.max[1]) / 2];
}

export function getBounds(tile: Tile): [[number, number], [number, number]] {
  return [
    [0, 64 * tile.max[1]],
    [-64 * tile.max[0], 0],
  ];
}

import { Image } from "@mantine/core";
import type { AreaNode } from "@prisma/client";
import { useEffect, useMemo, useRef } from "react";
import { TileLayer, Tooltip } from "react-leaflet";
import { getBounds } from "~/lib/map";
import { TILE_BASE_URL } from "~/lib/static";
import {
  useDiscoveredNodes,
  useDrawerPosition,
  useIsShowingDiscoveredNodes,
} from "~/lib/store";
import type { Area, Tile } from "~/lib/types";
import IconMarker from "./IconMarker";

type TileControlProps = {
  area: Area;
  activeTile: Tile;
  onActiveTileChange: (activeTile: Tile) => void;
  nodes: AreaNode[];
  onNodeClick: (node: AreaNode) => void;
  editingNode: Partial<AreaNode> | null;
};

export default function TileControl({
  area,
  activeTile,
  onActiveTileChange,
  nodes,
  onNodeClick,
  editingNode,
}: TileControlProps) {
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const discoveredNodes = useDiscoveredNodes();
  const isShowingDiscoveredNodes = useIsShowingDiscoveredNodes();

  useEffect(() => {
    if (tileLayerRef.current) {
      tileLayerRef.current.options.bounds = getBounds(activeTile);
      tileLayerRef.current.setUrl(`${TILE_BASE_URL}${activeTile.tile}`);
    }
  }, [activeTile]);
  const drawerPosition = useDrawerPosition();

  const tileNodes = useMemo(
    () =>
      nodes.filter(
        (node) => node.tileId === activeTile.id && node.id !== editingNode?.id
      ),
    [activeTile.id, nodes, editingNode]
  );

  return (
    <div
      className={`leaflet-top leaflet-${
        drawerPosition === "left" ? "right" : "left"
      }`}
    >
      <div className="leaflet-control">
        {area.name !== "Arkesia" &&
          area.tiles.map((tile) => (
            <Image
              m="md"
              key={tile.full}
              onClick={() => onActiveTileChange(tile)}
              sx={() => ({
                transform: "rotate(-45deg)",
                cursor: "pointer",
                transition: "0.2s ease",
                "&:hover": {
                  transform: "rotate(-45deg) scale(1.2)",
                },
              })}
              src={`${TILE_BASE_URL}${tile.full}`}
              alt=""
              height={50}
              width={50}
              fit="contain"
            />
          ))}
      </div>
      <TileLayer
        ref={tileLayerRef}
        url={`${TILE_BASE_URL}${activeTile.tile}`}
        minNativeZoom={2}
        maxNativeZoom={2}
        minZoom={0}
        maxZoom={4}
        tileSize={256}
        bounds={getBounds(activeTile)}
      />
      {tileNodes
        .filter(
          (node) =>
            isShowingDiscoveredNodes ||
            !discoveredNodes.some(
              (discoveredNode) => discoveredNode.id === node.id
            )
        )
        .map((node) => (
          <IconMarker
            key={node.position.toString()}
            position={node.position as [number, number]}
            alt={node.type}
            type={node.type}
            riseOnHover
            verified={Boolean(node.userId)}
            eventHandlers={{
              click() {
                if (!document.querySelector("#new-marker-drawer")) {
                  onNodeClick(node);
                }
              },
            }}
          >
            <Tooltip direction="top" offset={[0, -15]}>
              {node.name || node.type}
              {!node.userId && " (Not verified)"}
            </Tooltip>
          </IconMarker>
        ))}
    </div>
  );
}

import { Image, Text } from "@mantine/core";
import { useEffect, useMemo, useRef } from "react";
import { TileLayer, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { getBounds } from "~/lib/map";
import { areaContinents, TILE_BASE_URL } from "~/lib/static";
import {
  useDiscoveredNodes,
  useDrawerPosition,
  useIsShowingDiscoveredNodes,
} from "~/lib/store";
import type { Area, AreaNodeDTO, Tile } from "~/lib/types";
import IconMarker from "./IconMarker";

type TileControlProps = {
  area: Area;
  activeTile: Tile;
  onActiveTileChange: (activeTile: Tile) => void;
  nodes: AreaNodeDTO[];
  onNodeClick: (node: AreaNodeDTO) => void;
  editingNode: Partial<AreaNodeDTO> | null;
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
  const navigate = useNavigate();

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
              contextmenu() {
                if (!node.transitTo) {
                  return;
                }

                const continent = areaContinents[node.transitTo.areaName];
                navigate(
                  `/maps/${continent}/${node.transitTo.areaName}?tile=${node.transitTo.tileId}&node=${node.transitTo.id}&hideDetails=true`
                );
              },
            }}
          >
            <Tooltip direction="top" offset={[0, -15]}>
              <Text size="md" align="center">
                {node.name || node.type}
                {!node.userId && " (Not verified)"}
              </Text>
              <Text size="xs" color="blue">
                {node.transitTo && "Right-click to transit"}
              </Text>
            </Tooltip>
          </IconMarker>
        ))}
    </div>
  );
}

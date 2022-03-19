import { Image, Text } from "@mantine/core";
import { useEffect, useMemo, useRef } from "react";
import { TileLayer, Tooltip, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { getBounds } from "~/lib/map";
import { areaContinents, continents, TILE_BASE_URL } from "~/lib/static";
import {
  useDiscoveredNodes,
  useDrawerPosition,
  useEditingNode,
  useIsShowingDiscoveredNodes,
} from "~/lib/store";
import type { Area, AreaNodeDTO, Tile } from "~/lib/types";
import IconMarker from "./IconMarker";
import L from "leaflet";

type TileControlProps = {
  area: Area;
  activeTile: Tile;
  onActiveTileChange: (activeTile: Tile) => void;
  nodes: AreaNodeDTO[];
  onNodeClick: (node: AreaNodeDTO) => void;
};

export default function TileControl({
  area,
  activeTile,
  onActiveTileChange,
  nodes,
  onNodeClick,
}: TileControlProps) {
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const discoveredNodes = useDiscoveredNodes();
  const isShowingDiscoveredNodes = useIsShowingDiscoveredNodes();
  const navigate = useNavigate();
  const editingNode = useEditingNode();

  useEffect(() => {
    if (tileLayerRef.current) {
      tileLayerRef.current.options.bounds = getBounds(activeTile);
      tileLayerRef.current.options.tileSize =
        area.category === "World" ? L.point(980, 752) : 256;
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

  useMapEvents({
    contextmenu: () =>
      navigate(`/maps/${continents[0].name}/${continents[0].areas[0].name}`),
  });

  return (
    <div className={`leaflet-bottom leaflet-${drawerPosition}`}>
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
        tileSize={area.category === "World" ? L.point(980, 752) : 256}
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
            name={node.name}
            riseOnHover
            verified={Boolean(node.userId)}
            eventHandlers={{
              click() {
                if (!document.querySelector("#upsert-marker-drawer")) {
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
              {node.name && node.name !== node.type && (
                <Text size="xs" color="teal" align="center">
                  {node.type}
                </Text>
              )}
              {node.transitTo && (
                <Text size="xs" color="cyan" align="center">
                  Right-click to transit
                </Text>
              )}
            </Tooltip>
          </IconMarker>
        ))}
    </div>
  );
}

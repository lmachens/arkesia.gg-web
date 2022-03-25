import { Image, Text } from "@mantine/core";
import { useEffect, useMemo, useRef } from "react";
import { TileLayer, Tooltip, useMapEvents } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getBounds } from "~/lib/map";
import { areaContinents, continents, TILE_BASE_URL } from "~/lib/static";
import {
  useDiscoveredNodes,
  useDrawerPosition,
  useEditingNodeLocation,
  useIsShowingDiscoveredNodes,
} from "~/lib/store";
import type { Area, AreaNodeLocationDTO, Tile } from "~/lib/types";
import IconMarker from "./IconMarker";
import L from "leaflet";

type TileControlProps = {
  area: Area;
  activeTile: Tile;
  onActiveTileChange: (activeTile: Tile) => void;
  nodeLocations: AreaNodeLocationDTO[];
  onNodeLocationClick: (nodeLocation: AreaNodeLocationDTO) => void;
};

export default function TileControl({
  area,
  activeTile,
  onActiveTileChange,
  nodeLocations,
  onNodeLocationClick,
}: TileControlProps) {
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const discoveredNodes = useDiscoveredNodes();
  const isShowingDiscoveredNodes = useIsShowingDiscoveredNodes();
  const navigate = useNavigate();
  const editingNodeLocation = useEditingNodeLocation();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (tileLayerRef.current) {
      tileLayerRef.current.options.bounds = getBounds(activeTile);
      tileLayerRef.current.options.tileSize =
        area.category === "World" ? L.point(980, 752) : 256;
      tileLayerRef.current.setUrl(`${TILE_BASE_URL}${activeTile.tile}`);
    }
  }, [activeTile]);
  const drawerPosition = useDrawerPosition();

  const visibleNodeLocations = useMemo(
    () =>
      nodeLocations.filter(
        (nodeLocation) =>
          nodeLocation.id !== editingNodeLocation?.id &&
          nodeLocation.areaName === area.name &&
          nodeLocation.tileId === activeTile.id &&
          (isShowingDiscoveredNodes ||
            !discoveredNodes.some(
              (discoveredNode) => discoveredNode.id === nodeLocation.id
            ))
      ),
    [
      nodeLocations,
      editingNodeLocation?.id,
      isShowingDiscoveredNodes,
      discoveredNodes,
      activeTile.id,
      area.name,
    ]
  );
  useMapEvents({
    contextmenu: () => {
      const index = area.tiles.findIndex((tile) => tile.id === activeTile.id);
      if (index !== 0) {
        setSearchParams({});
      } else {
        navigate(`/maps/${continents[0].name}/${continents[0].areas[0].name}`);
      }
    },
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
      {visibleNodeLocations.map((nodeLocation) => (
        <IconMarker
          key={nodeLocation.position.toString()}
          position={nodeLocation.position as [number, number]}
          alt={nodeLocation.areaNode.type}
          type={nodeLocation.areaNode.type}
          name={nodeLocation.areaNode.name}
          riseOnHover
          verified={Boolean(nodeLocation.areaNode.userId)}
          transitTo={nodeLocation.areaNode.transitTo}
          eventHandlers={{
            click() {
              if (!document.querySelector("#upsert-marker-drawer")) {
                onNodeLocationClick(nodeLocation);
              }
            },
            contextmenu() {
              if (!nodeLocation.areaNode.transitTo) {
                return;
              }
              const transitToLocation =
                nodeLocation.areaNode.transitTo.areaNodeLocations[0];
              const continent = areaContinents[transitToLocation.areaName];
              navigate(
                `/maps/${continent}/${transitToLocation.areaName}?tile=${transitToLocation.tileId}&node=${nodeLocation.areaNode.transitTo.id}&hideDetails=true`
              );
            },
          }}
        >
          <Tooltip direction="top" offset={[0, -15]}>
            <Text size="md" align="center">
              {nodeLocation.areaNode.name || nodeLocation.areaNode.type}
              {!nodeLocation.areaNode.userId && " (Not verified)"}
            </Text>
            {nodeLocation.areaNode.name &&
              nodeLocation.areaNode.name !== nodeLocation.areaNode.type && (
                <Text size="xs" color="teal" align="center">
                  {nodeLocation.areaNode.type}
                </Text>
              )}
            {nodeLocation.areaNode.transitTo && (
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

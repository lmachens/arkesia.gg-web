import { Image } from "@mantine/core";
import { useEffect, useMemo, useRef } from "react";
import { TileLayer, useMapEvents } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getBounds } from "~/lib/map";
import { nodeTypesMap, TILE_BASE_URL } from "~/lib/static";
import {
  useDrawerPosition,
  useEditingNodeLocation,
  useFilters,
  useSetSelectedNodeLocation,
} from "~/lib/store";
import type { Area, AreaNodeLocationDTO, Tile } from "~/lib/types";
import L from "leaflet";
import NodeLocationMarker from "./NodeLocationMarker";

type TileControlProps = {
  area: Area;
  activeTile: Tile;
  onActiveTileChange: (activeTile: Tile) => void;
  nodeLocations: AreaNodeLocationDTO[];
  onNodeLocationClick: (nodeLocation: AreaNodeLocationDTO) => void;
  selectedNodeLocation: AreaNodeLocationDTO | null;
};

export default function TileControl({
  area,
  activeTile,
  onActiveTileChange,
  nodeLocations,
  onNodeLocationClick,
  selectedNodeLocation,
}: TileControlProps) {
  const tileLayerRef = useRef<L.TileLayer | null>(null);
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
  const setSelectedNodeLocation = useSetSelectedNodeLocation();
  const filters = useFilters();

  const visibleNodeLocations = useMemo(
    () =>
      nodeLocations.filter(
        (nodeLocation) =>
          nodeLocation.id !== editingNodeLocation?.id &&
          nodeLocation.areaName === area.name &&
          nodeLocation.tileId === activeTile.id &&
          filters.includes(nodeTypesMap[nodeLocation.areaNode.type]?.category)
      ),
    [nodeLocations, editingNodeLocation?.id, activeTile.id, area.name, filters]
  );
  useMapEvents({
    contextmenu: () => {
      setSelectedNodeLocation(null);
      const index = area.tiles.findIndex((tile) => tile.id === activeTile.id);
      if (index !== 0) {
        setSearchParams({});
      } else {
        navigate(`/`);
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
        <NodeLocationMarker
          key={nodeLocation.position.toString()}
          nodeLocation={nodeLocation}
          selectedNodeLocation={selectedNodeLocation}
          onClick={() => {
            if (!document.querySelector("#upsert-marker-drawer")) {
              onNodeLocationClick(nodeLocation);
            }
          }}
        />
      ))}
    </div>
  );
}

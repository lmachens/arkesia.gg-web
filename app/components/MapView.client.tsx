import { useEffect, useMemo, useState } from "react";
import { MapContainer } from "react-leaflet";
import type { Area, AreaNodeLocationDTO, Tile } from "~/lib/types";
import L from "leaflet";
import includeCanvasTileLayer from "./includeCanvasTileLayer";
import "leaflet-rotate";
import MousePosition from "./MousePosition";
import TileControl from "./TileControl";
import { getBounds, getMapCenter } from "~/lib/map";
import NodeDetails from "./NodeDetails";
import UpsertMarker from "./UpsertMarker";
import type { URLSearchParamsInit } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDidUpdate } from "@mantine/hooks";
import { useLastAreaNames, useSetEditingNodeLocation } from "~/lib/store";
import ActionIcons from "./ActionIcons";
import { useNodeLocations } from "~/lib/loaders";

includeCanvasTileLayer();

const canvasRenderer = L.canvas();
export default function MapView({ area }: { area: Area }) {
  const nodeLocations = useNodeLocations();

  const [searchParams, setSearchParams] = useSearchParams();
  const setEditingNodeLocation = useSetEditingNodeLocation();

  const tileParam = searchParams.get("tile");
  const tileId = tileParam ? +tileParam : 0;
  const nodeParam = searchParams.get("node");
  const hideDetails = searchParams.get("hideDetails");
  const nodeId = nodeParam ? +nodeParam : null;
  const [map, setMap] = useState<L.Map | null>(null);
  const { addLastAreaName } = useLastAreaNames();

  const [activeTile, setActiveTile] = useState<Tile>(
    () => area.tiles.find((tile) => tile.id === tileId) || area.tiles[0]
  );
  const [selectedNodeLocation, setSelectedNodeLocation] =
    useState<AreaNodeLocationDTO | null>(
      () =>
        nodeLocations.find(
          (nodeLocation) => nodeLocation.areaNodeId === nodeId
        ) || null
    );

  useEffect(() => {
    if (area.name !== "Arkesia") {
      addLastAreaName(area.name);
    }
  }, [area.name]);

  useDidUpdate(() => {
    if (!map) {
      return;
    }
    setEditingNodeLocation(null);

    const tile = area.tiles.find((tile) => tile.id === tileId) || area.tiles[0];
    if (activeTile.tile !== tile.tile) {
      setActiveTile(tile);
    }
    if (hideDetails) {
      setSelectedNodeLocation(null);
    }

    const bearing = area.name !== "Arkesia" ? -45 : 0;
    // @ts-ignore
    if (map.options.bearing !== bearing) {
      // @ts-ignore
      map.options.bearing = bearing;
      // @ts-ignore
      map.setBearing(bearing);
    }
    if (area.name === "Arkesia") {
      map.flyTo([-710, 600] as [number, number], 1, { animate: false });
    } else {
      map.flyToBounds(getBounds(tile), { animate: false });
    }
  }, [area.name, tileId]);

  useDidUpdate(() => {
    let replace = tileId === activeTile.id;
    let newSearchParams: URLSearchParamsInit = "";
    if (activeTile.id !== 0) {
      newSearchParams = `tile=${activeTile.id}`;
    }
    if (selectedNodeLocation) {
      newSearchParams +=
        activeTile.id !== 0
          ? `&node=${selectedNodeLocation.id}`
          : `node=${selectedNodeLocation.id}`;
      replace = selectedNodeLocation.id === nodeId;
    }
    if (searchParams.toString() !== newSearchParams.toString()) {
      setSearchParams(newSearchParams, { replace });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTile, selectedNodeLocation]);

  const initialCenter = useMemo(() => {
    if (selectedNodeLocation) {
      return selectedNodeLocation.position as [number, number];
    }
    if (area.name === "Arkesia") {
      return [-710, 600] as [number, number];
    }
    return getMapCenter(area.tiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDidUpdate(() => {
    if (!map) {
      return;
    }

    const isNodeChanged = nodeId !== selectedNodeLocation?.id;
    if (isNodeChanged) {
      const newSelectedLocation =
        nodeLocations.find(
          (nodeLocation) => nodeLocation.areaNodeId === nodeId
        ) || null;
      if (hideDetails) {
        setSelectedNodeLocation(null);
      } else {
        setSelectedNodeLocation(newSelectedLocation);
      }
      if (newSelectedLocation) {
        map.panTo(newSelectedLocation.position as [number, number], {
          animate: false,
        });
      }
    }
  }, [tileId, nodeId]);

  return (
    <MapContainer
      center={initialCenter}
      zoom={1}
      tap={false}
      crs={L.CRS.Simple}
      zoomControl={false}
      attributionControl={false}
      style={{
        background: "none",
      }}
      renderer={canvasRenderer}
      rotate
      rotateControl={false}
      bearing={area.name !== "Arkesia" ? -45 : 0}
      preferCanvas
      whenCreated={setMap}
    >
      <MousePosition />
      <TileControl
        area={area}
        nodeLocations={nodeLocations}
        onNodeLocationClick={setSelectedNodeLocation}
        activeTile={activeTile}
        onActiveTileChange={(tile) => {
          setActiveTile(tile);
          map!.panTo(getMapCenter(tile), { animate: false });
          setSelectedNodeLocation(null);
        }}
      />
      <UpsertMarker area={area} tile={activeTile} />
      <NodeDetails
        selectedNodeLocation={selectedNodeLocation}
        onClose={() => setSelectedNodeLocation(null)}
        onEdit={(node) => {
          setEditingNodeLocation(node);
          setSelectedNodeLocation(null);
        }}
      />
      <ActionIcons />
    </MapContainer>
  );
}

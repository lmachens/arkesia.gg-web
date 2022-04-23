import { useCallback, useEffect, useMemo, useState } from "react";
import type { AreaNodeLocationDTO, Tile } from "~/lib/types";
import L from "leaflet";
import "leaflet-rotate";
import { MapContainer, useMapEvents } from "react-leaflet";
import includeCanvasTileLayer from "./includeCanvasTileLayer";
import TileControl from "./TileControl";
import { getBounds, getMapCenter } from "~/lib/map";
import UpsertMarker from "./UpsertMarker";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDidUpdate } from "@mantine/hooks";
import {
  useLastAreaNames,
  useMap,
  useSelectedNodeLocation,
  useSetEditingNodeLocation,
  useSetMap,
  useSetSelectedNodeLocation,
} from "~/lib/store";
import { useNodeLocations } from "~/lib/loaders";
import { arkesiaArea, continents } from "~/lib/static";

includeCanvasTileLayer();

const canvasRenderer = L.canvas();

export default function MapView() {
  const params = useParams();
  const area = useMemo(() => {
    const continent = continents.find(
      (continent) => continent.name === params.continent
    );
    return (
      continent?.areas.find((area) => area.name === params.area) || arkesiaArea
    );
  }, [params.area, params.continent]);

  const nodeLocations = useNodeLocations();

  const [searchParams, setSearchParams] = useSearchParams();
  const setEditingNodeLocation = useSetEditingNodeLocation();

  const tileParam = searchParams.get("tileId");
  const tileId = tileParam ? +tileParam : null;
  const hideDetails = searchParams.get("hideDetails");
  const nodeParam = searchParams.get("node");
  const nodeId = nodeParam ? +nodeParam : null;
  const locationParam = searchParams.get("location");
  const locationId = locationParam ? +locationParam : null;
  const map = useMap();
  const setMap = useSetMap();
  const { addLastAreaName } = useLastAreaNames();

  const isSelectedLocation = useCallback(
    (nodeLocation: AreaNodeLocationDTO) =>
      locationId
        ? nodeLocation.id === locationId
        : nodeLocation.areaNodeId === nodeId,
    [nodeId, locationId]
  );

  const [activeTile, setActiveTile] = useState<Tile>(
    () => area.tiles.find((tile) => tile.id === tileId) || area.tiles[0]
  );

  const selectedNodeLocation = useSelectedNodeLocation();
  const setSelectedNodeLocation = useSetSelectedNodeLocation();

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
    const tile = area.tiles.find((tile) => tile.id === tileId) || area.tiles[0];
    if (tile.tile !== activeTile.tile) {
      setSearchParams({ tileId: activeTile.id.toString() });
    }
  }, [activeTile]);

  const initialCenter = useMemo(() => {
    if (selectedNodeLocation) {
      return selectedNodeLocation.position as [number, number];
    }
    return getMapCenter(area.tiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDidUpdate(() => {
    if (!map) {
      return;
    }

    const isNodeChanged = selectedNodeLocation
      ? !isSelectedLocation(selectedNodeLocation)
      : nodeId !== null;
    if (isNodeChanged) {
      const newSelectedLocation =
        nodeLocations.find(isSelectedLocation) || null;
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
  }, [tileId, nodeId, locationId]);

  return (
    <MapContainer
      center={initialCenter}
      zoom={1}
      tap={false}
      crs={L.CRS.Simple}
      zoomControl={false}
      zoomSnap={0.5}
      wheelPxPerZoomLevel={120}
      zoomDelta={0.5}
      attributionControl={false}
      style={{
        background: "none",
      }}
      renderer={canvasRenderer}
      preferCanvas
      ref={setMap}
      // @ts-ignore
      rotate
      rotateControl={false}
      bearing={area.name !== "Arkesia" ? -45 : 0}
    >
      <TileControl
        area={area}
        nodeLocations={nodeLocations}
        onNodeLocationClick={setSelectedNodeLocation}
        activeTile={activeTile}
        selectedNodeLocation={selectedNodeLocation}
        onActiveTileChange={(tile) => {
          setActiveTile(tile);
          map!.panTo(getMapCenter(tile), { animate: false });
          setSelectedNodeLocation(null);
        }}
      />
      <UpsertMarker area={area} tile={activeTile} />
      <MapEvents />
    </MapContainer>
  );
}

function MapEvents() {
  const setEditingNodeLocation = useSetEditingNodeLocation();
  const selectedNodeLocation = useSelectedNodeLocation();
  const setSelectedNodeLocation = useSetSelectedNodeLocation();

  useMapEvents({
    click: (event) => {
      if (event.originalEvent.ctrlKey) {
        setEditingNodeLocation({
          position: [event.latlng.lat, event.latlng.lng],
          areaNode: {},
        });
      } else if (selectedNodeLocation) {
        setSelectedNodeLocation(null);
      }
    },
  });

  return <></>;
}

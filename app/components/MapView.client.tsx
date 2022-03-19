import { useEffect, useMemo, useState } from "react";
import { MapContainer } from "react-leaflet";
import type { Area, AreaNodeDTO, Tile } from "~/lib/types";
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
import { useLastAreaNames, useNodes, useSetEditingNode } from "~/lib/store";
import ActionIcons from "./ActionIcons";

includeCanvasTileLayer();

const canvasRenderer = L.canvas();
export default function MapView({ area }: { area: Area }) {
  const allNodes = useNodes();
  const nodes = useMemo(
    () => allNodes.filter((node) => node.areaName === area.name),
    [allNodes, area.name]
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const setEditingNode = useSetEditingNode();

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
  const [selectedNode, setSelectedNode] = useState<AreaNodeDTO | null>(
    () => nodes.find((node) => node.id === nodeId) || null
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
    setEditingNode(null);

    const tile = area.tiles.find((tile) => tile.id === tileId) || area.tiles[0];
    if (activeTile.tile !== tile.tile) {
      setActiveTile(tile);
    }
    if (hideDetails) {
      setSelectedNode(null);
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
    let newSearchParams: URLSearchParamsInit = `tile=${activeTile.id}`;
    if (selectedNode) {
      newSearchParams += `&node=${selectedNode.id}`;
      replace = selectedNode.id === nodeId;
    }
    if (searchParams.toString() !== newSearchParams.toString()) {
      setSearchParams(newSearchParams, { replace });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTile, selectedNode]);

  const initialCenter = useMemo(() => {
    if (selectedNode) {
      return selectedNode.position as [number, number];
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

    const isNodeChanged = nodeId !== selectedNode?.id;
    if (isNodeChanged) {
      const newSelectedNode = nodes.find((node) => node.id === nodeId) || null;
      if (hideDetails) {
        setSelectedNode(null);
      } else {
        setSelectedNode(newSelectedNode);
      }
      if (newSelectedNode) {
        map.panTo(newSelectedNode.position as [number, number], {
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
        nodes={nodes}
        onNodeClick={setSelectedNode}
        activeTile={activeTile}
        onActiveTileChange={(tile) => {
          setActiveTile(tile);
          map!.panTo(getMapCenter(tile), { animate: false });
          setSelectedNode(null);
        }}
      />
      <UpsertMarker area={area} tile={activeTile} />
      <NodeDetails
        selectedNode={selectedNode}
        onClose={() => setSelectedNode(null)}
        onEdit={(node) => {
          setEditingNode(node);
          setSelectedNode(null);
        }}
      />
      <ActionIcons />
    </MapContainer>
  );
}

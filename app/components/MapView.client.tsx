import { useMemo, useState } from "react";
import { MapContainer } from "react-leaflet";
import type { AreaNodeDTO, Tile } from "~/lib/types";
import L from "leaflet";
import includeCanvasTileLayer from "./includeCanvasTileLayer";
import "leaflet-rotate";
import MousePosition from "./MousePosition";
import TileControl from "./TileControl";
import { getMapCenter } from "~/lib/map";
import NodeDetails from "./NodeDetails";
import DraggableMarker from "./DraggableMarker";
import type { URLSearchParamsInit } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDidUpdate } from "@mantine/hooks";
import { useLoaderData } from "remix";
import type { LoaderData } from "~/lib/loaders.server";

includeCanvasTileLayer();

const canvasRenderer = L.canvas();
export default function MapView() {
  const { area, nodes } = useLoaderData<LoaderData>();

  const [searchParams, setSearchParams] = useSearchParams();
  const [editingNode, setEditingNode] = useState<Partial<AreaNodeDTO> | null>(
    null
  );
  const tileParam = searchParams.get("tile");
  const tileIndex = tileParam ? +tileParam : 0;
  const nodeParam = searchParams.get("node");
  const hideDetails = searchParams.get("hideDetails");
  const nodeId = nodeParam ? +nodeParam : null;
  const [map, setMap] = useState<L.Map | null>(null);

  const [activeTile, setActiveTile] = useState<Tile>(
    () => area.tiles[tileIndex]
  );
  const [selectedNode, setSelectedNode] = useState<AreaNodeDTO | null>(
    () => nodes.find((node) => node.id === nodeId) || null
  );

  useDidUpdate(() => {
    if (!map) {
      return;
    }
    if (editingNode !== null) {
      setEditingNode(null);
    }

    setActiveTile(area.tiles[tileIndex]);
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
    map.panTo(getMapCenter(area.tiles[tileIndex]));
  }, [area.name, tileIndex]);

  useDidUpdate(() => {
    const tileIndex = area.tiles.findIndex((tile) => tile.id === activeTile.id);
    let newSearchParams: URLSearchParamsInit = `tile=${tileIndex}`;
    if (selectedNode) {
      newSearchParams += `&node=${selectedNode.id}`;
    }
    if (searchParams.toString() !== newSearchParams.toString()) {
      setSearchParams(newSearchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTile, selectedNode]);

  const initialCenter = useMemo(() => {
    if (selectedNode) {
      return selectedNode.position as [number, number];
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
        map.panTo(newSelectedNode.position as [number, number]);
      }
    }
  }, [tileIndex, nodeId]);

  return (
    <MapContainer
      center={initialCenter}
      zoom={1}
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
        editingNode={editingNode}
        onNodeClick={setSelectedNode}
        activeTile={activeTile}
        onActiveTileChange={(tile) => {
          setActiveTile(tile);
          map!.panTo(getMapCenter(tile));
          setSelectedNode(null);
        }}
      />
      <DraggableMarker
        area={area}
        tile={activeTile}
        node={editingNode}
        onChange={setEditingNode}
      />
      <NodeDetails
        selectedNode={selectedNode}
        onClose={() => setSelectedNode(null)}
        onEdit={(node) => {
          setEditingNode(node);
          setSelectedNode(null);
        }}
      />
    </MapContainer>
  );
}

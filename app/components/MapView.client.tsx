import { useState } from "react";
import { MapContainer } from "react-leaflet";
import type { Area, Tile } from "~/lib/types";
import L from "leaflet";
import includeCanvasTileLayer from "./includeCanvasTileLayer";
import "leaflet-rotate";
import MousePosition from "./MousePosition";
import type { AreaNode } from "@prisma/client";
import TileControl from "./TileControl";
import { getMapCenter } from "~/lib/map";
import NodeDetails from "./NodeDetails";
import DraggableMarker from "./DraggableMarker";
import type { URLSearchParamsInit } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDidUpdate } from "@mantine/hooks";
import { useLoaderData } from "remix";
import type { LoaderData } from "~/routes/maps/$continent.$area";

includeCanvasTileLayer();

export default function MapView() {
  const { area, nodes } = useLoaderData<LoaderData>();

  const [searchParams, setSearchParams] = useSearchParams();
  const [editingNode, setEditingNode] = useState<Partial<AreaNode> | null>(
    null
  );
  const tileParam = searchParams.get("tile");
  const tileIndex = tileParam ? +tileParam : 0;
  const nodeParam = searchParams.get("node");
  const nodeId = nodeParam ? +nodeParam : null;

  const [activeTile, setActiveTile] = useState<Tile>(
    () => area.tiles[tileIndex]
  );
  const [selectedNode, setSelectedNode] = useState<AreaNode | null>(
    () => nodes.find((node) => node.id === nodeId) || null
  );

  useDidUpdate(() => {
    if (editingNode !== null) {
      setEditingNode(null);
    }

    setActiveTile(area.tiles[tileIndex]);
    setSelectedNode(nodes.find((node) => node.id === nodeId) || null);
  }, [area.name]);

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

  useDidUpdate(() => {
    if (
      tileIndex !== area.tiles.findIndex((tile) => tile.id === activeTile.id)
    ) {
      setActiveTile(area.tiles[tileIndex]);
      setSelectedNode(null);
    }
    if (nodeId && selectedNode && nodeId !== selectedNode.id) {
      setSelectedNode(nodes.find((node) => node.id === nodeId) || null);
    }
  }, [tileIndex, nodeId]);

  return (
    <MapContainer
      center={getMapCenter(area.tiles[0])}
      zoom={1}
      crs={L.CRS.Simple}
      zoomControl={false}
      attributionControl={false}
      style={{
        background: "none",
      }}
      renderer={L.canvas()}
      rotate
      rotateControl={false}
      bearing={-45}
      preferCanvas
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

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

includeCanvasTileLayer();

type MapProps = {
  area: Area;
  nodes: AreaNode[];
};
export default function MapView({ area, nodes }: MapProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [editingNode, setEditingNode] = useState<Partial<AreaNode> | null>(
    null
  );
  const [activeTile, setActiveTile] = useState<Tile>(() => {
    const tileParam = searchParams.get("tile");
    const tileIndex = tileParam ? +tileParam : 0;
    return area.tiles[tileIndex];
  });

  const [selectedNode, setSelectedNode] = useState<AreaNode | null>(() => {
    const nodeParam = searchParams.get("node");
    const nodeId = nodeParam ? +nodeParam : null;
    return nodes.find((node) => node.id === nodeId) || null;
  });

  useDidUpdate(() => {
    if (editingNode !== null) {
      setEditingNode(null);
    }

    const tileParam = searchParams.get("tile");
    const tileIndex = tileParam ? +tileParam : 0;
    setActiveTile(area.tiles[tileIndex]);

    const nodeParam = searchParams.get("node");
    const nodeId = nodeParam ? +nodeParam : null;
    setSelectedNode(nodes.find((node) => node.id === nodeId) || null);
  }, [area.name]);

  useDidUpdate(() => {
    const tileIndex = area.tiles.findIndex((tile) => tile.id === activeTile.id);
    let searchParams: URLSearchParamsInit = `tile=${tileIndex}`;
    if (selectedNode) {
      searchParams += `&node=${selectedNode.id}`;
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTile, selectedNode]);

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

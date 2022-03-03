import { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import type { Area } from "~/lib/types";
import L from "leaflet";
import includeCanvasTileLayer from "./includeCanvasTileLayer";
import "leaflet-rotate";
import MousePosition from "./MousePosition";
import type { AreaNode } from "@prisma/client";
import TileControl from "./TileControl";
import { getMapCenter } from "~/lib/map";
import NodeDetails from "./NodeDetails";
import DraggableMarker from "./DraggableMarker";

includeCanvasTileLayer();

type MapProps = {
  area: Area;
  nodes: AreaNode[];
};
export default function MapView({ area, nodes }: MapProps) {
  const [selectedNode, setSelectedNode] = useState<AreaNode | null>(null);
  const [activeTile, setActiveTile] = useState(area.tiles[0]);
  const [editingNode, setEditingNode] = useState<Partial<AreaNode> | null>(
    null
  );

  useEffect(() => {
    setSelectedNode(null);
    setEditingNode(null);
  }, [area.name]);

  useEffect(() => {
    setActiveTile(area.tiles[0]);
  }, [area]);

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
        onActiveTileChange={setActiveTile}
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

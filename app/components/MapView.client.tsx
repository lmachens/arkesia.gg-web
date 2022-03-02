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

includeCanvasTileLayer();

type MapProps = {
  area: Area;
  nodes: AreaNode[];
};
export default function MapView({ area, nodes }: MapProps) {
  const [selectedNode, setSelectedNode] = useState<AreaNode | null>(null);

  useEffect(() => {
    setSelectedNode(null);
  }, [area.name]);

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
      <TileControl area={area} nodes={nodes} onNodeClick={setSelectedNode} />
      <NodeDetails
        selectedNode={selectedNode}
        onClose={() => setSelectedNode(null)}
      />
    </MapContainer>
  );
}

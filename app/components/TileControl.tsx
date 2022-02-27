import { Image } from "@mantine/core";
import { AreaNode } from "@prisma/client";
import { useEffect, useMemo, useRef, useState } from "react";
import { TileLayer, Tooltip, useMap } from "react-leaflet";
import { getBounds, getMapCenter } from "~/lib/map";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import { Area } from "~/lib/types";
import CanvasMarker from "./CanvasMarker";
import DraggableMarker from "./DraggableMarker";

type TileControlProps = {
  area: Area;
  nodes: AreaNode[];
  onNodeClick: (node: AreaNode) => void;
};

export default function TileControl({
  area,
  nodes,
  onNodeClick,
}: TileControlProps) {
  const [activeTile, setActiveTile] = useState(area.tiles[0]);
  const map = useMap();
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  useEffect(() => {
    setActiveTile(area.tiles[0]);
  }, [area]);

  useEffect(() => {
    map.panTo(getMapCenter(activeTile));
    if (tileLayerRef.current) {
      tileLayerRef.current.options.bounds = getBounds(activeTile);
      tileLayerRef.current.setUrl(activeTile.url);
    }
  }, [activeTile]);

  const tileNodes = useMemo(
    () => nodes.filter((node) => node.tileId === activeTile.id),
    [activeTile.id, nodes]
  );

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control">
        {area.tiles.map((tile) => (
          <Image
            m="md"
            key={tile.full}
            onClick={() => setActiveTile(tile)}
            sx={() => ({
              transform: "rotate(-45deg)",
              cursor: "pointer",
              transition: "0.2s ease",
              "&:hover": {
                transform: "rotate(-45deg) scale(1.2)",
              },
            })}
            src={tile.full}
            alt=""
            height={50}
            width={50}
            fit="contain"
          />
        ))}
      </div>
      <TileLayer
        ref={tileLayerRef}
        url={activeTile.url}
        minNativeZoom={2}
        maxNativeZoom={2}
        minZoom={0}
        maxZoom={4}
        tileSize={256}
        bounds={getBounds(activeTile)}
      />
      {tileNodes.map((node) => (
        <CanvasMarker
          key={node.position.toString()}
          center={node.position as [number, number]}
          src={`${ICON_BASE_URL}${
            nodeTypesMap[node.type]?.icon || "unknown.webp"
          }`}
          radius={16}
          padding={5}
          showBackground
          borderColor={nodeTypesMap[node.type]?.color || "transparent"}
          onClick={() => {
            if (!document.querySelector("#new-marker-drawer")) {
              onNodeClick(node);
            }
          }}
        >
          <Tooltip direction="top" offset={[0, -10]}>
            {node.name}
          </Tooltip>
        </CanvasMarker>
      ))}
      <DraggableMarker area={area} tile={activeTile} />
    </div>
  );
}

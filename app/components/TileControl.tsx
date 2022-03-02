import { Image } from "@mantine/core";
import type { AreaNode } from "@prisma/client";
import { useEffect, useMemo, useRef, useState } from "react";
import { TileLayer, Tooltip, useMap } from "react-leaflet";
import { getBounds, getMapCenter } from "~/lib/map";
import { TILE_BASE_URL } from "~/lib/static";
import type { Area } from "~/lib/types";
import DraggableMarker from "./DraggableMarker";
import IconMarker from "./IconMarker";

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
      tileLayerRef.current.setUrl(`${TILE_BASE_URL}${activeTile.tile}`);
    }
  }, [activeTile, map]);

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
        tileSize={256}
        bounds={getBounds(activeTile)}
      />
      {tileNodes.map((node) => (
        <IconMarker
          key={node.position.toString()}
          position={node.position as [number, number]}
          alt={node.type}
          type={node.type}
          riseOnHover
          eventHandlers={{
            click() {
              if (!document.querySelector("#new-marker-drawer")) {
                onNodeClick(node);
              }
            },
          }}
        >
          <Tooltip direction="top" offset={[0, -10]}>
            {node.name}
          </Tooltip>
        </IconMarker>
      ))}
      <DraggableMarker area={area} tile={activeTile} />
    </div>
  );
}

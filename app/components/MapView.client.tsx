import { Map } from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import { Area } from "~/lib/types";
import L from "leaflet";
import MousePosition from "./MousePosition";
import Contextmenu from "./Contextmenu";

const DefaultIcon = L.icon({
  iconUrl: "/markers/unknown.webp",
  iconSize: [32, 32],
  tooltipAnchor: [0, -20],
});

L.Marker.prototype.options.icon = DefaultIcon;

type MapProps = {
  area: Area;
  selectedNodes: string[];
};
export default function MapView({ area, selectedNodes }: MapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const nodes = area.nodes.filter((node) => selectedNodes.includes(node.name));

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={getMapCenter(area)}
        zoom={1}
        whenCreated={setMap}
        crs={L.CRS.Simple}
        attributionControl={false}
      >
        <div className="inner-shadow" />
        <TileLayer
          ref={tileLayerRef}
          url={area.tileURL}
          minNativeZoom={2}
          maxNativeZoom={2}
          minZoom={0}
          maxZoom={4}
          tileSize={256}
          bounds={getBounds(area)}
        />
        <MousePosition />
        <Contextmenu />
        {nodes.map((node) => (
          <Marker key={node.position.toString()} position={node.position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    ),
    [nodes]
  );

  useEffect(() => {
    console.log("EFFECT");
    if (map) {
      map.panTo(getMapCenter(area));
    }
    if (tileLayerRef.current) {
      tileLayerRef.current.options.bounds = getBounds(area);
      tileLayerRef.current.setUrl(area.tileURL);
    }
  }, [map, area]);

  return <>{displayMap}</>;
}

function getMapCenter(area: Area): [number, number] {
  return [(-64 * area.tiles[0]) / 2, (64 * area.tiles[1]) / 2];
}

function getBounds(area: Area): [[number, number], [number, number]] {
  return [
    [0, 64 * area.tiles[1]],
    [-64 * area.tiles[0], 0],
  ];
}

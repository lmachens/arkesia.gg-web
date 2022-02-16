import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import DraggableMarker from "./DraggableMarker";

export default function Contextmenu() {
  const [latLng, setLatLng] = useState<L.LatLng | null>(null);

  useMapEvents({
    contextmenu: (event) => {
      setLatLng(event.latlng);
    },
  });

  if (!latLng) {
    return null;
  }
  return (
    <DraggableMarker initialLatLng={latLng} onClose={() => setLatLng(null)} />
  );
}

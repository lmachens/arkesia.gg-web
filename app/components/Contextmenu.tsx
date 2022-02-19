import { useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { Area } from "~/lib/types";
import DraggableMarker from "./DraggableMarker";

type ContextMenuProps = {
  area: Area;
};
export default function Contextmenu({ area }: ContextMenuProps) {
  const [latLng, setLatLng] = useState<L.LatLng | null>(null);
  const map = useMap();

  useMapEvents({
    contextmenu: (event) => {
      map.closePopup();
      setLatLng(event.latlng);
    },
  });

  if (!latLng) {
    return null;
  }
  return (
    <DraggableMarker
      initialLatLng={latLng}
      onClose={() => setLatLng(null)}
      area={area}
    />
  );
}

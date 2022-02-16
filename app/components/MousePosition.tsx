import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export default function MousePosition() {
  const map = useMap();
  const [latLng, setLatLng] = useState<L.LeafletMouseEvent["latlng"] | null>(
    null
  );

  useEffect(() => {
    const handleMouseMove = (event: L.LeafletMouseEvent) => {
      setLatLng(event.latlng);
    };

    const handleMouseOut = () => {
      setLatLng(null);
    };

    map.on("mousemove", handleMouseMove);
    map.on("mouseout", handleMouseOut);

    return () => {
      map.off("mousemove", handleMouseMove);
      map.off("mouseout", handleMouseOut);
    };
  }, [map]);

  if (!latLng) {
    return null;
  }

  return (
    <div className="mouse-position">
      [{latLng.lat.toFixed(2)}, {latLng.lng.toFixed(2)}]
    </div>
  );
}

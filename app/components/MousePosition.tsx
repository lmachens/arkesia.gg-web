import { Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { useDrawerPosition } from "~/lib/store";

export default function MousePosition() {
  const map = useMap();
  const [latLng, setLatLng] = useState<L.LeafletMouseEvent["latlng"] | null>(
    null
  );
  const drawerPosition = useDrawerPosition();

  useEffect(() => {
    const handleMouseMove = (event: L.LeafletMouseEvent) => {
      setLatLng(event.latlng);
    };

    map.on("mousemove", handleMouseMove);

    return () => {
      map.off("mousemove", handleMouseMove);
    };
  }, [map]);

  if (!latLng) {
    return null;
  }

  return (
    <Text
      className={`leaflet-bottom leaflet-${
        drawerPosition === "left" ? "right" : "left"
      }`}
      p="xs"
      color="dimmed"
    >
      [{latLng.lat.toFixed(2)}, {latLng.lng.toFixed(2)}]
    </Text>
  );
}

import type { MarkerProps } from "react-leaflet";
import { Marker } from "react-leaflet";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import L from "leaflet";
import { forwardRef } from "react";

const icons: {
  [path: string]: L.Icon;
} = {};
function getIcon(path: string) {
  if (!icons[path]) {
    icons[path] = L.icon({
      iconUrl: `${ICON_BASE_URL}${path}`,
      iconSize: [32, 32],
      tooltipAnchor: [0, -17],
      popupAnchor: [0, -10],
    });
  }
  return icons[path];
}

type IconMarkerProps = {
  verified: boolean;
  type?: string;
} & MarkerProps;
const IconMarker = forwardRef<L.Marker, IconMarkerProps>(
  ({ type, verified, ...props }, ref) => {
    return (
      <Marker
        icon={getIcon((type && nodeTypesMap[type]?.icon) || "unknown.webp")}
        opacity={verified ? 1 : 0.25}
        {...props}
        ref={ref}
      />
    );
  }
);

IconMarker.displayName = "IconMarker";

export default IconMarker;

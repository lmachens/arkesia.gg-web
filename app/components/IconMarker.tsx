import type { MarkerProps } from "react-leaflet";
import { Marker } from "react-leaflet";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import L from "leaflet";
import { forwardRef } from "react";
import type { AreaNodeType } from "~/lib/types";

const icons: {
  [path: string]: L.Icon;
} = {};
function getIcon(type?: AreaNodeType) {
  const path = type ? type.icon : "unknown.webp";
  if (!icons[path]) {
    const iconSize: L.PointExpression =
      type?.size === "lg" ? [48, 48] : [32, 32];
    icons[path] = L.icon({
      iconUrl: `${ICON_BASE_URL}${path}`,
      iconSize,
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
        icon={getIcon(type ? nodeTypesMap[type] : undefined)}
        opacity={verified ? 1 : 0.25}
        {...props}
        ref={ref}
      />
    );
  }
);

IconMarker.displayName = "IconMarker";

export default IconMarker;

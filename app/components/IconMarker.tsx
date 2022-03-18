import type { MarkerProps } from "react-leaflet";
import { Marker } from "react-leaflet";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import L from "leaflet";
import { forwardRef } from "react";
import type { AreaNodeType } from "~/lib/types";
import { useMarkerSize, useShowNameOnMap } from "~/lib/store";

let icons: {
  [path: string]: L.Icon;
} = {};
let lastMarkerSize: number | null = null;
function getIcon(markerSize: number, type?: AreaNodeType) {
  if (lastMarkerSize !== markerSize) {
    icons = {};
    lastMarkerSize = markerSize;
  }
  const path = type ? type.icon : "unknown.webp";
  if (!icons[path]) {
    const iconSize: L.PointExpression =
      type?.size === "lg"
        ? [markerSize * 1.3, markerSize * 1.3]
        : [markerSize, markerSize];
    icons[path] = L.icon({
      iconUrl: `${ICON_BASE_URL}${path}`,
      iconSize,
    });
  }
  return icons[path];
}

const labels: {
  [path: string]: L.DivIcon;
} = {};
function getLabel(label: string) {
  if (!labels[label]) {
    labels[label] = L.divIcon({
      html: label,
      className: "text-below-marker",
      iconAnchor: [0, -24],
      iconSize: undefined,
    });
  }
  return labels[label];
}

type IconMarkerProps = {
  verified: boolean;
  type?: string;
  name?: string | null;
} & MarkerProps;
const IconMarker = forwardRef<L.Marker, IconMarkerProps>(
  ({ type, verified, name, ...props }, ref) => {
    const areaNodeType = type ? nodeTypesMap[type] : undefined;
    const showNameOnMap = useShowNameOnMap();
    const markerSize = useMarkerSize();

    return (
      <>
        <Marker
          icon={getIcon(markerSize, areaNodeType)}
          opacity={verified ? 1 : 0.25}
          {...props}
          ref={ref}
        />
        {showNameOnMap && name && (
          <Marker
            icon={getLabel(name)}
            opacity={verified ? 1 : 0.25}
            interactive={false}
            position={props.position}
          />
        )}
      </>
    );
  }
);

IconMarker.displayName = "IconMarker";

export default IconMarker;

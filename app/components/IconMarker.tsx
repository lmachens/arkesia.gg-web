import type { MarkerProps } from "react-leaflet";
import { Marker } from "react-leaflet";
import { areaContinents, ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import L from "leaflet";
import { forwardRef } from "react";
import type { AreaNodeType, TransitTo } from "~/lib/types";
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
function getLabel(
  label: string,
  type?: string,
  transitTo?: TransitTo | null,
  size?: string | null
) {
  const key = type + label;
  if (!labels[key]) {
    let href = "";
    if (transitTo) {
      const transitToLocation = transitTo.areaNodeLocations[0];
      if (transitToLocation) {
        const continent = areaContinents[transitToLocation.areaName];
        href = `/maps/${continent}/${transitToLocation.areaName}?tile=${transitToLocation.tileId}`;
      }
    }

    labels[key] = L.divIcon({
      // Anchors are for SEO only (not clickable)
      html: href
        ? `<a href="${href}" class="${
            size === "lg" ? "seo-anchor-lg" : "seo-anchor"
          }">${label}</a>`
        : label,
      className: "text-below-marker",
      iconAnchor: [0, -24],
      iconSize: undefined,
    });
  }
  return labels[key];
}

type IconMarkerProps = {
  transitTo?: TransitTo | null;
  verified: boolean;
  type?: string;
  name?: string | null;
} & MarkerProps;
const IconMarker = forwardRef<L.Marker, IconMarkerProps>(
  ({ type, verified, name, transitTo, ...props }, ref) => {
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
            icon={getLabel(name, type, transitTo, areaNodeType?.size)}
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

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
function getIcon(markerSize: number, type?: AreaNodeType, highlight?: boolean) {
  if (lastMarkerSize !== markerSize) {
    icons = {};
    lastMarkerSize = markerSize;
  }
  const path = type ? type.icon : "unknown.webp";
  const identifier = path + (highlight ? "-highlight" : "");
  if (!icons[identifier]) {
    const sizeMultiplicator = type?.sizeMultiplicator || 1;
    const iconSize: L.PointExpression =
      type?.size === "lg"
        ? [
            markerSize * 1.3 * sizeMultiplicator,
            markerSize * 1.3 * sizeMultiplicator,
          ]
        : [markerSize * sizeMultiplicator, markerSize * sizeMultiplicator];
    icons[identifier] = L.icon({
      iconUrl: `${ICON_BASE_URL}${path}`,
      iconSize,
      className: highlight ? "marker-highlight" : "",
    });
  }
  return icons[identifier];
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
        href = `/${continent}/${transitToLocation.areaName}?tileId=${transitToLocation.tileId}`;
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
      iconAnchor: [0, -18],
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
  highlight?: boolean;
  opacity?: number;
} & MarkerProps;
const IconMarker = forwardRef<L.Marker, IconMarkerProps>(
  ({ type, verified, name, transitTo, highlight, opacity, ...props }, ref) => {
    const areaNodeType = type ? nodeTypesMap[type] : undefined;
    const showNameOnMap = useShowNameOnMap();
    const markerSize = useMarkerSize();
    const zIndex = areaNodeType?.zIndex || 0;

    return (
      <>
        <Marker
          icon={getIcon(markerSize, areaNodeType, highlight)}
          zIndexOffset={highlight ? 1000 : zIndex}
          // @ts-ignore
          autoPanOnFocus={false}
          opacity={verified ? opacity : 0.5}
          {...props}
          ref={ref}
        />
        {showNameOnMap && name && (
          <Marker
            icon={getLabel(name, type, transitTo, areaNodeType?.size)}
            interactive={false}
            zIndexOffset={(highlight ? 1000 : zIndex) + 1}
            position={props.position}
            opacity={verified ? opacity : 0.5}
            // @ts-ignore
            autoPanOnFocus={false}
          />
        )}
      </>
    );
  }
);

IconMarker.displayName = "IconMarker";

export default IconMarker;

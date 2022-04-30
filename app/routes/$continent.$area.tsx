import { LoadingOverlay } from "@mantine/core";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import type { ShouldReloadFunction } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import FiltersSelect from "~/components/FiltersSelect";
import MapView from "~/components/MapView.client";
import NodeDetails from "~/components/NodeDetails";
import { nodeAction } from "~/lib/actions.server";
import { areaLoader } from "~/lib/loaders.server";
import type { AreaNodeLocationDTO } from "~/lib/types";

export const loader = areaLoader;
export const action = nodeAction;

export const meta: MetaFunction = ({ params, data, location }) => {
  if (location.search && data.nodeLocations) {
    const searchParams = new URLSearchParams(location.search);
    const nodeId = +(searchParams.get("node") || "");
    const nodeLocation = (data.nodeLocations as AreaNodeLocationDTO[]).find(
      (nodeLocation) => nodeLocation.areaNodeId === nodeId
    );
    if (nodeLocation?.areaNode) {
      const cleanDescription = nodeLocation.areaNode.description?.replace(
        /<\/?[^>]+(>|$)/g,
        ""
      );
      return {
        title: `${
          nodeLocation.areaNode.name || nodeLocation.areaNode.type
        } in ${params.area}, ${params.continent} - Arkesia.gg - Lost Ark Map`,
        description: `${cleanDescription ? `${cleanDescription} ` : ""}${
          nodeLocation.areaNode.name
            ? `${nodeLocation.areaNode.name} is a ${nodeLocation.areaNode.type}`
            : nodeLocation.areaNode.type
        } is located in ${params.continent} / ${params.area} in Lost Ark.`,
      };
    }
  }
  if (params.area && params.continent) {
    return {
      title: `${params.area} in ${params.continent} - Arkesia.gg - Lost Ark Map`,
      description: `Interactive map with mokoko seeds, hidden stories and more resources in ${params.continent} / ${params.area} for Lost Ark.`,
    };
  }

  return {
    title: "Arkesia.gg - Lost Ark Map",
    description:
      "Arkesia is an interactive map with mokoko seeds, hidden stories and more for Lost Ark.",
  };
};

export const unstable_shouldReload: ShouldReloadFunction = ({ submission }) => {
  return Boolean(submission);
};

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "s-maxage=60, stale-while-revalidate",
  };
};

export default function WorldPage() {
  return (
    <>
      <ClientOnly fallback={<LoadingOverlay visible />}>
        {() => <MapView />}
      </ClientOnly>
      <NodeDetails />
      <FiltersSelect />
    </>
  );
}

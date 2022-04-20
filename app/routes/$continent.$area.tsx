import { LoadingOverlay } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import type { ShouldReloadFunction } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import NodeDetails from "~/components/NodeDetails";
import { nodeAction } from "~/lib/actions.server";
import { areaLoader } from "~/lib/loaders.server";

export const loader = areaLoader;
export const action = nodeAction;

export const meta: MetaFunction = ({ params }) => {
  if (params.area && params.continent) {
    return {
      title: `${params.area} in ${params.continent} - Arkesia.gg`,
      description: `Interactive map with mokoko seeds, hidden stories and more resources in ${params.continent} / ${params.area} for Lost Ark.`,
    };
  }

  return {
    title: "Lost Ark Map - Arkesia.gg",
    description:
      "Arkesia is an interactive map with mokoko seeds, hidden stories and more for Lost Ark.",
  };
};

export const unstable_shouldReload: ShouldReloadFunction = ({ submission }) => {
  return Boolean(submission);
};

export default function WorldPage() {
  return (
    <>
      <ClientOnly fallback={<LoadingOverlay visible />}>
        {() => <MapView />}
      </ClientOnly>
      <NodeDetails />
    </>
  );
}

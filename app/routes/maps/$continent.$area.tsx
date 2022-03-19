import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { AppShell, LoadingOverlay } from "@mantine/core";
import { nodeAction } from "~/lib/actions.server";
import { areaLoader } from "~/lib/loaders.server";
import AppBreadcrumbs from "~/components/AppBreadcrumbs";
import type { MetaFunction } from "remix";

export const loader = areaLoader;
export const action = nodeAction;

export const meta: MetaFunction = ({ params }) => {
  if (params.continent === "World") {
    return {
      title: "Lost Ark Map - Arkesia.gg",
      description:
        "Arkesia is an interactive map with mokoko seeds, hidden stories and more for Lost Ark.",
    };
  }
  return {
    title: `${params.area} in ${params.continent} - Arkesia.gg`,
    description: `Interactive map with mokoko seeds, hidden stories and more resources in ${params.continent} / ${params.area} for Lost Ark.`,
  };
};

export default function MapPage() {
  return (
    <AppShell
      padding={0}
      style={{ overflow: "hidden" }}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.dark[8],
          color: theme.colors.dark[0],
          height: "100vh",
        },
      })}
    >
      <AppBreadcrumbs />
      <ClientOnly fallback={<LoadingOverlay visible />}>
        {() => <MapView />}
      </ClientOnly>
    </AppShell>
  );
}

import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { AppShell, LoadingOverlay } from "@mantine/core";
import { nodeAction } from "~/lib/actions.server";
import ActionIcons from "~/components/ActionIcons";
import { areaLoader } from "~/lib/loaders.server";
import AppBreadcrumbs from "~/components/AppBreadcrumbs";

export const loader = areaLoader;
export const action = nodeAction;

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
      <ActionIcons />
      <ClientOnly fallback={<LoadingOverlay visible />}>
        {() => <MapView />}
      </ClientOnly>
    </AppShell>
  );
}

import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { AppShell, LoadingOverlay } from "@mantine/core";
import { nodeAction } from "~/lib/actions.server";
import AppHeader from "~/components/AppHeader";
import Settings from "~/components/Settings";
import { areaLoader } from "~/lib/loaders.server";

export const loader = areaLoader;
export const action = nodeAction;

export default function MapPage() {
  return (
    <AppShell
      padding={0}
      style={{ overflow: "hidden" }}
      header={
        <AppHeader>
          <Settings />
        </AppHeader>
      }
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.dark[5],
          color: theme.colors.dark[0],
        },
      })}
    >
      <ClientOnly fallback={<LoadingOverlay visible />}>
        {() => <MapView />}
      </ClientOnly>
    </AppShell>
  );
}

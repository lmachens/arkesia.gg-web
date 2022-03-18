import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { AppShell, LoadingOverlay, Text } from "@mantine/core";
import { nodeAction } from "~/lib/actions.server";
import AppBreadcrumbs from "~/components/AppBreadcrumbs";
import { useParams } from "react-router-dom";
import { continents } from "~/lib/static";
import { useMemo } from "react";

export const action = nodeAction;

export default function MapPage() {
  const params = useParams();

  const area = useMemo(() => {
    const continent = continents.find(
      (mapData) => mapData.name === params.continent
    );
    return continent?.areas.find((area) => area.name === params.area);
  }, [params.area]);

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
      {!area && <Text>Huh? What the heck is "{params.area}"?</Text>}
      {area && (
        <>
          <AppBreadcrumbs area={area} />
          <ClientOnly fallback={<LoadingOverlay visible />}>
            {() => <MapView area={area} />}
          </ClientOnly>
        </>
      )}
    </AppShell>
  );
}

import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { AppShell, LoadingOverlay, Text } from "@mantine/core";
import { nodeAction } from "~/lib/actions.server";
import AppBreadcrumbs from "~/components/AppBreadcrumbs";
import { useParams } from "react-router-dom";
import { continents } from "~/lib/static";
import { useMemo } from "react";
import type { MetaFunction } from "remix";
import { areaLoader } from "~/lib/loaders.server";

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

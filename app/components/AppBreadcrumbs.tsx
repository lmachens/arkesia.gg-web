import { useSpotlight } from "@mantine/spotlight";
import { Breadcrumbs, Button, Text } from "@mantine/core";
import { useLoaderData } from "remix";
import type { LoaderData } from "~/lib/loaders.server";

export default function AppBreadcrumbs() {
  const { continentName, area } = useLoaderData<LoaderData>();
  const spotlight = useSpotlight();

  return (
    <Button
      sx={{
        position: "absolute",
        top: 7,
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "fit-content",
        zIndex: 680,
      }}
      variant="gradient"
      gradient={{ from: "teal", to: "blue", deg: 60 }}
      onClick={spotlight.openSpotlight}
    >
      <Breadcrumbs
        styles={{
          separator: { color: "inherit" },
        }}
      >
        <Text>{continentName}</Text>
        {area && continentName !== "World" && <Text>{area.name}</Text>}
      </Breadcrumbs>
      <Text
        size="xs"
        sx={(theme) => ({
          marginLeft: 8,
          padding: "2px 4px",
          borderRadius: theme.radius.xs,
          background: "#0000005e",
        })}
      >
        CTRL + F
      </Text>
    </Button>
  );
}

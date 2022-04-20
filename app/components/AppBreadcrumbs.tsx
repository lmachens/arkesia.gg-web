import { useSpotlight } from "@mantine/spotlight";
import { Breadcrumbs, Button, Text } from "@mantine/core";
import { useParams } from "@remix-run/react";
import { arkesiaArea, continents, world } from "~/lib/static";
import { useMemo } from "react";

export default function AppBreadcrumbs() {
  const params = useParams();
  const spotlight = useSpotlight();

  const area = useMemo(() => {
    const continent = continents.find(
      (continent) => continent.name === params.continent
    );
    return (
      continent?.areas.find((area) => area.name === params.area) || arkesiaArea
    );
  }, [params.area, params.continent]);

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
        <Text component="h1" sx={{ margin: 0 }}>
          {params.continent || world.name}
        </Text>
        {area && params.continent && (
          <Text component="h2" sx={{ margin: 0 }}>
            {area.name}
          </Text>
        )}
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

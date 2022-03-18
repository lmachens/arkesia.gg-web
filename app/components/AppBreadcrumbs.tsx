import { useSpotlight } from "@mantine/spotlight";
import { Breadcrumbs, Button, Text } from "@mantine/core";
import { useParams } from "remix";
import type { Area } from "~/lib/types";

export default function AppBreadcrumbs({ area }: { area: Area }) {
  const params = useParams();
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
        <Text>{params.continent}</Text>
        {area && params.continent !== "World" && <Text>{area.name}</Text>}
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

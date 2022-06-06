import {
  Avatar,
  Box,
  Button,
  List,
  ScrollArea,
  Space,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { useMemo } from "react";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import {
  useDiscoveredNodes,
  useIsShowingDiscoveredNodes,
  useSetDiscoveredNodes,
  useToggleIsShowingDiscoveredNodes,
} from "~/lib/store";

export function DiscoveredNodes() {
  const discoveredNodes = useDiscoveredNodes();
  const setDiscoveredNodes = useSetDiscoveredNodes();
  const isShowingDiscoveredNodes = useIsShowingDiscoveredNodes();
  const toggleIsShowingDiscoveredNodes = useToggleIsShowingDiscoveredNodes();

  const groups = useMemo(
    () =>
      discoveredNodes.reduce<{ [type: string]: number }>(
        (group, node) => ({
          ...group,
          [node.type]: (group[node.type] || 0) + 1,
        }),
        {}
      ),
    [discoveredNodes]
  );

  return (
    <>
      <Text style={{ marginBottom: 10 }} weight={500}>
        Discovered Nodes
      </Text>
      <Stack>
        <Box>
          <Button
            compact
            mr="sm"
            component="a"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(discoveredNodes)
            )}`}
            download="arkesia_discovered_nodes.json"
          >
            Export
          </Button>
          <Button compact component="label">
            <input
              type="file"
              name="discoveredNodes"
              accept=".json"
              style={{ display: "none" }}
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) {
                  return;
                }
                const reader = new FileReader();
                reader.addEventListener("load", (loadEvent) => {
                  const text = loadEvent.target?.result;
                  if (!text || typeof text !== "string") {
                    return;
                  }
                  try {
                    const discoveredNodes = JSON.parse(text);
                    setDiscoveredNodes(discoveredNodes);
                  } catch (error) {
                    // Do nothing
                  }
                  event.target.value = "";
                });
                reader.readAsText(file);
              }}
            />
            Import
          </Button>
        </Box>
        <Switch
          label="Show discovered nodes"
          checked={isShowingDiscoveredNodes}
          onChange={toggleIsShowingDiscoveredNodes}
        />
        <ScrollArea style={{ maxHeight: 250 }}>
          <List center size="sm">
            {Object.entries(groups).map(([type, count]) => (
              <List.Item
                key={type}
                icon={
                  <Avatar
                    src={`${ICON_BASE_URL}${nodeTypesMap[type].icon}`}
                    alt=""
                    size="sm"
                  />
                }
              >
                {type}: {count}
              </List.Item>
            ))}
          </List>
        </ScrollArea>
      </Stack>
    </>
  );
}

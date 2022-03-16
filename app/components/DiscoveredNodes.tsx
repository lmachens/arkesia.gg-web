import { Avatar, List, ScrollArea } from "@mantine/core";
import { useMemo } from "react";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import { useDiscoveredNodes } from "~/lib/store";

export function DiscoveredNodes() {
  const discoveredNodes = useDiscoveredNodes();

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
  );
}

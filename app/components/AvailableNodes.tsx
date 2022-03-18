import { Avatar, List } from "@mantine/core";
import type { AreaNode } from "@prisma/client";
import { useMemo } from "react";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import { useNodes } from "~/lib/store";

type AvailableNodesProps = {
  node: AreaNode;
};
export function AvailableNodes({ node }: AvailableNodesProps) {
  const nodes = useNodes();

  const areaNodesCount = useMemo(() => {
    const areaNodes = nodes.filter(
      (otherNode) => otherNode.areaName === node.areaName
    );
    const result = Object.entries(
      areaNodes.reduce<{
        [type: string]: number;
      }>(
        (prev, node) => ({
          ...prev,
          [node.type]: (prev[node.type] || 0) + 1,
        }),
        {}
      )
    );
    return result.sort((a, b) => a[0].localeCompare(b[0]));
  }, [nodes, node.areaName]);

  return (
    <List center size="sm">
      {areaNodesCount.map(([type, count]) => (
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
  );
}

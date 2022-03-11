import { Avatar, List } from "@mantine/core";
import type { AreaNode } from "@prisma/client";
import { useMemo } from "react";
import { useLoaderData } from "remix";
import type { LoaderData } from "~/lib/loaders.server";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";

type AvailableNodesProps = {
  node: AreaNode;
};
export function AvailableNodes({ node }: AvailableNodesProps) {
  const { nodesByArea } = useLoaderData<LoaderData>();

  const areaNodesCount = useMemo(
    () =>
      nodesByArea.filter((nodeByArea) => nodeByArea.areaName === node.areaName),
    [nodesByArea, node]
  );

  return (
    <List center size="sm">
      {areaNodesCount.map((areaNodeCount) => (
        <List.Item
          key={areaNodeCount.type}
          icon={
            <Avatar
              src={`${ICON_BASE_URL}${nodeTypesMap[areaNodeCount.type].icon}`}
              alt=""
              size="sm"
            />
          }
        >
          {areaNodeCount.type}: {areaNodeCount.count}
        </List.Item>
      ))}
      1
    </List>
  );
}

import { Avatar, List } from "@mantine/core";
import { useEffect, useState } from "react";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import { countTypesByLocation } from "~/lib/supabase";

type AvailableNodesProps = {
  areaName: string;
};
export function AvailableNodes({ areaName }: AvailableNodesProps) {
  const [typesCount, setTypesCount] = useState<
    { type: string; count: number }[]
  >([]);

  useEffect(() => {
    setTypesCount([]);
    countTypesByLocation(areaName).then(setTypesCount);
  }, [areaName]);

  return (
    <List center size="sm">
      {typesCount.map(({ type, count }) => (
        <List.Item
          key={type}
          icon={
            <Avatar
              src={`${ICON_BASE_URL}${nodeTypesMap[type]?.icon}`}
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

import { Avatar, List, Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";
import { ICON_BASE_URL, nodeTypesMap } from "~/lib/static";
import { countTypesByLocation } from "~/lib/supabase";

type AvailableNodesProps = {
  areaName: string;
};
export function AvailableNodes({ areaName }: AvailableNodesProps) {
  const [typesCount, setTypesCount] = useState<
    { type: string; count: number }[] | null
  >(null);

  useEffect(() => {
    setTypesCount(null);
    countTypesByLocation(areaName).then(setTypesCount);
  }, [areaName]);

  if (typesCount === null) {
    return (
      <>
        <Skeleton height={8} />
        <Skeleton mt={6} height={8} />
        <Skeleton mt={6} height={8} />
      </>
    );
  }
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

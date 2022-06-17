import { Anchor } from "@mantine/core";
import type { Area, AreaNodeDTO } from "~/lib/types";

type IslandGuideLinkProps = {
  areaNode: AreaNodeDTO | Area;
};
const IslandGuideLink = ({ areaNode }: IslandGuideLinkProps) => {
  const path =
    areaNode.name?.toLowerCase().replace(/\s/g, "-").replace(/'/g, "") || "";
  return (
    <Anchor href={`https://lost-ark.maxroll.gg/island/${path}`} target="_blank">
      Maxroll Island Guide
    </Anchor>
  );
};

export default IslandGuideLink;

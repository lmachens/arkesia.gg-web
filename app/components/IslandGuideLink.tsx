import { Anchor } from "@mantine/core";
import type { AreaNodeDTO } from "~/lib/types";

type IslandGuideLinkProps = {
  areaNode: AreaNodeDTO;
};
const IslandGuideLink = ({ areaNode }: IslandGuideLinkProps) => {
  const path =
    areaNode.name?.toLowerCase().replace(/\s/g, "-").replace(/'/g, "s") || "";
  return (
    <Anchor href={`https://lost-ark.maxroll.gg/island/${path}`} target="_blank">
      Maxroll Island Guide
    </Anchor>
  );
};

export default IslandGuideLink;

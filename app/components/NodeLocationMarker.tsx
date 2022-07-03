import { Text } from "@mantine/core";
import { Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { areaContinents } from "~/lib/static";
import {
  useDiscoveredNodes,
  useDiscoveredNodesOpacity,
  useSetSelectedNodeLocation,
  useToggleDiscoveredNode,
} from "~/lib/store";
import type { AreaNodeLocationDTO } from "~/lib/types";
import IconMarker from "./IconMarker";

type NodeLocationTooltipProps = {
  nodeLocation: AreaNodeLocationDTO;
  selectedNodeLocation: AreaNodeLocationDTO | null;
  onClick: () => void;
};
const NodeLocationMarker = ({
  nodeLocation,
  selectedNodeLocation,
  onClick,
}: NodeLocationTooltipProps) => {
  const navigate = useNavigate();
  const setSelectedNodeLocation = useSetSelectedNodeLocation();
  const discoveredNodes = useDiscoveredNodes();
  const toggleDiscoveredNode = useToggleDiscoveredNode();
  const discoveredNodesOpacity = useDiscoveredNodesOpacity();

  const isDiscovered = discoveredNodes.some(
    (discoveredNode) => discoveredNode.id === nodeLocation.areaNodeId
  );
  return (
    <IconMarker
      key={nodeLocation.position.toString()}
      position={nodeLocation.position as [number, number]}
      alt={nodeLocation.areaNode.type}
      type={nodeLocation.areaNode.type}
      name={nodeLocation.areaNode.name}
      riseOnHover
      verified={Boolean(nodeLocation.areaNode.userId)}
      transitTo={nodeLocation.areaNode.transitTo}
      highlight={selectedNodeLocation?.id === nodeLocation.id}
      opacity={isDiscovered ? discoveredNodesOpacity : 1}
      eventHandlers={{
        click: onClick,
        contextmenu() {
          if (!nodeLocation.areaNode.transitTo) {
            toggleDiscoveredNode(nodeLocation.areaNode);
            return;
          }
          const transitToLocation =
            nodeLocation.areaNode.transitTo.areaNodeLocations[0];
          const continent = areaContinents[transitToLocation.areaName];
          setSelectedNodeLocation(null);
          if (
            nodeLocation.areaName === "Arkesia" &&
            transitToLocation.areaName !== "Arkesia"
          ) {
            navigate(`/${continent}/${transitToLocation.areaName}`);
          } else {
            navigate(
              `/${continent}/${transitToLocation.areaName}?tileId=${transitToLocation.tileId}&node=${nodeLocation.areaNode.transitTo.id}&location=${transitToLocation.id}&hideDetails=true`
            );
          }
        },
      }}
    >
      <Tooltip direction="top" offset={[0, -15]}>
        <Text size="md" align="center">
          {nodeLocation.areaNode.name || nodeLocation.areaNode.type}
          {!nodeLocation.areaNode.userId && " (Not verified)"}
        </Text>
        {nodeLocation.areaNode.name &&
          nodeLocation.areaNode.name !== nodeLocation.areaNode.type && (
            <Text size="xs" color="teal" align="center">
              {nodeLocation.areaNode.type}
            </Text>
          )}
        <Text size="xs" color="cyan" align="center">
          Right-click to{" "}
          {nodeLocation.areaNode.transitTo
            ? "transit"
            : `mark as ${isDiscovered ? "not discovered" : "discovered"}`}
        </Text>
      </Tooltip>
    </IconMarker>
  );
};

export default NodeLocationMarker;

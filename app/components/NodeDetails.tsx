import {
  Button,
  Drawer,
  Group,
  ScrollArea,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import { EyeClosedIcon, EyeOpenIcon } from "@modulz/radix-icons";
import { useEffect, useRef } from "react";
import { useMapEvents } from "react-leaflet";
import { Form, useActionData, useTransition } from "remix";
import {
  useDiscoveredNodes,
  useDrawerPosition,
  useToggleDiscoveredNode,
} from "~/lib/store";
import type { AreaNodeLocationDTO } from "~/lib/types";
import { AvailableNodes } from "./AvailableNodes";
import ImagePreview from "./ImagePreview";
import NodeDescription from "./NodeDescription";

type NodeDetailsProps = {
  selectedNodeLocation: AreaNodeLocationDTO | null;
  onClose: () => void;
  onEdit: (nodeLocation: AreaNodeLocationDTO) => void;
};
export default function NodeDetails({
  selectedNodeLocation,
  onClose,
  onEdit,
}: NodeDetailsProps) {
  const transition = useTransition();
  const actionData = useActionData();
  const [userToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });
  const notifications = useNotifications();
  const notificationId = useRef<string | null>(null);
  const discoveredNodes = useDiscoveredNodes();
  const toggleDiscoveredNode = useToggleDiscoveredNode();
  const drawerPosition = useDrawerPosition();

  useEffect(() => {
    if (
      transition.state === "submitting" &&
      transition.submission.method === "DELETE"
    ) {
      notificationId.current = notifications.showNotification({
        loading: true,
        title: "Submitting deletion request",
        message: "",
        autoClose: false,
        disallowClose: true,
      });
    } else if (transition.state === "idle" && notificationId.current) {
      if (actionData) {
        notifications.updateNotification(notificationId.current, {
          id: notificationId.current,
          title: "Something is wrong",
          message: "",
          color: "red",
        });
      } else {
        notifications.updateNotification(notificationId.current, {
          id: notificationId.current,
          title: userToken ? "Node deleted 💀" : "Submitted for deletion 💀",
          message: "",
        });
        notificationId.current = null;
        onClose();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transition.state, actionData, transition.submission?.method]);

  useMapEvents({
    click: () => {
      if (selectedNodeLocation) {
        onClose();
      }
    },
  });

  return (
    <Drawer
      opened={Boolean(selectedNodeLocation)}
      zIndex={8950}
      withOverlay={false}
      padding="md"
      position={drawerPosition}
      onClose={onClose}
    >
      <ScrollArea style={{ height: "calc(100% - 50px)" }}>
        {selectedNodeLocation && (
          <>
            <Title order={3}>
              {selectedNodeLocation.areaNode.name ||
                selectedNodeLocation.areaNode.type}
            </Title>
            <Text color="teal">{selectedNodeLocation.areaNode.type}</Text>
            <Text size="xs">
              Node ID: {selectedNodeLocation.areaNodeId} Location ID:{" "}
              {selectedNodeLocation.id}
            </Text>

            {selectedNodeLocation.areaNode.description && (
              <NodeDescription
                html={selectedNodeLocation.areaNode.description}
              />
            )}
            {selectedNodeLocation.areaNode.screenshot && (
              <ImagePreview src={selectedNodeLocation.areaNode.screenshot} />
            )}
            <Space h="md" />
            {selectedNodeLocation.areaNode.transitTo && (
              <AvailableNodes node={selectedNodeLocation.areaNode.transitTo} />
            )}
            <Space h="md" />
            <Button
              onClick={() =>
                toggleDiscoveredNode(selectedNodeLocation.areaNode)
              }
              color="gray"
              variant="subtle"
              size="xs"
              compact
              mb="xs"
            >
              <Group>
                {discoveredNodes.some(
                  (discoveredNode) =>
                    discoveredNode.id === selectedNodeLocation.id
                ) ? (
                  <>
                    <EyeClosedIcon /> Discovered
                  </>
                ) : (
                  <>
                    <EyeOpenIcon />
                    Not discovered
                  </>
                )}
              </Group>
            </Button>
            <Text size="xs">See all discovered nodes in the settings</Text>
            <Space h="md" />
            {userToken ? (
              <Form method="delete" className="node-form">
                <input type="hidden" name="_action" value="delete" />
                <input
                  type="hidden"
                  name="id"
                  value={selectedNodeLocation.id}
                />
                <input type="hidden" name="userToken" value={userToken} />
                <Button type="submit" color="red">
                  Delete
                </Button>
                <Button
                  type="button"
                  color="teal"
                  onClick={() => onEdit(selectedNodeLocation)}
                >
                  Edit
                </Button>
              </Form>
            ) : (
              <Form method="post" className="node-form">
                <input type="hidden" name="_action" value="report" />
                <input
                  type="hidden"
                  name="id"
                  value={selectedNodeLocation.id}
                />
                <TextInput
                  label="Is there any issue with this node?"
                  placeholder="Give us details"
                  name="reason"
                  required
                />
                <Button type="submit" color="teal">
                  Report issue
                </Button>
              </Form>
            )}
          </>
        )}
      </ScrollArea>
    </Drawer>
  );
}

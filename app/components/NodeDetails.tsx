import { Button, Drawer, Text, TextInput, Title } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import type { AreaNode } from "@prisma/client";
import { useEffect, useRef } from "react";
import { useMapEvents } from "react-leaflet";
import { Form, useActionData, useTransition } from "remix";
import ImagePreview from "./ImagePreview";

import NodeDescription from "./NodeDescription";

type NodeDetailsProps = {
  selectedNode: AreaNode | null;
  onClose: () => void;
  onEdit: (node: AreaNode) => void;
};
export default function NodeDetails({
  selectedNode,
  onClose,
  onEdit,
}: NodeDetailsProps) {
  const transition = useTransition();
  const actionData = useActionData();
  const [userToken, setUserToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });
  const notifications = useNotifications();
  const notificationId = useRef<string | null>(null);

  useEffect(() => {
    if (
      transition.state === "submitting" &&
      transition.submission.method === "DELETE"
    ) {
      notificationId.current = notifications.showNotification({
        loading: true,
        title: "Removing node",
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
          title: "Node was removed 💀",
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
      onClose();
    },
  });

  return (
    <>
      <Drawer
        opened={Boolean(selectedNode)}
        zIndex={700}
        noOverlay
        padding="md"
        onClose={onClose}
      >
        {selectedNode && (
          <Form method="delete" className="node-form">
            <input type="hidden" name="_action" value="delete" />
            <input type="hidden" name="id" value={selectedNode.id} />
            <Title order={3}>{selectedNode.name}</Title>
            <Text variant="gradient">{selectedNode.type}</Text>
            {selectedNode.description && (
              <NodeDescription html={selectedNode.description} />
            )}
            {selectedNode.screenshot && (
              <ImagePreview src={selectedNode.screenshot} />
            )}
            <TextInput
              label="User-Token"
              required
              placeholder="Only for moderators right now"
              value={userToken}
              onChange={(event) => setUserToken(event.target.value)}
              name="userToken"
              error={actionData?.fieldErrors?.userId}
            />
            <Button type="submit" color="red">
              Delete
            </Button>
            <Button
              type="button"
              color="teal"
              onClick={() => onEdit(selectedNode)}
            >
              Edit
            </Button>
          </Form>
        )}
      </Drawer>
    </>
  );
}

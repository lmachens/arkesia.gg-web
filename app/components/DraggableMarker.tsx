import { useEffect, useMemo, useRef, useState } from "react";
import { Marker, Tooltip } from "react-leaflet";
import { nodeTypes } from "~/lib/static";
import { Form, useActionData, useTransition } from "remix";
import { useNotifications } from "@mantine/notifications";
import { Area } from "~/lib/types";
import { Button, Card, Select, Textarea, TextInput } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";

type DraggableMarkerProps = {
  area: Area;
  initialLatLng: L.LatLng;
  onClose: () => void;
};

export default function DraggableMarker({
  area,
  initialLatLng,
  onClose,
}: DraggableMarkerProps) {
  const markerRef = useRef<L.Marker>(null);
  const [latLng, setLatLng] = useState<L.LatLng>(initialLatLng);
  const [type, setType] = useLocalStorageValue<string>({
    key: "last-type",
    defaultValue: "",
  });
  const transition = useTransition();
  const notifications = useNotifications();
  const notificationId = useRef<string | null>(null);
  const [userToken, setUserToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });
  const actionError = useActionData();

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setLatLng(marker.getLatLng());
        }
      },
    }),
    []
  );
  useEffect(() => {
    const marker = markerRef.current;
    if (marker != null) {
      marker.openPopup();
    }
  }, []);

  useEffect(() => {
    if (
      transition.state === "submitting" &&
      transition.submission?.method === "POST"
    ) {
      notificationId.current = notifications.showNotification({
        loading: true,
        title: "Submitting node",
        message: "",
        autoClose: false,
        disallowClose: true,
      });
    } else if (transition.state === "idle" && notificationId.current) {
      if (actionError) {
        notifications.updateNotification(notificationId.current, {
          id: notificationId.current,
          title: actionError,
          message: "",
          color: "red",
        });
      } else {
        notifications.updateNotification(notificationId.current, {
          id: notificationId.current,
          title: "Node was added 🤘",
          message: "",
        });
        notificationId.current = null;
        onClose();
      }
    }
  }, [transition.state, actionError]);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={latLng}
      ref={markerRef}
    >
      <Tooltip permanent interactive direction="top" opacity={1}>
        <Form method="post">
          <Card className="node-form">
            <TextInput
              label="User-Token"
              required
              placeholder="Only for moderators right now"
              value={userToken}
              onChange={(event) => setUserToken(event.target.value)}
              name="userToken"
            />
            <TextInput
              label="Name"
              required
              placeholder="A node needs a name"
              max={30}
              name="name"
            />
            <Textarea
              label="Description (optional)"
              placeholder="Additional information about this node"
              name="description"
            />
            <Select
              label="Type"
              placeholder="Pick one"
              name="type"
              value={type}
              zIndex={800}
              onChange={(value) => setType(value || "")}
              required
              data={nodeTypes.map((nodeType) => ({
                value: nodeType.name,
                label: nodeType.name,
                group: nodeType.category,
              }))}
            />
            <input type="hidden" name="_action" value="create" />
            <input type="hidden" name="lat" value={latLng.lat} />
            <input type="hidden" name="lng" value={latLng.lng} />
            <input type="hidden" name="areaName" value={area.name} />
            <Button
              type="submit"
              disabled={!type || !userToken}
              loading={transition.state !== "idle"}
              variant="gradient"
            >
              Save
            </Button>
            <Button type="button" onClick={onClose} variant="subtle">
              Close
            </Button>
          </Card>
        </Form>
      </Tooltip>
    </Marker>
  );
}

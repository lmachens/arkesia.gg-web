import { useEffect, useMemo, useRef, useState } from "react";
import { Marker, Tooltip } from "react-leaflet";
import { nodeTypes } from "~/lib/db";
import { Form, useTransition } from "remix";
import { useNotifications } from "@mantine/notifications";
import { Area } from "~/lib/types";
import { Button, Card, Grid, Select, useMantineTheme } from "@mantine/core";

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
  const [type, setType] = useState<string | null>(null);
  const transition = useTransition();
  const notifications = useNotifications();
  const notificationId = useRef<string | null>(null);
  const theme = useMantineTheme();

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
    if (transition.state === "submitting") {
      notificationId.current = notifications.showNotification({
        loading: true,
        title: "Submitting node",
        message: "",
        autoClose: false,
        disallowClose: true,
      });
    } else if (transition.state === "idle" && notificationId.current) {
      notifications.updateNotification(notificationId.current, {
        id: notificationId.current,
        title: "Node was added 🤘",
        message: "",
      });

      onClose();
    }
  }, [transition.state]);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={latLng}
      ref={markerRef}
    >
      <Tooltip
        permanent
        interactive
        direction="top"
        opacity={1}
        className="marker-tooltip"
      >
        <Form method="post">
          <Card className="node-form">
            <Select
              label="Type"
              placeholder="Pick one"
              name="type"
              value={type}
              zIndex={800}
              onChange={(value) => setType(value)}
              data={nodeTypes.map((nodeType) => ({
                value: nodeType.name,
                label: nodeType.name,
                group: nodeType.category,
              }))}
            />
            <input type="hidden" name="lat" value={latLng.lat} />
            <input type="hidden" name="lng" value={latLng.lng} />
            <input type="hidden" name="areaName" value={area.name} />
            <Button
              type="submit"
              disabled={!type}
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

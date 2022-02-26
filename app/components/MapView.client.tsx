import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Tooltip } from "react-leaflet";
import { Area } from "~/lib/types";
import L from "leaflet";
import includeCanvasTileLayer from "./includeCanvasTileLayer";
import "leaflet-rotate";
import MousePosition from "./MousePosition";
import { AreaNode } from "@prisma/client";
import { Button, Drawer, Text, TextInput, Title } from "@mantine/core";
import { Form, useActionData, useTransition } from "remix";
import { useLocalStorageValue } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import ImagePreview from "./ImagePreview";
import TileControl from "./TileControl";
import { getMapCenter } from "~/lib/map";

const DefaultIcon = L.icon({
  iconUrl: "/markers/unknown.webp",
  iconSize: [32, 32],
  tooltipAnchor: [0, -17],
  popupAnchor: [0, -10],
});
L.Marker.prototype.options.icon = DefaultIcon;
includeCanvasTileLayer();

type MapProps = {
  area: Area;
  nodes: AreaNode[];
};
export default function MapView({ area, nodes }: MapProps) {
  const [userToken, setUserToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });
  const transition = useTransition();
  const actionData = useActionData();
  const notifications = useNotifications();
  const notificationId = useRef<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<AreaNode | null>(null);

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
        setSelectedNode(null);
      }
    }
  }, [transition.state, actionData]);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={getMapCenter(area.tiles[0])}
        zoom={1}
        crs={L.CRS.Simple}
        zoomControl={false}
        attributionControl={false}
        style={{
          background: "none",
        }}
        renderer={L.canvas()}
        rotate
        rotateControl={false}
        bearing={-45}
        preferCanvas
      >
        <MousePosition />
        <TileControl area={area} nodes={nodes} onNodeClick={setSelectedNode} />
      </MapContainer>
    ),
    [area]
  );

  return (
    <>
      {displayMap}
      <Drawer
        opened={Boolean(selectedNode)}
        zIndex={700}
        padding="md"
        onClose={() => setSelectedNode(null)}
      >
        {selectedNode && (
          <Form method="delete" className="node-form">
            <Title order={3}>{selectedNode.name}</Title>
            <Text variant="gradient">{selectedNode.type}</Text>
            {selectedNode.description && (
              <Text
                lineClamp={4}
                className="text-block"
                dangerouslySetInnerHTML={{ __html: selectedNode.description }}
                sx={(theme) => ({
                  a: {
                    color: theme.colors.blue[4],
                    textDecoration: "none",
                  },
                  "a:hover": {
                    color: theme.colors.blue[4],
                    textDecoration: "underline",
                  },
                })}
              ></Text>
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
            <input type="hidden" name="nodeId" value={selectedNode.id} />
            <Button type="submit" color="red">
              Delete
            </Button>
          </Form>
        )}
      </Drawer>
    </>
  );
}

import { Map } from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Tooltip } from "react-leaflet";
import { Area } from "~/lib/types";
import L from "leaflet";
import "leaflet-rotate";
import MousePosition from "./MousePosition";
import { nodeTypesMap } from "~/lib/static";
import { AreaNode } from "@prisma/client";
import { Button, Drawer, Text, TextInput, Title } from "@mantine/core";
import { Form, useActionData, useTransition } from "remix";
import { useLocalStorageValue } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import CanvasMarker from "./CanvasMarker";
import DraggableMarker from "./DraggableMarker";
import ImagePreview from "./ImagePreview";

const DefaultIcon = L.icon({
  iconUrl: "/markers/unknown.webp",
  iconSize: [32, 32],
  tooltipAnchor: [0, -17],
  popupAnchor: [0, -10],
});
L.Marker.prototype.options.icon = DefaultIcon;

type MapProps = {
  area: Area;
  nodes: AreaNode[];
};
export default function MapView({ area, nodes }: MapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
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
        center={getMapCenter(area.tiles)}
        zoom={1}
        whenCreated={setMap}
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
      >
        <TileLayer
          ref={tileLayerRef}
          url={area.tileURL}
          minNativeZoom={2}
          maxNativeZoom={2}
          minZoom={0}
          maxZoom={4}
          tileSize={256}
          bounds={getBounds(area.tiles)}
        />
        <MousePosition />
        <DraggableMarker area={area} />
        {nodes.map((node) => (
          <CanvasMarker
            key={node.position.toString()}
            center={node.position as [number, number]}
            src={nodeTypesMap[node.type]?.iconUrl || "/markers/unknown.webp"}
            radius={16}
            padding={5}
            showBackground
            borderColor={nodeTypesMap[node.type]?.color || "transparent"}
            onClick={() => {
              if (!document.querySelector("#new-marker-drawer")) {
                setSelectedNode(node);
              }
            }}
          >
            <Tooltip direction="top" offset={[0, -10]}>
              {node.name}
            </Tooltip>
          </CanvasMarker>
        ))}
      </MapContainer>
    ),
    [area]
  );

  useEffect(() => {
    if (map) {
      map.panTo(getMapCenter(area.tiles));
    }
    if (tileLayerRef.current) {
      tileLayerRef.current.options.bounds = getBounds(area.tiles);
      tileLayerRef.current.setUrl(area.tileURL);
    }
  }, [Boolean(map), area.tiles.toString(), area.tileURL]);

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

function getMapCenter(tiles: [number, number]): [number, number] {
  return [(-64 * tiles[0]) / 2, (64 * tiles[1]) / 2];
}

function getBounds(
  tiles: [number, number]
): [[number, number], [number, number]] {
  return [
    [0, 64 * tiles[1]],
    [-64 * tiles[0], 0],
  ];
}

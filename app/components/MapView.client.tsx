import { Map } from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Area } from "~/lib/types";
import L from "leaflet";
import MousePosition from "./MousePosition";
import Contextmenu from "./Contextmenu";
import { nodeTypes } from "~/lib/static";
import { AreaNode } from "@prisma/client";
import { Button, Card, Text, TextInput } from "@mantine/core";
import { Form, useActionData, useTransition } from "remix";
import { useLocalStorageValue } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";

const DefaultIcon = L.icon({
  iconUrl: "/markers/unknown.webp",
  iconSize: [32, 32],
  tooltipAnchor: [0, -17],
  popupAnchor: [0, -10],
});

const icons: {
  [iconUrl: string]: L.Icon;
} = {};
const getIcon = (type: string) => {
  const nodeType = nodeTypes.find((nodeType) => nodeType.name === type);
  if (!nodeType) {
    return DefaultIcon;
  }

  if (!icons[nodeType.name]) {
    icons[nodeType.name] = L.icon({
      iconUrl: nodeType.iconUrl,
      iconSize: [32, 32],
      tooltipAnchor: [0, -17],
      popupAnchor: [0, -10],
    });
  }
  return icons[nodeType.name];
};

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
  const actionError = useActionData();
  const notifications = useNotifications();
  const notificationId = useRef<string | null>(null);

  useEffect(() => {
    if (transition.state === "submitting") {
      notificationId.current = notifications.showNotification({
        loading: true,
        title: "Removing node",
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
          title: "Node was removed 💀",
          message: "",
        });
        map?.closePopup();
      }
    }
  }, [transition.state, actionError]);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={getMapCenter(area)}
        zoom={1}
        whenCreated={setMap}
        crs={L.CRS.Simple}
        attributionControl={false}
        style={{
          background: "none",
        }}
      >
        <TileLayer
          ref={tileLayerRef}
          url={area.tileURL}
          minNativeZoom={2}
          maxNativeZoom={2}
          minZoom={0}
          maxZoom={4}
          tileSize={256}
          bounds={getBounds(area)}
        />
        <MousePosition />
        <Contextmenu area={area} />
        {nodes.map((node) => (
          <Marker
            key={node.position.toString()}
            position={node.position as [number, number]}
            icon={getIcon(node.type)}
          >
            <Popup>
              <Form method="delete">
                <Card className="node-form">
                  <Text size="lg">{node.type}</Text>
                  <TextInput
                    label="User-Token"
                    required
                    placeholder="Only for moderators right now"
                    value={userToken}
                    onChange={(event) => setUserToken(event.target.value)}
                    name="userToken"
                  />
                  <input type="hidden" name="nodeId" value={node.id} />
                  <Button type="submit" color="red">
                    Delete
                  </Button>
                </Card>
              </Form>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    ),
    [area]
  );

  useEffect(() => {
    if (map) {
      map.panTo(getMapCenter(area));
    }
    if (tileLayerRef.current) {
      tileLayerRef.current.options.bounds = getBounds(area);
      tileLayerRef.current.setUrl(area.tileURL);
    }
  }, [map, area]);

  return <>{displayMap}</>;
}

function getMapCenter(area: Area): [number, number] {
  return [(-64 * area.tiles[0]) / 2, (64 * area.tiles[1]) / 2];
}

function getBounds(area: Area): [[number, number], [number, number]] {
  return [
    [0, 64 * area.tiles[1]],
    [-64 * area.tiles[0], 0],
  ];
}

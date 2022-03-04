import { useEffect, useMemo, useRef, useState } from "react";
import { Tooltip, useMapEvents } from "react-leaflet";
import { ICON_BASE_URL, nodeTypes } from "~/lib/static";
import { Form, useActionData, useTransition } from "remix";
import { useNotifications } from "@mantine/notifications";
import type { Area, Tile } from "~/lib/types";
import {
  Button,
  Drawer,
  InputWrapper,
  ScrollArea,
  Select,
  TextInput,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import ImageDropzone from "./ImageDropzone";
import type { PostNodeActionData } from "~/lib/validation";
import RichTextEditor from "@mantine/rte";
import TypeItem from "./TypeItem";
import IconMarker from "./IconMarker";
import type { AreaNode } from "@prisma/client";

type DraggableMarkerProps = {
  node: Partial<AreaNode> | null;
  onChange: (node: Partial<AreaNode> | null) => void;
  area: Area;
  tile: Tile;
};

const types = nodeTypes.map((nodeType) => ({
  image: `${ICON_BASE_URL}${nodeType.icon}`,
  value: nodeType.name,
  label: nodeType.name,
  group: nodeType.category,
}));

export default function DraggableMarker({
  node,
  onChange,
  area,
  tile,
}: DraggableMarkerProps) {
  const markerRef = useRef<L.Marker>(null);
  const [fileScreenshot, setFileScreenshot] = useState<File | null>(null);

  useMapEvents({
    contextmenu: (event) => {
      onChange({ ...node, position: [event.latlng.lat, event.latlng.lng] });
    },
  });

  const transition = useTransition();
  const notifications = useNotifications();
  const notificationId = useRef<string | null>(null);
  const [userToken, setUserToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });
  const actionData = useActionData<PostNodeActionData>();

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
          title: "Node was added 🤘",
          message: "",
        });
        notificationId.current = null;
        onChange(null);
        setFileScreenshot(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transition.state, actionData, transition.submission?.method]);

  const base64Image = useMemo(
    () => fileScreenshot && URL.createObjectURL(fileScreenshot),
    [fileScreenshot]
  );

  return (
    <>
      {node?.position && (
        <IconMarker
          type={node.type}
          draggable={true}
          eventHandlers={{
            dragend() {
              const marker = markerRef.current;
              if (marker != null) {
                const latLng = marker.getLatLng();
                onChange({ ...node, position: [latLng.lat, latLng.lng] });
              }
            },
          }}
          position={node?.position as [number, number]}
          ref={markerRef}
        >
          <Tooltip permanent direction="top">
            {node.type || "Choose marker"}
          </Tooltip>
        </IconMarker>
      )}
      <Drawer
        id="new-marker-drawer"
        opened={Boolean(node?.position)}
        zIndex={700}
        noCloseOnClickOutside
        noOverlay
        padding="md"
        onClose={() => {
          onChange(null);
          setFileScreenshot(null);
        }}
      >
        <ScrollArea style={{ height: "calc(100% - 50px)" }}>
          {node?.position && (
            <Form
              method="post"
              className="node-form"
              encType="multipart/form-data"
              onSubmit={(event) => {
                event.currentTarget.onformdata = (event) => {
                  if (fileScreenshot) {
                    event.formData.append(
                      "fileScreenshot",
                      fileScreenshot,
                      "fileScreenshot"
                    );
                  }
                };
              }}
            >
              <input
                type="hidden"
                name="_action"
                value={node.id ? "update" : "create"}
              />
              <input type="hidden" name="id" value={node.id} />
              <TextInput
                label="User-Token"
                required
                placeholder="Only for moderators right now"
                value={userToken}
                onChange={(event) => setUserToken(event.target.value)}
                name="userToken"
                error={actionData?.fieldErrors?.userId}
              />
              <TextInput
                label="Name"
                required
                placeholder="A node needs a name"
                value={node.name || ""}
                onChange={(event) =>
                  onChange({ ...node, name: event.target.value })
                }
                max={30}
                name="name"
                error={actionData?.fieldErrors?.name}
              />
              <InputWrapper
                label="Description (optional)"
                error={actionData?.fieldErrors?.description}
              >
                <RichTextEditor
                  value={node.description || ""}
                  onChange={(description) => onChange({ ...node, description })}
                  placeholder="Additional information about this node"
                  controls={[["bold", "italic", "underline", "clean", "link"]]}
                  sx={() => ({
                    zIndex: 1,
                  })}
                />
                <input
                  type="hidden"
                  value={node.description || ""}
                  name="description"
                />
              </InputWrapper>
              <Select
                label="Type"
                placeholder="Pick one"
                name="type"
                zIndex={800}
                searchable
                clearable
                autoComplete="off"
                autoCorrect="off"
                value={node.type}
                onChange={(type) => onChange({ ...node, type: type || "" })}
                required
                itemComponent={TypeItem}
                maxDropdownHeight={400}
                data={types}
                error={actionData?.fieldErrors?.type}
              />
              <ImageDropzone
                onDrop={(files: File[]) => setFileScreenshot(files[0])}
                onClear={() => {
                  onChange({ ...node, screenshot: null });
                  setFileScreenshot(null);
                }}
                onReject={() =>
                  notifications.showNotification({
                    title: "Upload failed",
                    message: "",
                    color: "red",
                  })
                }
                src={base64Image || node.screenshot}
              />
              <input
                type="hidden"
                name="screenshot"
                value={node.screenshot || ""}
              />
              <input type="hidden" name="lat" value={node.position[0]} />
              <input type="hidden" name="lng" value={node.position[1]} />
              <input type="hidden" name="areaName" value={area.name} />
              <input type="hidden" name="tileId" value={tile.id} />
              <Button
                type="submit"
                disabled={!node.type || !userToken}
                loading={transition.state !== "idle"}
                variant="gradient"
              >
                Save
              </Button>
            </Form>
          )}
        </ScrollArea>
      </Drawer>
    </>
  );
}

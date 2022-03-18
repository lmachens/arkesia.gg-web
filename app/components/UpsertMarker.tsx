import { useEffect, useMemo, useRef, useState } from "react";
import { Tooltip } from "react-leaflet";
import { Form, useActionData, useTransition } from "remix";
import { useNotifications } from "@mantine/notifications";
import type { Area, Tile } from "~/lib/types";
import {
  Button,
  Drawer,
  InputWrapper,
  ScrollArea,
  TextInput,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import ImageDropzone from "./ImageDropzone";
import type { PostNodeActionData } from "~/lib/validation";
import RichTextEditor from "@mantine/rte";
import IconMarker from "./IconMarker";
import {
  useDrawerPosition,
  useEditingNode,
  useLastType,
  useRefreshNodes,
  useSetEditingNode,
} from "~/lib/store";
import TypeSelect from "./TypeSelect";

type UpsertMarkerProps = {
  area: Area;
  tile: Tile;
};

export default function UpsertMarker({ area, tile }: UpsertMarkerProps) {
  const markerRef = useRef<L.Marker>(null);
  const [fileScreenshot, setFileScreenshot] = useState<File | null>(null);
  const node = useEditingNode();
  const setEditingNode = useSetEditingNode();
  const [lastType, setLastType] = useLastType();

  const transition = useTransition();
  const notifications = useNotifications();
  const notificationId = useRef<string | null>(null);
  const [userToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });
  const actionData = useActionData<PostNodeActionData>();
  const drawerPosition = useDrawerPosition();
  const refreshNodes = useRefreshNodes();

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
          title: userToken ? "Node added 🤘" : "Node added for review 🤘",
          message: "",
        });
        notificationId.current = null;
        refreshNodes();
        setFileScreenshot(null);
        setEditingNode(null);
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
          type={node.type || lastType}
          draggable={true}
          verified
          zIndexOffset={9000}
          eventHandlers={{
            dragend() {
              const marker = markerRef.current;
              if (marker != null) {
                const latLng = marker.getLatLng();
                setEditingNode({ ...node, position: [latLng.lat, latLng.lng] });
              }
            },
          }}
          position={node?.position as [number, number]}
          ref={markerRef}
        >
          <Tooltip permanent direction="top" offset={[0, -15]}>
            {node.type || "Choose marker"}
          </Tooltip>
        </IconMarker>
      )}
      <Drawer
        id="upsert-marker-drawer"
        opened={Boolean(node?.position)}
        zIndex={700}
        closeOnClickOutside={false}
        withOverlay={false}
        padding="md"
        position={drawerPosition}
        onClose={() => {
          setEditingNode(null);
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
              <input type="hidden" name="userToken" value={userToken} />
              <TypeSelect
                category={area.category}
                name="type"
                zIndex={800}
                value={node.type || lastType}
                onChange={(type) => {
                  if (type) {
                    setEditingNode({ ...node, type: type });
                    setLastType(type);
                  }
                }}
              />
              <TextInput
                label="Name"
                placeholder="A node needs a name"
                value={node.name || ""}
                onChange={(event) =>
                  setEditingNode({ ...node, name: event.target.value })
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
                  onChange={(description) =>
                    setEditingNode({ ...node, description })
                  }
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
              <TextInput
                label="Transit to node ID (optional)"
                placeholder="Enter node ID"
                type="number"
                value={node.transitToId || "0"}
                onChange={(event) =>
                  setEditingNode({ ...node, transitToId: +event.target.value })
                }
                name="transitToId"
                error={actionData?.fieldErrors?.transitToId}
              />
              <ImageDropzone
                onDrop={(files: File[]) => setFileScreenshot(files[0])}
                onClear={() => {
                  setEditingNode({ ...node, screenshot: null });
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
                loading={transition.state !== "idle"}
                variant="gradient"
              >
                {userToken ? "Save" : "Submit for review"}
              </Button>
            </Form>
          )}
        </ScrollArea>
      </Drawer>
    </>
  );
}

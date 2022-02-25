import { useEffect, useMemo, useRef, useState } from "react";
import { Marker, Tooltip, useMapEvents } from "react-leaflet";
import { nodeTypes } from "~/lib/static";
import { Form, useActionData, useTransition } from "remix";
import { useNotifications } from "@mantine/notifications";
import { Area } from "~/lib/types";
import { Button, Drawer, InputWrapper, Select, TextInput } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import ImageDropzone from "./ImageDropzone";
import { PostNodeActionData } from "~/lib/validation";
import RichTextEditor from "@mantine/rte";

type DraggableMarkerProps = {
  area: Area;
};

export default function DraggableMarker({ area }: DraggableMarkerProps) {
  const markerRef = useRef<L.Marker>(null);
  const [latLng, setLatLng] = useState<L.LatLng | null>(null);

  useMapEvents({
    contextmenu: (event) => {
      setLatLng(event.latlng);
    },
  });
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
  const actionData = useActionData<PostNodeActionData>();
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [description, setDescription] = useState("");

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
        setLatLng(null);
        setScreenshot(null);
        setDescription("");
      }
    }
  }, [transition.state, actionData]);

  return (
    <>
      {latLng && (
        <Marker
          draggable={true}
          eventHandlers={eventHandlers}
          position={latLng}
          ref={markerRef}
        >
          <Tooltip permanent direction="top">
            Choose marker
          </Tooltip>
        </Marker>
      )}
      <Drawer
        id="new-marker-drawer"
        opened={Boolean(latLng)}
        zIndex={700}
        noCloseOnClickOutside
        noOverlay
        padding="md"
        onClose={() => {
          setLatLng(null);
          setScreenshot(null);
          setDescription("");
        }}
      >
        {latLng && (
          <Form
            method="post"
            className="node-form"
            encType="multipart/form-data"
            onSubmit={(event) => {
              // ImageDropzone has no input `name`. This is a workaround to add it on submit
              for (let input of event.currentTarget.elements) {
                if (
                  input instanceof HTMLInputElement &&
                  input.type === "file"
                ) {
                  input.name = "screenshot";
                }
              }
            }}
          >
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
              max={30}
              name="name"
              error={actionData?.fieldErrors?.name}
            />
            <InputWrapper
              label="Description (optional)"
              error={actionData?.fieldErrors?.description}
            >
              <RichTextEditor
                value={description}
                onChange={setDescription}
                placeholder="Additional information about this node"
                controls={[["bold", "italic", "underline", "clean", "link"]]}
              />
              <input type="hidden" value={description} name="description" />
            </InputWrapper>
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
              error={actionData?.fieldErrors?.type}
            />
            <ImageDropzone
              onDrop={(files) => setScreenshot(files[0])}
              onClear={() => setScreenshot(null)}
              onReject={() =>
                notifications.showNotification({
                  title: "Upload failed",
                  message: "",
                  color: "red",
                })
              }
              image={screenshot}
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
          </Form>
        )}
      </Drawer>
    </>
  );
}

import {
  ActionIcon,
  Dialog,
  Group,
  InputWrapper,
  SegmentedControl,
  Slider,
  Space,
  Switch,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useLocalStorageValue, useMediaQuery } from "@mantine/hooks";
import { DrawingPinIcon, GearIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import { useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { trackOutboundLinkClick } from "~/lib/stats";
import {
  useDrawerPosition,
  useIsShowingDiscoveredNodes,
  useMarkerSize,
  useSetDrawerPosition,
  useSetEditingNode,
  useSetMarkerSize,
  useShowNameOnMap,
  useToggleIsShowingDiscoveredNodes,
  useToggleShowNameOnMap,
} from "~/lib/store";
import { DiscordIcon } from "./DiscordIcon";
import { DiscoveredNodes } from "./DiscoveredNodes";

export default function ActionIcons() {
  const [opened, setOpened] = useState(false);
  const [userToken, setUserToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });
  const isShowingDiscoveredNodes = useIsShowingDiscoveredNodes();
  const toggleIsShowingDiscoveredNodes = useToggleIsShowingDiscoveredNodes();
  const drawerPosition = useDrawerPosition();
  const setDrawerPosition = useSetDrawerPosition();
  const setEditingNode = useSetEditingNode();
  const map = useMap();
  const showNameOnMap = useShowNameOnMap();
  const toggleShowNameOnMap = useToggleShowNameOnMap();
  const markerSize = useMarkerSize();
  const setMarkerSize = useSetMarkerSize();
  const largeScreen = useMediaQuery("(min-width: 900px)");

  useMapEvents({
    click: (event) => {
      if (event.originalEvent.ctrlKey) {
        setEditingNode({ position: [event.latlng.lat, event.latlng.lng] });
      }
    },
  });

  return (
    <Group
      sx={{
        position: "absolute",
        bottom: 34,
        right: drawerPosition === "left" ? 10 : "auto",
        left: drawerPosition === "left" ? "auto" : 10,
        zIndex: 8900,
      }}
      spacing="xs"
    >
      <Tooltip
        zIndex={9100}
        label={
          <Group>
            <Text>Propose a node</Text>
            <Text
              size="xs"
              sx={(theme) => ({
                marginLeft: 8,
                padding: "2px 4px",
                borderRadius: theme.radius.xs,
                background: "#0000005e",
              })}
            >
              CTRL + Click
            </Text>
          </Group>
        }
      >
        <ActionIcon
          onClick={() => {
            const mapCenter = map.getCenter();
            setEditingNode({ position: [mapCenter.lat, mapCenter.lng] });
          }}
          size="md"
          aria-label="Propose a node"
          p={4}
        >
          <DrawingPinIcon color="#ced4da" width="100%" height="100%" />
        </ActionIcon>
      </Tooltip>
      <Tooltip zIndex={9100} label={<Text>Settings</Text>}>
        <ActionIcon
          onClick={() => setOpened((opened) => !opened)}
          size="md"
          aria-label="Settings"
          p={4}
        >
          <GearIcon color="#ced4da" width="100%" height="100%" />
        </ActionIcon>
      </Tooltip>
      <Tooltip zIndex={9100} label={<Text>Contribute or give feedback</Text>}>
        <ActionIcon
          component="a"
          href="https://github.com/lmachens/arkesia.gg-web"
          target="_blank"
          size="md"
          aria-label="Contribute or give feedback"
          p={4}
          onClick={() =>
            trackOutboundLinkClick("https://github.com/lmachens/arkesia.gg-web")
          }
        >
          <GitHubLogoIcon color="#ced4da" width="100%" height="100%" />
        </ActionIcon>
      </Tooltip>
      <Tooltip zIndex={9100} label={<Text>Join the community</Text>}>
        <ActionIcon
          component="a"
          href="https://discord.gg/GSmAWG2M"
          target="_blank"
          size="md"
          sx={{
            "&:hover": {
              backgroundColor: "#5865f2",
            },
          }}
          aria-label="Join the community"
          p={4}
          onClick={() => trackOutboundLinkClick("https://discord.gg/GSmAWG2M")}
        >
          <DiscordIcon color="#ced4da" width="100%" height="100%" />
        </ActionIcon>
      </Tooltip>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size={largeScreen ? "lg" : "md"}
        radius="md"
        position={{
          bottom: 65,
          right: drawerPosition === "left" ? 5 : "auto",
          left: drawerPosition === "left" ? "auto" : 5,
        }}
        zIndex={9000}
      >
        <TextInput
          label="User-Token"
          required
          placeholder="Only for moderators right now"
          value={userToken}
          onChange={(event) => setUserToken(event.target.value)}
          name="userToken"
        />
        <Space h="md" />
        <Text style={{ marginBottom: 10 }} weight={500}>
          Map
        </Text>
        <Switch
          label="Show name on map"
          checked={showNameOnMap}
          onChange={toggleShowNameOnMap}
        />
        <InputWrapper label="Marker size" style={{ marginTop: 5 }}>
          <Slider
            value={markerSize}
            onChange={setMarkerSize}
            min={15}
            max={60}
            label={null}
          />
        </InputWrapper>
        <Space h="md" />
        <Text style={{ marginBottom: 10 }} weight={500}>
          Discovered Nodes
        </Text>
        <Switch
          label="Show discovered nodes"
          checked={isShowingDiscoveredNodes}
          onChange={toggleIsShowingDiscoveredNodes}
        />
        <Space h="md" />
        <DiscoveredNodes />
        <Text style={{ marginBottom: 10 }} weight={500}>
          Drawer position
        </Text>
        <SegmentedControl
          size="sm"
          value={drawerPosition}
          onChange={(value: "left" | "right") => setDrawerPosition(value)}
          sx={{ width: "100%" }}
          data={[
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ]}
        />
      </Dialog>
    </Group>
  );
}

import {
  ActionIcon,
  Dialog,
  Group,
  SegmentedControl,
  Space,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { GearIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import { useState } from "react";
import {
  useDrawerPosition,
  useIsShowingDiscoveredNodes,
  useSetDrawerPosition,
  useToggleIsShowingDiscoveredNodes,
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
      <ActionIcon
        onClick={() => setOpened((opened) => !opened)}
        size="md"
        p={4}
      >
        <GearIcon width="100%" height="100%" />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://github.com/lmachens/arkesia.gg-web"
        target="_blank"
        size="md"
        p={4}
      >
        <GitHubLogoIcon width="100%" height="100%" />
      </ActionIcon>
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
        p={4}
      >
        <DiscordIcon width="100%" height="100%" />
      </ActionIcon>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
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
          Discovered Nodes
        </Text>
        <Switch
          label="Show discovered nodes"
          checked={isShowingDiscoveredNodes}
          onChange={() => toggleIsShowingDiscoveredNodes()}
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

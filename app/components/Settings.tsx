import {
  ActionIcon,
  Dialog,
  SegmentedControl,
  Space,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { GearIcon } from "@modulz/radix-icons";
import { useState } from "react";
import {
  useDrawerPosition,
  useIsShowingDiscoveredNodes,
  useSetDrawerPosition,
  useToggleIsShowingDiscoveredNodes,
} from "~/lib/store";
import { DiscoveredNodes } from "./DiscoveredNodes";

export default function Settings() {
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
    <>
      <ActionIcon
        onClick={() => setOpened((opened) => !opened)}
        size="lg"
        p={4}
        sx={{
          position: "absolute",
          bottom: 32,
          right: drawerPosition === "left" ? 5 : "auto",
          left: drawerPosition === "left" ? "auto" : 5,
          zIndex: 8900,
        }}
      >
        <GearIcon width="100%" height="100%" />
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
    </>
  );
}

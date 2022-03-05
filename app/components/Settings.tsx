import {
  ActionIcon,
  Dialog,
  Space,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { GearIcon } from "@modulz/radix-icons";
import { useState } from "react";
import {
  useIsShowingDiscoveredNodes,
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

  return (
    <>
      <ActionIcon
        onClick={() => setOpened((opened) => !opened)}
        sx={{
          marginLeft: "auto",
        }}
      >
        <GearIcon />
      </ActionIcon>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
        position={{ top: 60, right: 10 }}
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
      </Dialog>
    </>
  );
}

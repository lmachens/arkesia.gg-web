import {
  ActionIcon,
  Dialog,
  Group,
  Header,
  Text,
  TextInput,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { GearIcon } from "@modulz/radix-icons";
import { useState } from "react";
import { useLoaderData } from "remix";
import type { LoaderData } from "~/routes/maps/$continent.$area";
import MapSelect from "./MapSelect";

export default function AppHeader() {
  const { continentName, area, continentNames, areaNames } =
    useLoaderData<LoaderData>();
  const [opened, setOpened] = useState(false);
  const [userToken, setUserToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });

  return (
    <Header
      height={60}
      padding="xs"
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <MapSelect
        continentName={continentName}
        areaName={area.name}
        continentNames={continentNames}
        areaNames={areaNames}
      />
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
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Settings
        </Text>

        <TextInput
          label="User-Token"
          required
          placeholder="Only for moderators right now"
          value={userToken}
          onChange={(event) => setUserToken(event.target.value)}
          name="userToken"
        />
      </Dialog>
    </Header>
  );
}

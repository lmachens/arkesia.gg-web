import { ActionIcon, Dialog, Group, Text, Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { DrawingPinIcon, GearIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import { useState } from "react";
import { trackOutboundLinkClick } from "~/lib/stats";
import {
  useDrawerPosition,
  useMap,
  useSetEditingNodeLocation,
} from "~/lib/store";
import { DiscordIcon } from "./DiscordIcon";
import Settings from "./Settings";

export default function ActionIcons() {
  const [opened, setOpened] = useState(false);

  const drawerPosition = useDrawerPosition();
  const setEditingNodeLocation = useSetEditingNodeLocation();
  const map = useMap();

  const largeScreen = useMediaQuery("(min-width: 900px)");

  return (
    <Group
      sx={(theme) => ({
        position: "absolute",
        top: 8,
        right: drawerPosition === "left" ? 7 : "auto",
        left: drawerPosition === "left" ? "auto" : 7,
        zIndex: 8900,
        borderRadius: theme.radius.sm,
        padding: theme.spacing.xs,
        backgroundColor: theme.colors.dark[8],
      })}
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
            if (map) {
              const mapCenter = map.getCenter();
              setEditingNodeLocation({
                position: [mapCenter.lat, mapCenter.lng],
                areaNode: {},
              });
            }
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
          href="https://discord.com/invite/NTZu8Px"
          target="_blank"
          size="md"
          sx={{
            backgroundColor: "#5865f2",
            "&:hover": {
              backgroundColor: "#6974f3",
            },
          }}
          aria-label="Join the community"
          p={4}
          onClick={() =>
            trackOutboundLinkClick("https://discord.com/invite/NTZu8Px")
          }
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
          top: 60,
          right: drawerPosition === "left" ? 5 : "auto",
          left: drawerPosition === "left" ? "auto" : 5,
        }}
        zIndex={9000}
      >
        <Settings />
      </Dialog>
    </Group>
  );
}

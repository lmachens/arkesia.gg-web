import { Button, Group } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { Share1Icon } from "@modulz/radix-icons";
import { areaContinents } from "~/lib/static";
import type { AreaNodeLocationDTO } from "~/lib/types";

type ShareButtonProps = {
  areaNodeLocation: AreaNodeLocationDTO;
};
const ShareButton = ({ areaNodeLocation }: ShareButtonProps) => {
  const notifications = useNotifications();

  const handleShare = async () => {
    const continent = areaContinents[areaNodeLocation.areaName];
    const shareData = {
      title: areaNodeLocation.areaNode.name || areaNodeLocation.areaNode.type,
      text: areaNodeLocation.areaNode.description || "",
      url: `${location.origin}/${continent}/${areaNodeLocation.areaName}?tileId=${areaNodeLocation.tileId}&node=${areaNodeLocation.areaNode.id}&location=${areaNodeLocation.id}`,
    };
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error(error);
      navigator.clipboard.writeText(shareData.url);
      notifications.showNotification({
        title: "Link copied to clipboard",
        message: "",
      });
    }
  };

  return (
    <Button
      color="gray"
      variant="light"
      size="xs"
      compact
      mb="xs"
      sx={{
        "> *": {
          justifyContent: "left",
        },
      }}
      onClick={handleShare}
    >
      <Group>
        <Share1Icon />
        Share
      </Group>
    </Button>
  );
};

export default ShareButton;

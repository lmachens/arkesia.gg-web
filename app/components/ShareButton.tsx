import { Button, Group } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { Share1Icon } from "@modulz/radix-icons";
import { areaContinents } from "~/lib/static";
import type { AreaNodeLocationDTO } from "~/lib/types";

const copyTextToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    return successful ? "successful" : "unsuccessful";
  } catch (err) {
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
};

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
      copyTextToClipboard(shareData.url);
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

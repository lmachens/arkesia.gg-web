import { Box } from "@mantine/core";
import { useDrawerPosition } from "~/lib/store";

const VideoAds = () => {
  const drawerPosition = useDrawerPosition();

  return (
    <Box
      id="nn_player"
      sx={{
        position: "absolute",
        bottom: 35,
        right: drawerPosition === "left" ? 7 : "auto",
        left: drawerPosition === "left" ? "auto" : 7,
        zIndex: 9000,
        width: 400,
        height: 225,
        pointerEvents: "none",
        ".container > *": {
          pointerEvents: "all",
        },
      }}
    />
  );
};

export default VideoAds;

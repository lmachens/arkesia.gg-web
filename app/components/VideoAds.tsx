import { Box } from "@mantine/core";
import { useEffect } from "react";
import { useDrawerPosition } from "~/lib/store";

const VideoAds = () => {
  const drawerPosition = useDrawerPosition();

  useEffect(() => {
    if (navigator.userAgent.includes("Overwolf")) {
      return;
    }

    function onAdReady() {
      // @ts-ignore
      window.AdSlots = window.AdSlots || { cmd: [], disableScripts: ["gpt"] };
    }

    const script = document.createElement("script");
    script.src = "https://kumo.network-n.com/dist/app.js";
    script.setAttribute("site", "arkesiagg");

    document.body.appendChild(script);
    script.onload = onAdReady;

    const debugScript = document.createElement("script");
    debugScript.src =
      "https://live.primis.tech/live/liveView.php?s=110991&schain=1.0,1!network-n.com,pa_76a64d29,1";
    document.body.appendChild(debugScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(debugScript);
    };
  }, []);

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

import { Box } from "@mantine/core";
import { useEffect } from "react";

const NitroPay = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s.nitropay.com/ads-1043.js";
    script.setAttribute("data-cfasync", "false");
    script.async = true;

    document.body.appendChild(script);

    // @ts-ignore
    window.nitroAds = window.nitroAds || {
      createAd: function () {
        // @ts-ignore
        window.nitroAds.queue.push(["createAd", arguments]);
      },
      addUserToken: function () {
        // @ts-ignore
        window.nitroAds.queue.push(["addUserToken", arguments]);
      },
      queue: [],
    };

    // @ts-ignore
    window["nitroAds"].createAd("nitro", {
      format: "video-nc",
      video: {
        float: "always",
      },
    });
  }, []);

  return (
    <Box
      id="nitro"
      sx={{
        position: "fixed",
        right: "-300px",
        bottom: "-200px",
        width: 300,
        height: 200,
      }}
    />
  );
};

export default NitroPay;

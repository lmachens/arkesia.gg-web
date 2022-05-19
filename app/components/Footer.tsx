import { Anchor, Box, Modal } from "@mantine/core";
import { useState } from "react";
import { useDrawerPosition } from "~/lib/store";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  const drawerPosition = useDrawerPosition();
  const [openedPrivacyPolicy, setOpenedPrivacyPolicy] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Box
      sx={(theme) => ({
        position: "absolute",
        bottom: 0,
        right: drawerPosition === "left" ? 7 : "auto",
        left: drawerPosition === "left" ? "auto" : 7,
        zIndex: 8900,
        borderRadius: theme.radius.sm,
        color: "#ddd",
      })}
    >
      <Anchor
        className="nn-cmp-show"
        href="#"
        sx={{
          color: "#ddd",
        }}
      >
        Manage Cookie Settings
      </Anchor>
      {" | "}
      <Anchor
        href="#"
        sx={{
          color: "#ddd",
        }}
        onClick={() => setOpenedPrivacyPolicy(true)}
      >
        Privacy Policy
      </Anchor>
      <Modal
        opened={openedPrivacyPolicy}
        onClose={() => setOpenedPrivacyPolicy(false)}
        title="Privacy Policy"
        sx={{ zIndex: 10000 }}
        size="calc(100vw - 87px)"
        withinPortal={false}
      >
        <PrivacyPolicy />
      </Modal>
    </Box>
  );
};

export default Footer;

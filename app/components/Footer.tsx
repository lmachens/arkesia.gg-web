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
        left: drawerPosition === "left" ? 7 : "auto",
        right: drawerPosition === "left" ? "auto" : 7,
        zIndex: 8900,
        borderRadius: theme.radius.sm,
        color: "#ddd",
      })}
    >
      <Anchor
        href="#"
        sx={{
          color: "#ddd",
        }}
        size="xs"
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

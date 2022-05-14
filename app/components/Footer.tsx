import { Anchor } from "@mantine/core";
import { useDrawerPosition } from "~/lib/store";

const Footer = () => {
  const drawerPosition = useDrawerPosition();

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Anchor
      className="nn-cmp-show"
      href="#"
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
      Manage Cookie Settings
    </Anchor>
  );
};

export default Footer;

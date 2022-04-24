import { Text } from "@mantine/core";
import type { HTMLReactParserOptions } from "html-react-parser";
import parse, { domToReact, Element } from "html-react-parser";
import { Link } from "@remix-run/react";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      if (domNode.name === "a") {
        const href = domNode.attribs.href
          .replace("https://arkesia.gg", "")
          .replace("https://www.arkesia.gg", "");
        if (href.startsWith("/")) {
          return <Link to={href}>{domToReact(domNode.children)}</Link>;
        }
      }
    }
  },
};

type NodeDescriptionProps = {
  html: string;
};
export default function NodeDescription({ html }: NodeDescriptionProps) {
  return (
    <Text
      sx={(theme) => ({
        a: {
          color: theme.colors.blue[4],
          textDecoration: "none",
        },
        "a:hover": {
          color: theme.colors.blue[4],
          textDecoration: "underline",
        },
      })}
    >
      {parse(html, options)}
    </Text>
  );
}

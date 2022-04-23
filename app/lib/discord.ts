import type { AreaNode, AreaNodeLocation } from "@prisma/client";
import TurndownService from "turndown";
import { continents } from "./static";
const turndownService = new TurndownService();

export function postToDiscord(
  action: "inserted" | "deleted" | "updated" | "report",
  node: AreaNode,
  nodeLocation: AreaNodeLocation,
  reason?: string
) {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    return;
  }

  const payload: {
    [key: string]: any;
  } = {
    username: "BottyMcBotface",
  };

  if (action === "inserted") {
    payload.content = node.userId
      ? `📌 There is a new node on the map!`
      : `👾 This node needs validation!`;
  } else if (action === "updated") {
    payload.content = `📝 This node is updated!`;
  } else if (action === "deleted") {
    payload.content = `💀 This node has been deleted!`;
  } else if (action === "report") {
    payload.content = `💡 There is an issue with this node:\n\n${reason}`;
  }

  const continent = continents.find((continent) =>
    continent.areas.some((area) => area.name === nodeLocation.areaName)
  );
  payload.embeds = [
    {
      fields: [
        {
          name: "URL",
          value: continent
            ? `https://www.arkesia.gg/${encodeURIComponent(
                continent.name
              )}/${encodeURIComponent(nodeLocation.areaName)}/?tileId=${
                nodeLocation.tileId
              }&node=${nodeLocation.areaNodeId}&location=${nodeLocation.id}`
            : "",
        },
        {
          name: "Name",
          value: node.name || "-",
          inline: true,
        },
        {
          name: "Type",
          value: node.type,
          inline: true,
        },
        {
          name: "Position",
          value: `[${nodeLocation.position.join(", ")}]`,
          inline: true,
        },
      ],
    },
  ];
  const markdownDescription =
    (node.description && turndownService.turndown(node.description)) || "-";
  payload.embeds[0].fields.push({
    name: "Description",
    value: markdownDescription,
  });

  if (node.screenshot) {
    payload.embeds.push({
      image: {
        url: node.screenshot,
      },
    });
  }

  return fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

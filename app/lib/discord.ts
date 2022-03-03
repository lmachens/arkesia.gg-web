import type { AreaNode } from "@prisma/client";
import TurndownService from "turndown";
const turndownService = new TurndownService();

export function postToDiscord(
  action: "inserted" | "deleted" | "updated",
  node: AreaNode
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
    payload.content = `📌 There is a new node on the map!`;
  } else if (action === "updated") {
    payload.content = `📝 This node is updated!`;
  } else {
    payload.content = `💀 This node has been deleted!`;
  }

  payload.embeds = [
    {
      fields: [
        {
          name: "Name",
          value: node.name,
          inline: true,
        },
        {
          name: "Type",
          value: node.type,
          inline: true,
        },
        {
          name: "Area",
          value: node.areaName,
          inline: true,
        },
        {
          name: "Position",
          value: `[${node.position.join(", ")}]`,
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

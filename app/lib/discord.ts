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
  let webhookUrl: string | undefined = undefined;
  const payload: {
    [key: string]: any;
  } = {
    username: "BottyMcBotface",
  };

  if (action === "inserted") {
    if (node.userId) {
      payload.content = `📌 There is a new node on the map!`;
      webhookUrl = process.env.DISCORD_ACTIVITY_WEBHOOK_URL;
    } else {
      payload.content = `👾 This node needs validation!`;
      webhookUrl = process.env.DISCORD_MODERATION_WEBHOOK_URL;
    }
  } else if (action === "updated") {
    payload.content = `📝 This node has been updated!`;
    webhookUrl = process.env.DISCORD_ACTIVITY_WEBHOOK_URL;
  } else if (action === "deleted") {
    payload.content = `💀 This node has been deleted!`;
    webhookUrl = process.env.DISCORD_ACTIVITY_WEBHOOK_URL;
  } else if (action === "report") {
    payload.content = `💡 There is an issue with this node:\n\n${reason}`;
    webhookUrl = process.env.DISCORD_MODERATION_WEBHOOK_URL;
  }

  if (!webhookUrl) {
    return;
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

  return fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

import { AreaNode } from "@prisma/client";

export function postToDiscord(action: "inserted" | "deleted", node: AreaNode) {
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
          value: node.position.toString(),
          inline: true,
        },
      ],
    },
  ];
  if (node.description) {
    payload.embeds[0].fields.push({
      name: "Description",
      value: node.description,
    });
  }
  if (node.screenshot) {
    payload.embeds.push({
      image: {
        url: node.screenshot,
      },
    });
  }

  console.log(JSON.stringify(payload, null, 2));

  return fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

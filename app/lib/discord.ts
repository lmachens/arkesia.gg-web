const MAX_DISCORD_MESSAGE_LENGTH = 2000;
export function postToDiscord(content: string) {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    return;
  }

  return fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "BottyMcBotface",
      content: content.substring(0, MAX_DISCORD_MESSAGE_LENGTH),
    }),
  });
}

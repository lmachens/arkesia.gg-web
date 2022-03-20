import type { LoaderFunction } from "remix";
import { continents } from "~/lib/static";

export const loader: LoaderFunction = async () => {
  const robotText = `
    User-agent: Googlebot
    Disallow: /nogooglebot/

    User-agent: *
    Allow: /

    Sitemap: https://arkesia.gg/sitemap.xml
    `;

  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

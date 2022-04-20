import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { continents } from "~/lib/static";

export const loader: LoaderFunction = async () => {
  const urls: string[] = [];
  continents.forEach((continent) => {
    continent.areas.forEach((area) => {
      urls.push(
        `<url><loc>https://arkesia.gg/${continent.name}/${area.name}</loc></url>`
      );
    });
  });

  const content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join(
    ""
  )}</urlset>`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "s-maxage=60, stale-while-revalidate",
  };
};

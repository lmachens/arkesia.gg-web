import type { HeadersFunction } from "@remix-run/node";
import { getNodeLocations } from "~/lib/db.server";
import { areaContinents, continents } from "~/lib/static";

export const loader = async () => {
  const nodeLocations = await getNodeLocations();
  const urls: string[] = [];
  continents.forEach((continent) => {
    continent.areas.forEach((area) => {
      urls.push(
        `<url><loc>https://www.arkesia.gg/${continent.name}/${area.name}</loc></url>`
      );
    });
  });

  nodeLocations.forEach((nodeLocation) => {
    const continent = areaContinents[nodeLocation.areaName];
    urls.push(
      `<url><loc>https://www.arkesia.gg/${continent}/${nodeLocation.areaName}?tileId=${nodeLocation.tileId}&amp;node=${nodeLocation.areaNodeId}&amp;location=${nodeLocation.id}</loc></url>`
    );
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

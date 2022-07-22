import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { findNodeLocations } from "./db.server";
import { arkesiaArea } from "./static";

export const envLoader = async () => {
  return json({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY,
      PLAUSIBLE_API_HOST: process.env.PLAUSIBLE_API_HOST,
      PLAUSIBLE_DOMAIN: process.env.PLAUSIBLE_DOMAIN,
    },
  });
};

export const areaLoader = async ({ params }: LoaderArgs) => {
  const areaName = params.area || arkesiaArea.name;
  const nodeLocations = await findNodeLocations({ areaName });

  return json(
    {
      nodeLocations,
      ENV: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY,
        PLAUSIBLE_API_HOST: process.env.PLAUSIBLE_API_HOST,
        PLAUSIBLE_DOMAIN: process.env.PLAUSIBLE_DOMAIN,
      },
    },
    {
      headers: {
        "cache-control": "s-maxage=60, stale-while-revalidate",
      },
    }
  );
};

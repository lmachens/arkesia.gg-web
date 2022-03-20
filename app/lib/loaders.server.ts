import type { LoaderFunction } from "remix";
import { json } from "remix";
import invariant from "tiny-invariant";
import { findNodes } from "./db.server";
import type { AreaNodeDTO } from "./types";

export type EnvLoaderData = {
  ENV: {
    SUPABASE_URL: string | undefined;
    SUPABASE_PUBLIC_KEY: string | undefined;
    PLAUSIBLE_API_HOST: string | undefined;
    PLAUSIBLE_DOMAIN: string | undefined;
  };
};

export const envLoader: LoaderFunction = async () => {
  return json({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY,
      PLAUSIBLE_API_HOST: process.env.PLAUSIBLE_API_HOST,
      PLAUSIBLE_DOMAIN: process.env.PLAUSIBLE_DOMAIN,
    },
  } as EnvLoaderData);
};

export type AreaLoaderData = {
  nodes: AreaNodeDTO[];
};

export const areaLoader: LoaderFunction = async ({ params }) => {
  invariant(params.area, "Expected params.area");
  const nodes = await findNodes(params.area);
  return json({
    nodes,
  } as AreaLoaderData);
};

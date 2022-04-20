import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { arkesiaArea, world } from "~/lib/static";

export const loader: LoaderFunction = async () => {
  return redirect(`/${world.name}/${encodeURIComponent(arkesiaArea.name)}`);
};

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "s-maxage=360, stale-while-revalidate",
  };
};

import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { arkesiaArea, world } from "~/lib/static";

export const loader: LoaderFunction = async () => {
  return redirect(`/${world.name}/${encodeURIComponent(arkesiaArea.name)}`);
};

import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return redirect("https://kumo.network-n.com/adstxt/partner.txt", 301);
};

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "s-maxage=360, stale-while-revalidate",
  };
};

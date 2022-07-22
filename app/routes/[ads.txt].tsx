import type { HeadersFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader = async () => {
  return redirect("https://api.nitropay.com/v1/ads-1043.txt", 301);
};

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "s-maxage=360, stale-while-revalidate",
  };
};

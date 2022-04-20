import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

/**
 * @deprecated redirects from /maps/:continent/:area to /:continent/:area
 */
export const loader: LoaderFunction = async ({ request }) => {
  return redirect(request.url.replace("/maps", ""), 301);
};

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "s-maxage=360, stale-while-revalidate",
  };
};

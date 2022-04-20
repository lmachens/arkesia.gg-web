import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

/**
 * @deprecated redirects from /maps/:continent/:area to /:continent/:area
 */
export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.continent, "Expected params.continent");
  invariant(params.area, "Expected params.area");

  return redirect(
    `/${encodeURIComponent(params.continent)}/${encodeURIComponent(
      params.area
    )}`,
    301
  );
};

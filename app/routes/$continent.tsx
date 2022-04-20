import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { continents } from "~/lib/static";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.continent, "Expected params.continent");

  const continent = continents.find(
    (mapData) => mapData.name === params.continent
  );

  if (!continent) {
    return redirect("/");
  }

  return redirect(
    `/${encodeURIComponent(continent.name)}/${encodeURIComponent(
      continent.areas[0].name
    )}`
  );
};

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "s-maxage=360, stale-while-revalidate",
  };
};

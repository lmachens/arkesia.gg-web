import { LoaderFunction, redirect } from "remix";
import invariant from "tiny-invariant";
import { continents } from "~/lib/db";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.continent, "Expected params.continent");

  const continent = continents.find(
    (mapData) => mapData.name === params.continent
  );

  if (!continent) {
    return redirect("/");
  }

  return redirect(
    `/maps/${encodeURIComponent(continent.name)}/${encodeURIComponent(
      continent.areas[0].name
    )}`
  );
};

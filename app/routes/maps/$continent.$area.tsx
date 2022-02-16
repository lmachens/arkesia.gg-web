import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { ActionFunction, LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { continents } from "~/lib/db";
import NodesSelect from "~/components/NodesSelect";
import MapSelect from "~/components/MapSelect";
import { useState } from "react";
import { Area } from "~/lib/types";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.continent, "Expected params.continent");
  invariant(params.area, "Expected params.area");

  const continent = continents.find(
    (mapData) => mapData.name === params.continent
  );
  const area = continent?.areas.find((area) => area.name === params.area);
  return area;
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();

  const node = {
    lat: +body.get("lat")!,
    lng: +body.get("lng")!,
    type: body.get("type")!,
  };

  return node;
};

export default function MapPage() {
  const area = useLoaderData<Area>();
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);

  return (
    <>
      <aside className="sidebar">
        <MapSelect />
        <NodesSelect value={selectedNodes} onChange={setSelectedNodes} />
      </aside>
      <ClientOnly>
        <MapView selectedNodes={selectedNodes} area={area} />
      </ClientOnly>
    </>
  );
}

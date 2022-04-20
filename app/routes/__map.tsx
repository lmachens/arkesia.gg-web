import { LoadingOverlay } from "@mantine/core";
import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import NodeDetails from "~/components/NodeDetails";

export default function WorldPage() {
  return (
    <>
      <ClientOnly fallback={<LoadingOverlay visible />}>
        {() => <MapView />}
      </ClientOnly>
      <NodeDetails />
    </>
  );
}

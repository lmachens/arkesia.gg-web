import { useLoaderData } from "@remix-run/react";
import type { areaLoader, envLoader } from "./loaders.server";

export const useEnv = () => {
  const { ENV } = useLoaderData<typeof envLoader>();
  return ENV;
};

export const useNodeLocations = () => {
  const { nodeLocations } = useLoaderData<typeof areaLoader>();
  return nodeLocations || [];
};

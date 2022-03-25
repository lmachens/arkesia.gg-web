import { useLoaderData } from "remix";
import type { AreaLoaderData, EnvLoaderData } from "./loaders.server";

export const useEnv = () => {
  const { ENV } = useLoaderData<EnvLoaderData>();
  return ENV;
};

export const useNodeLocations = () => {
  const { nodeLocations } = useLoaderData<AreaLoaderData>();
  return nodeLocations;
};

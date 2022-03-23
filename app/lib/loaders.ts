import { useLoaderData } from "remix";
import type { AreaLoaderData, EnvLoaderData } from "./loaders.server";

export const useEnv = () => {
  const { ENV } = useLoaderData<EnvLoaderData>();
  return ENV;
};

export const useNodes = () => {
  const { nodes } = useLoaderData<AreaLoaderData>();
  return nodes;
};

export const useNodesByArea = () => {
  const { nodesByArea } = useLoaderData<AreaLoaderData>();
  return nodesByArea;
};

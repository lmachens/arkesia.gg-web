import type { AreaNode } from "@prisma/client";
import create from "zustand";
import { persist } from "zustand/middleware";

export type DiscoveredNode = Pick<AreaNode, "id" | "type">;

type StoreProps = {
  lastType: string;
  setLastType: (type: string) => void;
  isShowingDiscoveredNodes: boolean;
  toggleIsShowingDiscoveredNodes: () => void;
  discoveredNodes: DiscoveredNode[];
  toggleDiscoveredNode: (node: AreaNode) => void;
};

export const useStore = create(
  persist<StoreProps>(
    (set) => ({
      lastType: "Map Transition",
      setLastType: (type: string) => set({ lastType: type }),
      isShowingDiscoveredNodes: false,
      toggleIsShowingDiscoveredNodes: () =>
        set((state) => ({
          isShowingDiscoveredNodes: !state.isShowingDiscoveredNodes,
        })),
      discoveredNodes: [],
      toggleDiscoveredNode: (node) =>
        set((state) => {
          const discoveredNodes = [...state.discoveredNodes];
          const index = discoveredNodes.findIndex(
            (discoveredNode) => discoveredNode.id === node.id
          );
          if (index !== -1) {
            discoveredNodes.splice(index, 1);
          } else {
            discoveredNodes.push(node);
          }
          return { discoveredNodes: discoveredNodes };
        }),
    }),
    {
      name: "persistent-storage",
      getStorage: () => localStorage,
    }
  )
);

const lastTypeSelector = (state: StoreProps) =>
  [state.lastType, state.setLastType] as [string, (type: string) => void];
export const useLastType = () => {
  return useStore(lastTypeSelector);
};

const isShowingDiscoveredNodesSelector = (state: StoreProps) =>
  state.isShowingDiscoveredNodes;
export const useIsShowingDiscoveredNodes = () => {
  return useStore(isShowingDiscoveredNodesSelector);
};

const toggleIsShowingDiscoveredNodesSelector = (state: StoreProps) =>
  state.toggleIsShowingDiscoveredNodes;
export const useToggleIsShowingDiscoveredNodes = () => {
  return useStore(toggleIsShowingDiscoveredNodesSelector);
};

const discoveredNodesSelector = (state: StoreProps) => state.discoveredNodes;
export const useDiscoveredNodes = () => {
  return useStore(discoveredNodesSelector);
};

const toggleDiscoveredNodeSelector = (state: StoreProps) =>
  state.toggleDiscoveredNode;
export const useToggleDiscoveredNode = () => {
  return useStore(toggleDiscoveredNodeSelector);
};

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
  drawerPosition: "left" | "right";
  setDrawerPosition: (drawerPosition: "left" | "right") => void;
  lastAreaNames: string[];
  addLastAreaName: (areaName: string) => void;
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
      drawerPosition: "left",
      setDrawerPosition: (drawerPosition) => set(() => ({ drawerPosition })),
      lastAreaNames: [],
      addLastAreaName: (areaName: string) =>
        set((state) => {
          const newAreaNames = new Set([areaName, ...state.lastAreaNames]);
          return { lastAreaNames: Array.from(newAreaNames).slice(0, 5) };
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

const drawerPositionSelector = (state: StoreProps) => state.drawerPosition;
export const useDrawerPosition = () => {
  return useStore(drawerPositionSelector);
};

const setDrawerPositionSelector = (state: StoreProps) =>
  state.setDrawerPosition;
export const useSetDrawerPosition = () => {
  return useStore(setDrawerPositionSelector);
};

const lastAreaNamesSelector = (state: StoreProps) => ({
  lastAreaNames: state.lastAreaNames,
  addLastAreaName: state.addLastAreaName,
});
export const useLastAreaNames = () => {
  return useStore(lastAreaNamesSelector);
};

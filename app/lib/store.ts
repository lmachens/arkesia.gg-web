import type { AreaNode } from "@prisma/client";
import create from "zustand";
import { persist } from "zustand/middleware";
import { trackHideDiscoveredNodes, trackShowDiscoveredNodes } from "./stats";
import type { AreaNodeDTO } from "./types";

export type DiscoveredNode = Pick<AreaNode, "id" | "type">;

type PersistentStoreProps = {
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

export const usePersistentStore = create(
  persist<PersistentStoreProps>(
    (set) => ({
      lastType: "Map Transition",
      setLastType: (type: string) => set({ lastType: type }),
      isShowingDiscoveredNodes: false,
      toggleIsShowingDiscoveredNodes: () =>
        set((state) => {
          if (state.isShowingDiscoveredNodes) {
            trackHideDiscoveredNodes();
          } else {
            trackShowDiscoveredNodes();
          }
          return {
            isShowingDiscoveredNodes: !state.isShowingDiscoveredNodes,
          };
        }),
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

type SessionStoreProps = {
  editingNode: Partial<AreaNodeDTO> | null;
  setEditingNode: (editingNode: Partial<AreaNodeDTO> | null) => void;
};

export const useSessionStore = create(
  persist<SessionStoreProps>(
    (set) => ({
      editingNode: null,
      setEditingNode: (editingNode: Partial<AreaNodeDTO> | null) =>
        set({ editingNode }),
    }),
    {
      name: "session-storage",
      getStorage: () => sessionStorage,
    }
  )
);

const lastTypeSelector = (state: PersistentStoreProps) =>
  [state.lastType, state.setLastType] as [string, (type: string) => void];
export const useLastType = () => {
  return usePersistentStore(lastTypeSelector);
};

const isShowingDiscoveredNodesSelector = (state: PersistentStoreProps) =>
  state.isShowingDiscoveredNodes;
export const useIsShowingDiscoveredNodes = () => {
  return usePersistentStore(isShowingDiscoveredNodesSelector);
};

const toggleIsShowingDiscoveredNodesSelector = (state: PersistentStoreProps) =>
  state.toggleIsShowingDiscoveredNodes;
export const useToggleIsShowingDiscoveredNodes = () => {
  return usePersistentStore(toggleIsShowingDiscoveredNodesSelector);
};

const discoveredNodesSelector = (state: PersistentStoreProps) =>
  state.discoveredNodes;
export const useDiscoveredNodes = () => {
  return usePersistentStore(discoveredNodesSelector);
};

const toggleDiscoveredNodeSelector = (state: PersistentStoreProps) =>
  state.toggleDiscoveredNode;
export const useToggleDiscoveredNode = () => {
  return usePersistentStore(toggleDiscoveredNodeSelector);
};

const drawerPositionSelector = (state: PersistentStoreProps) =>
  state.drawerPosition;
export const useDrawerPosition = () => {
  return usePersistentStore(drawerPositionSelector);
};

const setDrawerPositionSelector = (state: PersistentStoreProps) =>
  state.setDrawerPosition;
export const useSetDrawerPosition = () => {
  return usePersistentStore(setDrawerPositionSelector);
};

const lastAreaNamesSelector = (state: PersistentStoreProps) => ({
  lastAreaNames: state.lastAreaNames,
  addLastAreaName: state.addLastAreaName,
});
export const useLastAreaNames = () => {
  return usePersistentStore(lastAreaNamesSelector);
};

const editingNodeSelector = (state: SessionStoreProps) => state.editingNode;
export const useEditingNode = () => {
  return useSessionStore(editingNodeSelector);
};

const setEditingNodeSelector = (state: SessionStoreProps) =>
  state.setEditingNode;
export const useSetEditingNode = () => {
  return useSessionStore(setEditingNodeSelector);
};

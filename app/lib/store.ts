import type { AreaNode, AreaNodeLocation } from "@prisma/client";
import create from "zustand";
import { persist } from "zustand/middleware";
import { trackHideDiscoveredNodes, trackShowDiscoveredNodes } from "./stats";

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
  showNameOnMap: boolean;
  toggleShowNameOnMap: () => void;
  markerSize: number;
  setMarkerSize: (markerSize: number) => void;
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
      showNameOnMap: true,
      toggleShowNameOnMap: () =>
        set((store) => ({ showNameOnMap: !store.showNameOnMap })),
      markerSize: 35,
      setMarkerSize: (markerSize) => set({ markerSize }),
    }),
    {
      name: "persistent-storage",
      getStorage: () => localStorage,
    }
  )
);

type EditingNodeLocation = Partial<AreaNodeLocation> & {
  areaNode: Partial<AreaNode>;
};

type SessionStoreProps = {
  editingNodeLocation: EditingNodeLocation | null;
  setEditingNodeLocation: (editingNode: EditingNodeLocation | null) => void;
};

export const useSessionStore = create(
  persist<SessionStoreProps>(
    (set) => ({
      editingNodeLocation: null,
      setEditingNodeLocation: (
        editingNodeLocation: EditingNodeLocation | null
      ) => set({ editingNodeLocation }),
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

const showNameOnMapSelector = (state: PersistentStoreProps) =>
  state.showNameOnMap;
export const useShowNameOnMap = () => {
  return usePersistentStore(showNameOnMapSelector);
};

const toggleShowNameOnMapSelector = (state: PersistentStoreProps) =>
  state.toggleShowNameOnMap;
export const useToggleShowNameOnMap = () => {
  return usePersistentStore(toggleShowNameOnMapSelector);
};

const markerSizeSelector = (state: PersistentStoreProps) => state.markerSize;
export const useMarkerSize = () => {
  return usePersistentStore(markerSizeSelector);
};

const setMarkerSizeSelector = (state: PersistentStoreProps) =>
  state.setMarkerSize;
export const useSetMarkerSize = () => {
  return usePersistentStore(setMarkerSizeSelector);
};

const editingNodeLocationSelector = (state: SessionStoreProps) =>
  state.editingNodeLocation;
export const useEditingNodeLocation = () => {
  return useSessionStore(editingNodeLocationSelector);
};

const setEditingNodeLocationSelector = (state: SessionStoreProps) =>
  state.setEditingNodeLocation;
export const useSetEditingNodeLocation = () => {
  return useSessionStore(setEditingNodeLocationSelector);
};

import { SpotlightProvider } from "@mantine/spotlight";
import { MagnifyingGlassIcon } from "@modulz/radix-icons";
import type { ReactNode } from "react";
import { useMemo } from "react";
import type { SpotlightAction } from "@mantine/spotlight";
import { continents } from "~/lib/static";
import { useNavigate } from "react-router-dom";

type AppSpotlightProviderProps = {
  children: ReactNode;
};

export default function AppSpotlightProvider({
  children,
}: AppSpotlightProviderProps) {
  const navigate = useNavigate();

  const actions = useMemo(() => {
    const actions: SpotlightAction[] = [];
    const handleTrigger = (action: SpotlightAction) => {
      navigate(action.url);
    };

    continents.forEach((continent) => {
      actions.push({
        title: continent.name,
        group: "continent",
        description: `Areas: ${continent.areas.length}`,
        url: `/maps/${continent.name}`,
        onTrigger: handleTrigger,
      });
      continent.areas.forEach((area) => {
        actions.push({
          title: area.name,
          group: "area",
          description: `Continent: ${continent.name}`,
          url: `/maps/${continent.name}/${area.name}`,
          onTrigger: handleTrigger,
        });
      });
    });
    return actions;
  }, []);

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<MagnifyingGlassIcon />}
      searchPlaceholder="Search..."
      shortcut="ctrl + f"
      nothingFoundMessage="Nothing found..."
      zIndex={10000}
    >
      {children}
    </SpotlightProvider>
  );
}

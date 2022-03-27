import { SpotlightProvider, useSpotlight } from "@mantine/spotlight";
import { MagnifyingGlassIcon } from "@modulz/radix-icons";
import type { ReactNode } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import type { SpotlightAction, SpotlightActionProps } from "@mantine/spotlight";
import {
  areaContinents,
  continents,
  ICON_BASE_URL,
  nodeTypesMap,
  TILE_BASE_URL,
} from "~/lib/static";
import { useNavigate } from "react-router-dom";
import { useLastAreaNames } from "~/lib/store";
import {
  Center,
  createStyles,
  Group,
  Image,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDidUpdate, useHotkeys } from "@mantine/hooks";
import { findNodes } from "~/lib/supabase";
import useThrottle from "~/lib/useThrottle";
import type { TransitTo } from "~/lib/types";

type AppSpotlightProviderProps = {
  children: ReactNode;
};

export default function AppSpotlightProvider({
  children,
}: AppSpotlightProviderProps) {
  const navigate = useNavigate();

  useHotkeys([
    [
      "ctrl+space",
      () =>
        navigate(`/maps/${continents[0].name}/${continents[0].areas[0].name}`),
    ],
  ]);

  const actions = useMemo(() => {
    const actions: SpotlightAction[] = [];
    const handleTrigger = (action: SpotlightAction) => {
      navigate(action.url);
    };

    actions.push({
      title: continents[0].areas[0].name,
      group: "popular",
      description: `Continent: ${continents[0].name}`,
      url: `/maps/${continents[0].name}/${continents[0].areas[0].name}`,
      image: TILE_BASE_URL + continents[0].areas[0].tiles[0].full,
      onTrigger: handleTrigger,
    });

    return actions;
  }, []);

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<MagnifyingGlassIcon />}
      searchPlaceholder="Search for areas and nodes..."
      shortcut="ctrl + f"
      nothingFoundMessage="Nothing found..."
      zIndex={10000}
      limit={6}
      filter={(query, actions) => {
        if (query === "") {
          return actions.filter(
            (action) =>
              action.group === "latest areas" || action.group === "popular"
          );
        }
        return actions.filter(
          (action) =>
            action.group !== "latest areas" && action.group !== "popular"
        );
      }}
      actionComponent={CustomAction}
    >
      {children}
      <LatestAreaNames />
      <AdditionalActions />
    </SpotlightProvider>
  );
}

function AdditionalActions() {
  const [nodes, setNodes] = useState<TransitTo[]>([]);

  const spotlight = useSpotlight();
  const navigate = useNavigate();
  const query = useThrottle(spotlight.query, 200);

  useDidUpdate(() => {
    findNodes(query).then(setNodes);
  }, [query]);

  useEffect(() => {
    const handleTrigger = (action: SpotlightAction) => {
      navigate(action.url);
    };
    const lowerCaseQuery = query.toLowerCase();
    const nodeActions = nodes
      .filter((node) => node.name)
      .map((node) => {
        const nodeLocation = node.areaNodeLocations[0];
        const continent = areaContinents[nodeLocation.areaName];
        const nodeType = nodeTypesMap[node.type];

        return {
          id: node.id.toString(),
          title: node.name!,
          description: `${node.type} in ${continent} / ${nodeLocation.areaName}`,
          url: `/maps/${continent}/${nodeLocation.areaName}?tile=${nodeLocation.tileId}&node=${node.id}`,
          image: ICON_BASE_URL + nodeType.icon,
          onTrigger: handleTrigger,
        };
      });

    for (let continent of continents) {
      for (let area of continent.areas) {
        if (area.name.toLowerCase().includes(lowerCaseQuery)) {
          nodeActions.push({
            id: `${continent.name}-${area.name}`,
            title: area.name,
            description: `Continent: ${continent.name}`,
            url: `/maps/${continent.name}/${area.name}`,
            image: TILE_BASE_URL + area.tiles[0].full,
            onTrigger: handleTrigger,
          });
          if (nodeActions.length >= 6) {
            break;
          }
        }
      }
      if (nodeActions.length >= 6) {
        break;
      }
    }

    spotlight.registerActions(nodeActions);

    return () => {
      spotlight.removeActions(nodeActions.map((node) => node.id.toString()));
    };
  }, [nodes]);

  return <></>;
}

function LatestAreaNames() {
  const { lastAreaNames, addLastAreaName } = useLastAreaNames();
  const spotlight = useSpotlight();
  const navigate = useNavigate();

  useEffect(() => {
    const handleTrigger = (action: SpotlightAction) => {
      navigate(action.url);
      addLastAreaName(action.title);
    };

    const newActions = lastAreaNames.map((lastAreaName) => {
      const continentName = areaContinents[lastAreaName];
      const continent = continents.find(
        (continent) => continent.name === continentName
      );
      const area = continent?.areas.find((area) => area.name === lastAreaName);
      return {
        id: lastAreaName,
        title: lastAreaName,
        group: "latest areas",
        description: `Continent: ${continentName}`,
        url: `/maps/${continentName}/${lastAreaName}`,
        image: TILE_BASE_URL + area?.tiles[0].full,
        onTrigger: handleTrigger,
      };
    });

    spotlight.registerActions(newActions);
    return () => {
      spotlight.removeActions(newActions.map((action) => action.id));
    };
  }, [lastAreaNames]);

  return <></>;
}

const useStyles = createStyles((theme) => ({
  action: {
    position: "relative",
    display: "block",
    width: "100%",
    padding: "10px 12px",
    borderRadius: theme.radius.sm,
  },

  actionHovered: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[1],
  },

  actionBody: {
    flex: 1,
  },
}));

function CustomAction({
  action,
  styles,
  classNames,
  hovered,
  onTrigger,
  ...others
}: SpotlightActionProps) {
  const { classes, cx } = useStyles(undefined, {
    styles,
    classNames,
    name: "Spotlight",
  });

  return (
    <UnstyledButton
      className={cx(classes.action, { [classes.actionHovered]: hovered })}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
      <Group noWrap>
        {action.image && (
          <Center>
            <Image
              src={action.image}
              alt={action.title}
              width={50}
              height={50}
              fit="contain"
            />
          </Center>
        )}

        <div className={classes.actionBody}>
          <Text>{action.title}</Text>

          {action.description && (
            <Text color="dimmed" size="xs">
              {action.description}
            </Text>
          )}
        </div>
        {action.title === "Arkesia" && (
          <Text
            size="xs"
            sx={(theme) => ({
              marginLeft: 8,
              padding: "2px 4px",
              borderRadius: theme.radius.xs,
              background: "#0000005e",
            })}
          >
            CTRL + Space
          </Text>
        )}
      </Group>
    </UnstyledButton>
  );
}

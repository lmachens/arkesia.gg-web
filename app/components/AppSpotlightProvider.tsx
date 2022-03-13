import { SpotlightProvider, useSpotlight } from "@mantine/spotlight";
import { MagnifyingGlassIcon } from "@modulz/radix-icons";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import type { SpotlightAction, SpotlightActionProps } from "@mantine/spotlight";
import { areaContinents, continents, TILE_BASE_URL } from "~/lib/static";
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

type AppSpotlightProviderProps = {
  children: ReactNode;
};

export default function AppSpotlightProvider({
  children,
}: AppSpotlightProviderProps) {
  const navigate = useNavigate();
  const { addLastAreaName } = useLastAreaNames();

  const actions = useMemo(() => {
    const actions: SpotlightAction[] = [];
    const handleTrigger = (action: SpotlightAction) => {
      navigate(action.url);
      addLastAreaName(action.title);
    };

    actions.push({
      title: continents[0].areas[0].name,
      group: "popular",
      description: `Continent: ${continents[0].name}`,
      url: `/maps/${continents[0].name}/${continents[0].areas[0].name}`,
      image: TILE_BASE_URL + continents[0].areas[0].tiles[0].full,
      onTrigger: handleTrigger,
    });

    continents.forEach((continent) => {
      continent.areas.forEach((area) => {
        actions.push({
          title: area.name,
          group: "area",
          description: `Continent: ${continent.name}`,
          url: `/maps/${continent.name}/${area.name}`,
          image: TILE_BASE_URL + area.tiles[0].full,
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
      filter={(query, actions) => {
        if (query === "") {
          return actions.filter(
            (action) => action.group === "latest" || action.group === "popular"
          );
        }
        return actions.filter(
          (action) =>
            action.group !== "latest" &&
            action.group !== "popular" &&
            (action.title.toLowerCase().includes(query.toLowerCase()) ||
              action.description?.toLowerCase().includes(query.toLowerCase()))
        );
      }}
      actionComponent={CustomAction}
    >
      {children}
      <LatestAreaNames />
    </SpotlightProvider>
  );
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
        group: "latest",
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
      </Group>
    </UnstyledButton>
  );
}

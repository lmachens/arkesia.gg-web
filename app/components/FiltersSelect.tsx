import { ActionIcon, Checkbox, Container, Popover } from "@mantine/core";
import { Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { StackIcon } from "@modulz/radix-icons";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { arkesiaArea, continents, nodeCategories } from "~/lib/static";
import { useDrawerPosition, useFilters, useSetFilters } from "~/lib/store";

const FiltersSelect = () => {
  const drawerPosition = useDrawerPosition();
  const filters = useFilters();
  const setFilters = useSetFilters();
  const params = useParams();
  const [opened, handlers] = useDisclosure(false);

  const area = useMemo(() => {
    const continent = continents.find(
      (continent) => continent.name === params.continent
    );
    return (
      continent?.areas.find((area) => area.name === params.area) || arkesiaArea
    );
  }, [params.area, params.continent]);

  const categoryNames = useMemo(
    () =>
      nodeCategories
        .filter((category) => category.includes.includes(area.category))
        .map((category) => category.name),
    [area]
  );

  const content = (
    <Stack spacing="xs">
      {categoryNames.map((categoryName) => (
        <Checkbox
          key={categoryName}
          label={categoryName}
          onChange={(event) => {
            if (event.target.checked) {
              setFilters([...filters, categoryName]);
            } else {
              setFilters(
                [...filters].filter((filter) => filter !== categoryName)
              );
            }
          }}
          checked={filters.includes(categoryName)}
        />
      ))}
    </Stack>
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        right: drawerPosition === "left" ? 10 : "auto",
        left: drawerPosition === "left" ? "auto" : 10,
        zIndex: 8900,
      }}
    >
      <Popover
        opened={opened}
        onClose={handlers.close}
        target={
          <ActionIcon
            onClick={handlers.toggle}
            size="lg"
            variant="filled"
            title="Filters"
            color="cyan"
          >
            <StackIcon />
          </ActionIcon>
        }
        position="bottom"
        withArrow
        zIndex={8900}
        radius="sm"
        sx={{
          display: "none",
          "@media (max-width: 800px)": {
            display: "block",
          },
        }}
      >
        {content}
      </Popover>
      <Container
        sx={(theme) => ({
          borderRadius: theme.radius.sm,
          padding: theme.spacing.sm,
          backgroundColor: theme.colors.dark[8],
          "@media (max-width: 800px)": {
            display: "none",
          },
        })}
      >
        {content}
      </Container>
    </div>
  );
};

export default FiltersSelect;

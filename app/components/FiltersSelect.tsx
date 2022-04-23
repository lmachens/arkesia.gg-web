import { Checkbox } from "@mantine/core";
import { Stack } from "@mantine/core";
import { DrawingPinFilledIcon, EyeOpenIcon } from "@modulz/radix-icons";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { arkesiaArea, continents, nodeCategories } from "~/lib/static";
import { useDrawerPosition, useFilters, useSetFilters } from "~/lib/store";

const FiltersSelect = () => {
  const drawerPosition = useDrawerPosition();
  const filters = useFilters();
  const setFilters = useSetFilters();
  const params = useParams();

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
        .map((category) => category.name)
        .sort(),
    [area]
  );

  return (
    <Stack
      spacing="xs"
      sx={(theme) => ({
        borderRadius: theme.radius.sm,
        padding: theme.spacing.sm,
        backgroundColor: theme.colors.dark[8],
        position: "absolute",
        top: 10,
        right: drawerPosition === "left" ? 10 : "auto",
        left: drawerPosition === "left" ? "auto" : 10,
        zIndex: 8900,
      })}
    >
      {categoryNames.map((categoryName) => (
        <Checkbox
          key={categoryName}
          icon={DrawingPinFilledIcon}
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
};

export default FiltersSelect;

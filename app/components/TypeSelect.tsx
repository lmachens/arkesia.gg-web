import type { SelectProps } from "@mantine/core";
import { Select } from "@mantine/core";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import TypeItem from "./TypeItem";
import { ICON_BASE_URL, nodeCategories } from "~/lib/static";
import { useLoaderData } from "remix";
import type { LoaderData } from "~/lib/loaders.server";

const TypeSelect = (props: Omit<SelectProps, "data">) => {
  const [query, setQuery] = useState("");
  const { area } = useLoaderData<LoaderData>();

  const types = useMemo(
    () =>
      nodeCategories
        .filter((nodeCategory) => nodeCategory.includes.includes(area.category))
        .map((nodeCategory) =>
          nodeCategory.types.map((nodeType) => ({
            category: nodeCategory.name,
            image: `${ICON_BASE_URL}${nodeType.icon}`,
            value: nodeType.name,
            label: nodeType.name,
          }))
        )
        .flat(),
    [area.category]
  );

  const sortedTypes = useMemo(() => {
    if (query.length === 0) {
      return types.map((type) => ({ ...type, group: type.category }));
    }
    const fuse = new Fuse(types, {
      shouldSort: true,
      keys: ["label"],
    });
    const results = fuse.search(query).map((a) => a.item);
    types.forEach((type) => {
      if (!results.some((result) => result.value === type.value)) {
        results.push(type);
      }
    });
    return results;
  }, [types, query]);

  return (
    <Select
      label="Type"
      placeholder="Pick one"
      name="type"
      zIndex={800}
      searchable
      filter={() => true}
      onSearchChange={setQuery}
      autoComplete="off"
      autoCorrect="off"
      required
      itemComponent={TypeItem}
      maxDropdownHeight={400}
      data={sortedTypes}
      {...props}
    />
  );
};

export default TypeSelect;

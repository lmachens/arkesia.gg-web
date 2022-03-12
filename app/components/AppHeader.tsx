import { Header } from "@mantine/core";
import type { ReactNode } from "react";
import { useLoaderData } from "remix";
import type { LoaderData } from "~/lib/loaders.server";
import MapSelect from "./MapSelect";

type AppHeaderProps = {
  children: ReactNode;
};
export default function AppHeader({ children }: AppHeaderProps) {
  const { continentName, area, continentNames, areaNames } =
    useLoaderData<LoaderData>();

  return (
    <Header
      height={60}
      p="xs"
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <MapSelect
        continentName={continentName}
        areaName={area.name}
        continentNames={continentNames}
        areaNames={areaNames}
      />
      {children}
    </Header>
  );
}

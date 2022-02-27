import { Select } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type MapSelectProps = {
  continentName: string;
  areaName: string;
  continentNames: string[];
  areaNames: string[];
};
export default function MapSelect({
  continentName,
  areaName,
  continentNames,
  areaNames,
}: MapSelectProps) {
  const navigate = useNavigate();
  const [continent, setContinent] = useState<string>("");
  const [area, setArea] = useState<string>("");

  return (
    <>
      <Select
        className="inline-select"
        label="Continent"
        value={continent}
        zIndex={800}
        placeholder={continentName}
        onChange={(value) => {
          if (value) {
            navigate(`/maps/${encodeURIComponent(value)}`);
          }
          setContinent("");
        }}
        onDropdownClose={() => {
          setContinent("");
        }}
        data={continentNames}
        searchable
        autoComplete="off"
        autoCorrect="off"
      />
      <Select
        className="inline-select"
        label="Area"
        value={area}
        placeholder={areaName}
        zIndex={800}
        searchable
        autoComplete="off"
        autoCorrect="off"
        onChange={(value) => {
          if (value) {
            navigate(
              `/maps/${encodeURIComponent(continentName)}/${encodeURIComponent(
                value
              )}`
            );
          }
          setArea("");
        }}
        onDropdownClose={() => {
          setArea("");
        }}
        data={areaNames}
      />
    </>
  );
}

import { Select } from "@mantine/core";
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

  return (
    <>
      <Select
        className="inline-select"
        label="Continent"
        value={continentName}
        zIndex={800}
        onChange={(value) => {
          navigate(`/maps/${encodeURIComponent(value || "")}`);
        }}
        data={continentNames}
      />
      <Select
        className="inline-select"
        label="Area"
        value={areaName}
        zIndex={800}
        onChange={(value) => {
          navigate(
            `/maps/${encodeURIComponent(continentName)}/${encodeURIComponent(
              value || ""
            )}`
          );
        }}
        data={areaNames}
      />
    </>
  );
}

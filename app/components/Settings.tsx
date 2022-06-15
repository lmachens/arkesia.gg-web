import {
  InputWrapper,
  SegmentedControl,
  Slider,
  Space,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { useEffect } from "react";
import {
  useDrawerPosition,
  useMarkerSize,
  useSetDrawerPosition,
  useSetMarkerSize,
  useShowNameOnMap,
  useToggleShowNameOnMap,
} from "~/lib/store";
import { DiscoveredNodes } from "./DiscoveredNodes";

const Settings = () => {
  const [userToken, setUserToken] = useLocalStorageValue<string>({
    key: "user-token",
    defaultValue: "",
  });
  const setDrawerPosition = useSetDrawerPosition();
  const showNameOnMap = useShowNameOnMap();
  const toggleShowNameOnMap = useToggleShowNameOnMap();
  const markerSize = useMarkerSize();
  const setMarkerSize = useSetMarkerSize();
  const drawerPosition = useDrawerPosition();

  useEffect(() => {
    // @ts-ignore
    if (window["__cmp"]) {
      // @ts-ignore
      window["__cmp"]("addConsentLink");
    }
  }, []);

  return (
    <>
      <TextInput
        label="User-Token"
        required
        placeholder="Only for moderators right now"
        value={userToken}
        onChange={(event) => setUserToken(event.target.value)}
        name="userToken"
      />
      <Space h="md" />
      <Text style={{ marginBottom: 10 }} weight={500}>
        Map
      </Text>
      <Switch
        label="Show name on map"
        checked={showNameOnMap}
        onChange={toggleShowNameOnMap}
      />
      <InputWrapper label="Marker size" style={{ marginTop: 5 }}>
        <Slider
          value={markerSize}
          onChange={setMarkerSize}
          min={15}
          max={60}
          label={null}
        />
      </InputWrapper>
      <Space h="md" />
      <DiscoveredNodes />
      <Text style={{ marginBottom: 10 }} weight={500}>
        Drawer position
      </Text>
      <SegmentedControl
        size="sm"
        value={drawerPosition}
        onChange={(value: "left" | "right") => setDrawerPosition(value)}
        sx={{ width: "100%" }}
        data={[
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ]}
      />
      <Text
        id="ncmp-consent-link"
        color="blue"
        sx={{
          button: {
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
          },
        }}
      />
    </>
  );
};

export default Settings;

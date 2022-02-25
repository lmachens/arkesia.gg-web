import {
  Dropzone,
  DropzoneProps,
  DropzoneStatus,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import ImageUploadIcon from "./ImageUploadIcon";
import {
  ActionIcon,
  Button,
  Group,
  Image,
  InputWrapper,
  MantineTheme,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useMemo } from "react";
import { Cross2Icon } from "@modulz/radix-icons";

type ImageDropzoneProps = Omit<DropzoneProps, "children"> & {
  image: File | null;
  onClear: () => void;
};
export default function ImageDropzone({
  image,
  onClear,
  ...props
}: ImageDropzoneProps) {
  const theme = useMantineTheme();

  const base64Image = useMemo(
    () => image && URL.createObjectURL(image),
    [image]
  );

  return (
    <InputWrapper
      label="Screenshot"
      sx={() => ({
        position: "relative",
      })}
    >
      <Dropzone accept={IMAGE_MIME_TYPE} multiple={false} {...props}>
        {(status) => (
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: "none" }}
          >
            {base64Image ? (
              <Image src={base64Image} alt="" />
            ) : (
              <>
                <ImageUploadIcon
                  status={status}
                  style={{
                    width: 80,
                    height: 80,
                    color: getIconColor(status, theme),
                  }}
                />
                <div>
                  <Text size="xl" inline>
                    Drag image here or click to select file
                  </Text>
                  <Text size="sm" color="dimmed" inline mt={7}>
                    The image should not exceed 5mb
                  </Text>
                </div>
              </>
            )}
          </Group>
        )}
      </Dropzone>
      {base64Image && (
        <ActionIcon
          onClick={onClear}
          sx={() => ({
            position: "absolute",
            top: 0,
            right: 0,
          })}
        >
          <Cross2Icon />
        </ActionIcon>
      )}
    </InputWrapper>
  );
}

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === "dark"
    ? theme.colors.dark[0]
    : theme.black;
}

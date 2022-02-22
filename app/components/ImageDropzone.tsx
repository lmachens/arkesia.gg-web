import {
  Dropzone,
  DropzoneProps,
  DropzoneStatus,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import ImageUploadIcon from "./ImageUploadIcon";
import {
  Group,
  Image,
  MantineTheme,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useMemo } from "react";

type ImageDropzoneProps = Omit<DropzoneProps, "children"> & {
  image: File | null;
};
export default function ImageDropzone({ image, ...props }: ImageDropzoneProps) {
  const theme = useMantineTheme();

  const base64Image = useMemo(
    () => image && URL.createObjectURL(image),
    [image]
  );

  return (
    <Dropzone accept={IMAGE_MIME_TYPE} multiple={false} {...props}>
      {(status) => (
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: "none" }}
        >
          {base64Image ? (
            <>
              <Image src={base64Image} alt="" />
            </>
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

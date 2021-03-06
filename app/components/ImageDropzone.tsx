import type { DropzoneProps, DropzoneStatus } from "@mantine/dropzone";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import ImageUploadIcon from "./ImageUploadIcon";
import type { MantineTheme } from "@mantine/core";
import {
  ActionIcon,
  Group,
  Image,
  InputWrapper,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useEffect } from "react";
import { Cross2Icon } from "@modulz/radix-icons";

type ImageDropzoneProps = Omit<DropzoneProps, "children"> & {
  src?: string | null;
  onClear: () => void;
};
export default function ImageDropzone({
  src,
  onClear,
  onDrop,
  ...props
}: ImageDropzoneProps) {
  const theme = useMantineTheme();

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      if (!event.clipboardData) {
        return;
      }
      for (const item of event.clipboardData.items) {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (!file) {
            continue;
          }
          onDrop([file]);
        }
      }
    };
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [onDrop]);

  return (
    <InputWrapper
      label="Screenshot"
      sx={() => ({
        position: "relative",
      })}
    >
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        multiple={false}
        onDrop={onDrop}
        {...props}
      >
        {(status) => (
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: "none" }}
          >
            {src ? (
              <Image src={src} alt="" />
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
                    Paste, drag image here or click to select file
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
      {src && (
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

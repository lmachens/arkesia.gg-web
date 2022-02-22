import { DropzoneStatus } from "@mantine/dropzone";
import { ImageIcon, UploadIcon, CrossCircledIcon } from "@modulz/radix-icons";
import { IconProps } from "@modulz/radix-icons/dist/types";

type ImageUploadIconProps = {
  status: DropzoneStatus;
} & IconProps;

export default function ImageUploadIcon({
  status,
  ...props
}: ImageUploadIconProps) {
  if (status.accepted) {
    return <UploadIcon {...props} />;
  }

  if (status.rejected) {
    return <CrossCircledIcon {...props} />;
  }

  return <ImageIcon {...props} />;
}

import { Image, Modal } from "@mantine/core";
import { useState } from "react";

type ImagePreviewProps = {
  src: string;
};
export default function ImagePreview({ src }: ImagePreviewProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        centered
        onClose={() => setOpened(false)}
        zIndex={900}
        size="xl"
      >
        <Image src={src} alt="" fit="contain" radius="sm" withPlaceholder />
      </Modal>
      <Image
        src={src}
        height={200}
        alt=""
        fit="contain"
        radius="sm"
        onClick={() => setOpened(true)}
        withPlaceholder
        sx={() => ({
          cursor: "pointer",
        })}
      />
    </>
  );
}

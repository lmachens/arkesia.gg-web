import { Avatar, Group, Text } from "@mantine/core";
import { forwardRef } from "react";

type TypeItemProps = {
  image: string;
  label: string;
};

const TypeItem = forwardRef<HTMLDivElement, TypeItemProps>(
  ({ image, label, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <Text>{label}</Text>
      </Group>
    </div>
  )
);

TypeItem.displayName = "TypeItem";

export default TypeItem;

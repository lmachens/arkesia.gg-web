import type { AreaNode, AreaNodeLocation } from "@prisma/client";

export type AreaNodeWithoutId = Omit<AreaNode, "id">;
export type AreaNodeLocationWithoutId = Omit<AreaNodeLocation, "id">;

export type FieldErrors = {
  [key: string]: string;
};

export type PostNodeActionData = {
  formError?: string;
  fieldErrors?: FieldErrors;
  fields?: AreaNodeWithoutId;
};

export const validateNode = (node: AreaNodeWithoutId) => {
  const result: {
    [key in keyof AreaNodeWithoutId]?: string;
  } = {};
  if (node.name && (node.name.length < 3 || node.name.length > 50)) {
    result.name = "Invalid name length";
  }
  if (!node.type) {
    result.type = "Type is missing";
  }
  return result;
};

import { AreaNode } from "@prisma/client";

export type AreaNodeWithoutId = Omit<AreaNode, "id">;

export type PostNodeActionData = {
  formError?: string;
  fieldErrors?: {
    [key in keyof AreaNodeWithoutId]?: string;
  };
  fields?: AreaNodeWithoutId;
};

export const validateNode = (node: AreaNodeWithoutId) => {
  const result: {
    [key in keyof AreaNodeWithoutId]?: string;
  } = {};

  if (!node.userId) {
    result.userId = "User not found";
  }
  if (node.name.length < 3 || node.name.length > 30) {
    result.name = "Invalid name length";
  }
  if (node.description && node.description.length > 1000) {
    result.description = "Description is too long";
  }
  if (!node.type) {
    result.description = "Type is missing";
  }
  return result;
};

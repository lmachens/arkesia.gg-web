import type { AreaNode, AreaNodeLocation } from "@prisma/client";
import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

export let supabase: SupabaseClient;
export const initSupabase = (supabaseUrl: string, supabaseKey: string) => {
  if (supabase) {
    return;
  }
  supabase = createClient(supabaseUrl, supabaseKey);
};

export const findNodes = async (query: string) => {
  const result = await supabase
    .from<AreaNode>("AreaNode")
    .select(
      `
      id,
      name,
      areaName,
      type,
      tileId
    `
    )
    .ilike("name", `%${query}%`)
    .limit(5);
  return result.data || [];
};

export const countNodes = async (areaName: string) => {
  const result = await supabase
    .from<AreaNodeLocation>("AreaNodeLocation")
    .select(
      `
    areaNode {
      type
    }
  `
    )
    .eq("areaName", areaName);
  return result.data || [];
};

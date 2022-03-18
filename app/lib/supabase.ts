import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import type { AreaNodeDTO } from "./types";

export let supabase: SupabaseClient;
export const initSupabase = (supabaseUrl: string, supabaseKey: string) => {
  if (supabase) {
    return;
  }
  supabase = createClient(supabaseUrl, supabaseKey);
};

export const findNodes = async () => {
  const result = await supabase.from<AreaNodeDTO>("AreaNode").select(
    `
      *,
      transitTo:transitToId(*)
    `
  );
  return result.data || [];
};

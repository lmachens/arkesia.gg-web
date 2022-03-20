import { useEffect } from "react";
import { useEnv } from "~/lib/loaders";
import { initPlausible } from "~/lib/stats";
import { initSupabase } from "~/lib/supabase";

export default function InitClients() {
  const {
    PLAUSIBLE_DOMAIN,
    PLAUSIBLE_API_HOST,
    SUPABASE_URL,
    SUPABASE_PUBLIC_KEY,
  } = useEnv();

  useEffect(() => {
    if (PLAUSIBLE_DOMAIN && PLAUSIBLE_API_HOST) {
      initPlausible(PLAUSIBLE_DOMAIN, PLAUSIBLE_API_HOST);
    }
    if (SUPABASE_URL && SUPABASE_PUBLIC_KEY) {
      initSupabase(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
    }
  }, []);

  return <></>;
}

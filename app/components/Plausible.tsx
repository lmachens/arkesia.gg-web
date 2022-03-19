import { useEffect } from "react";
import { useLoaderData } from "remix";
import { initPlausible } from "~/lib/stats";

export default function Plausible() {
  const { ENV } = useLoaderData();

  useEffect(() => {
    initPlausible(ENV.PLAUSIBLE_DOMAIN, ENV.PLAUSIBLE_API_HOST);
  }, []);

  return <></>;
}

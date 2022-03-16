import { useEffect } from "react";
import { useLoaderData } from "remix";
import { initPlausible } from "~/lib/stats";

export default function Plausible() {
  const data = useLoaderData();

  useEffect(() => {
    initPlausible(data.ENV.PLAUSIBLE_DOMAIN, data.ENV.PLAUSIBLE_API_HOST);
  }, []);

  return <></>;
}

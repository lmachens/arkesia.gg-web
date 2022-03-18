import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/styles/global.css";
import leafletStyles from "leaflet/dist/leaflet.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AppSpotlightProvider from "./components/AppSpotlightProvider";
import Plausible from "./components/Plausible";
import { initSupabase } from "./lib/supabase";
import { useEffect } from "react";
import { useRefreshNodes } from "./lib/store";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: leafletStyles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Arkesia - Lost Ark Map" };
};

export async function loader() {
  return json({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_PUBLIC_KEY: process.env.SUPABASE_PUBLIC_KEY,
      PLAUSIBLE_API_HOST: process.env.PLAUSIBLE_API_HOST,
      PLAUSIBLE_DOMAIN: process.env.PLAUSIBLE_DOMAIN,
    },
  });
}

export default function App() {
  const { ENV } = useLoaderData();
  const refreshNodes = useRefreshNodes();

  useEffect(() => {
    initSupabase(ENV.SUPABASE_URL, ENV.SUPABASE_PUBLIC_KEY);
    refreshNodes();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider
          theme={{ fontFamily: "NunitoVariable", colorScheme: "dark" }}
        >
          <NotificationsProvider
            zIndex={900}
            position="top-right"
            autoClose={2500}
          >
            <AppSpotlightProvider>
              <Outlet />
            </AppSpotlightProvider>
          </NotificationsProvider>
        </MantineProvider>
        <ScrollRestoration />
        <Plausible />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

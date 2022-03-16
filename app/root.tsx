import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/styles/global.css";
import leafletStyles from "leaflet/dist/leaflet.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AppSpotlightProvider from "./components/AppSpotlightProvider";
import Plausible from "./components/Plausible";

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
      PLAUSIBLE_API_HOST: process.env.PLAUSIBLE_API_HOST,
      PLAUSIBLE_DOMAIN: process.env.PLAUSIBLE_DOMAIN,
    },
  });
}

export default function App() {
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

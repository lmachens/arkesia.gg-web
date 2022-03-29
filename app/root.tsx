import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, ShouldReloadFunction } from "remix";
import styles from "~/styles/global.css";
import leafletStyles from "leaflet/dist/leaflet.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AppSpotlightProvider from "./components/AppSpotlightProvider";
import InitClients from "./components/InitClients";
import { envLoader } from "./lib/loaders.server";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: leafletStyles },
  ];
}

export const meta: MetaFunction = () => {
  return {
    title: "Arkesia.gg - Lost Ark Map",
    charset: "utf-8",
    description:
      "Arkesia.gg is an interactive map with mokoko seeds, hidden stories and more for Lost Ark.",
    keywords: "Lost Ark,Arkesia,Map,World,Mokoko seeds",
  };
};

export const loader = envLoader;

// Only load `envLoader` once
export const unstable_shouldReload: ShouldReloadFunction = () => false;

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
        <InitClients />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

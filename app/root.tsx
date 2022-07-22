import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { ShouldReloadFunction } from "@remix-run/react";
import styles from "~/styles/global.css";
import leafletStyles from "leaflet/dist/leaflet.css";
import { AppShell, Global, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AppSpotlightProvider from "./components/AppSpotlightProvider";
import InitClients from "./components/InitClients";
import { envLoader } from "./lib/loaders.server";
import AppBreadcrumbs from "./components/AppBreadcrumbs";
import ActionIcons from "./components/ActionIcons";
import Footer from "./components/Footer";
import NitroPay from "./components/NitroPay";
import Notifications from "./components/Notifications";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: leafletStyles },
  ];
}

export const meta = () => {
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
        <InitClients />
        <MantineProvider
          theme={{ fontFamily: "NunitoVariable", colorScheme: "dark" }}
        >
          <Global
            styles={() => ({
              body: {
                overflow: "hidden",
              },
            })}
          />
          <NotificationsProvider
            zIndex={9000}
            position="top-right"
            autoClose={2500}
          >
            <AppSpotlightProvider>
              <AppShell
                padding={0}
                style={{ overflow: "hidden" }}
                styles={(theme) => ({
                  main: {
                    backgroundColor: theme.colors.dark[8],
                    color: theme.colors.dark[0],
                    height: "100vh",
                  },
                })}
              >
                <AppBreadcrumbs />
                <Outlet />
                <ActionIcons />
                <Footer />
                <NitroPay />
                <Notifications />
              </AppShell>
            </AppSpotlightProvider>
          </NotificationsProvider>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

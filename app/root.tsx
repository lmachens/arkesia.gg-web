import {
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
import toastifyStyles from "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: leafletStyles },
    { rel: "stylesheet", href: toastifyStyles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

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
        <Outlet />
        <ToastContainer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

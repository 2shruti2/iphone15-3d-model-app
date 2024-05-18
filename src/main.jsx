import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";

import App from "./App.jsx";
import "./index.css";

Sentry.init({
  dsn: "https://92592286d457e558a289d6e135d4038a@o4507273074245632.ingest.us.sentry.io/4507273106817024",
  integrations: [
    Sentry.browserTracingIntegration({
      enableInp: true,
    }),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

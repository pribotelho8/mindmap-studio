import { createRoot } from "react-dom/client";
import { App } from "./App";
import { PublicMapPage } from "./PublicMapPage";
import { AuthGate } from "./auth/AuthGate";
import { AuthProvider } from "./auth/AuthProvider";
import { CloudBootstrap } from "./cloud/CloudBootstrap";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { initLocale } from "./i18n";
import "./mobile.css";

initLocale();

const publicSlug = new URLSearchParams(window.location.search).get("public");

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    {publicSlug ? (
      <PublicMapPage slug={publicSlug} />
    ) : (
      <AuthProvider>
        <AuthGate>
          <CloudBootstrap>
            <App />
          </CloudBootstrap>
        </AuthGate>
      </AuthProvider>
    )}
  </ErrorBoundary>,
);

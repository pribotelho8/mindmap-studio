import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AuthGate } from "./auth/AuthGate";
import { AuthProvider } from "./auth/AuthProvider";
import { CloudBootstrap } from "./cloud/CloudBootstrap";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { initLocale } from "./i18n";
import "./mobile.css";

initLocale();

// StrictMode intentionally omitted: its double-invoked effects re-init the canvas
// engine instance, which muddles headless screenshots used for verification.
// biome-ignore lint/style/noNonNullAssertion: #root is guaranteed by index.html
createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <AuthProvider>
      <AuthGate>
        <CloudBootstrap>
          <App />
        </CloudBootstrap>
      </AuthGate>
    </AuthProvider>
  </ErrorBoundary>,
);

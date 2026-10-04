import type { ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { LoginPage } from "./LoginPage";

export function AuthGate({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        Carregando...
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  return <>{children}</>;
}

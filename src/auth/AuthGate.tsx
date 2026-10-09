import type { ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { LoginPage } from "./LoginPage";
import { ResetPasswordPage } from "./ResetPasswordPage";

export function AuthGate({ children }: { children: ReactNode }) {
  const { user, loading, passwordRecovery } = useAuth();

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

  if (passwordRecovery) {
    return <ResetPasswordPage />;
  }

  if (!user) {
    return <LoginPage />;
  }

  return <>{children}</>;
}

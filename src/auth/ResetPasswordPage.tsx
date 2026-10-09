import { useState } from "react";
import { supabase } from "../lib/supabase";

export function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");

    if (password.length < 6) {
      setMessage("A nova senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) throw error;

      setSuccess(true);
      setMessage("Senha alterada com sucesso.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível alterar sua senha.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function returnToLogin() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#FCFAF6",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "min(420px, calc(100vw - 32px))",
          background: "#FCFAF6",
          padding: 32,
          borderRadius: 18,
          boxShadow: "0 20px 60px rgba(55,38,18,0.10)",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            marginBottom: 8,
            color: "#0B2F63",
            letterSpacing: "-0.03em",
          }}
        >
          Criar nova senha
        </h1>

        <p style={{ color: "#676159", marginBottom: 24 }}>
          Escolha uma nova senha para acessar o MindMap Studio.
        </p>

        {!success ? (
          <>
            <input
              type="password"
              placeholder="Nova senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: 12,
                marginBottom: 12,
                border: "1px solid #E3D4C1",
                borderRadius: 10,
              }}
            />

            <input
              type="password"
              placeholder="Confirme a nova senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: 12,
                marginBottom: 16,
                border: "1px solid #E3D4C1",
                borderRadius: 10,
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: 12,
                border: 0,
                borderRadius: 10,
                background: "#0B2F63",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {loading ? "Salvando..." : "Salvar nova senha"}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => void returnToLogin()}
            style={{
              width: "100%",
              padding: 12,
              border: 0,
              borderRadius: 10,
              background: "#0B2F63",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Voltar para o login
          </button>
        )}

        {message && (
          <p style={{ marginTop: 16, color: "#49566A" }}>{message}</p>
        )}
      </form>
    </main>
  );
}

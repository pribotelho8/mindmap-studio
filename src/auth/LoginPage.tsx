import { useState } from "react";
import { supabase } from "../lib/supabase";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        setMessage(
          "Conta criada. Verifique seu e-mail caso a confirmação esteja habilitada.",
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
      }
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Não foi possível autenticar.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f6f7f9",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "min(420px, calc(100vw - 32px))",
          background: "#FFFCF7",
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
          MindMap Studio
        </h1>

        <p style={{ color: "#676159", marginBottom: 24 }}>
          {mode === "login"
            ? "Entre para acessar seus mapas."
            : "Crie sua conta para salvar seus mapas na nuvem."}
        </p>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          {loading
            ? "Aguarde..."
            : mode === "login"
              ? "Entrar"
              : "Criar conta"}
        </button>

        {message && (
          <p style={{ marginTop: 16, color: "#49566A" }}>{message}</p>
        )}

        <button
          type="button"
          onClick={() =>
            setMode((current) => (current === "login" ? "signup" : "login"))
          }
          style={{
            width: "100%",
            marginTop: 16,
            border: 0,
            background: "transparent",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {mode === "login"
            ? "Ainda não tenho conta"
            : "Já tenho uma conta"}
        </button>
      </form>
    </main>
  );
}

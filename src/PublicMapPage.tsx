import { useEffect, useState } from "react";
import { loadPublicMap } from "./cloud/mapCloudStore";
import { MindMap } from "./mindmap";
import type { MindMapDoc } from "./model/types";

export function PublicMapPage({ slug }: { slug: string }) {
  const [doc, setDoc] = useState<MindMapDoc | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    void loadPublicMap(slug)
      .then((map) => {
        if (!active) return;

        if (!map) {
          setError("Este mapa não está disponível publicamente.");
          return;
        }

        setDoc(map);
      })
      .catch(() => {
        if (active) {
          setError("Não foi possível carregar este mapa.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          background: "#F8F1E7",
          color: "#14243A",
        }}
      >
        Carregando mapa...
      </main>
    );
  }

  if (!doc || error) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          background: "#F8F1E7",
          color: "#14243A",
          padding: 24,
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ color: "#0B2F63" }}>MindMap Studio</h1>
          <p>{error || "Mapa não encontrado."}</p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "58px 1fr",
        background: "#F8F1E7",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "0 20px",
          borderBottom: "1px solid #E3D4C1",
          background: "#FFFCF7",
          color: "#14243A",
        }}
      >
        <strong
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {doc.title}
        </strong>

        <span
          style={{
            flexShrink: 0,
            fontSize: 12,
            color: "#676159",
          }}
        >
          Somente visualização
        </span>
      </header>

      <div style={{ minHeight: 0, position: "relative" }}>
        <MindMap doc={doc} readOnly />
      </div>
    </main>
  );
}

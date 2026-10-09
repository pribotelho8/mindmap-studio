import { useEffect, useState } from "react";
import {
  disablePublicMap,
  enablePublicMap,
  getPublicMapShare,
} from "../cloud/mapCloudStore";

export function ShareMapButton({ mapId }: { mapId: string }) {
  const [open, setOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;

    void getPublicMapShare(mapId)
      .then((share) => {
        if (!active) return;
        setIsPublic(share.isPublic);
        setSlug(share.publicSlug);
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, [mapId]);

  const publicUrl = slug
    ? `${window.location.origin}/?public=${slug}`
    : "";

  async function makePublic() {
    setLoading(true);
    setMessage("");

    try {
      const share = await enablePublicMap(mapId);
      setIsPublic(true);
      setSlug(share.publicSlug);
      setMessage("Mapa publicado com sucesso.");
    } catch {
      setMessage("Não foi possível publicar o mapa.");
    } finally {
      setLoading(false);
    }
  }

  async function copyLink() {
    if (!publicUrl) return;

    try {
      await navigator.clipboard.writeText(publicUrl);
      setMessage("Link copiado ✓");
    } catch {
      setMessage("Não foi possível copiar o link.");
    }
  }

  async function disablePublic() {
    setLoading(true);
    setMessage("");

    try {
      await disablePublicMap(mapId);
      setIsPublic(false);
      setMessage("O acesso público foi desativado.");
    } catch {
      setMessage("Não foi possível desativar o link.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 40,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        style={{
          border: "1px solid #E3D4C1",
          background: "#FCFAF6",
          color: "#0B2F63",
          borderRadius: 10,
          padding: "9px 14px",
          cursor: "pointer",
          fontWeight: 700,
          boxShadow: "0 6px 20px rgba(20,36,58,0.10)",
        }}
      >
        🔗 Compartilhar
      </button>

      {open ? (
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 0,
            width: 330,
            maxWidth: "calc(100vw - 32px)",
            padding: 18,
            borderRadius: 14,
            border: "1px solid #E3D4C1",
            background: "#FCFAF6",
            boxShadow: "0 18px 50px rgba(20,36,58,0.16)",
            color: "#14243A",
          }}
        >
          <strong style={{ fontSize: 16 }}>Compartilhar mapa</strong>

          <p
            style={{
              fontSize: 13,
              lineHeight: 1.5,
              color: "#676159",
            }}
          >
            {isPublic
              ? "Qualquer pessoa com este link poderá visualizar este mapa."
              : "Este mapa está privado. Somente você pode acessá-lo."}
          </p>

          {isPublic ? (
            <>
              <input
                value={publicUrl}
                readOnly
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: 10,
                  borderRadius: 8,
                  border: "1px solid #E3D4C1",
                  marginBottom: 10,
                }}
              />

              <button
                type="button"
                onClick={() => void copyLink()}
                style={{
                  width: "100%",
                  padding: 10,
                  border: 0,
                  borderRadius: 8,
                  background: "#0B2F63",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Copiar link público
              </button>

              <button
                type="button"
                disabled={loading}
                onClick={() => void disablePublic()}
                style={{
                  width: "100%",
                  padding: 9,
                  borderRadius: 8,
                  border: "1px solid #E3D4C1",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Desativar link público
              </button>
            </>
          ) : (
            <button
              type="button"
              disabled={loading}
              onClick={() => void makePublic()}
              style={{
                width: "100%",
                padding: 10,
                border: 0,
                borderRadius: 8,
                background: "#0B2F63",
                color: "white",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              {loading ? "Publicando..." : "Tornar público"}
            </button>
          )}

          {message ? (
            <p
              style={{
                fontSize: 12,
                marginBottom: 0,
                color: "#49566A",
              }}
            >
              {message}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

import type { CSSProperties } from "react";

// Identidade visual MindMap Studio inspirada na marca Priscila Botelho.
// Azul-marinho = cor principal de interface.
// Dourado = destaque premium.
// Creme = superfícies claras.

export const ACCENT = "#0B2F63";
export const ACCENT_HOVER = "#08254E";

export const GOLD = "#C49338";
export const CREAM = "#F8F1E7";

/** Build the `--st-*` custom properties for the .start root from the resolved app appearance. */
export function startThemeVars(dark: boolean): CSSProperties {
  const page = dark ? "#111B2B" : "#F8F1E7";
  const card = dark ? "#182538" : "#FFFCF7";
  const ink = dark ? "#F4EEE6" : "#14243A";

  return {
    "--st-page": page,
    "--st-card": card,

    "--st-sidebar": dark
      ? "#0B1728"
      : "#F3E9DC",

    "--st-border": dark
      ? "rgba(196,147,56,0.22)"
      : "#E3D4C1",

    "--st-divider": dark
      ? "rgba(255,255,255,0.07)"
      : "#EDE2D4",

    "--st-ink": ink,

    "--st-ink2": dark
      ? "#C9C2B8"
      : "#49566A",

    "--st-muted": dark
      ? "#999EAA"
      : "#756F67",

    "--st-faint": dark
      ? "#737987"
      : "#AAA195",

    "--st-accent": ACCENT,
    "--st-accent-hover": ACCENT_HOVER,

    "--st-accent-tint": dark
      ? "rgba(11,47,99,0.38)"
      : "rgba(11,47,99,0.10)",

    "--st-accent-ring":
      "rgba(11,47,99,0.28)",

    "--st-gold": GOLD,

    "--st-gold-tint": dark
      ? "rgba(196,147,56,0.18)"
      : "rgba(196,147,56,0.12)",

    "--st-shadow": dark
      ? "0 8px 28px rgba(0,0,0,0.36)"
      : "0 8px 28px rgba(55,38,18,0.09)",
  } as CSSProperties;
}

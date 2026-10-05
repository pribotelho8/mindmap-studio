// The example map INDEX — id and display name only, and nothing else.
//
// This module is imported by the eager toolbar, so anything it references ships on first load. It
// deliberately does NOT hold the builders: the array used to carry `build:` function references,
// which pulled every example body into the entry chunk (measured 6.7 kB gz). The bodies, the one-line
// descriptions and `buildExample` all live in `./exampleBuilders`, which loads on demand.
//
// Keep it that way: importing exampleBuilders from here, or from any eager module, silently undoes it.
// `test/bundle-locality` in test/i18n.test.ts is not what guards this — scripts/size-budget.mjs is.

export interface MapExample {
  id: string;
  name: string;
}

// Order roughly: work, then strategy/learning, then personal, then meta.
export const examples: MapExample[] = [
  { id: "launch", name: "Plano de lançamento de produto" },
  { id: "meeting", name: "Notas de reunião (preenchidas)" },
  { id: "decision", name: "Registro de decisão" },
  { id: "okrs", name: "OKRs trimestrais" },
  { id: "retro", name: "Retrospectiva da equipe" },
  { id: "swot", name: "SWOT (exemplo preenchido)" },
  { id: "flowchart", name: "Fluxograma (formas e fluxo)" },
  { id: "concept", name: "Mapa conceitual (ideias conectadas)" },
  { id: "whiteboard", name: "Quadro livre" },
  { id: "onion", name: "Diagrama de cebola (camadas)" },
  { id: "funnel", name: "Diagrama de funil (etapas)" },
  { id: "venn", name: "Diagrama de Venn (3 círculos)" },
  { id: "runbook", name: "Plano de resposta a incidentes" },
  { id: "gtd", name: "Planejamento natural GTD" },
  { id: "gtd-areas", name: "GTD — Áreas de foco" },
  { id: "outline", name: "Estrutura de palestra / conteúdo" },
  { id: "pkm", name: "Mapa de conhecimento pessoal" },
  { id: "study", name: "Mapa de estudo / revisão" },
  { id: "trip", name: "Plano de viagem (com imagem)" },
  { id: "atlas", name: "Atlas de mapas conectados" },
];

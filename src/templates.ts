import type { MapNode, MindMapDoc } from "./model/types";

// Starter maps for the "New" menu (MindManager's template gallery, lite).
export interface MapTemplate {
  id: string;
  name: string;
  build: () => MindMapDoc;
}

const leaf = (id: string, topic: string): MapNode => ({ id, topic, children: [] });

function doc(title: string, children: MapNode[]): MindMapDoc {
  return {
    schemaVersion: 1,
    id: crypto.randomUUID(),
    title,
    root: { id: "root", topic: title, children },
    meta: { source: "new" },
  };
}

export const templates: MapTemplate[] = [
  { id: "blank", name: "Em branco", build: () => doc("Mapa sem título", []) },
  {
    id: "brainstorm",
    name: "Brainstorming",
    build: () =>
      doc("Nova ideia", [
        leaf("who", "Quem"),
        leaf("what", "O quê"),
        leaf("why", "Por quê"),
        leaf("how", "Como"),
        leaf("when", "Quando"),
        leaf("where", "Onde"),
      ]),
  },
  {
    id: "swot",
    name: "SWOT",
    build: () =>
      doc("SWOT", [
        leaf("s", "Forças"),
        leaf("w", "Fraquezas"),
        leaf("o", "Oportunidades"),
        leaf("t", "Ameaças"),
      ]),
  },
  {
    id: "project",
    name: "Plano de projeto",
    build: () =>
      doc("Projeto", [
        leaf("g", "Objetivos"),
        leaf("sc", "Escopo"),
        leaf("ms", "Marcos"),
        leaf("rk", "Riscos"),
        leaf("tm", "Equipe"),
      ]),
  },
  {
    id: "five-whys",
    name: "5 Porquês (causa raiz)",
    build: () =>
      doc("5 Porquês", [
        {
          id: "problem",
          topic: "Definição do problema",
          children: [
            {
              id: "w1",
              topic: "Por quê? (1)",
              children: [
                {
                  id: "w2",
                  topic: "Por quê? (2)",
                  children: [
                    {
                      id: "w3",
                      topic: "Por quê? (3)",
                      children: [
                        {
                          id: "w4",
                          topic: "Por quê? (4)",
                          children: [leaf("w5", "Por quê? (5) → causa raiz")],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]),
  },
  {
    id: "decision",
    name: "Decisão (prós e contras)",
    build: () =>
      doc("Decisão", [
        leaf("context", "Contexto"),
        leaf("options", "Opções"),
        leaf("pros", "Prós"),
        leaf("cons", "Contras"),
        leaf("criteria", "Critérios"),
        leaf("choice", "Decision"),
      ]),
  },
  {
    id: "retrospective",
    name: "Retrospectiva",
    build: () =>
      doc("Retrospectiva", [
        leaf("start", "Começar"),
        leaf("stop", "Parar"),
        leaf("continue", "Continuar"),
        leaf("actions", "Itens de ação"),
      ]),
  },
  {
    id: "meeting",
    name: "Notas de reunião",
    build: () =>
      doc("Reunião", [
        leaf("agenda", "Pauta"),
        leaf("attendees", "Participantes"),
        leaf("decisions", "Decisões"),
        leaf("actions", "Itens de ação"),
        leaf("notes", "Notas"),
      ]),
  },
  {
    id: "pre-mortem",
    name: "Pré-mortem",
    build: () =>
      doc("Pre-mortem", [
        leaf("goal", "O objetivo"),
        leaf("failed", "Imagine que deu errado"),
        leaf("why", "Por que deu errado"),
        leaf("signs", "Sinais de alerta"),
        leaf("prevent", "Ações preventivas"),
      ]),
  },
  {
    id: "pestle",
    name: "PESTLE",
    build: () =>
      doc("Análise PESTLE", [
        leaf("political", "Político"),
        leaf("economic", "Econômico"),
        leaf("social", "Social"),
        leaf("technological", "Tecnológico"),
        leaf("legal", "Legal"),
        leaf("environmental", "Ambiental"),
      ]),
  },
  {
    id: "fishbone",
    name: "Espinha de peixe (causa e efeito)",
    // The spine is the effect; the branches are the classic 6M cause categories. Switch to the
    // Fishbone layout (Layout menu) to draw it as the herringbone diagram.
    build: () =>
      doc("Efeito / problema", [
        leaf("people", "Pessoas"),
        leaf("process", "Processo"),
        leaf("equipment", "Equipamentos"),
        leaf("materials", "Materiais"),
        leaf("environment", "Ambiente"),
        leaf("management", "Gestão"),
      ]),
  },
  {
    id: "okrs",
    name: "OKRs",
    build: () =>
      doc("Objetivo", [
        leaf("kr1", "Resultado-chave 1"),
        leaf("kr2", "Resultado-chave 2"),
        leaf("kr3", "Resultado-chave 3"),
        leaf("initiatives", "Iniciativas"),
      ]),
  },
  {
    id: "essay",
    name: "Estrutura de texto",
    build: () =>
      doc("Texto", [
        leaf("thesis", "Tese"),
        leaf("intro", "Introdução"),
        leaf("p1", "Ponto 1"),
        leaf("p2", "Ponto 2"),
        leaf("p3", "Ponto 3"),
        leaf("counter", "Contraponto"),
        leaf("conclusion", "Conclusão"),
      ]),
  },
  {
    id: "presentation",
    name: "Estrutura de apresentação",
    build: () =>
      doc("Apresentação", [
        leaf("hook", "Gancho"),
        leaf("message", "Mensagem principal"),
        leaf("pt1", "Ponto 1"),
        leaf("pt2", "Ponto 2"),
        leaf("pt3", "Ponto 3"),
        leaf("cta", "Chamada para ação"),
      ]),
  },
  {
    id: "lean-canvas",
    name: "Lean Canvas",
    build: () =>
      doc("Lean Canvas", [
        leaf("problem", "Problema"),
        leaf("solution", "Solução"),
        leaf("uvp", "Proposta única de valor"),
        leaf("customers", "Segmentos de clientes"),
        leaf("channels", "Canais"),
        leaf("revenue", "Fontes de receita"),
        leaf("costs", "Estrutura de custos"),
        leaf("metrics", "Métricas-chave"),
        leaf("advantage", "Vantagem difícil de copiar"),
      ]),
  },
  {
    id: "persona",
    name: "Persona",
    build: () =>
      doc("Persona", [
        leaf("goals", "Objetivos"),
        leaf("pains", "Dores"),
        leaf("behaviours", "Comportamentos"),
        leaf("context", "Contexto"),
        leaf("quote", "Citação"),
      ]),
  },
];

/** One-line use-case shown on the Start-screen template cards (keyed by template id). */
export const TEMPLATE_DESCRIPTIONS: Record<string, string> = {
  brainstorm: "Explore uma ideia por todos os ângulos: quem, o quê, por quê, como, quando e onde.",
  swot: "Analise forças, fraquezas, oportunidades e ameaças.",
  project: "Estruture um projeto com objetivos, escopo, marcos, riscos e equipe.",
  "five-whys": "Investigue um problema até chegar à causa raiz com os 5 Porquês.",
  decision: "Compare opções, prós, contras e critérios para tomar uma decisão.",
  retrospective: "Reflita sobre o que começar, parar e continuar fazendo.",
  meeting: "Organize pauta, decisões, participantes e itens de ação em um só lugar.",
  "pre-mortem": "Imagine que o projeto deu errado e antecipe como evitar esse cenário.",
  pestle: "Analise o ambiente externo nos fatores político, econômico, social, tecnológico, legal e ambiental.",
  fishbone: "Investigue as causas de um problema usando a estrutura de espinha de peixe.",
  okrs: "Defina um objetivo acompanhado de resultados-chave mensuráveis.",
  essay: "Estruture um texto da tese até a conclusão.",
  presentation: "Estruture uma apresentação do gancho até a chamada para ação.",
  "lean-canvas": "Estruture um modelo de negócio completo em uma única página.",
  persona: "Organize objetivos, dores, comportamentos e contexto de uma persona.",
};

export function buildTemplate(id: string): MindMapDoc {
  return (templates.find((t) => t.id === id) ?? templates[0]).build();
}

/** A template's top branches as a graftable subtree — for "Insert ▸ Template" (insert the structure
 *  under the selected topic). Fresh ids are assigned by addSubtree when grafted; the root is dropped. */
export function templateSubtree(id: string): MapNode[] {
  return buildTemplate(id).root.children;
}

/** Templates worth inserting as a structure (everything except the empty "Blank"). */
export const insertableTemplates: MapTemplate[] = templates.filter((t) => t.id !== "blank");

import { type Catalogue, registerMessages } from "../i18n/registry";

export const PRESENT_PT_BR = {
  "present.presenterViewP": "Modo do apresentador (P)",
  "present.elapsedNamed": "Tempo decorrido: {time}",
  "present.blackScreenHint": "Tela preta — clique ou pressione qualquer tecla para continuar",
  "present.whiteScreenHint": "Tela branca — clique ou pressione qualquer tecla para continuar",
  "present.presenterView": "Modo do apresentador",
  "present.decreaseBudget": "Diminuir tempo previsto",
  "present.increaseBudget": "Aumentar tempo previsto",
  "present.elapsedTimeSetABudget":
    "Tempo decorrido. Defina uma duração no modo do apresentador para acompanhar o ritmo.",
  "present.resetTimer": "Reiniciar cronômetro",
  "present.togglePresenterViewP": "Alternar modo do apresentador (P)",
  "present.pauseTimer": "Pausar cronômetro",
  "present.resumeTimer": "Continuar cronômetro",
  "present.noNotesForThisSlide": "Não há notas para este slide.",
  "present.homeSpacePBW": "← → · Home · Espaço · P · B/W · Esc",
  "present.speakerNotes": "Notas do apresentador",
  "present.nextUp": "Próximo",
  "present.endOfMap": "Fim do mapa",
  "present.timer": "Cronômetro",
  "present.budget": "Tempo previsto",
} satisfies Catalogue;

registerMessages("pt-BR", PRESENT_PT_BR);

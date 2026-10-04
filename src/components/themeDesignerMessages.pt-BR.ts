import { type Catalogue, registerMessages } from "../i18n/registry";

export const THEME_PT_BR = {
  "theme.themeDesigner": "Designer de temas",
  "theme.themeName": "Nome do tema",
  "theme.nodeFillColour": "Cor de preenchimento do tópico",
  "theme.themeFont": "Fonte do tema",
  "theme.themeBranchWeight": "Espessura dos ramos",
  "theme.themePreview": "Pré-visualização do tema",
  "theme.myTheme": "Meu tema",
  "theme.branch": "Ramo",
  "theme.yourThemes": "Seus temas",
  "theme.name": "Nome",
  "theme.palette": "Paleta",
  "theme.nodeFill": "Preenchimento do tópico",
  "theme.saveTheme": "Salvar tema",
  "theme.downloadJson": "Baixar .json",
  "theme.importJson": "Importar .json",
  "theme.branchColourN": "Cor do ramo {n}",
} satisfies Catalogue;

registerMessages("pt-BR", THEME_PT_BR);

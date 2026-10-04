import { type Catalogue, registerMessages } from "../i18n/registry";

export const IO_PT_BR = {
  "io.warn.fromMarkdown":
    "Importado do Markdown — estilo visual e layout não fazem parte desse formato.",
  "io.warn.fromMermaid":
    "Importado do Mermaid — apenas a estrutura do diagrama é convertida.",
  "io.warn.fromOpml":
    "Importado do OPML — por ser um formato de tópicos, estilos, marcadores e imagens não são incluídos.",
  "io.warn.fromFreemind":
    "Importado do FreeMind/Freeplane — alguns estilos e ícones podem não ser reproduzidos exatamente.",
  "io.warn.fromXmind":
    "Importado do XMind — estilos, relações e alguns marcadores podem não ser totalmente preservados.",
  "io.warn.fromSimpleMind":
    "Importado do SimpleMind — estilos e alguns elementos podem não ser totalmente preservados.",
  "io.warn.fromWord":
    "Importado do Word — títulos e listas viram tópicos; a formatação do documento não é preservada.",
  "io.warn.fromExcel":
    "Importado do Excel — linhas viram tópicos; a formatação das células não é preservada.",
  "io.warn.fromIthoughts":
    "Importado do iThoughts — estilos e alguns elementos podem não ser totalmente preservados.",
  "io.warn.fromMindmeister":
    "Importado do MindMeister — estilos e alguns elementos podem não ser totalmente preservados.",
  "io.warn.fromMindmup":
    "Importado do MindMup — estilos e alguns elementos podem não ser totalmente preservados.",
  "io.warn.fromTextBundle":
    "Importado do TextBundle — é um esboço em Markdown; o estilo visual não faz parte do formato.",

  "io.err.notFreeMind":
    "O arquivo não é um .mm válido do FreeMind/Freeplane",
  "io.err.notOpml":
    "O arquivo não é um OPML válido",
  "io.err.notZip":
    "Arquivo {ext} inválido ou não foi possível descompactá-lo",
  "io.err.noTextBundle":
    "Não foi encontrado text.md no TextBundle (.textpack)",

  "io.err.docxNoDocument":
    "Não foi encontrado word/document.xml no arquivo .docx",
  "io.err.docxNoParagraphs":
    "Nenhum parágrafo foi encontrado no arquivo .docx",

  "io.err.xlsxNoRows":
    "Nenhuma linha foi encontrada no arquivo .xlsx",
  "io.err.xlsxNoSheet":
    "Não foi encontrado xl/worksheets/sheet1.xml no arquivo .xlsx",

  "io.err.xmindNoRootElement":
    "XMind content.xml: elemento raiz <xmap-content> não encontrado",
  "io.err.xmindNoSheet":
    "XMind content.xml: nenhuma <sheet> encontrada",
  "io.err.xmindSheetNoTopic":
    "XMind content.xml: a planilha não possui um <topic> raiz",
  "io.err.xmindNoRootTopic":
    "O arquivo XMind não possui tópico raiz",
  "io.err.xmindUnsupported":
    "Arquivo .xmind não compatível: content.json ou content.xml não encontrados",

  "io.err.itmzNoMapdata":
    "Arquivo .itmz inválido: mapdata.xml não encontrado",
  "io.err.itmzNoTopicsElement":
    "Arquivo .itmz inválido: mapdata.xml não contém o elemento <topics>",
  "io.err.itmzNoTopics":
    "Arquivo .itmz inválido: nenhum tópico encontrado",

  "io.err.mindNoMapJson":
    "Arquivo .mind inválido: map.json não encontrado",
  "io.err.mindBadJson":
    "Arquivo .mind inválido: map.json não contém JSON válido",
  "io.err.mindNoRoot":
    "Arquivo .mind inválido: nenhum tópico raiz encontrado em map.json",

  "io.err.mupBadJson":
    "Arquivo .mup inválido: JSON inválido",
  "io.err.mupMissingFields":
    "Arquivo .mup inválido: campos title, ideas e formatVersion ausentes",

  "io.err.smmxNoTopics":
    "O arquivo SimpleMind não possui tópicos",

  "io.err.mmapNoDocument":
    "Arquivo MindManager .mmap inválido: Document.xml não encontrado. Entradas do arquivo: {entries}",
  "io.err.mmapNoMapRoot":
    "Arquivo .mmap inesperado: elemento raiz <Map> não encontrado em Document.xml.",
  "io.err.mmapNoRootTopic":
    "Arquivo .mmap inesperado: tópico raiz <Topic> não encontrado em <Map>/<OneTopic>.",

  "io.warn.mmapImageSkipped":
    "Uma imagem incorporada foi ignorada por formato não compatível ou dados ausentes.",
  "io.warn.mmapFloatingTopics": {
    one: "{n} tópico flutuante foi importado e colocado em um ramo separado chamado “Tópicos flutuantes”.",
    other: "{n} tópicos flutuantes foram importados e colocados em um ramo separado chamado “Tópicos flutuantes”.",
  },

  "io.title.importedOutline":
    "Esboço importado",
  "io.title.importedSimpleMind":
    "Mapa do SimpleMind importado",

  "io.html.toggleChildren":
    "Expandir ou recolher subtópicos",
  "io.html.modeToggleTitle":
    "Alternar entre mapa visual e estrutura em texto",
  "io.html.outlineView":
    "Visualização em estrutura",
  "io.html.filterTopics":
    "Filtrar tópicos",
  "io.html.filterTopicsPlaceholder":
    "Filtrar tópicos…",
  "io.html.expandAll":
    "Expandir tudo",
  "io.html.collapseAll":
    "Recolher tudo",
  "io.html.resetView":
    "Redefinir visualização",
  "io.html.resetPanZoom":
    "Redefinir posição e zoom",

  "io.html.footerWithVisual":
    "Mapa interativo — mapa visual + estrutura recolhível · use o filtro para pesquisar · Ctrl/⌘ + rolagem para zoom · arraste para mover · funciona offline",
  "io.html.footerOutlineOnly":
    "Mapa interativo — estrutura recolhível · use o filtro para pesquisar · Ctrl/⌘ + rolagem para zoom · arraste para mover · funciona offline",

  "io.deck.slides":
    "Slides",
  "io.deck.toggleNotes":
    "Mostrar ou ocultar notas do apresentador (N)",
} satisfies Catalogue;

registerMessages("pt-BR", IO_PT_BR);

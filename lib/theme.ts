/**
 * SINTÉTICA 2025 - Design System Theme v4.0
 *
 * ROUNDTABLE EDITION: Jobs-Lozano-DaVinci
 *
 * Mudanças principais:
 * - Condensação de 26 → 17 seções
 * - Proporção fractal: 1-3-3-3-3-3-1
 * - Novo tipo de breather: "question"
 * - Estrutura otimizada para scroll depth
 */

// =============================================================================
// TEMPERATURE SYSTEM
// =============================================================================

export type ThemeTemperature = 'cold' | 'cool' | 'neutral' | 'warm' | 'hot';

export interface ThemeConfig {
  bg: string;
  bgAlt: string;
  accent: string;
  accentMuted: string;
  border: string;
  mood: string;
}

export const temperatures: Record<ThemeTemperature, ThemeConfig> = {
  cold: {
    bg: 'bg-[#030810]',
    bgAlt: 'bg-[#050b14]',
    accent: 'cyan',
    accentMuted: 'cyan-900',
    border: 'border-cyan-500/20',
    mood: 'Impacto, seriedade, momentos cruciais'
  },
  cool: {
    bg: 'bg-[#050b14]',
    bgAlt: 'bg-[#0a1525]',
    accent: 'blue',
    accentMuted: 'blue-900',
    border: 'border-blue-500/20',
    mood: 'Informativo, contexto, estabelecimento'
  },
  neutral: {
    bg: 'bg-[#0f172a]',
    bgAlt: 'bg-[#1e293b]',
    accent: 'slate',
    accentMuted: 'slate-800',
    border: 'border-slate-500/20',
    mood: 'Denso, técnico, dados'
  },
  warm: {
    bg: 'bg-[#1a1a2e]',
    bgAlt: 'bg-[#252540]',
    accent: 'purple',
    accentMuted: 'purple-900',
    border: 'border-purple-500/20',
    mood: 'Histórias, casos, humanização'
  },
  hot: {
    bg: 'bg-[#1a0a0a]',
    bgAlt: 'bg-[#2a1515]',
    accent: 'orange',
    accentMuted: 'orange-900',
    border: 'border-orange-500/20',
    mood: 'Urgência, tensão, alerta'
  }
};

// =============================================================================
// ACT DEFINITIONS
// =============================================================================

export interface Section {
  id: string;
  component: string;
  title: string;
  emoji?: string; // Para o mapa anatômico
}

export interface ActDefinition {
  id: string;
  number: number;
  name: string;
  subtitle: string;
  theme: ThemeTemperature;
  sections: Section[];
  breatherAfter?: BreatherConfig;
}

export interface BreatherConfig {
  type: 'quote' | 'stat' | 'visual' | 'silence' | 'manifesto' | 'question';
  content?: string;
  author?: string;
  stat?: string;
  statLabel?: string;
  // Novo para tipo "question"
  question?: string;
  subtext?: string;
}

// =============================================================================
// NARRATIVE STRUCTURE v4 - ROUNDTABLE EDITION
// Condensação: 26 → 17 seções
// Proporção: 1-3-3-3-3-3-1 (simetria fractal)
// =============================================================================

export const acts: ActDefinition[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PRÓLOGO: O CHOQUE (1 seção)
  // Função: ÂNCORA - Estabelece premissa
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'prologue',
    number: 0,
    name: 'Prólogo',
    subtitle: 'O Choque',
    theme: 'cold',
    sections: [
      { id: 'hero', component: 'Hero', title: 'SINTÉTICA 2025', emoji: '⚡' }
    ],
    breatherAfter: {
      type: 'question',
      question: 'O que acontece quando 30 anos de mudança se comprimem em 30 meses?',
      subtext: 'Continue para descobrir.'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ATO I: A FUNDAÇÃO (3 seções)
  // Função: CONTEXTO - Estabelece o cenário
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'act-1',
    number: 1,
    name: 'Ato I',
    subtitle: 'A Fundação',
    theme: 'cool',
    sections: [
      { id: 'compression', component: 'TheCompression', title: 'A Compressão do Tempo', emoji: '⏱️' },
      { id: 'cheatsheet', component: 'Cheatsheet', title: 'Os 5 Pilares', emoji: '🏛️' },
      { id: 'timeline', component: 'Timeline', title: 'Cronologia 2025', emoji: '📅' }
    ],
    breatherAfter: {
      type: 'question',
      question: 'Mas onde toda essa inteligência vai rodar?',
      subtext: 'A resposta exige concreto, urânio e robôs.'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ATO II: A MATERIALIZAÇÃO (3 seções) - CONDENSADO
  // Merge: EvolutionaryScale integrado ao contexto
  // Merge: RoboticsRevolution integrado ao PhysicalLayer
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'act-2',
    number: 2,
    name: 'Ato II',
    subtitle: 'A Materialização',
    theme: 'neutral',
    sections: [
      { id: 'evolution', component: 'EvolutionaryScale', title: 'Escala Evolutiva', emoji: '🧬' },
      { id: 'physical', component: 'PhysicalLayer', title: 'A Camada Física', emoji: '🏭' },
      { id: 'robotics', component: 'RoboticsRevolution', title: 'A Era dos Robôs', emoji: '🤖' }
    ],
    breatherAfter: {
      type: 'stat',
      stat: '30x',
      statLabel: 'Crescimento de demanda energética até 2035. A IA deixou de ser código — agora ela precisa de eletricidade, água e aço.'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ATO III: A TRANSFORMAÇÃO (3 seções) - CONDENSADO
  // Merge: MarketPulse + NewEconomy → "O Novo Mercado" (dentro de NewEconomy)
  // Mantido: ConsumerAI (relevância pessoal)
  // Mantido: MultiAgentOrg (futuro do trabalho)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'act-3',
    number: 3,
    name: 'Ato III',
    subtitle: 'A Transformação',
    theme: 'cool',
    sections: [
      { id: 'consumer', component: 'ConsumerAI', title: 'IA no Dia a Dia', emoji: '📱' },
      { id: 'economy', component: 'NewEconomy', title: 'O Novo Mercado', emoji: '💹' },
      { id: 'agents', component: 'MultiAgentOrg', title: 'Organizações Multi-Agente', emoji: '🏢' }
    ],
    breatherAfter: {
      type: 'question',
      question: 'Tudo isso parece promissor. Mas qual é o custo?',
      subtext: 'Nem tudo que brilha é ouro sintético.'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ATO IV: A TENSÃO (3 seções) - CONDENSADO
  // Merge: TheGap + ContentCrisis → "O Abismo Digital" (dentro de TheGap)
  // Mantido: RealWorldCases (evidência)
  // Mantido: DefenseProtocol (solução)
  // Removido: GlobalRegulation (condensado em DefenseProtocol)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'act-4',
    number: 4,
    name: 'Ato IV',
    subtitle: 'A Tensão',
    theme: 'hot',
    sections: [
      { id: 'gap', component: 'TheGap', title: 'O Abismo Digital', emoji: '⚠️' },
      { id: 'cases', component: 'RealWorldCases', title: 'Casos Reais', emoji: '📰' },
      { id: 'defense', component: 'DefenseProtocol', title: 'Protocolo de Defesa', emoji: '🛡️' }
    ],
    breatherAfter: {
      type: 'manifesto',
      content: 'O risco não é a IA ser muito inteligente. É você não saber distinguir o real do sintético. A curadoria da verdade virou skill de sobrevivência.'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ATO V: O HORIZONTE (3 seções) - CONDENSADO
  // Merge: BrazilFocus + ProfessionsGuide → Mantido separado (relevância BR)
  // Mantido: AntifragileProfessional (framework pessoal - alto valor)
  // Merge: FuturePredictions + SkillsRadar → "Seu Radar" (dentro de SkillsRadar)
  // Removido: ToolsGrid → Modal acessível
  // Removido: ExpertPanel → Integrado ao CallToAdventure
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'act-5',
    number: 5,
    name: 'Ato V',
    subtitle: 'O Horizonte',
    theme: 'cool',
    sections: [
      { id: 'brazil', component: 'BrazilFocus', title: 'Foco Brasil', emoji: '🇧🇷' },
      { id: 'antifragile', component: 'AntifragileProfessional', title: 'Profissional Anti-Frágil', emoji: '💪' },
      { id: 'skills', component: 'SkillsRadar', title: 'Seu Radar 2025', emoji: '📡' }
    ],
    breatherAfter: {
      type: 'question',
      question: 'Você está pronto para o próximo passo?',
      subtext: 'O relatório termina. Sua jornada começa.'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EPÍLOGO: O CONVITE (1 seção)
  // Função: CALL TO ACTION - Fechamento + "One More Thing"
  // Glossary → Modal acessível de qualquer ponto
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'epilogue',
    number: 6,
    name: 'Epílogo',
    subtitle: 'O Convite',
    theme: 'cold',
    sections: [
      { id: 'adventure', component: 'CallToAdventure', title: 'O Convite à Aventura', emoji: '🚀' }
    ]
  }
];

// =============================================================================
// ANATOMICAL MAP DATA
// Para o novo componente de navegação visual (Da Vinci inspired)
// =============================================================================

export interface AnatomicalNode {
  id: string;
  title: string;
  emoji: string;
  actNumber: number;
  actName: string;
  connections: string[]; // IDs das seções conectadas
  x: number; // Posição relativa (0-100)
  y: number; // Posição relativa (0-100)
}

export function generateAnatomicalMap(): AnatomicalNode[] {
  const nodes: AnatomicalNode[] = [];

  acts.forEach((act, actIndex) => {
    act.sections.forEach((section, sectionIndex) => {
      // Calcula posição em grid orgânico
      const totalSections = act.sections.length;
      const y = 10 + (actIndex * 14); // Distribui verticalmente
      const xSpread = 70 / Math.max(totalSections, 1);
      const x = 15 + (sectionIndex * xSpread) + (actIndex % 2 === 0 ? 0 : 5);

      // Conexões: seção anterior e próxima
      const allSectionIds = getAllSectionIds();
      const currentIndex = allSectionIds.indexOf(section.id);
      const connections: string[] = [];

      if (currentIndex > 0) connections.push(allSectionIds[currentIndex - 1]);
      if (currentIndex < allSectionIds.length - 1) connections.push(allSectionIds[currentIndex + 1]);

      nodes.push({
        id: section.id,
        title: section.title,
        emoji: section.emoji || '📄',
        actNumber: act.number,
        actName: act.name,
        connections,
        x,
        y
      });
    });
  });

  return nodes;
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export function getActBySection(sectionId: string): ActDefinition | undefined {
  return acts.find(act =>
    act.sections.some(section => section.id === sectionId)
  );
}

export function getAllSectionIds(): string[] {
  return acts.flatMap(act => act.sections.map(s => s.id));
}

export function getSectionIndex(sectionId: string): number {
  const allSections = getAllSectionIds();
  return allSections.indexOf(sectionId);
}

export function getTotalSections(): number {
  return getAllSectionIds().length;
}

export function getProgressPercentage(sectionId: string): number {
  const index = getSectionIndex(sectionId);
  const total = getTotalSections();
  if (index === -1) return 0;
  return Math.round((index / (total - 1)) * 100);
}

// =============================================================================
// ACCENT COLOR UTILITIES
// =============================================================================

export function getAccentClasses(temperature: ThemeTemperature) {
  const theme = temperatures[temperature];

  return {
    text: `text-${theme.accent}-400`,
    textMuted: `text-${theme.accent}-600`,
    bg: `bg-${theme.accent}-950/30`,
    bgSolid: `bg-${theme.accent}-500`,
    border: `border-${theme.accent}-500/20`,
    borderHover: `hover:border-${theme.accent}-500/50`,
    glow: `shadow-[0_0_30px_rgba(var(--${theme.accent}-rgb),0.2)]`,
    gradient: `from-${theme.accent}-500 to-${theme.accent}-700`
  };
}

// =============================================================================
// READING MODES (Da Vinci - leitura em camadas)
// =============================================================================

export type ReadingMode = 'surface' | 'depth' | 'immersion';

export const readingModes: Record<ReadingMode, {
  name: string;
  duration: string;
  description: string;
  includedSections: string[];
}> = {
  surface: {
    name: 'Superfície',
    duration: '5 min',
    description: 'Visão geral com os principais insights',
    includedSections: ['hero', 'compression', 'gap', 'antifragile', 'adventure']
  },
  depth: {
    name: 'Profundidade',
    duration: '20 min',
    description: 'Jornada completa pelos 5 atos',
    includedSections: getAllSectionIds()
  },
  immersion: {
    name: 'Imersão',
    duration: '60+ min',
    description: 'Experiência completa com todos os recursos',
    includedSections: getAllSectionIds() // + modals + extras
  }
};

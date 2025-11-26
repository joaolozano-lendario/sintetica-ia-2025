/**
 * SINTÉTICA 2025 - Design System Theme
 *
 * Sistema de temperatura visual para criar ritmo narrativo.
 * Baseado nas recomendações do Conselho Jobs-Nicolas-Frost.
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
  type: 'quote' | 'stat' | 'visual' | 'silence';
  content?: string;
  author?: string;
  stat?: string;
  statLabel?: string;
}

// =============================================================================
// NARRATIVE STRUCTURE
// =============================================================================

export const acts: ActDefinition[] = [
  {
    id: 'prologue',
    number: 0,
    name: 'Prólogo',
    subtitle: 'O Choque',
    theme: 'cold',
    sections: [
      { id: 'hero', component: 'Hero', title: 'SINTÉTICA 2025' }
    ]
  },
  {
    id: 'act-1',
    number: 1,
    name: 'Ato I',
    subtitle: 'A Fundação',
    theme: 'cool',
    sections: [
      { id: 'cheatsheet', component: 'Cheatsheet', title: 'Os 5 Pilares' },
      { id: 'stats', component: 'ImpactStats', title: 'Números Brutos' },
      { id: 'timeline', component: 'Timeline', title: 'Cronologia 2025' }
    ],
    breatherAfter: {
      type: 'quote',
      content: 'O ano em que a humanidade deixou de perguntar "se a IA pode" e começou a perguntar "o que fazemos agora".',
      author: 'Síntese do momento histórico'
    }
  },
  {
    id: 'act-2',
    number: 2,
    name: 'Ato II',
    subtitle: 'A Materialização',
    theme: 'neutral',
    sections: [
      { id: 'evolution', component: 'EvolutionaryScale', title: 'Escala Evolutiva' },
      { id: 'physical', component: 'PhysicalLayer', title: 'Camada Física' },
      { id: 'comparison', component: 'ComparisonChart', title: 'Velocidade de Adoção' },
      { id: 'robotics', component: 'RoboticsRevolution', title: 'Revolução Robótica' }
    ],
    breatherAfter: {
      type: 'stat',
      stat: '30x',
      statLabel: 'Crescimento de demanda energética até 2035. A IA deixou de ser software para virar concreto, urânio e robôs.'
    }
  },
  {
    id: 'act-3',
    number: 3,
    name: 'Ato III',
    subtitle: 'A Transformação',
    theme: 'cool',
    sections: [
      { id: 'science', component: 'DeepScience', title: 'Ciência Profunda' },
      { id: 'consumer', component: 'ConsumerAI', title: 'IA Consumidor' },
      { id: 'market', component: 'MarketPulse', title: 'Pulso do Mercado' },
      { id: 'economy', component: 'NewEconomy', title: 'Nova Economia' },
      { id: 'agents', component: 'MultiAgentOrg', title: 'Organizações Multi-Agente' }
    ],
    breatherAfter: {
      type: 'quote',
      content: 'Não estamos testemunhando uma evolução tecnológica. Estamos vivendo uma revolução cognitiva.',
      author: 'A nova realidade'
    }
  },
  {
    id: 'act-4',
    number: 4,
    name: 'Ato IV',
    subtitle: 'A Tensão',
    theme: 'hot',
    sections: [
      { id: 'gap', component: 'TheGap', title: 'O Abismo' },
      { id: 'content', component: 'ContentCrisis', title: 'Crise de Conteúdo' },
      { id: 'cases', component: 'RealWorldCases', title: 'Casos Reais' },
      { id: 'defense', component: 'DefenseProtocol', title: 'Protocolo de Defesa' },
      { id: 'regulation', component: 'GlobalRegulation', title: 'Regulação Global' }
    ],
    breatherAfter: {
      type: 'silence'
    }
  },
  {
    id: 'act-5',
    number: 5,
    name: 'Ato V',
    subtitle: 'O Horizonte',
    theme: 'cool',
    sections: [
      { id: 'brazil', component: 'BrazilFocus', title: 'Foco Brasil' },
      { id: 'professions', component: 'ProfessionsGuide', title: 'Guia de Profissões' },
      { id: 'future', component: 'FuturePredictions', title: 'Previsões' },
      { id: 'skills', component: 'SkillsRadar', title: 'Radar de Habilidades' },
      { id: 'tools', component: 'ToolsGrid', title: 'Ferramentas' },
      { id: 'experts', component: 'ExpertPanel', title: 'Painel de Especialistas' }
    ],
    breatherAfter: {
      type: 'visual'
    }
  },
  {
    id: 'epilogue',
    number: 6,
    name: 'Epílogo',
    subtitle: 'O Convite',
    theme: 'cold',
    sections: [
      { id: 'adventure', component: 'CallToAdventure', title: 'O Convite à Aventura' },
      { id: 'glossary', component: 'Glossary', title: 'Glossário' }
    ]
  }
];

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

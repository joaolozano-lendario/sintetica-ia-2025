# PRD: SINTÉTICA 2025 v2.0 - Transformação de Experiência

## Metadata
- **Versão:** 2.0
- **Data:** 2025-11-26
- **Baseline Commit:** `88c327e` (restauração segura)
- **Autor:** Conselho Jobs-Nicolas-Frost + João
- **Status:** Em Implementação

---

## 1. CONTEXTO E PROBLEMA

### 1.1 O Que Temos
SINTÉTICA 2025 é um dossiê interativo que documenta o momento histórico da IA em 2025. Contém:
- **27 seções** de conteúdo denso e valioso
- **30 componentes React** implementados
- **~200KB** de código fonte (excluindo node_modules)
- Conteúdo jornalístico de alta qualidade

### 1.2 O Problema Identificado
Após análise do "Conselho de Especialistas" (Jobs, Nicolas, Frost):

| Problema | Impacto |
|----------|---------|
| Monotonia visual | Todas as seções parecem iguais |
| Sem respiração | Densidade constante cansa o leitor |
| Navegação inexistente | Usuário não sabe onde está |
| Passividade | Pouca interatividade além da Timeline |
| Ausência de ritmo | Não há arco narrativo |

### 1.3 O Que NÃO Queremos
- ❌ Remover conteúdo
- ❌ Simplificar a ponto de perder profundidade
- ❌ Crashar a aplicação
- ❌ Perder dados ou informações

### 1.4 O Que Queremos
- ✅ Preservar 100% do conteúdo
- ✅ Adicionar ritmo e respiração
- ✅ Criar sensação de jornada/documentário
- ✅ Implementar navegação clara
- ✅ Versionar e comparar

---

## 2. VISÃO DO PRODUTO

### 2.1 Metáfora Central
**"Documentário Interativo"** - não um site, mas uma experiência narrativa.

### 2.2 Princípios de Design

```
JOBS: "Orquestrar, não cortar"
- Cada seção entra no momento certo
- Ritmo de maestro, não de enciclopédia

NICOLAS: "Jornada Transformativa"
- Abertura → Contexto → Desenvolvimento → Tensão → Resolução → Convite
- O tamanho é irrelevante se a jornada é clara

FROST: "Sistema, não Caos"
- Componentes reutilizáveis
- Temperatura visual alternada
- Consistência com variação intencional
```

### 2.3 Estrutura de 5 Atos

```
PRÓLOGO: O CHOQUE
├─ Hero (cold open)
└─ Transição para o primeiro ato

ATO I: A FUNDAÇÃO (O Que Aconteceu)
├─ Cheatsheet (5 pilares)
├─ Timeline (cronologia interativa)
├─ ImpactStats (números brutos)
└─ [BREATHER: Citação de impacto]

ATO II: A MATERIALIZAÇÃO (O Mundo Físico)
├─ PhysicalLayer (energia/hardware)
├─ ComparisonChart (escala temporal)
├─ EvolutionaryScale (contexto histórico)
├─ RoboticsRevolution (robôs)
└─ [BREATHER: Estatística visual]

ATO III: A TRANSFORMAÇÃO (O Mundo Digital)
├─ DeepScience (ciência)
├─ ConsumerAI (consumidor)
├─ MarketPulse (mercado)
├─ NewEconomy (economia)
├─ MultiAgentOrg (organizações)
└─ [BREATHER: Citação provocadora]

ATO IV: A TENSÃO (Os Riscos)
├─ TheGap (o abismo)
├─ ContentCrisis (crise de conteúdo)
├─ RealWorldCases (casos reais)
├─ DefenseProtocol (defesa)
├─ GlobalRegulation (regulação)
└─ [BREATHER: Momento de reflexão]

ATO V: O HORIZONTE (O Futuro)
├─ BrazilFocus (contexto Brasil)
├─ ProfessionsGuide (profissões)
├─ FuturePredictions (previsões)
├─ SkillsRadar (habilidades)
├─ ToolsGrid (ferramentas)
├─ ExpertPanel (vozes de especialistas)
└─ [BREATHER: Silêncio visual]

EPÍLOGO: O CONVITE
├─ CallToAdventure
├─ Glossary (referência)
└─ Footer
```

---

## 3. ESPECIFICAÇÕES TÉCNICAS

### 3.1 Novos Componentes Core

#### 3.1.1 `<Breather>`
Componente de respiração entre atos.

```typescript
interface BreatherProps {
  type: 'quote' | 'stat' | 'visual' | 'silence';
  content?: string;
  author?: string;
  stat?: string;
  statLabel?: string;
}
```

**Variantes:**
- `quote`: Citação full-width com fundo escuro
- `stat`: Número gigante com label
- `visual`: Gradiente animado ou pattern
- `silence`: Espaço vazio intencional

#### 3.1.2 `<ProgressNav>`
Navegação fixa lateral com progresso.

```typescript
interface ProgressNavProps {
  acts: Act[];
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

interface Act {
  id: string;
  name: string;
  sections: Section[];
}
```

**Comportamento:**
- Fixo na lateral direita (desktop)
- Drawer no mobile
- Indica seção atual
- Click navega suavemente

#### 3.1.3 `<Act>`
Wrapper para agrupar seções em atos.

```typescript
interface ActProps {
  id: string;
  name: string;
  number: number;
  theme: 'cold' | 'cool' | 'neutral' | 'warm' | 'hot';
  children: React.ReactNode;
}
```

#### 3.1.4 `<SectionWrapper>`
Wrapper padronizado para seções.

```typescript
interface SectionWrapperProps {
  id: string;
  theme?: 'cold' | 'cool' | 'neutral' | 'warm' | 'hot';
  children: React.ReactNode;
}
```

### 3.2 Sistema de Temperatura Visual

```typescript
const themes = {
  cold: {
    bg: 'bg-[#030810]',
    accent: 'cyan',
    mood: 'sério, impactante'
  },
  cool: {
    bg: 'bg-[#050b14]',
    accent: 'blue',
    mood: 'informativo, calmo'
  },
  neutral: {
    bg: 'bg-[#0f172a]',
    accent: 'slate',
    mood: 'denso, técnico'
  },
  warm: {
    bg: 'bg-[#1a1a2e]',
    accent: 'purple',
    mood: 'histórias, casos'
  },
  hot: {
    bg: 'bg-gradient-to-b from-[#1a0a0a] to-[#0f172a]',
    accent: 'orange',
    mood: 'urgência, tensão'
  }
};
```

### 3.3 Mapeamento de Temperatura por Ato

| Ato | Tema Base | Mood |
|-----|-----------|------|
| Prólogo | cold | Impacto inicial |
| Ato I | cool | Estabelecer contexto |
| Ato II | neutral → warm | Materialização física |
| Ato III | cool → neutral | Transformação digital |
| Ato IV | warm → hot | Tensão e riscos |
| Ato V | cool → neutral | Horizonte/esperança |
| Epílogo | cold | Fechamento dramático |

---

## 4. PLANO DE IMPLEMENTAÇÃO

### 4.1 Fases

```
FASE 0: PREPARAÇÃO (Completo)
├─ [x] Commit baseline (88c327e)
├─ [x] PRD documentado
└─ [ ] Branch de desenvolvimento

FASE 1: FUNDAÇÃO (Sprint 1)
├─ [ ] Criar tipos TypeScript
├─ [ ] Implementar <Breather>
├─ [ ] Implementar <ProgressNav>
├─ [ ] Implementar <Act>
├─ [ ] Implementar <SectionWrapper>
└─ [ ] Criar tokens de tema

FASE 2: ESTRUTURA (Sprint 2)
├─ [ ] Refatorar App.tsx com estrutura de Atos
├─ [ ] Aplicar SectionWrapper em todas as seções
├─ [ ] Inserir Breathers entre atos
├─ [ ] Testar navegação
└─ [ ] Validar que nenhum conteúdo foi perdido

FASE 3: POLISH (Sprint 3)
├─ [ ] Ajustar temperaturas visuais
├─ [ ] Adicionar transições entre seções
├─ [ ] Otimizar mobile
├─ [ ] Testes de performance
└─ [ ] Comparar v1 vs v2

FASE 4: INTERATIVIDADE (Sprint 4 - Opcional)
├─ [ ] Micro-interações por seção
├─ [ ] Modos de leitura (rápida/profunda)
├─ [ ] Exportar insights
└─ [ ] Analytics de engagement
```

### 4.2 Critérios de Aceite por Fase

**Fase 1:**
- Todos os componentes core funcionam isoladamente
- Nenhum erro de TypeScript
- Build passa sem warnings

**Fase 2:**
- Estrutura de atos visível no App
- Navegação funciona
- ZERO perda de conteúdo (diff automático)
- Performance igual ou melhor

**Fase 3:**
- Visual notavelmente diferente
- Sensação de "jornada" ao scrollar
- Mobile funcional
- Feedback positivo em teste interno

---

## 5. RISCOS E MITIGAÇÕES

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Perda de conteúdo | Baixa | Alto | Baseline commit + diff automático |
| Quebra de layout | Média | Médio | Componentes isolados + testes |
| Performance degradada | Média | Médio | Lighthouse antes/depois |
| Escopo creep | Alta | Médio | PRD fixo, fases claras |

---

## 6. MÉTRICAS DE SUCESSO

### 6.1 Objetivas
- **Tempo de permanência:** +30% vs baseline
- **Scroll depth:** +20% (mais pessoas chegam ao fim)
- **Performance:** Lighthouse score >= atual
- **Erros JS:** Zero

### 6.2 Subjetivas
- "Sinto que estou em uma jornada"
- "Sei onde estou no documento"
- "Consigo pausar e retomar"
- "É denso mas não cansativo"

---

## 7. ROLLBACK

Se necessário reverter:

```bash
git checkout 88c327e -- .
# ou
git revert HEAD~N  # onde N = número de commits
```

O commit `88c327e` preserva o estado completo funcional.

---

## 8. REFERÊNCIAS DE DESIGN

### 8.1 Inspirações Visuais
- **NYT Snow Fall:** Longform com imersão
- **The Pudding:** Jornalismo visual
- **Stripe Docs:** Navegação impecável
- **Apple Keynotes:** Ritmo e respiração

### 8.2 Princípios Aplicados
- **Jobs:** "A perfeição é alcançada quando não há mais nada a remover"
- **Nicolas:** "Clareza é uma arma"
- **Frost:** "We're not designing pages, we're designing systems"

---

## CHANGELOG

| Data | Versão | Mudança |
|------|--------|---------|
| 2025-11-26 | 1.0 | PRD inicial criado |

---

*Documento vivo. Atualizar conforme implementação avança.*

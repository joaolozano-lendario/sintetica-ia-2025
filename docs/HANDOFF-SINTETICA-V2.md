# HANDOFF: SINTÉTICA 2025 v2 Transformation

## Status: Em Progresso (Fase 2 Completa)

---

## O QUE É ESTE PROJETO

**SINTÉTICA 2025** é um dossiê/painel interativo que documenta o momento histórico da IA em 2025. É um "documento de consciência" - jornalístico, mas transformativo.

**Objetivo:** Fazer qualquer pessoa leiga entender o impacto da IA no presente e futuro.

**Localização:** `D:\mmos\expansion-packs\sintetica-relatorio-ia-2025\`

---

## COMMITS IMPORTANTES

```
88c327e - BASELINE (ponto de restauração seguro - estado original)
ecc63f5 - Phase 1: Acts, Breathers, ProgressNav
b8de71f - Phase 2: Act Headers visuais, HeroNumbers com animação
```

**Para reverter tudo:** `git checkout 88c327e -- .`

---

## ARQUITETURA ATUAL

### Estrutura Narrativa (5 Atos + Prólogo + Epílogo)

```
PRÓLOGO: O Choque (cold)
├─ Hero

ATO I: A Fundação (cool)
├─ Cheatsheet (5 Pilares)
├─ HeroNumbersGrid (5 Números Âncora) ← NOVO
├─ ImpactStats
├─ Timeline
└─ [BREATHER: Quote]

ATO II: A Materialização (neutral)
├─ EvolutionaryScale
├─ PhysicalLayer
├─ ComparisonChart
├─ RoboticsRevolution
└─ [BREATHER: Stat "30x"]

ATO III: A Transformação (cool)
├─ DeepScience
├─ ConsumerAI
├─ MarketPulse
├─ NewEconomy
├─ MultiAgentOrg
└─ [BREATHER: Quote]

ATO IV: A Tensão (hot)
├─ TheGap
├─ ContentCrisis
├─ RealWorldCases
├─ DefenseProtocol
├─ GlobalRegulation
└─ [BREATHER: Silence]

ATO V: O Horizonte (cool)
├─ BrazilFocus
├─ ProfessionsGuide
├─ FuturePredictions
├─ SkillsRadar
├─ ToolsGrid
├─ ExpertPanel
└─ [BREATHER: Visual]

EPÍLOGO: O Convite (cold)
├─ CallToAdventure
├─ Glossary
└─ Footer
```

### Novos Componentes Core

| Componente | Arquivo | Função |
|------------|---------|--------|
| `<Act>` | `components/core/Act.tsx` | Wrapper de ato com header visual |
| `<Breather>` | `components/core/Breather.tsx` | Pausa entre atos (quote/stat/visual/silence) |
| `<ProgressNav>` | `components/core/ProgressNav.tsx` | Navegação lateral com progresso |
| `<HeroNumber>` | `components/core/HeroNumber.tsx` | Número âncora com animação |
| `<HeroNumbersGrid>` | `components/core/HeroNumber.tsx` | Grid dos 5 números principais |

### Sistema de Temperatura Visual

```typescript
cold   → #030810 → cyan   → Impacto, momentos cruciais
cool   → #050b14 → blue   → Informativo, contexto
neutral→ #0f172a → slate  → Denso, técnico
warm   → #1a1a2e → purple → Histórias, humanização
hot    → #1a0a0a → orange → Urgência, tensão
```

---

## ARQUIVOS-CHAVE

```
App.tsx                      → Estrutura principal com Acts
lib/theme.ts                 → Definições de atos, temperaturas, navegação
components/core/             → Novos componentes do sistema
docs/PRD-SINTETICA-V2.md     → PRD completo da transformação
docs/HANDOFF-SINTETICA-V2.md → Este arquivo
```

---

## O QUE FALTA (Deep Dive Backlog)

### Alta Prioridade
- [ ] Ajustar ImpactStats para não duplicar dados do HeroNumbers
- [ ] Melhorar transições CSS entre seções
- [ ] Mobile polish do ProgressNav

### Média Prioridade
- [ ] Adicionar "Ironia" section (nota de transparência destacada)
- [ ] Micro-interações em mais seções
- [ ] Modo leitura rápida vs profunda

### Baixa Prioridade
- [ ] Code splitting para performance
- [ ] Export de insights
- [ ] Analytics de engagement

---

## COMANDOS ÚTEIS

```bash
# Dev server
cd "D:/mmos/expansion-packs/sintetica-relatorio-ia-2025"
npm run dev

# Build
npm run build

# Ver estado do git
git log --oneline -10
```

---

## CONTEXTO DO CONSELHO

O projeto segue recomendações de 3 "clones cognitivos":

- **Steve Jobs:** "Orquestrar, não cortar. É um documentário, não uma enciclopédia."
- **Alan Nicolas:** "Clareza é uma arma. Jornada transformativa em 7 atos."
- **Brad Frost:** "Sistema, não caos. Um componente, N instâncias."

---

## SERVIDOR DEV

Rodando em: **http://localhost:3001/**

---

*Última atualização: 2025-11-26*

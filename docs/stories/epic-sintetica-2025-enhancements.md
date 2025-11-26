# Epic: Sintética 2025 - Evolução para Dossiê Definitivo

## Metadata

| Campo | Valor |
|-------|-------|
| **Epic ID** | SINT-EPIC-001 |
| **Status** | 🟡 Planning |
| **Prioridade** | Alta |
| **Owner** | João |
| **Data Criação** | 2025-11-26 |
| **Estimativa** | 5 Stories |

---

## Visão

Transformar o Sintética 2025 de um relatório interativo excelente no **Dossiê Definitivo de IA 2025** - o artefato histórico digital mais completo, verificável e acessível sobre a revolução da inteligência artificial.

---

## Contexto

O app atual foi auditado e validado. A base é sólida. Este epic foca exclusivamente em:

- **ADICIONAR** conteúdo faltante da pesquisa
- **ENRIQUECER** seções existentes com dados complementares
- **REFINAR** narrativa e fechamento emocional

> ⚠️ **DIRETRIZ FUNDAMENTAL**: CONSERVAÇÃO TOTAL - nada será removido do app atual.

---

## Objetivos de Negócio

1. **Completude**: 100% dos dados da pesquisa representados no app
2. **Verificabilidade**: Zero informação sem fundamento
3. **Acessibilidade**: Qualquer pessoa entende, mesmo sem background técnico
4. **Impacto**: O leitor sai transformado, não apenas informado

---

## Stories

| ID | Nome | Prioridade | Esforço | Componentes |
|----|------|------------|---------|-------------|
| SINT-001 | Dados de Adoção - O Gráfico de Rosling | 🔴 Alta | M | ImpactStats, EvolutionaryScale |
| SINT-002 | Perfil Profissional 2026 Completo | 🔴 Alta | L | SkillsRadar, ProfessionsGuide |
| SINT-003 | Brasil 2025 Expandido | 🔴 Alta | L | BrazilFocus |
| SINT-004 | Timeline + Previsões Enriquecidas | 🟡 Média | M | Timeline, FuturePredictions, TheGap |
| SINT-005 | Polish & Convite à Aventura | 🟢 Baixa | S | Hero, Glossary, Novo Componente |

---

## Critérios de Aceite do Epic

- [ ] Todos os dados da pesquisa "Resultado 4.md" estão representados
- [ ] App passa em auditoria de verificabilidade (zero claims inventados)
- [ ] Narrativa flui do macro ao micro com fechamento emocional
- [ ] Build passa sem erros (`npm run build`)
- [ ] Review visual em dispositivo móvel e desktop

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Overload de informação | Média | Alto | Manter cards concisos, usar "saiba mais" |
| Quebra de design system | Baixa | Médio | Seguir padrões existentes dos componentes |
| Performance degradada | Baixa | Médio | Lazy loading se necessário |

---

## Definição de Pronto (DoD)

- [ ] Código implementado e funcionando
- [ ] Build passa sem erros
- [ ] Conteúdo revisado (sem typos, dados corretos)
- [ ] Visual consistente com design system existente
- [ ] Testado em mobile e desktop

---

## Sequência Recomendada

```
Story 1 (Dados Adoção)    ──┐
Story 2 (Perfil 2026)     ──┼──> Fundação completa
Story 3 (Brasil)          ──┘
                              │
Story 4 (Timeline/Prev)   ────> Enriquecimento
                              │
Story 5 (Polish)          ────> Fechamento
```

---

*Epic criado por Winston (Architect Agent) - 2025-11-26*

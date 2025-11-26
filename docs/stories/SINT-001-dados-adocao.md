# Story SINT-001: Dados de Adoção - O Gráfico de Rosling

## Metadata

| Campo | Valor |
|-------|-------|
| **Story ID** | SINT-001 |
| **Epic** | SINT-EPIC-001 |
| **Status** | 🔵 Ready |
| **Prioridade** | 🔴 Alta |
| **Esforço** | M (Médio) |
| **Componentes** | ImpactStats.tsx, EvolutionaryScale.tsx |

---

## User Story

**Como** leitor do Dossiê Sintética 2025,
**Quero** ver os dados de adoção de IA comparados historicamente com outras tecnologias,
**Para** entender a magnitude sem precedentes da velocidade de transformação atual.

---

## Contexto da Pesquisa

A pesquisa "Resultado 4.md" traz o dado mais impactante que **não está no app**:

> "A adoção da IA no trabalho nos EUA atingiu **39,4%** em meados de 2025. Para contexto: o Computador Pessoal (PC) levou **três décadas** para chegar nesse nível. Estamos vivendo **30 anos de mudança industrial comprimidos em 36 meses**."

### Tabela Original da Pesquisa

| Tecnologia | Tempo p/ 25% Adoção | Impacto no PIB (Lag) | Onde Estamos? |
|------------|---------------------|----------------------|---------------|
| Eletricidade | 46 Anos | 30+ Anos | Estabilidade |
| Internet | 7 Anos | 15 Anos | Maturidade |
| IA Generativa | **2,5 Anos** | ~3 Anos (Est.) | Início Verticalização |

---

## Tarefas

### Task 1: Adicionar Card "39,4% Adoção" em ImpactStats.tsx

- [ ] Adicionar novo card no grid existente
- [ ] Dados do card:
  - Métrica: `39,4%`
  - Label: `Adoção IA no Trabalho (EUA)`
  - Descrição: `Trabalhadores americanos usando IA diariamente. O PC levou 30 anos para atingir isso.`
  - Ícone sugerido: `Users` ou `TrendingUp`
  - Cor: cyan ou emerald (positivo)
- [ ] Manter consistência visual com cards existentes

### Task 2: Adicionar Frase Impactante em EvolutionaryScale.tsx

- [ ] Adicionar no texto introdutório ou em destaque:
  > "Estamos vivendo **30 anos de mudança industrial comprimidos em 36 meses**."
- [ ] Sugestão de posicionamento: após o parágrafo atual que menciona "apenas **3 anos**"

### Task 3: (Opcional) Criar Tabela Comparativa Visual

- [ ] Considerar adicionar a tabela Eletricidade/Internet/IA como elemento visual
- [ ] Pode ser no ComparisonChart.tsx (já tem comparações) ou em EvolutionaryScale.tsx
- [ ] Formato sugerido: barras horizontais ou cards lado a lado

---

## Critérios de Aceite

- [ ] Card "39,4%" visível em ImpactStats
- [ ] Frase "30 anos em 36 meses" presente no app
- [ ] Dados são verificáveis (fonte: pesquisa auditada)
- [ ] Visual consistente com design system existente
- [ ] Build passa sem erros

---

## Dados Verificados (Fonte: Pesquisa)

```yaml
adocao_ia_trabalho_eua:
  valor: "39,4%"
  periodo: "meados de 2025"
  contexto: "PC levou 30 anos para mesmo nível"

tempo_adocao_25_percent:
  eletricidade: "46 anos"
  internet: "7 anos"
  ia_generativa: "2,5 anos (recorde histórico)"

frase_chave: "30 anos de mudança industrial comprimidos em 36 meses"
```

---

## Arquivos a Modificar

| Arquivo | Ação | Tipo |
|---------|------|------|
| `components/ImpactStats.tsx` | Adicionar 1 card | Adição |
| `components/EvolutionaryScale.tsx` | Adicionar frase | Enriquecimento |
| `components/ComparisonChart.tsx` | (Opcional) Tabela | Adição |

---

## Definition of Done

- [ ] Código implementado
- [ ] Conteúdo verificado contra pesquisa
- [ ] Visual aprovado
- [ ] Build passa
- [ ] Story marcada como completa

---

*Story criada por Winston (Architect Agent) - 2025-11-26*

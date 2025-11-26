# Story SINT-004: Timeline + Previsões Enriquecidas

## Metadata

| Campo | Valor |
|-------|-------|
| **Story ID** | SINT-004 |
| **Epic** | SINT-EPIC-001 |
| **Status** | 🔵 Ready |
| **Prioridade** | 🟡 Média |
| **Esforço** | M (Médio) |
| **Componentes** | Timeline.tsx, FuturePredictions.tsx, TheGap.tsx |

---

## User Story

**Como** leitor querendo entender a cronologia completa de 2025,
**Quero** ver todos os marcos importantes incluindo Q3 (Sora 2/Agentes) e as previsões completas para 2026,
**Para** ter uma visão abrangente do que aconteceu e do que está por vir.

---

## Contexto da Pesquisa

### Gaps na Timeline (Q3)

A pesquisa descreve Q3 (Jul-Set) com eventos que estão **ausentes ou parciais**:

| Evento | Pesquisa | App Atual |
|--------|----------|-----------|
| Sora 2 (vídeo com áudio e física real) | ✅ Detalhado | ❌ Não mencionado |
| Agentforce da Salesforce | ✅ Citado | ⚠️ Agentes mencionados mas sem nome |
| "Economia da Autenticidade" | ✅ Conceito | ❌ Não existe |
| Selo "Feito por Humano" como premium | ✅ Mencionado | ❌ Não existe |

### Gaps nas Previsões 2026

| Previsão | Pesquisa | App Atual |
|----------|----------|-----------|
| Morte do SaaS → Preço por Resultado | ✅ | ✅ Em NewEconomy |
| Internet Fechada (Splinternet) | ✅ | ⚠️ Parcial |
| IA Soberana | ✅ | ❌ Não existe |
| Busca do Google vai mudar | ✅ | ❌ Não existe |

---

## Tarefas

### Task 1: Adicionar Evento Sora 2 em Timeline.tsx

- [ ] **MANTER** todos os 8 eventos existentes
- [ ] **ADICIONAR** novo evento para Q3 (posição entre JUL Shadow AI e OUT BMW):

```tsx
{
  id: 9, // ou reordenar IDs
  month: 'SET',
  title: 'A Era do Vídeo Sintético',
  headline: 'OpenAI Sora 2',
  description: 'Lançamento do Sora 2: vídeo com áudio sincronizado e física realista. Não é mais "CGI óbvio" - é indistinguível de filmagem real. A produção audiovisual nunca mais será a mesma.',
  icon: 'globe', // ou novo ícone
  category: 'Agentes',
  impact: 'O custo de produzir vídeo profissional caiu a zero.'
}
```

### Task 2: Adicionar "Economia da Autenticidade" em TheGap.tsx

- [ ] **MANTER** todo conteúdo existente (Medo vs Eficácia, Workslop)
- [ ] **ADICIONAR** novo box ou seção sobre a contratendência:

```tsx
// Sugestão de conteúdo
const authenticityEconomy = {
  title: "A Economia da Autenticidade",
  desc: "Em resposta à saturação de conteúdo sintético ('Slop'), surge uma nova valorização do humano verificável.",
  highlight: "Selos 'Feito por Humano' tornam-se premium.",
  examples: [
    "Artesanato com certificado de origem",
    "Conteúdo com verificação biométrica",
    "Eventos presenciais como prova de humanidade"
  ]
};
```

### Task 3: Enriquecer FuturePredictions.tsx com Splinternet

- [ ] **MANTER** os 3 cards existentes (Empresa 1 Pessoa, Local & Humano, Crise de Significado)
- [ ] **ADICIONAR** menção à "Splinternet" no card existente ou criar novo elemento:

```tsx
// Opção A: Enriquecer card "Retorno do Local & Humano"
// Adicionar ao texto:
"A 'Internet Aberta' está morrendo. Voltaremos a valorizar comunidades fechadas, Discords privados e newsletters verificadas."

// Opção B: Criar novo card/box
{
  title: "A Splinternet",
  desc: "A busca do Google mudará radicalmente: em vez de 10 links azuis, uma resposta sintetizada. Isso matará o tráfego de sites de conteúdo raso.",
  icon: <Globe />
}
```

### Task 4: (Opcional) Mencionar Agentforce por Nome

- [ ] Na timeline ou em outro lugar, citar "Agentforce da Salesforce" como exemplo concreto de agentes autônomos
- [ ] Contexto: "A Salesforce lançou Agentforce - não conversamos mais com o chatbot, damos uma meta e o agente executa."

---

## Critérios de Aceite

- [ ] Evento Sora 2 adicionado na Timeline (Q3/SET)
- [ ] "Economia da Autenticidade" presente no app
- [ ] "Splinternet" mencionada nas previsões
- [ ] Conteúdo original MANTIDO intacto
- [ ] Visual consistente com design system
- [ ] Build passa sem erros

---

## Dados Verificados (Fonte: Pesquisa)

```yaml
q3_eventos:
  sora_2:
    lancamento: "Jul-Set 2025"
    features: "Vídeo com áudio e física real"
    significado: "Não precisamos mais editar - geramos"

  agentforce:
    empresa: "Salesforce"
    conceito: "Damos uma meta, agente executa"
    exemplo: "Resolva essa devolução"

economia_autenticidade:
  causa: "Saturação de conteúdo sintético (Slop)"
  efeito: "Selo 'Feito por Humano' torna-se premium"
  tendencia: "Internet Aberta morrendo, comunidades fechadas valorizam"

previsoes_2026:
  splinternet:
    descricao: "Internet fragmentada em bolhas verificadas"
    impacto_google: "10 links azuis → resposta sintetizada"
    vitimas: "Sites de conteúdo raso"

  ia_soberana:
    necessidade: "Países não aceitam inteligência em servidores da Califórnia"
    brasil: "Tentará criar modelos treinados em português"
```

---

## Arquivos a Modificar

| Arquivo | Ação | Tipo |
|---------|------|------|
| `components/Timeline.tsx` | Adicionar evento Sora 2 | Adição |
| `components/TheGap.tsx` | Adicionar Economia da Autenticidade | Adição |
| `components/FuturePredictions.tsx` | Enriquecer com Splinternet | Enriquecimento |

---

## Definition of Done

- [ ] Sora 2 na timeline
- [ ] Economia da Autenticidade implementada
- [ ] Splinternet mencionada
- [ ] Build passa
- [ ] Story marcada como completa

---

*Story criada por Winston (Architect Agent) - 2025-11-26*

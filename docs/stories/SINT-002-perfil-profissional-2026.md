# Story SINT-002: Perfil Profissional 2026 Completo

## Metadata

| Campo | Valor |
|-------|-------|
| **Story ID** | SINT-002 |
| **Epic** | SINT-EPIC-001 |
| **Status** | 🔵 Ready |
| **Prioridade** | 🔴 Alta |
| **Esforço** | L (Large) |
| **Componentes** | SkillsRadar.tsx, ProfessionsGuide.tsx |

---

## User Story

**Como** profissional preocupado com meu futuro,
**Quero** entender exatamente quais habilidades e carreiras estão em ascensão,
**Para** me preparar estrategicamente para 2026.

---

## Contexto da Pesquisa

A pesquisa define o "Arquiteto de Fluxos" como o perfil profissional de elite e traz:

### 1. As 4 Skills do Profissional Elite 2026

| Skill | Score | Descrição |
|-------|-------|-----------|
| **Gestão de Agentes** | 10/10 | Saber ser "chefe" de robôs. Delegar tarefas complexas para IAs e consolidar resultados. |
| **Curadoria da Verdade** | 9/10 | A IA gera 100 ideias, 95 são medíocres. Identificar as 5 brilhantes. "Bom Gosto" como hard skill. |
| **Conexão Humana** | 10/10 | Vendas, negociação, terapia, liderança. Empatia real (olho no olho). |
| **Pensamento Sistêmico** | 8/10 | Entender como as peças se encaixam. IA é ótima em tarefas isoladas, péssima em contexto macro. |

### 2. Profissões Emergentes Confirmadas

| Profissão | Descrição |
|-----------|-----------|
| **Designer de Personalidade de Agentes** | Quem cria a "alma" e tom de voz da IA da empresa |
| **Auditor de Viés Algorítmico** | O "compliance" que garante que a IA não está sendo racista ou alucinando |
| **Gerente de Cibersegurança Pessoal** | Protege famílias ricas de sequestros virtuais e deepfakes |

### 3. A Tese Central

> "A IA vai tirar o emprego de quem vende **tempo**, e dar uma fortuna para quem vende **resultado**."

---

## Tarefas

### Task 1: Adicionar Seção "Perfil Elite 2026" em SkillsRadar.tsx

- [ ] **MANTER** o radar atual (já validado)
- [ ] **ADICIONAR** nova seção abaixo ou ao lado com as 4 skills da pesquisa
- [ ] Formato sugerido: 4 cards com score visual (barra ou número)
- [ ] Incluir descrição de cada skill

```tsx
// Estrutura sugerida para os dados
const eliteSkills = [
  { skill: "Gestão de Agentes", score: 10, desc: "Saber ser 'chefe' de robôs..." },
  { skill: "Curadoria da Verdade", score: 9, desc: "Identificar as 5 ideias brilhantes..." },
  { skill: "Conexão Humana", score: 10, desc: "Empatia real, olho no olho..." },
  { skill: "Pensamento Sistêmico", score: 8, desc: "Entender o contexto macro..." }
];
```

### Task 2: Adicionar 3 Profissões Emergentes em ProfessionsGuide.tsx

- [ ] **MANTER** os 3 cards atuais (Tecnologia, Gestão, Criação)
- [ ] **ADICIONAR** nova seção "Profissões Emergentes 2026"
- [ ] 3 novos cards com as profissões da pesquisa
- [ ] Seguir mesmo padrão visual dos cards existentes

```tsx
// Estrutura sugerida
const emergingProfessions = [
  {
    title: "Designer de Personalidade de Agentes",
    icon: <Sparkles />,
    description: "Cria a 'alma' e tom de voz da IA corporativa...",
    keySkill: "Psicologia + Prompt Engineering"
  },
  {
    title: "Auditor de Viés Algorítmico",
    icon: <Scale />,
    description: "O compliance que garante IA ética...",
    keySkill: "Ética + Data Science"
  },
  {
    title: "Gerente de Cibersegurança Pessoal",
    icon: <ShieldCheck />,
    description: "Protege famílias de deepfakes e sequestros virtuais...",
    keySkill: "Segurança + Gestão de Crise"
  }
];
```

### Task 3: Adicionar Frase-Tese sobre Tempo vs Resultado

- [ ] Incluir em destaque (quote box ou similar):
  > "A IA vai tirar o emprego de quem vende **tempo**, e dar uma fortuna para quem vende **resultado**."
- [ ] Posicionamento: início do ProfessionsGuide ou SkillsRadar

---

## Critérios de Aceite

- [ ] 4 skills do "Perfil Elite 2026" visíveis com scores
- [ ] 3 profissões emergentes adicionadas como novos cards
- [ ] Frase "tempo vs resultado" em destaque
- [ ] Conteúdo original MANTIDO intacto
- [ ] Visual consistente com design system
- [ ] Build passa sem erros

---

## Dados Verificados (Fonte: Pesquisa)

```yaml
perfil_elite_2026:
  nome: "Arquiteto de Fluxos"
  tese: "IA tira emprego de quem vende tempo, dá fortuna a quem vende resultado"

skills:
  - nome: "Gestão de Agentes"
    score: 10
    descricao: "Saber delegar para 3 IAs diferentes e consolidar resultado"
  - nome: "Curadoria da Verdade"
    score: 9
    descricao: "Bom Gosto tornou-se hard skill. Identificar 5 ideias brilhantes em 100."
  - nome: "Conexão Humana"
    score: 10
    descricao: "Vendas, negociação, terapia. IA simula empatia, nós sabemos a diferença."
  - nome: "Pensamento Sistêmico"
    score: 8
    descricao: "IA ótima em tarefas isoladas, péssima em contexto macro da empresa."

profissoes_emergentes:
  - Designer de Personalidade de Agentes
  - Auditor de Viés Algorítmico
  - Gerente de Cibersegurança Pessoal
```

---

## Arquivos a Modificar

| Arquivo | Ação | Tipo |
|---------|------|------|
| `components/SkillsRadar.tsx` | Adicionar seção "Perfil Elite 2026" | Adição |
| `components/ProfessionsGuide.tsx` | Adicionar 3 profissões emergentes | Adição |

---

## Definition of Done

- [ ] Skills do perfil elite implementadas
- [ ] Profissões emergentes adicionadas
- [ ] Frase-tese em destaque
- [ ] Build passa
- [ ] Story marcada como completa

---

*Story criada por Winston (Architect Agent) - 2025-11-26*

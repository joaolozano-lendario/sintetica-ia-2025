# Story SINT-003: Brasil 2025 Expandido

## Metadata

| Campo | Valor |
|-------|-------|
| **Story ID** | SINT-003 |
| **Epic** | SINT-EPIC-001 |
| **Status** | 🔵 Ready |
| **Prioridade** | 🔴 Alta |
| **Esforço** | L (Large) |
| **Componentes** | BrazilFocus.tsx |

---

## User Story

**Como** leitor brasileiro do Dossiê,
**Quero** entender o panorama completo da IA no Brasil (política, economia, educação),
**Para** tomar decisões informadas sobre minha carreira e negócios.

---

## Contexto da Pesquisa

A pesquisa tem uma seção completa "Raio-X do Brasil em 2025" com 3 dimensões que estão **parcialmente cobertas** no app:

### A. Cenário Político (PL 2338/2023) ✅ JÁ EXISTE
- Status: Aprovado no Senado, travou na Câmara
- Conflito: Artistas vs Startups
- Resultado: Vácuo jurídico

### B. Economia Real ⚠️ PARCIAL
- ✅ 72% empresas usam IA (existe no app)
- ✅ 28 milhões fraudes (existe no app)
- ❌ **FALTA**: Golpe do Futuro - deepfakes de voz clonados do Instagram
- ❌ **FALTA**: Agronegócio e Pix/Open Finance como maiores beneficiários

### C. Educação e Trabalho ❌ NÃO EXISTE
- MEC ainda luta para lançar diretrizes claras
- Professores da rede pública usam IA via WhatsApp (Nova Escola)
- USP e FGV: "Letramento em IA" compulsório
- Nova regra: Não se aceita trabalho escrito sem defesa oral

---

## Tarefas

### Task 1: Adicionar Seção "Educação" em BrazilFocus.tsx

- [ ] **MANTER** todos os cards e conteúdo existente
- [ ] **ADICIONAR** nova seção "Educação & Trabalho" após os cards de stats
- [ ] Conteúdo:

```tsx
// Estrutura sugerida
const educationSection = {
  title: "Educação: Entre o Caos e a Inovação",
  items: [
    {
      label: "MEC",
      status: "⚠️ Sem Diretrizes",
      desc: "O ministério ainda luta para lançar orientações claras sobre IA nas escolas."
    },
    {
      label: "Rede Pública",
      status: "✅ Adaptando",
      desc: "Professores usam IA via WhatsApp (Nova Escola) para criar planos de aula em segundos."
    },
    {
      label: "USP & FGV",
      status: "🔵 Pioneiras",
      desc: "'Letramento em IA' agora é compulsório. Trabalhos escritos exigem defesa oral."
    }
  ]
};
```

### Task 2: Adicionar Detalhes sobre "Golpe do Futuro"

- [ ] Enriquecer o card de "28 Mi fraudes" ou criar novo elemento
- [ ] Adicionar contexto:
  > "Deepfakes de voz de familiares clonados do Instagram para pedir dinheiro via Pix."
- [ ] Pode ser um tooltip, expansão ou texto adicional

### Task 3: Adicionar Seção "Setores Beneficiados"

- [ ] **ADICIONAR** nova seção ou cards sobre setores que mais se beneficiam
- [ ] Conteúdo:

```tsx
const beneficiaries = [
  {
    sector: "Agronegócio",
    icon: <Wheat />, // ou similar
    benefit: "IA para prever safras, otimizar irrigação e combater pragas.",
    highlight: "Maior PIB do Brasil"
  },
  {
    sector: "Sistema Financeiro",
    icon: <Landmark />,
    benefit: "Pix + Open Finance: crédito personalizado em tempo real.",
    highlight: "800 Mi de transações/mês"
  }
];
```

### Task 4: (Opcional) Adicionar "IA Soberana Brasil"

- [ ] Menção à necessidade de modelos treinados em português e cultura local
- [ ] Contexto: "Não ser colonizado digitalmente"
- [ ] Pode ser um box de destaque ou adição ao texto existente

---

## Critérios de Aceite

- [ ] Seção "Educação" adicionada (MEC, Rede Pública, USP/FGV)
- [ ] Contexto do "Golpe do Futuro" (deepfakes do Instagram) presente
- [ ] Setores beneficiados (Agronegócio, Pix/Open Finance) mencionados
- [ ] Conteúdo original MANTIDO intacto
- [ ] Visual consistente com design system
- [ ] Build passa sem erros

---

## Dados Verificados (Fonte: Pesquisa)

```yaml
brasil_educacao:
  mec: "Ainda luta para lançar diretrizes claras"
  rede_publica: "Professores usam IA no WhatsApp via Nova Escola"
  universidades:
    - nome: "USP"
      medida: "Letramento em IA compulsório"
    - nome: "FGV"
      medida: "Letramento em IA compulsório"
  nova_regra: "Não se aceita trabalho escrito sem defesa oral"

brasil_economia:
  golpe_futuro:
    descricao: "Deepfakes de voz de familiares clonados do Instagram"
    metodo: "Pedir dinheiro via Pix"
    volume: "28 milhões de tentativas até setembro 2025"

setores_beneficiados:
  - setor: "Agronegócio"
    uso: "Prever safras e personalizar insumos"
  - setor: "Sistema Financeiro"
    uso: "Pix + Open Finance para crédito em tempo real"

ia_soberana:
  necessidade: "Modelos treinados em português e cultura local"
  motivo: "Não ser colonizado digitalmente"
```

---

## Arquivos a Modificar

| Arquivo | Ação | Tipo |
|---------|------|------|
| `components/BrazilFocus.tsx` | Adicionar seção Educação | Adição |
| `components/BrazilFocus.tsx` | Enriquecer card de fraudes | Enriquecimento |
| `components/BrazilFocus.tsx` | Adicionar setores beneficiados | Adição |

---

## Mockup da Estrutura Final

```
BrazilFocus.tsx
├── Header (existente) ✅
├── Stats Grid - 4 cards (existente) ✅
├── [NOVO] Seção Educação
│   ├── MEC - Sem Diretrizes
│   ├── Rede Pública - Adaptando
│   └── USP/FGV - Pioneiras
├── [NOVO] Seção Setores Beneficiados
│   ├── Agronegócio
│   └── Sistema Financeiro (Pix)
├── Box Regulatório (existente) ✅
└── [OPCIONAL] Box IA Soberana Brasil
```

---

## Definition of Done

- [ ] Seção Educação implementada
- [ ] Golpe do Futuro contextualizado
- [ ] Setores beneficiados adicionados
- [ ] Build passa
- [ ] Story marcada como completa

---

*Story criada por Winston (Architect Agent) - 2025-11-26*

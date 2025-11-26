# Sintética 2025 - Brownfield Architecture Document

## Introduction

This document captures the **CURRENT STATE** of the Sintética 2025 codebase - an interactive AI report visualization originally created in Google AI Studio. It serves as a reference for AI agents and developers working on enhancements.

### Document Scope

Comprehensive documentation of entire system - a React + TypeScript + Vite single-page application.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-11-26 | 1.0 | Initial brownfield analysis | Winston (Architect Agent) |

---

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

| File | Purpose |
|------|---------|
| `index.html` | Entry point with Tailwind CDN, fonts, global styles |
| `index.tsx` | React DOM mounting point |
| `App.tsx` | Main component orchestrating all sections |
| `types.ts` | TypeScript interfaces for data structures |
| `vite.config.ts` | Build configuration, dev server, Gemini API key injection |
| `package.json` | Dependencies: React 19, Recharts 3.5, Lucide React |

### Component Architecture

```
components/
├── Hero.tsx              # Landing section with animated headline
├── Cheatsheet.tsx        # Executive summary section
├── ImpactStats.tsx       # Key statistics display
├── EvolutionaryScale.tsx # Macro context visualization
├── PhysicalLayer.tsx     # Hardware & Energy section
├── ComparisonChart.tsx   # Data comparison charts
├── Timeline.tsx          # Interactive 2025 AI events timeline
├── NewEconomy.tsx        # Economic impact section
├── MultiAgentOrg.tsx     # Multi-agent organization visualization
├── TheGap.tsx            # Reality check section
├── RealWorldCases.tsx    # Case studies
├── DefenseProtocol.tsx   # Security considerations
├── BrazilFocus.tsx       # Brazil-specific analysis
├── ProfessionsGuide.tsx  # Career impact guide
├── FuturePredictions.tsx # 2026+ predictions
├── SkillsRadar.tsx       # Radar chart for skills comparison
├── ToolsGrid.tsx         # AI tools grid
├── ExpertPanel.tsx       # Expert perspectives
├── Glossary.tsx          # Terms glossary
└── Footer.tsx            # Footer with credits
```

---

## High Level Architecture

### Technical Summary

| Aspect | Details |
|--------|---------|
| **Type** | Single-Page Application (SPA) |
| **Framework** | React 19.2 |
| **Language** | TypeScript 5.8 |
| **Build Tool** | Vite 6.2 |
| **Styling** | Tailwind CSS (CDN) + Custom CSS |
| **Charts** | Recharts 3.5 |
| **Icons** | Lucide React 0.554 |
| **Origin** | Google AI Studio export |

### Actual Tech Stack (from package.json)

| Category | Technology | Version | Notes |
|----------|------------|---------|-------|
| Runtime | React | ^19.2.0 | Latest major version |
| UI Framework | Tailwind CSS | CDN | Loaded via script tag in index.html |
| Charts | Recharts | ^3.5.0 | Radar, Bar, Line charts |
| Icons | Lucide React | ^0.554.0 | Modern icon library |
| Build | Vite | ^6.2.0 | Fast dev server, HMR |
| Language | TypeScript | ~5.8.2 | Strict mode enabled |

### Repository Structure

- **Type**: Standalone project (not monorepo)
- **Package Manager**: npm
- **Notable**: Originally exported from Google AI Studio - uses CDN for Tailwind and import maps for dependencies

---

## Source Tree and Module Organization

### Project Structure (Actual)

```text
sintetica-relatorio-ia-2025/
├── .git/                    # Git repository
├── .gitignore               # Ignores node_modules, dist, .env
├── components/              # All React components (21 files)
│   ├── Hero.tsx             # 4KB - Landing hero section
│   ├── Cheatsheet.tsx       # 6KB - Executive summary
│   ├── Timeline.tsx         # 10KB - Interactive timeline (largest)
│   ├── ComparisonChart.tsx  # 8KB - Chart visualizations
│   ├── ExpertPanel.tsx      # 9KB - Expert perspectives
│   ├── PhysicalLayer.tsx    # 8KB - Energy/Hardware analysis
│   ├── [16 more components...]
├── dist/                    # Build output (gitignored)
├── node_modules/            # Dependencies
├── App.tsx                  # Main app component (orchestrator)
├── index.html               # HTML template with Tailwind CDN
├── index.tsx                # React entry point
├── metadata.json            # AI Studio metadata
├── package.json             # Dependencies definition
├── package-lock.json        # Lockfile
├── README.md                # Basic setup instructions
├── tsconfig.json            # TypeScript configuration
├── types.ts                 # Shared TypeScript interfaces
└── vite.config.ts           # Vite build configuration
```

### Component Size Distribution

| Size Range | Components | Examples |
|------------|------------|----------|
| Large (8-10KB) | 4 | Timeline, ComparisonChart, ExpertPanel, PhysicalLayer |
| Medium (5-7KB) | 8 | Cheatsheet, EvolutionaryScale, FuturePredictions, BrazilFocus |
| Small (2-4KB) | 9 | Hero, Footer, Glossary, TheGap, DefenseProtocol |

---

## Data Models and Types

### TypeScript Interfaces (types.ts)

```typescript
// Timeline event structure
interface TimelineEvent {
  id: number;
  month: string;
  title: string;
  headline: string;
  description: string;
  icon: 'brain' | 'globe' | 'chip' | 'robot' | 'gavel' | 'search' | 'shield';
  category: 'Infraestrutura' | 'Agentes' | 'Regulação' | 'Soberania' | 'Futuro';
  impact: string;
}

// Radar chart data
interface SkillData {
  subject: string;
  A: number;  // Current Professional
  B: number;  // Future Professional (2025+)
  fullMark: number;
}

// Comparison chart data
interface ComparisonData {
  name: string;
  years: number;
  label: string;
  desc: string;
}

// Tool grid items
interface ToolItem {
  name: string;
  category: string;
  description: string;
  access: string;
}

// Case study cards
interface CaseStudy {
  title: string;
  metric: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  source: string;
}

// Profession guide items
interface ProfessionGuide {
  area: string;
  icon: React.ReactNode;
  atRisk: string;
  onRise: string;
  keySkill: string;
  description: string;
}

// Glossary terms
interface GlossaryTerm {
  term: string;
  definition: string;
}
```

### Data Location Pattern

**IMPORTANT**: All data is **hardcoded inline** within components, NOT in external JSON/YAML files.

Example from `Timeline.tsx`:
```typescript
const events: TimelineEvent[] = [
  { id: 1, month: 'JAN', title: 'O Choque do Raciocínio', ... },
  { id: 2, month: 'MAR', title: 'A Muralha Energética', ... },
  // ... 8 events total
];
```

---

## Component Patterns and Design System

### 1. Component Structure Pattern

All components follow this structure:
```typescript
import React from 'react';
import { IconName } from 'lucide-react';

const ComponentName: React.FC = () => {
  return (
    <section className="py-24 px-4 ...">
      {/* Background effects */}
      <div className="absolute inset-0 ..."></div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        {/* Section content */}
      </div>
    </section>
  );
};

export default ComponentName;
```

### 2. Design System Tokens

#### Colors (from index.html Tailwind config)
```javascript
colors: {
  'neon-blue': '#00f3ff',
  'neon-purple': '#bc13fe',
  'deep-space': '#050b14',
}
```

#### Typography
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],      // Body text
  display: ['Space Grotesk', 'sans-serif'],  // Headlines
}
```

#### Custom Animations
```javascript
animation: {
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'float': 'float 6s ease-in-out infinite',
}
```

### 3. Styling Patterns

| Pattern | Usage | Example |
|---------|-------|---------|
| Glass Panel | Cards, containers | `glass-panel` class (custom CSS) |
| Gradient Text | Headlines | `gradient-text` class |
| Background Noise | Texture overlay | External SVG from grainy-gradients.vercel.app |
| Section Dividers | Horizontal lines | `h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent` |
| Status Badges | Labels | Mono font, uppercase, tracking-widest |

### 4. State Management

**Pattern**: Local state only via React hooks
- `useState` for interactive elements (e.g., active timeline event)
- `useRef` for DOM references (e.g., scroll containers)
- **No global state management** (no Redux, Context, Zustand)

---

## Technical Debt and Known Issues

### 1. CDN Dependencies (Risk: Medium)

**Issue**: Tailwind CSS loaded via CDN script tag
```html
<script src="https://cdn.tailwindcss.com"></script>
```
**Impact**: Runtime dependency on external CDN; no tree-shaking; larger bundle
**Recommendation**: Migrate to PostCSS + Tailwind for production

### 2. Hardcoded Data (Technical Debt: Low)

**Issue**: All content data embedded in components
**Impact**: Difficult to update content without code changes
**Recommendation**: Extract to JSON files or CMS if content updates are frequent

### 3. Missing Error Boundaries

**Issue**: No React error boundaries implemented
**Impact**: Component errors crash entire app
**Recommendation**: Add error boundaries around chart components (Recharts)

### 4. No Tests

**Issue**: Zero test files
**Impact**: No regression protection
**Recommendation**: Add Vitest + React Testing Library for critical components

### 5. Unused Gemini API Key

**Issue**: vite.config.ts injects `GEMINI_API_KEY` but no component uses it
**Impact**: Dead code; potential security concern if key is committed
**Recommendation**: Remove if not needed, or implement AI features that use it

---

## Development and Deployment

### Local Development Setup

```bash
# Prerequisites: Node.js 18+
npm install
npm run dev    # Starts dev server on http://localhost:3000
```

### Build Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |

### Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `GEMINI_API_KEY` | No | Google Gemini API (currently unused) |

### Vite Configuration Notes

```typescript
// vite.config.ts
{
  server: {
    port: 3000,
    host: '0.0.0.0',  // Allows external access
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') }  // Path aliasing
  }
}
```

---

## Content Structure (Report Sections)

The report follows this narrative flow:

| Order | Component | Theme |
|-------|-----------|-------|
| 1 | Hero | Landing: "O Grande Ponto de Inflexão 2025" |
| 2 | Cheatsheet | Executive summary |
| 3 | ImpactStats | Key statistics |
| 4 | EvolutionaryScale | Macro context |
| 5 | PhysicalLayer | Hardware & Energy infrastructure |
| 6 | ComparisonChart | Technology comparisons |
| 7 | Timeline | 2025 AI events chronology |
| 8 | NewEconomy | Economic disruption |
| 9 | MultiAgentOrg | Multi-agent organizations |
| 10 | TheGap | Reality check |
| 11 | RealWorldCases | Case studies |
| 12 | DefenseProtocol | Security |
| 13 | BrazilFocus | Brazil-specific analysis |
| 14 | ProfessionsGuide | Career impacts |
| 15 | FuturePredictions | 2026+ predictions |
| 16 | SkillsRadar | Skills evolution |
| 17 | ToolsGrid | AI tools catalog |
| 18 | ExpertPanel | Expert perspectives |
| 19 | Glossary | Terms |
| 20 | Footer | Credits |

---

## Appendix - Useful Commands and Scripts

### Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run preview      # Preview production build
```

### TypeScript Checking

```bash
npx tsc --noEmit     # Type check without emitting
```

### Git Operations

```bash
git status           # Check changes
git add .
git commit -m "feat: description"
git push origin main
```

---

## Quick Modification Guide

### To add a new section:

1. Create `components/NewSection.tsx` following existing pattern
2. Import in `App.tsx`
3. Add to JSX in appropriate position
4. If needed, add types to `types.ts`

### To update content:

1. Find the component with hardcoded data
2. Edit the data array directly in the component file
3. Run `npm run dev` to verify

### To add charts:

1. Import from `recharts` (already installed)
2. Use `ResponsiveContainer` wrapper
3. Follow patterns in `SkillsRadar.tsx` or `ComparisonChart.tsx`

---

*Document generated by Winston (Architect Agent) - 2025-11-26*

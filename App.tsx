/**
 * SINTÉTICA 2025 - App Principal v4.0
 *
 * ROUNDTABLE EDITION: Jobs-Lozano-DaVinci
 *
 * Mudanças v4:
 * - Condensação de 26 → 17 seções (proporção 1-3-3-3-3-3-1)
 * - Breathers com tipo "question" (meandros - Da Vinci)
 * - "One More Thing" no CallToAdventure (Jobs)
 * - Glossary e Tools como modais (Codex - Da Vinci)
 * - Estrutura narrativa otimizada para scroll depth
 *
 * "Não estamos criando páginas. Estamos contando uma história." — Jobs
 */

import React, { useState, useEffect } from 'react';

// Core Components (sistema v4)
import { Act, Breather, ProgressNav, GlossaryModal, ToolsDrawer } from './components/core';
import { acts } from './lib/theme';

// Original Components (preservados 100%)
import Hero from './components/Hero';
import Cheatsheet from './components/Cheatsheet';
import Timeline from './components/Timeline';
import SkillsRadar from './components/SkillsRadar';
import RealWorldCases from './components/RealWorldCases';
import TheGap from './components/TheGap';
import PhysicalLayer from './components/PhysicalLayer';
import NewEconomy from './components/NewEconomy';
import MultiAgentOrg from './components/MultiAgentOrg';
import Footer from './components/Footer';
import EvolutionaryScale from './components/EvolutionaryScale';
import DefenseProtocol from './components/DefenseProtocol';
import BrazilFocus from './components/BrazilFocus';
import CallToAdventure from './components/CallToAdventure';
import ConsumerAI from './components/ConsumerAI';
import RoboticsRevolution from './components/RoboticsRevolution';
import AntifragileProfessional from './components/AntifragileProfessional';
import TheCompression from './components/TheCompression';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  // Intersection Observer para detectar seção atual
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) {
            setCurrentSection(sectionId);
          }
        }
      });
    }, observerOptions);

    // Observa todas as seções
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-black bg-[#050b14] text-slate-200 relative overflow-x-hidden">

      {/* Global Atmospheric Background (preservado) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Progress Navigation */}
      <ProgressNav
        currentSection={currentSection}
        onNavigate={setCurrentSection}
      />

      {/* Modais - Codex (Da Vinci) */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />
      <ToolsDrawer
        isOpen={isToolsOpen}
        onClose={() => setIsToolsOpen(false)}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col">

        {/* ════════════════════════════════════════════════════════════════
            PRÓLOGO: O CHOQUE (1 seção)
            Temperatura: cold | Mood: Impacto inicial
        ════════════════════════════════════════════════════════════════ */}
        <Act
          id="prologue"
          number={0}
          name="Prólogo"
          subtitle="O Choque"
          theme="cold"
        >
          <section id="hero" data-section="hero">
            <Hero />
          </section>
        </Act>

        {/* Breather: Question (meandro - Da Vinci) */}
        <Breather
          type="question"
          question="O que acontece quando 30 anos de mudança se comprimem em 30 meses?"
          subtext="Continue para descobrir."
        />

        {/* ════════════════════════════════════════════════════════════════
            ATO I: A FUNDAÇÃO (3 seções)
            Temperatura: cool | Mood: Estabelecer contexto
        ════════════════════════════════════════════════════════════════ */}
        <Act
          id="act-1"
          number={1}
          name="Ato I"
          subtitle="A Fundação"
          theme="cool"
          showHeader={true}
        >
          <section id="compression" data-section="compression">
            <TheCompression />
          </section>

          <section id="cheatsheet" data-section="cheatsheet">
            <Cheatsheet />
          </section>

          <section id="timeline" data-section="timeline" className="relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
            <Timeline />
          </section>
        </Act>

        {/* Breather: Question (meandro) */}
        <Breather
          type="question"
          question="Mas onde toda essa inteligência vai rodar?"
          subtext="A resposta exige concreto, urânio e robôs."
        />

        {/* ════════════════════════════════════════════════════════════════
            ATO II: A MATERIALIZAÇÃO (3 seções)
            Temperatura: neutral | Mood: O mundo físico da IA
        ════════════════════════════════════════════════════════════════ */}
        <Act
          id="act-2"
          number={2}
          name="Ato II"
          subtitle="A Materialização"
          theme="neutral"
          showHeader={true}
        >
          <section id="evolution" data-section="evolution">
            <EvolutionaryScale />
          </section>

          <section id="physical" data-section="physical">
            <PhysicalLayer />
          </section>

          <section id="robotics" data-section="robotics">
            <RoboticsRevolution />
          </section>
        </Act>

        {/* Breather: Stat */}
        <Breather
          type="stat"
          stat="30x"
          statLabel="Crescimento de demanda energética até 2035. A IA deixou de ser código — agora ela precisa de eletricidade, água e aço."
        />

        {/* ════════════════════════════════════════════════════════════════
            ATO III: A TRANSFORMAÇÃO (3 seções)
            Temperatura: cool | Mood: O mundo digital transformado
        ════════════════════════════════════════════════════════════════ */}
        <Act
          id="act-3"
          number={3}
          name="Ato III"
          subtitle="A Transformação"
          theme="cool"
          showHeader={true}
        >
          <section id="consumer" data-section="consumer">
            <ConsumerAI />
          </section>

          <section id="economy" data-section="economy">
            <NewEconomy />
          </section>

          <section id="agents" data-section="agents">
            <MultiAgentOrg />
          </section>
        </Act>

        {/* Breather: Question (meandro) */}
        <Breather
          type="question"
          question="Tudo isso parece promissor. Mas qual é o custo?"
          subtext="Nem tudo que brilha é ouro sintético."
        />

        {/* ════════════════════════════════════════════════════════════════
            ATO IV: A TENSÃO (3 seções)
            Temperatura: hot | Mood: Riscos e desafios
        ════════════════════════════════════════════════════════════════ */}
        <Act
          id="act-4"
          number={4}
          name="Ato IV"
          subtitle="A Tensão"
          theme="hot"
          showHeader={true}
        >
          <section id="gap" data-section="gap">
            <TheGap />
          </section>

          <section id="cases" data-section="cases">
            <RealWorldCases />
          </section>

          <section id="defense" data-section="defense">
            <DefenseProtocol />
          </section>
        </Act>

        {/* Breather: Manifesto */}
        <Breather
          type="manifesto"
          content="O risco não é a IA ser muito inteligente. É você não saber distinguir o real do sintético. A curadoria da verdade virou skill de sobrevivência."
        />

        {/* ════════════════════════════════════════════════════════════════
            ATO V: O HORIZONTE (3 seções)
            Temperatura: cool | Mood: Futuro e preparação
        ════════════════════════════════════════════════════════════════ */}
        <Act
          id="act-5"
          number={5}
          name="Ato V"
          subtitle="O Horizonte"
          theme="cool"
          showHeader={true}
        >
          <section id="brazil" data-section="brazil">
            <BrazilFocus />
          </section>

          <section id="antifragile" data-section="antifragile">
            <AntifragileProfessional />
          </section>

          <section id="skills" data-section="skills">
            <SkillsRadar />
          </section>
        </Act>

        {/* Breather: Question (meandro final) */}
        <Breather
          type="question"
          question="Você está pronto para o próximo passo?"
          subtext="O relatório termina. Sua jornada começa."
        />

        {/* ════════════════════════════════════════════════════════════════
            EPÍLOGO: O CONVITE (1 seção + One More Thing)
            Temperatura: cold | Mood: Fechamento emocional
        ════════════════════════════════════════════════════════════════ */}
        <Act
          id="epilogue"
          number={6}
          name="Epílogo"
          subtitle="O Convite"
          theme="cold"
        >
          <section id="adventure" data-section="adventure">
            <CallToAdventure
              onOpenGlossary={() => setIsGlossaryOpen(true)}
              onOpenTools={() => setIsToolsOpen(true)}
            />
          </section>
        </Act>

        <Footer />
      </div>
    </div>
  );
};

export default App;

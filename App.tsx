/**
 * SINTÉTICA 2025 - App Principal
 *
 * Estrutura narrativa em 5 Atos + Prólogo + Epílogo
 * Baseado nas recomendações do Conselho Jobs-Nicolas-Frost
 *
 * "Não estamos criando páginas. Estamos contando uma história." — Jobs
 */

import React, { useState, useEffect } from 'react';

// Core Components (novo sistema)
import { Act, Breather, ProgressNav, HeroNumbersGrid } from './components/core';
import { acts } from './lib/theme';

// Original Components (preservados 100%)
import Hero from './components/Hero';
import Cheatsheet from './components/Cheatsheet';
import Timeline from './components/Timeline';
import ComparisonChart from './components/ComparisonChart';
import SkillsRadar from './components/SkillsRadar';
import ImpactStats from './components/ImpactStats';
import RealWorldCases from './components/RealWorldCases';
import TheGap from './components/TheGap';
import ProfessionsGuide from './components/ProfessionsGuide';
import ToolsGrid from './components/ToolsGrid';
import PhysicalLayer from './components/PhysicalLayer';
import NewEconomy from './components/NewEconomy';
import MultiAgentOrg from './components/MultiAgentOrg';
import Glossary from './components/Glossary';
import Footer from './components/Footer';
import EvolutionaryScale from './components/EvolutionaryScale';
import FuturePredictions from './components/FuturePredictions';
import DefenseProtocol from './components/DefenseProtocol';
import BrazilFocus from './components/BrazilFocus';
import ExpertPanel from './components/ExpertPanel';
import CallToAdventure from './components/CallToAdventure';
import DeepScience from './components/DeepScience';
import ConsumerAI from './components/ConsumerAI';
import ContentCrisis from './components/ContentCrisis';
import RoboticsRevolution from './components/RoboticsRevolution';
import GlobalRegulation from './components/GlobalRegulation';
import MarketPulse from './components/MarketPulse';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('hero');

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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col">

        {/* ════════════════════════════════════════════════════════════════
            PRÓLOGO: O CHOQUE
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

        {/* ════════════════════════════════════════════════════════════════
            ATO I: A FUNDAÇÃO
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
          <section id="cheatsheet" data-section="cheatsheet">
            <Cheatsheet />
          </section>

          {/* Os 5 Números Âncora - Deep Dive recommendation */}
          <section id="hero-numbers" data-section="hero-numbers">
            <HeroNumbersGrid />
          </section>

          {/* ImpactStats original mantido para dados complementares */}
          <section id="stats" data-section="stats">
            <ImpactStats />
          </section>

          <section id="timeline" data-section="timeline" className="relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
            <Timeline />
          </section>
        </Act>

        {/* Breather: Citação de transição */}
        <Breather
          type="quote"
          content="O ano em que a humanidade deixou de perguntar 'se a IA pode' e começou a perguntar 'o que fazemos agora'."
          author="Síntese do momento histórico"
        />

        {/* ════════════════════════════════════════════════════════════════
            ATO II: A MATERIALIZAÇÃO
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

          <section id="comparison" data-section="comparison">
            <ComparisonChart />
          </section>

          <section id="robotics" data-section="robotics">
            <RoboticsRevolution />
          </section>
        </Act>

        {/* Breather: Estatística de impacto */}
        <Breather
          type="stat"
          stat="30x"
          statLabel="Crescimento de demanda energética até 2035. A IA deixou de ser software para virar concreto, urânio e robôs."
        />

        {/* ════════════════════════════════════════════════════════════════
            ATO III: A TRANSFORMAÇÃO
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
          <section id="science" data-section="science">
            <DeepScience />
          </section>

          <section id="consumer" data-section="consumer">
            <ConsumerAI />
          </section>

          <section id="market" data-section="market">
            <MarketPulse />
          </section>

          <section id="economy" data-section="economy">
            <NewEconomy />
          </section>

          <section id="agents" data-section="agents">
            <MultiAgentOrg />
          </section>
        </Act>

        {/* Breather: Citação provocadora */}
        <Breather
          type="quote"
          content="Não estamos testemunhando uma evolução tecnológica. Estamos vivendo uma revolução cognitiva."
          author="A nova realidade"
        />

        {/* ════════════════════════════════════════════════════════════════
            ATO IV: A TENSÃO
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

          <section id="content" data-section="content">
            <ContentCrisis />
          </section>

          <section id="cases" data-section="cases">
            <RealWorldCases />
          </section>

          <section id="defense" data-section="defense">
            <DefenseProtocol />
          </section>

          <section id="regulation" data-section="regulation">
            <GlobalRegulation />
          </section>
        </Act>

        {/* Breather: Silêncio para processar */}
        <Breather type="silence" />

        {/* ════════════════════════════════════════════════════════════════
            ATO V: O HORIZONTE
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

          <section id="professions" data-section="professions">
            <ProfessionsGuide />
          </section>

          <section id="future" data-section="future">
            <FuturePredictions />
          </section>

          <section id="skills" data-section="skills">
            <SkillsRadar />
          </section>

          <section id="tools" data-section="tools">
            <ToolsGrid />
          </section>

          <section id="experts" data-section="experts">
            <ExpertPanel />
          </section>
        </Act>

        {/* Breather: Visual transition */}
        <Breather type="visual" />

        {/* ════════════════════════════════════════════════════════════════
            EPÍLOGO: O CONVITE
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
            <CallToAdventure />
          </section>

          <section id="glossary" data-section="glossary">
            <Glossary />
          </section>
        </Act>

        <Footer />
      </div>
    </div>
  );
};

export default App;

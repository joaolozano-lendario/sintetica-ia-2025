
import React from 'react';
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
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-black bg-[#050b14] text-slate-200 relative overflow-x-hidden">
      
      {/* Global Atmospheric Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Hero />
        
        {/* CRITICAL: Executive Summary Section */}
        <Cheatsheet />
        
        <main className="flex flex-col relative z-20">
          <ImpactStats />

          {/* THE MACRO CONTEXT - WHERE ARE WE? */}
          <EvolutionaryScale />

          {/* Layer 1: Hardware & Infrastructure */}
          <PhysicalLayer />
          <ComparisonChart />

          <div className="relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
            <Timeline />
          </div>

          {/* Layer 2: The Bright Side - Science & Consumer */}
          <DeepScience />
          <ConsumerAI />
          <RoboticsRevolution />

          {/* Layer 3: Business & Economy */}
          <MarketPulse />
          <NewEconomy />
          <MultiAgentOrg />

          {/* Layer 4: The Reality Check - Risks & Cases */}
          <TheGap />
          <RealWorldCases />
          <DefenseProtocol />

          {/* Layer 5: The Content Crisis */}
          <ContentCrisis />

          {/* Layer 6: Governance & Regulation */}
          <GlobalRegulation />

          {/* Layer 7: Regional Focus */}
          <BrazilFocus />

          {/* Layer 7: Tactical Guide & Future */}
          <ProfessionsGuide />
          <FuturePredictions />
          <SkillsRadar />
          <ToolsGrid />

          {/* Meta-Analysis: Expert Perspectives */}
          <ExpertPanel />

          {/* Appendix */}
          <Glossary />

          {/* Emotional Closing */}
          <CallToAdventure />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;

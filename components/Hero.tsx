import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Users, Clock, Cpu, ChevronDown } from 'lucide-react';

// =============================================================================
// TYPING ANIMATION HOOK
// =============================================================================
const useTypingEffect = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          startTyping();
        } else {
          setIsComplete(true);
        }
      }, currentIndex === 0 ? delay : speed);
    };

    startTyping();
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// =============================================================================
// GLITCH TEXT COMPONENT
// =============================================================================
const GlitchText: React.FC<{ children: string; className?: string }> = ({ children, className = '' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute top-0 left-0 -translate-x-[2px] translate-y-[2px] text-cyan-500 opacity-70 z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] text-red-500 opacity-70 z-0"
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
};

const Hero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const { displayText: terminalText, isComplete: terminalComplete } = useTypingEffect(
    '> analyzing_global_state...',
    40,
    800
  );

  useEffect(() => {
    if (terminalComplete) {
      setTimeout(() => setShowContent(true), 300);
    }
  }, [terminalComplete]);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#030810]"
    >
      {/* Atmospheric Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030810] via-[#050b14] to-[#0a1525]" />

        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600/5 blur-[100px] rounded-full"
        />

        {/* Grid Overlay with mask */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

        {/* Scanline effect */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] opacity-30" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 z-10 pt-8 md:pt-12">

        {/* Terminal Boot Sequence */}
        <div className="transition-all duration-1000">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase mb-6">

            {/* Terminal typing effect */}
            <span className="flex items-center gap-2 px-4 py-2 bg-black/60 border border-cyan-500/30 rounded-sm text-cyan-400 font-mono backdrop-blur-sm">
              <span className="text-cyan-500">{terminalText}</span>
              <span className={`w-2 h-4 bg-cyan-400 ${terminalComplete ? 'opacity-0' : 'animate-pulse'}`} />
            </span>

            {/* Status badges - fade in after terminal */}
            <div className={`flex items-center gap-4 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="flex items-center gap-2 px-4 py-2 bg-red-950/40 border border-red-500/40 rounded-sm text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.15)] backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                Ponto de Inflexão
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-cyan-950/40 border border-cyan-500/30 rounded-sm text-cyan-400 backdrop-blur-sm">
                <Terminal size={12} />
                Nov 2025
              </span>
            </div>
          </div>
        </div>

        {/* Main Title with Glitch Effect */}
        <div className={`transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter text-white">
            <GlitchText className="hover:animate-pulse">SINTÉTICA</GlitchText>
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500">
                2025
              </span>
              {/* Glow behind year */}
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 blur-2xl opacity-50 -z-10">
                2025
              </span>
            </span>
          </h1>
        </div>

        {/* The Hook - The number that stops you */}
        <div className={`max-w-4xl mx-auto pt-4 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-6">
            O ano em que a Inteligência Artificial deixou de ser <em className="text-slate-500">software</em> <br className="hidden md:block"/>
            para se tornar <strong className="text-white font-medium">concreto, urânio e robôs</strong>.
          </p>
        </div>

        {/* The Shocking Comparison - Rosling Style with Premium Cards */}
        <div className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-4 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Stat 1: Time to 100M */}
          <div className="group relative bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-white/[0.06] rounded-2xl p-6 text-left transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] backdrop-blur-sm overflow-hidden">
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider mb-4">
                <Clock size={14} className="text-cyan-500" />
                <span>Tempo até 100M usuários</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Telefone</span>
                  <span className="text-slate-600 font-mono text-sm">75 anos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Internet</span>
                  <span className="text-slate-600 font-mono text-sm">7 anos</span>
                </div>
                <div className="flex justify-between items-center py-1 -mx-2 px-2 bg-cyan-500/5 rounded">
                  <span className="text-white text-sm font-medium">ChatGPT</span>
                  <span className="text-cyan-400 font-mono text-sm font-bold">2 meses</span>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/5">
                <p className="text-cyan-400 text-3xl font-bold font-display">800M</p>
                <p className="text-slate-500 text-xs mt-1">usuários semanais ativos</p>
              </div>
            </div>
          </div>

          {/* Stat 2: The Physical Cost */}
          <div className="group relative bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-white/[0.06] rounded-2xl p-6 text-left transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] backdrop-blur-sm overflow-hidden">
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider mb-4">
                <Cpu size={14} className="text-emerald-500" />
                <span>Custo físico da IA</span>
              </div>
              <p className="text-4xl font-bold text-white font-display mb-1">500ml</p>
              <p className="text-slate-400 text-sm mb-5">de água por conversa de 10 min</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Demanda energia 2024</span>
                  <span className="text-slate-400 font-mono">4 GW</span>
                </div>
                <div className="flex justify-between items-center py-1 -mx-2 px-2 bg-emerald-500/5 rounded">
                  <span className="text-slate-400">Projeção 2035</span>
                  <span className="text-emerald-400 font-bold font-mono">123 GW</span>
                </div>
              </div>
              <p className="text-emerald-500/80 text-xs mt-4 font-mono tracking-wider">+30x EM 10 ANOS</p>
            </div>
          </div>

          {/* Stat 3: The Human Impact */}
          <div className="group relative bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-white/[0.06] rounded-2xl p-6 text-left transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] backdrop-blur-sm overflow-hidden">
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider mb-4">
                <Users size={14} className="text-purple-500" />
                <span>Impacto no trabalho</span>
              </div>
              <p className="text-4xl font-bold text-white font-display mb-1">41-61%</p>
              <p className="text-slate-400 text-sm mb-5">do código novo é gerado por IA</p>
              <div className="bg-purple-950/40 border border-purple-500/20 rounded-xl p-4">
                <p className="text-purple-300/90 text-xs leading-relaxed">
                  <strong className="text-purple-200 block mb-1">Caso Klarna:</strong>
                  5.500 → 2.900 funcionários
                  <span className="text-purple-400 font-bold block mt-1">+152% receita/pessoa</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* The Meta Statement - Elevated */}
        <div className={`max-w-3xl mx-auto pt-8 transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative group">
            {/* Animated border gradient */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative bg-black/40 border border-white/[0.06] rounded-xl p-5 md:p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1 h-full min-h-[60px] bg-gradient-to-b from-cyan-500/50 to-purple-500/50 rounded-full" />
                <div>
                  <span className="text-cyan-400/80 font-mono text-[10px] uppercase tracking-[0.2em] block mb-2">// Nota de transparência</span>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    Este dossiê foi co-criado por humano e IA. Você está lendo um documento sobre inteligência artificial, parcialmente escrito por inteligência artificial, documentando o momento em que a inteligência artificial mudou tudo. <span className="text-slate-300">A ironia é intencional.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-1500 ${showContent ? 'opacity-60' : 'opacity-0'}`}>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-5 h-5 text-slate-500 animate-bounce" />
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-cyan-400/20 blur-sm" />
    </section>
  );
};

export default Hero;

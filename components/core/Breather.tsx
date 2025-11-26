/**
 * Breather Component
 *
 * Momentos de respiração entre atos do dossiê.
 * Dá tempo ao cérebro de processar informação densa.
 *
 * "A pausa é tão importante quanto a nota." — Jobs
 * "O espaço em branco é o luxo do design." — Frost
 */

import React, { useEffect, useRef, useState } from 'react';
import { BreatherConfig } from '../../lib/theme';

interface BreatherProps extends BreatherConfig {
  className?: string;
}

const Breather: React.FC<BreatherProps> = ({
  type,
  content,
  author,
  stat,
  statLabel,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Quote: Full-width citação dramática
  if (type === 'quote') {
    return (
      <div
        ref={ref}
        className={`
          relative min-h-[60vh] flex items-center justify-center
          bg-[#020408]
          ${className}
        `}
      >
        {/* Atmospheric layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top/bottom gradients */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050b14] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050b14] to-transparent" />

          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full" />

          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          {/* Quote mark decorative */}
          <div
            className={`
              mb-8 transition-all duration-1000
              ${isVisible ? 'opacity-20 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}
          >
            <span className="text-6xl md:text-8xl font-serif text-cyan-400/30 select-none">"</span>
          </div>

          <blockquote
            className={`
              text-2xl md:text-4xl lg:text-5xl text-white/95 font-light leading-[1.3] tracking-tight
              transition-all duration-1000 delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            {content}
          </blockquote>

          {author && (
            <cite
              className={`
                block mt-10 text-sm md:text-base text-slate-500 font-mono uppercase tracking-[0.2em] not-italic
                transition-all duration-1000 delay-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              — {author}
            </cite>
          )}
        </div>

        {/* Bottom decorative line */}
        <div
          className={`
            absolute bottom-16 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent
            transition-all duration-1000 delay-700
            ${isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'}
          `}
        />
      </div>
    );
  }

  // Stat: Número gigante impactante
  if (type === 'stat') {
    return (
      <div
        ref={ref}
        className={`
          relative min-h-[70vh] flex flex-col items-center justify-center
          bg-[#020408]
          ${className}
        `}
      >
        {/* Atmospheric layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top/bottom gradients */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050b14] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050b14] to-transparent" />

          {/* Multi-layer glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/8 blur-[150px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        </div>

        <div className="relative z-10 text-center px-4">
          {/* Giant number */}
          <span
            className={`
              block text-[10rem] md:text-[14rem] lg:text-[18rem] font-display font-black leading-none select-none
              text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/5
              transition-all duration-[1500ms]
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            {stat}
          </span>

          {/* Glow behind text */}
          <div
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              text-[10rem] md:text-[14rem] lg:text-[18rem] font-display font-black leading-none
              text-emerald-400/10 blur-xl -z-10
              transition-all duration-[1500ms]
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            aria-hidden="true"
          >
            {stat}
          </div>

          {statLabel && (
            <p
              className={`
                mt-8 text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light
                transition-all duration-1000 delay-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              {statLabel}
            </p>
          )}
        </div>

        {/* Bottom line */}
        <div
          className={`
            absolute bottom-20 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-emerald-500/30 to-transparent
            transition-all duration-1000 delay-700
            ${isVisible ? 'h-16 opacity-100' : 'h-0 opacity-0'}
          `}
        />
      </div>
    );
  }

  // Visual: Gradiente animado / pattern - Momento contemplativo
  if (type === 'visual') {
    return (
      <div
        ref={ref}
        className={`
          relative h-[50vh] overflow-hidden bg-[#020408]
          ${className}
        `}
      >
        {/* Top/bottom gradients */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050b14] to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050b14] to-transparent z-10" />

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Floating orbs with animation */}
        <div
          className={`
            absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full
            transition-all duration-[2000ms]
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `}
          style={{ animation: isVisible ? 'pulse 4s ease-in-out infinite' : 'none' }}
        />
        <div
          className={`
            absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full
            transition-all duration-[2000ms] delay-500
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `}
          style={{ animation: isVisible ? 'pulse 4s ease-in-out infinite 1s' : 'none' }}
        />
        <div
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full
            transition-all duration-[2000ms] delay-1000
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `}
        />

        {/* Central line */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`
              bg-gradient-to-b from-transparent via-white/10 to-transparent
              transition-all duration-[1500ms]
              ${isVisible ? 'w-px h-2/3 opacity-100' : 'w-px h-0 opacity-0'}
            `}
          />
        </div>

        {/* Central dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`
              w-3 h-3 rounded-full bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)]
              transition-all duration-1000 delay-500
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            `}
          />
        </div>
      </div>
    );
  }

  // Silence: Espaço vazio intencional - Momento de processamento
  if (type === 'silence') {
    return (
      <div
        ref={ref}
        className={`
          relative h-[40vh] bg-[#020408]
          ${className}
        `}
      >
        {/* Top/bottom gradients */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#1a0a0a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050b14] to-transparent" />

        {/* Very subtle atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-orange-500/3 blur-[100px] rounded-full" />

        {/* Minimal central element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            {/* Breathing dot */}
            <div
              className={`
                w-2 h-2 rounded-full bg-white/10
                transition-all duration-[1500ms]
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
              `}
              style={{ animation: isVisible ? 'pulse 3s ease-in-out infinite' : 'none' }}
            />

            {/* Subtle text */}
            <span
              className={`
                text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em]
                transition-all duration-1000 delay-500
                ${isVisible ? 'opacity-40' : 'opacity-0'}
              `}
            >
              ...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Breather;

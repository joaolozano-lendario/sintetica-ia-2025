/**
 * ACCESS GATE - Portal de Entrada
 *
 * "A exclusividade cria desejo." — Schwartz
 * "O primeiro frame define a experiência." — Jobs
 *
 * Senha: 8888 (prosperidade infinita)
 */

import React, { useState, useEffect, useRef } from 'react';

interface AccessGateProps {
  onUnlock: () => void;
}

const ACCESS_CODE = '8888';

const AccessGate: React.FC<AccessGateProps> = ({ onUnlock }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Check code when all digits filled
  useEffect(() => {
    const enteredCode = code.join('');
    if (enteredCode.length === 4) {
      if (enteredCode === ACCESS_CODE) {
        setSuccess(true);
        setTimeout(() => {
          onUnlock();
        }, 1000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
          setCode(['', '', '', '']);
          inputRefs.current[0]?.focus();
        }, 800);
      }
    }
  }, [code, onUnlock]);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4);
    if (/^\d{1,4}$/.test(pastedData)) {
      const newCode = [...code];
      pastedData.split('').forEach((digit, i) => {
        if (i < 4) newCode[i] = digit;
      });
      setCode(newCode);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030810]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030810] via-[#050b14] to-[#030810]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 blur-[200px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/5 blur-[150px] rounded-full" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

      {/* Content */}
      <div
        className={`
          relative z-10 text-center px-6 transition-all duration-700
          ${success ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}
        `}
      >
        {/* Brand */}
        <p className="text-xs font-mono text-cyan-500/50 uppercase tracking-[0.4em] mb-8">
          Academia Lendária
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
          SINTÉTICA
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            2025
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-white/40 text-sm md:text-base mb-12 max-w-md mx-auto">
          Acesso exclusivo. Insira o código para continuar.
        </p>

        {/* Code Input */}
        <div className="flex justify-center gap-3 md:gap-4 mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`
                w-14 h-16 md:w-16 md:h-20 text-center text-2xl md:text-3xl font-display font-bold
                bg-white/5 border-2 rounded-xl outline-none
                transition-all duration-300
                ${error
                  ? 'border-red-500/50 text-red-400 animate-shake'
                  : success
                    ? 'border-emerald-500/50 text-emerald-400'
                    : digit
                      ? 'border-cyan-500/50 text-white'
                      : 'border-white/10 text-white/80 focus:border-cyan-500/30'
                }
              `}
            />
          ))}
        </div>

        {/* Error Message */}
        <div className={`h-6 transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-red-400/80 text-sm">Código incorreto. Tente novamente.</p>
        </div>

        {/* Success Message */}
        <div className={`h-6 transition-opacity duration-300 ${success ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-emerald-400 text-sm font-medium">Acesso liberado. Bem-vindo ao futuro.</p>
        </div>

        {/* Hint */}
        <p className="mt-12 text-white/20 text-xs font-mono">
          "O número da prosperidade infinita"
        </p>
      </div>

      {/* Custom shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AccessGate;

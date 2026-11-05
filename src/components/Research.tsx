import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { RESEARCH_DATA } from '../data/mapiarData';

interface ResearchProps {
  onContactClick: (serviceName?: string) => void;
}

export const Research: React.FC<ResearchProps> = ({ onContactClick }) => {
  return (
    <section id="pesquisa" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background radial accent & grid */}
      <div className="absolute inset-0 bg-agro-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Scientific Research Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-lime-400/30 text-xs font-mono font-bold text-lime-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{RESEARCH_DATA.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
              COMPROVAÇÃO CIENTÍFICA DE <span className="text-lime-400">EFICÁCIA</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              {RESEARCH_DATA.description}
            </p>

            <ul className="space-y-3 pt-2">
              {RESEARCH_DATA.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onContactClick('Pesquisa · Eficácia de Defensivos')}
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 rounded-xl shadow-xl shadow-lime-500/20 hover:shadow-lime-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Quero um Ensaio-Piloto</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                <span>Laudo com ART e Delineamento Oficial</span>
              </div>
            </div>

            {/* Scientific Validation Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              {RESEARCH_DATA.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-neutral-900 border border-emerald-900/80 px-3.5 py-1.5 rounded-lg text-xs font-medium text-neutral-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Comparative Scientific Graphic with Tech Finish (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-emerald-900/60 bg-neutral-900/90 backdrop-blur-md p-5 group hover:border-lime-400/40 transition-colors">
              <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
                <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-wider">
                  Delineamento Espectral NDVI
                </span>
                <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                  Calibração Radiométrica
                </span>
              </div>

              <svg
                viewBox="0 0 420 300"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto block"
              >
                <rect width="420" height="300" rx="12" fill="#04150e" />
                
                {/* Axes */}
                <g stroke="#0f3d27" strokeWidth="1.5">
                  <line x1="50" y1="30" x2="50" y2="250" />
                  <line x1="50" y1="250" x2="390" y2="250" />
                  <line x1="50" y1="110" x2="390" y2="110" stroke="#082d1c" strokeDasharray="3 3" />
                  <line x1="50" y1="180" x2="390" y2="180" stroke="#082d1c" strokeDasharray="3 3" />
                </g>

                {/* Com Produto Curve (Lime/High vigor NDVI) */}
                <polyline
                  points="50,110 135,114 220,118 305,122 380,126"
                  fill="none"
                  stroke="#84cc16"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Testemunha Curve (Decay NDVI) */}
                <polyline
                  points="50,114 135,145 220,185 305,215 380,235"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Labels */}
                <text x="65" y="100" fill="#84cc16" fontSize="14" fontFamily="sans-serif" fontWeight="bold">
                  Com produto (Vigor Sustentado)
                </text>
                <text x="210" y="230" fill="#f59e0b" fontSize="14" fontFamily="sans-serif" fontWeight="bold">
                  Testemunha (Degradação)
                </text>
                <text x="50" y="280" fill="#64748b" fontSize="11" fontFamily="sans-serif">
                  dias após a aplicação (tempo fenológico) →
                </text>
                <text x="200" y="22" fill="#f8fafc" fontSize="13" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                  Curva de Resposta de Vigor Vegetativo
                </text>
              </svg>

              <div className="mt-4 pt-3 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                <span>Tratado × Testemunha</span>
                <span className="text-lime-400 font-mono font-semibold">Significância p &lt; 0.05</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

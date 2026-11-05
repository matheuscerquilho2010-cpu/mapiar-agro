import React from 'react';
import { ArrowUpRight, Cpu, Leaf, Compass, ShieldCheck } from 'lucide-react';
import { ABOUT_STATS, COMPANY_INFO } from '../data/mapiarData';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section id="sobre" className="py-24 bg-[#03140c] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Institutional Text & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-lime-400 uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                <span>Quem Faz · Engenharia Agronômica + Tecnologia</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance leading-tight">
                A MODERNIDADE PRESENTE NO <span className="text-lime-400">AGRO</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              <p>
                A <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> — <i>{COMPANY_INFO.concept}</i> — une drone, imagens multiespectrais e método próprio para transformar a lavoura em dado confiável.
              </p>
              <p>
                Todo trabalho tem o respaldo técnico de um Engenheiro Agrônomo, com laudo e ART (Anotação de Responsabilidade Técnica) quando o serviço exige.
              </p>
              <p className="text-neutral-400">
                Garantimos precisão milimétrica para o piloto automático, zoneamento de taxas variáveis e dados comparáveis cientificamente safra a safra.
              </p>
            </div>

            {/* 3 Core Value Pillars matching DroneBox and reference HTML */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-lime-400/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-950 flex items-center justify-center text-lime-400 mb-3 border border-emerald-800/40">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1">
                  {ABOUT_STATS[0].value}
                </h3>
                <p className="text-xs text-neutral-400">
                  {ABOUT_STATS[0].label}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-lime-400/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-950 flex items-center justify-center text-lime-400 mb-3 border border-emerald-800/40">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1">
                  {ABOUT_STATS[1].value}
                </h3>
                <p className="text-xs text-neutral-400">
                  {ABOUT_STATS[1].label}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-lime-400/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-950 flex items-center justify-center text-lime-400 mb-3 border border-emerald-800/40">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1">
                  {ABOUT_STATS[2].value}
                </h3>
                <p className="text-xs text-neutral-400">
                  {ABOUT_STATS[2].label}
                </p>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 rounded-xl shadow-lg shadow-lime-500/20 hover:shadow-lime-400/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Fale Conosco</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <span>Atendimento agronômico em todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* Column 2: Photography & Tech Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800/50 shadow-2xl bg-neutral-900 group">
              <div className="w-full aspect-4/3 bg-gradient-to-br from-emerald-950 to-neutral-950" />

              <img
                src="/src/assets/images/mapiar_about_geotech_1793886340983.jpg"
                alt="Engenheiro Agrônomo da MapIar com drone e base RTK em campo"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-emerald-900/60 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase text-lime-400 font-semibold tracking-wider">
                    Engenharia Agronômica
                  </div>
                  <div className="text-xs text-neutral-300 mt-0.5">
                    Responsabilidade técnica com emissão de ART
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-emerald-950 border border-lime-400/30 flex items-center justify-center shrink-0 text-lime-400 font-mono text-xs font-bold">
                  CREA
                </div>
              </div>
            </div>

            {/* Back glow decoration */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl border border-lime-400/20 bg-lime-500/5" />
          </div>

        </div>
      </div>
    </section>
  );
};

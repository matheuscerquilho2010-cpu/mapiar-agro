import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Compass, Droplets } from 'lucide-react';
import roboImg from '../assets/images/robo_agricultor.png';
import heroDroneImg from '../assets/images/mapiar_hero_drone_survey_1793886340679.jpg';

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onServicesClick }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-[#03140c]"
    >
      {/* Background Photography with Scrim Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fallback stylized gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-[#03140c] to-[#03140c]" />
        
        {/* Cinematic Agricultural Drone Photography */}
        <img
          src={heroDroneImg}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/assets/images/mapiar_hero_drone_survey_1793886340679.jpg';
          }}
          alt="Drone profissional sobrevoando lavoura com curvas de nível e geotecnologia MapIar"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          loading="eager"
        />

        {/* Multi-layered measured scrim for extreme contrast & depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03140c] via-[#03140c]/75 to-[#03140c]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03140c]/90 via-[#03140c]/55 to-transparent" />
        
        {/* DroneBox Agro Grid */}
        <div className="absolute inset-0 bg-agro-grid opacity-30 pointer-events-none" />

        {/* Subtle tech ambient radial light */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Eyebrow - DroneBox Style Clean Tech Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-xs font-semibold text-lime-400 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_#84cc16]" />
              <span className="font-mono text-[11px] tracking-wider uppercase">AGRICULTURA DE PRECISÃO & GEOTECNOLOGIA</span>
              <span className="text-emerald-500 hidden sm:inline">·</span>
              <span className="text-neutral-300 font-mono text-[10px] hidden sm:inline">CREA/ART HABILITADO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display text-balance mb-6">
              DO VOO AO DADO QUE DECIDE A SUA{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400">
                LAVOURA
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
              Mapeamento, restituição de linhas para o piloto automático, acompanhamento por imagens multiespectrais e comprovação científica de eficácia — com drone e a assinatura de um Engenheiro Agrônomo.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => onContactClick()}
                className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 rounded-xl shadow-xl shadow-lime-500/25 hover:shadow-lime-400/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onServicesClick}
                className="px-7 py-4 text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/80 hover:border-lime-400/50 rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conheça Nossas Soluções</span>
                <Compass className="w-4 h-4 text-lime-400" />
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-neutral-800 text-xs sm:text-sm text-neutral-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Piloto Automático RTK</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Taxa Variável & NDVI</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Laudo Técnico com ART</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Mascot with Tech Glow Effect (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-8 lg:mt-0">
            {/* Ambient pulsing radial green aura */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-lime-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

            <div className="relative flex flex-col items-center">
              
              {/* Floating Tech Speech Bubble */}
              <div className="mb-4 px-4 py-2 rounded-2xl bg-neutral-900/95 border border-lime-400/40 shadow-xl backdrop-blur-md flex items-center gap-2.5 transition-all transform hover:scale-105">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                <span className="text-xs font-mono font-bold text-lime-400">MapIar Bot</span>
                <span className="text-neutral-500">·</span>
                <span className="text-xs text-neutral-200 font-medium">IA & Geotecnologia no Campo 🌱</span>
              </div>

              {/* Floating Robot Mascot Image */}
              <div className="relative animate-float-hero group cursor-pointer" onClick={() => onContactClick()}>
                <img
                  src={roboImg}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/images/robo_agricultor.png';
                  }}
                  alt="Robô Agricultor com Chapéu de Palha MapIar"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] object-contain filter drop-shadow-[0_20px_35px_rgba(132,204,22,0.35)] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Simulated Floating Ground Shadow */}
                <div className="w-44 sm:w-56 h-6 bg-black/60 rounded-full blur-md mx-auto -mt-4 animate-float-shadow pointer-events-none" />
              </div>

              {/* Floating Capability Tag */}
              <div className="mt-4 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-lime-400/30 text-[11px] font-mono text-neutral-300 flex items-center gap-2 shadow-lg backdrop-blur-sm">
                <span className="text-lime-400 font-bold">Mascote Oficial</span>
                <span className="text-neutral-500">·</span>
                <span>Agricultura de Precisão</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1">Role para explorar</span>
        <ChevronDown className="w-4 h-4 text-lime-400 animate-bounce" />
      </div>
    </section>
  );
};

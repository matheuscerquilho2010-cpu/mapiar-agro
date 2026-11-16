import React, { useState, useEffect } from 'react';
import { Compass, Radio, Zap, Shield, ChevronRight } from 'lucide-react';

interface IntroDroneProps {
  onComplete: () => void;
}

export const IntroDrone: React.FC<IntroDroneProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'entering' | 'hovering' | 'departing' | 'done'>('entering');
  const [telemetryText, setTelemetryText] = useState('LOCALIZANDO SINAL RTK GNSS...');
  const [altitude, setAltitude] = useState(12);
  const [speed, setSpeed] = useState(4.2);

  useEffect(() => {
    // Phase 1 -> Hovering at center
    const t1 = setTimeout(() => {
      setPhase('hovering');
      setTelemetryText('CARGA IDENTIFICADA: MAPIAR · ROTA TRAÇADA');
      setAltitude(45);
      setSpeed(0.5);
    }, 1100);

    // Telemetry update during hovering
    const t2 = setTimeout(() => {
      setTelemetryText('PROPULSORES EM POTÊNCIA MÁXIMA · DECOLAGEM AUTÔNOMA');
      setSpeed(18.4);
      setAltitude(62);
    }, 2400);

    // Phase 2 -> Departing into the horizon
    const t3 = setTimeout(() => {
      setPhase('departing');
      setTelemetryText('MISSIO COMPLETA · DESTINO: CAMPO AGRO 🌾');
      setAltitude(180);
      setSpeed(48.6);
    }, 2800);

    // Phase 3 -> Fade out and finish
    const t4 = setTimeout(() => {
      setPhase('done');
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('done');
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#03140c] overflow-hidden flex flex-col items-center justify-center transition-opacity duration-700 select-none ${
        phase === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Agro Precision Grid & Radar */}
      <div className="absolute inset-0 bg-agro-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03140c] via-transparent to-[#03140c] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03140c]/80 via-transparent to-[#03140c]/80 pointer-events-none" />

      {/* Ambient radar circular rings in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-lime-500/10 rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-lime-500/15 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-lime-500/20 rounded-full pointer-events-none" />

      {/* Top HUD Telemetry Header */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-neutral-400 pointer-events-none z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-lime-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
            <span className="text-lime-400 font-bold">MAPIAR FLIGHT-OS</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/60 border border-neutral-800 backdrop-blur-sm text-[11px]">
            <Radio className="w-3.5 h-3.5 text-lime-400" />
            <span>RTK FIX · 34 SATS</span>
          </div>
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-lime-400 border border-neutral-800 hover:border-lime-500/40 transition-all text-xs font-medium cursor-pointer shadow-lg active:scale-95"
        >
          <span>Pular Intro</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Central Drone + Attached Logo Assemblage */}
      <div
        className={`relative flex flex-col items-center justify-center transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) ${
          phase === 'entering'
            ? '-translate-y-[120vh] scale-75 opacity-20'
            : phase === 'hovering'
            ? 'translate-y-0 scale-100 opacity-100 animate-intro-drone-hover'
            : phase === 'departing'
            ? '-translate-y-[140vh] translate-x-[40vw] scale-25 rotate-12 opacity-0'
            : 'scale-0 opacity-0'
        }`}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Downward Rotor Wind Rings */}
        <div className="absolute -bottom-16 w-80 h-24 pointer-events-none">
          <div className="absolute inset-0 bg-radial from-lime-400/20 via-transparent to-transparent rounded-full blur-xl animate-pulse" />
          <div className="w-64 h-12 mx-auto border border-lime-400/20 rounded-full animate-ping opacity-30" />
        </div>

        {/* 1. Quadcopter Drone SVG Graphics */}
        <div className="relative w-80 sm:w-96 h-40 flex items-center justify-center filter drop-shadow-[0_15px_30px_rgba(132,204,22,0.35)]">
          <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
            <defs>
              {/* Drone Body Gradient */}
              <linearGradient id="droneBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="laserGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(132, 204, 22, 0.8)" />
                <stop offset="100%" stopColor="rgba(132, 204, 22, 0.05)" />
              </linearGradient>
              {/* Cable Glow */}
              <linearGradient id="cableGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="50%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#a3e635" />
              </linearGradient>
            </defs>

            {/* Scanning Radar Laser Beam down towards cargo */}
            <polygon
              points="190,120 210,120 260,200 140,200"
              fill="url(#laserGlow)"
              className="animate-pulse"
              opacity="0.4"
            />

            {/* Left Rear Arm & Motor */}
            <line x1="160" y1="95" x2="60" y2="45" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
            <circle cx="60" cy="45" r="14" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            {/* Spinning Rotor Disc Left Rear */}
            <ellipse cx="60" cy="45" rx="50" ry="12" fill="rgba(132, 204, 22, 0.25)" stroke="rgba(163, 230, 53, 0.6)" strokeWidth="1.5" className="animate-spin-propeller origin-[60px_45px]" />

            {/* Right Rear Arm & Motor */}
            <line x1="240" y1="95" x2="340" y2="45" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
            <circle cx="340" cy="45" r="14" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            {/* Spinning Rotor Disc Right Rear */}
            <ellipse cx="340" cy="45" rx="50" ry="12" fill="rgba(132, 204, 22, 0.25)" stroke="rgba(163, 230, 53, 0.6)" strokeWidth="1.5" className="animate-spin-propeller origin-[340px_45px]" />

            {/* Left Front Arm & Motor */}
            <line x1="165" y1="105" x2="80" y2="135" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
            <circle cx="80" cy="135" r="16" fill="#020617" stroke="#84cc16" strokeWidth="2" />
            {/* Navigation LED Left Front (Green) */}
            <circle cx="80" cy="135" r="4" fill="#84cc16" className="animate-ping" />
            {/* Spinning Rotor Disc Left Front */}
            <ellipse cx="80" cy="135" rx="60" ry="14" fill="rgba(132, 204, 22, 0.3)" stroke="rgba(163, 230, 53, 0.8)" strokeWidth="2" className="animate-spin-propeller origin-[80px_135px]" />

            {/* Right Front Arm & Motor */}
            <line x1="235" y1="105" x2="320" y2="135" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
            <circle cx="320" cy="135" r="16" fill="#020617" stroke="#ef4444" strokeWidth="2" />
            {/* Navigation LED Right Front (Red) */}
            <circle cx="320" cy="135" r="4" fill="#ef4444" className="animate-ping" />
            {/* Spinning Rotor Disc Right Front */}
            <ellipse cx="320" cy="135" rx="60" ry="14" fill="rgba(132, 204, 22, 0.3)" stroke="rgba(163, 230, 53, 0.8)" strokeWidth="2" className="animate-spin-propeller origin-[320px_135px]" />

            {/* Main Aerodynamic Drone Body Fuselage */}
            <path
              d="M 170,70 L 230,70 L 255,98 L 245,122 L 200,132 L 155,122 L 145,98 Z"
              fill="url(#droneBody)"
              stroke="#84cc16"
              strokeWidth="2.5"
            />

            {/* Carbon Fiber Accent Canopy */}
            <polygon points="175,76 225,76 240,96 200,104 160,96" fill="#020617" stroke="#334155" strokeWidth="1.5" />
            <line x1="200" y1="76" x2="200" y2="104" stroke="#84cc16" strokeWidth="2" />

            {/* Front Gimbal Camera 4K Lens */}
            <circle cx="200" cy="120" r="10" fill="#090d16" stroke="#4ade80" strokeWidth="2" />
            <circle cx="200" cy="120" r="4" fill="#84cc16" className="animate-pulse" />

            {/* RTK / GNSS Antenna Dome on top */}
            <ellipse cx="200" cy="68" rx="14" ry="5" fill="#f8fafc" stroke="#84cc16" strokeWidth="1.5" />
            <circle cx="200" cy="65" r="2.5" fill="#84cc16" />

            {/* Cargo Suspension Winch Hooks */}
            <circle cx="175" cy="128" r="4" fill="#84cc16" />
            <circle cx="225" cy="128" r="4" fill="#84cc16" />

            {/* Glowing Suspension Cables holding the Logo */}
            <line x1="175" y1="130" x2="160" y2="195" stroke="url(#cableGrad)" strokeWidth="2.5" strokeDasharray="4 2" className="animate-pulse" />
            <line x1="225" y1="130" x2="240" y2="195" stroke="url(#cableGrad)" strokeWidth="2.5" strokeDasharray="4 2" className="animate-pulse" />
          </svg>
        </div>

        {/* 2. Carried MapIar Logo Card */}
        <div className="relative mt-2 flex flex-col items-center">
          {/* Cable connection clips on top of the logo */}
          <div className="w-48 flex justify-between px-6 -mb-2 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 border border-white shadow-[0_0_8px_#84cc16]" />
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 border border-white shadow-[0_0_8px_#84cc16]" />
          </div>

          {/* Logo container with high-tech badge styling */}
          <div className="relative group px-6 py-4 rounded-2xl bg-[#03140c]/90 border border-lime-400/60 shadow-[0_12px_45px_rgba(132,204,22,0.35)] backdrop-blur-xl flex flex-col items-center">
            {/* Shimmer Light Sweep Effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-lime-400/20 to-transparent -translate-x-full animate-intro-shimmer" />
            </div>

            {/* Official Logo Image */}
            <img
              src="https://i.ibb.co/Lz2rZTMs/Sem-t-tulo-2.png"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/logo-topo.png';
              }}
              alt="MapIar - A Inteligência Artificial do Agro"
              className="h-14 sm:h-16 md:h-20 w-auto max-w-[260px] sm:max-w-[320px] object-contain filter drop-shadow-[0_4px_16px_rgba(132,204,22,0.4)]"
            />

            {/* Mission Subtitle */}
            <div className="mt-2 flex items-center gap-2 text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-lime-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
              <span>Inteligência Aérea & Geotecnologia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Status Bar */}
      <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center justify-center text-center pointer-events-none z-10">
        <div className="flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-2xl bg-neutral-900/90 border border-emerald-900/60 backdrop-blur-md shadow-2xl text-xs font-mono text-neutral-300">
          <div className="flex items-center gap-1.5 text-lime-400">
            <Compass className="w-3.5 h-3.5" />
            <span>ALT: {altitude}m</span>
          </div>
          <span className="text-neutral-600">|</span>
          <div className="flex items-center gap-1.5 text-lime-400">
            <Zap className="w-3.5 h-3.5" />
            <span>VEL: {speed} km/h</span>
          </div>
          <span className="text-neutral-600">|</span>
          <div className="hidden sm:flex items-center gap-1.5 text-neutral-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>STATUS: {phase === 'departing' ? 'VOANDO AO DESTINO' : 'SISTEMA SEGURO'}</span>
          </div>
        </div>

        {/* Dynamic Telemetry Status line */}
        <p className="mt-3 text-[11px] font-mono tracking-widest text-lime-400/90 uppercase animate-pulse">
          {telemetryText}
        </p>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden border border-neutral-700">
          <div
            className={`h-full bg-gradient-to-r from-lime-500 to-emerald-400 rounded-full transition-all duration-700 ${
              phase === 'entering'
                ? 'w-1/4'
                : phase === 'hovering'
                ? 'w-3/4'
                : 'w-full'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

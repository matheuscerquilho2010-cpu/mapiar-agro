import React, { useState, useEffect, useRef } from 'react';
import { Map, Layers, ShieldCheck, Crosshair, Settings, RotateCcw, Check, X } from 'lucide-react';
import { INDICATORS } from '../data/mapiarData';

export const Indicators: React.FC = () => {
  const [indicators, setIndicators] = useState(() => {
    try {
      const saved = localStorage.getItem('mapiar_indicators');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INDICATORS;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempIndicators, setTempIndicators] = useState(indicators);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentCounts, setCurrentCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextCounts = indicators.map((item: any) => Math.round(item.value * easeOut));
      setCurrentCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentCounts(indicators.map((item: any) => item.value));
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, indicators]);

  const handleSaveIndicators = (e: React.FormEvent) => {
    e.preventDefault();
    setIndicators(tempIndicators);
    try {
      localStorage.setItem('mapiar_indicators', JSON.stringify(tempIndicators));
    } catch {
      // ignore
    }
    setIsEditing(false);
    setHasAnimated(false);
    setTimeout(() => setHasAnimated(true), 50);
  };

  const handleResetDefaults = () => {
    setTempIndicators(INDICATORS);
    setIndicators(INDICATORS);
    try {
      localStorage.removeItem('mapiar_indicators');
    } catch {
      // ignore
    }
    setIsEditing(false);
    setHasAnimated(false);
    setTimeout(() => setHasAnimated(true), 50);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Map':
        return <Map className="w-5 h-5 text-lime-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-lime-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-lime-400" />;
      case 'Crosshair':
      default:
        return <Crosshair className="w-5 h-5 text-lime-400" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Indicadores da Empresa"
    >
      <div className="bg-neutral-900/95 border border-emerald-900/60 rounded-2xl shadow-2xl backdrop-blur-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-72 h-32 bg-lime-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-800/80 gap-3">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-lime-400 uppercase font-semibold">
              Desempenho & Acurácia Técnica
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Indicadores de Precisão MapIar
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setTempIndicators(indicators);
                setIsEditing(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors cursor-pointer"
              title="Ajustar números dos indicadores"
            >
              <Settings className="w-3.5 h-3.5 text-lime-400" />
              <span>Configurar Valores</span>
            </button>
          </div>
        </div>

        {/* 4 Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((item: any, index: number) => {
            const countValue = currentCounts[index] ?? 0;
            const formatted = countValue >= 1000 ? countValue.toLocaleString('pt-BR') : countValue;

            return (
              <div
                key={item.id}
                className="flex flex-col p-5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-lime-400/40 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                    {item.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mb-2 group-hover:text-lime-400 transition-colors">
                  {item.prefix || ''}
                  {formatted}
                  {item.suffix}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Edit Indicators Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-neutral-900 border border-emerald-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Configurar Indicadores da Empresa
                </h3>
                <p className="text-xs text-neutral-400">
                  Altere os valores numéricos dos indicadores exibidos no site.
                </p>
              </div>
              <button
                onClick={() => setIsEditing(false)}
                className="p-1 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveIndicators} className="space-y-4">
              {tempIndicators.map((item: any, idx: number) => (
                <div key={item.id} className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center bg-neutral-950/60 p-3 rounded-xl border border-neutral-800">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-neutral-300 block mb-1">
                      {item.label}
                    </label>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => {
                        const updated = [...tempIndicators];
                        updated[idx].description = e.target.value;
                        setTempIndicators(updated);
                      }}
                      className="w-full text-xs bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-neutral-300 focus:outline-none focus:border-lime-400"
                      placeholder="Descrição breve"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1">
                      Valor ({item.suffix || 'num'})
                    </label>
                    <input
                      type="number"
                      value={item.value}
                      onChange={(e) => {
                        const updated = [...tempIndicators];
                        updated[idx].value = parseInt(e.target.value, 10) || 0;
                        setTempIndicators(updated);
                      }}
                      className="w-full text-sm font-mono bg-neutral-900 border border-neutral-700 rounded px-2.5 py-1 text-white focus:outline-none focus:border-lime-400"
                    />
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restaurar Padrão</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-lg hover:bg-neutral-700"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-lime-400 hover:bg-lime-300 rounded-lg shadow-md cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Salvar Alterações</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

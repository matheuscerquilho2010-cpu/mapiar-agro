import React, { useState } from 'react';
import { Maximize2, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { DELIVERABLE_EXAMPLES } from '../data/mapiarData';
import { DeliverableExample } from '../types';

interface GalleryProps {
  onContactClick: (serviceName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onContactClick }) => {
  const [selectedExample, setSelectedExample] = useState<DeliverableExample | null>(null);

  return (
    <section id="galeria" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background radial accent & tech grid */}
      <div className="absolute inset-0 bg-agro-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-lime-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            <span>Exemplos Reais · Entregáveis Prontos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            O QUE <span className="text-lime-400">ENTREGAMOS</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Formatos padronizados e prontos para importar na máquina ou abrir no celular e no computador: SHP, KML, GeoTIFF e relatórios em PDF com ART.
          </p>
        </div>

        {/* 4 Core Deliverable Tiles in DroneBox Dark Card Aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tile 1: Restituição de Linhas */}
          <div
            onClick={() => setSelectedExample(DELIVERABLE_EXAMPLES[0])}
            className="bg-neutral-900/90 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400/50 transition-all duration-300 group flex flex-col cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-lime-500/10 justify-between"
          >
            <div>
              <div className="relative h-[200px] bg-[#0c1a10] flex items-center justify-center overflow-hidden border-b border-neutral-800">
                <svg viewBox="0 0 300 180" className="w-full h-full block">
                  <rect width="300" height="180" fill="#081b10" />
                  <g stroke="#84cc16" strokeWidth="4" opacity=".8" fill="none">
                    <path d="M0 35 Q150 20 300 40" />
                    <path d="M0 70 Q150 55 300 75" />
                    <path d="M0 105 Q150 90 300 110" />
                    <path d="M0 140 Q150 125 300 145" />
                  </g>
                  <g stroke="#f59e0b" strokeWidth="2.5" fill="none" strokeDasharray="6 4">
                    <path d="M0 35 Q150 20 300 40" />
                    <path d="M0 70 Q150 55 300 75" />
                    <path d="M0 105 Q150 90 300 110" />
                    <path d="M0 140 Q150 125 300 145" />
                  </g>
                </svg>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-neutral-950/80 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-lime-400 group-hover:border-lime-400 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] font-mono uppercase bg-neutral-950/90 text-lime-400 px-2 py-0.5 rounded border border-lime-400/30">
                    SHP / KML / ISOXML
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-bold text-white font-display mb-1.5 group-hover:text-lime-400 transition-colors">
                  Restituição de Linhas
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Linhas georreferenciadas prontas para o piloto automático do trator.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <span className="text-xs font-mono font-semibold text-lime-400 group-hover:underline inline-flex items-center gap-1">
                Ver ortomosaico real
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Tile 2: Mapa NDVI */}
          <div
            onClick={() => setSelectedExample(DELIVERABLE_EXAMPLES[1])}
            className="bg-neutral-900/90 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400/50 transition-all duration-300 group flex flex-col cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-lime-500/10 justify-between"
          >
            <div>
              <div className="relative h-[200px] bg-[#0c1a10] flex items-center justify-center overflow-hidden border-b border-neutral-800">
                <svg viewBox="0 0 300 180" className="w-full h-full block">
                  <defs>
                    <linearGradient id="ndviDark" x1="0" x2="1">
                      <stop offset="0" stopColor="#ef4444" />
                      <stop offset=".45" stopColor="#f59e0b" />
                      <stop offset="1" stopColor="#84cc16" />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="180" fill="url(#ndviDark)" opacity=".8" />
                  <ellipse cx="85" cy="85" rx="55" ry="42" fill="#ef4444" opacity=".6" />
                  <ellipse cx="215" cy="75" rx="65" ry="48" fill="#84cc16" opacity=".6" />
                </svg>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-neutral-950/80 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-lime-400 group-hover:border-lime-400 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] font-mono uppercase bg-neutral-950/90 text-lime-400 px-2 py-0.5 rounded border border-lime-400/30">
                    Multiespectral NDVI
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-bold text-white font-display mb-1.5 group-hover:text-lime-400 transition-colors">
                  Mapa NDVI & NDRE
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Vigor e estresse hídrico/nutricional da lavoura mapeados por cor.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <span className="text-xs font-mono font-semibold text-lime-400 group-hover:underline inline-flex items-center gap-1">
                Ver mapa multiespectral
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Tile 3: Talhões Delimitados */}
          <div
            onClick={() => setSelectedExample(DELIVERABLE_EXAMPLES[2])}
            className="bg-neutral-900/90 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400/50 transition-all duration-300 group flex flex-col cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-lime-500/10 justify-between"
          >
            <div>
              <div className="relative h-[200px] bg-[#0c1a10] flex items-center justify-center overflow-hidden border-b border-neutral-800">
                <svg viewBox="0 0 300 180" className="w-full h-full block">
                  <rect width="300" height="180" fill="#081e13" />
                  <path d="M30 35 L260 25 L275 145 L45 155 Z" fill="#84cc16" fillOpacity="0.12" stroke="#84cc16" strokeWidth="3" />
                  <path d="M150 29 L160 150" stroke="#a3e635" strokeWidth="2.5" strokeDasharray="6 4" />
                  <circle cx="150" cy="90" r="4" fill="#84cc16" />
                  <text x="165" y="94" fill="#d9f99d" fontSize="12" fontFamily="monospace" fontWeight="bold">245.8 ha</text>
                </svg>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-neutral-950/80 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-lime-400 group-hover:border-lime-400 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] font-mono uppercase bg-neutral-950/90 text-lime-400 px-2 py-0.5 rounded border border-lime-400/30">
                    Georreferenciamento
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-bold text-white font-display mb-1.5 group-hover:text-lime-400 transition-colors">
                  Talhões Delimitados
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Contorno automático e cálculo preciso de área agricultável real.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <span className="text-xs font-mono font-semibold text-lime-400 group-hover:underline inline-flex items-center gap-1">
                Ver delimitação aérea
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Tile 4: Eficácia de Defensivos */}
          <div
            onClick={() => setSelectedExample(DELIVERABLE_EXAMPLES[3])}
            className="bg-neutral-900/90 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400/50 transition-all duration-300 group flex flex-col cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-lime-500/10 justify-between"
          >
            <div>
              <div className="relative h-[200px] bg-[#0c1a10] flex items-center justify-center overflow-hidden border-b border-neutral-800">
                <svg viewBox="0 0 300 180" className="w-full h-full block">
                  <rect width="300" height="180" fill="#04120a" />
                  <polyline points="25,65 105,67 185,69 275,72" fill="none" stroke="#84cc16" strokeWidth="4" />
                  <polyline points="25,69 105,95 185,125 275,145" fill="none" stroke="#f59e0b" strokeWidth="4" />
                  <text x="30" y="50" fill="#84cc16" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Tratado (Drone)</text>
                  <text x="180" y="165" fill="#f59e0b" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Testemunha</text>
                </svg>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-neutral-950/80 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-lime-400 group-hover:border-lime-400 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] font-mono uppercase bg-neutral-950/90 text-lime-400 px-2 py-0.5 rounded border border-lime-400/30">
                    Ensaio Científico
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-bold text-white font-display mb-1.5 group-hover:text-lime-400 transition-colors">
                  Eficácia de Defensivos
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Avaliação comparativa de produto ao longo do ciclo vegetativo.
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <span className="text-xs font-mono font-semibold text-lime-400 group-hover:underline inline-flex items-center gap-1">
                Ver dados estatísticos
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>

        <p className="text-center text-xs text-neutral-400 mt-8">
          Clique em qualquer modelo acima para visualizar levantamentos, laudos e ortomosaicos reais processados pela MapIar.
        </p>

      </div>

      {/* Lightbox Modal in Dark Tech Aesthetic */}
      {selectedExample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-neutral-900 border border-emerald-900/80 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative text-white">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-5">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-lime-400 tracking-wider">
                  Entregável Técnico MapIar
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                  {selectedExample.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedExample(null)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {selectedExample.image && (
              <div className="rounded-xl overflow-hidden border border-neutral-800 max-h-[50vh] bg-neutral-950">
                <img
                  src={selectedExample.image}
                  alt={selectedExample.title}
                  className="w-full h-full object-cover max-h-[50vh]"
                />
              </div>
            )}

            <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedExample.description} Arquivo entregue pronto para o monitor do trator ou software SIG de sua escolha.
              </p>

              <button
                onClick={() => {
                  const title = selectedExample.title;
                  setSelectedExample(null);
                  onContactClick(title);
                }}
                className="bg-lime-400 hover:bg-lime-300 text-neutral-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar este formato</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


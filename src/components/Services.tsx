import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/mapiarData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleWhatsAppQuote = (service: ServiceItem) => {
    const message = `Olá! Gostaria de solicitar um orçamento para o serviço de ${service.title} com a MapIar.`;
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="py-24 bg-neutral-900/60 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-lime-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            <span>O Que Fazemos · Portfólio de Ponta a Ponta</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            NOSSOS <span className="text-lime-400">SERVIÇOS</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Do drone ao entregável pronto para a sua máquina e para a sua decisão.
          </p>
        </div>

        {/* 8 Services Grid in DroneBox Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const serviceNumber = `0${index + 1}`;
            return (
              <div
                key={service.id}
                className="flex flex-col rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-lime-400/50 transition-all duration-300 overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-lime-500/10 justify-between"
              >
                <div>
                  {/* Card Image with Hover Zoom */}
                  <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                    <img
                      src={service.image || '/assets/images/mapiar_hero_drone_survey_1793886340679.jpg'}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/assets/images/mapiar_hero_drone_survey_1793886340679.jpg';
                      }}
                      alt={`Serviço de ${service.title} MapIar`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />

                    {/* Number Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider bg-neutral-950/85 text-lime-400 border border-lime-400/30 backdrop-blur-md">
                        SERVIÇO {serviceNumber}
                      </span>
                    </div>

                    {/* Category Tag */}
                    {service.tag && (
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <span className="text-[11px] font-semibold text-white tracking-wide bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800">
                          {service.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-lime-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    {service.features && (
                      <ul className="space-y-1.5 mb-2">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-neutral-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => handleWhatsAppQuote(service)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Orçamento no WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Selecionar no Formulário</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

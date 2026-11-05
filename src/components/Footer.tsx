import React from 'react';
import { ArrowUp, MessageSquare, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mapiarData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#020d08] text-neutral-400 border-t border-emerald-950/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-48 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/site_icon.png"
                alt="MapIar - A Inteligência Artificial do Agro"
                className="h-9 sm:h-11 w-auto max-w-[200px] object-contain filter drop-shadow-[0_0_1px_rgba(255,255,255,0.4)] drop-shadow-[0_2px_8px_rgba(132,204,22,0.2)]"
              />
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              {COMPANY_INFO.concept} — Tecnologia aeroespacial, geoprocessamento e inteligência artificial aplicada ao agronegócio de alta precisão.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-lime-400 font-mono">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{COMPANY_INFO.credentials}</span>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-lime-400/30 text-lime-400 text-xs font-semibold hover:border-lime-400 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Atendimento via WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Soluções Agrícolas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Soluções Especializadas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              {SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#servicos"
                    onClick={(e) => handleNavClick(e, '#servicos')}
                    className="hover:text-lime-400 transition-colors inline-block"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navegação Rápida (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-lime-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="hover:text-lime-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#pesquisa" onClick={(e) => handleNavClick(e, '#pesquisa')} className="hover:text-lime-400 transition-colors">
                  Pesquisa Científica
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="hover:text-lime-400 transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#galeria" onClick={(e) => handleNavClick(e, '#galeria')} className="hover:text-lime-400 transition-colors">
                  O Que Entregamos
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => handleNavClick(e, '#contato')} className="hover:text-lime-400 transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Presença (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Canais Oficiais
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-neutral-500 uppercase font-mono">WhatsApp</div>
                  <span className="text-white font-mono">{COMPANY_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-neutral-500 uppercase font-mono">E-mail</div>
                  <span className="text-white font-mono">{COMPANY_INFO.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-neutral-500 uppercase font-mono">Abrangência</div>
                  <span className="text-white">Atendimento em todo o território nacional</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name} Tecnologia Agrícola. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>{COMPANY_INFO.website}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
              title="Voltar ao início da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-lime-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};


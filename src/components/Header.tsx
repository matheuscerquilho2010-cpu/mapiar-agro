import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/mapiarData';

interface HeaderProps {
  onContactClick: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Pesquisa', href: '#pesquisa' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Exemplos', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const openWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#03140c]/90 backdrop-blur-md border-b border-emerald-950/60 shadow-xl py-3.5'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Logo MapIar Official Brand Icon */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="MapIar Início"
          >
            <img
              src="https://i.ibb.co/Lz2rZTMs/Sem-t-tulo-2.png"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/logo-topo.png';
              }}
              alt="MapIar - A Inteligência Artificial do Agro"
              className="h-10 sm:h-12 w-auto max-w-[220px] object-contain filter drop-shadow-[0_2px_12px_rgba(132,204,22,0.3)] transition-transform duration-300 group-hover:scale-105 animate-float-logo"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-lime-400 transition-colors whitespace-nowrap shrink-0 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={openWhatsApp}
              className="p-2 text-neutral-400 hover:text-lime-400 hover:bg-emerald-950/50 rounded-lg transition-colors border border-transparent hover:border-emerald-800"
              title="Atendimento via WhatsApp"
              aria-label="WhatsApp MapIar"
            >
              <MessageSquare className="w-5 h-5 text-lime-400" />
            </button>

            <button
              onClick={() => onContactClick()}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 rounded-xl shadow-lg shadow-lime-500/20 hover:shadow-lime-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openWhatsApp}
              className="p-2 text-lime-400 bg-emerald-950/70 border border-lime-400/30 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-200 hover:text-white bg-neutral-900/90 border border-neutral-800 rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-lime-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#03140c]/98 backdrop-blur-2xl border-b border-emerald-900/50 shadow-2xl transition-all">
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-base font-semibold text-neutral-200 hover:text-lime-400 hover:bg-neutral-900/60 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-neutral-950 bg-lime-400 hover:bg-lime-300 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

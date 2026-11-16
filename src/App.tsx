/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Indicators } from './components/Indicators';
import { Services } from './components/Services';
import { Research } from './components/Research';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact, ContactRef } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  const contactRef = useRef<ContactRef>(null);

  const handleContactClick = (serviceName?: string) => {
    if (contactRef.current) {
      if (serviceName) {
        contactRef.current.selectService(serviceName);
      } else {
        contactRef.current.focusForm();
      }
    } else {
      const el = document.getElementById('contato');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServicesClick = () => {
    const el = document.getElementById('servicos');
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#03140c] text-neutral-100 flex flex-col font-sans antialiased selection:bg-lime-400 selection:text-neutral-950">
      {/* Top Navigation */}
      <Header onContactClick={handleContactClick} />

      <main className="flex-1">
        {/* 01. Hero Section */}
        <Hero
          onContactClick={handleContactClick}
          onServicesClick={handleServicesClick}
        />

        {/* 02. Indicadores da Empresa (Floating Count-Up Strip) */}
        <Indicators />

        {/* 03. Serviços de ponta a ponta */}
        <Services onSelectService={handleContactClick} />

        {/* 04. Pesquisa · Comprovação científica de eficácia */}
        <Research onContactClick={handleContactClick} />

        {/* 05. Sobre nós · Engenharia agronômica + tecnologia */}
        <About onContactClick={handleContactClick} />

        {/* 06. Exemplos · O que entregamos */}
        <Gallery onContactClick={handleContactClick} />

        {/* 07. Contato · Vamos conversar */}
        <Contact ref={contactRef} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <WhatsAppFloating />
    </div>
  );
}


import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/mapiarData';

export const WhatsAppFloating: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/95 text-neutral-200 text-xs shadow-xl backdrop-blur-md border border-neutral-800 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        <span className="font-semibold text-white">Fale com o Engenheiro Agrônomo</span>
      </div>

      {/* Main Floating Trigger Button */}
      <button
        onClick={handleClick}
        className="relative group p-4 rounded-full bg-lime-400 hover:bg-lime-300 text-neutral-950 shadow-xl shadow-lime-500/25 transition-all duration-300 transform hover:scale-108 active:scale-95 flex items-center justify-center cursor-pointer focus:outline-none"
        aria-label="Abrir WhatsApp oficial da MapIar"
      >
        <MessageSquare className="w-6 h-6 relative z-10 fill-current" />
      </button>
    </div>
  );
};


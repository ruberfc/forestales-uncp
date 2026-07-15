import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "51999999999"; // Reemplazar con el número real de la facultad
  const message = "Hola, quisiera solicitar información sobre la Facultad de Ciencias Forestales y del Ambiente.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[110] group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip Label */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-gray-100 dark:border-slate-700">
        ¿En qué podemos ayudarte?
      </span>

      {/* Main Button */}
      <div className="relative">
        {/* Pulse effect background */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
        
        <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
          <MessageCircle size={32} fill="white" className="group-hover:rotate-12 transition-transform" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
import React, { useState, useEffect } from 'react';
import { User, Activity } from 'lucide-react';

const VisitorCounter: React.FC = () => {
  // Iniciamos con el número de la imagen de referencia
  const [count, setCount] = useState(2462);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animación de entrada suave al cargar
    const timer = setTimeout(() => setIsVisible(true), 500);

    // Simular incremento aleatorio de visitantes en vivo
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className={`fixed top-28 lg:top-36 right-0 z-[100] transition-all duration-700 ease-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="bg-[#d32f2f] text-white py-1.5 px-3 pl-5 rounded-l-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-3 border-y border-l border-white/20 backdrop-blur-sm transition-all duration-300 cursor-default group">
        
        {/* User Icon Container - Compact */}
        <div className="relative flex-shrink-0">
          <div className="bg-white/20 p-1.5 rounded-full shadow-inner group-hover:bg-white/30 transition-colors">
             <User size={16} className="text-white" fill="white" />
          </div>
          {/* Green Online Dot */}
          <div className="absolute -top-0.5 -right-0.5">
             <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-white/40"></span>
            </span>
          </div>
        </div>
        
        {/* Text and Number - Compact */}
        <div className="flex flex-col items-start leading-none pr-1">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-[8px] font-black uppercase text-white/90 tracking-widest whitespace-nowrap">
              En Línea
            </span>
            <Activity size={8} className="text-white/60" />
          </div>
          <span className="text-lg font-black font-sans tracking-tight drop-shadow-md">
            {count.toLocaleString()}
          </span>
        </div>
        
        {/* Edge decorative line */}
        <div className="absolute left-1.5 top-1/4 bottom-1/4 w-[1px] bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default VisitorCounter;
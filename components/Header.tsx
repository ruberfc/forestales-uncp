import React, { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, TreePine } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { NavMenuLink } from '../types';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenus([]);
    window.scrollTo(0, 0);
  }, [location]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  // Función para determinar si una sección está activa
  const isPathActive = (path: string, sublinks?: NavMenuLink[]): boolean => {
    if (location.pathname === path) return true;
    if (sublinks) {
      return sublinks.some(sub => isPathActive(sub.path, sub.sublinks));
    }
    return false;
  };

  return (
    <>
      <div className={`fixed w-full z-50 transition-all duration-500 ease-in-out`}>
        
        {/* Top Institutional Bar */}
        <div 
          className={`bg-[#1a4731] transition-all duration-500 overflow-hidden flex items-center ${
            scrolled ? 'h-0 opacity-0 translate-y-[-100%]' : 'h-20 lg:h-24 opacity-100 translate-y-0'
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center h-full">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full p-1 border-2 border-yellow-500 shadow-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_UNCP.png/800px-Logo_UNCP.png" 
                    alt="Escudo UNCP" 
                    className="w-full h-auto"
                  />
               </div>
            </div>

            <div className="text-center text-white flex flex-col items-center">
              <h1 className="font-heading font-black text-xs md:text-xl lg:text-2xl uppercase tracking-wider drop-shadow-md text-center">
                Universidad Nacional del Centro del Perú
              </h1>
              <h2 className="font-heading font-bold text-[8px] md:text-sm lg:text-base uppercase tracking-[0.2em] opacity-90">
                Facultad de Ciencias Forestales y del Ambiente
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-3">
              {SOCIAL_LINKS.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center text-[#1a4731] hover:bg-yellow-400 hover:scale-110 transition-all shadow-md"
                  aria-label={social.platform}
                >
                  <social.icon size={18} fill={social.platform === "WhatsApp" ? "none" : "currentColor"} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navigation Header */}
        <header 
          className={`w-full transition-all duration-300 bg-uncp dark:bg-slate-900 border-b border-white/10 ${
            scrolled 
              ? 'py-0 shadow-xl' 
              : 'py-2 lg:py-3'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-full">
              
              <Link to="/" className="flex items-center gap-3 group">
                <div className={`relative bg-white rounded-b-xl px-2 pt-1 pb-2 shadow-lg border-t-4 border-yellow-400 transform origin-top transition-all duration-300 ${
                    scrolled ? 'scale-75' : 'scale-90 opacity-80'
                  }`}>
                  <TreePine size={24} className="text-uncp-dark" />
                </div>
                
                <div className={`leading-tight text-white transition-all duration-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0 -translate-x-4 pointer-events-none'
                }`}>
                  <h1 className="font-heading font-bold text-[10px] uppercase tracking-wide">
                    UNCP
                  </h1>
                  <h2 className="font-heading font-black text-xs uppercase">
                    Forestales
                  </h2>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center h-full self-stretch">
                {NAV_LINKS.map((link) => {
                  const isActive = isPathActive(link.path, link.sublinks);
                  
                  return (
                    <div key={link.name} className="relative group h-full flex items-center">
                      {link.sublinks ? (
                        <>
                          <button className={`flex items-center gap-1.5 px-4 h-full text-[13px] font-black uppercase tracking-tighter transition-all duration-300 relative
                            ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}
                          `}>
                            {link.name}
                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            {isActive && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-yellow-400 rounded-t-full"></div>}
                          </button>
                          <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-800 shadow-2xl rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 py-4 border-t-2 border-yellow-400 z-50">
                            {link.sublinks.map((sub) => (
                              <div key={sub.name} className="relative group/sub">
                                {sub.sublinks ? (
                                  <>
                                    <button className={`w-full flex justify-between items-center px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all
                                      ${isPathActive(sub.path, sub.sublinks) 
                                        ? 'text-uncp bg-uncp/5 border-r-4 border-uncp' 
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-uncp/5 hover:text-uncp'}
                                    `}>
                                      {sub.name}
                                      <ChevronDown size={12} className="-rotate-90 group-hover/sub:rotate-0 transition-transform" />
                                    </button>
                                    <div className="absolute left-full top-0 w-64 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-4 border-l-2 border-yellow-400 z-50">
                                      {sub.sublinks.map((nested) => 
                                        nested.target === '_blank' ? (
                                          <a 
                                            key={nested.name} 
                                            href={nested.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`block px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all
                                              text-gray-700 dark:text-gray-300 hover:bg-uncp/5 hover:text-uncp
                                            `}
                                          >
                                            {nested.name}
                                          </a>
                                        ) : (
                                          <Link 
                                            key={nested.name} 
                                            to={nested.path}
                                            className={`block px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all
                                              ${location.pathname === nested.path 
                                                ? 'text-uncp bg-uncp/5 border-r-4 border-uncp' 
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-uncp/5 hover:text-uncp'}
                                            `}
                                          >
                                            {nested.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  sub.target === '_blank' ? (
                                    <a 
                                      href={sub.path}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`block px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all
                                        text-gray-700 dark:text-gray-300 hover:bg-uncp/5 hover:text-uncp
                                      `}
                                    >
                                      {sub.name}
                                    </a>
                                  ) : (
                                    <Link 
                                      to={sub.path}
                                      className={`block px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all
                                        ${location.pathname === sub.path 
                                          ? 'text-uncp bg-uncp/5 border-r-4 border-uncp' 
                                          : 'text-gray-700 dark:text-gray-300 hover:bg-uncp/5 hover:text-uncp'}
                                      `}
                                    >
                                      {sub.name}
                                    </Link>
                                  )
                                )}
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        link.target === '_blank' ? (
                          <a 
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 h-full flex items-center text-[13px] font-black uppercase tracking-tighter transition-all duration-300 relative
                              text-white hover:text-yellow-400
                            `}
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link 
                            to={link.path}
                            className={`px-4 h-full flex items-center text-[13px] font-black uppercase tracking-tighter transition-all duration-300 relative
                              ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}
                            `}
                          >
                            {link.name}
                            {isActive && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-yellow-400 rounded-t-full"></div>}
                          </Link>
                        )
                      )}
                    </div>
                  );
                })}
                
                <div className="ml-4 pl-4 border-l border-white/20 flex items-center h-10">
                  <ThemeToggle />
                </div>
              </nav>

              <div className="xl:hidden flex items-center gap-4">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white p-1 hover:bg-white/10 rounded transition-colors"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Sidebar */}
      <div 
        className={`xl:hidden fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div 
        className={`xl:hidden fixed right-0 top-0 h-full w-[300px] bg-white dark:bg-slate-900 shadow-2xl z-[70] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 bg-uncp dark:bg-slate-950 flex justify-between items-center h-[90px]">
          <span className="font-heading font-black text-white text-sm tracking-widest uppercase">Navegación</span>
          <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
            <X size={28} />
          </button>
        </div>
        
        <div className="overflow-y-auto h-[calc(100%-90px)] py-4">
          {NAV_LINKS.map((link) => {
            const isSectionActive = isPathActive(link.path, link.sublinks);
            const isMenuOpen = openSubmenus.includes(link.name);

            return (
              <div key={link.name}>
                {link.sublinks ? (
                  <div>
                    <button 
                      onClick={() => toggleSubmenu(link.name)}
                      className={`w-full flex justify-between items-center px-8 py-5 text-[13px] font-black transition-all border-b border-gray-100 dark:border-slate-800 uppercase tracking-tighter
                        ${isSectionActive 
                          ? 'text-uncp bg-uncp/5 border-l-[6px] border-l-uncp pl-[26px]' 
                          : 'text-gray-800 dark:text-gray-200 border-l-[6px] border-l-transparent'}
                      `}
                    >
                      {link.name}
                      <ChevronDown size={18} className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''} ${isSectionActive ? 'text-uncp' : 'text-gray-400'}`} />
                    </button>
                    
                    <div className={`bg-gray-50 dark:bg-slate-950/50 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                      {link.sublinks.map((sub) => (
                        <div key={sub.name}>
                          {sub.sublinks ? (
                            <div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubmenu(sub.name);
                                }}
                                className={`w-full flex justify-between items-center px-10 py-4 text-[11px] font-bold transition-all border-l-4
                                  ${isPathActive(sub.path, sub.sublinks) 
                                    ? 'text-uncp bg-uncp/10 border-uncp pl-14 font-black' 
                                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-slate-800 hover:pl-12'}
                                `}
                              >
                                {sub.name}
                                <ChevronDown size={14} className={`transform transition-transform duration-300 ${openSubmenus.includes(sub.name) ? 'rotate-180' : ''}`} />
                              </button>
                              <div className={`bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 ${openSubmenus.includes(sub.name) ? 'max-h-[500px]' : 'max-h-0'}`}>
                                {sub.sublinks.map((nested) => 
                                  nested.target === '_blank' ? (
                                    <a 
                                      key={nested.name}
                                      href={nested.path}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`
                                        block px-14 py-3 text-[10px] font-bold transition-all border-l-4
                                        text-gray-500 dark:text-gray-500 border-transparent hover:bg-gray-50 dark:hover:bg-slate-800 hover:pl-16
                                      `}
                                    >
                                      {nested.name}
                                    </a>
                                  ) : (
                                    <NavLink 
                                      key={nested.name}
                                      to={nested.path}
                                      className={({ isActive }) => `
                                        block px-14 py-3 text-[10px] font-bold transition-all border-l-4
                                        ${isActive 
                                          ? 'text-uncp bg-uncp/5 border-uncp pl-18 font-black' 
                                          : 'text-gray-500 dark:text-gray-500 border-transparent hover:bg-gray-50 dark:hover:bg-slate-800 hover:pl-16'}
                                      `}
                                    >
                                      {nested.name}
                                    </NavLink>
                                  )
                                )}
                              </div>
                            </div>
                          ) : (
                            sub.target === '_blank' ? (
                              <a 
                                href={sub.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                  block px-10 py-4 text-[11px] font-bold transition-all border-l-4
                                  text-gray-600 dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-slate-800 hover:pl-12
                                `}
                              >
                                {sub.name}
                              </a>
                            ) : (
                              <NavLink 
                                to={sub.path}
                                className={({ isActive }) => `
                                  block px-10 py-4 text-[11px] font-bold transition-all border-l-4
                                  ${isActive 
                                    ? 'text-uncp bg-uncp/10 border-uncp pl-14 font-black' 
                                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-slate-800 hover:pl-12'}
                                `}
                              >
                                {sub.name}
                              </NavLink>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  link.target === '_blank' ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        block px-8 py-5 text-[13px] font-black border-b border-gray-100 dark:border-slate-800 uppercase tracking-tighter border-l-[6px] transition-all
                        text-gray-800 dark:text-gray-200 border-l-transparent hover:bg-gray-50 dark:hover:bg-slate-800
                      `}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `
                        block px-8 py-5 text-[13px] font-black border-b border-gray-100 dark:border-slate-800 uppercase tracking-tighter border-l-[6px] transition-all
                        ${isActive 
                          ? 'text-uncp bg-uncp/5 border-l-uncp pl-[26px]' 
                          : 'text-gray-800 dark:text-gray-200 border-l-transparent hover:bg-gray-50 dark:hover:bg-slate-800'}
                      `}
                    >
                      {link.name}
                    </NavLink>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
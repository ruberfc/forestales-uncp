import React from 'react';
import { SOCIAL_LINKS, FOOTER_SECTIONS, ORGANIZATION_NAME, UNIVERSITY_NAME } from '../constants';
import { TreePine } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-forest-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-forest-600 p-2 rounded-lg text-white">
                <TreePine size={32} />
              </div>
              <div>
                <h3 className="text-white font-heading font-bold leading-tight">{ORGANIZATION_NAME}</h3>
                <p className="text-xs text-forest-400">{UNIVERSITY_NAME}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Formando líderes en ciencias forestales y ambientales con excelencia académica, investigación y responsabilidad social desde 1960.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2 rounded-full hover:bg-forest-600 text-white transition-colors duration-300"
                  aria-label={link.platform}
                >
                  <link.icon size={18} fill={link.platform === "WhatsApp" ? "none" : "currentColor"} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-forest-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-sm">
                {section.links && section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="hover:text-forest-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-forest-600 rounded-full group-hover:bg-forest-400 transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
                {section.content && section.content.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                     <span className="opacity-70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {ORGANIZATION_NAME}. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
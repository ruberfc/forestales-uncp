import React from 'react';
import { 
  FileText, ArrowRight, MapPin, Phone, Mail, 
  Search, BookOpen, GraduationCap, Microscope, ShieldCheck
} from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface InternalPageLayoutProps {
  title: string;
  subtitle: string;
  image: string;
  children: React.ReactNode;
}

const InternalPageLayout: React.FC<InternalPageLayoutProps> = ({ title, subtitle, image, children }) => {
  return (
    <div className="pt-40 lg:pt-56 min-h-screen bg-gray-50 dark:bg-slate-900 animate-reveal-up">
      {/* Internal Hero */}
      <div className="bg-gradient-to-r from-uncp/20 to-uncp-dark/5 dark:from-slate-800 dark:to-slate-900 py-16 px-4 mb-12 border-b border-gray-100 dark:border-slate-800">
        <div className="container mx-auto">
          <span className="text-uncp font-bold text-sm tracking-widest uppercase mb-4 block">Facultad de Ciencias Forestales y del Ambiente</span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-800 dark:text-white mb-4 uppercase leading-tight tracking-tight">
            {title}
          </h1>
          <div className="h-2 w-20 bg-yellow-500 rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl font-light leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Content Body */}
          <div className="lg:col-span-9">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-slate-700">
              <div className="relative overflow-hidden rounded-2xl mb-10 shadow-2xl h-80 md:h-[450px]">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {children}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-uncp to-forest-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">Soporte Académico</span>
                  <h3 className="font-black text-2xl mb-4 leading-tight uppercase">Atención Especializada</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white group-hover:text-uncp transition-all"><Phone size={18} /></div>
                      <span className="text-sm font-medium">(064) 481060</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white group-hover:text-uncp transition-all"><Mail size={18} /></div>
                      <span className="text-sm font-medium">forestales@uncp.edu.pe</span>
                    </div>
                  </div>
                  <button className="w-full bg-white text-uncp-dark font-black py-4 rounded-2xl hover:bg-yellow-400 hover:text-white transition-all shadow-xl uppercase text-sm tracking-widest">
                    Consultar Ahora
                  </button>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default InternalPageLayout;
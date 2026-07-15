import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  Microscope, 
  CheckCircle2, 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  Building2, 
  Sparkles, 
  Compass, 
  ArrowUpRight, 
  Award, 
  User, 
  Mail, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Database, 
  Calendar, 
  HelpCircle,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface LaboratorioInfo {
  nombre: string;
  siglas: string;
  jefe: string;
  jefeCargo: string;
  jefeEmail: string;
  mision: string;
  vision: string;
  descripcion: string;
}

interface LineaInvestigacion {
  titulo: string;
  descripcion: string;
}

interface EquipamientoItem {
  nombre: string;
  marca: string;
  imagen?: string;
  aplicaciones?: string[];
  funcion?: string;
}

interface ServicioItem {
  servicio: string;
  destinatario: string;
}

interface ProyectoVigente {
  titulo: string;
  financiamiento: string;
  periodo: string;
}

interface LaboratorioData {
  laboratorio: LaboratorioInfo;
  lineasInvestigacion: LineaInvestigacion[];
  equipamiento: EquipamientoItem[];
  servicios: ServicioItem[];
  pdfUrl: string;
  pdfTitulo: string;
  codigoNormativo: string;
  proyectosVigentes: ProyectoVigente[];
}

const LaboratorioBiodiversidad: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/laboratorios/biodiversidad'];
  const [data, setData] = useState<LaboratorioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'info' | 'lineas' | 'equipos' | 'servicios'>('equipos');

  useEffect(() => {
    const fetchLabData = async () => {
      try {
        const response = await fetch('/datajson/laboratorio-biodiversidad.json');
        if (!response.ok) {
          throw new Error('Error al cargar la información del Laboratorio de Biodiversidad');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchLabData();
  }, []);

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        
        {/* Intro */}
        <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-10 leading-snug italic border-l-8 border-uncp pl-6 py-2">
          {content.intro}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
            <Loader2 className="animate-spin text-uncp mb-4" size={40} />
            <p className="text-sm font-bold uppercase tracking-wider">Cargando Laboratorio de Biodiversidad...</p>
          </div>
        ) : error || !data ? (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 p-6 rounded-3xl flex items-center gap-4 text-red-800 dark:text-red-300">
            <AlertCircle className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">Error de carga</h4>
              <p className="text-xs">{error || 'No se pudo obtener la información del laboratorio'}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-16 animate-fadeIn text-left">
            
            {/* Quick Stats Grid or Header Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Detailed Description */}
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                      <Microscope size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-0.5">
                        Infraestructura Científica
                      </span>
                      <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {data.laboratorio.nombre}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                    {data.laboratorio.descripcion}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-slate-850 flex flex-wrap gap-y-4 items-center justify-between text-xs text-gray-500 font-bold uppercase">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-uncp" />
                    <span>Facultad de Ciencias Forestales y del Ambiente - UNCP</span>
                  </div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-black">
                    Código: {data.codigoNormativo}
                  </span>
                </div>
              </div>

              {/* Sidebar Contact & Chief card */}
              <div className="lg:col-span-4 bg-gradient-to-br from-uncp/5 via-teal-500/5 to-transparent dark:from-uncp/10 dark:via-transparent border border-uncp/15 dark:border-slate-800 rounded-[40px] p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="p-3 bg-uncp text-white rounded-2xl w-fit">
                    <User size={22} />
                  </div>
                  <h4 className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest m-0">
                    Jefatura del Laboratorio
                  </h4>
                  <div className="space-y-1">
                    <h5 className="text-base font-black text-slate-800 dark:text-white uppercase m-0 leading-tight">
                      {data.laboratorio.jefe}
                    </h5>
                    <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide m-0">
                      {data.laboratorio.jefeCargo}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-150/80 dark:border-slate-800/60 space-y-3">
                  <a 
                    href={`mailto:${data.laboratorio.jefeEmail}`}
                    className="flex items-center gap-2.5 text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-uncp transition-colors"
                  >
                    <Mail size={14} className="text-uncp shrink-0" />
                    <span>{data.laboratorio.jefeEmail}</span>
                  </a>
                  <div className="flex items-center gap-2 text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    <span>Atención y Consultoría</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Subsections Navigation tabs */}
            <div className="space-y-8">
              
              {/* Tab Selector buttons */}
              <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-900/60 rounded-2xl border border-gray-150 dark:border-slate-800 w-fit">
                {/* 
                <button
                  onClick={() => setActiveTab('info')}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === 'info' 
                      ? 'bg-white dark:bg-slate-800 text-uncp shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <Compass size={14} />
                  <span>Misión y Visión</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('lineas')}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === 'lineas' 
                      ? 'bg-white dark:bg-slate-800 text-uncp shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <Sparkles size={14} />
                  <span>Líneas de Investigación</span>
                </button>
                */}

                <button
                  onClick={() => setActiveTab('equipos')}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === 'equipos' 
                      ? 'bg-white dark:bg-slate-800 text-uncp shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <Cpu size={14} />
                  <span>Equipamiento Técnico</span>
                </button>

                {/* 
                <button
                  onClick={() => setActiveTab('servicios')}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === 'servicios' 
                      ? 'bg-white dark:bg-slate-800 text-uncp shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <Award size={14} />
                  <span>Servicios Ofrecidos</span>
                </button>
                */}
              </div>

              {/* Tab Contents */}
              <div className="bg-slate-50 dark:bg-slate-900/40 border border-gray-150 dark:border-slate-800/80 rounded-[40px] p-6 md:p-8 min-h-[300px] flex flex-col justify-between">
                
                {/* 1. Misión y Visión */}
                {/* Misión y Visión comentadas temporalmente */}
                {false && activeTab === 'info' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                    
                    {/* Mission Card */}
                    <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4">
                      <div className="p-2.5 bg-uncp/10 text-uncp rounded-2xl w-fit">
                        <Compass size={20} />
                      </div>
                      <h4 className="text-base font-black uppercase tracking-wider m-0 text-slate-800 dark:text-white">
                        Nuestra Misión
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                        {data?.laboratorio.mision}
                      </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4">
                      <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                        <TrendingUp size={20} />
                      </div>
                      <h4 className="text-base font-black uppercase tracking-wider m-0 text-slate-800 dark:text-white">
                        Nuestra Visión
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                        {data?.laboratorio.vision}
                      </p>
                    </div>

                  </div>
                )}

                {/* 2. Líneas de Investigación */}
                {/* Líneas de investigación comentadas temporalmente */}
                {false && activeTab === 'lineas' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                    {data?.lineasInvestigacion.map((linea, idx) => (
                      <div 
                        key={idx}
                        className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-3xl flex gap-4 items-start shadow-sm hover:border-uncp/20 transition-all duration-300 group"
                      >
                        <div className="p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-2xl group-hover:bg-uncp group-hover:text-white transition-all shrink-0">
                          <Layers size={18} />
                        </div>
                        <div className="space-y-1.5 text-left">
                          <h4 className="text-sm md:text-base font-black uppercase tracking-tight m-0 text-slate-800 dark:text-white group-hover:text-uncp transition-colors">
                            {linea.titulo}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                            {linea.descripcion}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. Equipamiento */}
                {activeTab === 'equipos' && (
                  <div className="space-y-12 animate-fadeIn">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-2">
                        Infraestructura y Tecnología de Vanguardia
                      </p>
                      <h4 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                        Equipamiento Científico Especializado
                      </h4>
                    </div>

                    <div className="space-y-8">
                      {data.equipamiento.map((eq, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                          <div 
                            key={idx}
                            className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 items-center"
                          >
                            {/* Image Section */}
                            <div className={`lg:col-span-4 ${isEven ? 'lg:order-first' : 'lg:order-last'} relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-gray-100 dark:border-slate-700/50`}>
                              {eq.imagen ? (
                                <img 
                                  src={eq.imagen} 
                                  alt={eq.nombre}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                  <Microscope size={48} className="stroke-1" />
                                </div>
                              )}
                              <span className="absolute top-4 left-4 bg-uncp text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                                Equipo {idx + 1}
                              </span>
                            </div>

                            {/* Content Section */}
                            <div className="lg:col-span-8 space-y-4 text-left">
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-800 pb-3">
                                <h4 className="text-base md:text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 leading-tight">
                                  {eq.nombre}
                                </h4>
                                <span className="text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100/30 px-3 py-0.5 rounded-full uppercase">
                                  Marca: {eq.marca}
                                </span>
                              </div>

                              {eq.aplicaciones && eq.aplicaciones.length > 0 ? (
                                <div className="space-y-2">
                                  <span className="text-[10px] font-black uppercase tracking-wider text-uncp block">
                                    Aplicación y Áreas de Uso:
                                  </span>
                                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 m-0 p-0 list-none">
                                    {eq.aplicaciones.map((app, appIdx) => (
                                      <li key={appIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300 m-0">
                                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{app}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : eq.funcion ? (
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                                  {eq.funcion}
                                </p>
                              ) : null}

                              <div className="pt-3 border-t border-gray-50 dark:border-slate-850 flex items-center gap-1.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                <span>Disponible para Investigación y Docencia</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Servicios comentados temporalmente */}
                {false && activeTab === 'servicios' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                    {data?.servicios.map((serv, idx) => (
                      <div 
                        key={idx}
                        className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-3xl flex flex-col justify-between space-y-4 shadow-sm"
                      >
                        <div className="space-y-3">
                          <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-xl w-fit">
                            <ShieldCheck size={18} />
                          </div>
                          
                          <p className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase m-0 leading-tight text-justify">
                            {serv.servicio}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-100 dark:border-slate-800/40">
                          <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                            Dirigido a:
                          </span>
                          <span className="text-[11px] font-bold text-gray-600 dark:text-gray-300 mt-0.5 block">
                            {serv.destinatario}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer of card reminding quality process */}
                <div className="mt-8 pt-4 border-t border-gray-150 dark:border-slate-850 flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <Award size={12} className="text-uncp" />
                  <span>Acreditación Internacional SINEACE - Calidad Universitaria</span>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </InternalPageLayout>
  );
};

export default LaboratorioBiodiversidad;

import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  Compass, 
  Award, 
  Wrench, 
  LineChart,
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  CalendarDays, 
  FileSpreadsheet,
  Network,
  ChevronRight,
  Sparkles,
  ArrowRightLeft
} from 'lucide-react';

interface ProcesoItem {
  nombre: string;
  descripcion: string;
}

interface CategoriaProceso {
  tipo: 'estrategicos' | 'misionales' | 'apoyo' | 'evaluacion' | string;
  nombre: string;
  descripcion: string;
  icon: string;
  color: string;
  items: ProcesoItem[];
}

interface CalidadMapaData {
  titulo: string;
  codigo: string;
  version: string;
  fechaAprobacion: string;
  introduccion: string;
  categorias: CategoriaProceso[];
  pdfUrl: string;
  pdfTitulo: string;
}

const CalidadMapa: React.FC = () => {
  const content = PAGE_CONTENT['/acreditacion/calidad/mapa-procesos'];
  const [data, setData] = useState<CalidadMapaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const fetchMapaData = async () => {
      try {
        const response = await fetch('/datajson/calidad-mapa.json');
        if (!response.ok) {
          throw new Error('Error al cargar el Mapa de Procesos');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchMapaData();
  }, []);

  // Helper to render the matching Lucide icon based on string from JSON
  const renderIcon = (iconName: string, colorClass: string) => {
    const size = 24;
    switch (iconName) {
      case 'Compass':
        return <Compass size={size} className={colorClass} />;
      case 'Award':
        return <Award size={size} className={colorClass} />;
      case 'Wrench':
        return <Wrench size={size} className={colorClass} />;
      case 'LineChart':
        return <LineChart size={size} className={colorClass} />;
      default:
        return <Network size={size} className={colorClass} />;
    }
  };

  const getColorThemes = (color: string) => {
    switch (color) {
      case 'indigo':
        return {
          bg: 'bg-indigo-50 dark:bg-indigo-950/20',
          border: 'border-indigo-100 dark:border-indigo-900/40 hover:border-indigo-400',
          text: 'text-indigo-700 dark:text-indigo-400',
          pill: 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700'
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50 dark:bg-emerald-950/20',
          border: 'border-emerald-100 dark:border-emerald-900/40 hover:border-emerald-400',
          text: 'text-emerald-700 dark:text-emerald-400',
          pill: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700'
        };
      case 'amber':
        return {
          bg: 'bg-amber-50 dark:bg-amber-950/20',
          border: 'border-amber-100 dark:border-amber-900/40 hover:border-amber-400',
          text: 'text-amber-700 dark:text-amber-400',
          pill: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700'
        };
      case 'rose':
        return {
          bg: 'bg-rose-50 dark:bg-rose-950/20',
          border: 'border-rose-100 dark:border-rose-900/40 hover:border-rose-400',
          text: 'text-rose-700 dark:text-rose-400',
          pill: 'bg-rose-100 dark:bg-rose-950/60 text-rose-700'
        };
      default:
        return {
          bg: 'bg-slate-50 dark:bg-slate-800/50',
          border: 'border-slate-100 dark:border-slate-700 hover:border-slate-400',
          text: 'text-slate-700 dark:text-slate-300',
          pill: 'bg-slate-100 dark:bg-slate-700 text-slate-700'
        };
    }
  };

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
            <p className="text-sm font-bold uppercase tracking-wider">Cargando Mapa de Procesos...</p>
          </div>
        ) : error || !data ? (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 p-6 rounded-3xl flex items-center gap-4 text-red-800 dark:text-red-300">
            <AlertCircle className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">Error de carga</h4>
              <p className="text-xs">{error || 'No se pudo obtener la información'}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-16 animate-fadeIn text-left">
            
            {/* Header description & document info layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-2xl w-fit">
                      <Network size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-0.5">
                        Cadena de Valor FCFA
                      </span>
                      <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {data.titulo}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                    {data.introduccion}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800/60 flex items-center gap-3 text-xs text-gray-500 font-bold uppercase">
                  <Sparkles size={16} className="text-uncp" />
                  <span>Enfoque Basado en Procesos - ISO 9001 / SINEACE</span>
                </div>
              </div>

              {/* Sidebar Document Control */}
              <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                <div className="bg-[#e0e7ff] dark:bg-indigo-950/10 border border-indigo-100/50 dark:border-indigo-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700 bg-indigo-100 dark:bg-indigo-950/60 px-3 py-1 rounded-md">
                      Código SGC
                    </span>
                    <FileSpreadsheet size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">
                      {data.codigo}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1 mb-0 leading-tight">Mapa general estructurado de procesos.</p>
                  </div>
                </div>

                <div className="bg-[#f0f9ff] dark:bg-sky-950/10 border border-sky-100/50 dark:border-sky-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-700 bg-sky-100 dark:bg-sky-950/60 px-3 py-1 rounded-md">
                      Versión Mapa
                    </span>
                    <Award size={20} className="text-sky-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">
                      {data.version}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1 mb-0 leading-tight">Optimizado con estándares curriculares vigentes.</p>
                  </div>
                </div>

                <div className="bg-[#fffbeb] dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-md">
                      Fecha Oficial
                    </span>
                    <CalendarDays size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">
                      {data.fechaAprobacion}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1 mb-0 leading-tight">Último acuerdo académico de directores.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Process Categories Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-gray-200 dark:border-slate-800 w-fit mx-auto">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                  activeCategory === 'all' 
                    ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                Todos los Procesos
              </button>
              {data.categorias.map((cat) => {
                const themes = getColorThemes(cat.color);
                return (
                  <button
                    key={cat.tipo}
                    onClick={() => setActiveCategory(cat.tipo)}
                    className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      activeCategory === cat.tipo 
                        ? `${themes.bg} ${themes.text} font-black shadow-sm ring-1 ring-black/5 dark:ring-white/5` 
                        : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {renderIcon(cat.icon, 'w-4 h-4')}
                    {cat.nombre}
                  </button>
                );
              })}
            </div>

            {/* High-level Process Flow Concept Layout */}
            <div className="bg-slate-50 dark:bg-slate-900/30 border border-gray-150 dark:border-slate-800 p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Input section */}
              <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl w-full md:w-1/4 shadow-sm text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block mb-1">
                  Requisitos de Entrada
                </span>
                <h5 className="font-black text-slate-800 dark:text-white text-xs m-0 uppercase">
                  Demanda Social
                </h5>
                <p className="text-[10px] text-gray-500 mt-2 mb-0">Lineamientos SINEACE, perfil estudiantil, exigencias del mercado forestal y medio ambiente.</p>
              </div>

              {/* Connector Arrow */}
              <div className="text-gray-300 dark:text-slate-700 flex items-center justify-center rotate-90 md:rotate-0 shrink-0">
                <ArrowRightLeft size={32} />
              </div>

              {/* Main SGC Hub */}
              <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-uncp/10 to-emerald-600/10 border-2 border-dashed border-uncp/40 rounded-[32px] w-full md:w-2/4 text-center">
                <div className="p-3 bg-uncp text-white rounded-full mb-3 shadow-md">
                  <Network size={28} />
                </div>
                <h4 className="font-black text-slate-800 dark:text-white text-sm m-0 uppercase tracking-wider">
                  Sistema de Gestión de la Calidad (SGC)
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 mb-0 leading-relaxed">
                  Interacción dinámica que optimiza el servicio educativo mediante planificación, ejecución, control y mejora estratégica constante.
                </p>
              </div>

              {/* Connector Arrow */}
              <div className="text-gray-300 dark:text-slate-700 flex items-center justify-center rotate-90 md:rotate-0 shrink-0">
                <ArrowRightLeft size={32} />
              </div>

              {/* Output Section */}
              <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl w-full md:w-1/4 shadow-sm text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 block mb-1">
                  Resultados de Salida
                </span>
                <h5 className="font-black text-slate-800 dark:text-white text-xs m-0 uppercase">
                  Satisfacción
                </h5>
                <p className="text-[10px] text-gray-500 mt-2 mb-0">Egresados altamente competentes, desarrollo ecológico regional sostenible y acreditación de alta calidad.</p>
              </div>

            </div>

            {/* Render Process Groups */}
            <div className="space-y-12">
              {data.categorias
                .filter(cat => activeCategory === 'all' || activeCategory === cat.tipo)
                .map((cat) => {
                  const themes = getColorThemes(cat.color);
                  return (
                    <div key={cat.tipo} className="space-y-6 animate-fadeIn">
                      
                      {/* Header Category Card */}
                      <div className="pb-3 border-b border-gray-150 dark:border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-2xl ${themes.bg}`}>
                            {renderIcon(cat.icon, themes.text)}
                          </div>
                          <div>
                            <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 flex items-center gap-2">
                              {cat.nombre}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mt-1 max-w-2xl leading-relaxed">
                              {cat.descripcion}
                            </p>
                          </div>
                        </div>

                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md self-start md:self-auto ${themes.pill}`}>
                          {cat.items.length} Procesos Clave
                        </span>
                      </div>

                      {/* Process Sub-Items Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cat.items.map((proc, index) => (
                          <div 
                            key={index}
                            className={`bg-white dark:bg-slate-900 border ${themes.border} rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
                          >
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <span className={`text-xs font-black ${themes.text} shrink-0`}>
                                  {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <h4 className="text-sm md:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 group-hover:text-uncp transition-colors leading-snug">
                                  {proc.nombre}
                                </h4>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                                {proc.descripcion}
                              </p>
                            </div>
                            
                            <div className="pt-4 mt-4 border-t border-gray-50 dark:border-slate-800/60 flex items-center gap-1 text-[10px] font-bold text-gray-400 group-hover:text-uncp transition-colors self-end uppercase tracking-wider">
                              <span>SGC Activo</span>
                              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  );
                })}
            </div>

            {/* Documento Oficial PDF Embebido */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Visor de Mapa de Procesos SGC Oficial (PDF)
                  </h3>
                </div>
                
                <button 
                  onClick={() => setShowPdf(!showPdf)}
                  className="px-4 py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <Eye size={14} />
                  <span>{showPdf ? "Ocultar Visor" : "Mostrar Visor"}</span>
                </button>
              </div>

              {showPdf && (
                <div className="bg-slate-900 rounded-[32px] overflow-hidden shadow-lg border border-slate-800 animate-slideDown">
                  
                  {/* Top Bar of Simulated PDF Viewer */}
                  <div className="bg-slate-950 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#ef4444]/10 text-[#ef4444] rounded-lg">
                        <FileText size={18} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs md:text-sm font-black text-white m-0 tracking-tight leading-none">
                          {data.pdfTitulo}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                          Documento de Caracterización y Mapa de Procesos (PDF)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <a 
                        href={data.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                      >
                        <ExternalLink size={12} />
                        Ver completo
                      </a>

                      <a 
                        href={data.pdfUrl} 
                        download
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                      >
                        <Download size={12} />
                        Descargar
                      </a>
                    </div>
                  </div>

                  {/* PDF embed or simulated iframe fallback */}
                  <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between animate-fadeIn">
                    
                    {/* Embedded Iframe */}
                    <iframe 
                      src={`${data.pdfUrl}#toolbar=1&navpanes=1`} 
                      title={data.pdfTitulo}
                      className="w-full h-full border-0 absolute inset-0 z-10"
                    />

                    {/* Rich elegant layout underneath in case browser blocks PDF iframe or it is not supported on touch */}
                    <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                      <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        <Network size={48} className="animate-pulse text-emerald-400" />
                      </div>
                      <div className="space-y-2 max-w-lg">
                        <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                          Previsualización del Mapa de Procesos SGC
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Si su navegador no soporta la visualización directa de archivos PDF dentro de la página, puede descargarlo u obtenerlo en una pestaña independiente usando los siguientes botones oficiales de descarga:
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 justify-center">
                        <a 
                          href={data.pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all border border-slate-700"
                        >
                          <ExternalLink size={14} />
                          Nueva Pestaña
                        </a>
                        <a 
                          href={data.pdfUrl} 
                          download
                          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-md"
                        >
                          <Download size={14} />
                          Descargar PDF
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* PDF info bar footer */}
                  <div className="bg-slate-950 px-6 py-3 border-t border-slate-850 flex items-center justify-between text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                    <span>Facultad de Ciencias Forestales y del Ambiente - UNCP</span>
                    <span>Código de Caracterización: {data.codigo}</span>
                  </div>

                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </InternalPageLayout>
  );
};

export default CalidadMapa;

import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  LayoutList, 
  Info,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  Award
} from 'lucide-react';

interface GuiaEstructura {
  seccion: string;
  contenido: string;
}

interface Guia {
  id: string;
  titulo: string;
  siglas: string;
  descripcion: string;
  codigo: string;
  publicacion: string;
  estructura: GuiaEstructura[];
  pdfUrl: string;
  pdfTitulo: string;
  tamano: string;
}

interface GuiasData {
  titulo: string;
  descripcion: string;
  guias: Guia[];
}

const InvestigacionGuias: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/investigacion/guias'];
  const [data, setData] = useState<GuiasData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Tab states
  const [activeTab, setActiveTab] = useState<string>('plan-tesis');
  // Visibility of PDF viewers per guide
  const [showPdf, setShowPdf] = useState<{ [key: string]: boolean }>({
    'plan-tesis': true,
    'tesis-informe': true
  });
  // Expand/collapse structural chapters
  const [showChapters, setShowChapters] = useState<{ [key: string]: boolean }>({
    'plan-tesis': true,
    'tesis-informe': true
  });

  useEffect(() => {
    const fetchGuiasData = async () => {
      try {
        const response = await fetch('/datajson/iei-guias.json');
        if (!response.ok) {
          throw new Error('Error al cargar las guías del Instituto de Investigación');
        }
        const jsonData = await response.json();
        setData(jsonData);
        
        // Default active tab to the first guide id if available
        if (jsonData.guias && jsonData.guias.length > 0) {
          setActiveTab(jsonData.guias[0].id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchGuiasData();
  }, []);

  const togglePdf = (id: string) => {
    setShowPdf(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleChapters = (id: string) => {
    setShowChapters(prev => ({ ...prev, [id]: !prev[id] }));
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
            <p className="text-sm font-bold uppercase tracking-wider">Cargando Guías de Investigación...</p>
          </div>
        ) : error || !data ? (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 p-6 rounded-3xl flex items-center gap-4 text-red-800 dark:text-red-300">
            <AlertCircle className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">Error de carga</h4>
              <p className="text-xs">{error || 'No se pudo obtener la información de las guías'}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-16 animate-fadeIn text-left">
            
            {/* Context/Description Card */}
            <div className="bg-gradient-to-br from-uncp/5 via-teal-500/5 to-transparent dark:from-uncp/10 dark:via-transparent border border-uncp/10 dark:border-slate-850 rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="p-4 bg-uncp text-white rounded-3xl w-fit shrink-0">
                <BookOpen size={36} />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-uncp block">
                  Instituto Especializado de Investigación (IEI)
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  {data.titulo}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                  {data.descripcion}
                </p>
              </div>
            </div>

            {/* Selector de Guías (Tabs) */}
            <div className="space-y-6">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LayoutList className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Seleccione la Guía de Interés
                  </h3>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 px-3 py-1 rounded-md border border-emerald-100/20">
                  Vigente {new Date().getFullYear()}
                </span>
              </div>

              {/* Tab Navigation buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.guias.map((guia) => (
                  <button
                    key={guia.id}
                    onClick={() => setActiveTab(guia.id)}
                    className={`p-6 rounded-[32px] border text-left flex flex-col justify-between transition-all duration-300 relative select-none group ${
                      activeTab === guia.id
                        ? 'bg-uncp text-white shadow-md border-uncp scale-[1.01]'
                        : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-gray-150 dark:border-slate-800 hover:border-gray-300'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center w-full">
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                          activeTab === guia.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}>
                          {guia.codigo}
                        </span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                          activeTab === guia.id ? 'text-teal-200' : 'text-uncp'
                        }`}>
                          {guia.siglas}
                        </span>
                      </div>
                      
                      <h4 className={`text-sm md:text-base font-black uppercase tracking-tight m-0 leading-tight ${
                        activeTab === guia.id ? 'text-white' : 'text-slate-800 dark:text-white group-hover:text-uncp transition-colors'
                      }`}>
                        {guia.titulo}
                      </h4>
                      
                      <p className={`text-xs leading-relaxed m-0 text-justify line-clamp-2 ${
                        activeTab === guia.id ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {guia.descripcion}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[10px] font-black uppercase tracking-wider opacity-90">
                      <span>Tamaño: {guia.tamano}</span>
                      <div className="flex items-center gap-1">
                        <span>Explorar</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Guide Detailed Panel */}
            {data.guias.map((guia) => {
              if (guia.id !== activeTab) return null;
              
              return (
                <div key={guia.id} className="space-y-10 animate-fadeIn">
                  
                  {/* Info Header Card */}
                  <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-slate-800/80">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-uncp">
                          Estructura Estandarizada
                        </span>
                        <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                          {guia.titulo}
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => toggleChapters(guia.id)}
                          className="px-4 py-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
                        >
                          <LayoutList size={14} className="text-uncp" />
                          <span>{showChapters[guia.id] ? "Ocultar Capítulos" : "Ver Estructura"}</span>
                          {showChapters[guia.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>

                        <button 
                          onClick={() => togglePdf(guia.id)}
                          className="px-4 py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
                        >
                          <Eye size={14} />
                          <span>{showPdf[guia.id] ? "Ocultar PDF" : "Ver PDF"}</span>
                          {showPdf[guia.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                      {guia.descripcion}
                    </p>

                    {/* Estructura / Capítulos Section */}
                    {showChapters[guia.id] && (
                      <div className="pt-4 space-y-6 animate-fadeIn">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                          <Sparkles className="text-uncp animate-pulse" size={16} />
                          Contenido Estructurado de la Guía:
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {guia.estructura.map((cap, idx) => (
                            <div 
                              key={idx}
                              className="bg-slate-50/50 dark:bg-slate-900/40 border border-gray-150 dark:border-slate-800 rounded-2xl p-5 hover:border-uncp/20 transition-all duration-300 flex flex-col justify-between"
                            >
                              <div className="space-y-2">
                                <span className="text-[9px] font-black uppercase bg-uncp/10 text-uncp px-2 py-0.5 rounded-md">
                                  {cap.seccion.split(':')[0]}
                                </span>
                                <h5 className="text-xs md:text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight m-0 leading-tight">
                                  {cap.seccion}
                                </h5>
                                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                                  {cap.contenido}
                                </p>
                              </div>
                              
                              <div className="pt-3 mt-3 border-t border-gray-100 dark:border-slate-800/40 flex items-center gap-1.5 text-[8px] font-black text-gray-400 uppercase tracking-widest">
                                <CheckCircle2 size={10} className="text-emerald-500" />
                                <span>Requisito Oficial IEI</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* PDF Embedded Document Section */}
                  {showPdf[guia.id] && (
                    <div className="space-y-4 animate-slideDown">
                      <div className="bg-slate-900 rounded-[32px] overflow-hidden shadow-lg border border-slate-800">
                        
                        {/* Top Bar of Simulated PDF Viewer */}
                        <div className="bg-slate-950 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#ef4444]/10 text-[#ef4444] rounded-lg">
                              <FileText size={18} />
                            </div>
                            <div className="text-left">
                              <h4 className="text-xs md:text-sm font-black text-white m-0 tracking-tight leading-none">
                                {guia.pdfTitulo}
                              </h4>
                              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                                Visor de Documentos Oficiales (PDF)
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <a 
                              href={guia.pdfUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                            >
                              <ExternalLink size={12} />
                              Ver completo
                            </a>

                            <a 
                              href={guia.pdfUrl} 
                              download
                              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                            >
                              <Download size={12} />
                              Descargar ({guia.tamano})
                            </a>
                          </div>
                        </div>

                        {/* PDF embed or simulated iframe fallback */}
                        <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                          
                          {/* Embedded Iframe */}
                          <iframe 
                            src={`${guia.pdfUrl}#toolbar=1&navpanes=1`} 
                            title={guia.titulo}
                            className="w-full h-full border-0 absolute inset-0 z-10"
                          />

                          {/* Fallback layout underneath */}
                          <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                            <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                              <Bookmark size={48} className="animate-pulse text-emerald-400" />
                            </div>
                            <div className="space-y-2 max-w-lg">
                              <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                                Previsualización de la Guía Oficial
                              </h5>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                Si su navegador no soporta la visualización directa de archivos PDF dentro de la página, puede descargarlo u obtenerlo en una pestaña independiente usando los siguientes botones oficiales de descarga:
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-3 justify-center">
                              <a 
                                href={guia.pdfUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all border border-slate-700"
                              >
                                <ExternalLink size={14} />
                                Nueva Pestaña
                              </a>
                              <a 
                                href={guia.pdfUrl} 
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
                          <span>Código de Control: {guia.codigo}</span>
                        </div>

                      </div>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        )}

      </div>
    </InternalPageLayout>
  );
};

export default InvestigacionGuias;

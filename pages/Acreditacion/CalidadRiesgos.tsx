import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  ShieldAlert, 
  Lightbulb, 
  CheckCircle2, 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  ArrowRight, 
  CalendarDays, 
  FileSpreadsheet, 
  AlertTriangle,
  HeartHandshake,
  TrendingUp,
  Award
} from 'lucide-react';

interface RiesgoItem {
  id: string;
  categoria: string;
  riesgo: string;
  impacto: 'Alto' | 'Medio' | 'Bajo' | string;
  mitigacion: string;
}

interface OportunidadItem {
  id: string;
  categoria: string;
  oportunidad: string;
  beneficio: string;
  accion: string;
}

interface CalidadRiesgosData {
  titulo: string;
  codigo: string;
  version: string;
  fechaAprobacion: string;
  introduccion: string;
  riesgos: RiesgoItem[];
  oportunidades: OportunidadItem[];
  pdfUrl: string;
  pdfTitulo: string;
}

const CalidadRiesgos: React.FC = () => {
  const content = PAGE_CONTENT['/acreditacion/calidad/riesgos-oportunidades'];
  const [data, setData] = useState<CalidadRiesgosData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'all' | 'riesgos' | 'oportunidades'>('all');

  useEffect(() => {
    const fetchRiesgosData = async () => {
      try {
        const response = await fetch('/datajson/calidad-riesgos.json');
        if (!response.ok) {
          throw new Error('Error al cargar la gestión de riesgos y oportunidades');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchRiesgosData();
  }, []);

  const getImpactBadgeColor = (impacto: string) => {
    switch (impacto.toLowerCase()) {
      case 'alto':
        return 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-900/30';
      case 'medio':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30';
      case 'bajo':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30';
      default:
        return 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700';
    }
  };

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        
        {/* Intro Highlight */}
        <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-10 leading-snug italic border-l-8 border-uncp pl-6 py-2">
          {content.intro}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
            <Loader2 className="animate-spin text-uncp mb-4" size={40} />
            <p className="text-sm font-bold uppercase tracking-wider">Cargando riesgos y oportunidades...</p>
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
            
            {/* Context & Metadata Top Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-2xl w-fit">
                      <ShieldAlert size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-rose-600 dark:text-rose-400 block mb-0.5">
                        SGC Preventivo
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
                  <Award size={16} className="text-uncp" />
                  <span>Enfoque de Mejora Basado en Riesgos - SINEACE</span>
                </div>
              </div>

              {/* Sidebar Metadata Cards */}
              <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                <div className="bg-[#fff1f2] dark:bg-rose-950/10 border border-rose-100/50 dark:border-rose-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-rose-700 bg-rose-100 dark:bg-rose-950/60 px-3 py-1 rounded-md">
                      Código Matriz
                    </span>
                    <FileSpreadsheet size={20} className="text-rose-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">
                      {data.codigo}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1 mb-0 leading-tight">Control integrado para auditorías SINEACE.</p>
                  </div>
                </div>

                <div className="bg-[#f0f9ff] dark:bg-sky-950/10 border border-sky-100/50 dark:border-sky-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-700 bg-sky-100 dark:bg-sky-950/60 px-3 py-1 rounded-md">
                      Versión
                    </span>
                    <CheckCircle2 size={20} className="text-sky-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">
                      {data.version}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1 mb-0 leading-tight">Aprobado y vigente en toda la facultad.</p>
                  </div>
                </div>

                <div className="bg-[#fffbeb] dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-md">
                      Vigencia
                    </span>
                    <CalendarDays size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">
                      {data.fechaAprobacion}
                    </h5>
                    <p className="text-[11px] text-gray-500 mt-1 mb-0 leading-tight">Última revisión del equipo de calidad.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Filter Tabs */}
            <div className="flex items-center justify-center p-1.5 bg-slate-100 dark:bg-slate-900/80 rounded-2xl w-fit mx-auto border border-gray-200 dark:border-slate-800">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  activeTab === 'all' 
                    ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                Ver Todo
              </button>
              <button
                onClick={() => setActiveTab('riesgos')}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  activeTab === 'riesgos' 
                    ? 'bg-rose-500 text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <AlertTriangle size={14} />
                Riesgos Identificados
              </button>
              <button
                onClick={() => setActiveTab('oportunidades')}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  activeTab === 'oportunidades' 
                    ? 'bg-emerald-500 text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Lightbulb size={14} />
                Oportunidades
              </button>
            </div>

            {/* Content Lists */}
            <div className="space-y-12">
              
              {/* RIESGOS SECTION */}
              {(activeTab === 'all' || activeTab === 'riesgos') && (
                <div className="space-y-6">
                  <div className="pb-2 border-b border-rose-100 dark:border-rose-950 flex items-center gap-2">
                    <ShieldAlert className="text-rose-600 dark:text-rose-400" size={24} />
                    <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                      Riesgos de Calidad & Mitigación
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.riesgos.map((item) => (
                      <div 
                        key={item.id}
                        className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm hover:border-rose-300 dark:hover:border-rose-900/60 transition-all duration-300 flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-0.5 rounded-md">
                              {item.categoria}
                            </span>
                            <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md ${getImpactBadgeColor(item.impacto)}`}>
                              Prioridad: {item.impacto}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="text-xs font-black text-rose-500 shrink-0 mt-0.5">
                              {item.id}
                            </span>
                            <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 leading-snug">
                              {item.riesgo}
                            </h4>
                          </div>
                        </div>

                        <div className="bg-rose-50/40 dark:bg-rose-950/10 border border-rose-100/50 dark:border-rose-950/20 rounded-2xl p-4 space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                            Plan de Mitigación / Acción:
                          </span>
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed m-0 text-justify">
                            {item.mitigacion}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* OPORTUNIDADES SECTION */}
              {(activeTab === 'all' || activeTab === 'oportunidades') && (
                <div className="space-y-6">
                  <div className="pb-2 border-b border-emerald-100 dark:border-emerald-950 flex items-center gap-2">
                    <Lightbulb className="text-emerald-600 dark:text-emerald-400" size={24} />
                    <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                      Oportunidades de Crecimiento & Potenciación
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.oportunidades.map((item) => (
                      <div 
                        key={item.id}
                        className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm hover:border-emerald-300 dark:hover:border-emerald-900/60 transition-all duration-300 flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-0.5 rounded-md">
                              {item.categoria}
                            </span>
                            <span className="text-[10px] font-black uppercase bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100/30 px-2.5 py-0.5 rounded-md">
                              {item.beneficio}
                            </span>
                          </div>

                          <div className="flex items-start gap-2">
                            <span className="text-xs font-black text-emerald-500 shrink-0 mt-0.5">
                              {item.id}
                            </span>
                            <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 leading-snug">
                              {item.oportunidad}
                            </h4>
                          </div>
                        </div>

                        <div className="bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-950/20 rounded-2xl p-4 space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                            Estrategia de Captura:
                          </span>
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed m-0 text-justify">
                            {item.accion}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Documento Oficial PDF Embebido */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Matriz de Riesgos Oficial (SINEACE/SGC)
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
                          Matriz de Evaluación de Riesgos (PDF)
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

                    {/* Fallback layout underneath */}
                    <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                      <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        <FileSpreadsheet size={48} className="animate-pulse" />
                      </div>
                      <div className="space-y-2 max-w-lg">
                        <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                          Previsualización de la Matriz de Riesgos
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
                    <span>Código de Matriz: {data.codigo}</span>
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

export default CalidadRiesgos;

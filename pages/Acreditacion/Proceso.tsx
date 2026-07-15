import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  Award, 
  Calendar, 
  FileText, 
  Download, 
  CheckCircle2, 
  Eye, 
  ExternalLink,
  Users,
  Layers,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface Indicador {
  metrica: string;
  etiqueta: string;
  descripcion: string;
}

interface ActividadAcreditacion {
  actividad: string;
  descripcion: string;
}

interface GaleriaItem {
  url: string;
  caption: string;
}

interface AcreditacionData {
  titulo: string;
  resolucion: string;
  fechaAcreditacion: string;
  periodo: string;
  historico: {
    titulo: string;
    parrafo: string;
  };
  actualidad: {
    titulo: string;
    parrafo: string;
  };
  indicadores: Indicador[];
  actividadesAcreditacion: ActividadAcreditacion[];
  pdfUrl: string;
  pdfTitulo: string;
  galeria: GaleriaItem[];
}

const Proceso: React.FC = () => {
  const content = PAGE_CONTENT['/acreditacion/proceso'];
  const [data, setData] = useState<AcreditacionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdfDemo, setShowPdfDemo] = useState<boolean>(true);

  useEffect(() => {
    const fetchAcreditacion = async () => {
      try {
        const response = await fetch('datajson/acreditacion.json');
        if (!response.ok) {
          throw new Error('Error al cargar los datos de acreditación');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchAcreditacion();
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
            <p className="text-sm font-bold uppercase tracking-wider">Cargando datos de Acreditación...</p>
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
            
            {/* Historical and Current Status Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* HISTORICO CARD */}
              <div className="bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-transparent border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                      <Award size={26} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-0.5">
                        Acreditación Obtenida
                      </span>
                      <h4 className="text-base md:text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {data.historico.titulo}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify m-0">
                    {data.historico.parrafo}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-150 dark:border-slate-800/60 flex flex-wrap gap-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                  <span className="bg-emerald-100/50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-md">
                    SINEACE
                  </span>
                  <span className="bg-sky-100/50 dark:bg-sky-950/30 px-2.5 py-1 rounded-md">
                    RES. N° 235-2016-SINEACE
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    Periodo: 3 Años
                  </span>
                </div>
              </div>

              {/* ACTUALIDAD CARD */}
              <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-2xl shrink-0">
                      <Layers size={26} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-0.5">
                        Proceso Actual de Calidad
                      </span>
                      <h4 className="text-base md:text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {data.actualidad.titulo}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify m-0">
                    {data.actualidad.parrafo}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-150 dark:border-slate-800/60 flex flex-wrap gap-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                  <span className="bg-amber-100/50 dark:bg-amber-950/30 px-2.5 py-1 rounded-md">
                    Autoevaluación
                  </span>
                  <span className="bg-purple-100/50 dark:bg-purple-950/30 px-2.5 py-1 rounded-md">
                    34 Estándares
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    Actualización 2023-2026
                  </span>
                </div>
              </div>

            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {data.indicadores.map((ind, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-3"
                >
                  <span className="text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400 block tracking-tight">
                    {ind.metrica}
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-xs m-0 uppercase tracking-wide">
                      {ind.etiqueta}
                    </h5>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 mb-0 leading-normal">
                      {ind.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual activities listing */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="text-uncp" size={22} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Actividades para el Aseguramiento de la Calidad
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.actividadesAcreditacion.map((act, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 p-2.5 rounded-xl shrink-0">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-800 dark:text-white text-xs md:text-sm m-0 uppercase tracking-wide">
                        {act.actividad}
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-0 leading-relaxed">
                        {act.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated interactive committee meeting photos from image */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex items-center gap-2">
                <Users className="text-uncp" size={22} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Comité de Acreditación y Autoevaluación en Acción
                </h3>
              </div>

              {/* Grid of photos matching screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.galeria.map((gal, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                      <img 
                        src={gal.url} 
                        alt={gal.caption} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                        <span className="text-[11px] font-bold text-white leading-normal">
                          {gal.caption}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded PDF of example section */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Documento de Acreditación Oficial (SINEACE)
                  </h3>
                </div>
                
                <button 
                  onClick={() => setShowPdfDemo(!showPdfDemo)}
                  className="px-4 py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <Eye size={14} />
                  <span>{showPdfDemo ? "Ocultar Visor" : "Mostrar Visor"}</span>
                </button>
              </div>

              {showPdfDemo && (
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
                          Documento Oficial Embebido (PDF)
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
                        Ver pantalla completa
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
                  <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                    
                    {/* Embedded Iframe */}
                    <iframe 
                      src={`${data.pdfUrl}#toolbar=1&navpanes=1`} 
                      title={data.pdfTitulo}
                      className="w-full h-full border-0 absolute inset-0 z-10"
                    />

                    {/* Rich elegant layout underneath in case browser blocks PDF iframe or it is not supported on touch */}
                    <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                      <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        <FileText size={48} className="animate-pulse" />
                      </div>
                      <div className="space-y-2 max-w-lg">
                        <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                          Previsualización del PDF de Resolución
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Si su navegador no soporta la visualización directa de PDF dentro de marcos, o si prefiere abrirlo directamente en su aplicación de confianza, puede descargarlo u obtenerlo en una pestaña nueva mediante los siguientes accesos:
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
                          Descargar Documento
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* PDF info bar footer */}
                  <div className="bg-slate-950 px-6 py-3 border-t border-slate-850 flex items-center justify-between text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                    <span>Organismo regulador: SINEACE Perú</span>
                    <span>Formato: PDF / Documento de Consulta</span>
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

export default Proceso;

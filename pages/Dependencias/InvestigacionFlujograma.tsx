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
  Building2, 
  Sparkles, 
  Compass, 
  Microscope,
  ArrowUpRight,
  CheckCircle2,
  ListTodo,
  TrendingUp,
  Award,
  ChevronRight,
  BookOpen,
  Camera
} from 'lucide-react';

interface InstitutoInfo {
  nombre: string;
  descripcion: string;
  funciones: string[];
}

interface PasoFlujograma {
  paso: string;
  etapa: string;
  accion: string;
  detalles: string;
}

interface FlujogramaInfo {
  titulo: string;
  descripcion: string;
  pasos: PasoFlujograma[];
}

interface GaleriaItem {
  url: string;
  caption: string;
}

interface IEIFlujogramaData {
  instituto: InstitutoInfo;
  flujograma: FlujogramaInfo;
  pdfUrl: string;
  pdfTitulo: string;
  codigoNormativo: string;
  galeria: GaleriaItem[];
}

const InvestigacionFlujograma: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/investigacion/flujograma'];
  const [data, setData] = useState<IEIFlujogramaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState<boolean>(true);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const fetchFlujogramaData = async () => {
      try {
        const response = await fetch('datajson/iei-flujograma.json');
        if (!response.ok) {
          throw new Error('Error al cargar la información del Flujograma e Instituto');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchFlujogramaData();
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
            <p className="text-sm font-bold uppercase tracking-wider">Cargando Guía de Tesis y Reglamento...</p>
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
            
            {/* DIRECCIÓN DE INSTITUTO ESPECIALIZADO DE INVESTIGACIÓN SECTION (FROM IMAGE 1) */}
            <div className="space-y-8">
              <div className="pb-3 border-b border-gray-150 dark:border-slate-800 flex items-center gap-3">
                <Building2 className="text-uncp" size={26} />
                <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  {data.instituto.nombre}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Description & Functions list from Image */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm">
                    <h4 className="text-xs font-black uppercase tracking-widest text-uncp mb-3 block">
                      Definición y Misión
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                      {data.instituto.descripcion}
                    </p>
                  </div>

                  {/* Functions as beautifully styled list */}
                  <div className="bg-gradient-to-br from-emerald-50/40 to-transparent dark:from-slate-900/40 border border-gray-150 dark:border-slate-800 rounded-[32px] p-6 md:p-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                      <ListTodo size={16} />
                      Funciones Principales del Instituto:
                    </h4>
                    
                    <div className="space-y-4">
                      {data.instituto.funciones.map((func, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <span className="p-1 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-bold shrink-0 mt-0.5">
                            {(idx+1).toString().padStart(2, '0')}
                          </span>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 m-0 leading-relaxed text-justify">
                            {func}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Laboratory/Research Gallery Side-Card (representing the images shown) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-slate-900 text-white rounded-[32px] p-6 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                          Investigación FCFA
                        </span>
                        <Camera size={14} className="text-slate-500" />
                      </div>
                      <h4 className="text-sm md:text-base font-black uppercase tracking-tight mb-2 m-0 text-white">
                        Laboratorios & Campo
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed m-0 mb-4">
                        Estudiantes y tesistas de la facultad ejecutando ensayos científicos y mediciones forestales.
                      </p>
                    </div>

                    {/* Small Mini Gallery list */}
                    <div className="space-y-3">
                      {data.galeria.map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-3 bg-slate-950/60 p-2.5 rounded-2xl border border-slate-800/80 group hover:border-uncp/40 transition-colors"
                        >
                          <img 
                            src={item.url} 
                            alt={item.caption} 
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 object-cover rounded-xl shrink-0" 
                          />
                          <p className="text-[10px] text-slate-300 font-medium m-0 leading-tight line-clamp-2">
                            {item.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* INTERACTIVE FLUJOGRAMA PROCESO DE PLAN DE TESIS SECTION */}
            <div className="space-y-8">
              <div className="pb-3 border-b border-gray-150 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-uncp" size={26} />
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                      {data.flujograma.titulo}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mt-0.5">
                      Siga paso a paso las etapas necesarias para registrar y aprobar su Plan de Tesis.
                    </p>
                  </div>
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-widest bg-uncp/15 text-uncp px-4 py-1.5 rounded-full border border-uncp/20 self-start md:self-auto">
                  Ruta Académica Oficial
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/40 border border-gray-150 dark:border-slate-800/80 rounded-[40px] p-6 md:p-8 space-y-8">
                
                {/* Horizontal flow line of steps */}
                <div className="overflow-x-auto pb-4 scrollbar-thin">
                  <div className="flex items-stretch min-w-[800px] gap-2">
                    {data.flujograma.pasos.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <button
                          onClick={() => setActiveStep(idx)}
                          className={`flex-1 p-4 rounded-3xl transition-all duration-300 border text-left flex flex-col justify-between h-32 relative select-none ${
                            activeStep === idx
                              ? 'bg-uncp text-white shadow-lg border-uncp ring-2 ring-uncp/20 scale-[1.02]'
                              : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-gray-150 dark:border-slate-800 hover:border-gray-300 hover:scale-[1.01]'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <span className={`text-xs font-black uppercase px-2 py-0.5 rounded ${
                              activeStep === idx 
                                ? 'bg-white/20 text-white' 
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}>
                              Paso {step.paso}
                            </span>
                            <span className={`text-[9px] font-black uppercase tracking-widest ${
                              activeStep === idx ? 'text-teal-200' : 'text-uncp'
                            }`}>
                              {step.etapa}
                            </span>
                          </div>
                          
                          <h5 className={`text-xs font-black uppercase tracking-tight m-0 leading-tight line-clamp-2 ${
                            activeStep === idx ? 'text-white' : 'text-slate-800 dark:text-slate-100'
                          }`}>
                            {step.accion}
                          </h5>
                        </button>

                        {idx < data.flujograma.pasos.length - 1 && (
                          <div className="flex items-center justify-center text-gray-350 dark:text-slate-700 shrink-0 select-none">
                            <ChevronRight size={18} />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Selected step details card */}
                <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start animate-fadeIn">
                  
                  {/* Huge numeric badge */}
                  <div className="flex flex-col items-center justify-center w-20 h-20 bg-uncp text-white rounded-[24px] shrink-0 font-black text-3xl shadow-md border-4 border-white dark:border-slate-900">
                    {data.flujograma.pasos[activeStep].paso}
                  </div>

                  {/* Text details */}
                  <div className="space-y-4 text-left flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100/30">
                        Etapa: {data.flujograma.pasos[activeStep].etapa}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full border border-indigo-100/30">
                        IEI-FCFA Reglamento
                      </span>
                    </div>

                    <h4 className="text-base md:text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                      {data.flujograma.pasos[activeStep].accion}
                    </h4>

                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed m-0 text-justify">
                      {data.flujograma.pasos[activeStep].detalles}
                    </p>

                    <div className="pt-3 border-t border-gray-50 dark:border-slate-800/60 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        <span>SGC Certificado</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award size={12} className="text-uncp" />
                        <span>Calidad Académica</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* DOCUMENTO OFICIAL EMBEDDED PDF SECTION */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Normas y Flujograma del Trámite de Tesis (PDF)
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
                          Flujograma de Trámites Administrativos (PDF)
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
                  <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                    
                    {/* Embedded Iframe */}
                    <iframe 
                      src={`${data.pdfUrl}#toolbar=1&navpanes=1`} 
                      title={data.pdfTitulo}
                      className="w-full h-full border-0 absolute inset-0 z-10"
                    />

                    {/* Fallback layout underneath */}
                    <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                      <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        <BookOpen size={48} className="animate-pulse text-emerald-400" />
                      </div>
                      <div className="space-y-2 max-w-lg">
                        <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                          Previsualización del Flujograma Oficial
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
                    <span>Código de Control: {data.codigoNormativo}</span>
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

export default InvestigacionFlujograma;

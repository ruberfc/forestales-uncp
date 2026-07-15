import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  BookOpen, 
  Award, 
  FileText, 
  CheckCircle2, 
  Download, 
  Eye, 
  ExternalLink, 
  ShieldCheck, 
  Check, 
  CalendarDays,
  FileSpreadsheet,
  Info
} from 'lucide-react';

interface PilarCalidad {
  titulo: string;
  descripcion: string;
}

interface ManualCalidadData {
  titulo: string;
  codigo: string;
  version: string;
  fechaAprobacion: string;
  objeto: string;
  pilares: PilarCalidad[];
  politicaCalidad: string;
  objetivosSGC: string[];
  pdfUrl: string;
  pdfTitulo: string;
}

const CalidadManual: React.FC = () => {
  const content = PAGE_CONTENT['/acreditacion/calidad/manual'];
  const [data, setData] = useState<ManualCalidadData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState<boolean>(true);

  useEffect(() => {
    const fetchManualData = async () => {
      try {
        const response = await fetch('/datajson/calidad-manual.json');
        if (!response.ok) {
          throw new Error('Error al cargar el Manual de Calidad');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchManualData();
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
            <p className="text-sm font-bold uppercase tracking-wider">Cargando Manual de Calidad del SGC...</p>
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
            
            {/* Objeto & Document Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Objeto Card with Extracted Image Data */}
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-0.5">
                        Objeto del Documento
                      </span>
                      <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {data.titulo}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Extracted text block from the user image */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                    {data.objeto}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800/60 flex items-center gap-3 text-xs text-gray-500 font-bold uppercase">
                  <Info size={16} className="text-uncp" />
                  <span>Sistema de Gestión de la Calidad (SGC) - FCFA</span>
                </div>
              </div>

              {/* Sidebar Metadata Badges */}
              <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                <div className="bg-[#f0fdf4] dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-md">
                      Código Oficial
                    </span>
                    <FileSpreadsheet size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-base m-0 uppercase">
                      {data.codigo}
                    </h5>
                    <p className="text-xs text-gray-500 mt-1 mb-0">Identificación única de control del SGC.</p>
                  </div>
                </div>

                <div className="bg-[#f0f9ff] dark:bg-sky-950/10 border border-sky-100/50 dark:border-sky-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-700 bg-sky-100 dark:bg-sky-950/60 px-3 py-1 rounded-md">
                      Versión Actual
                    </span>
                    <Award size={20} className="text-sky-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-base m-0 uppercase">
                      {data.version}
                    </h5>
                    <p className="text-xs text-gray-500 mt-1 mb-0">Revisado y aprobado bajo estándares actuales.</p>
                  </div>
                </div>

                <div className="bg-[#fffbeb] dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-md">
                      Aprobación
                    </span>
                    <CalendarDays size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-base m-0 uppercase">
                      {data.fechaAprobacion}
                    </h5>
                    <p className="text-xs text-gray-500 mt-1 mb-0">Fecha de vigencia y aplicación académica.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Política de la Calidad Card */}
            <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-100 dark:border-slate-800 p-8 rounded-[40px] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500 text-white rounded-2xl shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Política de la Calidad FCFA
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-700 dark:text-gray-300 leading-relaxed text-justify m-0 font-medium">
                {data.politicaCalidad}
              </p>
            </div>

            {/* Pilares del SGC */}
            <div className="space-y-6">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="text-uncp" size={22} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Pilares de la Gestión de Calidad
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.pilares.map((pilar, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <span className="inline-block text-[10px] font-black uppercase bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-md">
                        Pilar {idx + 1}
                      </span>
                      <h4 className="text-sm md:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {pilar.titulo}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                        {pilar.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objetivos del SGC Section */}
            <div className="space-y-6">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex items-center gap-2">
                <Award className="text-uncp" size={22} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Objetivos del SGC
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.objetivosSGC.map((obj, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-900/40 border border-gray-150 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-start gap-4"
                  >
                    <div className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 p-2 rounded-xl shrink-0 mt-0.5">
                      <Check size={18} />
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-slate-700 dark:text-gray-300 leading-relaxed m-0 text-justify">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documento Oficial PDF Embebido */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Visor de Documento Oficial de la Calidad (PDF)
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
                          Documento de Aprobación Oficial (PDF)
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
                        <FileText size={48} className="animate-pulse" />
                      </div>
                      <div className="space-y-2 max-w-lg">
                        <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                          Previsualización del Manual de Calidad SGC
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
                    <span>Código de Control del SGC: {data.codigo}</span>
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

export default CalidadManual;

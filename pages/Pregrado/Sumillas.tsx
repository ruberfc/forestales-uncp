import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { FileText, Download, Loader2, AlertCircle, BookOpen, GraduationCap, Clock, Award, Info } from 'lucide-react';

interface Curso {
  codigo: string;
  nombre: string;
  ciclo: string;
  creditos: number;
  descripcion: string;
}

interface AreaGrupo {
  area: string;
  cursos: Curso[];
}

interface SumillasData {
  titulo: string;
  descripcion: string;
  resolucion: string;
  actualizado: string;
  pdfUrl: string;
  grupos: AreaGrupo[];
}

const Sumillas: React.FC = () => {
  const content = PAGE_CONTENT['/pregrado/sumillas'];
  const [data, setData] = useState<SumillasData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSumillas = async () => {
      try {
        const response = await fetch('/datajson/sumillas.json');
        if (!response.ok) {
          throw new Error('Error al cargar el compendio de sumillas');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchSumillas();
  }, []);

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-8 leading-snug italic border-l-8 border-uncp pl-6 py-2">
          {content.intro}
        </div>
        <div className="space-y-6 mb-12">
          {content.paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-lg">
              {para}
            </p>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
            <Loader2 className="animate-spin text-uncp mb-4" size={40} />
            <p className="text-sm font-bold uppercase tracking-wider">Cargando compendio de sumillas...</p>
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
          <div className="space-y-12 animate-fadeIn text-left">
            
            {/* Visual Panel & Download Actions */}
            <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-[#84cc16]/10 text-[#84cc16] rounded-2xl shadow-sm shrink-0">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 mb-1">
                    {data.titulo}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide">
                    <span className="flex items-center gap-1">
                      <Award size={14} className="text-gray-400" />
                      {data.resolucion}
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-gray-400" />
                      Actualizado: {data.actualizado}
                    </span>
                  </div>
                </div>
              </div>
              
              <a 
                href={data.pdfUrl}
                download={data.titulo + ".pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-black rounded-xl text-xs uppercase tracking-widest transition-all hover:scale-[1.02] shadow-md shadow-emerald-700/10 self-stretch md:self-auto text-center shrink-0"
              >
                <span>Descargar Compendio PDF</span>
                <Download size={16} />
              </a>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b-2 border-gray-150 dark:border-slate-800">
                <FileText className="text-uncp" size={22} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Previsualización de Sumillas Oficiales
                </h3>
              </div>

              {/* Informative notice */}
              <div className="bg-sky-50/50 dark:bg-sky-950/10 border border-sky-100/60 dark:border-sky-900/25 p-4 rounded-2xl flex items-start gap-3">
                <Info size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <p className="text-xs text-sky-950 dark:text-sky-300 font-medium leading-relaxed m-0">
                  <strong>Nota sobre previsualización:</strong> Aquí puede visualizar un documento PDF de ejemplo con la estructura curricular completa. Si su navegador no cuenta con un lector integrado, utilice el botón de descarga para guardar el compendio de sumillas de forma directa.
                </p>
              </div>

              {/* PDF frame container */}
              <div className="bg-gray-100 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-inner p-2">
                <iframe 
                  src={data.pdfUrl} 
                  className="w-full h-[550px] md:h-[650px] rounded-2xl border-none" 
                  title="Visor de Sumillas de Ingeniería Forestal UNCP"
                />
              </div>
            </div>

            {/* Structured Course Sumillas */}
            <div className="space-y-10 pt-4">
              <div className="pb-2 border-b-2 border-gray-150 dark:border-slate-800">
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Resumen Analítico de Cursos Principales
                </h3>
              </div>

              <div className="space-y-12">
                {data.grupos.map((grupo, gIdx) => (
                  <div key={gIdx} className="space-y-6">
                    {/* Area Badge Header */}
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-6 bg-[#84cc16] rounded-full"></div>
                      <h4 className="text-base md:text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {grupo.area}
                      </h4>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {grupo.cursos.map((curso, cIdx) => (
                        <div 
                          key={cIdx} 
                          className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                                Código: {curso.codigo}
                              </span>
                              <span className="text-[10px] bg-[#84cc16]/10 text-[#84cc16] px-2 py-1 rounded-md font-black uppercase tracking-wider">
                                {curso.ciclo}
                              </span>
                            </div>
                            
                            <h5 className="font-black text-slate-800 dark:text-white text-sm uppercase tracking-tight m-0">
                              {curso.nombre}
                            </h5>
                            
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-justify m-0">
                              {curso.descripcion}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-gray-100 dark:border-slate-800/80 mt-4 flex items-center justify-between text-[11px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                            <span className="flex items-center gap-1">
                              <BookOpen size={12} />
                              Asignatura
                            </span>
                            <span>{curso.creditos} Créditos</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default Sumillas;

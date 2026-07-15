import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { Calendar, Download, Loader2, AlertCircle, FileText, Info, CheckSquare } from 'lucide-react';

interface Actividad {
  nombre: string;
  fecha: string;
}

interface EventoFase {
  fase: string;
  actividades: Actividad[];
}

interface CalendarioData {
  titulo: string;
  resolucion: string;
  actualizado: string;
  pdfUrl: string;
  eventos: EventoFase[];
}

const CalendarioAcademico: React.FC = () => {
  const content = PAGE_CONTENT['/pregrado/calendario-academico'];
  const [data, setData] = useState<CalendarioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCalendario = async () => {
      try {
        const response = await fetch('datajson/calendario.json');
        if (!response.ok) {
          throw new Error('Error al cargar el calendario académico');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchCalendario();
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
            <p className="text-sm font-bold uppercase tracking-wider">Cargando calendario académico...</p>
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
          <div className="space-y-12 animate-fadeIn">
            
            {/* Visual Header & Download Actions */}
            <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 text-left">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-2xl shadow-sm shrink-0">
                  <Calendar size={32} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 mb-1">
                    {data.titulo}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide">
                    <span>{data.resolucion}</span>
                    <span className="hidden md:inline">•</span>
                    <span>Actualizado: {data.actualizado}</span>
                  </div>
                </div>
              </div>
              
              <a 
                href={data.pdfUrl}
                download={data.titulo + ".pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-black rounded-xl text-xs uppercase tracking-widest transition-all hover:scale-[1.02] shadow-md shadow-emerald-700/10 self-stretch md:self-auto text-center"
              >
                <span>Descargar Calendario</span>
                <Download size={16} />
              </a>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b-2 border-gray-150 dark:border-slate-800 text-left">
                <FileText className="text-uncp" size={22} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Previsualización del Documento Oficial
                </h3>
              </div>

              {/* Informative notice for mobile vs desktop */}
              <div className="bg-sky-50/50 dark:bg-sky-950/10 border border-sky-100/60 dark:border-sky-900/25 p-4 rounded-2xl flex items-start gap-3 text-left">
                <Info size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <p className="text-xs text-sky-950 dark:text-sky-300 font-medium leading-relaxed m-0">
                  <strong>Nota sobre previsualización:</strong> Este es un visor de ejemplo que puede actualizarse con el PDF oficial. Si se encuentra en un dispositivo móvil y no logra visualizar el documento embebido, por favor presione el botón superior de descarga para guardarlo directamente.
                </p>
              </div>

              {/* Iframe element */}
              <div className="bg-gray-100 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-inner p-2">
                <iframe 
                  src={data.pdfUrl} 
                  className="w-full h-[550px] md:h-[650px] rounded-2xl border-none" 
                  title="Visor de Calendario Académico UNCP"
                />
              </div>
            </div>

            {/* Live Key Milestones directly from JSON */}
            <div className="space-y-6 pt-4">
              <div className="text-left pb-2 border-b-2 border-gray-150 dark:border-slate-800">
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Hitos Clave del Periodo Académico
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.eventos.map((fase, i) => (
                  <div 
                    key={i}
                    className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col text-left"
                  >
                    <div className="pb-3 border-b border-gray-100 dark:border-slate-800/80 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#84cc16]">Fase {i + 1}</span>
                      <h4 className="font-black text-slate-800 dark:text-white text-sm m-0 uppercase tracking-tight mt-0.5">
                        {fase.fase}
                      </h4>
                    </div>

                    <div className="space-y-4 flex-grow">
                      {fase.actividades.map((act, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-start gap-2">
                            <CheckSquare size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-xs font-bold text-slate-700 dark:text-gray-300 leading-snug">
                              {act.nombre}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium pl-5 m-0">
                            {act.fecha}
                          </p>
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

export default CalendarioAcademico;

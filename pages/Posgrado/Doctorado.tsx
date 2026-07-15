import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  Target, 
  GraduationCap, 
  Clock, 
  CreditCard, 
  Award, 
  BookOpen, 
  Bookmark, 
  Calendar,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface PlanSemestre {
  semestre: string;
  cursos: string[];
}

interface DoctoradoData {
  titulo: string;
  perfilEgresado: string;
  gradoAcademico: string;
  duracion: string;
  inversion: string;
  pensionMensual: string;
  totalCreditos: number;
  disenoCurricular: string;
  planEstudios: PlanSemestre[];
}

const Doctorado: React.FC = () => {
  const content = PAGE_CONTENT['/posgrado/doctorado'];
  const [data, setData] = useState<DoctoradoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctorado = async () => {
      try {
        const response = await fetch('datajson/doctorado.json');
        if (!response.ok) {
          throw new Error('Error al cargar la información del doctorado');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorado();
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

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
            <Loader2 className="animate-spin text-uncp mb-4" size={40} />
            <p className="text-sm font-bold uppercase tracking-wider">Cargando información del Doctorado...</p>
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
            
            {/* Header & Program Name Card */}
            <div className="bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-transparent border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-10 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-3xl shadow-sm shrink-0">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                    Programa Académico de Posgrado
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 leading-snug">
                    {data.titulo}
                  </h3>
                </div>
              </div>

              {/* Perfil del Egresado section inside */}
              <div className="pt-6 border-t border-gray-150 dark:border-slate-800/60 space-y-3">
                <h4 className="flex items-center gap-2 text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider m-0">
                  <Target className="text-uncp" size={18} />
                  Perfil del Egresado
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify m-0">
                  {data.perfilEgresado}
                </p>
              </div>
            </div>

            {/* General Metadata / Financial Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl w-fit">
                    <Bookmark size={20} />
                  </div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-gray-400">Grado Académico</span>
                  <h5 className="font-bold text-slate-800 dark:text-white text-xs leading-normal m-0 uppercase">
                    {data.gradoAcademico}
                  </h5>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="p-2.5 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 rounded-xl w-fit">
                    <Clock size={20} />
                  </div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-gray-400">Duración Académica</span>
                  <h5 className="font-bold text-slate-800 dark:text-white text-xs leading-normal m-0 uppercase">
                    {data.duracion}
                  </h5>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="p-2.5 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-xl w-fit">
                    <CreditCard size={20} />
                  </div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-gray-400">Inversión y Cuotas</span>
                  <h5 className="font-bold text-slate-800 dark:text-white text-xs leading-normal m-0 uppercase">
                    Matrícula: {data.inversion}<br/>
                    Pensión: {data.pensionMensual}
                  </h5>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="p-2.5 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 rounded-xl w-fit">
                    <Award size={20} />
                  </div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-gray-400">Créditos Totales</span>
                  <h5 className="font-bold text-slate-800 dark:text-white text-xs leading-normal m-0 uppercase">
                    {data.totalCreditos} Créditos Académicos
                  </h5>
                </div>
              </div>

            </div>

            {/* Asignaturas por Semestre Section (Grid layout based on image) */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b-2 border-gray-150 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Plan Curricular de Asignaturas
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wide">
                  <Calendar size={14} />
                  <span>{data.disenoCurricular}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.planEstudios.map((sem, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Header bar of Semester */}
                    <div className="bg-emerald-700 dark:bg-emerald-800 px-5 py-3 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-white">
                        {sem.semestre}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-100 bg-emerald-600/50 px-2 py-0.5 rounded-md">
                        Doctorado
                      </span>
                    </div>

                    {/* Courses List */}
                    <div className="p-5 divide-y divide-gray-100 dark:divide-slate-800/60">
                      {sem.cursos.map((curso, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                          <CheckCircle2 size={16} className="text-[#84cc16] shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-700 dark:text-gray-300 leading-relaxed text-justify">
                            {curso}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total credits footer stamp */}
              <div className="bg-[#f0f9ff]/50 dark:bg-sky-950/10 border border-sky-100/60 dark:border-sky-900/20 p-5 rounded-2xl flex items-center justify-between text-sky-950 dark:text-sky-300">
                <span className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                  <FileText size={16} className="text-sky-600" />
                  Estructura Curricular Oficial
                </span>
                <span className="text-xs font-black uppercase tracking-wider">
                  Total de Créditos: {data.totalCreditos}
                </span>
              </div>
            </div>

          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default Doctorado;

import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  History, 
  Calendar, 
  Award, 
  Compass, 
  Eye, 
  Target, 
  GraduationCap, 
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface HitoHistorico {
  anio: string;
  titulo: string;
  descripcion: string;
}

interface PosgradoPresentacionData {
  resenaHistorica: string;
  hitos: HitoHistorico[];
  mision: string;
  vision: string;
}

const Presentacion: React.FC = () => {
  const content = PAGE_CONTENT['/posgrado/presentacion'];
  const [data, setData] = useState<PosgradoPresentacionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPresentacion = async () => {
      try {
        const response = await fetch('/datajson/posgrado-presentacion.json');
        if (!response.ok) {
          throw new Error('Error al cargar la presentación de posgrado');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchPresentacion();
  }, []);

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
            <p className="text-sm font-bold uppercase tracking-wider">Cargando presentación de Posgrado...</p>
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
            
            {/* Reseña Histórica & Welcome Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                      <History size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-0.5">Nuestra Trayectoria</span>
                      <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        Reseña Histórica
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify m-0">
                    {data.resenaHistorica}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800/60 flex items-center gap-3 text-xs text-gray-500 font-bold uppercase">
                  <Building2 size={16} className="text-uncp" />
                  <span>Unidad de Posgrado de la FCFA - UNCP</span>
                </div>
              </div>

              {/* Quick statistics / highlights banner next to historical overview */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f0fdf4] dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">25+</span>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">Años de Excelencia</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-0">Liderando la investigación ambiental en la región central del país.</p>
                  </div>
                </div>

                <div className="bg-[#f0f9ff] dark:bg-sky-950/10 border border-sky-100/50 dark:border-sky-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <span className="text-4xl font-black text-sky-600 dark:text-sky-400">1ª</span>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">Maestría Ambiental</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-0">Pionera en el país con mención en Desarrollo Sostenible.</p>
                  </div>
                </div>

                <div className="bg-[#fffbeb] dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/30 rounded-3xl p-6 sm:col-span-2 flex items-center gap-4">
                  <div className="p-3 bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-2xl">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">Oferta Académica</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-0">Comprende 3 especialidades de maestría, 1 doctorado acreditado y diplomados de alta especialización.</p>
                  </div>
                </div>
              </div>

            </div>


            {/* Timeline of History Hitos */}
            <div className="space-y-8 pt-6">
              <div className="pb-2 border-b-2 border-gray-150 dark:border-slate-800 flex items-center gap-2">
                <Calendar className="text-uncp" size={24} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Hitos Históricos de Posgrado
                </h3>
              </div>

              {/* Beautiful Timeline component */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-slate-800 space-y-10 py-2">
                {data.hitos.map((hito, idx) => (
                  <div key={idx} className="relative group">
                    
                    {/* Bullet marker */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 sm:w-5 h-4 sm:h-5 bg-white dark:bg-slate-950 border-4 border-emerald-600 dark:border-emerald-500 rounded-full group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 transition-all duration-300 shadow-sm z-10"></div>
                    
                    {/* Time pill */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <span className="inline-block px-3 py-1 bg-emerald-500 text-white font-black text-xs uppercase tracking-widest rounded-full w-fit">
                        {hito.anio}
                      </span>
                      <h4 className="text-sm md:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {hito.titulo}
                      </h4>
                    </div>

                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-justify max-w-4xl m-0">
                      {hito.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why study here box / objectives */}
            <div className="bg-[#f8fafc] dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-8 rounded-[40px] space-y-6">
              <h3 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider m-0 flex items-center gap-2">
                <ShieldCheck className="text-uncp" size={20} />
                {content.features?.[0]?.title || 'Pilares Académicos de Nuestra Escuela'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(content.features?.[0]?.items || [
                  "Plana docente con grado de Doctor y reconocimiento RENACYT.",
                  "Convenios internacionales para pasantías de investigación.",
                  "Acceso a laboratorios especializados y estaciones experimentales.",
                  "Enfoque en investigación aplicada y solución de problemas reales."
                ]).map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:border-uncp dark:hover:border-uncp/60 transition-all duration-300"
                  >
                    <div className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 p-2 rounded-xl shrink-0">
                      <BookOpen size={18} />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-gray-300 leading-snug">
                      {item}
                    </span>
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

export default Presentacion;

import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../../constants';
import { Loader2, AlertCircle, Award, Target, Eye, ShieldCheck } from 'lucide-react';

interface MisionVisionPoliticaData {
  compromiso: string;
  mision: {
    titulo: string;
    descripcion: string;
    imagen: string;
  };
  vision: {
    titulo: string;
    descripcion: string;
    imagen: string;
  };
  politicaCalidad: {
    titulo: string;
    parrafos: string[];
    imagen: string;
  };
  resolucion: string;
}

const Calidad: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/mision-vision-politica/calidad'];
  const [data, setData] = useState<MisionVisionPoliticaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMisionVision = async () => {
      try {
        const response = await fetch('/datajson/mision-vision-politica.json');
        if (!response.ok) {
          throw new Error('Error al cargar la información de misión, visión y política');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchMisionVision();
  }, []);

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
          <Loader2 className="animate-spin text-uncp mb-4" size={40} />
          <p className="text-sm font-bold uppercase tracking-wider">Cargando misión, visión y política...</p>
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
        <div className="space-y-16 animate-fadeIn">
          {/* Commitment Highlight Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 px-4 py-4">
            <h2 className="text-lg md:text-2xl font-black text-sky-950 dark:text-sky-300 uppercase tracking-tight leading-snug">
              {data.compromiso}
            </h2>
            <div className="w-24 h-1.5 bg-[#84cc16] mx-auto rounded-full"></div>
          </div>

          {/* Mission and Vision visual list */}
          <div className="space-y-12">
            
            {/* MISIÓN */}
            <div className="bg-sky-50/50 dark:bg-sky-950/10 border border-sky-100/60 dark:border-sky-900/20 rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative p-2 bg-white dark:bg-slate-900 rounded-3xl shadow-md border border-gray-100 dark:border-slate-800">
                    <img 
                      src={data.mision.imagen} 
                      alt={data.mision.titulo} 
                      className="rounded-2xl object-cover w-full h-56 md:h-64 max-w-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#84cc16] text-white p-2 rounded-xl shadow-md">
                      <Target size={18} />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 space-y-4 text-left">
                  <h3 className="text-xl md:text-2xl font-black text-[#84cc16] uppercase tracking-wider flex items-center gap-2">
                    {data.mision.titulo}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                    {data.mision.descripcion}
                  </p>
                </div>
              </div>
            </div>

            {/* VISIÓN */}
            <div className="rounded-[32px] p-6 md:p-8 hover:bg-slate-50/40 dark:hover:bg-slate-900/20 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-left order-2 md:order-1">
                  <h3 className="text-xl md:text-2xl font-black text-[#84cc16] uppercase tracking-wider flex items-center gap-2">
                    {data.vision.titulo}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                    {data.vision.descripcion}
                  </p>
                </div>
                <div className="md:col-span-5 flex justify-center order-1 md:order-2">
                  <div className="relative p-2 bg-white dark:bg-slate-900 rounded-3xl shadow-md border border-gray-100 dark:border-slate-800">
                    <img 
                      src={data.vision.imagen} 
                      alt={data.vision.titulo} 
                      className="rounded-2xl object-cover w-full h-56 md:h-64 max-w-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#84cc16] text-white p-2 rounded-xl shadow-md">
                      <Eye size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* POLÍTICA DE CALIDAD */}
            <div className="bg-sky-50/50 dark:bg-sky-950/10 border border-sky-100/60 dark:border-sky-900/20 rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative p-2 bg-white dark:bg-slate-900 rounded-3xl shadow-md border border-gray-100 dark:border-slate-800">
                    <img 
                      src={data.politicaCalidad.imagen} 
                      alt={data.politicaCalidad.titulo} 
                      className="rounded-2xl object-cover w-full h-56 md:h-64 max-w-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#84cc16] text-white p-2 rounded-xl shadow-md">
                      <ShieldCheck size={18} />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 space-y-4 text-left">
                  <h3 className="text-xl md:text-2xl font-black text-[#84cc16] uppercase tracking-wider flex items-center gap-2">
                    {data.politicaCalidad.titulo}
                  </h3>
                  <div className="space-y-4">
                    {data.politicaCalidad.parrafos.map((p, index) => (
                      <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base text-justify m-0">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Resolution Stamp footer */}
          <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
            <span className="text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Award size={14} className="text-gray-400" />
              {data.resolucion}
            </span>
          </div>
        </div>
      )}
    </InternalPageLayout>
  );
};

export default Calidad;

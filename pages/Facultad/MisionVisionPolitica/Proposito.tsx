import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../../constants';
import { Loader2, AlertCircle, Sparkles, BookOpen, Heart, Compass, FileText } from 'lucide-react';

interface PropositoData {
  titulo: string;
  parrafos: string[];
  resolucion: string;
}

const Proposito: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/mision-vision-politica/proposito'];
  const [data, setData] = useState<PropositoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProposito = async () => {
      try {
        const response = await fetch('datajson/proposito.json');
        if (!response.ok) {
          throw new Error('Error al cargar el propósito institucional');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchProposito();
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
          <p className="text-sm font-bold uppercase tracking-wider">Cargando propósito institucional...</p>
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
        <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto">
          {/* Main blue-ish panel, replicating the layout from the reference image */}
          <div className="bg-[#f0f9ff]/60 dark:bg-sky-950/10 border border-sky-100 dark:border-sky-900/20 rounded-[40px] p-6 md:p-12 shadow-sm space-y-8 text-left">
            
            {/* Header section */}
            <div className="flex items-center gap-3 pb-6 border-b border-sky-100/80 dark:border-sky-900/40">
              <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 p-2.5 rounded-2xl shadow-sm">
                <Sparkles size={22} />
              </div>
              <h2 className="text-lg md:text-xl font-black text-sky-950 dark:text-sky-300 uppercase tracking-tight m-0">
                {data.titulo}
              </h2>
            </div>

            {/* Paragraphs body */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed text-justify">
              {data.parrafos.map((parrafo, idx) => (
                <p key={idx} className="m-0">
                  {parrafo}
                </p>
              ))}
            </div>

            {/* Signature Resolution Stamp */}
            <div className="pt-6 border-t border-sky-100/80 dark:border-sky-900/40 flex items-center text-sky-900 dark:text-sky-400">
              <span className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                <FileText size={14} className="text-sky-600" />
                {data.resolucion}
              </span>
            </div>

          </div>

          {/* Core Pillars / Supporting Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 rounded-2xl p-6 text-left">
              <Compass className="text-emerald-500 mb-3" size={24} />
              <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Orientación Humanista</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Formación integral centrada en el respeto mutuo, valores éticos y el desarrollo integral de las personas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-uncp/5 to-transparent border border-uncp/10 rounded-2xl p-6 text-left">
              <BookOpen className="text-uncp mb-3" size={24} />
              <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Enfoque Científico</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Investigación e innovación para responder a las demandas del sector forestal y la conservación del ambiente.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-500/5 to-transparent border border-sky-500/10 rounded-2xl p-6 text-left">
              <Heart className="text-sky-500 mb-3" size={24} />
              <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Responsabilidad Social</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Compromiso activo con las comunidades de la región para promover un desarrollo socialmente justo y sostenible.
              </p>
            </div>
          </div>
        </div>
      )}
    </InternalPageLayout>
  );
};

export default Proposito;

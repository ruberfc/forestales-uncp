import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../../constants';
import { Loader2, AlertCircle, Leaf, Shield, FileText, Landmark, Award } from 'lucide-react';

interface PoliticaAmbientalData {
  titulo: string;
  parrafosIntro: string[];
  compromisoTexto: string;
  historiaContexto: string;
  compromisos: string[];
  resolucion: string;
}

const Ambiental: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/mision-vision-politica/ambiental'];
  const [data, setData] = useState<PoliticaAmbientalData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAmbiental = async () => {
      try {
        const response = await fetch('/datajson/politica-ambiental.json');
        if (!response.ok) {
          throw new Error('Error al cargar la política ambiental');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchAmbiental();
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
          <p className="text-sm font-bold uppercase tracking-wider">Cargando política ambiental...</p>
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
          {/* Main Document Panel - matches the visual aesthetic in the user's screenshot */}
          <div className="bg-[#f0f9ff]/60 dark:bg-sky-950/10 border border-sky-100 dark:border-sky-900/20 rounded-[40px] p-6 md:p-12 shadow-sm space-y-8 text-left">
            
            {/* Header Title inside the box */}
            <div className="text-center space-y-3 pb-6 border-b border-sky-100/80 dark:border-sky-900/40">
              <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 p-3 rounded-2xl w-fit mx-auto shadow-sm">
                <Leaf size={24} />
              </div>
              <h2 className="text-lg md:text-xl font-black text-sky-950 dark:text-sky-300 uppercase tracking-tight max-w-2xl mx-auto leading-snug">
                {data.titulo}
              </h2>
            </div>

            {/* Intro Paragraphs */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed text-justify">
              {data.parrafosIntro.map((parrafo, i) => (
                <p key={i} className="m-0">
                  {parrafo}
                </p>
              ))}
            </div>

            {/* Commit statement and History */}
            <div className="space-y-4 pt-4 border-t border-sky-100/60 dark:border-sky-900/20">
              <h3 className="font-black text-sky-900 dark:text-sky-300 text-sm md:text-base uppercase tracking-tight m-0">
                {data.compromisoTexto}
              </h3>
              
              <div className="bg-white/60 dark:bg-slate-950/40 rounded-2xl p-6 border border-sky-100/50 dark:border-sky-900/10 text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed text-justify flex gap-4">
                <Landmark size={20} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <p className="m-0 font-medium">
                  {data.historiaContexto}
                </p>
              </div>
            </div>

            {/* 1-4 Commitments List */}
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 gap-4">
                {data.compromisos.map((compromiso, idx) => (
                  <div 
                    key={idx}
                    className="flex gap-4 p-5 bg-white/80 dark:bg-slate-950/60 rounded-2xl border border-sky-100/40 dark:border-sky-900/10 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Circle number */}
                    <div className="w-8 h-8 rounded-full bg-[#84cc16] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                      {idx + 1}
                    </div>
                    {/* Content text */}
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm font-bold leading-relaxed m-0 text-justify align-middle pt-1">
                      {compromiso}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Signature Footnote */}
            <div className="pt-6 border-t border-sky-100/80 dark:border-sky-900/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sky-900 dark:text-sky-400">
              <span className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                <FileText size={14} className="text-sky-600" />
                {data.resolucion}
              </span>
            </div>

          </div>

          {/* Supportive Cards block to give depth to the page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#84cc16]/5 to-transparent border border-[#84cc16]/10 rounded-2xl p-6 text-left">
              <Leaf className="text-[#84cc16] mb-3" size={24} />
              <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Eco-Eficiencia</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Uso racional y eficiente del agua, energía y materiales, fomentando el reciclaje y reducción de residuos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-500/5 to-transparent border border-sky-500/10 rounded-2xl p-6 text-left">
              <Shield className="text-sky-500 mb-3" size={24} />
              <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Responsabilidad Social</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Inserción de valores ambientales y éticos en el comportamiento diario de estudiantes, docentes y egresados.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 rounded-2xl p-6 text-left">
              <Award className="text-emerald-500 mb-3" size={24} />
              <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Mejora Continua</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Evaluación constante de metas ambientales para garantizar el desarrollo sustentable de nuestra facultad.
              </p>
            </div>
          </div>
        </div>
      )}
    </InternalPageLayout>
  );
};

export default Ambiental;

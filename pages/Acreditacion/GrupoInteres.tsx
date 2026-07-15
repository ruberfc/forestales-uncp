import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  Users, 
  CheckCircle2, 
  FileText, 
  Download, 
  Eye, 
  ExternalLink,
  Briefcase,
  Building,
  TreePine,
  Shield,
  HelpCircle,
  Award,
  Users2,
  CalendarDays,
  MapPin,
  FileCheck
} from 'lucide-react';

interface MiembroComite {
  cargo: string;
  nombre: string;
  institucion: string;
}

interface SectorInteres {
  nombre: string;
  funcion: string;
}

interface GrupoInteresData {
  titulo: string;
  descripcionGeneral: string;
  detalleEstablecimiento: string;
  comiteConsultivo: MiembroComite[];
  sectores: SectorInteres[];
  pdfUrl: string;
  pdfTitulo: string;
}

const GrupoInteres: React.FC = () => {
  const content = PAGE_CONTENT['/acreditacion/grupo-interes'];
  const [data, setData] = useState<GrupoInteresData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState<boolean>(true);

  useEffect(() => {
    const fetchGrupoInteres = async () => {
      try {
        const response = await fetch('datajson/grupo-interes.json');
        if (!response.ok) {
          throw new Error('Error al cargar la información de grupos de interés');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchGrupoInteres();
  }, []);

  // Helper to resolve an icon for a specific sector name
  const getSectorIcon = (nombre: string) => {
    const lower = nombre.toLowerCase();
    if (lower.includes('forestal')) {
      return <TreePine size={22} className="text-emerald-600 dark:text-emerald-400" />;
    }
    if (lower.includes('ambiental')) {
      return <Shield size={22} className="text-teal-600 dark:text-teal-400" />;
    }
    if (lower.includes('civil') || lower.includes('comun')) {
      return <Users2 size={22} className="text-amber-600 dark:text-amber-400" />;
    }
    return <Building size={22} className="text-slate-600 dark:text-slate-400" />;
  };

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
            <p className="text-sm font-bold uppercase tracking-wider">Cargando grupos de interés y comité consultivo...</p>
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
            
            {/* Overview Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                      <Users size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-0.5">Demanda Social</span>
                      <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {data.titulo}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify m-0">
                    {data.descripcionGeneral}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800/60 flex items-center gap-3 text-xs text-gray-500 font-bold uppercase">
                  <Award size={16} className="text-uncp" />
                  <span>Aseguramiento de la Pertinencia Académica - SINEACE</span>
                </div>
              </div>

              {/* Informative Stats & Badges banner next to overview */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f0fdf4] dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">05</span>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">Sectores Laborales</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-0">Integrados estratégicamente para validar y retroalimentar la formación profesional.</p>
                  </div>
                </div>

                <div className="bg-[#f0f9ff] dark:bg-sky-950/10 border border-sky-100/50 dark:border-sky-900/30 rounded-3xl p-6 flex flex-col justify-between">
                  <span className="text-xs font-black uppercase bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 px-2.5 py-1 rounded-md w-fit mb-2">Reuniones</span>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">Sep - Oct 2022</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-0">Período de conformación y validación del nuevo Comité Consultivo.</p>
                  </div>
                </div>

                <div className="bg-[#fffbeb] dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/30 rounded-3xl p-6 sm:col-span-2 flex items-center gap-4">
                  <div className="p-3 bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-2xl">
                    <CalendarDays size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-white text-sm m-0 uppercase">Comité Activo</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-0">Sesiones consultivas regulares para adecuar el plan curricular con base en el mercado actual.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Context & Sectors Grid */}
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-900/40 border border-gray-150 dark:border-slate-800 rounded-[32px] p-6 md:p-8 space-y-6">
                <p className="text-sm md:text-base text-slate-700 dark:text-gray-300 leading-relaxed text-justify m-0">
                  {data.detalleEstablecimiento}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 pt-4">
                  {data.sectores.map((sec, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-4 shadow-sm hover:border-uncp transition-all duration-300 flex flex-col justify-between space-y-3"
                    >
                      <div className="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-xl w-fit">
                        {getSectorIcon(sec.nombre)}
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider m-0 leading-tight">
                          {sec.nombre}
                        </h4>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2 mb-0 leading-relaxed text-left">
                          {sec.funcion}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comité Consultivo Table Visual representation */}
            <div className="space-y-8">
              <div className="pb-2 border-b-2 border-gray-150 dark:border-slate-800 flex items-center gap-2">
                <Users className="text-uncp" size={24} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Miembros Electos del Comité Consultivo
                </h3>
              </div>

              {/* Table directly adapted from screenshot with extreme elegance */}
              <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse m-0">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-gray-200 dark:border-slate-800">
                        <th className="py-4 px-6 text-xs font-black uppercase text-slate-600 dark:text-slate-400 tracking-wider">
                          Cargo
                        </th>
                        <th className="py-4 px-6 text-xs font-black uppercase text-slate-600 dark:text-slate-400 tracking-wider">
                          Representante / Especialista
                        </th>
                        <th className="py-4 px-6 text-xs font-black uppercase text-slate-600 dark:text-slate-400 tracking-wider">
                          Organización / Entidad de Procedencia
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 dark:divide-slate-800">
                      {data.comiteConsultivo.map((miembro, index) => (
                        <tr 
                          key={index}
                          className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                        >
                          <td className="py-4 px-6">
                            <span className="inline-block px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 rounded-md">
                              {miembro.cargo}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="font-bold text-slate-800 dark:text-white text-sm">
                              {miembro.nombre}
                            </div>
                            <span className="text-[10px] text-gray-400 font-semibold block mt-0.5">
                              Miembro Activo
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 font-semibold">
                              <Building size={14} className="text-slate-400 shrink-0" />
                              <span>{miembro.institucion}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Embedded PDF Viewer Section */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Acta de Establecimiento del Comité (PDF)
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

                    {/* Fallback layout in case iframe lacks PDF plug-in */}
                    <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                      <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        <FileCheck size={48} className="animate-pulse" />
                      </div>
                      <div className="space-y-2 max-w-lg">
                        <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                          Previsualización del Acta Oficial
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Si su navegador no tiene soporte directo para mostrar PDFs dentro de páginas web, o si prefiere abrirlo directamente en su aplicación local, pulse el botón inferior para abrirlo en una nueva pestaña o para descargarlo directamente:
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
                          Descargar Acta
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* PDF info bar footer */}
                  <div className="bg-slate-950 px-6 py-3 border-t border-slate-850 flex items-center justify-between text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                    <span>Facultad de Ciencias Forestales y del Ambiente - UNCP</span>
                    <span>Documento Oficial de Consulta</span>
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

export default GrupoInteres;

import React, { useState } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  BookOpen,
  Target,
  Compass,
  Award,
  TrendingUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const PlanificacionPEI: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/planificacion/pei'];
  const [showPdf, setShowPdf] = useState<boolean>(true);

  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // Strategic pillars or objectives of the PEI
  const strategicPillars = [
    {
      icon: <Award className="text-uncp" size={24} />,
      title: "Misión Institucional",
      desc: "Formar profesionales altamente competentes, con responsabilidad social y liderazgo ético en ciencias forestales y ambientales, promoviendo el desarrollo sostenible."
    },
    {
      icon: <Compass className="text-uncp" size={24} />,
      title: "Visión del Futuro",
      desc: "Ser una facultad líder y referente nacional e internacional en educación forestal, reconocida por su excelencia académica, rigor científico e impacto social."
    },
    {
      icon: <Target className="text-uncp" size={24} />,
      title: "Objetivos Estratégicos",
      desc: "Establecer las líneas centrales del desarrollo académico de pregrado y posgrado, el impulso de la investigación científica y la transferencia tecnológica."
    },
    {
      icon: <TrendingUp className="text-uncp" size={24} />,
      title: "Impacto y Sostenibilidad",
      desc: "Consolidar proyectos de vinculación con comunidades locales e industrias forestales, promoviendo la adaptación al cambio climático y la conservación."
    }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image || "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1600"}
    >
      <div className="space-y-16 max-w-6xl mx-auto">
        
        {/* Intro Banner */}
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 border border-emerald-100/50 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 text-emerald-700 dark:text-emerald-400 translate-x-4 translate-y-4">
            <BookOpen size={160} />
          </div>
          <div className="relative space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
              <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                Planificación Institucional Plurianual
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-relaxed m-0 text-justify border-l-4 border-uncp pl-4">
              {content.intro}
            </h3>

            <div className="space-y-4 pt-4 border-t border-emerald-100/50 dark:border-slate-800/80">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars of PEI Planning */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Ejes Estratégicos
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mt-2 mb-0">
              Pilares de Desarrollo Institucional
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicPillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-3xl flex items-start gap-4 hover:shadow-sm transition-all group"
              >
                <div className="bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl group-hover:bg-uncp group-hover:text-white transition-colors duration-300 shrink-0">
                  {pillar.icon}
                </div>
                <div className="space-y-1.5 text-left">
                  <h4 className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded PDF Viewer Section */}
        <div className="space-y-6">
          <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="text-uncp" size={22} />
              <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                Visualizador del Plan Estratégico Institucional (PDF)
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
                  <div className="p-2 bg-uncp/20 text-uncp rounded-lg">
                    <FileText size={18} className="text-uncp" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs md:text-sm font-black text-white m-0 tracking-tight leading-none">
                      PEI_2023_2026_UNCP_Forestales.pdf
                    </h4>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                      Plan Estratégico Plurianual de la Universidad
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <a 
                    href={pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <ExternalLink size={12} />
                    Ver pantalla completa
                  </a>

                  <a 
                    href={pdfUrl} 
                    download
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <Download size={12} />
                    Descargar PEI
                  </a>
                </div>
              </div>

              {/* PDF embed or simulated iframe fallback */}
              <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                
                {/* Embedded Iframe */}
                <iframe 
                  src={`${pdfUrl}#toolbar=1&navpanes=1`} 
                  title="Plan Estratégico Institucional - PEI"
                  className="w-full h-full border-0 absolute inset-0 z-10"
                />

                {/* Fallback layout underneath */}
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                  <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <BookOpen size={48} className="animate-pulse text-emerald-400" />
                  </div>
                  <div className="space-y-2 max-w-lg">
                    <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                      Previsualización del Plan Estratégico Institucional
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      Si su navegador no soporta la visualización directa de archivos PDF dentro de la página, puede descargarlo u obtenerlo en una pestaña independiente usando los siguientes botones oficiales:
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <a 
                      href={pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all border border-slate-700"
                    >
                      <ExternalLink size={14} />
                      Nueva Pestaña
                    </a>
                    <a 
                      href={pdfUrl} 
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
                <span>Unidad de Planificación y Gestión Estratégica</span>
              </div>

            </div>
          )}
        </div>

      </div>
    </InternalPageLayout>
  );
};

export default PlanificacionPEI;

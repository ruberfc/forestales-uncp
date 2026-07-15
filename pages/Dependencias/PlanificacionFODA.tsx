import React, { useState } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Award, 
  Compass, 
  AlertTriangle, 
  ShieldAlert, 
  FileText, 
  Download, 
  Eye, 
  ExternalLink,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

const PlanificacionFODA: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/planificacion/foda'];
  const [showPdf, setShowPdf] = useState<boolean>(true);

  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // Detailed FODA Items with corresponding themes and icons
  const fodaMatrix = [
    {
      key: "fortalezas",
      title: "Fortalezas (F)",
      subtitle: "Factores internos positivos",
      colorClass: "from-emerald-50 to-white dark:from-emerald-950/10 dark:to-slate-900 border-emerald-100 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-400",
      badgeClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
      icon: <Award size={26} />,
      items: [
        "Plana docente altamente calificada con grados de doctor y maestro y amplia trayectoria en investigación forestal.",
        "Infraestructura de vanguardia con laboratorios equipados y estaciones experimentales propias como Casa Blanca.",
        "Convenios vigentes con instituciones nacionales e internacionales que propician la movilidad académica y pasantías.",
        "Estudiantes identificados y comprometidos con la conservación de la biodiversidad y el manejo sostenible."
      ]
    },
    {
      key: "oportunidades",
      title: "Oportunidades (O)",
      subtitle: "Factores externos a aprovechar",
      colorClass: "from-blue-50 to-white dark:from-blue-950/10 dark:to-slate-900 border-blue-100 dark:border-blue-900/40 text-blue-700 dark:text-blue-400",
      badgeClass: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
      icon: <Compass size={26} />,
      items: [
        "Incremento de la demanda global de profesionales expertos en bonos de carbono y preservación ambiental.",
        "Acceso a fondos de financiamiento concursables de ProCiencia, Concytec y organismos cooperantes internacionales.",
        "Alianzas estratégicas con el Ministerio del Ambiente (MINAM), SERFOR y diversos gobiernos regionales.",
        "Creciente interés de la sociedad en la mitigación del cambio climático y proyectos agroforestales sostenibles."
      ]
    },
    {
      key: "debilidades",
      title: "Debilidades (D)",
      subtitle: "Factores internos a mejorar",
      colorClass: "from-amber-50 to-white dark:from-amber-950/10 dark:to-slate-900 border-amber-100 dark:border-amber-900/40 text-amber-700 dark:text-amber-400",
      badgeClass: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
      icon: <AlertTriangle size={26} />,
      items: [
        "Presupuesto limitado para la adquisición continua de tecnologías y reactivos analíticos avanzados de laboratorio.",
        "Bajas tasas de graduación oportuna debido a la complejidad en los trámites y desarrollo administrativo de tesis.",
        "Escasez de personal de asistencia técnica permanente en todas las unidades y estaciones forestales de campo.",
        "Necesidad de agilización e informatización integral de los procesos académicos y atención de trámites estudiantiles."
      ]
    },
    {
      key: "amenazas",
      title: "Amenazas (A)",
      subtitle: "Factores externos de riesgo",
      colorClass: "from-rose-50 to-white dark:from-rose-950/10 dark:to-slate-900 border-rose-100 dark:border-rose-900/40 text-rose-700 dark:text-rose-400",
      badgeClass: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
      icon: <ShieldAlert size={26} />,
      items: [
        "Inestabilidad gubernamental que interfiere en las políticas y transferencias presupuestales para investigación.",
        "Incremento de la deforestación ilegal, minería informal e invasiones territoriales en zonas de estudio de campo.",
        "Competencia de universidades privadas con ofertas curriculares de menor duración o formatos 100% virtuales.",
        "Efectos severos del cambio climático en los ecosistemas locales, afectando parcelas de muestreo y ensayos silviculturales."
      ]
    }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600"
    >
      <div className="space-y-16 max-w-6xl mx-auto">
        
        {/* Intro Banner */}
        <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-gray-150 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 text-emerald-800 translate-x-4 translate-y-4">
            <BookOpen size={160} />
          </div>
          <div className="relative space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
              <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                Matriz Estratégica Institucional
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-relaxed m-0 text-justify border-l-4 border-uncp pl-4">
              {content.intro}
            </h3>

            <div className="space-y-4 pt-4 border-t border-gray-150 dark:border-slate-800/80">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive / Polished FODA 4-Quadrant Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Diagnóstico 2024
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mt-2 mb-0">
              Matriz de Análisis FODA de la Facultad
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fodaMatrix.map((quadrant) => (
              <div 
                key={quadrant.key}
                className={`bg-gradient-to-br ${quadrant.colorClass} border p-8 rounded-[32px] shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300`}
              >
                <div className="space-y-6">
                  {/* Quadrant Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-gray-100/40 dark:border-slate-800">
                        {quadrant.icon}
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm md:text-base font-black uppercase tracking-tight m-0 leading-tight">
                          {quadrant.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mt-0.5 block">
                          {quadrant.subtitle}
                        </span>
                      </div>
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${quadrant.badgeClass}`}>
                      FODA
                    </span>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-3.5 text-left">
                    {quadrant.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="mt-1 shrink-0">
                          <CheckCircle2 size={14} className="opacity-70" />
                        </div>
                        <p className="text-xs md:text-[13px] text-gray-650 dark:text-gray-300 leading-relaxed text-justify m-0 font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
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
                Visualizador del Diagnóstico FODA Oficial (PDF)
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
                      DIAGNOSTICO_FODA_FORESTALES_2024.pdf
                    </h4>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                      Informe Técnico de Diagnóstico y Ejes Estratégicos
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
                    Descargar FODA
                  </a>
                </div>
              </div>

              {/* PDF embed or simulated iframe fallback */}
              <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                
                {/* Embedded Iframe */}
                <iframe 
                  src={`${pdfUrl}#toolbar=1&navpanes=1`} 
                  title="Diagnóstico FODA - Ciencias Forestales"
                  className="w-full h-full border-0 absolute inset-0 z-10"
                />

                {/* Fallback layout underneath */}
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                  <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <BookOpen size={48} className="animate-pulse text-emerald-400" />
                  </div>
                  <div className="space-y-2 max-w-lg">
                    <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                      Previsualización del Diagnóstico FODA
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
                <span>Unidad de Planificación y Diagnóstico Estratégico</span>
              </div>

            </div>
          )}
        </div>

      </div>
    </InternalPageLayout>
  );
};

export default PlanificacionFODA;

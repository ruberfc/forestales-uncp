import React, { useState } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  MapPin, 
  Layers, 
  Target, 
  Calendar, 
  Compass, 
  CheckCircle,
  Users,
  Sprout,
  TrendingUp,
  Image as ImageIcon,
  HeartHandshake,
  GraduationCap,
  Beaker,
  Maximize2,
  TreePine,
  Activity,
  FileText,
  Eye,
  ExternalLink,
  Download,
  BookOpen,
  Wheat,
  ThermometerSun
} from 'lucide-react';

// Import our beautiful custom generated image of Mantaro Valley Station
import imgMantaro from '@/src/assets/images/mantaro_valley_station_1783100888770.jpg';

const EstacionElMantaro: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/estaciones/el-mantaro'];
  const [showPdf, setShowPdf] = useState<boolean>(true);

  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // Quick statistics/metadata cards
  const stats = [
    {
      icon: <MapPin className="text-uncp" size={20} />,
      label: "Ubicación",
      value: "Valle del Mantaro, Región Junín"
    },
    {
      icon: <ThermometerSun className="text-uncp" size={20} />,
      label: "Altitud Promedio",
      value: "3,280 m.s.n.m."
    },
    {
      icon: <Layers className="text-uncp" size={20} />,
      label: "Enfoque Integral",
      value: "Silvopasturil, Forestal y Agropecuario"
    }
  ];

  // Specific research metrics or highlights for El Mantaro
  const mantaroMetrics = [
    {
      icon: <Wheat className="text-emerald-600 dark:text-emerald-400" size={24} />,
      value: "Sistemas Mixtos",
      label: "Silvopasturas Activas",
      desc: "Integración de especies forestales maderables con pasturas mejoradas y ganado de altura."
    },
    {
      icon: <TreePine className="text-emerald-600 dark:text-emerald-400" size={24} />,
      value: "Altoandinas",
      label: "Especies Evaluadas",
      desc: "Ensayos con especies nativas como Quinual (Polylepis) y exóticas como Pino (Pinus) y Eucalipto."
    },
    {
      icon: <Sprout className="text-emerald-600 dark:text-emerald-400" size={24} />,
      value: "Suelos y Agua",
      label: "Conservación Activa",
      desc: "Monitoreo de erosión, retención hídrica y recuperación biológica de suelos degradados."
    },
    {
      icon: <GraduationCap className="text-emerald-600 dark:text-emerald-400" size={24} />,
      value: "Multidisciplinario",
      label: "Convenios Internos",
      desc: "Investigaciones conjuntas con las facultades de Agronomía y Zootecnia de la UNCP."
    }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600"
    >
      <div className="space-y-16 max-w-6xl mx-auto">
        
        {/* Main Section: Text & Main Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Descriptive Card with content from constants */}
          <div className="lg:col-span-7 bg-gradient-to-br from-emerald-50/50 to-white dark:from-slate-900 dark:to-slate-950 border border-emerald-100/40 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
                <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                  Estación Experimental Multidisciplinaria
                </span>
              </div>

              {/* Intro from constants */}
              <h3 className="text-lg md:text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight leading-relaxed m-0 text-justify border-l-4 border-uncp pl-4">
                {content.intro}
              </h3>

              {/* Paragraphs from constants */}
              <div className="space-y-4 pt-4 border-t border-emerald-100/50 dark:border-slate-800/80">
                {content.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0 font-medium">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block">
                * Ensayos conjuntos ejecutados bajo la Dirección de Estaciones de la UNCP.
              </span>
            </div>
          </div>

          {/* Quick Stats Sidebar Card with the beautiful generated image */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-5 rounded-[32px] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative shadow-inner border border-gray-100 dark:border-slate-800">
                <img 
                  src={imgMantaro} 
                  alt="Estación Experimental Agropecuaria El Mantaro" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 p-4 flex items-end">
                  <div className="text-left">
                    <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-800/40 inline-block mb-1.5">
                      Vista de Campo
                    </span>
                    <p className="text-xs font-black text-white uppercase tracking-tight m-0">
                      Sistemas Silvopastoriles y Cultivos
                    </p>
                  </div>
                </div>
              </div>

              {/* Geographic stats list below the image */}
              <div className="space-y-3.5 pt-2 text-left">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shrink-0 text-uncp">
                      {stat.icon}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block leading-none">
                        {stat.label}
                      </span>
                      <p className="text-xs font-black text-slate-800 dark:text-white m-0 leading-tight">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-slate-800 mt-4 flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
              <span>Código: EEA-MAN</span>
              <span className="text-uncp">FCFA - UNCP</span>
            </div>
          </div>

        </div>

        {/* Dynamic Highlight Metrics */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Ejes Tecnológicos
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight m-0">
              Líneas de Investigación Integrada
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mantaroMetrics.map((metric, i) => (
              <div 
                key={i}
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-3xl flex flex-col justify-between text-left hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 opacity-5 text-emerald-800 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  {metric.icon}
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-emerald-50 dark:bg-slate-850 rounded-2xl inline-block">
                    {metric.icon}
                  </div>

                  <div className="space-y-1">
                    <h5 className="text-lg md:text-xl font-black text-slate-850 dark:text-white tracking-tight leading-none uppercase">
                      {metric.value}
                    </h5>
                    <span className="text-[10px] font-black text-uncp uppercase tracking-wider block">
                      {metric.label}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-normal text-justify mt-4 m-0 border-t border-gray-50 dark:border-slate-850 pt-3">
                  {metric.desc}
                </p>
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
                Visualizador de Fichas de Manejo Silvopastoril (PDF)
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
                      GUIA_TECNICA_SILVOPASTURAS_ALTURA.pdf
                    </h4>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                      Manual Metodológico para el Manejo Integrado de Sierra Central
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
                    Descargar Guía
                  </a>
                </div>
              </div>

              {/* PDF embed or simulated iframe fallback */}
              <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                
                {/* Embedded Iframe */}
                <iframe 
                  src={`${pdfUrl}#toolbar=1&navpanes=1`} 
                  title="Plan de Manejo El Mantaro"
                  className="w-full h-full border-0 absolute inset-0 z-10"
                />

                {/* Fallback layout underneath */}
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                  <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <BookOpen size={48} className="animate-pulse text-emerald-400" />
                  </div>
                  <div className="space-y-2 max-w-lg">
                    <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                      Previsualización del Manual Silvopastoril
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      Si su navegador no cuenta con soporte nativo para previsualización de documentos PDF, por favor proceda a descargarlo de forma directa o ábralo en una nueva ventana:
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
                      Descargar Guía
                    </a>
                  </div>
                </div>

              </div>

              {/* PDF info bar footer */}
              <div className="bg-slate-950 px-6 py-3 border-t border-slate-850 flex items-center justify-between text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                <span>Facultad de Ciencias Forestales y del Ambiente - UNCP</span>
                <span>Cooperación e Investigación Interfacultades</span>
              </div>

            </div>
          )}
        </div>

      </div>
    </InternalPageLayout>
  );
};

export default EstacionElMantaro;

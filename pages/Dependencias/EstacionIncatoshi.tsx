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
  Shield,
  Clock,
  Briefcase
} from 'lucide-react';

// Import our beautiful custom generated images of Incatoshi
import imgBanner from '@/src/assets/images/incatoshi_banner_researchers_1783101061271.jpg';
import imgCooperation from '@/src/assets/images/incatoshi_indigenous_cooperation_1783101069655.jpg';
import imgSampling from '@/src/assets/images/incatoshi_soil_sampling_1783101080178.jpg';

const EstacionIncatoshi: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/estaciones/incatoshi'];
  const [showPdf, setShowPdf] = useState<boolean>(true);

  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // Legal and environmental metadata
  const metadata = [
    {
      icon: <Clock className="text-uncp" size={20} />,
      label: "Vigencia del Contrato",
      value: "40 Años de Concesión"
    },
    {
      icon: <Briefcase className="text-uncp" size={20} />,
      label: "Resolución de Concesión",
      value: "RA N° D000282-2020-MIDAGRI-SERFOR"
    },
    {
      icon: <Compass className="text-uncp" size={20} />,
      label: "Ecosistema Objetivo",
      value: "Bosques de Neblinas Altoandinos"
    }
  ];

  // Specific conservation components
  const conservationPillars = [
    {
      icon: <Shield className="text-emerald-600 dark:text-emerald-400" size={24} />,
      title: "Preservación Biológica",
      desc: "Conservar la diversidad biológica endémica y regular los procesos ecológicos del bosque de neblina."
    },
    {
      icon: <Sprout className="text-emerald-600 dark:text-emerald-400" size={24} />,
      title: "Servicios Ecosistémicos",
      desc: "Mantener la calidad hídrica, la retención de suelos y la captura de carbono para el beneficio de las poblaciones."
    },
    {
      icon: <Beaker className="text-emerald-600 dark:text-emerald-400" size={24} />,
      title: "Monitoreo e Investigación",
      desc: "Desarrollar paquetes tecnológicos aplicados de silvicultura sostenible y conservación de hábitats frágiles."
    },
    {
      icon: <HeartHandshake className="text-emerald-600 dark:text-emerald-400" size={24} />,
      title: "Zonificación y Protección",
      desc: "Identificar áreas de conservación potenciales y estructurar unidades de zonificación interna."
    }
  ];

  // Pictures from the three frames in the original image layout
  const galleryItems = [
    {
      imgSrc: imgBanner,
      title: "Hitos y Señalización Territorial",
      desc: "Investigadores de la Facultad estableciendo hitos de demarcación física oficiales junto a convenios institucionales."
    },
    {
      imgSrc: imgCooperation,
      title: "Relacionamiento Comunitario",
      desc: "Diálogo intercultural y talleres de capacitación con la comunidad local para el manejo conjunto de la biodiversidad."
    },
    {
      imgSrc: imgSampling,
      title: "Muestreos de Flora y Suelos",
      desc: "Trabajo técnico de caracterización de parcelas forestales permanentes para el inventario de especies endémicas."
    }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600"
    >
      <div className="space-y-16 max-w-6xl mx-auto">
        
        {/* Main section: Exact text transcription and legal info card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Main Transcription container containing exact image text */}
          <div className="lg:col-span-2 bg-gradient-to-br from-emerald-50/50 to-white dark:from-slate-900 dark:to-slate-950 border border-emerald-100/40 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
                <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                  Concesión de Conservación Oficial
                </span>
              </div>

              {/* Exact transcribed text as intro */}
              <h3 className="text-lg md:text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight leading-relaxed m-0 text-justify border-l-4 border-uncp pl-4">
                {content.intro}
              </h3>

              {/* Remainder of text from image */}
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
                * Contrato N° 12-SEC/C-CON-D-001-11, otorgado por SERFOR y MIDAGRI.
              </span>
            </div>
          </div>

          {/* Legal / Administrative Sidebar */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-8 rounded-[32px] flex flex-col justify-between">
            <div className="space-y-6 text-left">
              <h4 className="text-xs md:text-sm font-black text-slate-850 dark:text-white uppercase tracking-wider m-0 border-b border-gray-200 dark:border-slate-800 pb-3">
                Información del Contrato
              </h4>

              <div className="space-y-6">
                {metadata.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700/80 shrink-0 text-uncp">
                      {item.icon}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block">
                        {item.label}
                      </span>
                      <p className="text-xs md:text-sm font-black text-slate-800 dark:text-white m-0 leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl text-left space-y-1 mt-6">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <Shield size={16} />
                <span className="text-[10px] font-black uppercase tracking-wider">Unidad ATFFS Selva Central</span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-normal m-0">
                Supervisado y regulado por la Administración Técnica Forestal y de Fauna Silvestre (ATFFS) para garantizar la integridad ecosistémica.
              </p>
            </div>
          </div>

        </div>

        {/* Core Pillars Grid based on image details */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Esquema Operativo
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight m-0">
              Líneas de Conservación y Acción Científica
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conservationPillars.map((pillar, i) => (
              <div 
                key={i}
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-3xl flex flex-col justify-between text-left hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 opacity-5 text-emerald-800 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-emerald-50 dark:bg-slate-850 rounded-2xl inline-block">
                    {pillar.icon}
                  </div>

                  <h5 className="text-xs md:text-sm font-black text-slate-850 dark:text-white uppercase tracking-tight m-0">
                    {pillar.title}
                  </h5>
                </div>

                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed text-justify mt-4 m-0 border-t border-gray-50 dark:border-slate-850 pt-3">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery reproducing exactly the 3 panels of the provided image */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Registro de Campo de la Concesión
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight m-0">
              Fases de Actividad y Presencia Territorial
            </h4>
          </div>

          {/* Three photo layout exactly mirroring the image panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-4 rounded-[28px] shadow-sm hover:shadow-md transition-all group"
              >
                {/* Image Frame */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-[9px] font-black text-white uppercase tracking-widest bg-uncp px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <ImageIcon size={10} />
                      Registro Oficial
                    </span>
                  </div>
                </div>

                {/* Caption and description */}
                <div className="mt-4 text-left space-y-1">
                  <h5 className="text-[11px] md:text-xs font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    {item.title}
                  </h5>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded PDF Viewer Section for Plan de Conservación / Manejo */}
        <div className="space-y-6">
          <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="text-uncp" size={22} />
              <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                Visualizador del Expediente de Concesión (PDF)
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
                      CONTRATO_CONCESION_INCATOSHI_KAMETZA.pdf
                    </h4>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                      Resolución de Aprobación de Concesión y Ficha Técnica
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
                    Descargar Expediente
                  </a>
                </div>
              </div>

              {/* PDF embed or simulated iframe fallback */}
              <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                
                {/* Embedded Iframe */}
                <iframe 
                  src={`${pdfUrl}#toolbar=1&navpanes=1`} 
                  title="Expediente de Concesión Incatoshi"
                  className="w-full h-full border-0 absolute inset-0 z-10"
                />

                {/* Fallback layout underneath */}
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                  <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <BookOpen size={48} className="animate-pulse text-emerald-400" />
                  </div>
                  <div className="space-y-2 max-w-lg">
                    <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                      Previsualización del Expediente Oficial
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      Si su navegador no cuenta con soporte nativo de visualización de PDF incrustados, puede abrir de manera independiente el documento de la Concesión Incatoshi Kametza empleando los siguientes accesos directos:
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
                <span>Resolución SERFOR-ATFFS de Selva Central</span>
              </div>

            </div>
          )}
        </div>

      </div>
    </InternalPageLayout>
  );
};

export default EstacionIncatoshi;

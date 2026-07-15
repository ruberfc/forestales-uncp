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
  BookOpen
} from 'lucide-react';

// Import our beautiful custom generated image
import imgOxapampa from '@/src/assets/images/oxapampa_forest_1783100705254.jpg';

const EstacionOxapampa: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/estaciones/oxapampa'];
  const [showPdf, setShowPdf] = useState<boolean>(true);

  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // Detailed metrics from the transcribed image text
  const forestMetrics = [
    {
      icon: <Maximize2 className="text-emerald-600 dark:text-emerald-400" size={24} />,
      value: "3.03 Ha",
      label: "Superficie Boscosa",
      desc: "Área total de plantaciones y conservación de pino (Pinus radiata) y especies asociadas."
    },
    {
      icon: <TreePine className="text-emerald-600 dark:text-emerald-400" size={24} />,
      value: "3,073",
      label: "Árboles Registrados",
      desc: "Individuos forestales totales que componen la masa boscosa principal de la estación."
    },
    {
      icon: <TrendingUp className="text-emerald-600 dark:text-emerald-400" size={24} />,
      value: "2,459",
      label: "Plantas en Crecimiento",
      desc: "Plantones y árboles jóvenes en fase silvicultural activa para asegurar el relevo forestal."
    },
    {
      icon: <Activity className="text-emerald-600 dark:text-emerald-400" size={24} />,
      value: "814",
      label: "Para Aprovechamiento",
      desc: "Árboles que han alcanzado su turno tecnológico y de corte óptimo para manejo forestal."
    }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600"
    >
      <div className="space-y-16 max-w-6xl mx-auto">
        
        {/* Main Section: Text & Main Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Exact text Transcription Container */}
          <div className="lg:col-span-7 bg-gradient-to-br from-emerald-50/50 to-white dark:from-slate-900 dark:to-slate-950 border border-emerald-100/40 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
                <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                  Estación de Investigación Oficial
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

            <div className="bg-slate-50 dark:bg-slate-850/60 p-4 rounded-2xl flex items-center gap-3 border border-gray-100 dark:border-slate-800">
              <MapPin className="text-uncp shrink-0" size={20} />
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-normal m-0 font-semibold">
                Ubicada en la Provincia de Oxapampa, Departamento de Pasco (Reserva de Biosfera BIOAY).
              </p>
            </div>
          </div>

          {/* Graphic/Image Container matching the user's provided layout */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-5 rounded-[32px] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative shadow-inner border border-gray-100 dark:border-slate-800">
                <img 
                  src={imgOxapampa} 
                  alt="Estación Experimental Oxapampa" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 p-4 flex items-end">
                  <div className="text-left">
                    <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-800/40 inline-block mb-1.5">
                      Registro de Campo
                    </span>
                    <p className="text-xs font-black text-white uppercase tracking-tight m-0">
                      Bosque de Pino y Especies Forestales
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-left space-y-1 px-1">
                <h5 className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Vías de Acceso y Cobertura Silvicultural
                </h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                  Sotobosque húmedo y parcelas de investigación de pino en turno de aprovechamiento forestal activo en el departamento de Pasco.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-slate-800 mt-4 flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
              <span>Código de Estación: EP-OXA</span>
              <span className="text-uncp">FCFA - UNCP</span>
            </div>
          </div>

        </div>

        {/* Inventory / Dashboard Statistics derived from the image text */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Métricas Silviculturales
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight m-0">
              Datos e Inventario de la Estación
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {forestMetrics.map((metric, i) => (
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
                    <h5 className="text-2xl font-black text-slate-850 dark:text-white tracking-tight leading-none">
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
                Visualizador del Plan de Manejo Forestal Oxapampa (PDF)
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
                      PLAN_MANEJO_SILVICOLA_OXAPAMPA.pdf
                    </h4>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                      Ficha Técnica de Inventario y Aprovechamiento Forestal
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
                    Descargar Ficha
                  </a>
                </div>
              </div>

              {/* PDF embed or simulated iframe fallback */}
              <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                
                {/* Embedded Iframe */}
                <iframe 
                  src={`${pdfUrl}#toolbar=1&navpanes=1`} 
                  title="Plan de Manejo Oxapampa"
                  className="w-full h-full border-0 absolute inset-0 z-10"
                />

                {/* Fallback layout underneath */}
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                  <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <BookOpen size={48} className="animate-pulse text-emerald-400" />
                  </div>
                  <div className="space-y-2 max-w-lg">
                    <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                      Previsualización de Ficha de Manejo Forestal
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
                <span>Unidad de Estaciones y Centros de Producción</span>
              </div>

            </div>
          )}
        </div>

      </div>
    </InternalPageLayout>
  );
};

export default EstacionOxapampa;

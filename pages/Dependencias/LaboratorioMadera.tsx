import React from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Microscope, 
  CheckCircle2, 
  Scale, 
  Droplet, 
  Trees, 
  Layers, 
  ShieldAlert,
  Sliders,
  ChevronRight,
  BookOpen
} from 'lucide-react';

const imageMicroscope = "/src/assets/images/madera_lab_microscope_1782654301040.jpg";
const imageScale = "/src/assets/images/madera_lab_scale_1782654315584.jpg";
const imageXylotheque = "/src/assets/images/madera_lab_xylotheque_1782654330344.jpg";

const LaboratorioMadera: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/laboratorios/madera'];

  const photos = [
    {
      src: imageMicroscope,
      alt: "Análisis de Anatomía de la Madera",
      title: "Análisis Anatómico",
      desc: "Estudios detallados de la estructura de las fibras con microscopía avanzada.",
      tag: "Microscopía"
    },
    {
      src: imageScale,
      alt: "Ensayos Físico-Mecánicos y Humedad",
      title: "Propiedades Físicas",
      desc: "Determinación de densidad básica, contracción y contenido de humedad preciso.",
      tag: "Gravimetría"
    },
    {
      src: imageXylotheque,
      alt: "Colección Científica de Xiloteca",
      title: "Xiloteca de Referencia",
      desc: "Catálogo sistemático de muestras maderables de la selva central peruana.",
      tag: "Xilotecnología"
    }
  ];

  const focusAreas = [
    {
      icon: <Layers className="text-uncp shrink-0" size={24} />,
      title: "Anatomía y Dendrotecnología",
      desc: "Identificación botánica mediante la estructura celular de la madera para determinar especies forestales clave."
    },
    {
      icon: <Scale className="text-uncp shrink-0" size={24} />,
      title: "Propiedades Físicas y Mecánicas",
      desc: "Ensayos de resistencia estructural, densidad y aptitud tecnológica para el sector industrial y de construcción."
    },
    {
      icon: <Droplet className="text-uncp shrink-0" size={24} />,
      title: "Contenido de Humedad y Secado",
      desc: "Control higroscópico y optimización de curvas de secado técnico para garantizar la estabilidad dimensional del material."
    },
    {
      icon: <Sliders className="text-uncp shrink-0" size={24} />,
      title: "Procesamiento y Transformación",
      desc: "Desarrollo de técnicas eficientes de aserrado, preservación contra agentes biológicos y valor agregado forestal."
    },
    {
      icon: <Trees className="text-uncp shrink-0" size={24} />,
      title: "Sostenibilidad y Mitigación",
      desc: "Evaluación de especies forestales alternativas de rápido crecimiento para reducir la presión en bosques naturales vulnerables."
    }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image="https://images.unsplash.com/photo-1541535881962-e668f28b3796?auto=format&fit=crop&q=80&w=1600"
    >
      <div className="space-y-16 max-w-6xl mx-auto">
        
        {/* Intro Highlight Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 border border-emerald-100/50 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 text-emerald-700 dark:text-emerald-400 translate-x-4 translate-y-4">
            <Trees size={160} />
          </div>
          <div className="relative space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
              <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                FCFA - UNCP
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-snug m-0 text-justify">
              {content.intro}
            </h3>
            <div className="space-y-4 pt-2 border-t border-emerald-100/50 dark:border-slate-800/80">
              {content.paragraphs.slice(0).map((p, i) => (
                <p key={i} className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Image Gallery matching the design from the user's uploaded picture */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Registro Fotográfico Oficial
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mt-2 mb-0">
              Infraestructura e Investigación del Laboratorio
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-uncp text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    {photo.tag}
                  </span>
                </div>
                <div className="p-5 text-left flex-grow flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <h5 className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                      {photo.title}
                    </h5>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                      {photo.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-50 dark:border-slate-800/40 flex items-center justify-between text-[8px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    <span>Habilitado</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Areas of Scientific Focus Section */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-gray-150 dark:border-slate-800/80 rounded-[40px] p-8 md:p-10 space-y-8">
          <div className="flex items-center gap-3">
            <BookOpen className="text-uncp" size={24} />
            <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
              Líneas de Trabajo e Investigación Científica
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-3xl flex items-start gap-4 hover:shadow-sm transition-all group"
              >
                <div className="bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl group-hover:bg-uncp group-hover:text-white transition-colors duration-300">
                  {area.icon}
                </div>
                <div className="space-y-1.5 text-left">
                  <h4 className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 leading-tight">
                    {area.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-150 dark:border-slate-850 flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Infraestructura orientada a la investigación de Alto Impacto</span>
          </div>
        </div>

      </div>
    </InternalPageLayout>
  );
};

export default LaboratorioMadera;

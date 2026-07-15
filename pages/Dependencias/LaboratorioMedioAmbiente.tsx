import React from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Microscope, 
  CheckCircle2, 
  Droplet, 
  Layers, 
  Compass, 
  FlaskConical, 
  Globe, 
  Building2, 
  Users,
  BookOpen
} from 'lucide-react';

const imageFiltration = "/src/assets/images/env_lab_filtration_1782785618909.jpg";
const imageAutoclave = "/src/assets/images/env_lab_autoclave_1782785696449.jpg";
const imageSamples = "/src/assets/images/env_lab_samples_1782785711221.jpg";

const LaboratorioMedioAmbiente: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/laboratorios/medio-ambiente'];

  const photos = [
    {
      src: imageFiltration,
      alt: "Sistema de Simulación y Filtración de Agua",
      title: "Simulación de Procesos",
      desc: "Análisis y simulación hidráulica de columnas de filtración para control de calidad de recursos hídricos.",
      tag: "Filtración e Hidrología"
    },
    {
      src: imageAutoclave,
      alt: "Autoclave Biobase para Esterilización Científica",
      title: "Tecnología y Esterilización",
      desc: "Equipo avanzado autoclave Biobase para esterilización de sustratos, medios de cultivo y herramientas de análisis.",
      tag: "Bioseguridad y Cultivo"
    },
    {
      src: imageSamples,
      alt: "Estantería con Muestras e Incubación Biológica",
      title: "Monitoreo Biológico",
      desc: "Almacenamiento sistemático de muestras y cultivos biológicos en frascos de vidrio para monitoreo ambiental prolongado.",
      tag: "Incubación de Muestras"
    }
  ];

  const focusAreas = [
    {
      icon: <Droplet className="text-uncp shrink-0" size={24} />,
      title: "Evaluación de Contaminantes",
      desc: "Monitoreo constante e investigación rigurosa de agentes contaminantes en agua, aire, suelo y componentes ecológicos de la región."
    },
    {
      icon: <FlaskConical className="text-uncp shrink-0" size={24} />,
      title: "Pabellón \"A\" y Tecnología Avanzada",
      desc: "Instalaciones dotadas de equipamiento tecnológico de vanguardia científica para realizar análisis fisicoquímicos confiables."
    },
    {
      icon: <Users className="text-uncp shrink-0" size={24} />,
      title: "Colaboración Interdisciplinaria",
      desc: "Sinergia de equipos científicos multi-área para estudiar de manera holística el impacto ambiental y soluciones integrales."
    },
    {
      icon: <Globe className="text-uncp shrink-0" size={24} />,
      title: "Vinculación y Sostenibilidad",
      desc: "Transferencia de conocimientos científicos hacia la comunidad local y formulación de planes sostenibles de conservación ecológica."
    }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image="https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&q=80&w=1600"
    >
      <div className="space-y-16 max-w-6xl mx-auto">
        
        {/* Intro Highlight Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 border border-emerald-100/50 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 text-emerald-700 dark:text-emerald-400 translate-x-4 translate-y-4">
            <Globe size={160} />
          </div>
          <div className="relative space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
              <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                Ubicación: Pabellón "A" - FCFA
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-snug m-0 text-justify">
              {content.intro}
            </h3>
            <div className="space-y-4 pt-2 border-t border-emerald-100/50 dark:border-slate-800/80">
              {content.paragraphs.map((p, i) => (
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
              Equipamiento e Infraestructura
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight mt-2 mb-0">
              Evidencia Fotográfica de Tecnología Ambiental
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
              Líneas de Trabajo e Investigación Ambiental
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
            <span>Disponible para Prácticas, Investigación de Tesis y Proyectos de Extensión</span>
          </div>
        </div>

      </div>
    </InternalPageLayout>
  );
};

export default LaboratorioMedioAmbiente;

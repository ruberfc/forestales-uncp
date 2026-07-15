import React from 'react';
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
  Maximize2
} from 'lucide-react';

// Import our beautiful custom generated images
import imgPines from '@/src/assets/images/casa_blanca_pines_1783100357778.jpg';
import imgLandscape from '@/src/assets/images/casa_blanca_landscape_1783100366787.jpg';
import imgStudents from '@/src/assets/images/casa_blanca_students_1783100375063.jpg';

const EstacionCasaBlanca: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/estaciones/casa-blanca'];

  // Quick statistics/metadata cards
  const stats = [
    {
      icon: <MapPin className="text-uncp" size={20} />,
      label: "Ubicación",
      value: "Comunidad Casa Blanca, Pomacancha, Jauja"
    },
    {
      icon: <Maximize2 className="text-uncp" size={20} />,
      label: "Extensión",
      value: "104 Hectáreas (Inscritas a nombre de la UNCP)"
    },
    {
      icon: <Calendar className="text-uncp" size={20} />,
      label: "Plan Estratégico",
      value: "Horizonte de desarrollo a 20 años"
    }
  ];

  // Specific strategic dimensions of Casa Blanca
  const objectives = [
    {
      icon: <GraduationCap className="text-uncp" size={28} />,
      title: "Fortalecer la Enseñanza",
      desc: "Servir como un centro experimental vivo para que los estudiantes de pregrado consoliden sus conocimientos teóricos de silvicultura, viveros e ingeniería forestal directamente en el campo."
    },
    {
      icon: <Beaker className="text-uncp" size={28} />,
      title: "Investigación Científica",
      desc: "Promover el desarrollo de tesis e investigaciones científicas aplicadas enfocadas en el crecimiento silvicultural, captura de carbono, mejoramiento genético y adaptación de especies."
    },
    {
      icon: <HeartHandshake className="text-uncp" size={28} />,
      title: "Responsabilidad Social",
      desc: "Trabajar de la mano con los comuneros de Casa Blanca para transferir tecnología forestal, reactivar la producción integral y promover el bienestar de la comunidad."
    }
  ];

  // Image gallery derived from the images on user requested layout
  const galleryItems = [
    {
      imgSrc: imgPines,
      title: "Vías y Líneas de Plantación de Pino",
      desc: "Vistas del sotobosque y ordenamiento silvicultural de la plantación forestal de pino (Pinus radiata)."
    },
    {
      imgSrc: imgLandscape,
      title: "Panorámica de la Unidad de Producción",
      desc: "Paisaje altoandino y topografía de la Comunidad Campesina de Casa Blanca en Pomacancha, Jauja."
    },
    {
      imgSrc: imgStudents,
      title: "Prácticas Académicas de Campo",
      desc: "Estudiantes y docentes de la Facultad de Ciencias Forestales realizando mediciones dendrométricas."
    }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600"
    >
      <div className="space-y-16 max-w-6xl mx-auto">
        
        {/* Main Transcribed Text Block & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Main Descriptive card with the exact text from user image */}
          <div className="lg:col-span-2 bg-gradient-to-br from-emerald-50/50 to-white dark:from-slate-900 dark:to-slate-950 border border-emerald-100/40 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
                <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                  Unidad de Producción Oficial
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
                * Información oficial aprobada bajo convenios UNCP y la Comunidad Campesina.
              </span>
            </div>
          </div>

          {/* Quick Stats sidebar card */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-8 rounded-[32px] flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="text-xs md:text-sm font-black text-slate-850 dark:text-white uppercase tracking-wider m-0 border-b border-gray-200 dark:border-slate-800 pb-3">
                Datos Geográficos y Legales
              </h4>

              <div className="space-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700/80 shrink-0 text-uncp">
                      {stat.icon}
                    </div>
                    <div className="text-left space-y-0.5">
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block">
                        {stat.label}
                      </span>
                      <p className="text-xs md:text-sm font-black text-slate-800 dark:text-white m-0 leading-snug">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl text-left space-y-1 mt-6">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <Sprout size={16} />
                <span className="text-[10px] font-black uppercase tracking-wider">Plan Integral Activo</span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-normal m-0">
                Reactivando de forma sostenible las actividades agrícolas, ganaderas (pecuarias) y forestales para el desarrollo local.
              </p>
            </div>

          </div>

        </div>

        {/* Strategic Horizons section */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Enfoque Institucional
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight m-0">
              Objetivos Fundamentales de Gestión
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-3xl flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div className="space-y-4 text-left">
                  <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-2xl inline-block">
                    {obj.icon}
                  </div>
                  <h4 className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    {obj.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed text-justify m-0">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section exactly derived from the 3 photo slots of the image */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
              Galería Fotográfica Oficial
            </span>
            <h4 className="text-lg md:text-xl font-black text-slate-850 dark:text-white uppercase tracking-tight m-0">
              Registros de Campo de la Estación
            </h4>
          </div>

          {/* Three photo grid layout identical in content structure to the user image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-4 rounded-[28px] shadow-sm hover:shadow-md transition-all group"
              >
                {/* Image frame */}
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
                      Ampliación de Registro
                    </span>
                  </div>
                </div>

                {/* Captions and descriptions */}
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

        {/* Cooperation / Contact card for visits */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-xs md:text-sm font-black text-slate-850 dark:text-white uppercase tracking-wider m-0">
              ¿Desea realizar investigaciones en Casa Blanca?
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-450 leading-relaxed m-0">
              La Unidad de Planificación y Estaciones de la FCFA facilita el acceso a tesistas, docentes e investigadores para la ejecución de proyectos de investigación científica bajo los lineamientos del estatuto universitario.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="mailto:fcfa@uncp.edu.pe"
              className="px-6 py-3 bg-uncp hover:bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all inline-block shadow-sm"
            >
              Solicitar Permiso de Investigación
            </a>
          </div>
        </div>

      </div>
    </InternalPageLayout>
  );
};

export default EstacionCasaBlanca;

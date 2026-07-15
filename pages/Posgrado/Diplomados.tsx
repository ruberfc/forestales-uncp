import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  Clock, 
  Compass, 
  Sparkles, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

interface EstadoData {
  enActualizacion: boolean;
  mensaje: string;
  proximaPublicacion: string;
  detalle: string;
}

interface AreaInteres {
  nombre: string;
  descripcion: string;
}

interface DiplomadosData {
  titulo: string;
  subtitulo: string;
  estado: EstadoData;
  areasInteres: AreaInteres[];
}

const Diplomados: React.FC = () => {
  const content = PAGE_CONTENT['/posgrado/diplomados'];
  const [data, setData] = useState<DiplomadosData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiplomados = async () => {
      try {
        const response = await fetch('datajson/diplomados.json');
        if (!response.ok) {
          throw new Error('Error al cargar la información de diplomados');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchDiplomados();
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
          <p className="text-sm font-bold uppercase tracking-wider">Cargando información...</p>
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
        <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto text-left">
          
          {/* Main Status & Restructuring Notice */}
          <div className="relative overflow-hidden bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-transparent border border-amber-500/20 rounded-[40px] p-6 md:p-10 shadow-sm space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <div className="flex items-center gap-3 pb-4 border-b border-amber-500/15">
              <div className="bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 p-2.5 rounded-2xl shadow-sm">
                <Clock size={22} className="animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 block">Educación Continua</span>
                <h2 className="text-base md:text-lg font-black text-amber-900 dark:text-amber-300 uppercase tracking-tight m-0">
                  PROGRAMA EN PROCESO DE ACTUALIZACIÓN
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-sm md:text-base leading-relaxed text-justify text-amber-950/80 dark:text-amber-300/80">
              <p className="m-0 font-bold text-slate-800 dark:text-slate-200">
                {data.estado.mensaje}
              </p>
              <p className="m-0 text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                {data.estado.detalle}
              </p>
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-3">
              <Sparkles size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="text-xs md:text-sm font-black text-amber-900 dark:text-amber-300 uppercase tracking-wide">
                {data.estado.proximaPublicacion}
              </span>
            </div>
          </div>

          {/* Academic Areas in Development Grid */}
          <div className="space-y-6">
            <div className="pb-2 border-b-2 border-gray-150 dark:border-slate-800">
              <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                Áreas de Especialización Proyectadas
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                La próxima convocatoria contará con diplomados enfocados en las siguientes líneas de desarrollo tecnológico y científico:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.areasInteres.map((area, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-uncp rounded-full"></span>
                      <h4 className="font-black text-slate-800 dark:text-white text-xs md:text-sm uppercase tracking-tight m-0">
                        {area.nombre}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-justify m-0">
                      {area.descripcion}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 dark:border-slate-800/80 mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Compass size={12} />
                      En desarrollo
                    </span>
                    <span>Segunda Mitad 2026</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Support Panel instead of Form */}
          <div className="bg-sky-50/40 dark:bg-sky-950/5 border border-sky-100/60 dark:border-sky-900/10 rounded-[40px] p-6 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="bg-sky-100/60 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 p-2.5 rounded-2xl w-fit">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                ¿Deseas más información sobre diplomados?
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify m-0">
                Para consultas sobre requisitos de admisión, costos académicos, convalidaciones y detalles de las próximas asignaturas, te invitamos a comunicarte de forma directa con la oficina de la Unidad de Posgrado de la Facultad de Ciencias Forestales y del Ambiente.
              </p>
            </div>

            <div className="md:col-span-5 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-6 rounded-3xl shadow-sm space-y-4">
              <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider pb-2 border-b flex items-center gap-1.5">
                Canales de Atención Directa
              </h4>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Mail className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-wider text-gray-400">Correo Electrónico</span>
                    <a href="mailto:posgradoforestales@uncp.edu.pe" className="text-xs font-bold text-sky-700 dark:text-sky-400 hover:underline">
                      posgradoforestales@uncp.edu.pe
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-wider text-gray-400">Contacto Directo</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-gray-300">
                      (064) 481060 - Anexo Posgrado
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-wider text-gray-400">Oficina Administrativa</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-gray-300">
                      Pabellón de Posgrado, Campus Universitario UNCP, El Tambo, Huancayo
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="mailto:posgradoforestales@uncp.edu.pe"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-700 hover:bg-sky-800 text-white font-black rounded-xl text-[11px] uppercase tracking-widest transition-all text-center"
                >
                  <span>Enviar Correo Directo</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

          </div>

        </div>
      )}
    </InternalPageLayout>
  );
};

export default Diplomados;

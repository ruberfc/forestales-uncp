import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { Mail, Search, Loader2, AlertCircle, ShieldCheck, User, Users, Landmark } from 'lucide-react';

interface Autoridad {
  id: number;
  cargo: string;
  responsable: string;
  correo: string;
  foto: string;
}

const Autoridades: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/autoridades'];
  const [autoridades, setAutoridades] = useState<Autoridad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAutoridades = async () => {
      try {
        const response = await fetch('datajson/autoridades.json');
        if (!response.ok) {
          throw new Error('Error al cargar la lista de autoridades');
        }
        const data = await response.json();
        setAutoridades(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchAutoridades();
  }, []);

  const filteredAutoridades = autoridades.filter(aut =>
    aut.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aut.responsable.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // We can highlight the main authorities (Decano, Director Escuela, Director Departamento)
  const mainAuthorities = filteredAutoridades.filter(aut => 
    aut.id <= 3
  );

  const secondaryAuthorities = filteredAutoridades.filter(aut => 
    aut.id > 3
  );

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-8 italic border-l-8 border-uncp pl-6 py-2">
        {content.intro}
      </div>

      <div className="space-y-6 mb-12">
        {content.paragraphs && content.paragraphs.map((para, idx) => (
          <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-lg">
            {para}
          </p>
        ))}
      </div>

      <div className="space-y-12">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gray-50 dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800">
          <div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <Landmark className="text-uncp" /> Órganos de Gobierno y Dirección
            </h3>
            <p className="text-sm text-gray-500">Conoce a las autoridades responsables de la gestión académica y administrativa</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Buscar por cargo o responsable..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-uncp focus:border-transparent outline-none transition-all shadow-sm dark:text-white font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="text-uncp animate-spin" size={48} />
            <p className="text-gray-500 font-bold animate-pulse">Cargando directorio de autoridades...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 p-8 rounded-3xl flex items-center gap-6 text-red-600 dark:text-red-400">
            <AlertCircle size={40} />
            <div>
              <h4 className="font-bold text-lg">Error al cargar datos</h4>
              <p>{error}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Main Authorities Cards (Decano, Director de Escuela, Director de Departamento) */}
            {mainAuthorities.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="text-uncp" /> Alta Dirección Académica
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mainAuthorities.map((aut) => (
                    <div 
                      key={aut.id} 
                      className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-150 dark:border-slate-800/80 flex flex-col items-center text-center group hover:shadow-xl hover:border-uncp/40 transition-all duration-300"
                    >
                      <div className="relative w-32 h-36 rounded-xl overflow-hidden mb-4 border-2 border-gray-150 dark:border-slate-800 shadow-md group-hover:scale-105 transition-transform duration-300 bg-gray-50 dark:bg-slate-950/40 flex items-center justify-center shrink-0">
                        {aut.foto ? (
                          <img 
                            src={aut.foto} 
                            alt={aut.responsable} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center p-4">
                            <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center mb-2">
                              <User size={30} className="text-gray-400 dark:text-gray-500" />
                            </div>
                            <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none">UNCP</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-black text-slate-800 dark:text-white group-hover:text-uncp transition-colors duration-300 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                        {aut.responsable}
                      </h4>
                      <p className="text-uncp font-black text-xs uppercase tracking-widest mb-3 border-b border-gray-100 dark:border-slate-800/50 pb-2 w-full min-h-[2.5rem] flex items-center justify-center">
                        {aut.cargo}
                      </p>
                      {aut.correo && (
                        <a 
                          href={`mailto:${aut.correo}`} 
                          className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400 hover:text-uncp transition-colors font-semibold"
                          title={aut.correo}
                        >
                          <Mail size={14} className="text-uncp shrink-0" /> 
                          <span className="truncate max-w-[180px]">{aut.correo}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* General Directorship & Coordination Directory (Interactive Table) */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Users className="text-uncp" /> Directores y Coordinadores de Área
              </h3>
              
              <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-uncp text-white">
                      <th className="p-4 text-xs font-black uppercase tracking-wider w-16 text-center border-r border-uncp/20">N°</th>
                      <th className="p-4 text-xs font-black uppercase tracking-wider md:w-1/2 border-r border-uncp/20">Cargo o Comisión</th>
                      <th className="p-4 text-xs font-black uppercase tracking-wider border-r border-uncp/20">Responsable</th>
                      <th className="p-4 text-xs font-black uppercase tracking-wider w-56">Contacto / Correo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                    {filteredAutoridades.map((aut, idx) => (
                      <tr 
                        key={aut.id}
                        className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                      >
                        {/* Number Index */}
                        <td className="p-4 text-center font-bold text-gray-400 border-r border-gray-100 dark:border-slate-800/80">
                          {idx + 1}
                        </td>

                        {/* Cargo Column */}
                        <td className="p-4 font-bold text-slate-800 dark:text-slate-200 text-sm border-r border-gray-100 dark:border-slate-800/80">
                          <span className="uppercase tracking-tight block max-w-xl">{aut.cargo}</span>
                        </td>

                        {/* Responsable Column */}
                        <td className="p-4 border-r border-gray-100 dark:border-slate-800/80">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-12 rounded overflow-hidden border border-gray-150 dark:border-slate-800 bg-gray-50 flex items-center justify-center shrink-0">
                              {aut.foto ? (
                                <img 
                                  src={aut.foto} 
                                  alt={aut.responsable}
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              ) : (
                                <User size={18} className="text-gray-300" />
                              )}
                            </div>
                            <span className="text-slate-700 dark:text-gray-300 font-extrabold text-sm uppercase">
                              {aut.responsable}
                            </span>
                          </div>
                        </td>

                        {/* Email Column */}
                        <td className="p-4">
                          {aut.correo ? (
                            <a 
                              href={`mailto:${aut.correo}`}
                              className="text-slate-600 dark:text-gray-300 hover:text-uncp font-semibold flex items-center gap-1.5 underline underline-offset-4 decoration-dashed text-xs truncate max-w-[200px]"
                              title={aut.correo}
                            >
                              <Mail size={14} className="shrink-0 text-gray-400 group-hover:text-uncp transition-colors" />
                              <span className="truncate">{aut.correo}</span>
                            </a>
                          ) : (
                            <span className="text-gray-400 italic text-xs">No disponible</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredAutoridades.length === 0 && (
                  <div className="p-16 text-center">
                    <div className="inline-flex p-4 bg-gray-50 dark:bg-slate-800 rounded-full text-gray-400 dark:text-gray-600 mb-4">
                      <Search size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">No se encontraron autoridades</h4>
                    <p className="text-sm text-gray-500">Prueba con otros términos de búsqueda.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default Autoridades;

import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { Search, Loader2, AlertCircle, Mail, GraduationCap, Award, BookOpen, User, Tag } from 'lucide-react';

interface Docente {
  id: number;
  nombres: string;
  titulo: string;
  grado: string;
  correo: string;
  mencion: string;
  categoria: string;
  foto: string;
}

const PlanaDocente: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/plana-docente'];
  const [docentes, setDocentes] = useState<Docente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const response = await fetch('/datajson/plana-docente.json');
        if (!response.ok) {
          throw new Error('Error al cargar la plana docente');
        }
        const data = await response.json();
        setDocentes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchDocentes();
  }, []);

  const filteredDocentes = docentes.filter(doc =>
    doc.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.mencion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.grado.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by category (e.g., Principales, Asociados)
  const categories = Array.from(new Set(filteredDocentes.map(doc => doc.categoria)));

  return (
    <InternalPageLayout title={content.title} subtitle={content.subtitle} image={content.image}>
      <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-8 italic border-l-8 border-uncp pl-6 py-2">
        {content.intro}
      </div>

      <div className="space-y-12">
        <div className="space-y-6">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{p}</p>
          ))}
        </div>

        {/* Search Bar & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gray-50 dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800">
          <div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <Award className="text-uncp" /> Docentes Destacados
            </h3>
            <p className="text-sm text-gray-500">Conoce a nuestros distinguidos docentes e investigadores forestales</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Buscar por nombre, grado o especialidad..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-uncp focus:border-transparent outline-none transition-all shadow-sm dark:text-white font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Dynamic Directory */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="text-uncp animate-spin" size={48} />
            <p className="text-gray-500 font-bold animate-pulse">Cargando plana docente...</p>
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
            {categories.map(category => {
              const categoryDocs = filteredDocentes.filter(doc => doc.categoria === category);
              return (
                <div key={category} className="space-y-6">
                  {/* Category Header */}
                  <div className="bg-uncp text-white px-6 py-3.5 rounded-xl font-black text-lg uppercase tracking-wider shadow-md">
                    {category}
                  </div>

                  {/* Faculty Members Grid */}
                  <div className="grid grid-cols-1 gap-6">
                    {categoryDocs.map((doc) => (
                      <div 
                        key={doc.id}
                        className="flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-2xl border border-gray-150 dark:border-slate-800/80 hover:border-uncp/40 transition-all shadow-md hover:shadow-xl group overflow-hidden"
                      >
                        {/* Portrait Section */}
                        <div className="w-full md:w-56 bg-slate-50/50 dark:bg-slate-950/40 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-slate-800/80 shrink-0">
                          <div className="w-40 h-48 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-850 border border-gray-150 dark:border-slate-850 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                            {doc.foto ? (
                              <img 
                                src={doc.foto} 
                                alt={doc.nombres}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="w-full h-full bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center p-4 text-center">
                                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center mb-3">
                                  <User size={36} className="text-gray-400 dark:text-gray-500" />
                                </div>
                                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none">FCFA - UNCP</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Details Section */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xl md:text-2xl font-black text-uncp uppercase tracking-tight mb-4 group-hover:text-uncp-dark transition-colors">
                              {doc.nombres}
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                              {/* Columna Izquierda: Título y Grado */}
                              <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                  <span className="text-gray-400 dark:text-gray-500 font-bold w-16 shrink-0">Título:</span>
                                  <span className="text-slate-700 dark:text-gray-300 font-semibold">{doc.titulo}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <span className="text-gray-400 dark:text-gray-500 font-bold w-16 shrink-0">Grado:</span>
                                  <span className="text-slate-800 dark:text-gray-200 font-black inline-flex items-center gap-1.5">
                                    <GraduationCap size={16} className="text-uncp shrink-0" />
                                    {doc.grado}
                                  </span>
                                </div>
                              </div>

                              {/* Columna Derecha: Mención y Correo */}
                              <div className="space-y-3 min-w-0">
                                {doc.mencion && (
                                  <div className="space-y-1">
                                    <p className="text-xs text-gray-400 dark:text-gray-500 font-black uppercase tracking-wider">Mención</p>
                                    <span className="text-slate-600 dark:text-gray-300 font-bold text-xs bg-slate-50 dark:bg-slate-800/50 px-2.5 py-1.5 rounded-lg border border-gray-100 dark:border-slate-800/50 inline-flex items-center gap-1 max-w-full">
                                      <BookOpen size={12} className="text-uncp shrink-0" />
                                      <span className="truncate" title={doc.mencion}>{doc.mencion}</span>
                                    </span>
                                  </div>
                                )}
                                {doc.correo && (
                                  <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-gray-300 pt-1 font-semibold min-w-0">
                                    <Mail size={14} className="text-uncp shrink-0" />
                                    <a 
                                      href={`mailto:${doc.correo}`}
                                      className="hover:text-uncp hover:underline underline-offset-4 decoration-dashed truncate"
                                      title={doc.correo}
                                    >
                                      {doc.correo}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800/50 flex justify-end items-center text-xs text-gray-400 font-bold">
                            <Tag size={12} className="mr-1 text-uncp" /> CATEGORÍA: {String(category).toUpperCase()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredDocentes.length === 0 && (
              <div className="p-16 text-center bg-gray-50 dark:bg-slate-900 rounded-3xl border border-gray-150 dark:border-slate-800">
                <div className="inline-flex p-4 bg-white dark:bg-slate-800 rounded-full text-gray-400 dark:text-gray-600 mb-4 shadow-sm">
                  <Search size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">No se encontraron docentes</h4>
                <p className="text-sm text-gray-500">Prueba con otros términos de búsqueda.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default PlanaDocente;

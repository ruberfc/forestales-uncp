import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { Info, Map, Database, FileSearch, Search, Book, Download, Calendar, User, Hash, FileText, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookData {
  codigo: string;
  "num-libro": number;
  "cod-libro": number;
  "cod-autor": string;
  year: number;
  autores: string;
  titulo: string;
  editorial: string;
  paginas: number;
  ISBN: string;
  ejemplares: number;
  url: string;
}

const CentroInformacion: React.FC = () => {
  const content = PAGE_CONTENT['/biblioteca/centro-informacion'];
  const [books, setBooks] = useState<BookData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('datajson/centro-informacion.json');
        if (!response.ok) throw new Error('Error al cargar los datos');
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book => 
    book.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.autores.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.codigo.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-slate-900 p-10 rounded-[40px] border border-gray-100 dark:border-slate-700">
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-8 uppercase tracking-widest flex items-center gap-3">
              <Info className="text-uncp" /> Servicios Especializados
            </h3>
            <div className="grid gap-4">
              {content.features?.[0].items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-50 dark:border-slate-700 shadow-sm hover:border-uncp transition-colors cursor-pointer group">
                  <div className="bg-uncp/10 text-uncp p-2 rounded-lg group-hover:bg-uncp group-hover:text-white transition-colors">
                    <Database size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center gap-6 group hover:border-uncp transition-all">
              <div className="p-4 bg-uncp/10 text-uncp rounded-2xl group-hover:bg-uncp group-hover:text-white transition-all">
                <Map size={32} />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">Mapas y SIG</h4>
                <p className="text-sm text-gray-500 font-medium">Consulta de cartografía forestal y sistemas de información geográfica.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center gap-6 group hover:border-uncp transition-all">
              <div className="p-4 bg-uncp/10 text-uncp rounded-2xl group-hover:bg-uncp group-hover:text-white transition-all">
                <FileSearch size={32} />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">Búsqueda Especializada</h4>
                <p className="text-sm text-gray-500 font-medium">Asesoría en la localización de datos técnicos y estadísticos del sector.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Catálogo Section */}
        <div className="mt-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                Catálogo del Centro de Información
              </h2>
              <p className="text-gray-500 font-medium">Explora nuestra colección de recursos técnicos y científicos.</p>
            </div>
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Buscar por título, autor o código..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-uncp focus:border-transparent outline-none transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <Loader2 className="text-uncp animate-spin" size={48} />
              <p className="text-gray-500 font-bold animate-pulse">Cargando catálogo...</p>
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
            <div className="overflow-x-auto rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-xl bg-white dark:bg-slate-900">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-bottom border-gray-100 dark:border-slate-700">
                    <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Recurso</th>
                    <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Autor / Editorial</th>
                    <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Detalles</th>
                    <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-slate-800">
                  <AnimatePresence mode="popLayout">
                    {filteredBooks.map((book) => (
                      <motion.tr 
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        key={book.codigo} 
                        className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                      >
                        <td className="p-6 max-w-md">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-uncp/5 text-uncp rounded-xl group-hover:bg-uncp group-hover:text-white transition-all shrink-0">
                              <Book size={24} />
                            </div>
                            <div>
                              <div className="text-xs font-black text-uncp uppercase tracking-tighter mb-1">{book.codigo}</div>
                              <h4 className="text-slate-900 dark:text-white font-bold leading-tight mb-1">{book.titulo}</h4>
                              <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                                <Hash size={12} /> ISBN: {book.ISBN || 'N/A'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-sm">
                              <User size={14} className="text-uncp" />
                              {book.autores}
                            </div>
                            <div className="text-xs text-gray-500 italic leading-relaxed">
                              {book.editorial}
                            </div>
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                              <Calendar size={10} /> {book.year}
                            </span>
                            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase rounded-full flex items-center gap-1">
                              <FileText size={10} /> {book.paginas} Pág.
                            </span>
                            <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase rounded-full">
                              {book.ejemplares} Ejemp.
                            </span>
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          {book.url ? (
                            <a 
                              href={book.url.startsWith('./') ? book.url.substring(1) : book.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-uncp text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-uncp-dark hover:scale-105 transition-all shadow-lg shadow-uncp/20"
                            >
                              <Download size={14} /> PDF
                            </a>
                          ) : (
                            <span className="text-gray-300 dark:text-gray-700 italic text-xs font-bold">No disponible</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
              {filteredBooks.length === 0 && (
                <div className="p-20 text-center">
                  <div className="inline-flex p-6 bg-gray-50 dark:bg-slate-800 rounded-full text-gray-300 dark:text-gray-600 mb-4">
                    <Search size={48} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">No se encontraron resultados</h4>
                  <p className="text-gray-500">Intenta con otros términos de búsqueda.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </InternalPageLayout>
  );
};

export default CentroInformacion;

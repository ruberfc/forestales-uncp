import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { Book, Download, BookOpen, Search, Loader2, AlertCircle, Calendar, Hash, Bookmark } from 'lucide-react';

interface Libro {
  id: number;
  titulo: string;
  autores: string;
  year: number;
  editorial: string;
  paginas: number;
  isbn: string;
  portada: string;
  url: string;
}

const Libros: React.FC = () => {
  const content = PAGE_CONTENT['/publicaciones/libros'];
  const [libros, setLibros] = useState<Libro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await fetch('/datajson/libros-investigacion.json');
        if (!response.ok) {
          throw new Error('Error al cargar el catálogo de libros');
        }
        const data = await response.json();
        setLibros(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  const filteredLibros = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    libro.autores.toLowerCase().includes(searchTerm.toLowerCase()) ||
    libro.isbn.toLowerCase().includes(searchTerm.toLowerCase())
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

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gray-50 dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800">
          <div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <BookOpen className="text-uncp" /> Libros de Investigación
            </h3>
            <p className="text-sm text-gray-500">Busca entre nuestras publicaciones científicas y textos especializados</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Buscar por título, autor o ISBN..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-uncp focus:border-transparent outline-none transition-all shadow-sm dark:text-white font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Dynamic Book Catalog */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="text-uncp animate-spin" size={48} />
            <p className="text-gray-500 font-bold animate-pulse">Cargando catálogo de libros...</p>
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
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {filteredLibros.map((libro) => (
                <div 
                  key={libro.id} 
                  className="flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl overflow-hidden hover:border-uncp transition-all group hover:shadow-2xl hover:shadow-uncp/5"
                >
                  {/* Book Cover Container */}
                  <div className="w-full md:w-60 bg-gray-50 dark:bg-slate-950 flex items-center justify-center p-6 relative shrink-0 border-r border-gray-100 dark:border-slate-800/50">
                    <div className="relative w-40 aspect-[3/4] rounded-xl shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 border border-gray-200/50 dark:border-slate-800 bg-white">
                      {libro.portada ? (
                        <img 
                          src={libro.portada} 
                          alt={libro.titulo}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center p-4 text-center">
                          <Book size={40} className="text-gray-400 mb-2" />
                          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sin Portada</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Book Details Container */}
                  <div className="flex-1 p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-uncp/10 text-uncp text-xs font-bold uppercase tracking-wider">
                          <Bookmark size={12} /> {libro.editorial}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-xs font-bold">
                          <Calendar size={12} /> {libro.year}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-snug group-hover:text-uncp transition-colors">
                        {libro.titulo}
                      </h3>

                      <p className="text-base text-gray-600 dark:text-gray-300 font-bold flex items-center gap-2">
                        <span className="text-gray-400 font-medium">Autores:</span> {libro.autores}
                      </p>

                      {/* Technical specifications */}
                      <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-slate-800 max-w-md">
                        <div>
                          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Páginas</p>
                          <p className="text-sm font-bold text-slate-700 dark:text-gray-200">{libro.paginas} págs.</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">ISBN</p>
                          <p className="text-sm font-bold text-slate-700 dark:text-gray-200 flex items-center gap-1">
                            <Hash size={12} /> {libro.isbn}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="pt-4 border-t border-gray-100 dark:border-slate-800/50 flex justify-end">
                      {libro.url ? (
                        <a 
                          href={libro.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-6 py-3 bg-uncp text-white text-sm font-black uppercase tracking-widest rounded-xl hover:bg-uncp-dark hover:scale-105 transition-all shadow-lg shadow-uncp/25"
                        >
                          <Download size={16} /> Descargar Libro (PDF)
                        </a>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600 italic text-sm font-bold">PDF no disponible para descarga pública</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredLibros.length === 0 && (
              <div className="p-16 text-center bg-gray-50 dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800">
                <div className="inline-flex p-4 bg-white dark:bg-slate-800 rounded-full text-gray-400 dark:text-gray-600 mb-4 shadow-sm">
                  <Search size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">No se encontraron libros</h4>
                <p className="text-sm text-gray-500">Prueba con otros términos de búsqueda.</p>
              </div>
            )}
          </div>
        )}

        {/* Existing descriptive section layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-700">
            <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 uppercase tracking-tight flex items-center gap-3">
              <BookOpen className="text-uncp" /> Fondo Editorial
            </h3>
            <div className="grid gap-3">
              {content.features?.[0].items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-50 dark:border-slate-700 shadow-sm hover:border-uncp transition-colors group">
                  <div className="w-2 h-2 rounded-full bg-uncp group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 uppercase tracking-tight">Manuales y Guías Técnicas</h3>
            {content.documents?.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 group hover:border-uncp transition-all shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-uncp/10 text-uncp rounded-xl group-hover:bg-uncp group-hover:text-white transition-all">
                    <Book size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm">{doc.title}</h4>
                    <p className="text-xs text-gray-500">{doc.size} • {doc.date}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-uncp transition-colors">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InternalPageLayout>
  );
};

export default Libros;

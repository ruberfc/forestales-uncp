import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { FileText, ExternalLink, Search, Loader2, AlertCircle, BookOpen, User } from 'lucide-react';

interface Articulo {
  id: number;
  year: number;
  investigador: string;
  titulo: string;
  url: string;
}

const Articulos: React.FC = () => {
  const content = PAGE_CONTENT['/publicaciones/articulos'];
  const [articulos, setArticulos] = useState<Articulo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeYear, setActiveYear] = useState<number>(2019);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await fetch('datajson/articulos-cientificos.json');
        if (!response.ok) {
          throw new Error('Error al cargar las publicaciones científicas');
        }
        const data = await response.json();
        setArticulos(data);
        
        // Default active year to first unique year
        const years = Array.from(new Set<number>(data.map((art: Articulo) => art.year))).sort((a, b) => a - b);
        if (years.length > 0) {
          setActiveYear(years[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchArticulos();
  }, []);

  // Get list of unique years sorted ascending
  const years = Array.from(new Set<number>(articulos.map(art => art.year))).sort((a, b) => a - b);

  // Filter articles based on active year and search term
  const filteredArticulos = articulos.filter(art => {
    const matchesYear = art.year === activeYear;
    const matchesSearch = 
      art.investigador.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesYear && matchesSearch;
  });

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

        {/* Scientific Articles Section with Interactive Tabs */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="text-uncp animate-spin" size={48} />
            <p className="text-gray-500 font-bold animate-pulse">Cargando catálogo de artículos...</p>
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                  Artículos por Año de Publicación
                </h3>
                <p className="text-sm text-gray-500">Selecciona un año para explorar la producción científica</p>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text"
                  placeholder="Buscar por investigador o título..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-uncp focus:border-transparent outline-none transition-all shadow-sm dark:text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Year selector Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-gray-100 dark:border-slate-800 pb-px">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setActiveYear(year);
                    setSearchTerm(''); // Clear search on year change
                  }}
                  className={`px-5 py-3 font-black text-sm uppercase tracking-wider transition-all rounded-t-2xl border-t-4 border-x border-b-0 ${
                    activeYear === year
                      ? 'border-t-uncp border-x-gray-200 dark:border-x-slate-700 text-uncp bg-gray-50 dark:bg-slate-800/50'
                      : 'border-t-transparent border-x-transparent text-gray-500 hover:text-slate-800 dark:hover:text-white hover:bg-gray-50/50 dark:hover:bg-slate-800/20'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Scientific Articles Table */}
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-700 shadow-xl bg-white dark:bg-slate-900">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-uncp text-white">
                    <th className="p-4 text-xs font-black uppercase tracking-wider w-16 text-center border-r border-uncp/20">N°</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider w-1/3 border-r border-uncp/20">INVESTIGADOR DOCENTE</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider w-1/2 border-r border-uncp/20">TÍTULO DE ARTÍCULO CIENTÍFICO</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider text-center">LINK DEL ARTÍCULO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                  {filteredArticulos.map((art, idx) => (
                    <tr
                      key={art.id}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                    >
                      <td className="p-4 text-center font-bold text-gray-500 dark:text-gray-400 text-sm border-r border-gray-100 dark:border-slate-800">
                        {idx + 1}
                      </td>
                      <td className="p-4 font-bold text-slate-800 dark:text-slate-200 text-sm border-r border-gray-100 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-uncp shrink-0" />
                          <span>{art.investigador}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium border-r border-gray-100 dark:border-slate-800">
                        <div className="flex items-start gap-2">
                          <BookOpen size={16} className="text-gray-400 shrink-0 mt-1" />
                          <span>{art.titulo}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        {art.url ? (
                          <a
                            href={art.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-uncp/10 hover:bg-uncp text-uncp hover:text-white rounded-lg text-xs font-black uppercase tracking-widest transition-all shadow-sm break-all"
                          >
                            Ver <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-gray-300 dark:text-gray-700 italic text-xs font-bold">No disponible</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredArticulos.length === 0 && (
                <div className="p-16 text-center">
                  <div className="inline-flex p-4 bg-gray-50 dark:bg-slate-800 rounded-full text-gray-400 dark:text-gray-600 mb-4">
                    <Search size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">No se encontraron artículos</h4>
                  <p className="text-sm text-gray-500">Prueba con otros términos de búsqueda o selecciona otro año de la lista.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Existing descriptive section layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-700">
            <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 uppercase tracking-tight flex items-center gap-3">
              <ExternalLink className="text-uncp" /> {content.features?.[0].title || 'Revistas de Difusión'}
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
            <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6 uppercase tracking-tight">Recursos y Guías</h3>
            {content.documents?.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 group hover:border-uncp transition-all shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-uncp/10 text-uncp rounded-xl group-hover:bg-uncp group-hover:text-white transition-all">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm">{doc.title}</h4>
                    <p className="text-xs text-gray-500">{doc.size} • {doc.date}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-uncp transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InternalPageLayout>
  );
};

export default Articulos;

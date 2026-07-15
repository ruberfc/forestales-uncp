import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { FileText, Download, Search, Loader2, AlertCircle, Calendar, FolderOpen } from 'lucide-react';

interface Resolucion {
  id: number;
  numero: string;
  titulo: string;
  year: number;
  fecha: string;
  url: string;
}

const ResolucionesDecanato: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/resoluciones-decanato'];
  const [resoluciones, setResoluciones] = useState<Resolucion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all'); // 'all' or specific year as string

  useEffect(() => {
    const fetchResoluciones = async () => {
      try {
        const response = await fetch('/datajson/resoluciones-decanato.json');
        if (!response.ok) {
          throw new Error('Error al cargar las resoluciones de decanato');
        }
        const data = await response.json();
        setResoluciones(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchResoluciones();
  }, []);

  // Get unique list of years from resolutions, sorted descending
  const years = Array.from(new Set<number>(resoluciones.map(res => res.year))).sort((a, b) => b - a);

  // Filter resolutions based on search term
  const searchedResoluciones = resoluciones.filter(res => 
    res.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    res.numero.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter based on selected year tab
  const filteredResoluciones = selectedYear === 'all'
    ? searchedResoluciones
    : searchedResoluciones.filter(res => res.year.toString() === selectedYear);

  // Group filtered results by year for organized display
  const groupedResolucionesByYear: Record<number, Resolucion[]> = {};
  filteredResoluciones.forEach(res => {
    if (!groupedResolucionesByYear[res.year]) {
      groupedResolucionesByYear[res.year] = [];
    }
    groupedResolucionesByYear[res.year].push(res);
  });

  // Sort grouped years descending
  const sortedGroupedYears = Object.keys(groupedResolucionesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-8 italic border-l-8 border-uncp pl-6 py-2">
        {content.intro}
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          {content.paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-lg">
              {para}
            </p>
          ))}
        </div>

        {/* Filters and Search Bar */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="text-uncp animate-spin" size={48} />
            <p className="text-gray-500 font-bold animate-pulse">Cargando resoluciones de decanato...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 p-8 rounded-3xl flex items-center gap-6 text-red-600 dark:text-red-400">
            <AlertCircle size={40} />
            <div>
              <h4 className="font-bold text-lg">Error al cargar resoluciones</h4>
              <p>{error}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Year Filters */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <button
                onClick={() => setSelectedYear('all')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm ${
                  selectedYear === 'all'
                    ? 'bg-[#0091c7] text-white'
                    : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50'
                }`}
              >
                <FolderOpen size={16} /> Todos ({searchedResoluciones.length})
              </button>

              {years.map(year => {
                const countInYear = searchedResoluciones.filter(res => res.year === year).length;
                return (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year.toString())}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${
                      selectedYear === year.toString()
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black'
                        : 'border-emerald-200 dark:border-emerald-900/40 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-50/50'
                    }`}
                  >
                    <Calendar size={16} /> {year}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Buscar resolución por número o descripción..." 
                className="w-full pl-14 pr-6 py-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-uncp focus:border-transparent outline-none transition-all text-sm font-medium shadow-sm dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Resolutions List grouped by Year */}
            <div className="space-y-10">
              {sortedGroupedYears.map(year => {
                const yearResolutions = groupedResolucionesByYear[year];
                return (
                  <div key={year} className="space-y-4">
                    {/* Header: Resoluciones [Año] */}
                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-800/40 px-6 py-4 rounded-2xl border-b border-gray-150 dark:border-slate-800">
                      <FileText className="text-red-500 shrink-0" size={24} />
                      <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                        Resoluciones {year}
                      </h3>
                      <span className="bg-[#f0abfc] text-fuchsia-900 text-xs font-black px-2.5 py-1 rounded-full flex items-center justify-center">
                        {yearResolutions.length}
                      </span>
                    </div>

                    {/* Resolutions rows */}
                    <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-md divide-y divide-gray-100 dark:divide-slate-800/60">
                      {yearResolutions.map((res, index) => (
                        <div 
                          key={res.id} 
                          className="flex items-center justify-between p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors gap-4"
                        >
                          <div className="flex items-center gap-4 min-w-0">
                            {/* Circle number */}
                            <div className="w-8 h-8 rounded-full bg-[#0091c7] text-white flex items-center justify-center font-bold text-xs shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-slate-700 dark:text-gray-200 font-bold text-sm leading-relaxed truncate md:whitespace-normal">
                              {res.titulo}
                            </p>
                          </div>

                          {/* PDF Download Button */}
                          <a 
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all shadow-sm shrink-0"
                          >
                            <FileText size={14} /> PDF
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {sortedGroupedYears.length === 0 && (
                <div className="p-16 text-center bg-gray-50 dark:bg-slate-900 rounded-3xl border border-gray-150 dark:border-slate-800">
                  <div className="inline-flex p-4 bg-white dark:bg-slate-800 rounded-full text-gray-400 dark:text-gray-600 mb-4 shadow-sm">
                    <Search size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">No se encontraron resoluciones</h4>
                  <p className="text-sm text-gray-500">Prueba con otros términos de búsqueda o selecciona otra pestaña.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default ResolucionesDecanato;

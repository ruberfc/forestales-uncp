import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import InternalPageLayout from '../../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../../constants';
import { FileText, Search, Loader2, AlertCircle, FileDown, Calendar, CheckCircle } from 'lucide-react';

interface Resolucion {
  id: number;
  year: number;
  numero: number;
  titulo: string;
  url: string;
}

const Resoluciones: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/consejo/resoluciones'];
  const [resoluciones, setResoluciones] = useState<Resolucion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeYear, setActiveYear] = useState<string>('all');

  useEffect(() => {
    const fetchResoluciones = async () => {
      try {
        const response = await fetch('/datajson/resoluciones-consejo.json');
        if (!response.ok) {
          throw new Error('Error al cargar las resoluciones de consejo');
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

  // Filter resolutions based on search and year tab
  const filteredResoluciones = resoluciones.filter(res => {
    const matchesSearch = res.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = activeYear === 'all' || res.year.toString() === activeYear;
    return matchesSearch && matchesYear;
  });

  // Unique years for tabs
  const years = Array.from(new Set(resoluciones.map(res => res.year.toString()))).sort((a: string, b: string) => b.localeCompare(a));

  // Group filtered resolutions by year
  const groupedByYear = filteredResoluciones.reduce((groups, res) => {
    const year = res.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(res);
    return groups;
  }, {} as Record<number, Resolucion[]>);

  // Sort years descending
  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-8 leading-snug italic border-l-8 border-uncp pl-6 py-2">
          {content.intro}
        </div>
        <div className="space-y-6 mb-12">
          {content.paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-lg m-0">
              {para}
            </p>
          ))}
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 mb-10 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Year Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveYear('all')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                  activeYear === 'all'
                    ? 'bg-uncp text-white border-uncp shadow-md shadow-uncp/10'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-slate-700 hover:bg-gray-50'
                }`}
              >
                <span>Todos</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${activeYear === 'all' ? 'bg-white/25 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}`}>
                  {resoluciones.length}
                </span>
              </button>
              {years.map(year => {
                const countForYear = resoluciones.filter(r => r.year.toString() === year).length;
                return (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                      activeYear === year
                        ? 'bg-[#84cc16] text-white border-[#84cc16] shadow-md shadow-lime-500/10'
                        : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-slate-700 hover:bg-gray-50'
                    }`}
                  >
                    <Calendar size={12} className={activeYear === year ? 'text-white' : 'text-gray-400'} />
                    <span>{year}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${activeYear === year ? 'bg-white/25 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-500'}`}>
                      {countForYear}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar resolución..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border-none rounded-xl text-xs font-bold placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-uncp transition-all"
              />
            </div>

          </div>
        </div>

        {/* Loader, Error, or Main List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
            <Loader2 className="animate-spin text-uncp mb-4" size={40} />
            <p className="text-sm font-bold uppercase tracking-wider">Cargando resoluciones de consejo...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 p-6 rounded-3xl flex items-center gap-4 text-red-800 dark:text-red-300">
            <AlertCircle className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">Error de carga</h4>
              <p className="text-xs">{error}</p>
            </div>
          </div>
        ) : filteredResoluciones.length === 0 ? (
          <div className="bg-gray-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-12 text-center text-gray-400 dark:text-gray-500">
            <FileText className="mx-auto mb-4 opacity-40" size={48} />
            <p className="text-sm font-bold uppercase tracking-wider">No se encontraron resoluciones para la búsqueda.</p>
          </div>
        ) : (
          <div className="space-y-10 animate-fadeIn">
            {sortedYears.map((year) => {
              const yearResolutions = groupedByYear[year];
              return (
                <div key={year} className="space-y-4">
                  {/* Elegant Header containing Year Title and Count Badge */}
                  <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-900/40 p-4 rounded-t-2xl border-b border-gray-150 dark:border-slate-800/80">
                    <FileText className="text-red-500" size={20} />
                    <h3 className="text-base md:text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                      Resoluciones {year}
                    </h3>
                    <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                      {yearResolutions.length}
                    </span>
                  </div>

                  {/* List of Resolution rows */}
                  <div className="divide-y divide-gray-100 dark:divide-slate-800/60 border border-gray-150 dark:border-slate-800 rounded-b-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                    {yearResolutions.map((res, index) => (
                      <div 
                        key={res.id} 
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          {/* Row Circle Number */}
                          <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5 shadow-sm">
                            {index + 1}
                          </div>
                          
                          {/* Title text */}
                          <div className="text-slate-700 dark:text-slate-300 font-bold text-xs md:text-sm text-left leading-relaxed">
                            {res.titulo}
                          </div>
                        </div>

                        {/* Red PDF download button */}
                        <a 
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ef4444] hover:bg-red-600 text-white font-black rounded-lg text-[10px] uppercase tracking-widest transition-all hover:scale-105 shadow-sm shrink-0 self-stretch sm:self-auto text-center justify-center mt-2 sm:mt-0"
                        >
                          <FileText size={12} />
                          <span>PDF</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default Resoluciones;

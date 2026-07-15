import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../../constants';
import { FileText, Search, Loader2, AlertCircle, Calendar, FileDown } from 'lucide-react';

interface Acta {
  id: number;
  year: number;
  numero: number;
  nombre: string;
  tipo: string;
  url: string;
}

const Actas: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/consejo/actas'];
  const [actas, setActas] = useState<Acta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeYear, setActiveYear] = useState<string>('all');
  const [activeType, setActiveType] = useState<string>('all');

  useEffect(() => {
    const fetchActas = async () => {
      try {
        const response = await fetch('/datajson/actas-consejo.json');
        if (!response.ok) {
          throw new Error('Error al cargar la lista de actas');
        }
        const data = await response.json();
        setActas(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchActas();
  }, []);

  // Filter actas
  const filteredActas = actas.filter(acta => {
    const matchesSearch = acta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          acta.tipo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = activeYear === 'all' || acta.year.toString() === activeYear;
    const matchesType = activeType === 'all' || acta.tipo.toLowerCase() === activeType.toLowerCase();
    return matchesSearch && matchesYear && matchesType;
  });

  // Get unique years for the tabs
  const years = Array.from(new Set(actas.map(acta => acta.year.toString()))).sort((a: string, b: string) => b.localeCompare(a));

  // Group filtered actas by year
  const groupedByYear = filteredActas.reduce((groups, acta) => {
    const year = acta.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(acta);
    return groups;
  }, {} as Record<number, Acta[]>);

  // Sort years descending
  const groupedYears = Object.keys(groupedByYear)
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
            <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-lg">
              {para}
            </p>
          ))}
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 mb-8 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Filter Buttons */}
            <div className="flex flex-col gap-3">
              {/* Año Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 w-10 shrink-0">Año:</span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveYear('all')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                      activeYear === 'all'
                        ? 'bg-uncp text-white shadow-sm'
                        : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    Todos
                  </button>
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                        activeYear === year
                          ? 'bg-uncp text-white shadow-sm'
                          : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tipo Filter */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 w-10 shrink-0">Tipo:</span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveType('all')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                      activeType === 'all'
                        ? 'bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
                        : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setActiveType('ordinaria')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                      activeType === 'ordinaria'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    Ordinaria
                  </button>
                  <button
                    onClick={() => setActiveType('extraordinaria')}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                      activeType === 'extraordinaria'
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    Extraordinaria
                  </button>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar acta..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border-none rounded-xl text-xs font-bold placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-uncp transition-all"
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
            <Loader2 className="animate-spin text-uncp mb-4" size={40} />
            <p className="text-sm font-bold uppercase tracking-wider">Cargando actas de consejo...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 p-6 rounded-3xl flex items-center gap-4 text-red-800 dark:text-red-300">
            <AlertCircle className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">Error de carga</h4>
              <p className="text-xs">{error}</p>
            </div>
          </div>
        ) : filteredActas.length === 0 ? (
          <div className="bg-gray-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-12 text-center text-gray-400 dark:text-gray-500">
            <FileText className="mx-auto mb-4 opacity-40" size={48} />
            <p className="text-sm font-bold uppercase tracking-wider">No se encontraron actas para los filtros seleccionados.</p>
          </div>
        ) : (
          <div className="space-y-12 animate-fadeIn">
            {groupedYears.map((year) => (
              <div key={year} className="space-y-4">
                {/* Year Header with elegant styling */}
                <div className="flex items-center gap-2 pb-2 border-b-2 border-gray-100 dark:border-slate-800">
                  <Calendar className="text-uncp" size={20} />
                  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Lista de Actas {year}
                  </h3>
                </div>

                {/* Table for the year's actas */}
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-[24px] shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-100 dark:divide-slate-800/80">
                      <thead className="bg-gray-50 dark:bg-slate-950/50">
                        <tr>
                          <th scope="col" className="px-6 py-3.5 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest w-16">
                            #
                          </th>
                          <th scope="col" className="px-6 py-3.5 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                            Nombre
                          </th>
                          <th scope="col" className="px-6 py-3.5 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                            Tipo
                          </th>
                          <th scope="col" className="px-6 py-3.5 text-right text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest w-24">
                            Ver
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80 bg-white dark:bg-slate-900">
                        {groupedByYear[year].map((acta) => (
                          <tr 
                            key={acta.id} 
                            className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group"
                          >
                            <td className="px-6 py-3.5 whitespace-nowrap text-xs font-mono text-gray-500 dark:text-gray-400">
                              {acta.numero}
                            </td>
                            <td className="px-6 py-3.5 whitespace-nowrap">
                              <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-uncp transition-colors">
                                {acta.nombre}
                              </span>
                            </td>
                            <td className="px-6 py-3.5 whitespace-nowrap">
                              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                                acta.tipo.toLowerCase() === 'ordinaria'
                                  ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
                                  : 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400'
                              }`}>
                                {acta.tipo}
                              </span>
                            </td>
                            <td className="px-6 py-3.5 whitespace-nowrap text-right">
                              <a 
                                href={acta.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded text-[10px] uppercase tracking-widest transition-all hover:scale-105 shadow-sm"
                              >
                                <span className="text-[10px]">pdf</span>
                                <FileDown size={11} />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default Actas;

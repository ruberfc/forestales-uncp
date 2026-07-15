import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../../constants';
import { Mail, Search, Users, Shield, GraduationCap, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface ConsejoMiembro {
  numero: number;
  nombre: string;
  cargo: string;
  categoria: string;
  correo: string;
}

const Miembros: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/consejo/miembros'];
  const [miembros, setMiembros] = useState<ConsejoMiembro[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const fetchMiembros = async () => {
      try {
        const response = await fetch('datajson/consejo-miembros.json');
        if (!response.ok) {
          throw new Error('Error al cargar la lista de miembros');
        }
        const data = await response.json();
        setMiembros(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchMiembros();
  }, []);

  const filteredMiembros = miembros.filter(miembro => {
    const matchesSearch = miembro.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          miembro.cargo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || miembro.categoria.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  activeCategory === 'all'
                    ? 'bg-uncp text-white shadow-md shadow-uncp/10'
                    : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveCategory('docente')}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  activeCategory === 'docente'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                    : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                Estamento Docente
              </button>
              <button
                onClick={() => setActiveCategory('estudiante')}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  activeCategory === 'estudiante'
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/10'
                    : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                Tercio Estudiantil
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre o cargo..."
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border-none rounded-xl text-sm font-bold placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-uncp transition-all"
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
            <Loader2 className="animate-spin text-uncp mb-4" size={40} />
            <p className="text-sm font-bold uppercase tracking-wider">Cargando miembros del consejo...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 p-6 rounded-3xl flex items-center gap-4 text-red-800 dark:text-red-300">
            <AlertCircle className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">Error de carga</h4>
              <p className="text-xs">{error}</p>
            </div>
          </div>
        ) : filteredMiembros.length === 0 ? (
          <div className="bg-gray-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-12 text-center text-gray-400 dark:text-gray-500">
            <Users className="mx-auto mb-4 opacity-40" size={48} />
            <p className="text-sm font-bold uppercase tracking-wider">No se encontraron miembros para la búsqueda.</p>
          </div>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            {/* Table Container */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-[32px] shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-100 dark:divide-slate-800/80">
                  <thead className="bg-gray-50 dark:bg-slate-950/50">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest w-16">
                        N°
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Miembro del Consejo (Autoridad / Estudiante)
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest hidden md:table-cell">
                        Cargo en el Consejo
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Estamento
                      </th>
                      <th scope="col" className="px-6 py-4 text-right text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Contacto
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800/80 bg-white dark:bg-slate-900">
                    {filteredMiembros.map((miembro) => (
                      <tr 
                        key={miembro.numero} 
                        className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500 dark:text-gray-400">
                          {miembro.numero}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-uncp transition-colors">
                              {miembro.nombre}
                            </span>
                            <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 md:hidden mt-0.5">
                              {miembro.cargo}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                          <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                            {miembro.cargo}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                            miembro.categoria.toLowerCase() === 'docente'
                              ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100/50 dark:border-emerald-900/30'
                              : 'bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-400 border border-sky-100/50 dark:border-sky-900/30'
                          }`}>
                            {miembro.categoria.toLowerCase() === 'docente' ? <GraduationCap size={10} /> : <Users size={10} />}
                            {miembro.categoria}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <a 
                            href={`mailto:${miembro.correo}`}
                            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-uncp hover:text-uncp-dark bg-uncp/5 hover:bg-uncp/10 px-3 py-1.5 rounded-lg transition-all"
                          >
                            <Mail size={12} />
                            <span className="hidden sm:inline">Correo</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Cards Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-uncp/5 to-transparent border border-uncp/10 rounded-2xl p-6 text-left">
                <Shield className="text-uncp mb-3" size={24} />
                <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Órgano de Decisión</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  Planifica y aprueba las principales directivas, presupuestos e iniciativas de la facultad de manera concertada.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 rounded-2xl p-6 text-left">
                <GraduationCap className="text-emerald-500 mb-3" size={24} />
                <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Docentes Principales</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  Líderes académicos con trayectoria dedicados a mantener el rigor y excelencia en la enseñanza e investigación forestal.
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-500/5 to-transparent border border-sky-500/10 rounded-2xl p-6 text-left">
                <Users className="text-sky-500 mb-3" size={24} />
                <h4 className="font-black text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-1">Tercio Estudiantil</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  Garantizan la participación y voto democrático de los estudiantes en la toma de decisiones estratégicas.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default Miembros;

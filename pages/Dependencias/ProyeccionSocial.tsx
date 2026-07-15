import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  Loader2, 
  AlertCircle, 
  Users, 
  BookOpen, 
  Award, 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  CalendarDays, 
  Search, 
  Building2, 
  Sparkles, 
  Compass, 
  Sprout, 
  HeartHandshake,
  ArrowUpRight,
  Filter,
  CheckCircle2
} from 'lucide-react';

interface Pilar {
  titulo: string;
  descripcion: string;
}

interface Proyecto {
  titulo: string;
  investigadores: string[];
}

interface ProyeccionSocialData {
  titulo: string;
  siglas: string;
  proceso: string;
  vision: string;
  pilares: Pilar[];
  proyectos: {
    [key: string]: Proyecto[];
  };
  pdfUrl: string;
  pdfTitulo: string;
}

const ProyeccionSocial: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/proyeccion-social'];
  const [data, setData] = useState<ProyeccionSocialData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchProyeccionData = async () => {
      try {
        const response = await fetch('/datajson/proyeccion-social.json');
        if (!response.ok) {
          throw new Error('Error al cargar la información de Proyección Social');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchProyeccionData();
  }, []);

  // Filter projects by year and search query
  const getFilteredProjects = () => {
    if (!data) return [];
    
    let allProjects: { year: string; titulo: string; investigadores: string[] }[] = [];
    
    // Flatten projects into a single list with year property
    (Object.entries(data.proyectos) as [string, Proyecto[]][]).forEach(([year, list]) => {
      list.forEach(p => {
        allProjects.push({
          year,
          titulo: p.titulo,
          investigadores: p.investigadores
        });
      });
    });

    // Apply year filter
    if (selectedYear !== 'all') {
      allProjects = allProjects.filter(p => p.year === selectedYear);
    }

    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      allProjects = allProjects.filter(p => 
        p.titulo.toLowerCase().includes(query) || 
        p.investigadores.some(inv => inv.toLowerCase().includes(query))
      );
    }

    return allProjects;
  };

  const filteredProjects = getFilteredProjects();

  const getPilarIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'educación ambiental':
        return <Sprout size={24} className="text-emerald-600 dark:text-emerald-400" />;
      case 'desarrollo forestal':
        return <Compass size={24} className="text-uncp" />;
      case 'transferencia tecnológica':
        return <Award size={24} className="text-indigo-600 dark:text-indigo-400" />;
      default:
        return <HeartHandshake size={24} className="text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        
        {/* Intro */}
        <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-10 leading-snug italic border-l-8 border-uncp pl-6 py-2">
          {content.intro}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 dark:text-gray-400">
            <Loader2 className="animate-spin text-uncp mb-4" size={40} />
            <p className="text-sm font-bold uppercase tracking-wider">Cargando Oficina de Proyección Social...</p>
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
          <div className="space-y-16 animate-fadeIn text-left">
            
            {/* Process Description & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Process Description extracted from Image 1 */}
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[40px] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                      <HeartHandshake size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-0.5">
                        Proceso de Extensión y Proyección
                      </span>
                      <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {data.titulo} ({data.siglas})
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                    {data.proceso}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800/60 flex items-center gap-3 text-xs text-gray-500 font-bold uppercase">
                  <Building2 size={16} className="text-uncp" />
                  <span>Facultad de Ciencias Forestales y del Ambiente - UNCP</span>
                </div>
              </div>

              {/* Sidebar Metadata Card - Vision */}
              <div className="lg:col-span-4 bg-gradient-to-br from-uncp/5 via-teal-500/5 to-transparent dark:from-uncp/10 dark:via-transparent border border-uncp/15 dark:border-slate-800 rounded-[40px] p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-3 bg-uncp text-white rounded-2xl w-fit">
                    <Compass size={22} />
                  </div>
                  <h4 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider m-0">
                    Visión de Impacto
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
                    {data.vision}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-2 text-[10px] font-black text-uncp uppercase tracking-widest">
                  <span>Proyección Sostenible</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>

            </div>

            {/* Pilares Estratégicos */}
            <div className="space-y-6">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex items-center gap-2">
                <Sparkles className="text-uncp" size={22} />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                  Líneas de Acción y Pilares Comunitarios
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.pilares.map((pilar, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[32px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl w-fit">
                        {getPilarIcon(pilar.titulo)}
                      </div>
                      <h4 className="text-sm md:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {pilar.titulo}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                        {pilar.descripcion}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-gray-50 dark:border-slate-800/40 flex items-center gap-1.5 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      <span>SGC Asegurado</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proyectos e Investigaciones Section */}
            <div className="space-y-8">
              
              {/* Header Title with Counts */}
              <div className="pb-4 border-b border-gray-150 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-uncp" size={24} />
                  <div>
                    <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                      Registro de Proyectos y Transferencia Tecnológica
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 m-0 mt-0.5">
                      Monitoreo histórico de iniciativas e investigaciones con impacto directo en el Valle del Mantaro.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-100/30 text-xs font-black uppercase tracking-wider self-start md:self-auto">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'Proyecto Encontrado' : 'Proyectos Registrados'}
                </div>
              </div>

              {/* Filters & Search Toolbar */}
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between bg-slate-50 dark:bg-slate-900/40 p-4 rounded-3xl border border-gray-200/60 dark:border-slate-800">
                
                {/* Years Filter Tabs */}
                <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
                  <button
                    onClick={() => setSelectedYear('all')}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                      selectedYear === 'all' 
                        ? 'bg-uncp text-white shadow-sm' 
                        : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 hover:text-slate-800 border border-gray-200 dark:border-slate-800'
                    }`}
                  >
                    Todos los Años
                  </button>
                  {Object.keys(data.proyectos).sort((a,b) => b.localeCompare(a)).map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                        selectedYear === year 
                          ? 'bg-uncp text-white shadow-sm' 
                          : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 hover:text-slate-800 border border-gray-200 dark:border-slate-800'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>

                {/* Search Bar Input */}
                <div className="relative w-full lg:w-96">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <Search size={16} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por título o investigador..."
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-uncp focus:border-uncp shadow-sm"
                  />
                </div>

              </div>

              {/* Projects Grid */}
              {filteredProjects.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-12 text-center text-gray-500 max-w-lg mx-auto">
                  <Filter size={40} className="mx-auto mb-4 text-gray-300" />
                  <h4 className="font-black text-slate-800 dark:text-white text-sm uppercase mb-1">Sin Resultados</h4>
                  <p className="text-xs">No se encontraron proyectos para los filtros seleccionados. Intente ajustar el término de búsqueda.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map((proj, idx) => (
                    <div 
                      key={idx}
                      className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-3">
                        {/* Project Header badge */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-0.5 rounded-md">
                            Proyección Social {proj.year}
                          </span>
                          <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500">
                            ID: DECP-{proj.year}-{(idx+1).toString().padStart(2, '0')}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 group-hover:text-uncp transition-colors leading-snug text-justify">
                          {proj.titulo}
                        </h4>
                      </div>

                      {/* Investigators list block */}
                      <div className="bg-slate-50 dark:bg-slate-900/40 border border-gray-100 dark:border-slate-800/80 rounded-2xl p-4 space-y-2">
                        <div className="flex items-center gap-1.5">
                          <Users size={12} className="text-uncp" />
                          <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                            Investigadores / Responsables:
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 pl-4 border-l-2 border-uncp/30">
                          {proj.investigadores.map((inv, iIdx) => (
                            <span 
                              key={iIdx}
                              className="text-[11px] font-bold text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                              {inv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Documento Oficial PDF Embebido */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Reglamento de Proyección Social & Extensión (PDF)
                  </h3>
                </div>
                
                <button 
                  onClick={() => setShowPdf(!showPdf)}
                  className="px-4 py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <Eye size={14} />
                  <span>{showPdf ? "Ocultar Visor" : "Mostrar Visor"}</span>
                </button>
              </div>

              {showPdf && (
                <div className="bg-slate-900 rounded-[32px] overflow-hidden shadow-lg border border-slate-800 animate-slideDown">
                  
                  {/* Top Bar of Simulated PDF Viewer */}
                  <div className="bg-slate-950 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#ef4444]/10 text-[#ef4444] rounded-lg">
                        <FileText size={18} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs md:text-sm font-black text-white m-0 tracking-tight leading-none">
                          {data.pdfTitulo}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                          Normativa de Extensión Universitaria (PDF)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <a 
                        href={data.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                      >
                        <ExternalLink size={12} />
                        Ver completo
                      </a>

                      <a 
                        href={data.pdfUrl} 
                        download
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                      >
                        <Download size={12} />
                        Descargar
                      </a>
                    </div>
                  </div>

                  {/* PDF embed or simulated iframe fallback */}
                  <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between animate-fadeIn">
                    
                    {/* Embedded Iframe */}
                    <iframe 
                      src={`${data.pdfUrl}#toolbar=1&navpanes=1`} 
                      title={data.pdfTitulo}
                      className="w-full h-full border-0 absolute inset-0 z-10"
                    />

                    {/* Fallback layout underneath */}
                    <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                      <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        <Users size={48} className="animate-pulse text-emerald-400" />
                      </div>
                      <div className="space-y-2 max-w-lg">
                        <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                          Previsualización del Reglamento de Proyección Social
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Si su navegador no soporta la visualización directa de archivos PDF dentro de la página, puede descargarlo u obtenerlo en una pestaña independiente usando los siguientes botones oficiales de descarga:
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 justify-center">
                        <a 
                          href={data.pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all border border-slate-700"
                        >
                          <ExternalLink size={14} />
                          Nueva Pestaña
                        </a>
                        <a 
                          href={data.pdfUrl} 
                          download
                          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-md"
                        >
                          <Download size={14} />
                          Descargar PDF
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* PDF info bar footer */}
                  <div className="bg-slate-950 px-6 py-3 border-t border-slate-850 flex items-center justify-between text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                    <span>Facultad de Ciencias Forestales y del Ambiente - UNCP</span>
                    <span>Código Normativo: REG-DECPSTT-01</span>
                  </div>

                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </InternalPageLayout>
  );
};

export default ProyeccionSocial;

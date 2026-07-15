import React, { useState, useEffect } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { Award, UserCheck, Search, Loader2, AlertCircle, Shield, GraduationCap, User } from 'lucide-react';

interface DocenteRenacyt {
  id: number;
  nombres: string;
  codigo: string;
  grupo: string;
  foto: string;
}

const DocentesRenacyt: React.FC = () => {
  const content = PAGE_CONTENT['/publicaciones/docentes-renacyt'];
  const [docentes, setDocentes] = useState<DocenteRenacyt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const response = await fetch('/datajson/docentes-renacyt.json');
        if (!response.ok) {
          throw new Error('Error al cargar la lista de docentes RENACYT');
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

  const filteredDocentes = docentes.filter(docente =>
    docente.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
    docente.codigo.toLowerCase().includes(searchTerm.toLowerCase())
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

        {/* Search Bar & Title Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gray-50 dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800">
          <div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <GraduationCap className="text-uncp" /> Padron de Investigadores RENACYT
            </h3>
            <p className="text-sm text-gray-500">Busca a nuestros docentes calificados en el registro nacional de CONCYTEC</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Buscar por docente o código..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-uncp focus:border-transparent outline-none transition-all shadow-sm dark:text-white font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Dynamic Directory Table */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="text-uncp animate-spin" size={48} />
            <p className="text-gray-500 font-bold animate-pulse">Cargando directorio de docentes...</p>
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
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-700 shadow-xl bg-white dark:bg-slate-900">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-uncp text-white">
                    <th className="p-4 text-xs font-black uppercase tracking-wider w-36 text-center border-r border-uncp/20">FOTO</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider border-r border-uncp/20">Nombres</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider w-1/4 border-r border-uncp/20">CODIGO RENACYT</th>
                    <th className="p-4 text-xs font-black uppercase tracking-wider w-24 text-center">GRUPO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                  {filteredDocentes.map((docente) => (
                    <tr
                      key={docente.id}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
                    >
                      {/* Photo Column */}
                      <td className="p-4 text-center border-r border-gray-100 dark:border-slate-800 flex justify-center items-center">
                        <div className="relative w-20 h-24 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 bg-gray-50 flex items-center justify-center shadow-md">
                          {docente.foto ? (
                            <img 
                              src={docente.foto} 
                              alt={docente.nombres}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <User size={32} className="text-gray-300" />
                          )}
                        </div>
                      </td>

                      {/* Nombres Column */}
                      <td className="p-4 font-bold text-slate-800 dark:text-slate-200 text-sm border-r border-gray-100 dark:border-slate-800">
                        <span className="uppercase">{docente.nombres}</span>
                      </td>

                      {/* Codigo Renacyt Column */}
                      <td className="p-4 text-slate-600 dark:text-gray-300 text-sm font-semibold border-r border-gray-100 dark:border-slate-800">
                        {docente.codigo === "." ? (
                          <span className="text-gray-400 dark:text-gray-600 italic">No disponible</span>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-lg text-xs font-black">
                            <Shield size={12} /> {docente.codigo}
                          </div>
                        )}
                      </td>

                      {/* Grupo Column */}
                      <td className="p-4 text-center text-sm font-bold text-gray-500 dark:text-gray-400">
                        {docente.grupo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredDocentes.length === 0 && (
                <div className="p-16 text-center">
                  <div className="inline-flex p-4 bg-gray-50 dark:bg-slate-800 rounded-full text-gray-400 dark:text-gray-600 mb-4">
                    <Search size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">No se encontraron docentes</h4>
                  <p className="text-sm text-gray-500">Prueba con otros términos de búsqueda.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Descriptive Categories Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-slate-900 p-10 rounded-[40px] border border-gray-100 dark:border-slate-700">
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-8 uppercase tracking-widest flex items-center gap-3">
              <Award className="text-uncp" /> Categorías RENACYT
            </h3>
            <div className="grid gap-4">
              {content.features?.[0].items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-50 dark:border-slate-700 shadow-sm hover:border-uncp transition-colors group">
                  <div className="bg-uncp/10 text-uncp p-2 rounded-lg group-hover:bg-uncp group-hover:text-white transition-colors">
                    <UserCheck size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-10 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-xl flex flex-col justify-center items-center text-center">
             <div className="bg-uncp/10 p-6 rounded-full mb-6">
               <Search className="text-uncp" size={48} />
             </div>
             <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter mb-4">Directorio de Investigadores</h3>
             <p className="text-gray-600 dark:text-gray-400 font-medium mb-8">Consulte el perfil completo de nuestros investigadores en la plataforma CTI Vitae del CONCYTEC.</p>
             <a 
               href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-uncp text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-uncp-dark transition-all shadow-xl flex items-center gap-3"
             >
               Ver Directorio RENACYT
             </a>
          </div>
        </div>
      </div>
    </InternalPageLayout>
  );
};

export default DocentesRenacyt;

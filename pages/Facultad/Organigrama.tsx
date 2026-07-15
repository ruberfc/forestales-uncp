import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  FileDown, 
  Users, 
  ChevronRight, 
  Info, 
  GitBranch, 
  Network, 
  Award, 
  ShieldAlert, 
  Layers, 
  Sparkles, 
  BookOpen, 
  Workflow,
  X
} from 'lucide-react';

interface OrganigramaNode {
  id: string;
  name: string;
  shortName?: string;
  category: 'gobierno' | 'direccion' | 'apoyo_docente' | 'apoyo_administrativo' | 'comision_calidad' | 'linea';
  description: string;
  responsibilities: string[];
  members?: string[];
  connections?: string[];
}

const ORGANIGRAMA_DATA: Record<string, OrganigramaNode> = {
  rectorado: {
    id: 'rectorado',
    name: 'Rectorado UNCP',
    category: 'gobierno',
    description: 'Órgano de máxima dirección universitaria de la Universidad Nacional del Centro del Perú, encargado de planificar y dirigir las actividades académicas y administrativas.',
    responsibilities: [
      'Aprobar el plan de desarrollo de la universidad.',
      'Representar a la universidad de manera legal e institucional.',
      'Coordinar con los decanatos de las distintas facultades.'
    ]
  },
  junta: {
    id: 'junta',
    name: 'Junta de Facultad',
    category: 'gobierno',
    description: 'Órgano consultivo y de concertación de la facultad, donde se ventilan asuntos gremiales, académicos y estudiantiles de interés general.',
    responsibilities: [
      'Proponer iniciativas de desarrollo institucional.',
      'Servir de nexo entre la comunidad de docentes, graduados y estudiantes con el decanato.',
      'Promover debates sobre la reforma académica e institucional.'
    ]
  },
  consejo: {
    id: 'consejo',
    name: 'Consejo de Facultad',
    category: 'gobierno',
    description: 'Máximo órgano de gobierno de la Facultad de Ciencias Forestales y del Ambiente, de carácter normativo, de planificación y fiscalización, presidido por el Decano e integrado por representantes docentes y estudiantiles.',
    responsibilities: [
      'Aprobar los planes de estudio y de investigación de la facultad.',
      'Proponer la contratación, nombramiento y promoción de docentes.',
      'Aprobar los presupuestos anuales de la facultad.'
    ]
  },
  decano: {
    id: 'decano',
    name: 'Decano (Decanato)',
    category: 'direccion',
    description: 'Máxima autoridad ejecutiva y representante legal de la Facultad. Dirige la gestión académica, administrativa, financiera e institucional de la Facultad.',
    responsibilities: [
      'Presidir el Consejo de Facultad y ejecutar sus acuerdos.',
      'Dirigir la actividad académica y la gestión administrativa de la Facultad.',
      'Presentar el plan anual de funcionamiento y el informe de gestión.'
    ],
    members: ['Dr. Julio César Álvarez Orellana']
  },
  sec_docente: {
    id: 'sec_docente',
    name: 'Secretaría Docente',
    category: 'apoyo_docente',
    description: 'Oficina de apoyo académico responsable de certificar actas, tramitar expedientes de grados y títulos, y coordinar los procesos de matrícula.',
    responsibilities: [
      'Llevar el registro de actas de Consejo de Facultad.',
      'Gestionar y archivar los expedientes académicos de pregrado y posgrado.',
      'Coordinar el calendario académico y de evaluaciones.'
    ]
  },
  sec_administrativa: {
    id: 'sec_administrativa',
    name: 'Secretaría Administrativa',
    category: 'apoyo_administrativo',
    description: 'Unidad de soporte administrativo y logístico de la facultad, encargada de la distribución del personal administrativo, recursos materiales y presupuesto.',
    responsibilities: [
      'Coordinar el abastecimiento de insumos y materiales para las aulas y laboratorios.',
      'Supervisar al personal administrativo y de mantenimiento.',
      'Controlar la ejecución del presupuesto interno asignado.'
    ]
  },
  rel_publicas: {
    id: 'rel_publicas',
    name: 'Comisión de Relaciones Públicas',
    category: 'apoyo_administrativo',
    description: 'Comisión encargada del posicionamiento de la imagen institucional de la Facultad, difusión de logros científicos, eventos académicos e información oficial.',
    responsibilities: [
      'Gestionar las redes sociales oficiales y el portal web en coordinación con la UNCP.',
      'Redactar notas de prensa y comunicados oficiales.',
      'Organizar el protocolo y ceremonias académicas de la facultad.'
    ]
  },
  calidad: {
    id: 'calidad',
    name: 'Coordinación de la Gestión de la Calidad - FCFA',
    category: 'comision_calidad',
    description: 'Unidad técnica de asesoría y planeación encargada de liderar la acreditación nacional (SINEACE) e internacional de la carrera profesional, auditorías de calidad y mejora continua.',
    responsibilities: [
      'Monitorear el cumplimiento de los estándares de acreditación.',
      'Elaborar planes de mejora continua para las áreas académicas y de apoyo.',
      'Promover la cultura de calidad en docentes, estudiantes y egresados.'
    ],
    members: ['Dr. Cirilo Huamán Huamán']
  },
  planificacion: {
    id: 'planificacion',
    name: 'Comisión Permanente de Planificación, Economía y Evaluación',
    category: 'comision_calidad',
    description: 'Comisión encargada de planificar los objetivos estratégicos de la facultad, evaluar el cumplimiento de metas financieras y formular el Presupuesto Operativo Institucional (POI).',
    responsibilities: [
      'Formular el Plan Operativo Institucional (POI) de la Facultad.',
      'Evaluar periódicamente la ejecución presupuestaria.',
      'Elaborar informes de costos académicos y tasas educativas.'
    ],
    members: ['Ing. Lilly Nelly Gozar Córdova']
  },
  sistemas_infra: {
    id: 'sistemas_infra',
    name: 'Comisión Permanente de Infraestructura, Sistemas y Tecnología de Información',
    category: 'comision_calidad',
    description: 'Comisión encargada de garantizar el adecuado estado y modernización de las aulas, laboratorios, centros de cómputo y redes informáticas de la facultad.',
    responsibilities: [
      'Gestionar el soporte de sistemas, servidores y redes wi-fi de la facultad.',
      'Supervisar el mantenimiento preventivo y correctivo de la infraestructura física.',
      'Planificar la adquisición de nuevo equipamiento tecnológico y licencias de software.'
    ],
    members: ['M.Sc. Wilfredo Ramírez Salas']
  },
  cooperacion_tecnica: {
    id: 'cooperacion_tecnica',
    name: 'Coordinación de Cooperación Técnica',
    category: 'comision_calidad',
    description: 'Oficina encargada de gestionar, formular y promover convenios interinstitucionales nacionales e internacionales con empresas, ONGs e instituciones forestales.',
    responsibilities: [
      'Promover convenios de cooperación académica y de investigación.',
      'Gestionar oportunidades de becas y pasantías para docentes y estudiantes.',
      'Monitorear la vigencia y ejecución de los convenios establecidos.'
    ]
  },
  escuela: {
    id: 'escuela',
    name: 'Dirección de Escuela Profesional',
    category: 'linea',
    description: 'Órgano de línea encargado de planificar, coordinar y ejecutar la formación profesional universitaria de los alumnos de pregrado en Ingeniería Forestal y del Ambiente.',
    responsibilities: [
      'Actualizar y evaluar periódicamente el Currículo de Estudios (Diseño Curricular).',
      'Coordinar el desarrollo del año académico de pregrado.',
      'Dirigir los procesos de graduación, titulación y prácticas preprofesionales.'
    ],
    members: ['Dr. Juan José Bullon Rosas']
  },
  departamento: {
    id: 'departamento',
    name: 'Dirección de Departamento Académico',
    category: 'linea',
    description: 'Órgano de línea encargado de agrupar a los docentes universitarios por áreas académicas, asignar sus cargas horarias lectivas y no lectivas, y promover su capacitación constante.',
    responsibilities: [
      'Asignar carga académica (clases, tutoría, investigación) a los docentes ordinarios y contratados.',
      'Evaluar el desempeño docente y propiciar programas de actualización pedagógica.',
      'Apoyar el normal funcionamiento del dictado de asignaturas de pregrado.'
    ],
    members: ['Dr. Edwin Zorrilla Delgado']
  },
  investigacion: {
    id: 'investigacion',
    name: 'Dirección de Instituto Especializado de Investigación',
    category: 'linea',
    description: 'Órgano especializado encargado de formular, ejecutar y evaluar las políticas de investigación científica y desarrollo tecnológico de la facultad.',
    responsibilities: [
      'Evaluar y aprobar los proyectos de investigación básica y aplicada de la facultad.',
      'Coordinar el funcionamiento de los laboratorios científicos y centros de experimentación forestal.',
      'Promover la publicación de artículos científicos y patentes.'
    ],
    members: ['Dr. Mauro Rodríguez Cerrón']
  },
  posgrado: {
    id: 'posgrado',
    name: 'Dirección de la Unidad de Posgrado (UPG)',
    category: 'linea',
    description: 'Órgano de línea encargado de organizar, coordinar y ejecutar los estudios de Maestría y Doctorado orientados a la especialización forestal y ambiental avanzada.',
    responsibilities: [
      'Organizar los programas de posgrado (Maestrías, Segundas Especialidades, Doctorados).',
      'Asegurar el desarrollo científico y la tutoría de tesis en el posgrado.',
      'Coordinar los exámenes de grado del nivel de posgrado.'
    ]
  },
  extension_social: {
    id: 'extension_social',
    name: 'Coordinación de Extensión Cultural y Proyección Social',
    category: 'linea',
    description: 'Área encargada de llevar la ciencia forestal a las comunidades campesinas y andinas del centro del país a través de la transferencia de tecnología y responsabilidad social.',
    responsibilities: [
      'Planificar actividades de proyección social y voluntariado forestal.',
      'Realizar transferencia tecnológica forestal para optimizar el manejo silvicultural comunal.',
      'Promover eventos científicos, artísticos y culturales abiertos a la población.'
    ],
    members: ['M.Sc. Juana Paucar Carrión']
  }
};

const Organigrama: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/organigrama'];
  const [selectedNode, setSelectedNode] = useState<OrganigramaNode>(ORGANIGRAMA_DATA.decano);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalY, setModalY] = useState(0);

  const handleNodeClick = (node: OrganigramaNode, event?: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedNode(node);
    
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const elementCenterY = rect.top + scrollTop + rect.height / 2;
      
      const parentContainer = document.getElementById('organigrama-container');
      if (parentContainer) {
        const parentRect = parentContainer.getBoundingClientRect();
        const parentTop = parentRect.top + scrollTop;
        setModalY(elementCenterY - parentTop);
      } else {
        setModalY(scrollTop + window.innerHeight / 2 - 250);
      }
    } else {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setModalY(scrollTop + window.innerHeight / 2 - 250);
    }
    
    setIsModalOpen(true);
  };

  return (
    <InternalPageLayout title={content.title} subtitle={content.subtitle} image={content.image}>
      <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-8 italic border-l-8 border-uncp pl-6 py-2">
        {content.intro}
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify">{p}</p>
          ))}
        </div>

        <div className="space-y-8 animate-fadeIn">
            {/* Legend / Info bar & Download */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#f0f9ff] dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40 p-4 rounded-2xl text-sky-800 dark:text-sky-300 text-xs font-bold w-full">
              <div className="flex items-center gap-3">
                <Info size={18} className="shrink-0 text-sky-500" />
                <span>
                  <strong>Instrucciones:</strong> Haz clic en cualquiera de las cajas del organigrama de abajo para ver detalladamente su nombre y descripción de funciones.
                </span>
              </div>
              <a
                href="https://forestales.uncp.edu.pe/pdf/organigrama.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-uncp hover:bg-uncp-dark text-white font-black rounded-xl shadow-sm transition-all hover:scale-[1.02] uppercase text-[10px] tracking-widest shrink-0 self-stretch sm:self-auto text-center justify-center"
              >
                Descargar PDF <FileDown size={14} />
              </a>
            </div>

            <div className="relative animate-fadeIn" id="organigrama-container">
              {/* Interactive Structure diagram */}
              <div className="space-y-8 bg-slate-50 dark:bg-slate-950/40 p-6 md:p-8 rounded-[40px] border border-gray-150 dark:border-slate-800/80 overflow-x-auto min-w-full">
                
                {/* Title inside diagram */}
                <div className="text-center mb-10 border-b border-dashed border-gray-200 dark:border-slate-800 pb-6 shrink-0">
                  <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest leading-none mb-2">Estructura Organizativa de la</h4>
                  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                    FACULTAD DE CIENCIAS FORESTALES Y DEL AMBIENTE - V. 2
                  </h3>
                </div>

                {/* Level 1: Rectorado */}
                <div className="flex justify-center">
                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.rectorado, e)}
                    className={`px-8 py-3 rounded-xl text-center border-2 transition-all font-black text-xs uppercase tracking-widest shadow-md ${
                      selectedNode.id === 'rectorado'
                        ? 'bg-emerald-600 border-emerald-400 text-white ring-4 ring-emerald-500/20 scale-105'
                        : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 hover:bg-emerald-100'
                    }`}
                  >
                    Rectorado (UNCP)
                  </button>
                </div>

                {/* Vertical Connector Line */}
                <div className="w-1 h-8 bg-gray-300 dark:bg-slate-700 mx-auto"></div>

                {/* Level 2: Junta y Consejo */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16">
                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.junta, e)}
                    className={`px-6 py-3 rounded-xl border transition-all font-black text-xs uppercase tracking-wider shadow-sm ${
                      selectedNode.id === 'junta'
                        ? 'bg-slate-800 dark:bg-slate-100 border-slate-700 text-white dark:text-slate-900 ring-4 ring-slate-500/20 scale-105'
                        : 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Junta de Facultad
                  </button>

                  <div className="hidden md:block w-8 h-1 bg-gray-300 dark:bg-slate-700 shrink-0"></div>

                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.consejo, e)}
                    className={`px-6 py-3 rounded-xl border-2 transition-all font-black text-xs uppercase tracking-wider shadow-md ${
                      selectedNode.id === 'consejo'
                        ? 'bg-emerald-600 border-emerald-400 text-white ring-4 ring-emerald-500/20 scale-105'
                        : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 hover:bg-emerald-100'
                    }`}
                  >
                    Consejo de Facultad
                  </button>
                </div>

                {/* Vertical Connector Line */}
                <div className="w-1 h-8 bg-gray-300 dark:bg-slate-700 mx-auto"></div>

                {/* Level 3: Decano */}
                <div className="flex justify-center">
                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.decano, e)}
                    className={`px-10 py-4 rounded-xl text-center border-2 transition-all font-black text-sm uppercase tracking-widest shadow-lg ${
                      selectedNode.id === 'decano'
                        ? 'bg-emerald-700 border-emerald-400 text-white ring-4 ring-emerald-600/30 scale-105'
                        : 'bg-emerald-100 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-300 hover:bg-emerald-200'
                    }`}
                  >
                    Decano (Decanato)
                  </button>
                </div>

                {/* Vertical Connector Line to Branch Out */}
                <div className="w-1 h-8 bg-gray-300 dark:bg-slate-700 mx-auto"></div>

                {/* Central Horizontal Line for support structures */}
                <div className="relative max-w-2xl mx-auto border-t-2 border-gray-300 dark:bg-slate-700">
                  <div className="absolute top-0 left-0 w-1 h-4 bg-gray-300 dark:bg-slate-700"></div>
                  <div className="absolute top-0 right-0 w-1 h-4 bg-gray-300 dark:bg-slate-700"></div>
                  <div className="absolute top-0 left-1/2 w-1 h-4 bg-gray-300 dark:bg-slate-700 -translate-x-1/2"></div>
                </div>

                {/* Level 4: Oficinas de Apoyo (Left & Right Split) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-4">
                  {/* Left Side: Apoyo Docente & Administrativo */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center">Apoyo y Secretaría</p>
                    <button
                      onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.sec_docente, e)}
                      className={`w-full p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-between ${
                        selectedNode.id === 'sec_docente'
                          ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 border-slate-700 scale-[1.02]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:bg-gray-50'
                      }`}
                    >
                      <span>Secretaría Docente</span>
                      <ChevronRight size={14} className="text-uncp" />
                    </button>
                    <button
                      onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.sec_administrativa, e)}
                      className={`w-full p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-between ${
                        selectedNode.id === 'sec_administrativa'
                          ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 border-slate-700 scale-[1.02]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:bg-gray-50'
                      }`}
                    >
                      <span>Secretaría Administrativa</span>
                      <ChevronRight size={14} className="text-uncp" />
                    </button>
                    <button
                      onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.rel_publicas, e)}
                      className={`w-full p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-between ${
                        selectedNode.id === 'rel_publicas'
                          ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 border-slate-700 scale-[1.02]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:bg-gray-50'
                      }`}
                    >
                      <span>Comisión de Relaciones Públicas</span>
                      <ChevronRight size={14} className="text-uncp" />
                    </button>
                  </div>

                  {/* Right Side: Comisiones de Calidad y Planeación */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center">Gestión, Calidad y Sistemas</p>
                    <button
                      onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.calidad, e)}
                      className={`w-full p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-between ${
                        selectedNode.id === 'calidad'
                          ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 border-slate-700 scale-[1.02]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate">Coordinación de Calidad (FCFA)</span>
                      <ChevronRight size={14} className="text-uncp" />
                    </button>
                    <button
                      onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.planificacion, e)}
                      className={`w-full p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-between ${
                        selectedNode.id === 'planificacion'
                          ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 border-slate-700 scale-[1.02]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate">Comisión de Planificación</span>
                      <ChevronRight size={14} className="text-uncp" />
                    </button>
                    <button
                      onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.sistemas_infra, e)}
                      className={`w-full p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-between ${
                        selectedNode.id === 'sistemas_infra'
                          ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 border-slate-700 scale-[1.02]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate">Comisión de Infraestructura y Redes</span>
                      <ChevronRight size={14} className="text-uncp" />
                    </button>
                    <button
                      onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.cooperacion_tecnica, e)}
                      className={`w-full p-3 rounded-lg border text-left transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-between ${
                        selectedNode.id === 'cooperacion_tecnica'
                          ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 border-slate-700 scale-[1.02]'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-gray-300 border-gray-200 dark:border-slate-800 hover:bg-gray-50'
                      }`}
                    >
                      <span>Cooperación Técnica</span>
                      <ChevronRight size={14} className="text-uncp" />
                    </button>
                  </div>
                </div>

                {/* Vertical Divider Space */}
                <div className="w-1 h-12 bg-gray-300 dark:bg-slate-700 mx-auto mt-6"></div>

                {/* Level 5: Direcciones de Línea (Main Bottom Pillars) */}
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center mb-4">Órganos de Línea (Direcciones Especializadas)</p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {/* Column 1: Escuela */}
                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.escuela, e)}
                    className={`p-4 rounded-xl text-center border-2 transition-all flex flex-col justify-between items-center min-h-[140px] shadow-md group ${
                      selectedNode.id === 'escuela'
                        ? 'bg-[#0091c7] border-sky-400 text-white ring-4 ring-sky-500/20 scale-[1.03]'
                        : 'bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/60 text-sky-900 dark:text-sky-400 hover:bg-sky-100'
                    }`}
                  >
                    <BookOpen size={24} className="mb-2 shrink-0 group-hover:animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-tight leading-tight">Dirección Escuela Profesional</span>
                    <span className="text-[9px] font-bold text-sky-600 dark:text-sky-300 uppercase mt-2 tracking-widest">Pregrado</span>
                  </button>

                  {/* Column 2: Departamento */}
                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.departamento, e)}
                    className={`p-4 rounded-xl text-center border-2 transition-all flex flex-col justify-between items-center min-h-[140px] shadow-md group ${
                      selectedNode.id === 'departamento'
                        ? 'bg-[#0091c7] border-sky-400 text-white ring-4 ring-sky-500/20 scale-[1.03]'
                        : 'bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/60 text-sky-900 dark:text-sky-400 hover:bg-sky-100'
                    }`}
                  >
                    <Workflow size={24} className="mb-2 shrink-0 group-hover:animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-tight leading-tight">Departamento Académico</span>
                    <span className="text-[9px] font-bold text-sky-600 dark:text-sky-300 uppercase mt-2 tracking-widest">Docentes</span>
                  </button>

                  {/* Column 3: Investigacion */}
                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.investigacion, e)}
                    className={`p-4 rounded-xl text-center border-2 transition-all flex flex-col justify-between items-center min-h-[140px] shadow-md group ${
                      selectedNode.id === 'investigacion'
                        ? 'bg-[#0091c7] border-sky-400 text-white ring-4 ring-sky-500/20 scale-[1.03]'
                        : 'bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/60 text-sky-900 dark:text-sky-400 hover:bg-sky-100'
                    }`}
                  >
                    <Layers size={24} className="mb-2 shrink-0 group-hover:animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-tight leading-tight">Instituto de Investigación</span>
                    <span className="text-[9px] font-bold text-sky-600 dark:text-sky-300 uppercase mt-2 tracking-widest">Científica</span>
                  </button>

                  {/* Column 4: Posgrado */}
                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.posgrado, e)}
                    className={`p-4 rounded-xl text-center border-2 transition-all flex flex-col justify-between items-center min-h-[140px] shadow-md group ${
                      selectedNode.id === 'posgrado'
                        ? 'bg-[#0091c7] border-sky-400 text-white ring-4 ring-sky-500/20 scale-[1.03]'
                        : 'bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/60 text-sky-900 dark:text-sky-400 hover:bg-sky-100'
                    }`}
                  >
                    <GitBranch size={24} className="mb-2 shrink-0 group-hover:animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-tight leading-tight">Unidad de Posgrado</span>
                    <span className="text-[9px] font-bold text-sky-600 dark:text-sky-300 uppercase mt-2 tracking-widest">Maestrías/Doc</span>
                  </button>

                  {/* Column 5: Extensión */}
                  <button
                    onClick={(e) => handleNodeClick(ORGANIGRAMA_DATA.extension_social, e)}
                    className={`p-4 rounded-xl text-center border-2 transition-all flex flex-col justify-between items-center min-h-[140px] shadow-md group ${
                      selectedNode.id === 'extension_social'
                        ? 'bg-[#0091c7] border-sky-400 text-white ring-4 ring-sky-500/20 scale-[1.03]'
                        : 'bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/60 text-sky-900 dark:text-sky-400 hover:bg-sky-100'
                    }`}
                  >
                    <Sparkles size={24} className="mb-2 shrink-0 group-hover:animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-tight leading-tight">Proyección Social y Extensión</span>
                    <span className="text-[9px] font-bold text-sky-600 dark:text-sky-300 uppercase mt-2 tracking-widest">Comunidad</span>
                  </button>
                </div>
              </div>

              {/* Modal de Detalle / Tooltip overlay */}
              <AnimatePresence>
                {isModalOpen && (
                  <>
                    {/* Backdrop covering the whole interactive organigrama container */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsModalOpen(false)}
                      className="absolute inset-0 bg-slate-950/35 backdrop-blur-xs z-40 rounded-[40px] cursor-pointer"
                    />
                    
                    {/* Tooltip Card Container */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: 15 }}
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      style={{ top: `${modalY}px` }}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-4 md:p-5 shadow-2xl max-w-xs md:max-w-sm w-[calc(100%-2rem)] z-50 overflow-hidden animate-fadeIn"
                    >
                      {/* Top Accent Bar */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-uncp" />

                      {/* Close Button */}
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 p-1.5 rounded-full"
                      >
                        <X size={16} />
                      </button>

                      <div className="space-y-3.5">
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-uncp/10 text-uncp text-[9px] font-black uppercase tracking-wider mb-1.5">
                            <Info size={9} /> Información de Unidad
                          </span>
                          <h3 className="text-sm md:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight pr-6 text-left leading-tight">
                            {selectedNode.name}
                          </h3>
                        </div>

                        <div className="border-t border-gray-100 dark:border-slate-800/80 pt-2.5">
                          <h4 className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1 text-left">Descripción de Funciones</h4>
                          <p className="text-[11px] md:text-xs text-gray-600 dark:text-gray-400 leading-relaxed text-left text-justify">
                            {selectedNode.description}
                          </p>
                        </div>

                        <div className="pt-1.5 flex justify-end">
                          <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-3 py-1.5 bg-uncp hover:bg-uncp-dark text-white font-black rounded-md text-[9px] uppercase tracking-widest shadow-sm transition-all active:scale-95"
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
    </InternalPageLayout>
  );
};

export default Organigrama;

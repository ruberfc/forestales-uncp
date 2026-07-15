import { 
  Facebook, 
  Linkedin,
  GraduationCap, 
  TreePine, 
  Users, 
  Microscope,
  Globe,
  MessageCircle
} from 'lucide-react';
import { NavMenuLink, SocialLink, NewsItem, StatItem, ServiceItem, FooterSection, PageContent } from './types';

export const ORGANIZATION_NAME = "Facultad de Ciencias Forestales y del Ambiente";
export const UNIVERSITY_NAME = "Universidad Nacional del Centro del Perú";

export const NAV_LINKS: NavMenuLink[] = [
  { 
    name: "FACULTAD", 
    path: "/facultad",
    sublinks: [
      { name: "Historia", path: "/facultad/historia" },
      { 
        name: "Misión, Visión, Política y Propósito", 
        path: "/facultad/mision-vision-politica",
        sublinks: [
          { name: "Misión, Visión y Política de Calidad", path: "/facultad/mision-vision-politica/calidad" },
          { name: "Política Ambiental", path: "/facultad/mision-vision-politica/ambiental" },
          { name: "Propósito", path: "/facultad/mision-vision-politica/proposito" }
        ]
      },
      { 
        name: "Consejo de Facultad", 
        path: "/facultad/consejo",
        sublinks: [
          { name: "Miembros", path: "/facultad/consejo/miembros" },
          { name: "Actas", path: "/facultad/consejo/actas" },
          { name: "Resoluciones", path: "/facultad/consejo/resoluciones" }
        ]
      },
      { name: "Organigrama", path: "/facultad/organigrama" },
      { name: "Autoridades", path: "/facultad/autoridades" },
      { name: "Plana Docente", path: "/facultad/plana-docente" },
      { name: "Resoluciones de Decanato", path: "/facultad/resoluciones-decanato" }
    ]
  },
  { 
    name: "PREGRADO", 
    path: "/pregrado",
    sublinks: [
      { 
        name: "Perfil de estudiante", 
        path: "/pregrado/perfil-estudiante",
        sublinks: [
          { name: "Perfil de Ingreso", path: "/pregrado/perfil-estudiante/ingreso" },
          { name: "Perfil de Egreso", path: "/pregrado/perfil-estudiante/egreso" }
        ]
      },
      { name: "Malla Curricular", path: "/pregrado/malla-curricular" },
      { name: "Plan de Estudios", path: "/pregrado/plan-estudios" },
      { name: "Sumillas", path: "/pregrado/sumillas" },
      { name: "Calendario Académico", path: "/pregrado/calendario-academico" }
    ]
  },
  { 
    name: "DEPENDENCIAS", 
    path: "/dependencias",
    sublinks: [
      { name: "Proyección Social", path: "/dependencias/proyeccion-social" },
      { 
        name: "Instituto Especializado de Investigación", 
        path: "/dependencias/investigacion",
        sublinks: [
          { name: "Proyectos de Investigación", path: "/dependencias/investigacion/proyectos" },
          { name: "Flujograma Para Plan de Tesis", path: "/dependencias/investigacion/flujograma" },
          { name: "Guías Para Plan de Tesis", path: "/dependencias/investigacion/guias" }
        ]
      },
      { 
        name: "Laboratorios", 
        path: "/dependencias/laboratorios",
        sublinks: [
          { name: "Laboratorio de Biodiversidad y Manejo Forestal", path: "/dependencias/laboratorios/biodiversidad" },
          { name: "Laboratorio de Tecnología de la Madera y Dendrotecnología", path: "/dependencias/laboratorios/madera" },
          { name: "Laboratorio de Medio Ambiente", path: "/dependencias/laboratorios/medio-ambiente" },
          { name: "Herbario (HCEN FO)", path: "/dependencias/laboratorios/herbario" }
        ]
      },
      { name: "Grados y Títulos", path: "/dependencias/grados-titulos" },
      { 
        name: "Planificación", 
        path: "/dependencias/planificacion",
        sublinks: [
          { name: "POI", path: "/dependencias/planificacion/poi" },
          { name: "FODA", path: "/dependencias/planificacion/foda" },
          { name: "PEI", path: "/dependencias/planificacion/pei" }
        ]
      },
      { 
        name: "Estaciones Experimentales y Centros de Producción", 
        path: "/dependencias/estaciones",
        sublinks: [
          { name: "Unidad de Producción Casa Blanca", path: "/dependencias/estaciones/casa-blanca" },
          { name: "Estación Experimental Oxapampa", path: "/dependencias/estaciones/oxapampa" },
          { name: "Estación Experimental Agropecuario El Mantaro", path: "/dependencias/estaciones/el-mantaro" },
          { name: "Concesión de Conservación Incatoshi Kametza", path: "/dependencias/estaciones/incatoshi" }
        ]
      }
    ]
  },
  { 
    name: "ACREDITACIÓN Y CALIDAD", 
    path: "/acreditacion",
    sublinks: [
      { name: "Acreditación", path: "/acreditacion/proceso" },
      { name: "Grupo de Interés", path: "/acreditacion/grupo-interes" },
      { 
        name: "Calidad", 
        path: "/acreditacion/calidad",
        sublinks: [
          { name: "Manual de Calidad", path: "/acreditacion/calidad/manual" },
          { name: "Riesgos y Oportunidades", path: "/acreditacion/calidad/riesgos-oportunidades" },
          { name: "Mapa de Procesos", path: "/acreditacion/calidad/mapa-procesos" }
        ]
      }
    ]
  },
  { 
    name: "POSGRADO", 
    path: "/posgrado",
    sublinks: [
      { name: "Presentación", path: "/posgrado/presentacion" },
      { 
        name: "Maestrías", 
        path: "/posgrado/maestrias",
        sublinks: [
          { name: "Maestría en Ecoturismo", path: "/posgrado/maestrias/ecoturismo" },
          { name: "Maestría en Gestión ambiental y Desarrollo Sostenible", path: "/posgrado/maestrias/gestion-ambiental" },
          { name: "Maestría en Gestión Sostenible de Cuencas Hidrográficas", path: "/posgrado/maestrias/cuencas-hidrograficas" }
        ]
      },
      { name: "Doctorado", path: "/posgrado/doctorado" },
      { name: "Diplomados", path: "/posgrado/diplomados" }
    ]
  },
  { 
    name: "PUBLICACIONES", 
    path: "/publicaciones",
    sublinks: [
      { name: "Artículos Científicos", path: "/publicaciones/articulos" },
      { name: "Libros de Investigación", path: "/publicaciones/libros" },
      { name: "Docentes RENACYT", path: "/publicaciones/docentes-renacyt" }
    ]
  },
  { 
    name: "BIBLIOTECA VIRTUAL", 
    path: "/biblioteca",
    sublinks: [
      { 
        name: "Repositorio de la FCFA", 
        path: "https://repositorio.uncp.edu.pe/communities/48a26deb-a8a3-41ee-be48-e0e2cce70a5d",
        target: "_blank"
      },
      { 
        name: "Biblioteca Virtual", 
        path: "https://uncp.edu.pe/biblioteca-virtual/",
        target: "_blank"
      },
      { name: "Centro de Información Forestal", path: "/biblioteca/centro-informacion" }
    ]
  },
  { 
    name: "LIBRO DE RECLAMACIONES", 
    path: "/reclamaciones",
    sublinks: [
      { 
        name: "Libro de reclamaciones UNCP", 
        path: "https://reclamos.servicios.gob.pe/?institution_id=252",
        target: "_blank"
      },
      { 
        name: "Buzón de sugerencias", 
        path: "https://forms.office.com/Pages/ResponsePage.aspx?id=r3zBVwDF_E-ZdvhfxsZtR64B_s1yHMxGsGj93ex4tBdUOTQyREI0OVg1RjVaOU1MWjZFNTJIVTZPUy4u",
        target: "_blank"
      }
    ]
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Facebook", url: "https://facebook.com/forestalesuncp", icon: Facebook },
  { platform: "WhatsApp", url: "https://wa.me/51999999999", icon: MessageCircle },
  { platform: "LinkedIn", url: "https://www.linkedin.com/school/uncp/", icon: Linkedin },
];

export const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop", 
    title: "LO MEJOR QUE LA NATURALEZA HA DADO AL HOMBRE ES LA BREVEDAD DE SU VIDA",
    subtitle: "Comprometidos con la conservación y el desarrollo sostenible de los ecosistemas forestales.",
    cta: "Explorar Facultad"
  },
  {
    image: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2070&auto=format&fit=crop",
    title: "EXCELENCIA ACADÉMICA EN CIENCIAS DEL AMBIENTE",
    subtitle: "Formamos ingenieros líderes con visión global y ética profesional.",
    cta: "Ver Programas"
  }
];

export const STATS: StatItem[] = [
  { label: "Estudiantes", value: "+850", icon: Users },
  { label: "Docentes Renacyt", value: "18", icon: Microscope },
  { label: "Años de Trayectoria", value: "62", icon: GraduationCap },
  { label: "Proyectos Activos", value: "24", icon: TreePine },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Ingeniería Forestal",
    description: "Programa acreditado enfocado en el manejo forestal sostenible y biotecnología aplicada.",
    icon: TreePine
  },
  {
    title: "Gestión Ambiental",
    description: "Investigación avanzada en servicios ecosistémicos y mitigación del cambio climático.",
    icon: Globe
  },
  {
    title: "Investigación",
    description: "Publicaciones en revistas indexadas y desarrollo tecnológico para la industria forestal.",
    icon: Microscope
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Culmina con éxito el Inventario Forestal en el IRD Selva",
    date: "20 Nov, 2024",
    category: "Investigación",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800",
    description: "Estudiantes del décimo ciclo concluyeron la evaluación biométrica en las parcelas permanentes de muestreo en Satipo."
  },
  {
    id: 2,
    title: "Convenio con SERFOR para monitoreo de fauna silvestre",
    date: "15 Nov, 2024",
    category: "Institucional",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
    description: "Alianza estratégica permitirá el uso de cámaras trampa para estudios poblacionales en bosques altoandinos."
  },
  {
    id: 3,
    title: "Publicación en Scopus sobre secuestro de carbono",
    date: "05 Nov, 2024",
    category: "Investigación",
    image: "https://images.unsplash.com/photo-1501166617713-a1b63cb282bf?auto=format&fit=crop&q=80&w=800",
    description: "El Dr. Eloy Guillermo Vivas lidera estudio sobre el potencial de las plantaciones de Pinus patula en Junín."
  }
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Sede Administrativa",
    content: [
      "Ciudad Universitaria - Pabellón C",
      "Av. Mariscal Castilla N° 3909",
      "Huancayo, Junín - Perú",
      "T: (064) 481060 Anexo 124"
    ]
  },
  {
    title: "Sistemas Académicos",
    links: [
      { name: "SGA - Sistema de Gestión Académica", url: "#" },
      { name: "Aula Virtual Moodle", url: "#" },
      { name: "Repositorio Institucional", url: "#" },
      { name: "Bolsa de Trabajo UNCP", url: "#" }
    ]
  },
  {
    title: "Transparencia Universitaria",
    links: [
      { name: "Documentos Normativos", url: "#" },
      { name: "Presupuesto y Ejecución", url: "#" },
      { name: "Directorio Docente", url: "#" },
      { name: "SINEACE Acreditación", url: "#" }
    ]
  }
];

export const PAGE_CONTENT: Record<string, PageContent> = {
  '/facultad/historia': {
    title: "Trayectoria Histórica",
    subtitle: "Pioneros en la educación forestal de la Sierra Central del Perú.",
    image: "https://images.unsplash.com/photo-1513689125086-6c43317ace28?auto=format&fit=crop&q=80&w=1600",
    intro: "La necesidad de creación de una universidad en el centro del país, vale decir en el departamento de Junín fue desde muchos años atrás a la creación de la Universidad Comunal, por lo cual nace el pensamiento comunal ideológico del líder comunero Elías Tácunan Cahuana de crear una universidad comunal, único en su género, basado en el principio de las organizaciones comunales especialmente de los pueblos andinos, es decir mediante el soporte ideológico, económico y social de las comunidades movilizados por el líder comunal Tácunan se funda la Universidad Comunal del Centro.",
    paragraphs: [
      "El 05 de marzo de 1959, se nombra un comité Pro Universidad del Centro, y el 10 de mayo del mismo año, se funda la UNIVERSIDAD COMUNAL DEL CENTRO DEL PERÚ, con la participación de diferentes comunidades campesinas, instituciones, entidades públicas y privadas, organizaciones en general de todas las fuerzas vivas del Departamento de Junín, así como la presencia de personajes ilustres preocupados por la creación de una Universidad como: Jesús Veliz Lizarraga, Ramiro Prialé Prialé, Javier Pulgar Vidal y otros.",
      "El 16 de diciembre de 1959 después de una serie de gestiones se oficializa la creación de la Universidad Comunal del Centro del Perú, mediante la expedición del D.S. 46 - 59 - ME, en abril de 1960 la Universidad Comunal apertura el Año Académico, iniciándose por entonces por primera vez en el país la enseñanza superior técnico científico de muchas carreras profesionales, es el caso de la FACULTAD DE CIENCIAS FORESTALES, y el 02 de enero del año 1962, mediante la promulgación de la Ley N° 13827 se convierte la Universidad Comunal en Universidad Nacional del Centro del Perú.",
      "De esta manera la Facultad de Ciencias Forestales se crea oficialmente el 16 de diciembre de 1959, dando apertura al año académico en la ciudad de Huancayo en abril de 1960 con 12 alumnos y entre ellos una dama la Bach. Teresa Lindo Soto, y debiendo el egresado obtener el grado de Bachiller en Ingeniería Forestal y con el título de Ingeniero Forestal; posteriormente en 1965 la facultad apertura el año académico en la Estación Experimental El Mantaro con 22 alumnos la labor académica fue anual y en el año 1966 se adopta la enseñanza por ciclos académicos, la promoción 1966 solo había 2 estudiantes por lo cual viajaron a Chile a culminar el 5to año de estudios y la promoción 1967 solo 3 alumnos quienes viajaron a México a culminar el 5to año, en 1968 la facultad se traslada a la ciudad de Huancayo funcionando inicialmente en un local alquilado en el barrio San Carlos, luego en el Jr. Huánuco.",
      "En esta oportunidad se produce la reorganización de la Universidad Nacional del Centro del Perú creándose el Programa Académico de Ciencias Agrícolas y Pecuarias que agrupa a las facultades de Agronomía, Forestales y Zootecnia, y en el año 1970 se trasladan a la actual Ciudad Universitaria posicionándose los primeros pabellones que hasta la actualidad ocupan el pabellón \"A\" y funciona el Programa Académico de Ingeniería Forestal para luego convertirse en Facultad de Ingeniería Forestal, posteriormente adopta una nueva posición académica cambiando el nombre acorde a la realidad del avance de la ciencia y la tecnología como Facultad de Ciencias Forestales y del Ambiente.",
      "En la actualidad la Facultad de Ciencias Forestales y del Ambiente ha crecido en número de estudiantes, así como en el personal docente y administrativo, es una oportunidad que la UNCP cuenta con Escuela de Postgrado para formar docentes altamente capacitados como maestros y doctores en todas las facultades."
    ],
    author: "Ing. Donato Hinostroza Cano"
  },
  '/facultad/mision-vision-politica/calidad': {
    title: "Misión, Visión y Política de Calidad",
    subtitle: "Nuestra identidad y compromiso con la excelencia académica.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
    intro: "Nos alineamos con los objetivos de desarrollo sostenible y la visión regional de Junín.",
    paragraphs: [
      "La Facultad de Ciencias Forestales y del Ambiente asume el compromiso de brindar una educación de calidad, orientada a la formación de profesionales líderes y competitivos.",
      "Nuestra política de calidad se basa en la mejora continua de los procesos académicos y administrativos, garantizando la satisfacción de nuestra comunidad universitaria y de la sociedad."
    ],
    features: [
      {
        title: "Misión Académica",
        items: [
          "Brindar formación profesional humanística, científica y tecnológica a los estudiantes de ciencias forestales y del ambiente.",
          "Desarrollar investigación básica y aplicada con responsabilidad social para el desarrollo sostenible.",
          "Contribuir a la gestión y conservación de los recursos naturales en un contexto de cambio climático."
        ]
      },
      {
        title: "Visión Estratégica",
        items: [
          "Ser una facultad acreditada internacionalmente, referente en innovación forestal y ambiental.",
          "Liderar la producción científica regional con impacto en políticas públicas ambientales.",
          "Promover una cultura de emprendimiento basado en la bioeconomía y el valor agregado del bosque."
        ]
      }
    ]
  },
  '/facultad/mision-vision-politica/ambiental': {
    title: "Política Ambiental",
    subtitle: "Compromiso con la sostenibilidad y el cuidado del ecosistema.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600",
    intro: "Como facultad forestal, lideramos con el ejemplo en la gestión ambiental responsable.",
    paragraphs: [
      "Nuestra política ambiental establece los lineamientos para minimizar el impacto de nuestras actividades en el entorno, promoviendo el uso eficiente de los recursos y la conservación de la biodiversidad.",
      "Fomentamos una conciencia ambiental en nuestros estudiantes, docentes y personal administrativo, integrando la sostenibilidad en todas nuestras funciones sustantivas."
    ],
    features: [
      {
        title: "Ejes de la Política Ambiental",
        items: [
          "Gestión integral de residuos sólidos y líquidos.",
          "Uso eficiente de la energía y el agua en el campus.",
          "Conservación y enriquecimiento de las áreas verdes universitarias.",
          "Promoción de la investigación en mitigación y adaptación al cambio climático."
        ]
      }
    ]
  },
  '/facultad/mision-vision-politica/proposito': {
    title: "Propósito Institucional",
    subtitle: "La razón de ser de nuestra facultad.",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80&w=1600",
    intro: "Existimos para transformar la relación entre la sociedad y la naturaleza a través del conocimiento.",
    paragraphs: [
      "Nuestro propósito trasciende la formación técnica; buscamos inspirar a las nuevas generaciones a convertirse en guardianes de nuestro patrimonio natural.",
      "Trabajamos para que el sector forestal sea un motor de desarrollo equitativo y sostenible para el Perú, revalorizando el bosque como fuente de vida y bienestar."
    ]
  },
  '/facultad/plana-docente': {
    title: "Plana Docente",
    subtitle: "Cuerpo académico de alto nivel y trayectoria.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600",
    intro: "Contamos con especialistas con amplia experiencia en investigación y gestión forestal.",
    paragraphs: [
      "Nuestros docentes no solo imparten conocimientos en aula, sino que lideran proyectos de investigación de impacto nacional e internacional.",
      "Muchos de ellos son investigadores reconocidos por el RENACYT, lo que garantiza una formación basada en la evidencia científica más reciente."
    ],
    members: [
      {
        name: "Dr. Eloy Guillermo Vivas",
        role: "Docente Principal",
        degree: "Doctor en Ciencias Ambientales",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
      },
      {
        name: "Mg. Luis Alberto Tapia",
        role: "Docente Asociado",
        degree: "Magíster en Manejo de Cuencas",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300"
      },
      {
        name: "Dra. María Antonieta Rojas",
        role: "Docente Principal",
        degree: "Ph.D. en Ecología Tropical",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=300&h=300"
      }
    ]
  },
  '/facultad/resoluciones-decanato': {
    title: "Resoluciones de Decanato",
    subtitle: "Disposiciones administrativas de la máxima autoridad de la Facultad.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
    intro: "Acceda a las resoluciones emitidas por el Decanato para la gestión administrativa y académica.",
    paragraphs: [
      "En esta sección se publican las resoluciones que norman aspectos específicos de la vida universitaria en nuestra facultad.",
      "Puede descargar los documentos en formato PDF para su consulta oficial."
    ],
    documents: [
      { title: "Resolución de Decanato N° 045-2024-D-FCFA", size: "0.4 MB", date: "22 May 2024" },
      { title: "Resolución de Decanato N° 044-2024-D-FCFA", size: "0.3 MB", date: "20 May 2024" },
      { title: "Resolución de Decanato N° 043-2024-D-FCFA", size: "0.5 MB", date: "15 May 2024" }
    ]
  },
  '/facultad/organigrama': {
    title: "Estructura Orgánica",
    subtitle: "Organización jerárquica para una gestión transparente y eficiente.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
    intro: "La Facultad de Ciencias Forestales y del Ambiente cuenta con una estructura diseñada para optimizar los procesos académicos y administrativos.",
    paragraphs: [
      "El Consejo de Facultad es el máximo órgano de gobierno, presidido por el Decano e integrado por representantes docentes y estudiantiles. La gestión se articula a través de las Direcciones de Escuela, los Departamentos Académicos y las Unidades de Posgrado e Investigación.",
      "Contamos además con unidades de apoyo como la Secretaría Académica, la Unidad de Bienestar Universitario y el Comité de Gestión de la Calidad, asegurando el cumplimiento de los estándares de licenciamiento y acreditación."
    ],
    documents: [
      { title: "Reglamento de Organización y Funciones (ROF)", size: "2.4 MB", date: "2024" },
      { title: "Manual de Procesos Académicos", size: "1.8 MB", date: "2023" }
    ]
  },
  '/facultad/autoridades': {
    title: "Autoridades de la Facultad",
    subtitle: "Cuerpo directivo encargado de guiar el destino académico, científico e institucional de nuestra facultad.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600",
    intro: "El equipo directivo y de coordinación de la Facultad de Ciencias Forestales y del Ambiente lidera con transparencia, compromiso y excelencia.",
    paragraphs: [
      "La dirección de la Facultad de Ciencias Forestales y del Ambiente de la UNCP está conformada por profesionales con destacada trayectoria científica y de gestión pública, dedicados al fortalecimiento de la calidad educativa, el fomento de la investigación científica aplicada y la proyección social en beneficio del país.",
      "A través del Decanato, las Direcciones de Escuela, Departamento Académico, Institutos de Investigación y las diversas Coordinaciones Especializadas, planificamos, organizamos y ejecutamos las políticas universitarias garantizando un servicio educativo superior de nivel internacional y una administración transparente."
    ],
    members: [
      {
        name: "Dr. Eloy Guillermo Vivas",
        role: "Decano",
        degree: "Doctor en Ciencias Ambientales y Desarrollo Sostenible",
        email: "decanoforestales@uncp.edu.pe",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
      },
      {
        name: "Mg. Luis Alberto Tapia",
        role: "Secretario Docente",
        degree: "Magíster en Manejo de Cuencas Hidrográficas",
        email: "secdocforestales@uncp.edu.pe",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300"
      },
      {
        name: "Dra. María Antonieta Rojas",
        role: "Directora de la Escuela de Posgrado",
        degree: "Ph.D. en Ecología Tropical",
        email: "posgradofor@uncp.edu.pe",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=300&h=300"
      }
    ]
  },
  '/pregrado/perfil-estudiante/ingreso': {
    title: "Perfil de Ingreso",
    subtitle: "Requisitos y competencias deseadas para los nuevos estudiantes.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600",
    intro: "Buscamos jóvenes con vocación de servicio, compromiso ambiental y capacidad analítica.",
    paragraphs: [
      "El aspirante a la carrera de Ingeniería Forestal debe poseer una sólida base en ciencias naturales y exactas, así como un marcado interés por la conservación de los recursos naturales.",
      "Es fundamental contar con disposición para el trabajo de campo en diversos ecosistemas, capacidad de observación y un alto sentido de responsabilidad ética y social."
    ],
    features: [
      {
        title: "Competencias Requeridas",
        items: [
          "Capacidad de razonamiento lógico y matemático.",
          "Interés por la investigación científica y biológica.",
          "Habilidades de comunicación efectiva y trabajo en equipo.",
          "Compromiso con la preservación del medio ambiente."
        ]
      }
    ]
  },
  '/pregrado/perfil-estudiante/egreso': {
    title: "Perfil de Egreso",
    subtitle: "Competencias y capacidades del profesional forestal de la UNCP.",
    image: "https://images.unsplash.com/photo-1596464716127-f9a0639b5ca2?auto=format&fit=crop&q=80&w=1600",
    intro: "El Ingeniero Forestal de la UNCP es un profesional líder en la gestión sostenible de los ecosistemas.",
    paragraphs: [
      "Nuestro egresado está capacitado para diseñar, ejecutar y evaluar proyectos de manejo forestal, conservación de la biodiversidad y restauración de ecosistemas degradados.",
      "Posee una visión integral que combina el rigor científico con la sensibilidad social, permitiéndole proponer soluciones innovadoras a los desafíos ambientales contemporáneos."
    ],
    features: [
      {
        title: "Competencias Profesionales",
        items: [
          "Manejo sostenible de bosques naturales y plantaciones.",
          "Gestión y evaluación de servicios ecosistémicos.",
          "Transformación industrial y valor agregado de productos forestales.",
          "Formulación de políticas y legislación ambiental."
        ]
      }
    ]
  },
  '/pregrado/malla-curricular': {
    title: "Malla Curricular",
    subtitle: "Estructura académica de la carrera de Ingeniería Forestal.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600",
    intro: "Un currículo moderno diseñado para responder a las demandas del sector forestal global.",
    paragraphs: [
      "Nuestra malla curricular organiza las asignaturas en áreas de formación básica, formación especializada y formación complementaria, asegurando un aprendizaje integral.",
      "A lo largo de los diez semestres, el estudiante transita desde los fundamentos científicos hasta la aplicación técnica avanzada en el campo y la industria."
    ],
    documents: [
      { title: "Malla Curricular - Ingeniería Forestal (PDF)", size: "1.4 MB", date: "2024" }
    ]
  },
  '/pregrado/plan-estudios': {
    title: "Plan de Estudios",
    subtitle: "Detalle de asignaturas y créditos por semestre.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1600",
    intro: "Información detallada sobre la carga académica y la progresión de estudios.",
    paragraphs: [
      "El plan de estudios vigente ha sido actualizado para incorporar las últimas tendencias en tecnología forestal, gestión ambiental y cambio climático.",
      "Cada curso ha sido diseñado bajo un enfoque por competencias, priorizando el aprendizaje práctico y la investigación desde los primeros ciclos."
    ],
    documents: [
      { title: "Plan de Estudios Vigente (PDF)", size: "2.1 MB", date: "2024" }
    ]
  },
  '/pregrado/sumillas': {
    title: "Sumillas de Cursos",
    subtitle: "Resumen de contenidos de las asignaturas de la carrera.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600",
    intro: "Conozca los temas y objetivos de aprendizaje de cada materia del plan de estudios.",
    paragraphs: [
      "Las sumillas proporcionan una visión general de lo que el estudiante aprenderá en cada curso, facilitando la planificación académica y el reconocimiento de estudios.",
      "Este documento es esencial para entender la profundidad y el alcance de la formación que brindamos en nuestra facultad."
    ],
    documents: [
      { title: "Compendio de Sumillas - Ingeniería Forestal", size: "3.5 MB", date: "2024" }
    ]
  },
  '/pregrado/calendario-academico': {
    title: "Calendario Académico",
    subtitle: "Fechas importantes y cronograma de actividades universitarias.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1600",
    intro: "Manténgase informado sobre los periodos de matrícula, exámenes y eventos institucionales.",
    paragraphs: [
      "El calendario académico es la guía temporal para toda nuestra comunidad, estableciendo los hitos fundamentales de cada semestre académico.",
      "Es responsabilidad del estudiante y docente conocer y respetar las fechas establecidas para garantizar el normal desarrollo de las labores universitarias."
    ],
    documents: [
      { title: "Calendario Académico 2024-I", size: "0.5 MB", date: "Mar 2024" },
      { title: "Calendario Académico 2024-II", size: "0.5 MB", date: "Ago 2024" }
    ]
  },
  '/dependencias/proyeccion-social': {
    title: "Proyección Social y Extensión Universitaria",
    subtitle: "Compromiso con el desarrollo de la comunidad.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1600",
    intro: "Nuestra facultad extiende su conocimiento y recursos para contribuir al bienestar social y ambiental de la región.",
    paragraphs: [
      "La Proyección Social es una función esencial que vincula a la universidad con la sociedad, permitiendo la transferencia de tecnología forestal y ambiental a comunidades rurales y organizaciones.",
      "Desarrollamos programas de capacitación, asesoría técnica y proyectos de desarrollo sostenible que buscan mejorar la calidad de vida de la población y promover la conservación de los recursos naturales."
    ],
    features: [
      {
        title: "Líneas de Acción",
        items: [
          "Capacitación en manejo forestal comunitario.",
          "Programas de educación ambiental en escuelas.",
          "Asesoría técnica en sistemas agroforestales.",
          "Proyectos de reforestación participativa."
        ]
      }
    ]
  },
  '/dependencias/investigacion/proyectos': {
    title: "Proyectos de Investigación",
    subtitle: "Generando conocimiento para el sector forestal.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600",
    intro: "Conozca las investigaciones actuales que lideran nuestros docentes y estudiantes.",
    paragraphs: [
      "El Instituto Especializado de Investigación coordina y promueve la ejecución de proyectos de investigación científica y tecnológica en diversas áreas de la ciencia forestal y ambiental.",
      "Nuestros proyectos cuentan con financiamiento de la UNCP, así como de fuentes externas nacionales e internacionales, contribuyendo al avance del conocimiento y la solución de problemas del sector."
    ],
    features: [
      {
        title: "Áreas Prioritarias",
        items: [
          "Silvicultura y Manejo de Bosques Tropicales.",
          "Biotecnología y Mejoramiento Forestal.",
          "Cambio Climático y Servicios Ecosistémicos.",
          "Tecnología y Transformación de la Madera."
        ]
      }
    ]
  },
  '/dependencias/investigacion/flujograma': {
    title: "Flujograma Para Plan de Tesis",
    subtitle: "Guía paso a paso para tu investigación.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1600",
    intro: "Visualice el proceso administrativo y académico para la aprobación de su plan de tesis.",
    paragraphs: [
      "El flujograma detalla el recorrido desde la elección del tema de tesis hasta la aprobación final del plan por parte de la comisión de investigación.",
      "Este recurso es fundamental para que los estudiantes de pregrado y posgrado organicen sus tiempos y cumplan con todos los requisitos establecidos por la facultad."
    ],
    documents: [
      { title: "Flujograma de Trámites de Tesis", size: "0.8 MB", date: "2024" }
    ]
  },
  '/dependencias/investigacion/guias': {
    title: "Guías Para Plan de Tesis",
    subtitle: "Formatos y normas para tu investigación.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1600",
    intro: "Descargue las guías oficiales para la elaboración y presentación de planes de tesis.",
    paragraphs: [
      "Ponemos a disposición de los tesistas las normas de estilo, formatos de presentación y criterios de evaluación que rigen en nuestra facultad.",
      "El cumplimiento de estas guías asegura la calidad académica de los trabajos de investigación y agiliza el proceso de revisión por parte de los jurados."
    ],
    documents: [
      { title: "Guía de Elaboración de Plan de Tesis", size: "1.2 MB", date: "2024" },
      { title: "Normas de Estilo (APA/Vancouver)", size: "0.5 MB", date: "2024" }
    ]
  },
  '/dependencias/laboratorios/biodiversidad': {
    title: "Laboratorio de Biodiversidad y Manejo Forestal",
    subtitle: "Estudio y conservación de la flora silvestre.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
    intro: "Espacio dedicado a la investigación taxonómica y ecológica de las especies forestales.",
    paragraphs: [
      "Este laboratorio cuenta con equipos especializados para el análisis de muestras botánicas, estudios de regeneración natural y evaluación de la biodiversidad en diferentes ecosistemas.",
      "Es el centro de apoyo para las asignaturas de Dendrología, Ecología Forestal y Manejo de Bosques, permitiendo a los estudiantes realizar prácticas de identificación y análisis de datos de campo."
    ],
    features: [
      {
        title: "Equipamiento y Servicios",
        items: [
          "Estereoscopios de alta resolución.",
          "Software de análisis ecológico.",
          "Colección de muestras botánicas de referencia.",
          "Asesoría en inventarios de biodiversidad."
        ]
      }
    ]
  },
  '/dependencias/laboratorios/madera': {
    title: "Laboratorio de Tecnología de la Madera y Dendrotecnología",
    subtitle: "Investigación, innovación y desarrollo en tecnología de la madera.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    intro: "El Laboratorio de Tecnología de la Madera y Dendrotecnología de la FCFA impulsa la investigación, innovación y desarrollo de prácticas de enseñanza-aprendizaje en tecnología de la madera.",
    paragraphs: [
      "Además, se enfoca en el estudio de la anatomía de la madera, sus propiedades físicas y mecánicas, así como el contenido de humedad de diversas especies forestales.",
      "Estas actividades permiten mejorar las técnicas de procesamiento, elevar la calidad de los productos y minimizar el impacto ambiental.",
      "Asimismo, contribuye a la formación de profesionales forestales, fomenta la sostenibilidad y promueve el crecimiento de las industrias forestales."
    ],
    features: [
      {
        title: "Áreas de Enfoque Científico",
        items: [
          "Anatomía y xilotecnología.",
          "Propiedades físico-mecánicas.",
          "Secado y determinación de humedad.",
          "Procesamiento e impacto ambiental.",
          "Fomento de la sostenibilidad forestal."
        ]
      }
    ]
  },
  '/dependencias/laboratorios/medio-ambiente': {
    title: "Laboratorio de Medio Ambiente",
    subtitle: "Formación integral, investigación y monitoreo ambiental.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600",
    intro: "El Laboratorio de Medio Ambiente de la FCFA de la Universidad Nacional del Centro del Perú es un centro de vanguardia que promueve la formación integral de los estudiantes.",
    paragraphs: [
      "Complementando la teoría con la práctica, lleva a cabo investigaciones y evaluaciones de contaminantes en suelo, agua, aire y otros componentes ambientales.",
      "Ubicado en el Pabellón \"A\" de la facultad, proporciona un espacio equipado con tecnología avanzada para el análisis y monitoreo ambiental.",
      "Además, fomenta la colaboración interdisciplinaria y la vinculación con la comunidad, promoviendo soluciones sostenibles para la conservación y gestión del medio ambiente."
    ],
    features: [
      {
        title: "Líneas de Trabajo e Investigación",
        items: [
          "Evaluación de contaminantes en suelo, agua, aire y otros componentes.",
          "Tecnología avanzada para el análisis y monitoreo ambiental en el Pabellón \"A\".",
          "Colaboración interdisciplinaria y vinculación de impacto comunitario.",
          "Desarrollo de soluciones sostenibles para la conservación del ecosistema."
        ]
      }
    ]
  },
  '/dependencias/laboratorios/herbario': {
    title: "Herbario de la Facultad de Ciencias Forestales y del Ambiente (HCEN - FO)",
    subtitle: "Recopilación, investigación y conservación de la flora andino-amazónica.",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=1600",
    intro: "El Herbario de la Facultad de Ciencias Forestales y del Ambiente (HCEN - FO) de la UNCP recopila plantas secas y etiquetadas con fines educativos e investigativos.",
    paragraphs: [
      "Estas plantas se recolectan en diversos hábitats y se identifican por especie. El herbario es una herramienta fundamental para el estudio de la biodiversidad, la ecología vegetal y la dendrología, permitiendo a los estudiantes comprender e identificar la diversidad de especies.",
      "El HCEN-FO alberga colecciones botánicas especialmente de ecosistemas andinos y es un centro clave para la investigación y conservación de la flora, brindando apoyo a la educación y al avance científico."
    ],
    features: [
      {
        title: "Líneas de Trabajo e Impacto",
        items: [
          "Recopilación de plantas secas y etiquetadas con fines educativos.",
          "Estudios avanzados de biodiversidad, ecología vegetal y dendrología.",
          "Colecciones botánicas especializadas en ecosistemas andinos.",
          "Conservación de la flora regional y soporte al avance científico."
        ]
      }
    ]
  },
  '/dependencias/grados-titulos': {
    title: "Grados y Títulos",
    subtitle: "Gestión administrativa de su certificación profesional.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600",
    intro: "Información sobre los requisitos y procedimientos para la obtención del grado de Bachiller y el Título Profesional.",
    paragraphs: [
      "La oficina de Grados y Títulos se encarga de orientar a los egresados en el proceso de titulación, asegurando que se cumplan todas las normativas vigentes de la universidad y la SUNEDU.",
      "Aquí encontrará los cronogramas de sustentación, formatos de solicitud y la guía de trámites administrativos necesarios para culminar su etapa académica."
    ],
    documents: [
      { title: "Requisitos para Bachiller", size: "0.5 MB", date: "2024" },
      { title: "Reglamento de Titulación", size: "1.5 MB", date: "2024" }
    ]
  },
  '/dependencias/planificacion/poi': {
    title: "Plan Operativo Institucional (POI)",
    subtitle: "Nuestras metas y actividades anuales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    intro: "El Plan Operativo Institucional y el Plan Estratégico Institucional son documentos oficiales de gestión que establecen los objetivos generales de la institución, sus grandes líneas de acción y las diversas actividades que se debe realizar para alcanzar los objetivos y metas trazadas para un periodo.",
    paragraphs: [
      "El POI detalla las metas físicas y financieras que la facultad se propone alcanzar durante el año fiscal, alineadas con el presupuesto institucional.",
      "Es una herramienta de gestión anual indispensable que concreta los objetivos estratégicos en actividades operativas con metas e indicadores calendarizados."
    ],
    documents: [
      { title: "POI 2024 - Facultad de Ciencias Forestales y del Ambiente", size: "2.5 MB", date: "2024" }
    ]
  },
  '/dependencias/planificacion/foda': {
    title: "Análisis FODA",
    subtitle: "Diagnóstico estratégico de nuestra facultad.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600",
    intro: "Identificación de Fortalezas, Oportunidades, Debilidades y Amenazas.",
    paragraphs: [
      "El análisis FODA es la base para nuestra planificación estratégica, permitiéndonos potenciar nuestras capacidades internas y anticiparnos a los retos del entorno.",
      "Este diagnóstico se actualiza periódicamente con la participación de todos los estamentos de la facultad (docentes, estudiantes, egresados y administrativos)."
    ],
    features: [
      {
        title: "Ejes del Diagnóstico",
        items: [
          "Calidad Académica e Infraestructura.",
          "Investigación y Producción Científica.",
          "Vinculación con el Sector Productivo.",
          "Gestión Administrativa y Financiera."
        ]
      }
    ]
  },
  '/dependencias/planificacion/pei': {
    title: "Plan Estratégico Institucional (PEI)",
    subtitle: "Nuestra visión a largo plazo.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1600",
    intro: "El Plan Operativo Institucional y el Plan Estratégico Institucional son documentos oficiales de gestión que establecen los objetivos generales de la institución, sus grandes líneas de acción y las diversas actividades que se debe realizar para alcanzar los objetivos y metas trazadas para un periodo.",
    paragraphs: [
      "El PEI establece la misión, visión y los objetivos estratégicos que guían el desarrollo de la facultad en un horizonte plurianual (3 a 5 años).",
      "A través de este plan, buscamos consolidarnos como una facultad líder en ciencias forestales y ambientales a nivel nacional e internacional, impulsando la sostenibilidad."
    ],
    documents: [
      { title: "PEI 2023-2026 UNCP", size: "4.2 MB", date: "2023" }
    ]
  },
  '/dependencias/estaciones/casa-blanca': {
    title: "Unidad de Producción \"Casa Blanca\"",
    subtitle: "Centro de enseñanza, investigación y proyección social.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600",
    intro: "Esta Unidad de Producción se encuentra en la Comunidad Campesina de Casa Blanca, Distrito de Pomacancha, Provincia de Jauja, Región Junín, tiene una extensión de 104 Ha, inscrita a nombre de la UNCP.",
    paragraphs: [
      "La Facultad de Ciencias Forestales y del Ambiente de la UNCP trabaja con la comunidad para reactivar la producción agrícola, pecuaria y forestal a corto, mediano y largo plazo.",
      "El objetivo es fortalecer la enseñanza, investigación científica y responsabilidad social en un horizonte de 20 años."
    ],
    features: [
      {
        title: "Ejes de Desarrollo",
        items: [
          "Fortalecimiento de la enseñanza académica de pregrado.",
          "Investigación científica aplicada y tesis forestales.",
          "Responsabilidad social con la Comunidad de Casa Blanca.",
          "Reactivación de producción agrícola, pecuaria y forestal."
        ]
      }
    ]
  },
  '/dependencias/estaciones/oxapampa': {
    title: "Estación Experimental Oxapampa",
    subtitle: "Investigación en recursos forestales y silvicultura de selva alta.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600",
    intro: "La \"Estación Experimental Oxapampa\" se encuentra ubicada en la provincia de Oxapampa, departamento de Pasco.",
    paragraphs: [
      "La estación cuenta con 3.03 ha de bosque de pino para ser exactos 3,073 árboles de pinos y otras especies forestales, que en la actualidad ya han llegado a su turno de aprovechamiento.",
      "Del mismo modo se tienen 2,459 plantas en crecimiento y 814 plantas también para aprovechamiento."
    ],
    features: [
      {
        title: "Inventario Forestal",
        items: [
          "Superficie: 3.03 hectáreas de cobertura boscosa.",
          "Árboles totales: 3,073 individuos de pino y especies nativas.",
          "Plantas en crecimiento: 2,459 plantones en fase silvicultural.",
          "Aprovechamiento activo: 814 plantas listas para turno tecnológico."
        ]
      }
    ]
  },
  '/dependencias/estaciones/el-mantaro': {
    title: "Estación Experimental Agropecuario El Mantaro",
    subtitle: "Investigación altoandina integrada.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
    intro: "Centro multidisciplinario para el estudio de la producción en la sierra central.",
    paragraphs: [
      "En convenio con otras facultades, realizamos investigaciones sobre silvopasturas, protección de suelos y adaptación de especies forestales a condiciones de altura.",
      "Es un espacio ideal para el estudio de la interacción entre la actividad forestal, agrícola y ganadera en el ecosistema andino."
    ],
    features: [
      {
        title: "Actividades Principales",
        items: [
          "Ensayos de especies forestales altoandinas.",
          "Sistemas silvopastoriles.",
          "Conservación de suelos y agua.",
          "Producción de semillas forestales de altura."
        ]
      }
    ]
  },
  '/dependencias/estaciones/incatoshi': {
    title: "Concesión de Conservación \"Incatoshi Kametza\"",
    subtitle: "Preservación de la diversidad biológica y servicios ecosistémicos del bosque de neblinas.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600",
    intro: "La \"Concesión de Conservación Incatoshi Kametza\" tiene como objetivo la preservación de la diversidad biológica endémica y los procesos ecológicos propios del bosque de neblinas, con el fin de mantener los servicios ecosistémicos para el beneficio de las poblaciones.",
    paragraphs: [
      "El contrato de concesión tiene una duración de 40 años (12-SEC/C-CON-D-001-11, DEM a: RA N° D000282-2020-MIDAGRI-SERFOR-ATFFS-SELVA CENTRAL).",
      "Esta concesión se utiliza como lugar en donde se realizan actividades de enseñanza, aprendizaje, monitoreo e investigaciones integrales para desarrollar paquetes tecnológicos de manejo sostenible de la biodiversidad en los ecosistemas presentes. Además, se llevan a cabo actividades de conservación, como la identificación de áreas de conservación potenciales y unidades de zonificación interna."
    ],
    features: [
      {
        title: "Ejes de Conservación y Estudio",
        items: [
          "Preservación de biodiversidad endémica y procesos ecológicos.",
          "Estudios científicos avanzados en ecosistemas de bosque de neblina.",
          "Zonificación interna e identificación de áreas de alto valor.",
          "Desarrollo de paquetes tecnológicos para el manejo sostenible de recursos."
        ]
      }
    ]
  },
  '/acreditacion/proceso': {
    title: "Proceso de Acreditación",
    subtitle: "Compromiso con la excelencia y la mejora continua.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
    intro: "La carrera de Ingeniería Forestal se encuentra en un proceso constante de autoevaluación bajo los estándares del SINEACE.",
    paragraphs: [
      "La acreditación es el reconocimiento público de la calidad educativa que otorga el Estado, a través del SINEACE, a las instituciones que cumplen con los estándares de calidad.",
      "Nuestra facultad trabaja arduamente en la mejora de sus procesos académicos y administrativos para garantizar una formación de excelencia a nuestros estudiantes."
    ],
    documents: [
      { title: "Modelo de Calidad Educativa UNCP", size: "1.5 MB", date: "2024" },
      { title: "Plan de Mejora Continua de Facultad", size: "2.1 MB", date: "2023" }
    ]
  },
  '/acreditacion/grupo-interes': {
    title: "Grupo de Interés",
    subtitle: "Vinculación con el entorno profesional y social.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600",
    intro: "Nuestros grupos de interés son fundamentales para la actualización del currículo y la pertinencia de nuestra formación.",
    paragraphs: [
      "El Grupo de Interés está conformado por representantes de instituciones públicas, empresas privadas, egresados y sociedad civil vinculados al sector forestal y ambiental.",
      "Su participación activa nos permite identificar las demandas del mercado laboral y las necesidades de la sociedad, asegurando que nuestros egresados posean las competencias requeridas."
    ],
    features: [
      {
        title: "Funciones del Grupo de Interés",
        items: [
          "Validación del perfil de egreso.",
          "Asesoramiento en la actualización curricular.",
          "Facilitación de prácticas pre-profesionales.",
          "Identificación de oportunidades de investigación aplicada."
        ]
      }
    ]
  },
  '/acreditacion/calidad/manual': {
    title: "Manual de Calidad",
    subtitle: "Nuestra guía para la gestión de la excelencia.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
    intro: "El Manual de Calidad describe el Sistema de Gestión de la Calidad de la Facultad de Ciencias Forestales y del Ambiente.",
    paragraphs: [
      "Este documento establece las políticas, objetivos y procesos necesarios para asegurar que nuestros servicios educativos cumplan con los requisitos de calidad y las expectativas de nuestros usuarios.",
      "Es una herramienta fundamental para la estandarización de procesos y la búsqueda constante de la mejora continua en todas nuestras áreas."
    ],
    documents: [
      { title: "Manual de Calidad - Versión 2.0", size: "3.2 MB", date: "2024" }
    ]
  },
  '/acreditacion/calidad/riesgos-oportunidades': {
    title: "Riesgos y Oportunidades",
    subtitle: "Gestión proactiva para la sostenibilidad institucional.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1600",
    intro: "Identificamos y gestionamos los factores que pueden afectar el cumplimiento de nuestros objetivos estratégicos.",
    paragraphs: [
      "La gestión de riesgos y oportunidades nos permite anticiparnos a posibles problemas y aprovechar las circunstancias favorables para el crecimiento de la facultad.",
      "Evaluamos constantemente el entorno interno y externo para asegurar la continuidad de nuestras operaciones y la calidad de nuestra formación académica."
    ],
    features: [
      {
        title: "Matriz de Gestión",
        items: [
          "Identificación de riesgos académicos y administrativos.",
          "Evaluación de impacto y probabilidad.",
          "Planes de mitigación y contingencia.",
          "Aprovechamiento de oportunidades de mejora."
        ]
      }
    ]
  },
  '/acreditacion/calidad/mapa-procesos': {
    title: "Mapa de Procesos",
    subtitle: "Visualización integral de nuestra gestión.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1600",
    intro: "Representación gráfica de la interacción entre los procesos estratégicos, misionales y de apoyo de la facultad.",
    paragraphs: [
      "Nuestro mapa de procesos nos permite entender cómo cada actividad contribuye a la satisfacción del estudiante y al cumplimiento de nuestra misión institucional.",
      "Se divide en procesos estratégicos (dirección), procesos operativos o misionales (enseñanza, investigación, proyección) y procesos de apoyo (recursos, administración)."
    ],
    features: [
      {
        title: "Estructura de Procesos",
        items: [
          "Procesos Estratégicos: Planificación y Calidad.",
          "Procesos Misionales: Formación, Investigación y Extensión.",
          "Procesos de Apoyo: Gestión Administrativa y Tecnológica.",
          "Procesos de Evaluación: Auditoría y Mejora Continua."
        ]
      }
    ]
  },
  '/posgrado/presentacion': {
    title: "Posgrado en Ciencias Forestales",
    subtitle: "Liderazgo y especialización de alto nivel.",
    image: "https://images.unsplash.com/photo-1523050853064-8521a399831f?auto=format&fit=crop&q=80&w=1600",
    intro: "Nuestra Escuela de Posgrado forma investigadores y especialistas capaces de liderar la gestión sostenible de los recursos naturales.",
    paragraphs: [
      "La Facultad de Ciencias Forestales y del Ambiente ofrece programas de posgrado diseñados para responder a los desafíos globales del cambio climático, la conservación de la biodiversidad y el desarrollo sostenible.",
      "Contamos con una plana docente de primer nivel, conformada por doctores e investigadores con amplia trayectoria nacional e internacional."
    ],
    features: [
      {
        title: "Por qué elegir nuestro Posgrado",
        items: [
          "Plana docente con grado de Doctor y reconocimiento RENACYT.",
          "Convenios internacionales para pasantías de investigación.",
          "Acceso a laboratorios especializados y estaciones experimentales.",
          "Enfoque en investigación aplicada y solución de problemas reales."
        ]
      }
    ]
  },
  '/posgrado/maestrias/ecoturismo': {
    title: "Maestría en Ecoturismo",
    subtitle: "Gestión sostenible del turismo en áreas naturales.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600",
    intro: "Especialícese en la planificación y gestión de servicios turísticos que conservan el ambiente y mejoran el bienestar local.",
    paragraphs: [
      "Este programa busca formar profesionales capaces de diseñar y ejecutar proyectos de ecoturismo que sean económicamente viables, socialmente justos y ambientalmente responsables.",
      "El plan de estudios integra conocimientos de ecología, gestión empresarial, planificación territorial y participación comunitaria."
    ],
    features: [
      {
        title: "Áreas de Estudio",
        items: [
          "Planificación de Espacios Naturales para el Turismo.",
          "Gestión de Empresas de Ecoturismo.",
          "Interpretación Ambiental y Patrimonio Natural.",
          "Turismo Sostenible y Desarrollo Local."
        ]
      }
    ]
  },
  '/posgrado/maestrias/gestion-ambiental': {
    title: "Maestría en Gestión Ambiental y Desarrollo Sostenible",
    subtitle: "Soluciones integrales para los desafíos ambientales.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
    intro: "Lidere la implementación de estrategias ambientales en organizaciones públicas y privadas.",
    paragraphs: [
      "La maestría proporciona herramientas avanzadas para la evaluación de impacto ambiental, la gestión de residuos, la remediación de suelos y la implementación de sistemas de gestión ambiental (ISO 14001).",
      "Nuestros graduados están preparados para diseñar políticas públicas y estrategias corporativas que promuevan un desarrollo en equilibrio con la naturaleza."
    ],
    features: [
      {
        title: "Competencias Clave",
        items: [
          "Evaluación y Auditoría Ambiental.",
          "Gestión de Recursos Hídricos y Suelos.",
          "Economía Ambiental y Circular.",
          "Legislación y Políticas Ambientales."
        ]
      }
    ]
  },
  '/posgrado/maestrias/cuencas-hidrograficas': {
    title: "Maestría en Gestión Sostenible de Cuencas Hidrográficas",
    subtitle: "Manejo integral del agua y el territorio.",
    image: "https://images.unsplash.com/photo-1437333028129-c14bb199f052?auto=format&fit=crop&q=80&w=1600",
    intro: "Asegure la disponibilidad del recurso hídrico mediante una gestión territorial científica.",
    paragraphs: [
      "Este programa se enfoca en el estudio de las cuencas como unidades básicas de gestión, integrando aspectos hidrológicos, ecológicos y socioeconómicos.",
      "Se enfatiza el uso de tecnologías de información geográfica (SIG) y modelamiento hidrológico para la toma de decisiones en contextos de variabilidad climática."
    ],
    features: [
      {
        title: "Líneas de Formación",
        items: [
          "Hidrología Avanzada y Modelamiento.",
          "Manejo de Suelos y Control de Erosión.",
          "Gobernanza del Agua y Conflictos Socioambientales.",
          "Adaptación al Cambio Climático en Cuencas."
        ]
      }
    ]
  },
  '/posgrado/doctorado': {
    title: "Doctorado en Ciencias Forestales",
    subtitle: "El más alto nivel de investigación científica.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600",
    intro: "Genere conocimiento original y transforme el sector forestal mediante la ciencia.",
    paragraphs: [
      "El programa de Doctorado está orientado a la formación de investigadores de excelencia, capaces de liderar proyectos de I+D+i y proponer soluciones innovadoras a problemas complejos de la ciencia forestal.",
      "Los doctorandos trabajan estrechamente con nuestros grupos de investigación en temas de biotecnología, ecología forestal, cambio global y tecnología de productos forestales."
    ],
    features: [
      {
        title: "Investigación Doctoral",
        items: [
          "Seminarios de Investigación Avanzada.",
          "Publicación en Revistas de Alto Impacto (Q1/Q2).",
          "Pasantías en Centros de Investigación Internacionales.",
          "Desarrollo de Tesis Doctoral Original."
        ]
      }
    ]
  },
  '/posgrado/diplomados': {
    title: "Diplomados y Especializaciones",
    subtitle: "Actualización profesional continua.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600",
    intro: "Programas cortos de alta especialización para profesionales del sector.",
    paragraphs: [
      "Ofrecemos diplomados diseñados para actualizar las competencias de ingenieros forestales, ambientales y profesionales afines en temas específicos de alta demanda laboral.",
      "Nuestros cursos son prácticos y cuentan con la participación de expertos invitados del sector público y privado."
    ],
    features: [
      {
        title: "Programas Disponibles",
        items: [
          "Diplomado en Sistemas de Información Geográfica (SIG).",
          "Diplomado en Valorización de Servicios Ecosistémicos.",
          "Especialización en Seguridad y Salud en el Trabajo Forestal.",
          "Diplomado en Gestión de Viveros y Plantaciones Forestales."
        ]
      }
    ]
  },
  '/publicaciones/articulos': {
    title: "Artículos Científicos",
    subtitle: "Investigaciones originales publicadas en revistas indexadas.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1600",
    intro: "Difundimos los resultados de nuestras investigaciones a la comunidad científica global.",
    paragraphs: [
      "Los docentes y estudiantes de la FCFA publican regularmente en revistas de alto impacto, contribuyendo al avance de las ciencias forestales y ambientales.",
      "Nuestra revista institucional 'Xilema' es el principal órgano de difusión de investigaciones locales y regionales."
    ],
    features: [
      {
        title: "Revistas Destacadas",
        items: [
          "Xilema (Revista de la Facultad).",
          "Revistas Indexadas en Scopus y Web of Science.",
          "Publicaciones en SciELO y Latindex.",
          "Boletines Técnicos de Investigación."
        ]
      }
    ],
    documents: [
      { title: "Revista Xilema Vol. 16 N°1 (2024)", size: "8.5 MB", date: "Jun 2024" },
      { title: "Guía para Autores - Revista Xilema", size: "0.5 MB", date: "Actualizado" }
    ]
  },
  '/publicaciones/libros': {
    title: "Libros de Investigación",
    subtitle: "Obras especializadas y textos universitarios.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=1600",
    intro: "Sistematizamos el conocimiento forestal en publicaciones de largo aliento.",
    paragraphs: [
      "La facultad promueve la edición de libros que sirven como base para la enseñanza y la consulta profesional en el sector forestal.",
      "Contamos con textos sobre dendrología, manejo de bosques, tecnología de la madera y gestión ambiental."
    ],
    features: [
      {
        title: "Colecciones Editoriales",
        items: [
          "Textos Universitarios Especializados.",
          "Manuales de Campo y Guías Técnicas.",
          "Monografías de Investigación.",
          "Memorias de Congresos y Eventos."
        ]
      }
    ],
    documents: [
      { title: "Libro: Dendrología de Especies Andinas", size: "12.4 MB", date: "Ago 2023" },
      { title: "Guía de Identificación de Madera", size: "4.2 MB", date: "Ene 2024" }
    ]
  },
  '/publicaciones/docentes-renacyt': {
    title: "Docentes RENACYT",
    subtitle: "Nuestros investigadores reconocidos por el CONCYTEC.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600",
    intro: "Excelencia en investigación reconocida a nivel nacional.",
    paragraphs: [
      "El Registro Nacional Científico, Tecnológico y de Innovación Tecnológica (RENACYT) califica a nuestros docentes por su destacada labor en investigación.",
      "Contamos con un número creciente de investigadores en diversas categorías, liderando proyectos de impacto nacional e internacional."
    ],
    features: [
      {
        title: "Categorías de Investigación",
        items: [
          "Investigadores en Nivel I, II, III, IV.",
          "Líderes de Grupos de Investigación.",
          "Asesores de Tesis de Posgrado.",
          "Evaluadores de Proyectos Nacionales."
        ]
      }
    ]
  },
  '/biblioteca/repositorio': {
    title: "Repositorio de la FCFA",
    subtitle: "Acceso abierto a la producción científica de nuestra facultad.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1600",
    intro: "Preservamos y difundimos el conocimiento generado por nuestros investigadores y estudiantes.",
    paragraphs: [
      "El Repositorio Digital de la Facultad de Ciencias Forestales y del Ambiente es una plataforma de acceso abierto que recopila, preserva y difunde la producción científica y académica (tesis, artículos, libros, informes técnicos) de nuestra comunidad.",
      "Nuestro objetivo es aumentar la visibilidad del conocimiento forestal generado en la UNCP y contribuir al desarrollo científico del país."
    ],
    features: [
      {
        title: "Colecciones",
        items: [
          "Tesis de Pregrado y Posgrado.",
          "Artículos de Investigación publicados.",
          "Libros y Capítulos de Libros.",
          "Informes Técnicos y Proyectos de Investigación."
        ]
      }
    ],
    documents: [
      { title: "Guía de Depósito en el Repositorio", size: "0.8 MB", date: "2024" },
      { title: "Manual de Estilo para Tesis", size: "1.2 MB", date: "Actualizado" }
    ]
  },
  '/biblioteca/virtual': {
    title: "Biblioteca Virtual",
    subtitle: "Recursos digitales globales a su alcance.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1600",
    intro: "Conéctese con las bases de datos científicas más importantes del mundo.",
    paragraphs: [
      "La Biblioteca Virtual de la UNCP ofrece acceso a una amplia gama de recursos electrónicos, incluyendo bases de datos de revistas científicas, libros electrónicos y herramientas de investigación.",
      "A través de convenios institucionales, nuestros estudiantes y docentes pueden consultar plataformas líderes como Scopus, ScienceDirect y SpringerLink desde cualquier lugar."
    ],
    features: [
      {
        title: "Bases de Datos Disponibles",
        items: [
          "ScienceDirect (Elsevier).",
          "Scopus (Base de datos de citas).",
          "SpringerLink (Revistas y libros).",
          "Taylor & Francis Online.",
          "EBSCOhost Research Databases."
        ]
      }
    ]
  },
  '/biblioteca/centro-informacion': {
    title: "Centro de Información Forestal",
    subtitle: "Especialización en datos y documentación forestal.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600",
    intro: "El núcleo de la documentación técnica forestal en la región central del Perú.",
    paragraphs: [
      "El Centro de Información Forestal (CIF) es una unidad especializada dedicada a la recopilación y análisis de información técnica, estadística y cartográfica relacionada con los recursos forestales.",
      "Brindamos servicios de consulta especializada para investigadores, empresas del sector y organismos gubernamentales interesados en el desarrollo forestal sostenible."
    ],
    features: [
      {
        title: "Servicios Especializados",
        items: [
          "Búsqueda bibliográfica especializada.",
          "Acceso a mapas y datos geoespaciales forestales.",
          "Estadísticas del sector forestal regional.",
          "Asesoría en gestión de información técnica."
        ]
      }
    ]
  },
  '/reclamaciones/libro': {
    title: "Libro de Reclamaciones UNCP",
    subtitle: "Canal oficial para el registro de quejas y reclamos.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
    intro: "Conforme a lo establecido en el Código de Protección y Defensa del Consumidor.",
    paragraphs: [
      "La Universidad Nacional del Centro del Perú pone a su disposición el Libro de Reclamaciones Virtual para que pueda registrar su queja o reclamo respecto a los servicios brindados.",
      "Una vez registrado, se le asignará un código de seguimiento y recibirá una respuesta en un plazo máximo de 15 días hábiles."
    ],
    features: [
      {
        title: "Instrucciones",
        items: [
          "Identifíquese correctamente con sus datos personales.",
          "Describa detalladamente el incidente ocurrido.",
          "Adjunte evidencias (fotos, documentos) si fuera necesario.",
          "Conserve su número de registro para futuras consultas."
        ]
      }
    ],
    documents: [
      { title: "Formulario de Reclamación (PDF)", size: "0.4 MB", date: "Actualizado" },
      { title: "Directiva de Atención al Usuario", size: "1.1 MB", date: "2024" }
    ]
  },
  '/reclamaciones/sugerencias': {
    title: "Buzón de Sugerencias",
    subtitle: "Su opinión nos ayuda a mejorar continuamente.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600",
    intro: "Queremos escucharlo. Sus ideas son fundamentales para nuestra excelencia académica.",
    paragraphs: [
      "El Buzón de Sugerencias es un espacio abierto para que estudiantes, docentes y público en general puedan proponer mejoras en nuestros procesos y servicios.",
      "Todas las sugerencias son revisadas por el equipo de Calidad y Acreditación para evaluar su implementación."
    ],
    features: [
      {
        title: "¿Qué puede sugerir?",
        items: [
          "Mejoras en la infraestructura y laboratorios.",
          "Optimización de trámites administrativos.",
          "Nuevos servicios bibliotecarios o digitales.",
          "Actividades extracurriculares y de bienestar."
        ]
      }
    ]
  },
  '/facultad/consejo/miembros': {
    title: "Miembros del Consejo de Facultad",
    subtitle: "Representantes de los estamentos docente y estudiantil.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
    intro: "El Consejo de Facultad es el órgano de gobierno de la Facultad, presidido por el Decano.",
    paragraphs: [
      "Está integrado por el Decano, representantes de los docentes (Principales, Asociados y Auxiliares) y representantes de los estudiantes (tercio estudiantil).",
      "Sus funciones incluyen aprobar los planes de estudio, proponer el presupuesto de la facultad, y velar por la calidad académica y administrativa."
    ],
    members: [
      {
        name: "Dr. Eloy Guillermo Vivas",
        role: "Presidente - Decano",
        degree: "Doctor en Ciencias Ambientales",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
      },
      {
        name: "Mg. Luis Alberto Tapia",
        role: "Representante Docente Principal",
        degree: "Magíster en Manejo de Cuencas",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300"
      }
    ]
  },
  '/facultad/consejo/actas': {
    title: "Actas de Consejo de Facultad",
    subtitle: "Registro oficial de las sesiones y acuerdos tomados.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
    intro: "Transparencia en la gestión: Acceda a los registros de las sesiones ordinarias y extraordinarias.",
    paragraphs: [
      "Las actas son el documento oficial donde se plasman las discusiones y decisiones del Consejo de Facultad.",
      "Aquí podrá encontrar el histórico de actas aprobadas durante el presente año académico."
    ],
    documents: [
      { title: "Acta de Sesión Ordinaria N° 005-2024", size: "1.2 MB", date: "15 May 2024" },
      { title: "Acta de Sesión Extraordinaria N° 002-2024", size: "0.8 MB", date: "02 May 2024" },
      { title: "Acta de Sesión Ordinaria N° 004-2024", size: "1.1 MB", date: "18 Abr 2024" }
    ]
  },
  '/facultad/consejo/resoluciones': {
    title: "Resoluciones de Facultad",
    subtitle: "Documentos normativos y disposiciones administrativas.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600",
    intro: "Disposiciones legales y administrativas emitidas por el Decanato y el Consejo de Facultad.",
    paragraphs: [
      "Las resoluciones formalizan los acuerdos del Consejo y las decisiones del Decanato para su cumplimiento obligatorio.",
      "Utilice el buscador para localizar resoluciones específicas por número o materia."
    ],
    documents: [
      { title: "Resolución de Facultad N° 124-2024-D-FCFA", size: "0.5 MB", date: "20 May 2024" },
      { title: "Resolución de Facultad N° 123-2024-D-FCFA", size: "0.4 MB", date: "18 May 2024" },
      { title: "Resolución de Facultad N° 122-2024-D-FCFA", size: "0.6 MB", date: "15 May 2024" }
    ]
  }
};
import React, { useState } from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';
import { 
  GraduationCap, 
  Download, 
  FileText, 
  CheckCircle2, 
  ClipboardList, 
  FileCheck, 
  Eye, 
  ExternalLink, 
  Table, 
  FolderOpen, 
  Info, 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  CreditCard,
  Printer,
  ChevronRight,
  BookOpen,
  FileDigit,
  AlertCircle
} from 'lucide-react';

const GradosTitulos: React.FC = () => {
  const content = PAGE_CONTENT['/dependencias/grados-titulos'];
  const [activeTab, setActiveTab] = useState<'bachiller' | 'titulo' | 'formatos'>('bachiller');
  const [showPdf, setShowPdf] = useState<boolean>(true);

  // Form states for the interactive simulated request generator
  const [studentName, setStudentName] = useState<string>('JUAN CARLOS GUERRERO PÉREZ');
  const [studentDni, setStudentDni] = useState<string>('45892174');
  const [studentAddress, setStudentAddress] = useState<string>('Av. Universitaria N° 320, El Tambo, Huancayo');
  const [studentPhone, setStudentPhone] = useState<string>('954781254');
  const [studentEmail, setStudentEmail] = useState<string>('jguerrero@uncp.edu.pe');

  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const requisitosBachiller = [
    {
      num: 1,
      title: "Solicitud dirigida al Decano",
      desc: "Incluir de manera obligatoria: Nombres completos y correctos, dirección domiciliaria actual, teléfono celular o fijo, correo electrónico y Nro. de DNI."
    },
    {
      num: 2,
      title: "04 Fotografías tamaño pasaporte",
      desc: "Medidas exactas de 4.5 cm. x 3.5 cm., a color, fondo blanco, damas y caballeros estrictamente con terno formal oscuro."
    },
    {
      num: 3,
      title: "Constancia de Egresado Original",
      desc: "Debe contar con las firmas y sellos correspondientes de las autoridades de la facultad."
    },
    {
      num: 4,
      title: "Certificado de Estudios Original",
      desc: "Con firmas, sellos correspondientes, control de calidad y visado que verifique el total de creditaje aprobado."
    },
    {
      num: 5,
      title: "Certificado de Prácticas Pre-profesionales",
      desc: "Original firmado por la entidad donde realizó las prácticas y validado con sellos de la facultad."
    },
    {
      num: 6,
      title: "Certificado de Proyección Social",
      desc: "Original que acredite la participación en proyectos aprobados de proyección social, con firmas y sellos correspondientes."
    },
    {
      num: 7,
      title: "Certificado Original de Ofimática",
      desc: "Validado por la Dirección General de Capacitación, Desarrollo y Formación Continua de la UNCP. (Exigido para ingresantes a partir del semestre académico 2011-II)."
    },
    {
      num: 8,
      title: "Aprobación y Sustentación de Trabajo de Investigación",
      desc: "Requisito obligatorio para ingresantes a partir del semestre 2015-II y egresados a partir del semestre 2024-I."
    },
    {
      num: 9,
      title: "Ficha de Matrícula del 1er. Semestre",
      desc: "Copia simple que debe contener de forma legible la fecha de matrícula inicial."
    },
    {
      num: 10,
      title: "Declaración Jurada Simple",
      desc: "Declaración de no tener antecedentes judiciales ni deudas con la institución. Usar el formato oficial."
    },
    {
      num: 11,
      title: "Constancia Única de No Adeudo (CUNA)",
      desc: "Original emitido por el sistema UNCP con antigüedad de vigencia no mayor de 6 meses."
    },
    {
      num: 12,
      title: "Recibos de Pago Correspondientes",
      desc: "Vouchers de pago originales por conceptos de CUNA, trámite de diploma de bachiller y ficha de estadística."
    },
    {
      num: 13,
      title: "Otros documentos específicos de la facultad",
      desc: "Constancia CEDIF y copia del Documento Nacional de Identidad (DNI) vigente."
    },
    {
      num: 14,
      title: "Resolución de Convalidación (Si aplica)",
      desc: "En caso de traslados (interno, externo) y egresados de segunda carrera, deberán adjuntar la resolución de convalidación de asignaturas y el cuadro de equivalencias en original."
    },
    {
      num: 15,
      title: "Carpeta digital de ARCHIVOS SUNEDU",
      desc: "Dispositivo de almacenamiento con los documentos escaneados en alta resolución y nombrados con la nomenclatura estándar obligatoria."
    }
  ];

  const requisitosTitulo = [
    {
      num: 1,
      title: "Solicitud dirigida al Decano",
      desc: "Debe contener de forma obligatoria: Nombres completos y correctos, dirección domiciliaria actual, número de teléfono, correo electrónico activo y número de DNI."
    },
    {
      num: 2,
      title: "04 Fotografías tamaño pasaporte",
      desc: "De 4.5 cm. x 3.5 cm., fondo blanco, de alta calidad, damas y caballeros formalmente vestidos con terno."
    },
    {
      num: 3,
      title: "Copia del Diploma de Bachiller",
      desc: "Fotocopia legible por ambos lados del diploma universitario."
    },
    {
      num: 4,
      title: "Documento de Certificación SUNEDU",
      desc: "Constancia o reporte impreso que certifique la debida inscripción y registro del Diploma de Bachiller en la plataforma de SUNEDU."
    },
    {
      num: 5,
      title: "Informe de originalidad del software antiplagio",
      desc: "Reporte de Turnitin con un porcentaje máximo de 20% de similitud, debidamente firmado por el asesor metodológico, con visto bueno del Director del Instituto de Investigación y sello de recepción de Decanatura."
    },
    {
      num: 6,
      title: "Declaración Jurada Simple",
      desc: "Declaración jurada de acuerdo al modelo oficial provisto por la facultad."
    },
    {
      num: 7,
      title: "Constancia Única de No Adeudo (CUNA)",
      desc: "Documento original emitido electrónicamente con vigencia no mayor a 6 meses."
    },
    {
      num: 8,
      title: "Informes positivos de los Revisores de Tesis",
      desc: "Documentos originales en papel membretado oficial de la facultad con el sello de recepción formal de la Decanatura."
    },
    {
      num: 9,
      title: "Informe de culminación de asesoramiento de tesis",
      desc: "Informe original del docente asesor en papel membretado oficial de la facultad con sello de recepción en la Decanatura."
    },
    {
      num: 10,
      title: "Constancia de inscripción de proyecto de tesis",
      desc: "Constancia actualizada de registro del proyecto para expedito de título profesional."
    },
    {
      num: 11,
      title: "Constancia de Egresado original",
      desc: "Copia original de la constancia emitida para el expedito del título."
    },
    {
      num: 12,
      title: "Copia de Matrícula del 1er. Semestre",
      desc: "Debe contener de forma legible la fecha oficial de su primera matrícula académica."
    },
    {
      num: 13,
      title: "Copia del Certificado de Estudios",
      desc: "Fotocopia legible del certificado oficial de estudios donde figuren firmas, sellos de calidad y total de créditos."
    },
    {
      num: 14,
      title: "Recibo de pago por derecho de Diploma de Título",
      desc: "Comprobante de pago emitido por tesorería."
    },
    {
      num: 15,
      title: "Recibo de pago por CUNA",
      desc: "Comprobante bancario por expedición de Constancia Única de No Adeudo."
    },
    {
      num: 16,
      title: "Recibo de pago por constancia de expedito",
      desc: "Comprobante por derechos administrativos de expedito."
    },
    {
      num: 17,
      title: "Recibo por derecho de trámite documentario",
      desc: "Tasa administrativa regular de trámite documentario."
    },
    {
      num: 18,
      title: "Recibo de pago por ficha de estadística",
      desc: "Tasa correspondiente al registro estadístico institucional."
    },
    {
      num: 19,
      title: "Constancia original de CEDIF",
      desc: "Documento probatorio de no adeudo al Centro de Información y Documentación Forestal."
    },
    {
      num: 20,
      title: "Copia legible del DNI",
      desc: "Fotocopia ampliada del documento de identidad vigente."
    },
    {
      num: 21,
      title: "Carpeta digital de ARCHIVOS SUNEDU",
      desc: "Estructura digital obligatoria grabada en formato específico y con la nomenclatura exacta provista en las directrices."
    }
  ];

  const tablaSuneduBachiller = [
    { doc: "Foto", ext: "JPG", name: "F010_ N° de DNI _B", ejemplo: "F010_45892174_B.jpg" },
    { doc: "Archivo del Trabajo de Investigación (Si aplica)", ext: "PDF", name: "T010_N° de DNI_B", ejemplo: "T010_45892174_B.pdf" },
    { doc: "Archivo de Constancia de Matrícula (Ficha)", ext: "PDF", name: "CM010_ N° de DNI_B", ejemplo: "CM010_45892174_B.pdf" },
    { doc: "Archivo de Constancia de Egresado", ext: "PDF", name: "CE010_ N° de DNI_B", ejemplo: "CE010_45892174_B.pdf" },
    { doc: "Certificado de Estudios", ext: "PDF", name: "CERT010_ N° de DNI_B", ejemplo: "CERT010_45892174_B.pdf" }
  ];

  const tablaSuneduTitulo = [
    { doc: "Foto", ext: "JPG", name: "F010_ N° de DNI _T", ejemplo: "F010_45892174_T.jpg" },
    { doc: "Archivo del Trabajo de Investigación (Tesis)", ext: "PDF", name: "T010_N° de DNI_T", ejemplo: "T010_45892174_T.pdf" },
    { doc: "Archivo de Constancia de Matrícula (Ficha)", ext: "PDF", name: "CM010_ N° de DNI_T", ejemplo: "CM010_45892174_T.pdf" },
    { doc: "Archivo de Constancia de Egresado", ext: "PDF", name: "CE010_ N° de DNI_T", ejemplo: "CE010_45892174_T.pdf" },
    { doc: "Certificado de Estudios", ext: "PDF", name: "CERT010_ N° de DNI_T", ejemplo: "CERT010_45892174_T.pdf" }
  ];

  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
    >
      <div className="space-y-12 max-w-6xl mx-auto">
        
        {/* Intro Alert Box */}
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 border border-emerald-100/50 dark:border-slate-800 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 text-emerald-700 dark:text-emerald-400 translate-x-4 translate-y-4">
            <GraduationCap size={160} />
          </div>
          <div className="relative space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-uncp rounded-full"></span>
              <span className="text-[10px] font-black text-uncp uppercase tracking-widest">
                Gestión Académica Oficial
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-snug m-0 text-justify">
              {content.intro}
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
              {content.paragraphs[0]}
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-justify m-0">
              {content.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/60 rounded-3xl border border-gray-150 dark:border-slate-800 w-fit mx-auto">
          <button
            onClick={() => setActiveTab('bachiller')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'bachiller'
                ? 'bg-uncp text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-800/50'
            }`}
          >
            <ClipboardList size={14} />
            Expedito de Bachiller
          </button>
          
          <button
            onClick={() => setActiveTab('titulo')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'titulo'
                ? 'bg-uncp text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-800/50'
            }`}
          >
            <FileCheck size={14} />
            Expedito de Título
          </button>

          <button
            onClick={() => setActiveTab('formatos')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'formatos'
                ? 'bg-uncp text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-800/50'
            }`}
          >
            <FileText size={14} />
            Formatos y Modelos
          </button>
        </div>

        {/* 1. TAB: EXPEDITO DE BACHILLER */}
        {activeTab === 'bachiller' && (
          <div className="space-y-12 animate-fadeIn">
            
            <div className="space-y-6">
              <div className="pb-3 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ClipboardList className="text-uncp" size={24} />
                  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Requisitos para Expedito de Bachiller
                  </h3>
                </div>
                <span className="text-[10px] font-black uppercase bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-150">
                  Bachiller Forestal
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requisitosBachiller.map((req) => (
                  <div 
                    key={req.num}
                    className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-5 rounded-3xl flex items-start gap-4 hover:shadow-sm transition-all"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-black text-xs shrink-0 border border-emerald-100">
                      {req.num.toString().padStart(2, '0')}
                    </span>
                    <div className="space-y-1 text-left">
                      <h4 className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {req.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                        {req.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SUNEDU Digital Folder Structure */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-gray-150 dark:border-slate-800 p-8 rounded-[36px] space-y-6">
              <div className="flex items-center gap-3">
                <FolderOpen className="text-uncp shrink-0" size={24} />
                <div className="text-left">
                  <h4 className="text-sm md:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 leading-none">
                    Estructura de Carpeta Digital: "ARCHIVOS SUNEDU"
                  </h4>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1.5">
                    Debe presentarse obligatoriamente con la siguiente nomenclatura de archivos
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-gray-150 dark:border-slate-800 bg-white dark:bg-slate-900">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase tracking-wider text-[10px] border-b border-gray-150 dark:border-slate-700">
                      <th className="p-4">Documento Original</th>
                      <th className="p-4">Grabado en:</th>
                      <th className="p-4 text-center">Nomenclatura Oficial del Archivo</th>
                      <th className="p-4">Ejemplo Práctico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 dark:divide-slate-800 text-gray-600 dark:text-gray-400">
                    {tablaSuneduBachiller.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="p-4 font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight">{row.doc}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-md font-black text-[9px] uppercase ${
                            row.ext === 'JPG' 
                              ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400' 
                              : 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400'
                          }`}>
                            {row.ext}
                          </span>
                        </td>
                        <td className="p-4 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 text-center bg-emerald-50/10 dark:bg-emerald-950/10">
                          {row.name}
                        </td>
                        <td className="p-4 font-mono text-[10px] text-gray-500">{row.ejemplo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-start gap-2 text-[10px] text-amber-600 dark:text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl text-justify">
                <Info size={16} className="shrink-0 text-amber-500" />
                <span>
                  <strong>Nota crítica de validación:</strong> Verifique que los archivos escaneados no excedan el peso máximo permitido y que la resolución de los PDF permita una lectura digital nítida para la validación automática por la plataforma SUNEDU.
                </span>
              </div>
            </div>

          </div>
        )}

        {/* 2. TAB: EXPEDITO DE TÍTULO */}
        {activeTab === 'titulo' && (
          <div className="space-y-12 animate-fadeIn">
            
            <div className="space-y-6">
              <div className="pb-3 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileCheck className="text-uncp" size={24} />
                  <h3 className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Requisitos para Expedito de Título Profesional
                  </h3>
                </div>
                <span className="text-[10px] font-black uppercase bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full border border-blue-150">
                  Ingeniero Forestal
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requisitosTitulo.map((req) => (
                  <div 
                    key={req.num}
                    className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 p-5 rounded-3xl flex items-start gap-4 hover:shadow-sm transition-all"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-black text-xs shrink-0 border border-blue-100">
                      {req.num.toString().padStart(2, '0')}
                    </span>
                    <div className="space-y-1 text-left">
                      <h4 className="text-xs md:text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                        {req.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed m-0 text-justify">
                        {req.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SUNEDU Digital Folder Structure */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-gray-150 dark:border-slate-800 p-8 rounded-[36px] space-y-6">
              <div className="flex items-center gap-3">
                <FolderOpen className="text-uncp shrink-0" size={24} />
                <div className="text-left">
                  <h4 className="text-sm md:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 leading-none">
                    Estructura de Carpeta Digital: "ARCHIVOS SUNEDU - TÍTULO"
                  </h4>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1.5">
                    Debe presentarse con la terminación "_T" obligatoria para títulos profesionales
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-gray-150 dark:border-slate-800 bg-white dark:bg-slate-900">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase tracking-wider text-[10px] border-b border-gray-150 dark:border-slate-700">
                      <th className="p-4">Documento Original</th>
                      <th className="p-4">Grabado en:</th>
                      <th className="p-4 text-center">Nomenclatura Oficial del Archivo</th>
                      <th className="p-4">Ejemplo Práctico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 dark:divide-slate-800 text-gray-600 dark:text-gray-400">
                    {tablaSuneduTitulo.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="p-4 font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight">{row.doc}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-md font-black text-[9px] uppercase ${
                            row.ext === 'JPG' 
                              ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400' 
                              : 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400'
                          }`}>
                            {row.ext}
                          </span>
                        </td>
                        <td className="p-4 font-mono text-[11px] text-blue-600 dark:text-blue-400 text-center bg-blue-50/10 dark:bg-blue-950/10">
                          {row.name}
                        </td>
                        <td className="p-4 font-mono text-[10px] text-gray-500">{row.ejemplo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-start gap-2 text-[10px] text-blue-600 dark:text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl text-justify">
                <Info size={16} className="shrink-0 text-blue-500" />
                <span>
                  <strong>Importante:</strong> El archivo "T010_N° de DNI_T" correspondiente a la Tesis de Ingeniería debe contener la versión final idéntica a la aprobada por el jurado evaluador, incluyendo las páginas de firmas correspondientes y la carátula oficial.
                </span>
              </div>
            </div>

          </div>
        )}

        {/* 3. TAB: FORMATOS Y MODELOS (PDF EMBEDDED) */}
        {activeTab === 'formatos' && (
          <div className="space-y-12 animate-fadeIn">
            
            {/* Interactive Request Form Generator */}
            <div className="bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800 rounded-[32px] p-6 md:p-8 space-y-8">
              <div className="text-left space-y-1">
                <span className="text-[10px] font-black bg-uncp/10 text-uncp px-3 py-1 rounded-full uppercase tracking-wider">
                  Herramienta Auxiliar
                </span>
                <h3 className="text-base md:text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0 pt-1">
                  Generador de Modelo de Solicitud de Expedito
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed m-0">
                  Rellene sus datos personales para previsualizar cómo debe redactarse la Solicitud Oficial (Requisito N° 1) dirigida a la Decanatura.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Nombres y Apellidos Completos</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input 
                      type="text" 
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value.toUpperCase())}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-gray-150 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-uncp dark:text-white"
                      placeholder="JUAN PEREZ"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Número de DNI</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input 
                      type="text" 
                      maxLength={8}
                      value={studentDni}
                      onChange={(e) => setStudentDni(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-gray-150 dark:border-slate-800 rounded-xl text-xs font-mono focus:outline-none focus:border-uncp dark:text-white"
                      placeholder="45892174"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Dirección Domiciliaria Actual</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input 
                      type="text" 
                      value={studentAddress}
                      onChange={(e) => setStudentAddress(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-gray-150 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-uncp dark:text-white"
                      placeholder="Calle Real N° 450"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Teléfono de Contacto</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input 
                      type="text" 
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-gray-150 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-uncp dark:text-white"
                      placeholder="999888777"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Correo Electrónico Institucional</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input 
                      type="email" 
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-gray-150 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-uncp dark:text-white"
                      placeholder="ejemplo@uncp.edu.pe"
                    />
                  </div>
                </div>
              </div>

              {/* Solicitud Sheet Mockup preview */}
              <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-slate-800 text-left font-sans text-[11px] leading-relaxed text-slate-800 dark:text-slate-300 max-w-3xl mx-auto shadow-inner relative overflow-hidden">
                <div className="absolute right-4 top-4 border border-red-500/20 bg-red-500/5 text-red-500 px-3 py-1 rounded text-[8px] font-mono uppercase tracking-widest">
                  DOCUMENTO MODELO PREELABORADO
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-col space-y-1 font-bold text-center border-b border-gray-200 dark:border-slate-800 pb-4">
                    <span className="text-xs tracking-wide">UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ</span>
                    <span className="text-[9px] text-gray-500">FACULTAD DE CIENCIAS FORESTALES Y DEL AMBIENTE</span>
                  </div>

                  <div className="flex justify-between font-mono text-[9px] text-gray-500">
                    <span>Área: Grados y Títulos FCFA</span>
                    <span>Código: SOL-GRAD-01</span>
                  </div>

                  <div className="space-y-1 font-bold text-right self-end ml-auto max-w-xs">
                    <p className="m-0">SOLICITA: Declarar Expedito para la obtención del Grado Académico de Bachiller / Título Profesional.</p>
                  </div>

                  <div className="space-y-1 font-bold">
                    <p className="m-0 uppercase">SEÑOR DECANO DE LA FACULTAD DE CIENCIAS FORESTALES Y DEL AMBIENTE:</p>
                  </div>

                  <div className="space-y-2">
                    <p className="m-0 text-justify">
                      Yo, <strong className="text-uncp">{studentName || "........................................................"}</strong>, con DNI N° <strong>{studentDni || "............"}</strong>, egresado de la Escuela Académico Profesional de Ingeniería Forestal, domiciliado en <strong>{studentAddress || "........................................................"}</strong>, con número telefónico <strong>{studentPhone || "............"}</strong> y correo institucional <strong>{studentEmail || "........................."}</strong>, ante usted con el debido respeto me presento y expongo:
                    </p>
                    <p className="m-0 text-justify">
                      Que, habiendo concluido satisfactoriamente mi plan curricular de estudios correspondiente y habiendo cumplido con todos los requisitos académicos y administrativos vigentes exigidos por la UNCP y la ley universitaria; recurro a su despacho para solicitar que se me declare <strong>EXPEDITO</strong> para la obtención del grado académico/título profesional respectivo.
                    </p>
                    <p className="m-0 text-justify">
                      Para tal efecto, adjunto a la presente la carpeta reglamentaria completa con los requisitos oficiales y la estructura digital de Archivos SUNEDU según las especificaciones vigentes de la facultad.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="m-0">Por lo expuesto:</p>
                    <p className="m-0 font-bold">A usted pido acceder a mi solicitud por ser de justicia.</p>
                  </div>

                  <div className="pt-8 flex flex-col items-center justify-center space-y-2">
                    <div className="w-48 border-b border-gray-400 dark:border-slate-700 h-1"></div>
                    <span className="font-bold uppercase text-[9px]">{studentName || "Firma del Solicitante"}</span>
                    <span className="text-[8px] text-gray-500 font-mono">DNI: {studentDni || "............"}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all"
                >
                  <Printer size={14} />
                  Imprimir Solicitud
                </button>
              </div>
            </div>

            {/* EMBEDDED PDF VIEWER SECTION */}
            <div className="space-y-6 pt-4">
              <div className="pb-2 border-b border-gray-150 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="text-uncp" size={22} />
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight m-0">
                    Guía de Trámites, Reglamentos y Formatos Oficiales (PDF)
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
                          Guía Completa de Grados y Títulos FCFA.pdf
                        </h4>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">
                          Manual Administrativo y Flujo de Trámites
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <a 
                        href={pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                      >
                        <ExternalLink size={12} />
                        Ver pantalla completa
                      </a>

                      <a 
                        href={pdfUrl} 
                        download
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                      >
                        <Download size={12} />
                        Descargar Guía
                      </a>
                    </div>
                  </div>

                  {/* PDF embed or simulated iframe fallback */}
                  <div className="relative aspect-[16/10] bg-slate-850 flex flex-col justify-between">
                    
                    {/* Embedded Iframe */}
                    <iframe 
                      src={`${pdfUrl}#toolbar=1&navpanes=1`} 
                      title="Guía Oficial de Grados y Títulos"
                      className="w-full h-full border-0 absolute inset-0 z-10"
                    />

                    {/* Fallback layout underneath */}
                    <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center space-y-6">
                      <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        <BookOpen size={48} className="animate-pulse text-emerald-400" />
                      </div>
                      <div className="space-y-2 max-w-lg">
                        <h5 className="text-sm md:text-base font-black text-white uppercase tracking-wider m-0">
                          Previsualización de Documento de Trámite
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                          Si su navegador no soporta la visualización directa de archivos PDF dentro de la página, puede descargarlo u obtenerlo en una pestaña independiente usando los siguientes botones oficiales:
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 justify-center">
                        <a 
                          href={pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all border border-slate-700"
                        >
                          <ExternalLink size={14} />
                          Nueva Pestaña
                        </a>
                        <a 
                          href={pdfUrl} 
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
                    <span>Código: RE-GRAD-T-2024</span>
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

export default GradosTitulos;

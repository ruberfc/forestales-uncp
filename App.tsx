import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

// Facultad
import Historia from './pages/Facultad/Historia';
import Autoridades from './pages/Facultad/Autoridades';
import Organigrama from './pages/Facultad/Organigrama';
import PlanaDocente from './pages/Facultad/PlanaDocente';
import ResolucionesDecanato from './pages/Facultad/ResolucionesDecanato';

// Misión, Visión, Política y Propósito
import Calidad from './pages/Facultad/MisionVisionPolitica/Calidad';
import Ambiental from './pages/Facultad/MisionVisionPolitica/Ambiental';
import Proposito from './pages/Facultad/MisionVisionPolitica/Proposito';

// Consejo de Facultad
import Miembros from './pages/Facultad/Consejo/Miembros';
import Actas from './pages/Facultad/Consejo/Actas';
import Resoluciones from './pages/Facultad/Consejo/Resoluciones';

// Pregrado
import Ingreso from './pages/Pregrado/PerfilEstudiante/Ingreso';
import Egreso from './pages/Pregrado/PerfilEstudiante/Egreso';
import MallaCurricular from './pages/Pregrado/MallaCurricular';
import PlanEstudios from './pages/Pregrado/PlanEstudios';
import Sumillas from './pages/Pregrado/Sumillas';
import CalendarioAcademico from './pages/Pregrado/CalendarioAcademico';

// Dependencias
import ProyeccionSocial from './pages/Dependencias/ProyeccionSocial';
import InvestigacionProyectos from './pages/Dependencias/InvestigacionProyectos';
import InvestigacionFlujograma from './pages/Dependencias/InvestigacionFlujograma';
import InvestigacionGuias from './pages/Dependencias/InvestigacionGuias';
import LaboratorioBiodiversidad from './pages/Dependencias/LaboratorioBiodiversidad';
import LaboratorioMadera from './pages/Dependencias/LaboratorioMadera';
import LaboratorioMedioAmbiente from './pages/Dependencias/LaboratorioMedioAmbiente';
import Herbario from './pages/Dependencias/Herbario';
import GradosTitulos from './pages/Dependencias/GradosTitulos';
import PlanificacionPOI from './pages/Dependencias/PlanificacionPOI';
import PlanificacionFODA from './pages/Dependencias/PlanificacionFODA';
import PlanificacionPEI from './pages/Dependencias/PlanificacionPEI';
import EstacionCasaBlanca from './pages/Dependencias/EstacionCasaBlanca';
import EstacionOxapampa from './pages/Dependencias/EstacionOxapampa';
import EstacionElMantaro from './pages/Dependencias/EstacionElMantaro';
import EstacionIncatoshi from './pages/Dependencias/EstacionIncatoshi';

// Otros
import AcreditacionProceso from './pages/Acreditacion/Proceso';
import AcreditacionGrupoInteres from './pages/Acreditacion/GrupoInteres';
import CalidadManual from './pages/Acreditacion/CalidadManual';
import CalidadRiesgos from './pages/Acreditacion/CalidadRiesgos';
import CalidadMapa from './pages/Acreditacion/CalidadMapa';
import PosgradoPresentacion from './pages/Posgrado/Presentacion';
import MaestriaEcoturismo from './pages/Posgrado/MaestriaEcoturismo';
import MaestriaGestionAmbiental from './pages/Posgrado/MaestriaGestionAmbiental';
import MaestriaCuencas from './pages/Posgrado/MaestriaCuencas';
import Doctorado from './pages/Posgrado/Doctorado';
import Diplomados from './pages/Posgrado/Diplomados';
import Articulos from './pages/Publicaciones/Articulos';
import Libros from './pages/Publicaciones/Libros';
import DocentesRenacyt from './pages/Publicaciones/DocentesRenacyt';
import CentroInformacion from './pages/Biblioteca/CentroInformacion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans selection:bg-uncp selection:text-white">
        <Header />
        <WhatsAppButton />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Rutas de Facultad */}
            <Route path="/facultad/historia" element={<Historia />} />
            <Route path="/facultad/autoridades" element={<Autoridades />} />
            <Route path="/facultad/organigrama" element={<Organigrama />} />
            <Route path="/facultad/plana-docente" element={<PlanaDocente />} />
            <Route path="/facultad/resoluciones-decanato" element={<ResolucionesDecanato />} />

            {/* Rutas de Misión, Visión, Política y Propósito */}
            <Route path="/facultad/mision-vision-politica/calidad" element={<Calidad />} />
            <Route path="/facultad/mision-vision-politica/ambiental" element={<Ambiental />} />
            <Route path="/facultad/mision-vision-politica/proposito" element={<Proposito />} />
            
            {/* Rutas de Consejo de Facultad */}
            <Route path="/facultad/consejo/miembros" element={<Miembros />} />
            <Route path="/facultad/consejo/actas" element={<Actas />} />
            <Route path="/facultad/consejo/resoluciones" element={<Resoluciones />} />
            
            {/* Rutas de Pregrado */}
            <Route path="/pregrado/perfil-estudiante/ingreso" element={<Ingreso />} />
            <Route path="/pregrado/perfil-estudiante/egreso" element={<Egreso />} />
            <Route path="/pregrado/malla-curricular" element={<MallaCurricular />} />
            <Route path="/pregrado/plan-estudios" element={<PlanEstudios />} />
            <Route path="/pregrado/sumillas" element={<Sumillas />} />
            <Route path="/pregrado/calendario-academico" element={<CalendarioAcademico />} />
            
            {/* Rutas de Dependencias */}
            {/* Dependencias */}
            <Route path="/dependencias/proyeccion-social" element={<ProyeccionSocial />} />
            <Route path="/dependencias/investigacion/proyectos" element={<InvestigacionProyectos />} />
            <Route path="/dependencias/investigacion/flujograma" element={<InvestigacionFlujograma />} />
            <Route path="/dependencias/investigacion/guias" element={<InvestigacionGuias />} />
            <Route path="/dependencias/laboratorios/biodiversidad" element={<LaboratorioBiodiversidad />} />
            <Route path="/dependencias/laboratorios/madera" element={<LaboratorioMadera />} />
            <Route path="/dependencias/laboratorios/medio-ambiente" element={<LaboratorioMedioAmbiente />} />
            <Route path="/dependencias/laboratorios/herbario" element={<Herbario />} />
            <Route path="/dependencias/grados-titulos" element={<GradosTitulos />} />
            <Route path="/dependencias/planificacion/poi" element={<PlanificacionPOI />} />
            <Route path="/dependencias/planificacion/foda" element={<PlanificacionFODA />} />
            <Route path="/dependencias/planificacion/pei" element={<PlanificacionPEI />} />
            <Route path="/dependencias/estaciones/casa-blanca" element={<EstacionCasaBlanca />} />
            <Route path="/dependencias/estaciones/oxapampa" element={<EstacionOxapampa />} />
            <Route path="/dependencias/estaciones/el-mantaro" element={<EstacionElMantaro />} />
            <Route path="/dependencias/estaciones/incatoshi" element={<EstacionIncatoshi />} />

            {/* Rutas Principales */}
            <Route path="/acreditacion/proceso" element={<AcreditacionProceso />} />
            <Route path="/acreditacion/grupo-interes" element={<AcreditacionGrupoInteres />} />
            <Route path="/acreditacion/calidad/manual" element={<CalidadManual />} />
            <Route path="/acreditacion/calidad/riesgos-oportunidades" element={<CalidadRiesgos />} />
            <Route path="/acreditacion/calidad/mapa-procesos" element={<CalidadMapa />} />
            <Route path="/posgrado/presentacion" element={<PosgradoPresentacion />} />
            <Route path="/posgrado/maestrias/ecoturismo" element={<MaestriaEcoturismo />} />
            <Route path="/posgrado/maestrias/gestion-ambiental" element={<MaestriaGestionAmbiental />} />
            <Route path="/posgrado/maestrias/cuencas-hidrograficas" element={<MaestriaCuencas />} />
            <Route path="/posgrado/doctorado" element={<Doctorado />} />
            <Route path="/posgrado/diplomados" element={<Diplomados />} />
            <Route path="/publicaciones/articulos" element={<Articulos />} />
            <Route path="/publicaciones/libros" element={<Libros />} />
            <Route path="/publicaciones/docentes-renacyt" element={<DocentesRenacyt />} />
            <Route path="/biblioteca/centro-informacion" element={<CentroInformacion />} />
            
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
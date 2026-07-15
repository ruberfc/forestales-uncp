import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            La Facultad de Ciencias Forestales y del Ambiente es una institución líder en la formación de profesionales capaces de gestionar sosteniblemente los recursos naturales.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop" 
              alt="Misión" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-l-4 border-forest-500">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Formar profesionales de alto nivel académico, científico y humanístico en ciencias forestales y ambientales; generando conocimientos a través de la investigación y promoviendo el desarrollo sostenible de la sociedad y la conservación del medio ambiente.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-l-4 border-forest-500 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Visión</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ser reconocida nacional e internacionalmente como una facultad líder en la formación de profesionales, investigación e innovación tecnológica en el sector forestal y ambiental, contribuyendo al bienestar de la sociedad.
              </p>
            </div>
          </div>
        </div>

        {/* Dean Message */}
        <div className="bg-forest-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-forest-400 flex-shrink-0">
               <img src="https://picsum.photos/300/300?grayscale" alt="Decano" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Mensaje del Decano</h3>
              <p className="text-forest-200 italic mb-4">Dr. Juan Pérez (Simulado)</p>
              <p className="text-gray-200 leading-relaxed">
                "Bienvenidos a nuestra casa de estudios. Aquí cultivamos no solo árboles, sino el futuro de nuestro planeta. Nuestros estudiantes son los guardianes de la biodiversidad y los arquitectos de un mundo más verde y sostenible. Los invitamos a ser parte de esta noble misión."
              </p>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-forest-700 rounded-full opacity-50 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
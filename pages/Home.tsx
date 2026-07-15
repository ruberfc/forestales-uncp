import { useEffect, useRef, Fragment } from 'react';
import Hero from '../components/Hero';
import { STATS, SERVICES, NEWS } from '../constants';


import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Landmark, 
  Sprout, 
  Building2, 
  Award, 
  Target, 
  Zap, 
  CheckCircle,
  Quote,
  Star,
  Users,
  Handshake
} from 'lucide-react';
import VisitorCounter from '@/components/VisitorCounter';

const Home = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const partnerLogos = [
    { icon: ShieldCheck, name: "SERFOR", color: "group-hover:text-uncp" },
    { icon: Landmark, name: "MINAM", color: "group-hover:text-blue-500" },
    { icon: Sprout, name: "INIA", color: "group-hover:text-green-600" },
    { icon: Building2, name: "GORE JUNÍN", color: "group-hover:text-yellow-600" },
    { icon: Award, name: "SINEACE", color: "group-hover:text-red-500" },
    { icon: Handshake, name: "FAO PERÚ", color: "group-hover:text-sky-600" },
  ];

  return (
    <main className="overflow-x-hidden bg-white dark:bg-slate-900">
      <Hero />

      <VisitorCounter />
      
      {/* Stats Section */}
      <section className="relative z-20 py-20 px-4 bg-gray-50 dark:bg-slate-950/30">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {STATS.map((stat, index) => (
              <div 
                key={index} 
                ref={addToRefs}
                className="reveal-hidden bg-white dark:bg-[#050a15] p-8 lg:p-10 rounded-[2.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-white/5 flex flex-col items-center text-center transform hover:-translate-y-3 transition-all duration-500 group"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-uncp/10 dark:bg-uncp/20 flex items-center justify-center text-uncp group-hover:bg-uncp group-hover:text-white transition-all duration-300">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-white mb-2 font-heading tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
                <div className="w-10 h-1.5 bg-yellow-400 mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essence Section */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-900">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-uncp/5 -skew-x-12 transform origin-right"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 reveal-hidden" ref={addToRefs}>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" alt="Bosque UNCP" className="w-full h-[500px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-uncp-dark/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-4xl font-black mb-0">60+</p>
                    <p className="text-sm font-bold uppercase tracking-widest">Años de Liderazgo</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl max-w-xs border border-gray-100 dark:border-slate-700 animate-float">
                  <Quote className="text-uncp mb-4" size={32} />
                  <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed">
                    "Nuestra misión va más allá de los libros; cultivamos conciencia para el futuro del planeta."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal-hidden" ref={addToRefs}>
              <span className="text-uncp font-black text-sm uppercase tracking-widest mb-4 block">Nuestra Esencia</span>
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-800 dark:text-white mb-8 leading-tight">
                Pioneros en la Ingeniería del <span className="text-gradient">Futuro Sostenible</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>Desde 1961, la Facultad de Ciencias Forestales y del Ambiente ha sido el motor científico de la región central del Perú.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[ { icon: Award, text: "Excelencia Acreditada SINEACE" }, { icon: Target, text: "Enfoque en Bioeconomía" } ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="bg-uncp/10 p-2 rounded-lg text-uncp group-hover:scale-110 transition-transform"><item.icon size={20} /></div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <button className="bg-uncp text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-uncp-dark transition-all transform hover:-translate-y-1 flex items-center gap-3 uppercase text-sm tracking-widest">
                    Conoce nuestra Historia <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50 dark:bg-[#050a15] relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-uncp/10 dark:bg-uncp/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
          <div className="reveal-hidden" ref={addToRefs}>
            <span className="text-uncp font-black text-xs uppercase tracking-[0.3em] mb-4 block">Nuestras Alianzas</span>
            <h2 className="text-3xl lg:text-5xl font-heading font-black text-slate-800 dark:text-white mb-6">
              Red de Cooperación <span className="text-uncp italic tracking-tighter">Interinstitucional</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Trabajamos de la mano con los organismos más influyentes del sector ambiental para garantizar la inserción laboral y el desarrollo de investigaciones de impacto nacional.
            </p>
          </div>
        </div>

        <div className="relative marquee-mask">
          <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 py-8">
            {[...Array(3)].map((_, setIdx) => (
              <Fragment key={setIdx}>
                {partnerLogos.map((p, i) => (
                  <div key={`${setIdx}-${i}`} className="flex flex-col items-center gap-5 group cursor-default min-w-[140px]">
                    <div className={`p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl dark:group-hover:shadow-[0_0_40px_rgba(101,163,13,0.3)] group-hover:border-uncp/30 group-hover:-translate-y-1 ${p.color} text-slate-400 dark:text-gray-500`}>
                      <p.icon size={52} strokeWidth={1.2} />
                    </div>
                    <span className="text-[11px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em] group-hover:text-uncp dark:group-hover:text-white transition-colors text-center">
                      {p.name}
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center relative z-10 reveal-hidden" ref={addToRefs}>
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm text-xs font-bold text-slate-500 dark:text-gray-400">
            <Handshake size={18} className="text-uncp" />
            <span>¿Interesado en establecer un convenio?</span>
            <a href="#" className="text-uncp dark:text-white font-black hover:underline underline-offset-4 ml-2 transition-all">Escríbenos aquí</a>
          </div>
        </div>
      </section>

      {/* Services/Programs Section */}
      <section className="py-24 bg-white dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 reveal-hidden" ref={addToRefs}>
            <h2 className="text-3xl lg:text-5xl font-heading font-black text-slate-800 dark:text-white mb-4">Nuestros Pilares Académicos</h2>
            <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <div key={index} ref={addToRefs} className="reveal-hidden bg-white dark:bg-slate-800 rounded-[32px] p-10 shadow-lg dark:shadow-none border border-gray-50 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-uncp/10 dark:bg-uncp/20 rounded-2xl flex items-center justify-center text-uncp mb-8 group-hover:bg-uncp group-hover:text-white transition-all duration-300">
                    <service.icon size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm">{service.description}</p>
                  <a href="#" className="inline-flex items-center gap-3 text-uncp font-black hover:text-uncp-dark transition-all text-xs uppercase tracking-widest">
                    Ver programa completo <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 reveal-hidden" ref={addToRefs}>
            <div>
              <span className="text-uncp font-black text-xs uppercase tracking-widest mb-4 block">Canal de Noticias</span>
              <h2 className="text-3xl lg:text-5xl font-heading font-black text-slate-800 dark:text-white leading-tight">Actualidad <span className="text-gradient">Forestal</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {NEWS.map((item) => (
              <article key={item.id} ref={addToRefs} className="reveal-hidden group bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-uncp text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">{item.category}</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4"><Calendar size={14} className="text-uncp" /><span>{item.date}</span></div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white mb-4 group-hover:text-uncp transition-colors line-clamp-2 leading-tight">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">{item.description}</p>
                  <a href="#" className="flex items-center gap-2 text-uncp font-black text-xs uppercase tracking-widest hover:gap-4 transition-all">Leer artículo <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Call to Action */}
      <section className="py-24 relative overflow-hidden bg-uncp">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto reveal-hidden" ref={addToRefs}>
            <h2 className="text-4xl lg:text-6xl font-heading font-black text-white mb-8 leading-tight uppercase">¿Listo para transformar el <span className="text-yellow-400">Medio Ambiente</span>?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-uncp-dark font-black px-12 py-5 rounded-2xl shadow-2xl hover:bg-yellow-400 hover:text-white transition-all uppercase text-sm tracking-widest">Postular Ahora</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
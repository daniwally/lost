import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Lenis from 'lenis';
import { ArrowRight, Target, Compass, Rocket, CheckCircle2, Mail, Clock, FileText, Globe, Users } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const AnimatedSection = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.pexels.com/photos/2440529/pexels-photo-2440529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Wine cellar with barrels"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 to-transparent" />
    </div>
    
    <div className="absolute top-8 left-6 md:left-12 lg:left-24 z-20">
      <img 
        src="https://customer-assets.emergentagent.com/job_editorial-impact-2/artifacts/ppybzi5e_logo-wtf.png" 
        alt="WTF Agency - Brief Destroyers"
        className="h-14 md:h-[72px] w-auto"
      />
    </div>
    
    <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase mb-4 block">
          WTF Agency presenta
        </span>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-text-primary tracking-tight mb-6">
          LOST<br />ATELIER
        </h1>
        <div className="h-[1px] w-32 bg-gradient-to-r from-gold-400 to-transparent mb-6" />
        <p className="font-body text-lg md:text-xl text-text-secondary max-w-lg mb-8">
          Propuesta de Consultoría Estratégica para redefinir el posicionamiento y expansión internacional de la marca.
        </p>
        <motion.a
          href="#diagnostico"
          className="inline-flex items-center gap-3 bg-gold-400 text-background px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-gold-300 transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          Descubrir la propuesta
          <ArrowRight size={16} />
        </motion.a>
      </motion.div>
    </div>
    
    <motion.div 
      className="absolute bottom-8 right-8 md:right-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-widest text-text-secondary uppercase rotate-90 origin-center translate-x-8">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400 to-transparent" />
      </div>
    </motion.div>
  </section>
);

const DiagnosisSection = () => (
  <AnimatedSection className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface" id="diagnostico">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5">
          <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase mb-4 block">
            01 — Diagnóstico
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-text-primary mb-6">
            El Problema
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-[1px] w-24 bg-gold-400/50 mb-8" />
        </div>
        
        <div className="md:col-span-7">
          <motion.p variants={fadeInUp} className="font-body text-xl md:text-2xl text-text-primary leading-relaxed mb-8">
            Lost Atelier no tiene un problema de producto.<br />
            <span className="text-gold-400">Tiene un problema de comunicación.</span>
          </motion.p>
          
          <motion.div variants={fadeInUp} className="space-y-6 border-l border-wine-900 pl-6">
            <p className="text-text-secondary leading-relaxed">
              Hoy se percibe como "muebles de madera reciclada" cuando en realidad es <strong className="text-text-primary">lujo accesible con identidad propia</strong>.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Cada pieza de Lost Atelier está hecha con barricas de roble de las bodegas de Mendoza. No es reciclaje — es <strong className="text-text-primary">patrimonio transformado en arte para habitar</strong>.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-12 p-6 bg-surface-highlight/50 backdrop-blur-sm border border-white/5">
            <p className="font-display text-lg text-gold-400 italic">
              "El mueble es un objeto con pasado. El precio se justifica por la unicidad. Nunca dos piezas iguales."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const ValueSection = () => (
  <AnimatedSection className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-30">
      <img 
        src="https://images.pexels.com/photos/5711209/pexels-photo-5711209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Artisan woodworking workshop"
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6 md:col-start-7">
          <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase mb-4 block">
            02 — La Solución
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-text-primary mb-8">
            Artesanía<br />con Alma
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-text-secondary text-lg leading-relaxed mb-10">
            Nuestra propuesta es definir una plataforma estratégica que comunique lo que Lost Atelier realmente es: objetos artesanales que convierten el tiempo y la madera de una bodega en piezas únicas para habitar.
          </motion.p>
          
          <motion.div variants={staggerContainer} className="space-y-4">
            {[
              'Posicionamiento claro y diferenciador',
              'Arquitectura de audiencias',
              'Territorios de contenido',
              'Plan de expansión internacional',
              'Roadmap de 6 meses'
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/5 hover:border-gold-400/30 transition-colors"
              >
                <CheckCircle2 className="text-gold-400 flex-shrink-0" size={20} />
                <span className="text-text-primary">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const MethodologySection = () => {
  const phases = [
    {
      icon: <Target size={24} />,
      number: '01',
      title: 'Inmersión',
      weeks: 'Semanas 1-2',
      items: ['Brief profundo', 'Investigación de mercado local e internacional', 'Análisis competitivo', 'Entrevistas con clientes B2B']
    },
    {
      icon: <Compass size={24} />,
      number: '02',
      title: 'Construcción',
      weeks: 'Semanas 3-4',
      items: ['Desarrollo de posicionamiento', 'Propuesta de valor', 'Arquitectura de audiencias', 'Mensajes clave y territorios de contenido', 'Primera revisión con cliente']
    },
    {
      icon: <Rocket size={24} />,
      number: '03',
      title: 'Estrategia Internacional',
      weeks: 'Semanas 5-6',
      items: ['Análisis de mercados (Brasil, USA, Europa)', 'Identificación de canales y socios', 'Mapeo de oportunidades comerciales', 'Roadmap de 6 meses', 'Entrega final']
    }
  ];

  return (
    <AnimatedSection className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface" id="metodologia">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase mb-4 block">
            03 — Metodología
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-text-primary mb-4">
            45 Días de Trabajo
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary text-lg max-w-2xl mx-auto">
            Un proceso estructurado para construir una plataforma estratégica lista para activar.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/5 hover:border-gold-400/30 transition-all duration-500 group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold-400 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-background">{phase.number}</span>
              </div>
              
              <div className="text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {phase.icon}
              </div>
              
              <h3 className="font-display text-2xl text-text-primary mb-2">{phase.title}</h3>
              <span className="font-mono text-xs text-gold-400 tracking-wide">{phase.weeks}</span>
              
              <div className="h-[1px] w-full bg-white/10 my-6" />
              
              <ul className="space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-gold-400 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const InvestmentSection = () => (
  <AnimatedSection className="py-24 md:py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="inversion">
    <div className="absolute inset-0 z-0 opacity-10">
      <img 
        src="https://images.unsplash.com/photo-1736506159893-22cca29b8018?crop=entropy&cs=srgb&fm=jpg&q=85"
        alt="Wood texture"
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center">
        <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase mb-6 block">
          04 — Inversión
        </motion.span>
        
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="font-mono text-lg text-text-secondary">USD</span>
          <h2 className="font-display text-7xl md:text-9xl font-bold text-text-primary tracking-tight">
            12,000
          </h2>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="h-[1px] w-32 bg-gold-400 mx-auto mb-8" />
        
        <motion.p variants={fadeInUp} className="text-text-secondary text-lg max-w-xl mx-auto mb-12">
          Incluye todo el proceso de consultoría estratégica de 45 días, desde la inmersión hasta la entrega del roadmap completo.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: <Clock size={20} />, label: '45 días de trabajo' },
            { icon: <FileText size={20} />, label: 'Entregables completos' },
            { icon: <Globe size={20} />, label: 'Estrategia internacional' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 p-4 border border-white/10">
              <span className="text-gold-400">{item.icon}</span>
              <span className="text-text-secondary text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

const DeliverablesSection = () => {
  const deliverables = [
    'Documento de posicionamiento estratégico',
    'Propuesta de valor y mensajes clave',
    'Mapa de audiencias y buyer personas',
    'Sistema de territorios de contenido',
    'Tono de voz y guía de comunicación',
    'Análisis de mercados internacionales',
    'Estrategia de entrada por mercado',
    'Roadmap de implementación (6 meses)',
    'Oportunidades comerciales identificadas'
  ];

  return (
    <AnimatedSection className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface" id="entregables">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase mb-4 block">
              05 — Entregables
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-text-primary mb-6">
              ¿Qué<br />recibes?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed">
              Una plataforma estratégica completa, lista para activar. Todo lo que necesitas para comunicar el verdadero valor de Lost Atelier.
            </motion.p>
          </div>
          
          <div className="md:col-span-8">
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-5 border border-white/5 hover:border-gold-400/30 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="font-mono text-xs text-gold-400">0{i + 1}</span>
                  <span className="text-text-primary text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ContactSection = () => (
  <AnimatedSection className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative" id="contacto">
    <div className="max-w-4xl mx-auto text-center">
      <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase mb-6 block">
        Siguiente Paso
      </motion.span>
      
      <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl text-text-primary mb-8">
        ¿Comenzamos?
      </motion.h2>
      
      <motion.p variants={fadeInUp} className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
        Esta propuesta es el primer paso para transformar cómo el mundo ve Lost Atelier. Estamos listos para empezar cuando tú lo estés.
      </motion.p>
      
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <motion.a
          href="mailto:wally@wtf-agency.com?subject=Lost%20Atelier%20-%20Propuesta%20Aceptada"
          className="inline-flex items-center gap-3 bg-gold-400 text-background px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-gold-300 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail size={18} />
          Acepto la propuesta
        </motion.a>
        
        <a
          href="mailto:wally@wtf-agency.com?subject=Lost%20Atelier%20-%20Consulta"
          className="inline-flex items-center gap-3 border border-gold-400 text-gold-400 px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-gold-400 hover:text-background transition-all duration-300"
        >
          Tengo preguntas
        </a>
      </motion.div>
      
      <motion.div variants={fadeInUp} className="mt-16 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-text-secondary text-sm">
          <div className="flex items-center gap-3">
            <Users size={16} className="text-gold-400" />
            <span>Wally — WTF Agency</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-gold-400" />
            <a href="mailto:wally@wtf-agency.com" className="hover:text-gold-400 transition-colors">
              wally@wtf-agency.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

const Footer = () => (
  <footer className="bg-black">
    {/* About WTF Section */}
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <a href="https://www.wtf-agency.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://customer-assets.emergentagent.com/job_editorial-impact-2/artifacts/ppybzi5e_logo-wtf.png" 
                alt="WTF Agency"
                className="h-14 w-auto mb-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <h3 className="font-display text-2xl text-text-primary mb-4">Brief Destroyers</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              No somos una agencia. Somos un sistema. Construimos plataformas, sistemas creativos y ecosistemas de contenido que se adaptan, aprenden y escalan.
            </p>
            <p className="text-text-secondary text-sm mb-6">
              <span className="text-gold-400 font-semibold">15+ años</span> de experiencia • <span className="text-gold-400 font-semibold">6 oficinas</span> en Latam y España • <span className="text-gold-400 font-semibold">50+ células</span> creativas
            </p>
            <a 
              href="https://www.wtf-agency.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors font-mono text-sm tracking-wide"
            >
              www.wtf-agency.com
              <span>→</span>
            </a>
          </div>
          
          <div>
            <h4 className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase mb-6">Marcas que confían en nosotros</h4>
            <img 
              src="https://customer-assets.emergentagent.com/job_editorial-impact-2/artifacts/egvmmayy_szya9zmc_Screenshot%202026-02-02%20at%2012.03.04%E2%80%AFPM.png"
              alt="Clientes: Honda, Ford, Peugeot, Motorola, Lenovo, Samsung, Absolut, Beefeater, Chivas, Quilmes, Mumm y más"
              className="w-full rounded opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
    
    {/* Footer bottom */}
    <div className="px-6 md:px-12 lg:px-24 py-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-text-secondary">
          © 2025 WTF Agency — Propuesta confidencial para Lost Atelier
        </span>
        <span className="font-display text-sm text-gold-400">
          Artesanía con alma
        </span>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <DiagnosisSection />
      <ValueSection />
      <MethodologySection />
      <InvestmentSection />
      <DeliverablesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

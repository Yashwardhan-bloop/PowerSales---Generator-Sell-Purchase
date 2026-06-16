import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

// Images from the provided catalogue list
const heroImages = [
  "https://drive.google.com/thumbnail?id=1fR8G4JxcT4Zma6KaXIjRrDYPz7LhoQFw&sz=w1920",
  "https://drive.google.com/thumbnail?id=1LbEOi-ciuAVWCjwP-AJg_0JaecgEVE_x&sz=w1920",
  "https://drive.google.com/thumbnail?id=1LtoqNPkbeEhI-TtCSule01uVjjaXlw3U&sz=w1920",
  "https://drive.google.com/thumbnail?id=16UX2sH7iQh32LXnfL5d4YK5Ibd82eWjC&sz=w1920",
  "https://drive.google.com/thumbnail?id=1bZy8AJWVN4pRXewPsyhhSevN0SNvIfsN&sz=w1920",
  "https://drive.google.com/thumbnail?id=1wHvYgvVzhdkX9PLp0yZ1K08R_qZn2xfI&sz=w1920"
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
        const offset = 100; // Height of fixed navbar + extra padding
        const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Slideshow */}
      <AnimatePresence mode='popLayout'>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img 
            src={heroImages[currentImage]} 
            alt="Industrial Generator" 
            className="w-full h-full object-cover brightness-[0.8]" 
          />
          {/* Dark Overlay for text contrast */}
          <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/80"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 hidden md:flex items-center justify-center group"
      >
        <ChevronLeft size={32} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 hidden md:flex items-center justify-center group"
      >
        <ChevronRight size={32} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center pt-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 px-6 py-2 rounded-full text-sm font-bold mb-8 flex items-center gap-2 backdrop-blur-md shadow-sm"
        >
          <Zap size={16} className="fill-current text-brand-gold" />
          <span className="tracking-wide uppercase">Powering Industries Since 2005</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-[7rem] font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-lg font-poppins"
        >
          Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-accent">Sales</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-slate-100 max-w-3xl mb-10 font-medium leading-relaxed drop-shadow-md"
        >
          Your trusted partner for premium generator solutions in Ghaziabad & NCR. 
          <br className="hidden md:block"/>
          Specializing in 62 KVA to 2000 KVA capacities for industrial needs.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#catalogue"
            onClick={(e) => handleSmoothScroll(e, '#catalogue')}
            className="group bg-brand-primary hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/30 hover:-translate-y-1"
          >
            Explore Inventory
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#appointment"
            onClick={(e) => handleSmoothScroll(e, '#appointment')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-lg backdrop-blur-md hover:-translate-y-1"
          >
            Book Appointment
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-16 flex flex-wrap justify-center gap-8 text-white font-bold"
        >
            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="text-emerald-400" /> 24/7 Support
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="text-emerald-400" /> Best Market Prices
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="text-emerald-400" /> Verified Units
            </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex gap-2 z-20">
            {heroImages.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImage ? 'w-8 bg-emerald-500' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
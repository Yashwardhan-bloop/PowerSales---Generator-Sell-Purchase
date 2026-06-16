import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        setIsOpen(false); // Close mobile menu if open
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Contact', href: '#contact' },
  ];

  // Adjust text color based on scroll state
  // Unscrolled (transparent bg) -> White text (because Hero is dark)
  // Scrolled (white bg) -> Dark text
  const textColorClass = scrolled ? 'text-slate-800' : 'text-white';
  const hoverColorClass = scrolled ? 'hover:text-brand-primary' : 'hover:text-emerald-300';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-emerald-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className={`transition-all duration-300 ${scrolled ? '' : 'bg-white rounded-lg p-2 shadow-lg'}`}>
              <img 
                src="https://drive.google.com/thumbnail?id=1pu3EGhXFTyYUB9Cc8hcs8fHASAA8KXgl&sz=w1000" 
                alt="Power Sales Logo" 
                className="h-12 w-auto object-contain" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('drive.google.com')) {
                      target.src = 'https://placehold.co/200x80?text=POWER+SALES';
                  }
                }}
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`${textColorClass} ${hoverColorClass} px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-sm`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment"
                onClick={(e) => handleSmoothScroll(e, '#appointment')}
                className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg ${scrolled ? 'bg-brand-primary text-white hover:bg-emerald-700 shadow-emerald-500/20' : 'bg-white text-brand-primary hover:bg-emerald-50 shadow-white/20'}`}
              >
                Book Appointment
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColorClass} hover:bg-white/10 focus:outline-none transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-emerald-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-slate-800 hover:text-brand-primary hover:bg-emerald-50 block px-4 py-3 rounded-lg text-base font-bold transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a 
                href="#appointment"
                onClick={(e) => handleSmoothScroll(e, '#appointment')}
                className="w-full mt-4 bg-brand-primary text-white px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                Book Appointment
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
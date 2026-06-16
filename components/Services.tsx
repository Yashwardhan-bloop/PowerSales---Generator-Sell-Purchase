import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Generator Sales",
    image: "https://drive.google.com/thumbnail?id=1GKuWr2VuJ4uCtMneUy8nPdquBVTs7yjC&sz=w1000",
    desc: "Brand new and refurbished generators tailored to your load requirements.",
    range: "62 KVA - 2000 KVA",
    link: "#catalogue"
  },
  {
    title: "Generator Purchase",
    image: "https://drive.google.com/thumbnail?id=1BNa1TyfLS5lEgbwYGWikYm5Wwyv5vuby&sz=w1000",
    desc: "We buy your used generators at the best market rates. Fair evaluation guaranteed.",
    range: "Any Condition",
    link: "#contact"
  },
  {
    title: "Generator Rental",
    image: "https://drive.google.com/thumbnail?id=1QSidjxeo4AHvFmOaLzicapGgyO08MqLJ&sz=w1000",
    desc: "Flexible rental plans for construction sites, events, and corporate backup.",
    range: "Daily / Monthly / Yearly",
    link: "#catalogue"
  },
  {
    title: "Operator On Demand",
    image: "https://drive.google.com/thumbnail?id=1k0xCaRX64fEppZG6e6MQKp5fjyz3zQ2X&sz=w1000",
    desc: "Skilled generator operators available for short-term or long-term shifts to manage your power backup.",
    range: "Daily / Monthly",
    link: "#contact"
  },
  {
    title: "Maintenance Services",
    image: "https://drive.google.com/thumbnail?id=1p7An1By3T-fCw5lat6LASdN-dJkiQqBB&sz=w1000",
    desc: "On-demand repair, troubleshooting, and regular maintenance services to ensure uninterrupted power.",
    range: "On-Call / AMC",
    link: "#contact"
  }
];

const Services: React.FC = () => {

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
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-green-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Core Services</h2>
          <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="w-full max-w-sm group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-slate-100 flex flex-col">
              {/* Header with Image */}
              <div className="w-full h-56 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                   {/* Overlay content if needed */}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 w-full flex-grow flex flex-col text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-xs font-bold text-emerald-700 mb-6 border border-emerald-100 self-center">
                  {service.range}
                </span>
                <p className="text-slate-600 mb-8 flex-grow">
                  {service.desc}
                </p>
                <a 
                  href={service.link}
                  onClick={(e) => handleSmoothScroll(e, service.link)}
                  className="inline-flex items-center justify-center text-brand-primary font-bold hover:text-emerald-800 transition-colors bg-emerald-50 py-3 rounded-lg hover:bg-emerald-100"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
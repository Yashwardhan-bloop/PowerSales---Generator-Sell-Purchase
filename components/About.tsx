import React from 'react';
import { ShieldCheck, Clock, Gauge, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-brand-primary" />,
    title: "Trusted Reliability",
    description: "Years of experience ensuring your power never goes out when you need it most."
  },
  {
    icon: <Gauge className="w-10 h-10 text-brand-gold" />,
    title: "Wide Capacity Range",
    description: "From compact 62 KVA units to massive 2000 KVA industrial powerhouses."
  },
  {
    icon: <Clock className="w-10 h-10 text-brand-primary" />,
    title: "24/7 Support",
    description: "Dedicated maintenance and support team for rentals and sales."
  },
  {
    icon: <Award className="w-10 h-10 text-brand-gold" />,
    title: "Premium Quality",
    description: "We deal only in certified, high-performance generator brands."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Why Choose Power Sales?</h2>
            <div className="h-1.5 w-24 bg-brand-primary rounded-full mb-8"></div>
            <p className="text-slate-600 text-xl leading-relaxed">
              Led by <span className="font-bold text-slate-800">Mr. Sachin</span>, Power Sales has established itself as a premier destination for power solutions in Ghaziabad. We don't just sell machines; we sell peace of mind.
            </p>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://drive.google.com/thumbnail?id=196PjZ2EY27DR5lo-ORblGioDtGH51dO3&sz=w1000" 
                 alt="Power Sales Generator" 
                 className="w-full max-w-2xl object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
             </div>
             {/* Decorative background element */}
             <div className="absolute -inset-4 bg-brand-primary/10 rounded-2xl -z-10 rotate-6 scale-95"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 hover:border-brand-primary/50 transition-all shadow-sm hover:shadow-xl group cursor-default text-center"
            >
              <div className="bg-white p-5 rounded-full inline-block mb-6 shadow-md border border-emerald-50 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
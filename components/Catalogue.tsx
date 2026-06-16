import React, { useState } from 'react';
import { GeneratorProduct, CONTACT_INFO } from '../types';
import { X, Zap, Phone, Send, ShoppingBag, Calendar, User, Mail, CalendarClock, Clock } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Helper function to generate a professional SVG Base64 image for the generator
// This ensures images work immediately without needing external file hosting.
const getGeneratorImage = (kva: number, type: string) => {
  const color = type === 'Commercial' ? '#059669' : '#334155'; // Emerald for Commercial, Slate for Industrial
  const secondaryColor = type === 'Commercial' ? '#ecfdf5' : '#e2e8f0';
  
  const svg = `
  <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#f8fafc"/>
    <rect x="0" y="0" width="600" height="400" fill="url(#grad1)"/>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f1f5f9;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Generator Body -->
    <rect x="100" y="100" width="400" height="240" rx="10" fill="${color}" stroke="#1e293b" stroke-width="2"/>
    
    <!-- Vents -->
    <rect x="130" y="140" width="340" height="20" rx="4" fill="${secondaryColor}" fill-opacity="0.3"/>
    <rect x="130" y="170" width="340" height="20" rx="4" fill="${secondaryColor}" fill-opacity="0.3"/>
    <rect x="130" y="200" width="340" height="20" rx="4" fill="${secondaryColor}" fill-opacity="0.3"/>
    
    <!-- Control Panel -->
    <rect x="420" y="130" width="60" height="100" fill="#0f172a" rx="4"/>
    <circle cx="440" cy="150" r="5" fill="#ef4444"/>
    <circle cx="460" cy="150" r="5" fill="#22c55e"/>
    
    <!-- Branding Label -->
    <rect x="100" y="280" width="400" height="60" fill="#0f172a" fill-opacity="0.5"/>
    <text x="300" y="320" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">
      ${kva} KVA
    </text>
    
    <!-- Footer -->
    <rect x="80" y="340" width="440" height="20" fill="#334155"/>
  </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

/* 
  NOTE: To use your own real photos:
  1. Use a tool like https://www.base64-image.de/ to convert your .jpg files to Base64 strings.
  2. Paste the long string into the 'image' field below, replacing the getGeneratorImage() call.
  Example: image: "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
*/

const generators: GeneratorProduct[] = [
  { 
    id: "g1", 
    kva: 62, 
    type: "Commercial", 
    basePrice: 350000, 
    image: "https://drive.google.com/thumbnail?id=1DV1gkoCBug6uJNxhdnT8iMLwJ1dXW32J&sz=w1000" 
  },
  { 
    id: "g2", 
    kva: 125, 
    type: "Industrial", 
    basePrice: 650000, 
    image: "https://drive.google.com/thumbnail?id=1fR8G4JxcT4Zma6KaXIjRrDYPz7LhoQFw&sz=w1000" 
  },
  { 
    id: "g3", 
    kva: 250, 
    type: "Industrial", 
    basePrice: 1200000, 
    image: "https://drive.google.com/thumbnail?id=1-O2pSdJ8-FTVaeYULx5IvXX1OOToCdvf&sz=w1000" 
  },
  { 
    id: "g4", 
    kva: 500, 
    type: "Industrial", 
    basePrice: 2400000, 
    image: "https://drive.google.com/thumbnail?id=1_E2UROhwdNKr_y_gwilxji7lC-8ixICY&sz=w1000" 
  },
  { 
    id: "g5", 
    kva: 750, 
    type: "Industrial", 
    basePrice: 3500000, 
    image: "https://drive.google.com/thumbnail?id=1Zdk5IMw6p_kUjVM7m0cNfAQgQDFlJYYt&sz=w1000" 
  },
  { 
    id: "g6", 
    kva: 1010, 
    type: "Industrial", 
    basePrice: 4500000, 
    image: "https://drive.google.com/thumbnail?id=1BbY0tMSbrz9NgzONqqfV_6l6hQ4lKpC0&sz=w1000" 
  },
  { 
    id: "g7", 
    kva: 1500, 
    type: "Industrial", 
    basePrice: 7000000, 
    image: "https://drive.google.com/thumbnail?id=1etUshV7IUnTKY_g0zQQiur9ark_suUkw&sz=w1000" 
  },
  { 
    id: "g8", 
    kva: 2000, 
    type: "Industrial", 
    basePrice: 9500000, 
    image: "https://drive.google.com/thumbnail?id=11CLNVuq-NEoYEEn9N9OwnDsocRALAP2_&sz=w1000" 
  },
];

type EnquiryType = 'none' | 'rent' | 'buy';
type RentalDuration = 'Monthly' | 'Yearly';

const Catalogue: React.FC = () => {
  const [selectedGen, setSelectedGen] = useState<GeneratorProduct | null>(null);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>('none');
  const [offerPrice, setOfferPrice] = useState<number>(25000);
  const [rentalDuration, setRentalDuration] = useState<RentalDuration>('Monthly');
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSelect = (gen: GeneratorProduct) => {
    setSelectedGen(gen);
    setEnquiryType('none');
    setOfferPrice(25000);
    setRentalDuration('Monthly');
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOfferPrice(Number(e.target.value));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(val);
  };

  const generateWhatsAppLink = () => {
    if (!selectedGen) return '#';
    const text = `Hello Power Sales, I am interested in RENTING the ${selectedGen.kva} KVA Generator. Service Type: ${rentalDuration}. My budget is approx ${formatCurrency(offerPrice)} (${rentalDuration}). My Name: ${formData.name}, Phone: ${formData.phone}.`;
    return `https://wa.me/${CONTACT_INFO.phone.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="catalogue" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Generator Catalogue
          </motion.h2>
          <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Select a capacity to view details and make an enquiry.</p>
        </div>

        {/* Grid of Generators */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {generators.map((gen) => (
            <motion.div 
              key={gen.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
            >
              <div className="h-56 overflow-hidden relative bg-slate-50 flex items-center justify-center">
                <img 
                  src={gen.image} 
                  alt={`${gen.kva} KVA Generator`} 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to SVG generator if Drive image fails
                    const target = e.target as HTMLImageElement;
                    if (target.src !== getGeneratorImage(gen.kva, gen.type) && !target.src.startsWith('data:')) {
                        target.src = getGeneratorImage(gen.kva, gen.type);
                    }
                  }}
                />
                <div className="absolute top-3 right-3 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm border border-slate-100">
                  {gen.type}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col text-center">
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-3xl font-extrabold text-slate-900">{gen.kva}</span>
                  <span className="text-sm font-semibold text-slate-500">KVA</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-6">
                  <Zap size={14} className="text-brand-gold fill-current" />
                  <span>High Efficiency Diesel Engine</span>
                </div>
                <button
                  onClick={() => handleSelect(gen)}
                  className="mt-auto w-full bg-slate-900 hover:bg-brand-primary text-white py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  Check Price & Availability
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {selectedGen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGen(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative bg-white border border-slate-200 rounded-3xl p-6 md:p-10 w-full max-w-lg shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedGen(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-8 text-center">
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{selectedGen.kva} KVA Generator</h3>
                  <p className="text-slate-500">Please select your requirement</p>
              </div>

              {/* Step 1: Selection */}
              {enquiryType === 'none' && (
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setEnquiryType('buy')}
                    className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 border-slate-100 hover:border-brand-primary hover:bg-emerald-50 transition-all group"
                  >
                    <ShoppingBag className="w-12 h-12 text-slate-400 group-hover:text-brand-primary transition-colors" />
                    <span className="font-bold text-lg text-slate-700 group-hover:text-brand-primary">Purchase</span>
                  </button>
                  <button 
                    onClick={() => setEnquiryType('rent')}
                    className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 border-slate-100 hover:border-brand-gold hover:bg-amber-50 transition-all group"
                  >
                    <Calendar className="w-12 h-12 text-slate-400 group-hover:text-brand-gold transition-colors" />
                    <span className="font-bold text-lg text-slate-700 group-hover:text-brand-gold">Rent</span>
                  </button>
                </div>
              )}

              {/* Step 2: Rent Form */}
              {enquiryType === 'rent' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    
                    {/* Duration Toggle */}
                    <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
                        <button
                            onClick={() => setRentalDuration('Monthly')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${rentalDuration === 'Monthly' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            <Calendar size={16} /> Monthly
                        </button>
                        <button
                            onClick={() => setRentalDuration('Yearly')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${rentalDuration === 'Yearly' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            <CalendarClock size={16} /> Yearly
                        </button>
                    </div>

                    <div className="mb-8 bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                        <label className="block text-emerald-800 text-sm font-bold mb-4">
                        Rental Budget Estimate ({rentalDuration})
                        </label>
                        <input 
                        type="range" 
                        min={25000} 
                        max={800000} 
                        step={5000}
                        value={offerPrice}
                        onChange={handlePriceChange}
                        className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                        />
                        <div className="mt-4 flex justify-between items-center font-semibold">
                        <span className="text-xs text-emerald-600">Min: ₹25k</span>
                        <span className="text-3xl font-bold text-brand-gold">{formatCurrency(offerPrice)}</span>
                        <span className="text-xs text-emerald-600">Max: ₹8L</span>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div>
                        <label className="block text-slate-500 text-xs uppercase font-bold mb-2">Your Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-brand-primary focus:outline-none focus:bg-white transition-all"
                        />
                        </div>
                        <div>
                        <label className="block text-slate-500 text-xs uppercase font-bold mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-brand-primary focus:outline-none focus:bg-white transition-all"
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <a 
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all shadow-lg shadow-green-500/30 ${!formData.name || !formData.phone ? 'bg-green-600/50 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 hover:scale-[1.02]'}`}
                        onClick={(e) => {
                            if(!formData.name || !formData.phone) e.preventDefault();
                        }}
                        >
                        <Send size={18} />
                        WhatsApp
                        </a>
                        <button 
                        onClick={() => setEnquiryType('none')}
                        className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3.5 rounded-xl font-bold transition-all"
                        >
                        Back
                        </button>
                    </div>
                </motion.div>
              )}

              {/* Step 3: Buy Contact Info */}
              {enquiryType === 'buy' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center mb-6">
                        <p className="text-blue-800 font-medium mb-6">
                            For generator purchases, please contact the owner directly for the best custom valuation and technical consultation.
                        </p>
                        
                        <div className="flex flex-col items-center gap-4">
                             <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm w-full border border-blue-100">
                                <div className="bg-blue-100 p-2 rounded-lg"><User className="text-brand-primary w-5 h-5" /></div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-400 font-bold uppercase">Owner</p>
                                    <p className="text-slate-900 font-bold text-lg">{CONTACT_INFO.owner}</p>
                                </div>
                             </div>

                             <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm w-full border border-blue-100 hover:border-brand-primary hover:shadow-md transition-all cursor-pointer">
                                <div className="bg-green-100 p-2 rounded-lg"><Phone className="text-green-600 w-5 h-5" /></div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-400 font-bold uppercase">Call Directly</p>
                                    <p className="text-slate-900 font-bold text-lg">{CONTACT_INFO.displayPhone}</p>
                                </div>
                             </a>

                             <a href="mailto:powersales11@gmail.com" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm w-full border border-blue-100 hover:border-brand-primary hover:shadow-md transition-all cursor-pointer">
                                <div className="bg-red-100 p-2 rounded-lg"><Mail className="text-red-500 w-5 h-5" /></div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                                    <p className="text-slate-900 font-bold text-lg break-all">powersales11@gmail.com</p>
                                </div>
                             </a>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => setEnquiryType('none')}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3.5 rounded-xl font-bold transition-all"
                    >
                        Back to Options
                    </button>
                </motion.div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Catalogue;
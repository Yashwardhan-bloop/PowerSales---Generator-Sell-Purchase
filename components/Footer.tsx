import React, { useState } from 'react';
import { Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);

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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-4">
               <Zap className="h-6 w-6 text-brand-gold fill-current" />
               <span className="font-bold text-xl text-white font-poppins">POWER <span className="text-brand-gold">SALES</span></span>
             </div>
             <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
               Your trusted partner for all industrial power requirements in Ghaziabad and NCR. <br/>
               Sales, Purchase, and Rentals made seamless.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#catalogue" onClick={(e) => handleSmoothScroll(e, '#catalogue')} className="hover:text-brand-gold transition-colors">Generator Sales</a></li>
              <li><a href="#catalogue" onClick={(e) => handleSmoothScroll(e, '#catalogue')} className="hover:text-brand-gold transition-colors">Generator Rental</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-brand-gold transition-colors">Sell Your Generator</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-brand-gold transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-brand-gold transition-colors">Contact</a></li>
              <li><a href="https://maps.google.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Get Directions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Power Sales. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
              <button 
                onClick={() => setShowTerms(true)}
                className="hover:text-slate-300 cursor-pointer transition-colors hover:underline focus:outline-none"
              >
                Terms of Service
              </button>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      <AnimatePresence>
        {showTerms && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowTerms(false)}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="bg-white text-slate-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] relative flex flex-col overflow-hidden z-[101]"
                >
                    <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                        <h3 className="text-xl font-extrabold text-slate-900">Terms & Conditions</h3>
                        <button onClick={() => setShowTerms(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-900">
                            <X size={24} />
                        </button>
                    </div>
                    
                    <div className="p-6 overflow-y-auto custom-scrollbar text-sm leading-relaxed text-slate-600 space-y-6">
                        <p className="font-medium">
                            These Terms and Conditions govern your use of PowerSales website and generator services. By accessing or using our website or services, you agree to be bound by these Terms and Conditions in full. If you do not agree with any part of these terms, you must not use our website or services.
                        </p>

                        <div>
                            <h4 className="text-slate-900 font-bold mb-2">1. Use of Website and Services</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>1.1. You must be at least 18 years old to use our website and services.</li>
                                <li>1.2. You agree to provide accurate, current, and complete information when using our website and services.</li>
                                <li>1.3. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-900 font-bold mb-2">2. Generator Services & Ownership</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>2.1. Our generator services are provided on an “as is” and “as available” basis. We make no warranties or representations regarding the availability, reliability, or quality of our services.</li>
                                <li>2.2. You agree not to use our generator services for any unlawful or prohibited purpose.</li>
                                <li>2.3. We reserve the right to modify, suspend, or discontinue our services at any time without prior notice.</li>
                                <li>2.4. All the listed items and goods belongs to "Power sales" in all manner and entitle to return to back after its usage 'Under Right to Use'.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-900 font-bold mb-2">3. Intellectual Property</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>3.1. All content, materials, and trademarks on our website are the property of PowerSales or its licensors and are protected by copyright and other intellectual property laws.</li>
                                <li>3.2. You may not reproduce, distribute, modify, or transmit any content from our website without our prior written consent.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-900 font-bold mb-2">4. Limitation of Liability</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>4.1. To the fullest extent permitted by law, PowerSales shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website or services.</li>
                                <li>4.2. Power Sales will not be liable to compensate any losses due to break down of DG Set.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-900 font-bold mb-2">5. Indemnification</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>5.1. You agree to indemnify and hold harmless PowerSales, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, or expenses arising out of your use of our website or services or your violation of these Terms and Conditions.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-900 font-bold mb-2">6. Governing Law</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>6.1. These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-900 font-bold mb-2">7. Changes to Terms and Conditions</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>7.1. We reserve the right to update or modify these Terms and Conditions at any time without prior notice. The updated terms will be effective upon posting on our website. Your continued use of our website or services after any such changes constitutes your acceptance of the new Terms and Conditions.</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-900 font-bold mb-2">8. Contact Us</h4>
                            <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at <span className="font-bold text-slate-900">+91 99100 28455</span>.</p>
                        </div>

                        <p className="italic text-xs border-t border-slate-100 pt-4">
                            By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                        </p>
                    </div>

                    <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
                        <button 
                            onClick={() => setShowTerms(false)}
                            className="px-6 py-2.5 bg-brand-primary text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20"
                        >
                            I Understand
                        </button>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
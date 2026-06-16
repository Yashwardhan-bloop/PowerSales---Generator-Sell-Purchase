import React from 'react';
import { MapPin, Phone, User, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../types';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Contact Us</h2>
          <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Visit our office or call us directly for immediate assistance regarding sales, rentals, or selling your old generator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="space-y-8">
              <div className="flex items-center gap-6 group p-4 hover:bg-white hover:shadow-md rounded-xl transition-all">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:border-brand-primary group-hover:bg-emerald-50 transition-colors">
                  <User className="text-brand-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-1">Owner</h4>
                  <p className="text-slate-600 font-medium text-lg">{CONTACT_INFO.owner}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group p-4 hover:bg-white hover:shadow-md rounded-xl transition-all">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:border-brand-primary group-hover:bg-emerald-50 transition-colors">
                  <Phone className="text-brand-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-1">Phone</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-600 hover:text-brand-primary transition-colors font-medium text-lg">
                    {CONTACT_INFO.displayPhone}
                  </a>
                  <p className="text-xs text-green-600 font-bold mt-1 flex items-center gap-1 bg-green-100 px-2 py-1 rounded w-fit">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available on WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group p-4 hover:bg-white hover:shadow-md rounded-xl transition-all">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:border-brand-primary group-hover:bg-emerald-50 transition-colors">
                  <Mail className="text-brand-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-1">Email</h4>
                  <a href="mailto:powersales11@gmail.com" className="text-slate-600 hover:text-brand-primary transition-colors font-medium text-lg">
                    powersales11@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group p-4 hover:bg-white hover:shadow-md rounded-xl transition-all">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:border-brand-primary group-hover:bg-emerald-50 transition-colors">
                  <MapPin className="text-brand-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-1">Primary Office Address</h4>
                  <p className="text-slate-600 max-w-xs">{CONTACT_INFO.addressPrimary}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.3331!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06ff58a772d77!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1647852481545!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Power Sales Location"
              className="grayscale-[0%] transition-all duration-500"
            ></iframe>
            <div className="absolute bottom-4 right-4 bg-white/90 text-slate-800 text-xs px-4 py-2 rounded-lg shadow-lg font-bold backdrop-blur-md border border-slate-200">
              Serving Ghaziabad & NCR Region
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
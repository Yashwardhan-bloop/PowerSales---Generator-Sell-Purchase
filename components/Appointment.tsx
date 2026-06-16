import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Send, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../types';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    purpose: 'Visit Office'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Appointment Request - ${formData.name}`;
    const body = `Hello Power Sales,%0D%0A%0D%0AI would like to schedule an appointment.%0D%0A%0D%0ADetails:%0D%0AName: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0APreferred Date: ${formData.date}%0D%0APreferred Time: ${formData.time}%0D%0APurpose: ${formData.purpose}%0D%0A%0D%0APlease confirm my appointment.`;
    
    // Open email client
    window.open(`mailto:powersales11@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
  };

  return (
    <section id="appointment" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-emerald-900"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-slate-900 p-10 md:w-2/5 text-white flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold mb-6">Schedule a Visit</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Book an appointment with Mr. Sachin for a detailed consultation regarding your power requirements.
                </p>
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Phone className="text-brand-primary" size={20} />
                        <span className="font-semibold">{CONTACT_INFO.displayPhone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <MapPin className="text-brand-primary mt-1" size={20} />
                        <span className="text-sm text-slate-300">{CONTACT_INFO.addressPrimary}</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 md:mt-0">
                <div className="w-12 h-1 bg-brand-primary rounded-full mb-4"></div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Power Sales Appointment</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center md:text-left">Book Your Slot</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                <div className="relative">
                    <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input 
                        required
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 text-slate-400" size={18} />
                        <input 
                            required
                            type="date" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all text-sm"
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Time</label>
                    <div className="relative">
                        <Clock className="absolute left-3 top-3.5 text-slate-400" size={18} />
                        <input 
                            required
                            type="time" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all text-sm"
                            value={formData.time}
                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                        />
                    </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Purpose</label>
                <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-primary focus:outline-none transition-all"
                    value={formData.purpose}
                    onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                >
                    <option>Purchase Inquiry</option>
                    <option>Rental Inquiry</option>
                    <option>Maintenance Service</option>
                    <option>Sell Old Generator</option>
                    <option>Visit Office</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-primary hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 mt-4 hover:scale-[1.02]"
              >
                Book Appointment <Send size={18} />
              </button>
              
              <p className="text-xs text-slate-400 text-center mt-2">
                Details will be sent via email to Power Sales
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
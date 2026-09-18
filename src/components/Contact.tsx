'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Send } from 'lucide-react';

interface ContactProps {
  selectedService: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '', 
    service: selectedService
  });

  // Actualiza el campo cuando cambia la selección en las tarjetas de servicio
  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "573204084584"; // Reemplaza por tu número
    const text = `Hola Jurytech, mi nombre es ${formData.name} (${formData.email}). Estoy interesado en la solución: "${formData.service}". Mensaje: ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-circuit-mesh border-t border-[#18FFFF]/10 relative scroll-mt-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 text-left">
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1E4C3] leading-tight">
            Hablemos de su proyecto
          </h2>
          <p className="text-white text-base leading-relaxed">
            Diligencie los datos para ponerse en contacto directo con nuestro equipo jurídico y de desarrollo tecnológico.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4 p-5 rounded-2xl bg-[#081A2D] border border-[#18FFFF]/20 hover:border-emerald-400 transition-all group shadow-lg"
            >
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-white/60">Atención Directa WhatsApp</div>
                <div className="text-base font-bold text-[#F1E4C3]">+57 (320) 408-4584</div>
              </div>
            </a>

            <a
              href="mailto:info.jurytechsolutions.com"
              className="flex items-center space-x-4 p-5 rounded-2xl bg-[#081A2D] border border-[#18FFFF]/20 hover:border-[#DAB86F] transition-all group shadow-lg"
            >
              <div className="p-3 bg-[#DAB86F]/20 text-[#DAB86F] rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-white/60">Correo Electrónico</div>
                <div className="text-base font-bold text-[#F1E4C3]">info@jurytechsolutions.com</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="p-8 rounded-2xl bg-[#081A2D] border border-[#18FFFF]/20 space-y-5 text-left shadow-2xl">
          <h3 className="text-2xl font-bold text-[#F1E4C3] mb-2 flex items-center space-x-3">
            <MessageSquare className="w-6 h-6 text-[#18FFFF]" />
            <span>Solicitar Consultoría</span>
          </h3>

          <div>
            <label className="text-xs font-semibold text-white/70 block mb-1.5">Nombre Completo</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Ej. Carlos Mendoza"
              className="w-full bg-[#010C1E] border border-[#18FFFF]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#18FFFF] focus:ring-1 focus:ring-[#18FFFF]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-white/70 block mb-1.5">Correo Electrónico</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="carlos@empresa.com"
              className="w-full bg-[#010C1E] border border-[#18FFFF]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#18FFFF] focus:ring-1 focus:ring-[#18FFFF]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-white/70 block mb-1.5">Servicio Seleccionado</label>
            <input
              type="text"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              placeholder="Ej. Ciberseguridad / Plataformas LegalTech"
              className="w-full bg-[#010C1E] border border-[#18FFFF]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#18FFFF] focus:ring-1 focus:ring-[#18FFFF]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-white/70 block mb-1.5">Mensaje o Detalle</label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Describe brevemente tu necesidad..."
              className="w-full bg-[#010C1E] border border-[#18FFFF]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#18FFFF] focus:ring-1 focus:ring-[#18FFFF] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#DAB86F] hover:bg-[#E8CA8C] text-[#010C1E] font-black py-4 rounded-xl transition-all duration-300 text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#DAB86F]/20 hover:scale-[1.02] active:scale-98"
          >
            <span>Enviar por WhatsApp</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </section>
  );
};
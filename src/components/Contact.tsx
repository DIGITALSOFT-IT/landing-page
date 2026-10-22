'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Send, ShieldCheck } from 'lucide-react';

interface ContactProps {
  selectedService: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: selectedService,
  });

  // Actualiza el campo cuando cambia la selección en las tarjetas de servicio
  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '573204084584';
    const text = `Hola Jurytech, mi nombre es ${formData.name} (${formData.email}). Estoy interesado en la solución: "${formData.service}". Mensaje: ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-circuit-mesh border-t border-[#D5A45A]/20 relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Columna Informativa */}
        <div className="space-y-6 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D5A45A]">
            Atención Corporativa
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F6ECD7] leading-tight">
            Hablemos de su <span className="text-gradient-gold">Proyecto</span>
          </h2>
          <p className="text-[#CBD5E1] text-base leading-relaxed">
            Diligencie sus datos para ponerse en contacto directo con nuestro equipo jurídico,
            estratégico y de ingeniería tecnológica.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href="https://wa.me/573204084584"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4 p-5 rounded-2xl card-luxury border border-[#9BB0C5]/20 hover:border-[#D5A45A]/70 transition-all group"
            >
              <div className="p-3.5 bg-[#D5A45A]/15 text-[#F2D69E] border border-[#D5A45A]/35 rounded-xl group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#9BB0C5] font-medium">
                  Atención Directa WhatsApp
                </div>
                <div className="text-base font-bold text-[#F6ECD7] group-hover:text-[#F2D69E] transition-colors">
                  +57 (320) 408-4584
                </div>
              </div>
            </a>

            <a
              href="mailto:info@jurytechsolutions.com"
              className="flex items-center space-x-4 p-5 rounded-2xl card-luxury border border-[#9BB0C5]/20 hover:border-[#E2E8F0]/70 transition-all group"
            >
              <div className="p-3.5 bg-[#9BB0C5]/15 text-[#E2E8F0] border border-[#9BB0C5]/35 rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#9BB0C5] font-medium">Correo Electrónico</div>
                <div className="text-base font-bold text-[#F6ECD7] group-hover:text-[#E2E8F0] transition-colors">
                  info@jurytechsolutions.com
                </div>
              </div>
            </a>
          </div>

          <div className="flex items-center space-x-3 pt-2 text-xs text-[#9BB0C5]">
            <ShieldCheck className="w-4 h-4 text-[#D5A45A] shrink-0" />
            <span>
              Tratamiento confidencial de la información bajo estrictos estándares de seguridad.
            </span>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <form
          onSubmit={handleWhatsAppSubmit}
          className="p-8 sm:p-10 rounded-2xl card-luxury border border-[#D5A45A]/30 space-y-5 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D5A45A] via-[#E2E8F0] to-[#648CA4]" />

          <h3 className="text-2xl font-bold text-[#F6ECD7] mb-2 flex items-center space-x-3">
            <MessageSquare className="w-6 h-6 text-[#D5A45A]" />
            <span>Solicitar Consultoría</span>
          </h3>

          <div>
            <label className="text-xs font-semibold text-[#CBD5E1] block mb-1.5">
              Nombre Completo
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ej. Carlos Mendoza"
              className="w-full bg-[#020B1A]/90 border border-[#9BB0C5]/25 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#9BB0C5]/45 focus:outline-none focus:border-[#D5A45A] focus:ring-1 focus:ring-[#D5A45A] transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#CBD5E1] block mb-1.5">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="carlos@empresa.com"
              className="w-full bg-[#020B1A]/90 border border-[#9BB0C5]/25 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#9BB0C5]/45 focus:outline-none focus:border-[#D5A45A] focus:ring-1 focus:ring-[#D5A45A] transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#CBD5E1] block mb-1.5">
              Servicio Seleccionado
            </label>
            <input
              type="text"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              placeholder="Ej. Ciberseguridad / Plataformas LegalTech"
              className="w-full bg-[#020B1A]/90 border border-[#D5A45A]/35 rounded-xl px-4 py-3 text-sm text-[#F2D69E] font-medium placeholder:text-[#9BB0C5]/45 focus:outline-none focus:border-[#D5A45A] focus:ring-1 focus:ring-[#D5A45A] transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#CBD5E1] block mb-1.5">
              Mensaje o Detalle
            </label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe brevemente tu necesidad..."
              className="w-full bg-[#020B1A]/90 border border-[#9BB0C5]/25 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#9BB0C5]/45 focus:outline-none focus:border-[#D5A45A] focus:ring-1 focus:ring-[#D5A45A] resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold-metallic text-[#020B1A] font-black py-4 rounded-xl transition-all duration-300 text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#D5A45A]/25 hover:scale-[1.01] active:scale-98 cursor-pointer"
          >
            <span>Enviar por WhatsApp</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

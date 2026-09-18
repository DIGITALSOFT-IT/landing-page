'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe2, Lock } from 'lucide-react';

export const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-circuit-mesh border-y border-[#18FFFF]/10 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-2xl bg-[#081A2D] border border-[#18FFFF]/20 hover:border-[#18FFFF] transition-all shadow-2xl hover:shadow-[#18FFFF]/10 group"
        >
          <div className="w-14 h-14 rounded-xl bg-[#081A2D] border border-[#18FFFF]/50 glow-cyan flex items-center justify-center text-[#18FFFF] mb-6 group-hover:scale-110 transition-transform">
            <Cpu className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-[#F1E4C3] mb-3 group-hover:text-[#18FFFF] transition-colors">Misión</h3>
          <p className="text-white text-sm leading-relaxed font-light">
            Ofrecer soluciones integrales que articulen el conocimiento jurídico, tecnológico y estratégico mediante servicios de alta calidad en consultoría, desarrollo y auditoría.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-2xl bg-[#081A2D] border border-[#18FFFF]/20 hover:border-[#18FFFF] transition-all shadow-2xl hover:shadow-[#18FFFF]/10 group"
        >
          <div className="w-14 h-14 rounded-xl bg-[#081A2D] border border-[#18FFFF]/50 glow-cyan flex items-center justify-center text-[#18FFFF] mb-6 group-hover:scale-110 transition-transform">
            <Globe2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-[#F1E4C3] mb-3 group-hover:text-[#18FFFF] transition-colors">Visión</h3>
          <p className="text-white text-sm leading-relaxed font-light">
            Ser firma referente en América Latina destacada por su enfoque innovador, rigor profesional y capacidad de anticiparse a los desafíos de entornos complejos.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-2xl bg-[#081A2D] border border-[#DAB86F]/20 hover:border-[#DAB86F] transition-all shadow-2xl hover:shadow-[#DAB86F]/10 group"
        >
          <div className="w-14 h-14 rounded-xl bg-[#081A2D] border border-[#DAB86F]/50 glow-gold flex items-center justify-center text-[#DAB86F] mb-6 group-hover:scale-110 transition-transform">
            <Lock className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-[#F1E4C3] mb-3 group-hover:text-[#DAB86F] transition-colors">Propósito</h3>
          <p className="text-white text-sm leading-relaxed font-light">
            Generar valor y confianza en las organizaciones integrando el derecho y la tecnología para proteger y proyectar un crecimiento sostenible.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe2, Lock } from 'lucide-react';

export const About = () => {
  return (
    <section
      id="nosotros"
      className="py-24 bg-circuit-mesh border-b border-[#D5A45A]/15 px-6 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D5A45A]">
            Identidad Corporativa
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F6ECD7] leading-tight">
            Donde el <span className="text-gradient-gold">Derecho</span> y la{' '}
            <span className="text-gradient-tech">Tecnología</span> Convergen
          </h2>
          <p className="text-[#9BB0C5] text-base leading-relaxed">
            Articulamos capacidades jurídicas, ingeniería de software y ciberseguridad para
            proteger y transformar organizaciones públicas y privadas.
          </p>
        </div>

        {/* Tarjetas Misión, Visión y Propósito */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl card-luxury border border-[#D5A45A]/25 hover:border-[#D5A45A]/75 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D5A45A] via-[#F2D69E] to-transparent opacity-70" />
            <div className="w-14 h-14 rounded-xl bg-[#051630] border border-[#D5A45A]/50 glow-gold flex items-center justify-center text-[#F2D69E] mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#F6ECD7] mb-3 group-hover:text-[#F2D69E] transition-colors">
              Misión
            </h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              Ofrecer soluciones integrales que articulen el conocimiento jurídico, tecnológico y
              estratégico mediante servicios de alta calidad en consultoría, desarrollo y auditoría.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl card-luxury border border-[#9BB0C5]/25 hover:border-[#E2E8F0]/75 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E2E8F0] via-[#648CA4] to-transparent opacity-70" />
            <div className="w-14 h-14 rounded-xl bg-[#051630] border border-[#9BB0C5]/50 glow-steel flex items-center justify-center text-[#E2E8F0] mb-6 group-hover:scale-110 transition-transform">
              <Globe2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#F6ECD7] mb-3 group-hover:text-[#E2E8F0] transition-colors">
              Visión
            </h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              Ser firma referente en América Latina destacada por su enfoque innovador, rigor
              profesional y capacidad de anticiparse a los desafíos de entornos complejos.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl card-luxury border border-[#D5A45A]/25 hover:border-[#D5A45A]/75 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D5A45A] via-[#9BB0C5] to-transparent opacity-70" />
            <div className="w-14 h-14 rounded-xl bg-[#051630] border border-[#D5A45A]/50 glow-gold flex items-center justify-center text-[#D5A45A] mb-6 group-hover:scale-110 transition-transform">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#F6ECD7] mb-3 group-hover:text-[#F2D69E] transition-colors">
              Propósito
            </h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">
              Generar valor y confianza en las organizaciones integrando el derecho y la tecnología
              para proteger y proyectar un crecimiento sostenible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

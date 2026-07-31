'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe2, Lock } from 'lucide-react';

export const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-[#0B1426] to-[#060B14] border-y border-slate-800/80 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-[#C5A059] transition-all shadow-2xl hover:shadow-[#C5A059]/10 group"
        >
          <div className="w-14 h-14 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 transition-transform">
            <Cpu className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">Misión</h3>
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            Ofrecer soluciones integrales que articulen el conocimiento jurídico, tecnológico y estratégico mediante servicios de alta calidad en consultoría, desarrollo y auditoría.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-[#C5A059] transition-all shadow-2xl hover:shadow-[#C5A059]/10 group"
        >
          <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-200 mb-6 group-hover:scale-110 transition-transform">
            <Globe2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">Visión</h3>
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            Ser firma referente en América Latina destacada por su enfoque innovador, rigor profesional y capacidad de anticiparse a los desafíos de entornos complejos.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-[#C5A059] transition-all shadow-2xl hover:shadow-[#C5A059]/10 group"
        >
          <div className="w-14 h-14 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 transition-transform">
            <Lock className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">Propósito</h3>
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            Generar valor y confianza en las organizaciones integrando el derecho y la tecnología para proteger y proyectar un crecimiento sostenible.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
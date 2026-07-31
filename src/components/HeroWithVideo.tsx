'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export default function HeroWithVideo() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* 1. CONTENEDOR DE FONDO (VIDEO + IMAGEN) */}
      <div className="absolute inset-0 w-full h-full z-0">
        
        {/* Imagen fija de fondo que queda activa al final */}
        <Image
          src="/images/JURYTECH.png"
          alt="Jurytech Background"
          fill
          className="object-cover object-center opacity-30 scale-105 filter blur-sm"
          priority
        />

        {/* Video de Intro */}
        <AnimatePresence>
          {!isVideoFinished && (
            <motion.video
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              autoPlay
              muted
              playsInline
              onEnded={() => setIsVideoFinished(true)}
              className="absolute inset-0 w-full h-full object-cover object-center z-10"
            >
              <source src="/videos/hero-intro.mp4" type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>

        {/* Capa de degradado azul marino sobre el fondo para dar legibilidad al texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A111E] via-[#0A111E]/70 to-[#0A111E]/40 z-20 pointer-events-none" />
      </div>

      {/* 2. CONTENIDO (TEXTO Y BOTONES) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVideoFinished ? 1 : 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-30 max-w-4xl mx-auto px-6 text-center space-y-6 pt-12"
      >
        <span className="px-4 py-1.5 rounded-full border border-jurytech-gold/40 text-jurytech-gold text-xs font-semibold uppercase tracking-widest bg-jurytech-gold/10 inline-flex items-center space-x-2 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-jurytech-gold animate-pulse"></span>
          <span>Derecho • Tecnología • Estrategia</span>
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
          Soluciones Integrales para la <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-jurytech-gold via-slate-100 to-jurytech-silver">
            Evolución Digital Segura
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          Impulsamos el fortalecimiento institucional, la ciberseguridad y la gestión inteligente del riesgo a través de la convergencia tecnológica y legal.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a 
            href="#servicios" 
            className="bg-jurytech-gold text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-jurytech-goldHover transition-all flex items-center justify-center space-x-2 shadow-xl shadow-jurytech-gold/20 hover:scale-105"
          >
            <span>Explorar Servicios</span>
            <ChevronRight className="w-5 h-5" />
          </a>
          <a 
            href="#contacto" 
            className="border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-xl transition-all flex items-center justify-center font-medium backdrop-blur-md hover:scale-105"
          >
            Agendar Consultoría
          </a>
        </div>
      </motion.div>
    </section>
  );
}
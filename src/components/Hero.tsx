'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* 1. CONTENEDOR DE FONDO A PANTALLA COMPLETA */}
      <div className="absolute inset-0 w-full h-full z-0">
        
        {/* Imagen del Logo ocupando el 100% del fondo con fusión suave */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/JURYTECH.png"
            alt="Jurytech Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-45 scale-105 filter drop-shadow-[0_0_80px_rgba(197,160,89,0.25)] transition-all duration-1000"
            priority
          />
        </div>

        {/* Video de Intro con Fade Out */}
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
              className="absolute inset-0 w-full h-full object-cover object-center z-20"
            >
              <source src="/videos/hero-intro.mp4" type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>

        {/* Capa de viñeta y degradado para oscurecer los bordes y enfocar el texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/60 to-[#060B14]/80 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#060B14]/50 to-[#060B14] z-20 pointer-events-none" />
      </div>

      {/* 2. CONTENIDO PRINCIPAL SOBRE EL FONDO */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 max-w-4xl mx-auto px-6 text-center space-y-8 pt-12"
      >
        <span className="px-5 py-2 rounded-full border border-[#C5A059] text-[#C5A059] text-xs font-bold uppercase tracking-widest bg-[#C5A059]/10 inline-flex items-center space-x-2 backdrop-blur-xl shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping"></span>
          <span>Derecho • Tecnología • Estrategia</span>
        </span>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-2xl">
          Soluciones Integrales para la <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-amber-200 to-[#C5A059]">
            Evolución Digital Segura
          </span>
        </h1>

        <p className="text-slate-200 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          Impulsamos el fortalecimiento institucional, la ciberseguridad y la gestión inteligente del riesgo a través de la convergencia tecnológica y legal.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
          <Button variant="primary" href="#soluciones">
            <span>Explorar Soluciones</span>
            <ChevronRight className="w-5 h-5" />
          </Button>

          <Button variant="secondary" href="#contacto">
            Agendar Consultoría
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShieldCheck, Scale, Cpu } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-circuit-mesh"
    >
      {/* 1. CONTENEDOR DE FONDO A PANTALLA COMPLETA */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Imagen del Logo conservando sus tonos originales Dorado, Plata y Azul Real */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/JURYTECH.png"
            alt="Jurytech Solutions Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.38] scale-100 contrast-110 transition-all duration-1000"
            priority
          />
        </div>

        {/* Iluminación ambiental radial en los tonos del logo (Azul Real + Dorado + Acero) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D5A45A]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#648CA4]/15 rounded-full blur-[130px] pointer-events-none" />

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
              onError={() => setIsVideoFinished(true)}
              className="absolute inset-0 w-full h-full object-cover object-center z-20"
            >
              <source src="/videos/hero-intro.mp4" type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>

        {/* Capa de viñeta y degradado azul real profundo para máxima legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020B1A] via-[#04132C]/75 to-[#020B1A]/85 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#020B1A]/45 to-[#020B1A] z-20 pointer-events-none" />
      </div>

      {/* 2. CONTENIDO PRINCIPAL SOBRE EL FONDO */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 max-w-5xl mx-auto px-6 text-center space-y-8 pt-8"
      >
        <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-[#D5A45A]/45 bg-[#061936]/80 backdrop-blur-xl shadow-[0_0_25px_rgba(213,164,90,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#D5A45A] animate-pulse" />
          <span className="text-[#F2D69E] text-xs font-bold uppercase tracking-[0.22em]">
            Derecho • Tecnología • Estrategia
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-[#F6ECD7] drop-shadow-2xl">
          Soluciones Integrales para la <br className="hidden sm:inline" />
          <span className="text-gradient-brand">Evolución Digital Segura</span>
        </h1>

        <p className="text-[#CBD5E1] text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          Impulsamos el fortalecimiento institucional, la ciberseguridad y la gestión inteligente del
          riesgo a través de la convergencia entre el rigor jurídico y la innovación tecnológica.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-3">
          <Button variant="primary" href="#soluciones">
            <span>Explorar Soluciones</span>
            <ChevronRight className="w-5 h-5" />
          </Button>

          <Button variant="secondary" href="#contacto">
            <span>Agendar Consultoría</span>
          </Button>
        </div>

        {/* Pilares Corporativos Rápidos */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3.5 px-5 py-4 rounded-2xl bg-[#051630]/75 border border-[#D5A45A]/25 backdrop-blur-md text-left">
            <div className="p-2.5 rounded-xl bg-[#D5A45A]/15 text-[#F2D69E] border border-[#D5A45A]/30 shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F2D69E]">
                Rigor Jurídico
              </div>
              <div className="text-xs text-[#9BB0C5] mt-0.5">
                Blindaje corporativo y estatal
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 px-5 py-4 rounded-2xl bg-[#051630]/75 border border-[#9BB0C5]/25 backdrop-blur-md text-left">
            <div className="p-2.5 rounded-xl bg-[#9BB0C5]/15 text-[#E2E8F0] border border-[#9BB0C5]/30 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E2E8F0]">
                Ingeniería & IA
              </div>
              <div className="text-xs text-[#9BB0C5] mt-0.5">
                Software a medida y LegalTech
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 px-5 py-4 rounded-2xl bg-[#051630]/75 border border-[#648CA4]/30 backdrop-blur-md text-left">
            <div className="p-2.5 rounded-xl bg-[#648CA4]/20 text-[#B4C6D8] border border-[#648CA4]/40 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E2E8F0]">
                Ciberseguridad 360°
              </div>
              <div className="text-xs text-[#9BB0C5] mt-0.5">
                ISO 27001, SOC y Pentesting
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

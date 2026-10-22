'use client';

import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#D5A45A]/20 bg-[#020B1A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Marca */}
        <div className="flex items-center space-x-3.5">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#051630] border border-[#D5A45A]/40">
            <Image
              src="/images/JURYTECH.png"
              alt="Jurytech Solutions Logo"
              fill
              sizes="40px"
              className="object-cover object-center scale-110"
            />
          </div>
          <div>
            <div className="text-base font-black tracking-wider leading-none">
              <span className="text-gradient-gold">JURY</span>
              <span className="text-gradient-tech">TECH</span>
            </div>
            <div className="text-[9px] text-[#D5A45A] font-bold tracking-[0.2em] uppercase mt-1">
              SOLUTIONS S.A.S.
            </div>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[#9BB0C5]">
          <a href="#inicio" className="hover:text-[#F2D69E] transition-colors">
            Inicio
          </a>
          <a href="#aliados" className="hover:text-[#F2D69E] transition-colors">
            Aliados
          </a>
          <a href="#nosotros" className="hover:text-[#F2D69E] transition-colors">
            Nosotros
          </a>
          <a href="#soluciones" className="hover:text-[#F2D69E] transition-colors">
            Soluciones
          </a>
          <a href="#contacto" className="hover:text-[#F2D69E] transition-colors">
            Contacto
          </a>
        </div>

        {/* Derechos */}
        <p className="text-xs text-[#9BB0C5]/75 text-center md:text-right">
          © {new Date().getFullYear()} Jurytech Solutions S.A.S. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

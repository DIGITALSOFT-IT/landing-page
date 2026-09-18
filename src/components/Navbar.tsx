'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#010C1E]/95 backdrop-blur-md border-b border-[#18FFFF]/15 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center space-x-3.5 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#081A2D] border border-[#18FFFF]/50 shadow-md group-hover:border-[#18FFFF] transition-all">
            <Image
              src="/images/JURYTECH.png"
              alt="Jurytech Solutions Logo"
              fill
              sizes="40px"
              className="object-cover object-top scale-125 pt-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-[#F1E4C3] group-hover:text-[#18FFFF] transition-colors leading-none">
              JURYTECH
            </span>
            <span className="text-[9px] text-[#DAB86F] font-bold tracking-[0.2em] uppercase mt-1">
              SOLUTIONS S.A.S.
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-[#F1E4C3]">
          {['Inicio', 'Nosotros', 'Soluciones', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative py-1 hover:text-[#18FFFF] transition-colors group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#18FFFF] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Botón Reutilizable CTA */}
        <Button variant="cta" href="#contacto">Cotizar</Button>
      </div>
    </header>
  );
};
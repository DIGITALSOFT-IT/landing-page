'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Aliados', href: '#aliados' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#020B1A]/90 backdrop-blur-xl border-b border-[#D5A45A]/20 shadow-[0_8px_32px_rgba(0,0,0,0.55)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Identidad Corporativa fiel al Logo */}
        <a href="#inicio" className="flex items-center space-x-3.5 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#051630] border border-[#D5A45A]/45 shadow-md shadow-[#D5A45A]/10 group-hover:border-[#F2D69E] transition-all duration-300">
            <Image
              src="/images/JURYTECH.png"
              alt="Jurytech Solutions Logo"
              fill
              sizes="48px"
              className="object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-500"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-black tracking-wider leading-none flex items-center">
              <span className="text-gradient-gold">JURY</span>
              <span className="text-gradient-tech">TECH</span>
            </div>
            <div className="flex items-center space-x-1.5 mt-1">
              <span className="w-2.5 h-[1px] bg-[#D5A45A]/70" />
              <span className="text-[9px] text-[#D5A45A] font-bold tracking-[0.22em] uppercase">
                SOLUTIONS S.A.S.
              </span>
              <span className="w-2.5 h-[1px] bg-[#D5A45A]/70" />
            </div>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#E2E8F0]/85">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-1.5 hover:text-[#F2D69E] transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D5A45A] to-[#9BB0C5] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA Desktop + Botón Menú Móvil */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block">
            <Button variant="cta" href="#contacto">
              Cotizar
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="md:hidden p-2.5 rounded-xl bg-[#061936] border border-[#D5A45A]/30 text-[#F2D69E] hover:border-[#D5A45A] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#031024]/98 border-b border-[#D5A45A]/25 px-6 py-5 space-y-3 backdrop-blur-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-[#F6ECD7] hover:bg-[#081F40] hover:text-[#D5A45A] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              variant="primary"
              href="#contacto"
              className="w-full py-3 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

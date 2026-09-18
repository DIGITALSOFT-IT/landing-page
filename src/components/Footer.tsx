'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 text-center text-xs text-white/50 border-t border-[#18FFFF]/10 bg-[#010C1E]">
      <p>© {new Date().getFullYear()} Jurytech Solutions S.A.S. Todos los derechos reservados.</p>
    </footer>
  );
};
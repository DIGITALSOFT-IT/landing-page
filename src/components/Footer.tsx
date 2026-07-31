'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-800">
      <p>© {new Date().getFullYear()} Jurytech Solutions S.A.S. Todos los derechos reservados.</p>
    </footer>
  );
};
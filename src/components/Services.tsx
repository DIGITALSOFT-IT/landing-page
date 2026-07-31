'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Code, Scale, ChevronDown, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { servicesData, ServiceCategory, ServiceItem } from '../data/servicesData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('dev');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const currentCategory: ServiceCategory = servicesData.find(
    (cat: ServiceCategory) => cat.id === activeTab
  ) || servicesData[0];

  const toggleExpand = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="soluciones" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-10">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl sm:text-5xl font-black text-white">Catálogo de Soluciones</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base">
          Haz clic en las pestañas para cambiar de área y sobre cada tarjeta para desplegar los detalles.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-14 flex-wrap">
        {servicesData.map((cat: ServiceCategory) => {
          const isSelected = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => { setActiveTab(cat.id); setExpandedService(null); }}
              className={`flex items-center space-x-3 px-7 py-4 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg ${
                isSelected
                  ? 'bg-[#C5A059] text-slate-950 scale-105 shadow-[#C5A059]/30 ring-2 ring-amber-300'
                  : 'bg-slate-900 border border-slate-700 text-slate-200 hover:border-[#C5A059] hover:text-[#C5A059] hover:scale-102'
              }`}
            >
              {cat.id === 'dev' && <Code className="w-5 h-5" />}
              {cat.id === 'cyber' && <Shield className="w-5 h-5" />}
              {cat.id === 'legal' && <Scale className="w-5 h-5" />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentCategory.services.map((item: ServiceItem) => {
            const isExpanded = expandedService === item.id;
            return (
              <div 
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-slate-900 border-[#C5A059] shadow-xl shadow-[#C5A059]/15 scale-[1.02]' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-600 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 px-3 py-1 rounded-md">
                    #{item.id < 10 ? `0${item.id}` : item.id}
                  </span>
                  <div className="p-1 rounded-full bg-slate-800 text-slate-300">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#C5A059]' : ''}`} />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>

                {isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-200 space-y-3"
                  >
                    <p className="text-[#C5A059] font-semibold flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 inline shrink-0" />
                      <span>Acompañamiento especializado e implementación a la medida.</span>
                    </p>
                    
                    {/* BOTÓN CON CONEXIÓN AL FORMULARIO */}
                    <a 
                      href="#contacto"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(item.title);
                      }}
                      className="inline-flex items-center space-x-2 bg-[#C5A059] text-slate-950 font-bold px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors mt-2"
                    >
                      <span>Solicitar esta solución</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
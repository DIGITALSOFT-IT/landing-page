'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Code, Scale, ChevronDown, CheckCircle2, ArrowUpRight,
  Cpu, Gavel, Smartphone, Cog, BrainCircuit, FileSignature, Landmark,
  ScanText, BotMessageSquare, CloudCog, ShieldCheck, Bug, SearchCheck,
  Eye, Radar, Siren, LifeBuoy, ClipboardCheck, Building2, Handshake, IdCard,
  type LucideIcon,
} from 'lucide-react';
import { servicesData, ServiceCategory, ServiceItem } from '../data/servicesData';

const iconMap: Record<string, LucideIcon> = {
  Cpu, Gavel, Smartphone, Cog, BrainCircuit, FileSignature, Landmark,
  ScanText, BotMessageSquare, CloudCog, ShieldCheck, Shield, Bug, SearchCheck,
  Eye, Radar, Siren, LifeBuoy, Scale, ClipboardCheck, Building2, Handshake, IdCard,
};

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
    <section id="soluciones" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-10 relative">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl sm:text-5xl font-black text-[#F1E4C3]">Catálogo de Soluciones</h2>
        <p className="text-white/70 max-w-xl mx-auto text-base">
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
                  ? 'bg-[#DAB86F] text-[#010C1E] scale-105 shadow-[#DAB86F]/30'
                  : 'bg-[#081A2D] border border-[#18FFFF]/25 text-[#F1E4C3] hover:border-[#18FFFF] hover:text-[#18FFFF] hover:scale-102'
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
            const ServiceIcon = iconMap[item.icon] ?? Code;
            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${
                  isExpanded
                    ? 'bg-[#081A2D] border-[#18FFFF] shadow-xl shadow-[#18FFFF]/15 scale-[1.02]'
                    : 'bg-[#081A2D]/70 border-[#18FFFF]/10 hover:border-[#18FFFF]/50 hover:bg-[#081A2D]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#18FFFF] bg-[#18FFFF]/10 border border-[#18FFFF]/30 px-3 py-1 rounded-md">
                      #{item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                    {item.iconImage ? (
                      <div className="relative w-60 h-32 shrink-0 mx-auto flex items-center justify-center overflow-visible">
                        <div className="absolute inset-0 -z-10 rounded-full blur-xl opacity-25 bg-gradient-to-r from-[#18FFFF] to-[#DAB86F] transform scale-75" />

                        <Image
                          src={item.iconImage}
                          alt={item.title}
                          fill
                          sizes="320px"
                          quality={90}
                          className="object-contain p-0"
                        />
                      </div>
                    ) : (
                      <div className="icon-chip w-24 h-24 shrink-0 rounded-xl flex items-center justify-center">
                        <ServiceIcon className="w-12 h-12 text-[#010C1E]" strokeWidth={1.75} />
                      </div>
                    )}
                  </div>
                  <div className="p-1 rounded-full bg-[#010C1E] text-[#F1E4C3]">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#18FFFF]' : ''}`} />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[#F1E4C3] mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-sm text-white leading-relaxed font-light">
                  {item.description}
                </p>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-[#18FFFF]/15 text-xs text-white space-y-3"
                  >
                    <p className="text-[#18FFFF] font-semibold flex items-center space-x-2">
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
                      className="inline-flex items-center space-x-2 bg-[#DAB86F] text-[#010C1E] font-bold px-4 py-2 rounded-lg hover:bg-[#E8CA8C] transition-colors mt-2"
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
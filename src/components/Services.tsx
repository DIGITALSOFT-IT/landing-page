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

  const currentCategory: ServiceCategory =
    servicesData.find((cat: ServiceCategory) => cat.id === activeTab) || servicesData[0];

  const toggleExpand = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="soluciones" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20 relative">
      {/* Encabezado */}
      <div className="text-center mb-12 space-y-3">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D5A45A]">
          Portafolio Especializado
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#F6ECD7]">
          Catálogo de <span className="text-gradient-brand">Soluciones</span>
        </h2>
        <p className="text-[#9BB0C5] max-w-2xl mx-auto text-base">
          Selecciona un área de práctica y haz clic sobre cada tarjeta para conocer el alcance de
          nuestro acompañamiento e iniciar tu solicitud.
        </p>
      </div>

      {/* Pestañas de Categoría */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {servicesData.map((cat: ServiceCategory) => {
          const isSelected = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setExpandedService(null);
              }}
              className={`flex items-center space-x-3 px-7 py-4 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg cursor-pointer ${
                isSelected
                  ? 'bg-gold-metallic text-[#020B1A] scale-105 shadow-[#D5A45A]/30'
                  : 'bg-[#061936]/90 border border-[#9BB0C5]/25 text-[#F6ECD7] hover:border-[#D5A45A]/60 hover:text-[#F2D69E]'
              }`}
            >
              {cat.id === 'dev' && <Code className="w-5 h-5" />}
              {cat.id === 'cyber' && <Shield className="w-5 h-5" />}
              {cat.id === 'legal' && <Scale className="w-5 h-5" />}
              <span>{cat.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-extrabold ${
                  isSelected
                    ? 'bg-[#020B1A]/20 text-[#020B1A]'
                    : 'bg-[#020B1A]/60 text-[#D5A45A]'
                }`}
              >
                {cat.services.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Descripción de la Categoría Activa */}
      <div className="max-w-2xl mx-auto text-center mb-12 px-5 py-3 rounded-xl bg-[#051630]/70 border border-[#D5A45A]/20">
        <p className="text-sm text-[#CBD5E1]">{currentCategory.description}</p>
      </div>

      {/* Grilla de Tarjetas */}
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
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'card-luxury border-[#D5A45A] shadow-xl shadow-[#D5A45A]/15 scale-[1.01]'
                    : 'card-luxury border-[#9BB0C5]/15 hover:border-[#D5A45A]/55 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Barra Superior de la Tarjeta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#F2D69E] bg-[#D5A45A]/15 border border-[#D5A45A]/35 px-3 py-1 rounded-md">
                      #{item.id < 10 ? `0${item.id}` : item.id}
                    </span>

                    <div
                      className={`p-1.5 rounded-full border transition-colors ${
                        isExpanded
                          ? 'bg-[#D5A45A]/20 border-[#D5A45A]/50 text-[#F2D69E]'
                          : 'bg-[#031024] border-[#9BB0C5]/20 text-[#9BB0C5]'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#F2D69E]' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Escenario Visual del Ícono / Ilustración */}
                  {item.iconImage ? (
                    <div className="relative w-full h-36 mb-5 rounded-xl bg-[#031024]/85 border border-[#9BB0C5]/15 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-radial from-[#D5A45A]/15 via-[#648CA4]/10 to-transparent opacity-80" />
                      <div className="relative w-52 h-32">
                        <Image
                          src={item.iconImage}
                          alt={item.title}
                          fill
                          sizes="240px"
                          quality={90}
                          className="object-contain p-1 transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="icon-chip w-16 h-16 mb-5 rounded-xl flex items-center justify-center">
                      <ServiceIcon className="w-8 h-8 text-[#F2D69E]" strokeWidth={1.75} />
                    </div>
                  )}

                  <h4 className="text-xl font-bold text-[#F6ECD7] mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Panel Desplegable */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-5 pt-4 border-t border-[#D5A45A]/25 text-xs text-white space-y-3.5"
                  >
                    <p className="text-[#F2D69E] font-semibold flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 inline shrink-0 text-[#D5A45A]" />
                      <span>Acompañamiento especializado e implementación a la medida.</span>
                    </p>

                    <a
                      href="#contacto"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(item.title);
                      }}
                      className="inline-flex items-center space-x-2 bg-gold-metallic text-[#020B1A] font-bold px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#D5A45A]/20"
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

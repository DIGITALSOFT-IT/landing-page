'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BotMessageSquare,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  MessageSquareMore,
  Scale,
  Cpu,
  Layers,
  ExternalLink,
} from 'lucide-react';

interface ProductFeature {
  label: string;
}

interface SoftwareProduct {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  logo: string;
  url: string;
  ctaLabel: string;
  serviceInquiryTitle: string;
  accent: 'gold' | 'tech';
  lightLogoBg?: boolean;
  icon: React.ElementType;
  features: ProductFeature[];
  relatedPillars: string[];
}

const softwareProducts: SoftwareProduct[] = [
  {
    id: 'kibo',
    name: 'Kibo CRM',
    tagline: 'CRM Inteligente & Automatización con IA para WhatsApp',
    badge: 'Atención & Conversión IA',
    description:
      'Plataforma omnicanal impulsada por Inteligencia Artificial que centraliza, automatiza y potencia la atención de clientes, agendamiento y seguimiento comercial a través de WhatsApp y canales digitales.',
    logo: '/images/services/kibo.png',
    url: 'https://kibocrm.jurytechsolutions.com',
    ctaLabel: 'Ingresar a Kibo CRM',
    serviceInquiryTitle: 'Producto de Software: Kibo CRM',
    accent: 'tech',
    lightLogoBg: false,
    icon: BotMessageSquare,
    features: [
      { label: 'Asistentes conversacionales con IA 24/7 en WhatsApp' },
      { label: 'Gestión de embudos comerciales, leads y trazabilidad en tiempo real' },
      { label: 'Automatización de respuestas, asignación de agentes y reportes' },
    ],
    relatedPillars: ['Asistentes Virtuales & IA', 'Automatización Comercial', 'Cloud SaaS'],
  },
  {
    id: 'zyron',
    name: 'Zyron',
    tagline: 'Plataforma Corporativa de Gestión, LegalTech & Operación Segura',
    badge: 'Ecosistema Empresarial & LegalTech',
    description:
      'Suite tecnológica integral diseñada para digitalizar la operación institucional, centralizar expedientes, automatizar flujos jurídicos y garantizar trazabilidad bajo altos estándares de seguridad.',
    logo: '/images/services/zyron (2).png',
    url: 'https://app.jurytechsolutions.com/login',
    ctaLabel: 'Acceder a Zyron',
    serviceInquiryTitle: 'Producto de Software: Plataforma Zyron',
    accent: 'gold',
    lightLogoBg: true,
    icon: Layers,
    features: [
      { label: 'Gestión centralizada de procesos, documentos y flujos de trabajo' },
      { label: 'Control de accesos, auditoría de eventos y blindaje de información' },
      { label: 'Analítica ejecutiva e integración con nuestros servicios corporativos' },
    ],
    relatedPillars: ['Plataformas LegalTech', 'Ciberseguridad & Control', 'Ingeniería a Medida'],
  },
];

interface ProductsProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectService }) => {
  return (
    <section
      id="productos"
      className="py-24 px-6 relative scroll-mt-20 border-b border-[#D5A45A]/20 overflow-hidden"
    >
      {/* Iluminación ambiental de fondo */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D5A45A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#648CA4]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#061936]/90 border border-[#D5A45A]/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D5A45A]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#F2D69E]">
              Ecosistema de Software Propio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F6ECD7] leading-tight">
            Nuestros Productos <span className="text-gradient-brand">Tecnológicos</span>
          </h2>

          <p className="text-[#9BB0C5] text-base sm:text-lg leading-relaxed">
            Materializamos nuestra experiencia en ingeniería de software, inteligencia artificial y
            rigor jurídico en plataformas listas para transformar tu organización. Haz clic en
            cualquier producto para acceder directamente o solicita una demostración guiada.
          </p>
        </div>

        {/* Grilla de Productos: Kibo y Zyron */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {softwareProducts.map((product, index) => {
            const IconComponent = product.icon;
            const isGold = product.accent === 'gold';

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative rounded-3xl card-luxury border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                  isGold
                    ? 'border-[#D5A45A]/35 hover:border-[#D5A45A] hover:shadow-[0_20px_50px_rgba(213,164,90,0.18)]'
                    : 'border-[#9BB0C5]/30 hover:border-[#648CA4] hover:shadow-[0_20px_50px_rgba(100,140,164,0.22)]'
                }`}
              >
                {/* Barra superior luminosa */}
                <div
                  className={`h-1.5 w-full ${
                    isGold
                      ? 'bg-gradient-to-r from-[#D5A45A] via-[#F2D69E] to-[#A3722E]'
                      : 'bg-gradient-to-r from-[#648CA4] via-[#E2E8F0] to-[#D5A45A]'
                  }`}
                />

                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between space-y-7">
                  <div className="space-y-6">
                    {/* Cabecera de la tarjeta: Badge + Enlace rápido */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span
                        className={`inline-flex items-center space-x-2 text-xs font-bold px-3.5 py-1.5 rounded-full border ${
                          isGold
                            ? 'bg-[#D5A45A]/15 border-[#D5A45A]/45 text-[#F2D69E]'
                            : 'bg-[#648CA4]/20 border-[#9BB0C5]/40 text-[#E2E8F0]'
                        }`}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>{product.badge}</span>
                      </span>

                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#9BB0C5] hover:text-[#F2D69E] transition-colors"
                      >
                        <span>Plataforma en línea</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </a>
                    </div>

                    {/* Escenario Visual del Logo (Clickable hacia el producto) */}
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ir a ${product.name}`}
                      className="block relative rounded-2xl overflow-hidden border border-[#9BB0C5]/20 group-hover:border-[#D5A45A]/60 transition-all duration-500"
                    >
                      <div
                        className={`relative w-full h-52 sm:h-56 flex items-center justify-center p-6 transition-all duration-500 ${
                          product.lightLogoBg
                            ? 'bg-gradient-to-br from-[#F8FAFC] via-[#EEF2F6] to-[#E2E8F0] shadow-inner'
                            : 'bg-gradient-to-b from-[#04132C] via-[#031024] to-[#020B1A]'
                        }`}
                      >
                        {/* Efecto de resplandor interno */}
                        {!product.lightLogoBg && (
                          <div className="absolute inset-0 bg-radial from-[#648CA4]/25 via-[#D5A45A]/10 to-transparent opacity-80" />
                        )}

                        <div className="relative w-full h-full max-w-[300px] max-h-[165px] transition-transform duration-500 group-hover:scale-108">
                          <Image
                            src={product.logo}
                            alt={`Logo de ${product.name}`}
                            fill
                            sizes="(max-width: 768px) 280px, 340px"
                            quality={90}
                            className="object-contain"
                          />
                        </div>

                        {/* Etiqueta flotante intuitiva al hacer hover */}
                        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#020B1A]/90 border border-[#D5A45A]/45 text-[#F2D69E] text-[11px] font-bold flex items-center space-x-1.5 backdrop-blur-md shadow-lg group-hover:bg-[#D5A45A] group-hover:text-[#020B1A] transition-all duration-300">
                          <span>Clic para abrir plataforma</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </a>

                    {/* Título y Descripción */}
                    <div className="space-y-2.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-2xl sm:text-3xl font-black text-[#F6ECD7] group-hover:text-[#F2D69E] transition-colors">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-[#D5A45A] tracking-wide">
                        {product.tagline}
                      </p>
                      <p className="text-sm text-[#CBD5E1] leading-relaxed pt-1">
                        {product.description}
                      </p>
                    </div>

                    {/* Beneficios clave */}
                    <div className="space-y-2.5 pt-1">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                          <CheckCircle2 className="w-4 h-4 text-[#D5A45A] shrink-0 mt-0.5" />
                          <span>{feat.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Píldoras de conexión con los Servicios de Jurytech */}
                    <div className="pt-2 border-t border-[#9BB0C5]/15">
                      <span className="block text-[11px] uppercase tracking-wider text-[#9BB0C5] font-semibold mb-2.5">
                        Servicios Jurytech integrados en {product.name}:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.relatedPillars.map((pillar) => (
                          <a
                            key={pillar}
                            href="#soluciones"
                            className="text-[11px] font-medium px-3 py-1 rounded-lg bg-[#051630] border border-[#9BB0C5]/25 text-[#CBD5E1] hover:border-[#D5A45A]/60 hover:text-[#F2D69E] transition-colors"
                          >
                            {pillar}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Botones de Acción (Redirección Directa + Conocer/Solicitar Demo) */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gold-metallic text-[#020B1A] font-black px-6 py-3.5 rounded-xl text-sm inline-flex items-center justify-center space-x-2 shadow-lg shadow-[#D5A45A]/25 hover:scale-[1.02] active:scale-98 transition-all"
                    >
                      <span>{product.ctaLabel}</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>

                    <a
                      href="#contacto"
                      onClick={() => onSelectService?.(product.serviceInquiryTitle)}
                      className="px-5 py-3.5 rounded-xl bg-[#061936]/90 hover:bg-[#0B264E] text-[#F6ECD7] border border-[#9BB0C5]/30 hover:border-[#D5A45A]/70 text-sm font-bold inline-flex items-center justify-center space-x-2 transition-all"
                    >
                      <MessageSquareMore className="w-4 h-4 text-[#D5A45A]" />
                      <span>Solicitar Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cinta inferior de sinergia: Productos <-> Servicios a la medida */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#051630]/95 via-[#081F40]/95 to-[#051630]/95 border border-[#D5A45A]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-start sm:items-center space-x-4 text-left">
            <div className="hidden sm:flex p-3.5 rounded-2xl bg-[#D5A45A]/15 border border-[#D5A45A]/40 text-[#F2D69E] shrink-0">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#F6ECD7]">
                ¿Buscas personalizar estos productos o desarrollar una solución propia?
              </h4>
              <p className="text-xs sm:text-sm text-[#9BB0C5] mt-1 max-w-2xl">
                Tanto <strong className="text-[#F2D69E]">Kibo</strong> como{' '}
                <strong className="text-[#F2D69E]">Zyron</strong> se integran directamente con
                nuestra consultoría jurídica, ciberseguridad ISO 27001 y desarrollo de software a la
                medida.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="#soluciones"
              className="w-full md:w-auto text-center px-6 py-3.5 rounded-xl bg-[#020B1A] border border-[#D5A45A]/50 text-[#F2D69E] hover:bg-[#D5A45A] hover:text-[#020B1A] text-xs sm:text-sm font-bold transition-all duration-300"
            >
              Ver todos nuestros servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


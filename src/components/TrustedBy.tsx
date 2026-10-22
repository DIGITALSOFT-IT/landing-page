'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { partnersData } from '../data/partnersData';

export const TrustedBy: React.FC = () => {
  return (
    <section
      id="aliados"
      className="py-20 px-6 bg-[#031024]/90 border-y border-[#D5A45A]/20 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#D5A45A] font-bold">
            Respaldo y Trayectoria Institucional
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#F6ECD7]">
            Entidades y organizaciones que confían en nosotros
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-between p-4 rounded-2xl bg-[#061936]/75 border border-[#9BB0C5]/15 hover:border-[#D5A45A]/60 transition-all duration-300 shadow-lg hover:shadow-[#D5A45A]/10 hover:-translate-y-1"
            >
              <div
                className={`relative w-full h-20 rounded-xl overflow-hidden flex items-center justify-center p-2.5 transition-all duration-300 ${
                  partner.lightBg
                    ? 'bg-white/95 shadow-inner'
                    : 'bg-[#020B1A]/80'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="200px"
                    quality={90}
                    className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>

              <span className="mt-3 text-[11px] font-medium text-[#9BB0C5] group-hover:text-[#F2D69E] text-center line-clamp-1 transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

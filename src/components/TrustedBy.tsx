'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { partnersData } from '../data/partnersData';

export const TrustedBy: React.FC = () => {
  return (
    <section id="aliados" className="py-16 px-6 bg-circuit-mesh border-y border-[#18FFFF]/10 relative scroll-mt-10">
      <p className="text-center text-xs sm:text-sm uppercase tracking-[0.25em] text-white/50 font-semibold mb-10">
        Empresas que confían en nosotros
      </p>

      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
        {partnersData.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative h-16 w-32 sm:h-20 sm:w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              sizes="160px"
              quality={90}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

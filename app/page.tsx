'use client';

import React, { useState } from 'react';
import { Navbar } from '../src/components/Navbar';
import { Hero } from '../src/components/Hero';
import { TrustedBy } from '../src/components/TrustedBy';
import { About } from '../src/components/About';
import { Services } from '../src/components/Services';
import { Contact } from '../src/components/Contact';
import { Footer } from '../src/components/Footer';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>('Consultoría General');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-circuit-mesh text-white selection:bg-[#DAB86F] selection:text-[#010C1E] font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services onSelectService={handleSelectService} />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Navbar } from '../src/components/Navbar';
import { Hero } from '../src/components/Hero';
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
    <div className="min-h-screen bg-[#060B14] text-slate-100 selection:bg-[#C5A059] selection:text-slate-950 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
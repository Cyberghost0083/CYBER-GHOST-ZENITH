/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { PromoArea } from './components/PromoArea';
import { ServiceIcons, ServiceItem } from './components/ServiceIcons';
import { ContactSection } from './components/ContactSection';
import { ServiceModal } from './components/ServiceModal';
import { ResetModal } from './components/ResetModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between relative font-sans selection:bg-[#d61e27] selection:text-white">
      {/* 
        6. RIGHT EDGE:
        Thin vertical red line positioned close to the far-right edge of the viewport
      */}
      <div 
        className="fixed top-0 bottom-0 right-0 w-[4.5px] bg-[#d61e27] z-50 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Page Container: Matches reference desktop composition, proportions & whitespace */}
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex-1 flex flex-col justify-between">
        
        {/* 1. HEADER SECTION */}
        <Header />

        {/* 2 & 3. MAIN PROMOTIONAL AREA & LOGIN PANEL */}
        <main className="w-full flex-1 flex flex-col justify-center my-2">
          <PromoArea 
            onResetClick={() => setIsResetModalOpen(true)}
          />

          {/* 4. SERVICE ICON ROW (5 Circular Red Icons) */}
          <ServiceIcons onSelectService={handleSelectService} />
        </main>

        {/* 5 & 7. CONTACT SECTION & BOTTOM-RIGHT SYSTEM TEXT */}
        <ContactSection />
      </div>

      {/* Service Detail Modal for safe visual exploration */}
      <ServiceModal
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />

      {/* Forgot Password Reset Modal */}
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
      />
    </div>
  );
}

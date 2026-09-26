import React from 'react';
import { KeyRound, CreditCard, Cog, HelpCircle, HandCoins } from 'lucide-react';

export interface ServiceItem {
  id: string;
  line1: string;
  line2?: string;
  fullName: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceIconsProps {
  onSelectService: (service: ServiceItem) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'token-pin-reset',
    line1: 'Token',
    line2: 'Pin Reset',
    fullName: 'Token Pin Reset',
    description: 'Quickly synchronize or reset your hardware and soft token PIN credentials in demo mode.',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <path d="M10 4h4" />
      </svg>
    ),
  },
  {
    id: 'dispense-error',
    line1: 'Dispense',
    line2: 'Error',
    fullName: 'Dispense Error',
    description: 'Log and track ATM or POS dispensing discrepancies and reversal status.',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="9" y2="15" />
        <circle cx="17" cy="15" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'self-service',
    line1: 'Self',
    line2: 'Service',
    fullName: 'Self Service',
    description: 'Manage account statement generation, card control settings, and limit alterations online.',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M18 9l2 2 4-4" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: 'faqs',
    line1: 'FAQs',
    line2: '',
    fullName: 'FAQs',
    description: 'Answers to frequently asked questions regarding internet banking, security, and digital tokens.',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'other-services',
    line1: 'Other',
    line2: 'Services',
    fullName: 'Other Services',
    description: 'Access tax payments, treasury bills, bulk payroll disbursements, and branch appointment scheduling.',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export const ServiceIcons: React.FC<ServiceIconsProps> = ({ onSelectService }) => {
  return (
    <section className="w-full my-6 py-2" aria-label="Quick Banking Services">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 sm:gap-6">
        {servicesData.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelectService(service)}
            className="group flex items-center gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d61e27] rounded-lg p-1.5 transition-transform duration-150 hover:-translate-y-0.5"
          >
            {/* Circular Red Service Icon matching reference */}
            <div className="w-[50px] h-[50px] rounded-full bg-[#d61e27] group-hover:bg-[#b81804] group-active:scale-95 shadow-sm flex items-center justify-center shrink-0 transition-colors">
              {service.icon}
            </div>

            {/* Label to the Right of the Circular Icon */}
            <div className="flex flex-col text-left leading-[1.18]">
              <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#222222] group-hover:text-[#d61e27] transition-colors">
                {service.line1}
              </span>
              {service.line2 && (
                <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#222222] group-hover:text-[#d61e27] transition-colors">
                  {service.line2}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

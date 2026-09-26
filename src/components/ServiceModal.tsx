import React from 'react';
import { X, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from './ServiceIcons';

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d81e06] flex items-center justify-center text-white shrink-0">
              {service.icon}
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-gray-900 leading-tight">
                {service.fullName}
              </h3>
              <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                Digital Service Portal
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-4 text-gray-600 text-[14px] leading-relaxed space-y-3">
          <p>{service.description}</p>

          <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl text-red-900 text-[12px] flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#d81e06] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-[13px] text-[#d81e06]">
                Visual Simulation Notice
              </span>
              This interface is an accurate visual demonstration mockup. No actual account actions or credential queries will be performed.
            </div>
          </div>

          <div className="space-y-1.5 pt-2 text-[13px]">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Simulated encrypted channel active</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>24/7 self-service routing available</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-[13px] font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

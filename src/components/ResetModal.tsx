import React, { useState } from 'react';
import { X, KeyRound, Info, Check } from 'lucide-react';

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResetModal: React.FC<ResetModalProps> = ({ isOpen, onClose }) => {
  const [accountOrEmail, setAccountOrEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d81e06] flex items-center justify-center text-white shrink-0">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-gray-900 leading-tight">
                Reset Credentials
              </h3>
              <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                Self-Service Recovery
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

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="py-4 space-y-4">
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Please enter your registered Account Number or Username to receive password reset instructions.
            </p>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-[12px] flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Demonstration mode: No personal data or credentials are required or processed.
              </span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Account Number or User ID"
                value={accountOrEmail}
                onChange={(e) => setAccountOrEmail(e.target.value)}
                className="w-full h-11 px-3.5 bg-white border border-gray-300 rounded-lg text-[14px] text-gray-800 focus:outline-none focus:border-[#d81e06] focus:ring-2 focus:ring-red-500/20"
                autoComplete="off"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 text-[13px] font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#d81e06] hover:bg-[#b81804] text-white text-[13px] font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h4 className="text-[16px] font-bold text-gray-900">
              Demo Simulation Successful
            </h4>
            <p className="text-[13px] text-gray-500 max-w-xs mx-auto">
              In a live banking environment, a secure verification token would be dispatched to your registered device.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

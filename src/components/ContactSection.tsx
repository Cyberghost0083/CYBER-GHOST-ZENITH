import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <footer className="w-full pt-4 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      {/* Bottom-Left Contact Information Block matching reference */}
      <div className="flex flex-col text-[13px] sm:text-[13.5px] text-[#333333] leading-[1.45] select-text">
        <span className="text-[#333333] font-normal">
          For enquires contact:
        </span>
        <span className="font-bold text-[#111111] text-[14px]">
          ZenithDirect (24hr Interactive Contact Centre)
        </span>
        <div className="text-[#333333]">
          Email: <a href="mailto:zenithdirect@zenithbank.com" className="hover:underline">zenithdirect@zenithbank.com</a>
        </div>
        <div className="text-[#333333] font-medium">
          +2342012787000 | 09119877000 | 0700ZENITHBANK (0700-936-4842265)
        </div>
      </div>

      {/* Bottom-Right Faint Watermark Text from reference */}
      <div className="flex flex-col items-start md:items-end text-[13px] text-gray-400 select-none leading-snug">
        <span className="text-[13.5px]">Activate Windows</span>
        <span className="text-[12px] text-gray-400/90">Go to Settings to activate Windows.</span>
      </div>
    </footer>
  );
};

import React from 'react';
import { ZenithLogo } from './ZenithLogo';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex items-start justify-between pt-6 pb-4">
      {/* Top-Left Welcome Heading */}
      <div className="flex flex-col">
        <span className="text-[14px] text-[#222222] font-semibold tracking-normal">
          Welcome to
        </span>
        <h1 className="text-[26px] sm:text-[29px] font-bold tracking-tight leading-tight mt-0.5 flex items-baseline gap-2">
          <span className="text-[#6b7280]">Zenith Bank</span>
          <span className="text-[#d61e27]">Internet Banking</span>
        </h1>
      </div>

      {/* Top-Right Zenith Logo */}
      <div className="flex items-center pr-3 sm:pr-6">
        <ZenithLogo size={64} />
      </div>
    </header>
  );
};

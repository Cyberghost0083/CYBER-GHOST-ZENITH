import React, { useState } from 'react';
import { ChevronDown, Check, User, Lock, Info } from 'lucide-react';

interface LoginCardProps {
  onResetClick?: () => void;
}

export const LoginCard: React.FC<LoginCardProps> = ({ onResetClick }) => {
  const [loginMethod, setLoginMethod] = useState<'Pin + Token' | 'Password only' | 'Token only'>('Pin + Token');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [pinToken, setPinToken] = useState('');
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional visual demo only - no transmission or storage
    setDemoNotice(
      'Visual Demo: No credentials are submitted, stored, or processed.'
    );
    setTimeout(() => {
      setDemoNotice(null);
    }, 4000);
  };

  return (
    <div className="relative w-full max-w-[340px] bg-white/75 backdrop-blur-[2px] rounded-xl border border-white/80 shadow-xl p-6 flex flex-col justify-between">
      {/* Centered Instruction matching reference */}
      <div className="text-center mb-5">
        <h2 className="text-[14px] sm:text-[15px] text-[#222222] font-normal leading-snug">
          Please choose how you would like<br />to Log in today
        </h2>
      </div>

      {/* Visual Login Controls */}
      <form onSubmit={handleDemoLogin} className="flex flex-col gap-3.5">
        {/* Dropdown-style selector: "Pin + Token" with thin dark border and 75% opacity */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full h-10 px-3.5 bg-white/75 border border-[#4a4a4a] rounded-sm flex items-center justify-between text-[13.5px] text-[#222] hover:border-black focus:outline-none transition-colors"
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            <span>{loginMethod}</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                dropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-md border border-gray-300 rounded-sm shadow-lg py-1 z-30 animate-in fade-in duration-100">
              {(['Pin + Token', 'Password only', 'Token only'] as const).map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => {
                    setLoginMethod(method);
                    setDropdownOpen(false);
                  }}
                  className="w-full px-3.5 py-1.5 text-left text-[13.5px] flex items-center justify-between hover:bg-red-50 hover:text-[#d61e27] transition-colors"
                >
                  <span className={loginMethod === method ? 'font-semibold text-[#d61e27]' : 'text-gray-700'}>
                    {method}
                  </span>
                  {loginMethod === method && <Check className="w-4 h-4 text-[#d61e27]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Account Number Input with split user icon compartment */}
        <div className="h-10 bg-white/75 border border-[#4a4a4a] rounded-sm flex overflow-hidden focus-within:border-black focus-within:ring-1 focus-within:ring-black">
          <div className="w-10 border-r border-[#4a4a4a] flex items-center justify-center bg-white/50 text-gray-700 shrink-0">
            <User className="w-4 h-4 text-[#333333] stroke-[2]" />
          </div>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full h-full px-3 text-[13.5px] text-[#222] placeholder-gray-500 focus:outline-none bg-transparent"
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        {/* PIN / Token Input with split lock icon compartment */}
        <div className="h-10 bg-white/75 border border-[#4a4a4a] rounded-sm flex overflow-hidden focus-within:border-black focus-within:ring-1 focus-within:ring-black">
          <div className="w-10 border-r border-[#4a4a4a] flex items-center justify-center bg-white/50 text-gray-700 shrink-0">
            <Lock className="w-4 h-4 text-[#333333] stroke-[2]" />
          </div>
          <input
            type="password"
            placeholder={loginMethod}
            value={pinToken}
            onChange={(e) => setPinToken(e.target.value)}
            className="w-full h-full px-3 text-[13.5px] text-[#222] placeholder-gray-500 focus:outline-none bg-transparent"
            autoComplete="off"
          />
        </div>

        {/* Red LOGIN Button matching reference */}
        <button
          type="submit"
          className="w-full h-10 mt-1 bg-[#d61e27] hover:bg-[#b81804] active:bg-[#9e141f] text-white font-bold text-[14px] tracking-wider uppercase rounded-xs transition-colors flex items-center justify-center cursor-pointer shadow-xs"
        >
          LOGIN
        </button>

        {/* Demo Notice Toast if button clicked */}
        {demoNotice && (
          <div className="p-2 bg-amber-50 border border-amber-200 rounded-sm text-amber-900 text-[11px] leading-tight flex items-start gap-1.5 animate-in fade-in duration-150">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span>{demoNotice}</span>
          </div>
        )}

        {/* Forgot password? Reset line */}
        <div className="text-center mt-1">
          <span className="text-[13px] text-[#444444]">
            Forgot password?{' '}
            <button
              type="button"
              onClick={onResetClick}
              className="text-[#d61e27] font-semibold hover:underline cursor-pointer focus:outline-none"
            >
              Reset
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

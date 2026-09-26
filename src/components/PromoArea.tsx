import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LoginCard } from './LoginCard';
import { ZenithLogo } from './ZenithLogo';

// Slide 1: Dangote Refinery IPO (Night lit plant)
import refineryImage from '../assets/images/refinery_night_banner_1790426870701.jpg';
// Slide 2: Mobile Lifestyle (Woman with smartphone)
import simpleBankingImage from '../assets/images/simple_banking_banner_1790427878891.jpg';
// Slide 3: Corporate & Global Trade (Business executive)
import businessTradeImage from '../assets/images/zenith_business_trade_1790428393402.jpg';
// Slide 4: Contactless Digital Payments (Premium card tap)
import contactlessCardImage from '../assets/images/zenith_contactless_card_1790428408050.jpg';

interface PromoAreaProps {
  onResetClick?: () => void;
}

export const PromoArea: React.FC<PromoAreaProps> = ({ onResetClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = 4;

  // Automatic 10-second picture rotation (no timer text displayed on screen)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((curr) => (curr + 1) % TOTAL_SLIDES);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((curr) => (curr + 1) % TOTAL_SLIDES);
  };

  const handlePrev = () => {
    setCurrentSlide((curr) => (curr - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full my-3">
      {/* 
        Main Promotional Hero Area with Automatic 30-Second Carousel
        The 75% translucent login card floats steadily on the right across all transitions.
      */}
      <div 
        className="relative w-full min-h-[420px] lg:h-[460px] bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch select-none"
      >
        {/* SVG Clip Path Definition for Slide 1 curved transition */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="refineryCurve" clipPathUnits="objectBoundingBox">
              <path d="M 0.16 0 C 0.09 0.42 0.03 0.75 0 1 L 1 1 L 1 0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* ========================================================
            SLIDE 1: DANGOTE REFINERY IPO (mmmm.png)
            ======================================================== */}
        <div
          className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row items-stretch transition-opacity duration-700 ease-in-out ${
            currentSlide === 0 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Nighttime Lit-Up Refinery Photo (Center & Right) */}
          <div
            className="absolute inset-y-0 right-0 w-full lg:w-[68%] h-full overflow-hidden rounded-r-2xl"
            style={{ clipPath: 'url(#refineryCurve)' }}
          >
            <img
              src={refineryImage}
              alt="Petroleum Refinery Facility at Night"
              className="w-full h-full object-cover object-[center_35%] filter brightness-95 contrast-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
          </div>

          {/* Left Side: Dangote IPO Typography & Slogan */}
          <div className="relative z-10 w-full lg:w-[48%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            {/* Top Sponsor Lockup */}
            <div className="flex items-center gap-3 sm:gap-4 ml-auto lg:mr-4 mb-4">
              <div className="flex flex-col items-center">
                <ZenithLogo size={36} />
              </div>
              <div className="h-9 w-px bg-gray-300" />
              <div className="border border-blue-900/60 rounded px-1.5 py-0.5 bg-white shadow-xs text-center flex flex-col justify-center">
                <span className="text-[8px] font-black text-blue-950 uppercase tracking-tighter leading-tight">
                  DANGOTE
                </span>
                <span className="text-[6.5px] font-bold text-red-600 uppercase tracking-tight -mt-0.5">
                  PETROLEUM
                </span>
                <span className="text-[6px] font-semibold text-blue-950 uppercase tracking-tighter -mt-0.5">
                  REFINERY
                </span>
              </div>
              <div className="flex flex-col leading-[1.05] font-black uppercase text-[11px] sm:text-[12px] tracking-tight">
                <span className="text-blue-950">NA</span>
                <span className="text-blue-950">YOUR</span>
                <span className="text-[#d61e27]">OWN.</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="my-auto">
              <h2 className="text-[22px] sm:text-[25px] font-bold text-black tracking-tight leading-tight">
                You can<br />subscribe for the
              </h2>
              <div className="mt-1">
                <div className="text-[34px] sm:text-[42px] lg:text-[46px] font-black tracking-tight text-[#0a1836] leading-[1.05] uppercase">
                  DANGOTE
                </div>
                <div className="text-[34px] sm:text-[42px] lg:text-[46px] font-black tracking-tight text-[#0a1836] leading-[1.05] uppercase">
                  REFINERY IPO
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[17px] sm:text-[19px] font-bold">
                <span className="text-black font-black uppercase">ON</span>
                <ZenithLogo size={22} className="inline-block mx-0.5" />
                <span className="text-[#d61e27] font-black uppercase">INTERNET</span>
                <span className="text-black font-black uppercase">BANKING</span>
              </div>
            </div>
            <div className="h-2" />
          </div>
        </div>

        {/* ========================================================
            SLIDE 2: SIMPLE BANKING (jjjjjj.png)
            ======================================================== */}
        <div
          className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row items-stretch transition-opacity duration-700 ease-in-out ${
            currentSlide === 1 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image: Woman on mobile smartphone */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={simpleBankingImage}
              alt="Simple banking at your fingertips"
              className="w-full h-full object-cover object-[72%_30%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent lg:from-[#2e2321]/95 lg:via-[#3d2f2b]/70 lg:to-transparent" />
            <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] bg-[#2a1e1b]/40 mix-blend-multiply" />
          </div>

          {/* Left Side: Headline */}
          <div className="relative z-10 w-full lg:w-[48%] p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-white">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-normal text-white tracking-tight leading-[1.2] drop-shadow-sm">
              Simple banking at<br />your fingertips
            </h2>
            <p className="mt-4 text-gray-200 text-[14px] sm:text-[15px] font-light max-w-sm leading-relaxed">
              Transfer funds, pay bills, and manage accounts securely from anywhere, on any device.
            </p>
          </div>
        </div>

        {/* ========================================================
            SLIDE 3: CORPORATE & SME TRADE (Business executive)
            ======================================================== */}
        <div
          className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row items-stretch transition-opacity duration-700 ease-in-out ${
            currentSlide === 2 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image: Business executive in modern office */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={businessTradeImage}
              alt="Corporate and SME Trade Banking"
              className="w-full h-full object-cover object-[65%_25%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e38]/95 via-[#162a4d]/75 to-transparent" />
          </div>

          {/* Left Side: Headline */}
          <div className="relative z-10 w-full lg:w-[48%] p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-white">
            <span className="text-[#e2001a] font-bold text-xs uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#e2001a]" />
              Zenith Commercial & Corporate
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-normal text-white tracking-tight leading-[1.2] drop-shadow-sm">
              Powering business<br />across borders
            </h2>
            <p className="mt-4 text-gray-200 text-[14px] sm:text-[15px] font-light max-w-sm leading-relaxed">
              Global trade services, FX solutions, and automated treasury disbursement for growing enterprises.
            </p>
          </div>
        </div>

        {/* ========================================================
            SLIDE 4: CONTACTLESS PAYMENTS & CARDS
            ======================================================== */}
        <div
          className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row items-stretch transition-opacity duration-700 ease-in-out ${
            currentSlide === 3 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image: Contactless premium card tap */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={contactlessCardImage}
              alt="Fast and secure contactless payments"
              className="w-full h-full object-cover object-[75%_35%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#21090d]/95 via-[#381017]/70 to-transparent" />
          </div>

          {/* Left Side: Headline */}
          <div className="relative z-10 w-full lg:w-[48%] p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-white">
            <span className="text-[#ff5252] font-bold text-xs uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff5252]" />
              Zenith Cards & Lifestyle
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-normal text-white tracking-tight leading-[1.2] drop-shadow-sm">
              Fast, secure &<br />contactless
            </h2>
            <p className="mt-4 text-gray-200 text-[14px] sm:text-[15px] font-light max-w-sm leading-relaxed">
              Tap and go with chip-and-PIN protection on all Zenith debit, credit, and prepaid cards.
            </p>
          </div>
        </div>

        {/* ========================================================
            PERSISTENT 75% TRANSLUCENT LOGIN CARD
            Shifted significantly leftward matching screenshot framing
            ======================================================== */}
        <div className="relative z-20 w-full lg:w-[50%] p-4 sm:p-6 lg:py-8 flex items-center justify-center lg:justify-end lg:pr-24 xl:pr-36 ml-auto pointer-events-auto">
          <LoginCard onResetClick={onResetClick} />
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer border border-white/20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute left-12 sm:left-14 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer border border-white/20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Carousel Slide Indicators (Clean dots, no timer display) */}
        <div className="absolute bottom-4 left-6 sm:left-10 z-30 flex items-center gap-2 bg-black/30 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-white/10">
          {[0, 1, 2, 3].map((idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="group relative cursor-pointer focus:outline-none"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-6 bg-[#d61e27]' : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

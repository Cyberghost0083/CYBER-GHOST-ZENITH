import React from 'react';

interface ZenithLogoProps {
  className?: string;
  size?: number | string;
}

export const ZenithLogo: React.FC<ZenithLogoProps> = ({
  className = '',
  size = 64,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none bg-transparent ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
      title="Zenith Bank"
    >
      <svg
        viewBox="0 0 280 280"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Zenith Bank Logo"
      >
        {/* Grey Upper 'Z' Geometric Element */}
        <path
          d="M 50 86 C 48 64 56 42 70 20 L 246 20 L 48 188 L 152 78 L 84 78 C 65 78 52 82 50 86 Z"
          fill="#737373"
        />

        {/* Red Lower 'Z' Geometric Element */}
        <path
          d="M 246 38 L 33 218 L 228 218 C 236 198 242 168 244 140 C 238 153 228 160 206 162 C 180 164 156 160 132 160 L 246 38 Z"
          fill="#e2001a"
        />

        {/* Wordmark: ZENITH (Heavy italic uppercase tracking) */}
        <text
          x="140"
          y="262"
          textAnchor="middle"
          fill="#737373"
          fontFamily="Impact, 'Arial Black', 'Franklin Gothic Heavy', system-ui, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="41"
          letterSpacing="1.5"
        >
          ZENITH
        </text>
      </svg>
    </div>
  );
};


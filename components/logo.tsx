'use client';

import config from '@/rfc.config';
import { getColorSVG, getWhiteSVG, getMonoSVG } from '@luxfi/logo';

interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'color' | 'white' | 'mono';
}

export function Logo({ size = 24, className = '', variant = 'color' }: LogoProps) {
  // Lux logo is white - use mono (black outline) for light mode visibility
  // In dark mode, the white logo works fine
  let svg = '';
  switch (variant) {
    case 'mono':
      svg = getMonoSVG();
      break;
    case 'white':
      svg = getWhiteSVG();
      break;
    default:
      // Use mono variant and add blue background for brand consistency
      svg = getColorSVG();
  }

  return (
    <div
      className={`rounded-lg bg-blue-600 flex items-center justify-center ${className}`}
      style={{ width: size, height: size, padding: size * 0.15 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export function LogoWithText({ size = 24 }: { size?: number }) {
  const shortName = config.shortName;
  const fullName = config.name;

  return (
    <div className="flex items-center gap-2 group logo-with-text">
      <Logo
        size={size}
        className="transition-transform duration-200 group-hover:scale-110"
      />
      <div className="relative h-6">
        <span className="font-bold text-lg inline-block transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-full">
          {shortName}s
        </span>
        <span className="font-bold text-lg absolute left-0 top-0 opacity-0 translate-y-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
          {fullName}
        </span>
      </div>
    </div>
  );
}

export function LogoStatic({ size = 24, text }: { size?: number; text?: string }) {
  const displayText = text || `${config.shortName}s`;

  return (
    <div className="flex items-center gap-2">
      <Logo size={size} />
      <span className="font-bold text-lg">{displayText}</span>
    </div>
  );
}

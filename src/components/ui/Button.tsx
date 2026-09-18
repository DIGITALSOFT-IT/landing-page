import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'cta';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  href, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg active:scale-95";

  const variants = {
    primary: "bg-[#DAB86F] hover:bg-[#E8CA8C] text-[#010C1E] px-8 py-4 shadow-[#DAB86F]/20 hover:scale-105",
    secondary: "bg-[#DAB86F] hover:bg-[#E8CA8C] text-[#010C1E] border-2 border-[#DAB86F] px-8 py-4 hover:scale-105",
    outline: "bg-[#081A2D] border border-[#18FFFF]/30 text-[#F1E4C3] hover:border-[#18FFFF] hover:text-[#18FFFF] px-6 py-3.5",
    cta: "relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
  };

  if (variant === 'cta') {
    return (
      <a href={href} className={`${variants.cta} ${className}`}>
        <span className="absolute inset-0 bg-gradient-to-r from-[#DAB86F] via-[#F1E4C3] to-[#DAB86F] rounded-full animate-pulse" />
        <span className="relative px-6 py-2.5 rounded-full bg-[#010C1E] text-[#DAB86F] group-hover:bg-[#DAB86F] group-hover:text-[#010C1E] font-bold transition-all text-xs uppercase tracking-wider flex items-center space-x-2">
          <span>{children}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
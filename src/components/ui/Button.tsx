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
    primary: "bg-[#C5A059] hover:bg-amber-400 text-slate-950 px-8 py-4 shadow-[#C5A059]/20 hover:scale-105",
    secondary: "bg-slate-900/90 border-2 border-slate-600 hover:border-[#C5A059] text-white hover:text-[#C5A059] px-8 py-4 backdrop-blur-md hover:scale-105",
    outline: "bg-slate-900 border border-slate-700 text-slate-200 hover:border-[#C5A059] hover:text-[#C5A059] px-6 py-3.5",
    cta: "relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
  };

  if (variant === 'cta') {
    return (
      <a href={href} className={`${variants.cta} ${className}`}>
        <span className="absolute inset-0 bg-gradient-to-r from-[#C5A059] via-amber-300 to-[#C5A059] rounded-full animate-pulse" />
        <span className="relative px-6 py-2.5 rounded-full bg-slate-950 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-slate-950 font-bold transition-all text-xs uppercase tracking-wider flex items-center space-x-2">
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
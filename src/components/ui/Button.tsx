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
  const baseStyles =
    'font-bold rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2.5 shadow-lg active:scale-95';

  const variants = {
    primary:
      'bg-gold-metallic text-[#020B1A] px-8 py-4 shadow-[#D5A45A]/25 hover:shadow-[#D5A45A]/40 hover:scale-[1.03]',
    secondary:
      'bg-[#061936]/85 hover:bg-[#0B264E] text-[#F6ECD7] border border-[#9BB0C5]/35 hover:border-[#E2E8F0]/70 px-8 py-4 backdrop-blur-md shadow-black/40 hover:scale-[1.03]',
    outline:
      'bg-[#061936]/80 border border-[#D5A45A]/35 text-[#F2D69E] hover:border-[#D5A45A] hover:bg-[#0A2246] px-6 py-3.5',
    cta: 'relative group overflow-hidden rounded-full p-[1.5px] focus:outline-none inline-flex',
  };

  if (variant === 'cta') {
    return (
      <a href={href} className={`${variants.cta} ${className}`}>
        <span className="absolute inset-0 bg-gradient-to-r from-[#D5A45A] via-[#E2E8F0] to-[#648CA4] rounded-full opacity-90 group-hover:opacity-100 transition-opacity" />
        <span className="relative px-6 py-2.5 rounded-full bg-[#031024] text-[#F2D69E] group-hover:bg-transparent group-hover:text-[#020B1A] font-bold transition-all duration-300 text-xs uppercase tracking-wider flex items-center space-x-2">
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

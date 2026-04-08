import React from 'react';

/**
 * Reusable hover effect classes and components
 * Premium SaaS hover interactions with smooth transitions
 */

// Hover effect class names (use with className prop)
export const hoverEffects = {
  // Card hover - scale + shadow + border glow
  card: 'transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(176,48,82,0.3)] hover:border-[#B03052]/50',

  // Card hover alternative - subtle lift + glow
  cardSubtle: 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(176,48,82,0.2)]',

  // Button hover - scale + brightness + shadow
  button: 'transition-all duration-200 ease-out hover:scale-105 hover:brightness-110 hover:shadow-[0_0_20px_rgba(176,48,82,0.5)]',

  // Button secondary - border glow + background
  buttonSecondary: 'transition-all duration-200 ease-out hover:bg-[#B03052]/10 hover:border-[#B03052] hover:shadow-[0_0_20px_rgba(176,48,82,0.3)]',

  // Icon hover - scale + rotate
  icon: 'transition-all duration-300 ease-out hover:scale-110 hover:rotate-6',

  // Link hover - color + glow
  link: 'transition-all duration-200 ease-out hover:text-[#D76C82] hover:drop-shadow-[0_0_8px_rgba(215,108,130,0.6)]',

  // Glass card hover - backdrop blur + border
  glass: 'transition-all duration-300 ease-out hover:backdrop-blur-xl hover:bg-white/[0.08] hover:border-[#B03052]/40 hover:shadow-[0_0_40px_rgba(176,48,82,0.2)]',
};

/**
 * Premium Card with hover effects
 */
export const HoverCard = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'bg-white/[0.03] border border-white/10 backdrop-blur-sm ' + hoverEffects.card,
    glass: 'bg-white/[0.05] border border-white/10 backdrop-blur-md ' + hoverEffects.glass,
    subtle: 'bg-white/[0.02] border border-white/5 ' + hoverEffects.cardSubtle,
  };

  return (
    <div className={`rounded-xl ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Premium Button with hover effects
 */
export const HoverButton = ({
  children,
  className = '',
  variant = 'primary',
  onClick
}) => {
  const variantClasses = {
    primary: `bg-gradient-to-r from-[#B03052] to-[#D76C82] text-white ${hoverEffects.button}`,
    secondary: `border border-white/20 text-white ${hoverEffects.buttonSecondary}`,
    ghost: `text-white/80 ${hoverEffects.link}`,
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

/**
 * Icon wrapper with hover animation
 */
export const HoverIcon = ({ children, className = '' }) => {
  return (
    <div className={`inline-block ${hoverEffects.icon} ${className}`}>
      {children}
    </div>
  );
};

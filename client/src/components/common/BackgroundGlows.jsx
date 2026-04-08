import React from 'react';

/**
 * Animated background glow effects component
 * Uses project colors: #B03052 (primary), #D76C82 (secondary)
 * Features: floating animation, blur, radial gradients
 */
export const BackgroundGlows = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top-left primary glow - floating animation */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #B03052 0%, transparent 70%)',
          animationDelay: '0s',
        }}
      />

      {/* Top-right secondary glow - pulse animation */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, #D76C82 0%, transparent 70%)',
          animationDelay: '1s',
        }}
      />

      {/* Center-left accent glow - floating animation */}
      <div
        className="absolute top-1/3 -left-32 w-72 h-72 rounded-full opacity-10 blur-3xl animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #B03052 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />

      {/* Bottom-right primary glow - pulse animation */}
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, #B03052 0%, transparent 70%)',
          animationDelay: '1.5s',
        }}
      />

      {/* Center secondary glow - floating animation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #D76C82 0%, transparent 70%)',
          animationDelay: '3s',
        }}
      />

      {/* Bottom-left accent glow - pulse animation */}
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-15 blur-3xl animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, #D76C82 0%, transparent 70%)',
          animationDelay: '0.5s',
        }}
      />
    </div>
  );
};

/**
 * Compact version with fewer glows for smaller sections
 */
export const BackgroundGlowsCompact = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary glow */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, #B03052 0%, transparent 70%)',
        }}
      />

      {/* Secondary glow */}
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #D76C82 0%, transparent 70%)',
          animationDelay: '1s',
        }}
      />
    </div>
  );
};

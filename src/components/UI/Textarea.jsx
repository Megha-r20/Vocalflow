import React from 'react';

const Textarea = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#F5F5F7]">
          {label}
        </label>
      )}
      <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-[rgba(176,48,82,0.2)] bg-[#1A1A24] px-3 py-2 text-sm text-[#F5F5F7] placeholder:text-[#9CA3AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B03052] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Textarea;

import React from 'react';

const Label = ({ children, htmlFor, className = '', ...props }) => {
  return (
    <label 
      htmlFor={htmlFor} 
      className={`text-sm font-medium text-[#F5F5F7] ${className}`} 
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;

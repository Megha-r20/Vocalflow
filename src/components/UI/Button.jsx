import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className}`} 
      {...props}
    >
      {Icon && <Icon size={18} className="btn-icon" />}
      {children}
    </button>
  );
};

export default Button;

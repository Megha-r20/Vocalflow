import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  title, 
  subtitle, 
  icon: Icon, 
  className = '', 
  glass = false,
  ...props 
}) => {
  return (
    <div 
      className={`card ${glass ? 'glass' : ''} ${className}`} 
      {...props}
    >
      {(title || Icon) && (
        <div className="card-header">
          {Icon && <div className="card-icon"><Icon size={24} /></div>}
          <div className="card-title-group">
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;

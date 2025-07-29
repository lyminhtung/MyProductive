import React from 'react';
import type { InputProps } from './input.type';
import './input.components.scss';

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  ...rest
}) => {
  const fieldClasses = [
    'input__field',
    `input__field--${size}`,
    error && 'input__field--error',
    leftIcon && 'input__field--with-left-icon',
    rightIcon && 'input__field--with-right-icon'
  ].filter(Boolean).join(' ');

  return (
    <div className={`input__wrapper ${className}`}>
      {label && (
        <label className="input__label">
          {label}
        </label>
      )}
      
      <div className="input__container">
        {leftIcon && (
          <span className="input__icon input__icon--left">
            {leftIcon}
          </span>
        )}
        
        <input
          className={fieldClasses}
          {...rest}
        />
        
        {rightIcon && (
          <span className="input__icon input__icon--right">
            {rightIcon}
          </span>
        )}
      </div>
      
      {error && (
        <div className="input__error">
          {error}
        </div>
      )}
      
      {helperText && !error && (
        <div className="input__helper">
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
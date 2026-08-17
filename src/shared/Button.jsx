
import React from 'react';

const Button = ({ text, onClick, type = 'button', customStyle = {} }) => {
  const defaultStyle = {
    backgroundColor: '#2243A4',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    ...customStyle
  };

  return (
    <button type={type} onClick={onClick} style={defaultStyle}>
      {text}
    </button>
  );
};

export default Button;
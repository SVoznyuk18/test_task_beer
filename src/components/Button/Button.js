import React from "react";

import './button.css';

const Button = ({handleClick, onClick, isShow}) => {
  return (
    <button 
      className={`button ${isShow ? 'button_show' : ''}`} 
      onContextMenu={handleClick} 
      onClick={onClick}
    >
      Delete
    </button>
  )
}

export default Button;
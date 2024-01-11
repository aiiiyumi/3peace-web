import React from 'react'
import "./header.scss"

const HeaderMenuButton = ({onClick, open}) => {
  return (
    <button
      onClick={onClick}
      aria-expanded={open}
      className='header-SpnavToggle'
    >
      <span className='header-SpnavToggle-Item'></span>
      <span className='header-SpnavToggle-Item'></span>
      <span className='header-SpnavToggle-Item'></span>
    </button>
  );
};

export default HeaderMenuButton;

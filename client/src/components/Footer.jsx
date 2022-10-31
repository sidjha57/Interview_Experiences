import React from 'react'
import Logo from "../img/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Logo} alt="" />
      <span>
        Made with Love and <b>React.js</b>
      </span>
    </div>
  );
}

export default Footer
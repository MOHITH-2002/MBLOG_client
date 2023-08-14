import React from 'react'
import Logo from "../img/logo.png"


const Footer = () => {

  const date= new Date().getFullYear();
  return (
    <div className="footer">
    
      <img src={Logo} alt="" ></img>
      <span> ©{date} by MBLOG </span>
    </div>
  )
}

export default Footer

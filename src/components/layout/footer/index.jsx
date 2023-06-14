import logo from "../../../assets/logo.jpg";
import logoWhatsapp from "../../../assets/whatsapp.svg";
import logoIg from "../../../assets/instagram.svg";
import logoFb from "../../../assets/facebook.svg";
import "./s.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" className="logo-footer" />
      <p>Limbo Finca y Bodega | Mendoza, Argentina</p>
      <p>Lorem ipsum 7777, San Rafael, Mendoza</p>
      <div>
        <p>000-000-000</p>
        <p>email@email.com</p>
      </div>
      <div className="redesFooter">
        <a href="" target="_blank">
        <img src={logoWhatsapp} alt="" className="logo-whatsapp" />
        </a>
        
        <img src={logoIg} alt="" className="logo-whatsapp" />
        <img src={logoFb} alt="" className="logo-whatsapp" />
      </div>
    </div>
  );
};

export default Footer;

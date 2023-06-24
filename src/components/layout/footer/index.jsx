import logo from "../../../assets/logo.jpg";
import logoWhatsapp from "../../../assets/whatsapp.svg";
import logoIg from "../../../assets/instagram.svg";
import logoFb from "../../../assets/facebook.svg";
import logoMail from "../../../assets/correo.png";
import "./s.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={logo} alt="Logo Limbo" className="logo-img" />
      </Link>
      <p>Limbo Finca y Bodega | Mendoza, Argentina</p>
      <p>Lorem ipsum 7777, San Rafael, Mendoza</p>
      <div className="redesFooter">
        <a href="https://wa.me/+549260154417126" target="_blank">
          <img src={logoWhatsapp} alt="Logo whatsapp" className="logo-redes" />
        </a>
        <a href="https://www.instagram.com/bodegalimbo/" target="_blank">
          <img src={logoIg} alt="Logo instagram" className="logo-redes" />
        </a>
        <a href="https://www.facebook.com/bodegalimbo" target="_blank">
          <img src={logoFb} alt="Logo facebook" className="logo-redes" />
        </a>
        <a href="mailto:info@limbo.com.ar" target="_blank">
          <img src={logoMail} alt="Logo facebook" className="logo-redes" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

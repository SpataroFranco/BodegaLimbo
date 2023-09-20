import "./s.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import logoWhatsapp from "../../../assets/whatsapp.svg";
import logoInstagram from "../../../assets/instagram.svg";
import logoFacebook from "../../../assets/facebook.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img src={logo} alt="logo" />
          <p>Limbo | Finca & Bodega
            <br />
          📍 La Ortizana 400, San Rafael - Mendoza, Argentina
            <br />
          ☎️ +54 9 2604 417126
            <br />
          📧 info@limbo.com.ar</p>  
        </div>
        <div className="redes">
          <Link to="https://api.whatsapp.com/send?phone=%2B5492604417126&data=ARDtSaZBi5EZDX7d-OAlNkEiUJMZgQHoC4MIM7K83tcvg8usAPBjbVTpKexobTtpAN_GBlxnk6a9EYMYVfLJUWvHpcx1Pmbv18EHgQhUNoagpj_9Akrjb71HxY9jK13hK_kdlhh-dCfbrXT54pAxyGk&source=FB_Page&app=facebook&entry_point=page_cta" target="_blank">
            <img src={logoWhatsapp} alt="whatsapp" />
          </Link>
          <Link to="https://www.instagram.com/bodegalimbo/" target="_blank">
            <img src={logoInstagram} alt="instagram" />
          </Link>
          <Link to="https://www.facebook.com/bodegalimbo" target="_blank">
            <img src={logoFacebook} alt="facebook" />
          </Link>
        </div>
      </div>
      <p className="copyright">© 2023 Limbo. Todos los derechos reservados.</p>
    </>
  );
};

export default Footer;
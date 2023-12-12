import "./s.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-solo.png";
import logoWhatsapp from "../../../assets/whatsapp.svg";
import logoInstagram from "../../../assets/instagram.svg";
import logoFacebook from "../../../assets/facebook.svg";
import logoTrip from "../../../assets/tripadvisor.png";
import mail from "../../../assets/mail.png";
import phone from "../../../assets/phone.png";
import location from "../../../assets/location.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="info">
          <img className="footerLogo" src={logo} alt="logo" />
          <p>Limbo | Finca & Bodega</p>
          <Link to="https://www.google.com/maps/place/Finca+y+Bodega+LIMBO/@-34.7768655,-68.6455242,10.38z/data=!4m6!3m5!1s0x9679a735e592d169:0x97694cba5e8b6bcf!8m2!3d-34.6944776!4d-68.4138065!16s%2Fg%2F11ppd2w9n7?entry=ttu" target="_blank" rel="noopener noreferrer">
            <img className="footerLocation" src={location} alt="location" />
            <p>La Ortizana 400, San Rafael - Mendoza, Argentina</p>
          </Link>
          <Link to={`tel:+54 9 2604 417126`}>
            <img src={phone} alt="phone" />
            <p>+54 9 2604 417126</p>
          </Link>
          <div>
            <img src={mail} alt="mail" />
            <p>info@bodegalimbo.com.ar</p>
          </div>
        </div>
        <div className="redes">
          <Link
            to="https://api.whatsapp.com/send?phone=%2B5492604417126&data=ARDtSaZBi5EZDX7d-OAlNkEiUJMZgQHoC4MIM7K83tcvg8usAPBjbVTpKexobTtpAN_GBlxnk6a9EYMYVfLJUWvHpcx1Pmbv18EHgQhUNoagpj_9Akrjb71HxY9jK13hK_kdlhh-dCfbrXT54pAxyGk&source=FB_Page&app=facebook&entry_point=page_cta"
            target="_blank"
          >
            <img src={logoWhatsapp} alt="whatsapp" />
          </Link>
          <Link to="https://www.instagram.com/bodegalimbo/" target="_blank">
            <img src={logoInstagram} alt="instagram" />
          </Link>
          <Link to="https://www.facebook.com/bodegalimbo" target="_blank">
            <img src={logoFacebook} alt="facebook" />
          </Link>
          <Link to="https://www.tripadvisor.com.ar/Attraction_Review-g312782-d23842904-Reviews-Limbo_Finca_And_Bodega-San_Rafael_Province_of_Mendoza_Cuyo.html" target="_blank">
            <img src={logoTrip} alt="tripadvisor" />
          </Link>
        </div>
      </div>
      <p className="copyright">© 2023 Limbo. Todos los derechos reservados.</p>
    </>
  );
};

export default Footer;

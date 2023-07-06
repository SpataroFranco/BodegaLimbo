import "./s.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import logoWhatsapp from "../../../assets/whatsapp.svg";
import logoInstagram from "../../../assets/instagram.svg";
import logoFacebook from "../../../assets/facebook.svg";
import CartWidget from "../../pages/cartWidget";

const Navbar = () => {
  let activeStyle = {
    fontWeight: "bold",
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logoLimbo" />
        </Link>
      </div>
      <div className="secciones">
        <NavLink to="/home" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Inicio
        </NavLink>
        <p>|</p>
        <NavLink to="/enoturismo" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Enoturismo
        </NavLink>
        <p>|</p>
        <NavLink to="/vinos" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Vinos
        </NavLink>
        <p>|</p>
        <NavLink to="/contacto" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Contacto
        </NavLink>
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
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
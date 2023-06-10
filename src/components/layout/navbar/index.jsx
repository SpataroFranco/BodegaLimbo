import "./s.css";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import logoWhatsapp from "../../../assets/whatsapp.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogoClick = () => {
    setActiveLink('/');
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logo Limbo" className="logo-img" />
        </Link>
      </div>
      <div className="secciones">
        <Link
          to="/"
          className={activeLink === '/' ? 'active' : ''}
          onClick={() => handleLinkClick('/')}
        >
          Inicio
        </Link>
        <p>|</p>
        <Link
          to="/enoturismo"
          className={activeLink === '/enoturismo' ? 'active' : ''}
          onClick={() => handleLinkClick('/enoturismo')}
        >
          Enoturismo
        </Link>
        <p>|</p>
        <Link
          to="/vinos"
          className={activeLink === '/vinos' ? 'active' : ''}
          onClick={() => handleLinkClick('/vinos')}
        >
          Vinos
        </Link>
        <p>|</p>
        <Link
          to="/ubicacion"
          className={activeLink === '/ubicacion' ? 'active' : ''}
          onClick={() => handleLinkClick('/ubicacion')}
        >
          Ubicacion
        </Link>
        <p>|</p>
        <Link
          to="/contacto"
          className={activeLink === '/contacto' ? 'active' : ''}
          onClick={() => handleLinkClick('/contacto')}
        >
          Contacto
        </Link>
      </div>
      <div className="redes">
        <img src={logoWhatsapp} alt="Logo Whatsapp" className="logo-redes" />
      </div>
    </div>
  );
};

export default Navbar;

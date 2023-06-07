import "./s.css";
import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        Logo
      </div>
      <div className="secciones">
        <Link to="/"> Inicio </Link>
        <p>|</p>
        <Link to="/enoturismo"> Enoturismo </Link>
        <p>|</p>
        <Link to="/vinos"> Vinos </Link>
        <p>|</p>
        <Link to="/ubicacion"> Ubicacion </Link>
        <p>|</p>
        <Link to="/contacto"> Contacto </Link>
      </div>
      <div className="redes">
        Redes
      </div>
    </div>
  );
};

export default Navbar;

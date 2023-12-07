import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./s.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const DropdownItem = ({ toggleMenu }) => {
    const [clicked, setClicked] = useState(false);
    const toggle = () => {
        setClicked(!clicked);
    };
    return (
        <NavDropdown className="items" title="Sobre Nosotros" onMouseEnter={toggle} onMouseLeave={toggle} >
            <div className={`dropdown ${clicked ? "dropdown" : "dropdownHidden"}`}>
                <NavDropdown.Item className="dropdownItem" onClick={toggleMenu}>
                    <Link to="/quienes-somos">
                        Quiénes Somos
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem" onClick={toggleMenu}>
                    <Link to="/viñedo-y-bodega">
                        Viñedo y Bodega
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem" onClick={toggleMenu}>
                    <Link to="/sustentabilidad">
                        Sustentabilidad
                    </Link>
                </NavDropdown.Item>
            </div>
        </NavDropdown>
    );
};

export default DropdownItem;
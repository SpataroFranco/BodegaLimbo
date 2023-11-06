import React, { useState } from "react";
import "./s.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const DropdownItem = () => {
    const [clicked, setClicked] = useState(false);
    const toggle = () => {
      setClicked(!clicked);
    };
    return (
        <NavDropdown className="items" title="Sobre Nosotros" onClick={toggle}>
            <div className={`dropdown ${clicked ? "dropdown" : "dropdownHidden"}`}>
                <NavDropdown.Item className="dropdownItem" href="/quienes-somos">
                    Quiénes Somos
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem" href="/viñedo-y-bodega">
                    Viñedo y Bodega
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem" href="/sustentabilidad">
                    Sustentabilidad
                </NavDropdown.Item>
            </div>
        </NavDropdown>
    );
};

export default DropdownItem;
import "./s.css";
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import cartImg from "../../../assets/cart.png";

const CartWidget = ({ toggleMenu }) => {
    const {cantidadCarrito} = useContext(CartContext);
    return (
        <div className="cart" onClick={toggleMenu}>
            <img src={cartImg} alt="cart" />
            <span className="cartQuantity">{cantidadCarrito()}</span>
        </div>
    );
};

export default CartWidget;
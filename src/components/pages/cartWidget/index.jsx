import "./s.css";
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import cartImg from "../../../assets/cart.png";

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext);
    return (
        <div className="cart">
            <img src={cartImg} alt="cart" />
            <span className="cartQuantity">{cantidadCarrito()}</span>
        </div>
    );
};

export default CartWidget;
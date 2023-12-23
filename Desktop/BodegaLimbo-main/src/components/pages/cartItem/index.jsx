import "./s.css";
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import trash from "../../../assets/trash.svg";

const CartItem = ({ Titulo, imagen, cantidad }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="card">
      <div className="cardImg">
        <img src={process.env.PUBLIC_URL + imagen} alt={Titulo} />
      </div>
      <h2>{Titulo}</h2>
      <p>Cantidad: {cantidad}</p>
      <div className="trash">
        <img src={trash} alt="trash" onClick={() => {removeItem(Titulo, cantidad)}} />
      </div>
    </div>
  )
}

export default CartItem;
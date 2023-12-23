import "./s.css";
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CartItem from "../cartItem";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);
  if (cart.length === 0) {
      return  <div className="emptyCart">
                <h2>No hay productos en el carrito</h2>
                <div className="boton">
                  <Link to="/vinos">
                    <button>Ver productos</button>  
                  </Link>
                </div>
              </div>
  };
  return (
      <div>
          <h2 className="cartTitle">Productos del carrito</h2>
          <div className="cartList">
          {
            cart.map((producto) => <CartItem key={producto.Titulo} {...producto}/>)
          }
          </div>
          <div className="buttonContainer">
              <div className="boton">
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
              </div>
              <div className="boton">
                <Link to="/checkout">
                  <button>Finalizar compra</button>  
                </Link>
              </div>
          </div>
      </div>
  );
};

export default CartView;
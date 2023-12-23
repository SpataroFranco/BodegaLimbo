import "./s.css";
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);
  function finalizarCompra(){
    let productosParaWsp = cart.map((producto, cantidad) => producto.Titulo + " x " + producto.cantidad);
    window.open("https://api.whatsapp.com/send?phone=%2B5492604417126&text=Hola,%20me%20gustaría%20comprar%20los%20siguientes%20productos%3A" + " " + JSON.stringify(productosParaWsp));
    vaciarCarrito();
  };
  return (
    <div className="checkout">
      <h3>Resumen de la compra:</h3>
      <div>
        {
          cart.map((producto, cantidad) =>
          <div key={producto.Titulo}>
            <p>- {producto.Titulo} x {producto.cantidad}</p>
          </div>
          )
        }
      </div>
      <div className="boton">
        <Link to="/cart">
          <button onClick={() => finalizarCompra()}>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
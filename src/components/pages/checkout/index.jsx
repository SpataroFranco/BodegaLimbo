import "./s.css";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Form from "../form";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="checkout">
      <section>
        <h3>Resumen de la compra:</h3>
        <div>
          {
            cart.map((producto, cantidad) => <div key={producto.Titulo}>
              <p>- {producto.Titulo} x {producto.cantidad}</p>
            </div>
            )
          }
        </div>
      </section>
      <section>
        <h3>Completa el formulario para finalizar la compra:</h3>
        <Form />
      </section>
    </div>
  )
}

export default Checkout;
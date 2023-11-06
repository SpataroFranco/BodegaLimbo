import "./s.css";
import React, { useState, useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "../itemQuantitySelector";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState();
  const { addItem } = useContext(CartContext);
  function onAdd(count) {
    setQuantity(count);
  };
  function purchase(product, quantity) {
    addItem(product, quantity);
  };
  return (
    <div className="detail">
      <div className="detailImg">
        <img src={process.env.PUBLIC_URL + product.imagen} alt={product.Titulo} />
      </div>
      <div className="detailText">
        <h1>{product.Titulo}</h1>
        <p>VINO TINTO</p>
        <br />
        <p><b>{product.TipoVino}</b></p>
        <p><b>Indicación de procedencia:</b> {product.IndicacionDeProcedencia}</p>
        <p><b>Georreferencia del viñedo:</b> {product.Georreferencia}</p>
        <p><b>Crianza:</b> {product.Crianza}</p>
        <p><b>Potencial de guarda:</b> {product.PotencialDeGuarda}</p>
        <p>{product.PuestoEnBotella}</p>
        <p>{product.PartidaLimitada}</p>
        <p>{product.Alc}</p>
        <p>{product.Nota}</p>
        {quantity === undefined && <ItemQuantitySelector key={"agregarAlCarrito"} initial={1} onAdd={onAdd} />}
        {quantity >= 1 && <div className="botones">
          <div className="boton">
            <Link to="/vinos">
              <button onClick={() => purchase(product, quantity)}>Seguir comprando</button>  
            </Link>
          </div>
          <div className="boton">
            <Link to="/cart">
              <button onClick={() => purchase(product, quantity)}>Finalizar compra</button>
            </Link>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default ItemDetail;
import React from "react";
import { Link } from "react-router-dom";
import "./s.css";

const ItemList = ({ product }) => {
  return (
    <>
      <div className="list">
        <div className="data">
          <h1 key={product.Titulo}>{product.Titulo}</h1>
          <p>VINO TINTO</p>
          <p className="descripcion">{product.Descripcion}</p>
        </div>
        <div className="vinoImg">
          <img src={process.env.PUBLIC_URL + product.imagen} alt={product.Titulo} />
        </div>
      </div>
      <div className="boton">
        <Link to={`/vinos/${product.Titulo}`}>
          <button>Conocer más</button>
        </Link>
      </div>
    </>
  );
};

export default ItemList;
import React from "react";
import { Link } from "react-router-dom";

const ItemListBotella = ({ item }) => {
  return (
    <>
      <div className="list">
        <div className="data">
          <h1 key={item.Titulo}>{item.Titulo}</h1>
          <p>VINO TINTO</p>
          <p className="descripcion">{item.Descripcion}</p>
        </div>
        <div className="vinoImg">
          <img src={process.env.PUBLIC_URL + item.imagen} alt={item.Titulo} />
        </div>
      </div>
      <div className="boton">
        <Link to={`/vinos/${item.Titulo}`}>
          <button>Conocer más</button>
        </Link>
      </div>
    </>
  );
};

export default ItemListBotella;
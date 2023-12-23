import React from "react";
import ItemList from "../itemList";
import ItemListBotella from "../itemListBotella";
import "./s.css";

const Vinos = ({ products, items }) => {
  return (
      <div className="contenedor-vinos">
        <div className="intro">
          <p>Nos concentramos en pequeñas producciones de vino de parcelas propias y únicas.
            <br />
            <br />
          <b>Pedido mínimo:</b> caja por 6 botellas. Podés armar tu caja combinando las líneas de vinos que prefieras. Te la enviamos a domicilio.</p>
        </div>
        <div className="contenedorVinos">
          <h2>Vinos criados en barrica</h2>
            {products.map((product) => {
              return <ItemList key={product.Titulo} product={product} />
            })}
        </div>
        <div className="contenedorVinos">
          <h2>Vinos criados en botella</h2>
            {items.map((item) => {
              return <ItemListBotella key={item.Titulo} item={item} />
            })} 
        </div>
      </div>
  );
};

export default Vinos;
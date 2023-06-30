import "./s.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "../itemQuantitySelector";

const ItemDetail = ({ vino }) => {
  const [quantity, setQuantity] = useState();
  function onAdd(count) {
    setQuantity(count);
  };
  return (
    <div className="detail">
      <div className="detailImg">
        <img src={process.env.PUBLIC_URL + vino.img} alt={vino.Titulo} />
      </div>
      <div className="detailText">
        <h1>{vino.Titulo}</h1>
        <p>VINO TINTO</p>
        <br />
        <p><b>{vino.TipoVino}</b></p>
        <p><b>Indicación de procedencia:</b> {vino.IndicacionDeProcedencia}</p>
        <p><b>Georreferencia del viñedo:</b> {vino.Georreferencia}</p>
        <p><b>Crianza:</b> {vino.Crianza}</p>
        <p><b>Potencial de guarda:</b> {vino.PotencialDeGuarda}</p>
        <p>{vino.PuestoEnBotella}</p>
        <p>{vino.PartidaLimitada}</p>
        <p>{vino.Alc}</p>
        <p>{vino.Nota}</p>
        {quantity === undefined && <ItemQuantitySelector initial={1} onAdd={onAdd} />}
        {quantity >= 1 && <div className="botones">
          <div className="boton">
            <Link to="/vinos">
              <button>Agregar más productos al carrito</button>  
            </Link>
          </div>
          <div className="boton">
            <Link>
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default ItemDetail;
import { useState, useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "../itemQuantitySelector";

const ItemDetailBotella = ({ item }) => {
  const [quantity, setQuantity] = useState();
  const { addItem } = useContext(CartContext);
  function onAdd(count) {
    setQuantity(count);
  };
  function purchase(item, quantity) {
    addItem(item, quantity);
  };
  return (
    <div className="detail">
        <div className="detailImg">
            <img src={process.env.PUBLIC_URL + item.img} alt={item.Titulo} />
        </div>
        <div className="detailText">
            <h1>{item.Titulo}</h1>
            <p>VINO TINTO</p>
            <br />
            <p><b>Indicación de procedencia:</b> {item.IndicacionDeProcedencia}</p>
            <p><b>Georreferencia del viñedo:</b> {item.Georreferencia}</p>
            <p>{item.PartidaLimitada}</p>
            <p>{item.Alc}</p>
            <p>{item.Nota}</p>
            {quantity === undefined && <ItemQuantitySelector key={"agregarAlCarrito"} initial={1} onAdd={onAdd} />}
            {quantity >= 1 && <div className="botones">
                <div className="boton">
                    <Link to="/vinos">
                        <button onClick={() => purchase(item, quantity)}>Seguir comprando</button>  
                    </Link>
                </div>
                <div className="boton">
                    <Link to="/cart">
                        <button onClick={() => purchase(item, quantity)}>Finalizar compra</button>
                    </Link>
                </div>
            </div>}
        </div>
    </div>
  );
};

export default ItemDetailBotella;
import { Link } from "react-router-dom";
import "./s.css";

const ItemList = ({ vino }) => {
  return (
    <div className="list">
      <div className="data">
        <h1 key={vino.Titulo}>{vino.Titulo}</h1>
        <p>VINO TINTO</p>
        <p className="descripcion">{vino.Descripcion}</p>
        <div className="boton">
          <Link to={`/vinos/${vino.Titulo}`}>
            <button>Conocer más</button>
          </Link>
        </div>
      </div>
      <div className="vinoImg">
        <img src={process.env.PUBLIC_URL + vino.img} alt={vino.Titulo} />
      </div>
    </div>
  );
};

export default ItemList;
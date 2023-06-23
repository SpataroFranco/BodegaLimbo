import { Link } from "react-router-dom";
import "./s.css";

const ItemListBotella = ({ vino }) => {
  return (
    <div className="list">
      <div className="vinoImg">
        <img src={process.env.PUBLIC_URL + vino.img} alt={vino.Titulo} />
      </div>
      <div className="data">
        <h1>{vino.Titulo}</h1>
        <p>{vino.TipoVino}</p>
        <p>{vino.CantidadDeBotellas}</p>
        <p>{vino.TemperaturaDelServicio}</p>
        <p>{vino.GeorreferenciaDelViñedo}</p>
        <p>{vino.EdadDelViñedo}</p>
        <p>{vino.FechaDeEmbotellado}</p>
        <p>{vino.Alc}</p>
        <p>{vino.NotaDeCata}</p>
        <div className="boton">
          <Link to={`/vino/${vino.Titulo}`}><button>Conocer más</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ItemListBotella;
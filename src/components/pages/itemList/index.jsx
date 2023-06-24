import { Link } from "react-router-dom";
import "./s.css";

const ItemList = ({ vino }) => {
  return (
    <div className="list">
      <div className="data">
        <h1>{vino.Titulo}</h1>
        <p>{vino.TipoVino}</p>
        <p>{vino.IndicacionDeProcedencia}</p>
        <p>{vino.GeorreferenciaDelViñedo}</p>
        <p>{vino.Crianza}</p>
        <p>{vino.PotencialDeGuarda}</p>
        <p>{vino.Alc}</p>
        <p>{vino.NotaDeCata}</p>
        <div className="boton">
          <Link to={`/vinos/vino/${vino.Titulo}`}>Conocer más</Link>
        </div>
      </div>
      <div className="vinoImg">
        <img src={process.env.PUBLIC_URL + vino.img} alt={vino.Titulo} />
      </div>
    </div>
  );
};

export default ItemList;
import { useParams } from "react-router-dom";
import listaVinos from "../../../vinosDB/vinos.json";
import ItemDetail from "../itemDetail";
import "./s.css";

const ItemDetailContainer = () => {
  const { Titulo } = useParams();
  const vinoEncontrado = listaVinos.find(vino => vino.Titulo === Titulo);
  //Buscar en los dos archivos el vino 
  //si esta en el archivo 1 return ese sino return al otro
  //Crear itemDetailVino e itemDetailVinoBotella que muestre dicho vino
  return (
    <div className="list">
      <ItemDetail vino={vinoEncontrado} />
    </div>
  );
};

export default ItemDetailContainer;
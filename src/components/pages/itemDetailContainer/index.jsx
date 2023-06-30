import { useParams } from "react-router-dom";
import listaVinos from "../../../vinosDB/vinos.json";
import ItemDetail from "../itemDetail";

const ItemDetailContainer = () => {
  const { Titulo } = useParams();
  const vinoEncontrado = listaVinos.find(vino => vino.Titulo === Titulo);
  return (
    <div>
      <ItemDetail vino={vinoEncontrado} />
    </div>
  );
};

export default ItemDetailContainer;
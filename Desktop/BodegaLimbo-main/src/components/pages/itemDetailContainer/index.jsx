import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail";

const ItemDetailContainer = ({ products }) => {
  const { Titulo } = useParams();
  const product = products.find((product) => product.Titulo == Titulo);
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
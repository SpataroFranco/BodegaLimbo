import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail";
import ItemDetailBotella from "../itemDetailBotella";

const ItemDetailContainer = ({ products, items }) => {
  const { Titulo } = useParams();
  const product = products.find((product) => product.Titulo === Titulo);
  const item = items.find((item) => item.Titulo === Titulo);
  return (
    <>
      { product ?
        <div>
          <ItemDetail product={product} />
        </div>
      :
        <div>
          <ItemDetailBotella item={item} />
        </div>
      }
    </>
  );
};

export default ItemDetailContainer;
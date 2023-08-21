import ItemList from "../itemList";
import "./s.css";

const Vinos = ({ products }) => {
  return (
      <div>
        <div className="contenedorVinos">
          {products.map((product) => {
            return <ItemList key={product.Titulo} product={product} />
          })}
        </div>
        <div className="contenedorVinos">
          <h2>Vinos criados en botella</h2>
          <div className="vinoBotellaImg">
            <img className="cabernet" src="/vinos/cabernet-sauvignon300dpi.png" alt="cabernetSauvignon" />
            <img className="malbec" src="/vinos/malbec300dpi.png" alt="malbec" />
            <img className="corte" src="/vinos/corte300dpi.png" alt="corte" />
          </div>  
        </div>
      </div>
  );
};

export default Vinos;
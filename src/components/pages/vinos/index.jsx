import ItemList from "../itemList";
import ItemListBotella from "../itemListBotella";
import "./s.css";

const Vinos = ({ products, items }) => {
  return (
      <div>
        <div className="intro">
          <p>Nos concentramos en pequeñas producciones de vino de parcelas propias y únicas.</p>
        </div>
        <div className="contenedorVinos">
          <h2>Vinos criados en barrica</h2>
            {products.map((product) => {
              return <ItemList key={product.Titulo} product={product} />
            })}
        </div>
        <div className="contenedorVinos">
          <h2>Vinos criados en botella</h2>
            {items.map((item) => {
              return <ItemListBotella key={item.Titulo} item={item} />
            })} 
        </div>
      </div>
  );
};

export default Vinos;
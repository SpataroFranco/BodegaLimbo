import ItemList from "../itemList";
import "./s.css";
import listaVinos from "../../../vinosDB/vinos.json";

const Vinos = () => {
  return (
    <div>
      <div className="contenedorVinos">
        {listaVinos.map((vino) => {
          return <ItemList key={vino.Titulo} vino={vino} />
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
import ItemList from "../itemList";
import ItemListBotella from "../itemListBotella";
import "./s.css";
import listaVinos from "../../../vinosDB/vinos.json";
import listaVinosBotella from "../../../vinosDB/vinosBotella.json";

const Vinos = () => {
  return (
    <div>
      <div className="contenedorVinos">
        {listaVinos.map((vino) => (
          <ItemList key={vino.Titulo} vino={vino} />
        ))}
      </div>
      <h2>Vinos criados en botella</h2>
      <div className="contenedorVinos">
        {listaVinosBotella.map((vino) => (
          <ItemListBotella key={vino.Titulo} vino={vino} />
        ))}
      </div>
    </div>
  );
};

export default Vinos;
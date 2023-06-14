import ItemList from "../itemList";
import ItemListBotella from "../itemListBotella";
import "./s.css";
import listaVinos from "../../../vinosDB/vinos.json";
import listaVinosBotella from "../../../vinosDB/vinosBotella.json";


const Vinos = () => {
  return (
    <div>
      <div className="contenedor">
        <h1 className="titulo">Vinos</h1>
        <p className="texto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          earum maiores, ducimus animi eos officia. Fugit odit repudiandae,
          nihil placeat, sunt saepe, cupiditate illo voluptas quos ullam iste.
          Possimus, numquam? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Culpa molestiae nisi tenetur tempora repellendus rerum dolore
          aperiam cupiditate? Aut voluptate earum unde? Libero iste iure
          recusandae laborum, ducimus accusantium delectus.
        </p>
      </div>
      <h2 className="subtitulo">Limbo Reserva</h2>
      <div className="contenedorVinos">
        {listaVinos.map((vino)=>(
          <ItemList key={vino.Titulo} vino={vino}/>
        ))}
      </div>
      <h2 className="subtitulo">Limbo Crianza En Botella</h2>
      <div className="contenedorVinos">
        {listaVinosBotella.map((vino)=>(
          <ItemListBotella key={vino.Titulo} vino={vino}/>
        ))}
      </div>
    </div>
  );
};

export default Vinos;

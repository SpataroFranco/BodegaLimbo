import campoVirgen from "../../../assets/campoVirgen.jpeg";
import campoCultivado from "../../../assets/vinMalbec.jpeg";
import arbol from "../../../assets/arbol.jpeg";
import osvaldo from "../../../assets/osvaldoElab.jpeg";
import "./s.css";

const Viñedoybodega = () => {
  return (
    <div className="container-vyb">
      {/* <div className="contenedor-img">
        <img className="imgVyB" src={campoVirgen} alt="imgProyecto" />
        <img className="imgVyB" src={campoCultivado} alt="imgProyecto" />
      </div> */}
      <div className="contenidoVyB">
        <div className="text">
          <h1>Viñedo & Bodega</h1>
          <p>
            El limbo es un límite que une y separa, el campo virgen del oasis
            cultivado. Allí, en esa línea geográfica a 800 msnm, están ubicados
            los viñedos y la bodega. Los sucesivos aluviones desde las sierras
            fueron formando un profundo suelo de diferentes estratos de piedras,
            granza, arena y arcillas.
          </p>
          <p>
            Este suelo, este clima, y nuestro trabajo permiten hacer vinos de
            gran personalidad, auténticos y sustentables.
          </p>
        </div>
        <div>
          <img className="imgVyB" src={campoCultivado} alt="imgProyecto" />
        </div>
      </div>
      <div className="contenidoVyB">
        <div>
          <img className="imgVyB" src={arbol} alt="imgProyecto" />
        </div>
        <div className="text">
          <p>
            En nuestro establecimiento contamos con 2 has de un viñedo de más de
            90 años compuesto mayormente por cepas de Malbec, mezcladas en un
            porcentaje mucho menor, encontramos Tannat, Petit Verdot, Aspirant
            Bouschet y otras variedades no identificadas, entre ellas algunas
            blancas. Este blend de viñedo produce un vino “Malbec” único y
            exquisito, sin duda la joya de nuestro establecimiento.
          </p>
          <p>
            En el año 2006 implantamos 4has de Cabernet Sauvignon, un viñedo de
            baja producción y alta calidad, variedad que está produciendo vinos
            notables en San Rafael.
          </p>
          <p>
            En 2015 agregamos 1has de Bonarda, luego de 7 cosechas en 2023
            hacemos la primera elaboración de esta variedad con los mejores
            resultados.
          </p>
        </div>
      </div>
      <div className="contenidoVyB">
        <div className="text">
          <p>
            La fermentación de nuestros vinos se realiza con levaduras indígenas
            en tanques pequeños de 1.000 Litros. Esto nos permite seguir el
            proceso de manera muy controlada, con remontajes periódicos y al
            menos tres movimientos diarios para mantener los orujos en constante
            contacto con el jugo.
          </p>
          <p>
            Finalizada la fermentación procedemos al descube y a un suave
            prensado. Dejamos los vinos en reposo durante todo el invierno. Los
            vinos seleccionados para crianza en roble son puestos en barricas.
            Los vinos pensados para crianza en botella, reposan y se clarifican
            naturalmente en tanques hasta su fraccionamiento.
          </p>
        </div>
        <div>
          <img className="imgVyB" src={osvaldo} alt="imgProyecto" />
        </div>
      </div>
    </div>
  );
};

export default Viñedoybodega;

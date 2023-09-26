import campoVirgen from "../../../assets/Campo.jpeg";
import viñedo from "../../../assets/Viñedo.jpeg";
import bodega from "../../../assets/bodega.jpeg";
import botellas from "../../../assets/botellas.JPG";
import nuestrosVinos from "../../../assets/nuestrosVinos.jpg";
import reserva from "../../../assets/reservaB.jpg";
import botella from "../../../assets/viñedo/botella.jpg";
import poda from "../../../assets/viñedo/poda.jpg";
import osvaldo from "../../../assets/parafermentacion.jpeg";
import floracion from "../../../assets/viñedo/floracion.jpeg";
import midiendoAzucar from "../../../assets/viñedo/midiendoAzucar.jpeg";
import "./s.css";

const Viñedoybodega = () => {
  return (
    <div className="container-vyb">
      <div>
        <h1>VIÑEDO Y LA BODEGA</h1>
        <h2>Viñedo</h2>
        <div className="portada-viñedo">
          <div>
            <img src={campoVirgen} alt="imgProyecto" className="imgProyecto" />
            <p>Campo virgen</p>
          </div>
          <div>
            <img src={viñedo} alt="imgProyecto" className="imgProyecto" />
            <p>Campo cultivado</p>
          </div>
        </div>
        <div className="text">
          <p className="text">
            El limbo es un límite que une y separa, el campo virgen del oasis
            cultivado. Allí, en esa línea geográfica a 800 msnm, están ubicados
            los viñedos y la bodega. Los sucesivos aluviones desde las sierras
            fueron formando un profundo suelo de diferentes estratos de piedras,
            granza, arena y arcillas.
          </p>
          <p className="text">
            En nuestro establecimiento contamos con 2 has de un viñedo de más de
            90 años compuesto mayormente por cepas de Malbec, mezcladas en un
            porcentaje mucho menor, encontramos Tannat, Petit Verdot, Aspirant
            Bouschet y otras variedades no identificadas, entre ellas algunas
            blancas. Este blend de viñedo produce un vino “Malbec” único y
            exquisito, sin duda la joya de nuestro establecimiento.
          </p>
          <p className="text">
            En el año 2006 implantamos 4has de Cabernet Sauvignon, un viñedo de
            baja producción y alta calidad, variedad que está produciendo vinos
            notables en San Rafael.
          </p>
          <p className="text">
            En 2015 agregamos 1ha de Bonarda, luego de 7 cosechas en 2023
            hacemos la primera elaboración de esta variedad con los mejores
            resultados
          </p>
        </div>
        <div className="viñedo-gallery">
          <div>
            <img src={botella} alt="imgProyecto" className="imgViñedo" />
            <p>Botella</p>
          </div>
          <div>
            <img src={poda} alt="imgProyecto" className="imgViñedo" />
            <p>Poda de invierno</p>
          </div>
          <div>
            <img src={floracion} alt="imgProyecto" className="imgViñedo" />
            <p>Floración de la vid</p>
          </div>
          <div>
            <img src={midiendoAzucar} alt="imgProyecto" className="imgViñedo" />
            <p>Midiendo azucar de las uvas</p>
          </div>
        </div>
      </div>
      <div className="bodega">
        <h2>Bodega</h2>
        <div className="bodega-cont">
          <div className="bodega-img">
            <div>
              <img src={osvaldo} alt="imgProyecto" className="imgProyecto" />
              <p>Fermentación en tanque</p>
            </div>
            <div>
              <img src={bodega} alt="imgProyecto" className="imgProyecto" />
              <p>Nuestra bodega</p>
            </div>
          </div>
          <div className="text">
            <p className="text">
              La fermentación de nuestros vinos se realiza con levaduras
              indígenas en tanques pequeños de 1.000 Litros. Esto nos permite
              seguir el proceso de manera muy controlada, con remontajes
              periódicos y al menos tres movimientos diarios para mantener los
              orujos en constante contacto con el jugo.
            </p>
            <p className="text">
              Finalizada la fermentación procedemos al descube y a un suave
              prensado. Dejamos los vinos en reposo durante todo el invierno.
              Los vinos seleccionados para crianza en roble son puestos en
              barricas. Los vinos pensados para crianza en botella, reposan y se
              clarifican naturalmente en tanques hasta su fraccionamiento.
            </p>
          </div>
        </div>
      </div>
      <div className="cava">
        <h2>Cava</h2>
        <div className="cava-cont">
          <div className="cava-img">
            <div>
              <img src={bodega} alt="imgProyecto" className="imgProyecto" />
              <p>Nuestra cava</p>
            </div>
            <div>
              <img src={botellas} alt="imgProyecto" className="imgProyecto" />
              <p>Estacionamiento en botella</p>
            </div>
            <div>
              <img
                src={nuestrosVinos}
                alt="imgProyecto"
                className="imgProyecto"
              />
              <p>Nuestros vinos</p>
            </div>
            <div>
              <img src={reserva} alt="imgProyecto" className="imgProyecto" />
              <p>Nuestros vinos</p>
            </div>
          </div>
          <div>
            <p className="text">
              Finalizada la fermentación procedemos al descube y a un suave
              prensado. Dejamos los vinos en reposo durante todo el invierno.
              Los vinos seleccionados para crianza en roble son puestos en
              barricas. Los vinos pensados para crianza en botella, reposan y se
              clarifican naturalmente en tanques hasta su fraccionamiento.
            </p>
          </div>
        </div>
      </div>
      <div className="galleryGrid">
        <div>
          <img src={reserva} alt="imgProyecto" className="imgProyecto item-a" />
          <p>Nuestros vinos</p>
        </div>
        <div>
          <img src={reserva} alt="imgProyecto" className="imgProyecto item-b" />
          <p>Nuestros vinos</p>
        </div>
        <div>
          <img src={reserva} alt="imgProyecto" className="imgProyecto item-c" />
          <p>Nuestros vinos</p>
        </div>
        <div>
          <img src={reserva} alt="imgProyecto" className="imgProyecto item-d" />
          <p>Nuestros vinos</p>
        </div>
      </div>
    </div>
  );
};

export default Viñedoybodega;

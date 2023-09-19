import osvaldoMaria from "../../../assets/Osvaldo-Maria.jpg";
import etiquetas from "../../../assets/Malbec-Reserva2019.jpg";
import malbecEtiqueta from "../../../assets/malbecReservaEtiqueta.png";
import CabernetEtiqueta from "../../../assets/cabernetEtiqueta.png";
import corteEtiqueta from "../../../assets/corteReserva.png";
import partidaEspecialEtiqueta from "../../../assets/partidaEspecialEtiqueta.png";
import etiquetasBotellas from "../../../assets/etiquetasBotellas.png";
import "./s.css";

const QuienesSomos = () => {
  return (
    <div className="contenedor-quienes-somos">
      <div className="quienes-somos-top">
        <div className="contenido">
          <h1>Quienes Somos</h1>
          <p>
            Somos Osvaldo, María y Andrés, una familia de viticultores. Tenemos
            la determinación de compartir la excelencia de una zona vitícola sin
            par, a través de un trabajo creativo y artesanal.
          </p>
          <p>
            El emprendimiento comienza en el año 2001 cuando luego de un largo
            tiempo viviendo en California, decidimos regresar a la Argentina y
            retomar la tradición vitivinícola familiar. Recuperamos, y seguimos
            recuperando, un antiguo viñedo de Malbec implantado en 1930,
            implantamos nuevas variedades en los espacios disponibles y
            aprendimos de los vecinos y amigos a ser Viticultores.
          </p>
          <p>
            En el año 2007 elaboramos una pequeña cantidad de vino, desde
            entonces vamos aumentando la producción año a año hasta los actuales
            9.000 litros. Nuestro objetivo es elaborar no más de12.000 litros
            del mejor vino que este suelo nos pueda dar. Siempre utilizando
            prácticas enológicas artesanales con precisión técnica.
          </p>
          <p>
            La finca está ubicada en Cuadro Benegas, San Rafael, al borde de un
            barranco que separa el oasis del desierto. Esta difícil geografía
            junto a una laboriosa obstinación nos permite producir vinos
            típicos, diferentes y de gran personalidad. Esto fue lo que nos
            llevó a definir el nombre de la bodega como LIMBO.
          </p>
        </div>
        <div>
          <img src={osvaldoMaria} alt="imgProyecto" className="img-osvaldoMaria" />
        </div>
      </div>
      <div className="quienes-somos-center">
        <div>
          <h2>NUESTROS VALORES</h2>
          <p>
            Como empresa familiar en continua evolución, nuestro deseo es
            representar la excelencia de los vinos artesanales. Un ejemplo
            destacado de vinificación auténtica y sostenible en San Rafael.
          </p>
        </div>
        <div>
          <h2>LO QUE HACEMOS</h2>
          <p>
            Producimos vinos a medida:
            <br />
            nuestro enfoque está en pequeñas producciones de un territorio y
            viñedos únicos. Producimos vinos ecológicos que atraen a admiradores
            de las prácticas enológicas artesanales.
          </p>
        </div>
        <div>
          <h2>NUESTRA IDENTIDAD</h2>
          <p>
            Limbo es un espacio habitado por texturas y valores atemporales,
            vinos agradables y elegantes con un estilo único. Nuestras etiquetas
            cuentan con representaciones distintivas, obras del artista
            mendocino Cris Delhez. Incansable relator de historias dibujadas,
            Cris fue un artista plástico, grabador, dibujante y pintor que dejó
            una huella imborrable.
          </p>
        </div>
      </div>
      <div className="quienes-somos-buttom">
        <div className="etiquetas">
          <div className="etiquetas-text">
            <div>
              <h2>FILOSOFÍA</h2>
              <p>
                Buscamos expresar fielmente las características del terruño,
                cultivando la tierra y produciendo vinos de calidad cuidando el
                medioambiente. Los vinos son fruto de un trabajo riguroso y de
                un respeto constante a las cualidades del entorno. Esta pasión
                nos ha guiado y tratamos de transmitirla a cada una de nuestras
                botellas.
              </p>
            </div>
            <div>
              <h2>LAS ETIQUETAS</h2>
              <p>
                Cuando ARTE Y VINO SE HACEN UNO: nuestras raíces están en
                nuestro diálogo con el arte, un enfoque que nos hace únicos.
              </p>
              <p>
                Es un honor presentar el diseño de nuestras nuevas etiquetas con
                obra del artista mendocino Cristian Delhez, quien nos compartió
                generosamente sus obras. Junto a su hijo Iván, seleccionamos
                algunos fragmentos de ellas para identificar nuestros vinos.
              </p>
            </div>
          </div>
          <div>
            <img src={etiquetas} alt="imgProyecto" className="img-etiquetas" />
          </div>
        </div>
        <div className="etiquetasImg">
          <div>
            <div>
              <img src={malbecEtiqueta} alt="imgProyecto" />
            </div>
            <h3>Malbec Reserva "Jardín japonés"</h3>
            <p>Fragmento 2005. Dibujo a rodillo y tinta de impresión.</p>
          </div>

          <div>
            <div>
              <img src={CabernetEtiqueta} alt="imgProyecto" />
            </div>
            <h3>Cabernet Sauvignon "Pájaro inconcluso"</h3>
            <p>
              ....Y cuando aparece un pájaro ya todo parece estar en su
              lugar.... Fragmento
            </p>
          </div>

          <div>
            <div>
              <img src={corteEtiqueta} alt="imgProyecto" />
            </div>
            <h3>Corte Reserva "Espanta espanta pájaros y pájaros"</h3>
            <p>2017 Dibujo con plumín (hipodérmica) y acuarela, Fragmento.</p>
          </div>

          <div>
            <div>
              <img src={partidaEspecialEtiqueta} alt="imgProyecto" />
            </div>
            <h3>Partida Especial, Petit Verdot 2018</h3>
            <p>
              "Aparecen otros seres para charlar.... ¿quién le dijo a quién?"
              Relatos dibujados
            </p>
          </div>
        </div>
        <div className="etiquetasBotellas">
          <img src={etiquetasBotellas} alt="imgProyecto" />
          <p>Corte, Malbec y Cabernet 2020</p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;

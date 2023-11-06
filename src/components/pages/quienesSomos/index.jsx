import React from "react";
import { Link } from "react-router-dom";
import osvaldoMaria from "../../../assets/Osvaldo-Maria.jpg";
import etiquetas from "../../../assets/fondo-pajaro.png";
import malbecEtiqueta from "../../../assets/malbecReservaEtiqueta.png";
import CabernetEtiqueta from "../../../assets/cabernetEtiqueta.png";
import corteEtiqueta from "../../../assets/corte2019reserva.jpg";
import partidaEspecialEtiqueta from "../../../assets/partidaEspecialEtiqueta.png";
import corte2021 from "../../../assets/etiqueta1.jpg";
import malbec2021 from "../../../assets/etiqueta2.jpg";
import cabernet2021 from "../../../assets/etiqueta3.jpg";
import s1 from "../../../assets/osvaldoviniedo.jpeg";
import s2 from "../../../assets/uvas.jpeg";
import s3 from "../../../assets/viniedocaber.jpeg";
import s4 from "../../../assets/botellasFoto.jpeg";
import "./s.css";

const QuienesSomos = () => {
  return (
    <div className="contenedor-quienes-somos">
      <div className="quienes-somos-top">
        <div className="contenido">
          <h1>QUIÉNES SOMOS</h1>
          <p>
            Somos <strong>Osvaldo y María</strong>, una familia de viticultores
            con la determinación de compartir vinos de una zona vitícola sin
            par.
          </p>
          <p>
            En Cuadro Benegas, San Rafael, Mendoza, rodeada de monte nativo y de
            pequeñas parcelas de viñas y frutales, está{" "}
            <strong>Finca y Bodega LIMBO</strong>, en un “Limbo”, al borde de un
            barranco que separa el oasis del desierto. Esta difícil geografía y
            una laboriosa obstinación nos lleva a producir vinos expresivos y de
            gran personalidad.
          </p>
          <p>
            El emprendimiento comienza en el año 2001 cuando luego de un largo
            tiempo viviendo en California, decidimos regresar a la Argentina y
            retomar la tradición vitivinícola familiar. Recuperamos, y seguimos
            recuperando, un antiguo viñedo de Malbec implantado en 1930,
            implantamos nuevas variedades en los espacios disponibles y
            aprendimos de los vecinos y amigos a ser viticultores.
          </p>
          <p>
            En el año 2007 elaboramos una pequeña cantidad de vino, desde
            entonces vamos aumentando la producción año a año hasta los actuales
            9.000 litros.{" "}
            <strong>
              Nuestro objetivo es elaborar no más de 12.000 litros del mejor
              vino que este suelo nos pueda dar
            </strong>
            , siempre utilizando prácticas enológicas artesanales con precisión
            técnica.
          </p>
        </div>
        <div className="contenedor-img">
          <img
            src={osvaldoMaria}
            alt="imgProyecto"
            className="img-osvaldoMaria"
          />
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
                Cuando <strong>ARTE Y VINO SE HACEN UNO:</strong> nuestras
                raíces están en nuestro diálogo con el arte, un enfoque que nos
                hace únicos.
              </p>
              <p>
                Los vinos de Osvaldo revelan el paisaje y la cultura típica de
                esta región. Nuestras etiquetas interpretan este paisaje y su
                cultura, son fragmentos de obras del{" "}
                <strong>artista mendocino Cristian Delhez.</strong> Incansable
                relator de historias dibujadas, Cristian fue un artista
                plástico, grabador, dibujante y pintor que dejó una huella
                imborrable en el patrimonio cultural mendocino.
              </p>
              <p>
                Cristian Delhez nos compartió generosamente sus obras. Junto a
                su hijo Iván, seleccionamos algunos fragmentos de ellas para
                identificar nuestros vinos.
              </p>
              <p>
                Te invitamos a conocer más obras del <Link to="https://www.instagram.com/crisdelhez/" target="_blank"><u>artista</u></Link>.
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
            <h3>
              Malbec Reserva
              <br />
              "Jardín japonés"
            </h3>
            <p>
              Fragmento 2005.
              <br />
              Dibujo a rodillo y tinta de impresión.
            </p>
          </div>
          <div>
            <div>
              <img src={CabernetEtiqueta} alt="imgProyecto" />
            </div>
            <h3>
              Cabernet Sauvignon Reserva
              <br />
              "Pájaro inconcluso"
            </h3>
            <p>
              ...Y cuando aparece un pájaro ya todo parece estar en su lugar...
            </p>
          </div>
          <div>
            <div>
              <img src={corteEtiqueta} alt="imgProyecto" />
            </div>
            <h3>
              Corte Reserva
              <br />
              "Espanta espanta pájaros y pájaros"
            </h3>
            <p>
              Fragmento 2017.
              <br />
              Dibujo con plumín (hipodérmica) y acuarela.
            </p>
          </div>
          <div>
            <div>
              <img src={partidaEspecialEtiqueta} alt="imgProyecto" />
            </div>
            <h3>
              Petit Verdot Reserva
              <br />
              Partida Especial
            </h3>
            <p>
              "Aparecen otros seres para charlar...
              <br />
              ¿quién le dijo a quién?"
            </p>
          </div>
        </div>
        <div className="etiquetasBotellas">
          <div>
            <img src={corte2021} alt="corte2021" />
            <img src={malbec2021} alt="malbec2021" />
            <img src={cabernet2021} alt="cabernet2021" />
          </div>
          <p>Corte, Malbec y Cabernet Sauvignon 2021</p>
        </div>
        <div className="galeriaQuienesSomos">
          <div>
            <img src={s1} className="imagen-quienesSomos" alt="cuidamosElMedioAmbiente" />
            <p>Cuidamos el medio ambiente</p>
          </div>
          <div>
            <img src={s2} className="imagen-quienesSomos" alt="uvaMalbec" />
            <p>Nuestra uva Malbec</p>
          </div>
          <div>
            <img src={s3} className="imagen-quienesSomos" alt="hilerasDeCabernetSauvignon" />
            <p>Hileras de Cabernet Sauvignon</p>
          </div>
          <div>
            <img src={s4} className="imagen-quienesSomos" alt="lineaDeVinosDeReserva" />
            <p>Línea de vinos de reserva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;

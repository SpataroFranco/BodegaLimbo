import React, { useState } from "react";
import campoVirgen from "../../../assets/Campo.jpeg";
import viñedo from "../../../assets/viñedo/viñedoMalbec2004.jpg";
import bodega2 from "../../../assets/bodega2.jpeg";
import botellas from "../../../assets/botellas.JPG";
import nuestrosVinos from "../../../assets/nuestrosVinos.jpg";
import reserva from "../../../assets/reservaB.jpg";
import botella from "../../../assets/viñedo/botella.jpg";
import poda from "../../../assets/viñedo/poda.jpg";
import osvaldo from "../../../assets/parafermentacion.jpeg";
import floracion from "../../../assets/viñedo/floracion.jpeg";
import midiendoAzucar from "../../../assets/viñedo/midiendoAzucar.jpeg";
import prensandoOrujo from "../../../assets/elaboracionVestidoEmbalaje/prensandoOrujo.mp4";
import orujoPrensado from "../../../assets/elaboracionVestidoEmbalaje/orujoPrensado.jpeg";
import lineaDeFraccionamiento from "../../../assets/elaboracionVestidoEmbalaje/lineadefraccionam.mp4";
import llenandoBotellas from "../../../assets/elaboracionVestidoEmbalaje/fraccionando.jpeg";
import encapsulando from "../../../assets/elaboracionVestidoEmbalaje/osvalencapsulando.jpeg";
import etiquetando from "../../../assets/elaboracionVestidoEmbalaje/mariaetiquetando.jpeg";
import cajas from "../../../assets/elaboracionVestidoEmbalaje/cajas.jpeg";
import cosecha1 from "../../../assets/viñedo/cintia.jpg";
import cosechaManual from "../../../assets/viñedo/nuestraCosecha.mp4";
import cosecha3 from "../../../assets/viñedo/cosechaCajones.jpeg";
import sueloAluvional from "../../../assets/viñedo/sueloAluvional.jpeg";
import sueloCalcareo from "../../../assets/viñedo/sueloCalcareo.jpeg";
import videoRiego from "../../../assets/viñedo/andreRegando.mp4";
import cepasMalbec from "../../../assets/viñedo/cepas.jpeg";
import iniciandoPrimavera from "../../../assets/viñedo/iniciandoLaPrimavera.jpg";
import cargaDeRacimos from "../../../assets/elaboracionVestidoEmbalaje/MoliendoLIMBO.jpg";
import seleccionRacimos from "../../../assets/elaboracionVestidoEmbalaje/seleccionRacimos.jpg";
import despalilladora from "../../../assets/elaboracionVestidoEmbalaje/despalilladora.mp4";
import racimosMalbec from "../../../assets/viñedo/racimosMalbec.mp4";
import procesandoMalbec from "../../../assets/elaboracionVestidoEmbalaje/procesandoMalbec.mp4";
import fermentacionTanques from "../../../assets/elaboracionVestidoEmbalaje/fermentacionTanque.mp4";
import lineaFraccionamiento from "../../../assets/elaboracionVestidoEmbalaje/lineaFraccionamiento.jpeg";
import "./s.css";

const Viñedoybodega = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (image) => {
    setSelectedImage(image);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container-vyb">
        <div>
          <h2>VIÑEDO</h2>
        </div>
        <div className="portada-viñedo">
          <div>
            <img
              src={campoVirgen}
              alt="imgProyecto"
              className="imgProyecto"
              onClick={() => openImage(campoVirgen)}
            />
            <p>Barranco donde comienza el Cañón del Atuel</p>
          </div>
          <div>
            <img
              src={viñedo}
              alt="imgProyecto"
              className="imgProyecto"
              onClick={() => openImage(viñedo)}
            />
            <p>Viñedo del Malbec implantado en 2004</p>
          </div>
        </div>
        <div>
          <p className="text">
            El limbo es un límite que une y separa el campo virgen del oasis
            cultivado. Allí, en esa línea geográfica a 800 msnm, están ubicados
            los viñedos y la bodega. Los sucesivos aluviones desde las sierras
            fueron formando un profundo suelo de diferentes estratos de piedras,
            granza, arena y arcillas.
          </p>
          <div className="portada-viñedo">
            <div>
              <img
                src={sueloAluvional}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(sueloAluvional)}
              />
              <p>Suelo aluvional</p>
            </div>
            <div>
              <img
                src={sueloCalcareo}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(sueloCalcareo)}
              />
              <p>Perfil de nuestro suelo calcáreo</p>
            </div>
          </div>
          <p className="text">
            En nuestro establecimiento contamos con 2 has de un viñedo de más de
            90 años compuesto mayormente por cepas de Malbec. Mezcladas en un
            porcentaje mucho menor, encontramos Tannat, Petit Verdot, Aspirant
            Bouschet y otras variedades no identificadas, entre ellas algunas
            blancas. Este blend de viñedo produce un vino “Malbec” único y
            exquisito, sin duda la joya de nuestro establecimiento.
          </p>
          <p className="text">En el año 2004 implantamos 2,5 has de Malbec.</p>
          <p className="text">
            En el año 2006 implantamos 4 has de Cabernet Sauvignon, un viñedo de
            baja producción y alta calidad, variedad que está produciendo vinos
            notables en San Rafael.
          </p>
          <p className="text">
            En 2015 agregamos 1 has de Bonarda. Luego de 7 cosechas en 2023,
            hacemos la primera elaboración de esta variedad con los mejores
            resultados.
          </p>
        </div>
        <div className="viñedo-gallery">
          <div>
            <img
              src={botella}
              alt="imgProyecto"
              className="imgViñedo"
              onClick={() => openImage(botella)}
            />
            <p>Botella sobre FIAT 400</p>
          </div>
          <div>
            <video controls>
              <source src={videoRiego} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <p>Riego por surcos con agua del Rio Diamante</p>
          </div>
          <div>
            <img
              src={poda}
              alt="imgProyecto"
              className="imgViñedo"
              onClick={() => openImage(poda)}
            />
            <p>Poda de invierno</p>
          </div>
          <div>
            <img
              src={cepasMalbec}
              alt="imgProyecto"
              className="imgViñedo"
              onClick={() => openImage(cepasMalbec)}
            />
            <p>Cepas de Malbec centenarias</p>
          </div>
        </div>
        <div className="viñedo-gallery">
          <div>
            <img
              src={iniciandoPrimavera}
              alt="imgProyecto"
              className="imgViñedo"
              onClick={() => openImage(iniciandoPrimavera)}
            />
            <p>Iniciando la primavera</p>
          </div>
          <div>
            <img
              src={floracion}
              alt="imgProyecto"
              className="imgViñedo"
              onClick={() => openImage(floracion)}
            />
            <p>Floración de la vid</p>
          </div>
          <div>
            <video controls>
              <source src={racimosMalbec} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <p>Racimos de Malbec</p>
          </div>
          <div>
            <img
              src={midiendoAzucar}
              alt="imgProyecto"
              className="imgViñedo"
              onClick={() => openImage(midiendoAzucar)}
            />
            <p>Osvaldo controlando la madurez de la uva</p>
          </div>
        </div>
        <div>
          <h2>VENDIMIA</h2>
          <div className="embalaje">
            <div>
              <img
                src={cosecha1}
                alt="imgProyecto"
                className="imgViñedo"
                onClick={() => openImage(cosecha1)}
              />
              <p>Nuestra vecina en vendimia</p>
            </div>
            <div>
              <video controls>
                <source src={cosechaManual} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <p>Cosecha manual</p>
            </div>
            <div>
              <img
                src={cosecha3}
                alt="imgProyecto"
                className="imgViñedo"
                onClick={() => openImage(cosecha3)}
              />
              <p>Cajas con Bonarda</p>
            </div>
          </div>
        </div>
        <div className="bodega">
          <h2>ELABORACIÓN</h2>
          <div className="viñedo-gallery">
            <div>
              <img
                src={cargaDeRacimos}
                alt="imgProyecto"
                className="imgViñedo"
                onClick={() => openImage(cargaDeRacimos)}
              />
              <p>Carga de racimos en familia</p>
            </div>
            <div>
              <img
                src={seleccionRacimos}
                alt="imgProyecto"
                className="imgViñedo"
                onClick={() => openImage(seleccionRacimos)}
              />
              <p>Seleccionando racimos</p>
            </div>
            <div>
              <video controls>
                <source src={despalilladora} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <p>Andrés en la despalilladora</p>
            </div>
            <div>
              <video controls>
                <source src={procesandoMalbec} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <p>Procesando el Malbec</p>
            </div>
          </div>
          <h2>BODEGA</h2>
          <div>
            <p className="text">
              La fermentación de nuestros vinos se realiza con levaduras
              indígenas en tanques pequeños de 1.000 litros. Esto nos permite
              seguir el proceso de manera muy controlada, con remontajes
              periódicos y al menos tres movimientos diarios para mantener los
              orujos en constante contacto con el jugo.
            </p>
          </div>
          <div className="viñedo-gallery">
            <div>
              <img
                src={osvaldo}
                alt="imgProyecto"
                className="imgViñedo"
                onClick={() => openImage(osvaldo)}
              />
              <p>Rompiendo "El sombrero"</p>
            </div>
            <div>
              <video controls>
                <source src={fermentacionTanques} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <p>Fermentación en tanques</p>
            </div>
            <div>
              <video controls>
                <source src={prensandoOrujo} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <p>Prensando los orujos</p>
            </div>
            <div>
              <img
                src={orujoPrensado}
                alt="imgProyecto"
                className="imgViñedo"
                onClick={() => openImage(orujoPrensado)}
              />
              <p>Orujo prensado</p>
            </div>
          </div>
          <div>
            <p className="text">
              Finalizada la fermentación, procedemos al descube y a un suave
              prensado. Dejamos los vinos en reposo durante todo el invierno.
              Los vinos seleccionados para crianza en roble son puestos en
              barricas. Los vinos pensados para crianza en botella, reposan y se
              clarifican naturalmente en tanques hasta su fraccionamiento.
            </p>
          </div>
          <div className="viñedo-gallery">
            <div>
              <img
                src={botellas}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(botellas)}
              />
              <p>Crianza en botella</p>
            </div>
            <div>
              <img
                src={nuestrosVinos}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(nuestrosVinos)}
              />
              <p>Nuestros vinos criados en botella</p>
            </div>
            <div>
              <img
                src={reserva}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(reserva)}
              />
              <p>Nuestros vinos criados en barrica</p>
            </div>
            <div>
              <img
                src={bodega2}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(bodega2)}
              />
              <p>Crianza en barricas de roble</p>
            </div>
          </div>
          <div className="embalaje">
            <div>
              <video controls>
                <source src={lineaDeFraccionamiento} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <p>Nuestra línea de fraccionamiento</p>
            </div>
            <div>
              <img
                src={lineaFraccionamiento}
                alt="imgProyecto"
                className="imgViñedo"
                onClick={() => openImage(lineaFraccionamiento)}
              />
              <p>Nuestra línea de fraccionamiento</p>
            </div>
            <div>
              <img
                src={llenandoBotellas}
                alt="imgProyecto"
                className="imgViñedo"
                onClick={() => openImage(llenandoBotellas)}
              />
              <p>LLenando botellas</p>
            </div>
          </div>
          <div className="embalaje">
            <div>
              <img
                src={encapsulando}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(encapsulando)}
              />
              <p>Osvaldo encapsulando</p>
            </div>
            <div>
              <img
                src={etiquetando}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(etiquetando)}
              />
              <p>María etiquetando</p>
            </div>
            <div>
              <img
                src={cajas}
                alt="imgProyecto"
                className="imgProyecto"
                onClick={() => openImage(cajas)}
              />
              <p>Cajas de cartón reciclable</p>
            </div>
          </div>
        </div>
        {selectedImage && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeImage}>
                &times;
              </span>
              <img src={selectedImage} alt="imagenEnPantallaCompleta" className="img-modal"/>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Viñedoybodega;

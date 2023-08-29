import { useState } from "react";
import viñedo from "../../../BD/viniedo.json";
import finca from "../../../BD/finca.json";
import cosecha from "../../../BD/cosecha.json";
import turistas from "../../../BD/turistas.json";
import "./s.css";

const Enoturismo = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="titles">
        <h1>De las hileras de la vid a la copa</h1>
        <p>Propuesta pensada para curioso y exigentes amantes del vino.</p>
      </div>
      <div>
        <div className="text-up">
          <p>
            A través de visitas guiadas y catas profesionales te llevaremos a
            descubrir los viñedos y nuestros vinos de pequeñas producciones en
            un territorio único, en ambientes reciclados y auténticos, para
            disfrutar de una experiencia en completa tranquilidad.
          </p>
          <p>
            En un marco sugerente y relajante, lo guiaremos para descubrir “el
            Vino como se hacía antes”. En el paseo entre viñedos compartiremos
            las labranzas y conoceremos a la gente que hace posible esta
            aventura...
          </p>
        </div>
        <div className="text-down">
          <h3>LA BIENVENIDA</h3>
          <p>
            En Limbo mantenemos la calidez de la más auténtica hospitalidad
            sanrafaelina, aquella que busca que sus huéspedes se sientan como en
            casa.
          </p>
          <p>
            Nuestra filosofía es simple: hacer vivir a nuestros visitantes una
            experiencia única, ofreciendo viajes sensoriales que combinan vinos
            de pequeñas producciones auténticas del territorio sanrafaelino.
          </p>
          <p> Bienvenido a San Rafael, bienvenido a Finca y Bodega Limbo</p>
          <p>Tiempo del recorrido: 2:30hs aproximadamente</p>
          <p>Reserva previa: +54 9 (2604) 417126</p>
        </div>
      </div>
      <div className="gallery">
        <h1>LIMBO nuestro lugar</h1>
        <div className="viñedo">
          {viñedo.map((item) => (
            <div>
              <video controls width="400" height="300">
                <source src={item.contenido} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
              <p>{item.titulo}</p>
            </div>
          ))}
        </div>
        <h2>Un poco de lo que somos</h2>
        <div className="finca">
          {finca.map((item) => (
            <div onClick={() => openImage(item.contenido)}>
              <img src={item.contenido} alt={item.titulo} width="500" className="f"/>
              <p>{item.titulo}</p>
            </div>
          ))}
        </div>
        <h2>Algunas de nuestras cosechas</h2>
        <div className="cosecha">
        {cosecha.map((item) => (
            <div onClick={() => openImage(item.contenido)}>
              <img src={item.contenido} alt={item.titulo} width="400"/>
              <p>{item.titulo}</p>
            </div>
          ))}
        </div>
        <h2>Algunos de nuestros visitantes</h2>
        <div className="turistas">
        {turistas.map((item) => (
            <div onClick={() => openImage(item.contenido)}>
              <img src={item.contenido} alt={item.titulo} width="500"/>
              <p>{item.titulo}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal para mostrar la imagen */}
      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeImage}>
              &times;
            </span>
            <img src={selectedImage} alt="Imagen en pantalla completa" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Enoturismo;

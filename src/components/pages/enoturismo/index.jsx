import { useState } from "react";
import enoturismo from "../../../BD/enoturismo.json";
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
            Los invitamos a que se sientan como en casa para vivir una
            experiencia personalizada acompañados por una charla con Osvaldo. En
            el paseo entre viejos y nuevos viñedos, compartiremos las labranzas
            y conoceremos a hombres y mujeres que día a día hacen posible esta
            aventura, los guiaremos para descubrir “al viñatero”.
          </p>
          <p>
            En la bodega artesanal compartiremos catas de vinos de pequeñas
            producciones de distintos años y crianza; de tanques y barricas.
            Para finalmente ver cómo se etiquetan las botellas a mano. Del
            viñedo a la botella.
          </p>
        </div>
        <div className="text-down">
          <h3>Bienvenido a San Rafael, bienvenido a Finca y Bodega Limbo</h3>
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
          <p><strong>Tiempo del recorrido:</strong> 2:30hs aproximadamente</p>
          <p><strong>Reserva previa:</strong> +54 9 (2604) 417126</p>
        </div>
      </div>
      <div className="gallery">
        <h1>LIMBO nuestro lugar</h1>
        <div className="finca">
          {enoturismo.map((item) => (
            <div onClick={() => openImage(item.contenido)}>
              <img
                src={item.contenido}
                alt={item.titulo}
                className="f"
              />
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

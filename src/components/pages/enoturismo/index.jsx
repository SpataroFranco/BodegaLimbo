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
        <h1>Propuesta pensada para amantes del vino</h1>
        <p>Bienvenidos a Limbo!</p>
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
            producciones de distintos años y crianza; de tanques y barricas, para finalmente ver cómo se etiquetan las botellas a mano. Del
            viñedo a la botella.
          </p>
        </div>
        <div className="text-down">
          <p><strong>Tiempo del recorrido:</strong> 2:30 hs aproximadamente</p>
          <p><strong>Reserva previa:</strong> +54 9 (2604) 417126</p>
        </div>
      </div>
      <div className="gallery">
        <h1>LIMBO, nuestro lugar</h1>
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
      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeImage}>
              &times;
            </span>
            <img src={selectedImage} alt="imagenEnPantallaCompleta" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Enoturismo;

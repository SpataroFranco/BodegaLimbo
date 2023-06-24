// import "../../../js/contacto.js";
import "./s.css"

const Contacto = () => {
  return (
    <div className="fondo">
      <div className="data">
        <h1>Tienes alguna duda?</h1>
        <p>Nos complace darle la bienvenida a la empresa para una degustación de nuestros vinos.</p>
        <p>Póngase en contacto con nosotros por teléfono móvil ( +54 9 260154417126 ) o escríbanos utilizando el siguiente formulario. No dudes en contactarnos</p>
      </div>
      <div>
        <form id="formContacto"className="form">
          <div className="datos">
            <input type="text" placeholder="Nombre" name="nombre" id="nombre" required />
            <input
              type="text"
              placeholder="Apellido"
              name="apellido"
              id="apellido"
              required
            />
            <input type="text" placeholder="Numero" name="numero" id="numero" required />
            <input type="text" placeholder="Email" name="nombre" id="email" required />
          </div>
          <div className="mensaje">
            <input type="text" placeholder="Mensaje" name="mensaje" className="msj" id="mensaje" required />
          </div>
          <input id="submit" className="submit" type="submit" value="Enviar" />
        </form>
        
      </div>
    </div>
  );
};

export default Contacto;

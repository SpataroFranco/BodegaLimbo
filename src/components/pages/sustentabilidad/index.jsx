import sostenibilidad1 from "../../../assets/sostenibilidad1.png";
import sostenibilidad2 from "../../../assets/sostenibilidad2.png";
import sostenibilidad3 from "../../../assets/sostenibilidad3.png";
import sostenibilidad4 from "../../../assets/sostenibilidad4.png";
import "./s.css";

const Sustentabilidad = () => {
  return (
    <div className="cont">
      <div className="contenedor-sostenibilidad">
        <h1>SOSTENIBILIDAD</h1>
        <div className="intro">
          <p>
            Ser sostenible es generar valor económico, social, ambiental y
            ético-cultural. Esto genera impacto positivo en el medioambiente, el
            entorno, la gente y su comunidad, asegurando la viabilidad
            económica.
          </p>
          <p>
            Nuestro “modo de hacer” desde Limbo refleja nuestra convicción y
            compromiso por alcanzar un desarrollo sostenible hoy y a futuro.
          </p>
        </div>
        <div className="img">
          <div className="item">
            <img src={sostenibilidad1} alt="sostenibilidad1" />
            <p>
              Generamos parte de la energia que necesitamos mediante paneles
              solares.
            </p>
          </div>
          <div className="item">
            <img src={sostenibilidad2} alt="sostenibilidad2" />
            <p>
              Utilizamos hidrolavadoras con ozono para limpieza y desinfección, minimizando el consumo de agua potable
            </p>
          </div>
          <div className="item">
            <img src={sostenibilidad3} alt="sostenibilidad3" />
            <p>
              Preservamos la flora y fauna en diversas areas de la finca, fomentando de este modo el cuidado de la biodiversidad
            </p>
          </div>
          <div className="item">
            <img src={sostenibilidad4} alt="sostenibilidad4" />
            <p>
              Integramos a nuestros vecinos en tareas de producción y en capacitaciones
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul class="lista">
          <li>
            Toda el agua utilizada para la gestión de las actividades
            agropecuarias proviene de acequias con agua de deshielo. De este
            modo, evitamos el uso de agua potable, realizando riegos por surcos.
          </li>
          <li>
            Fertilizamos con abonos orgánicos. La protección de la biodiversidad
            del suelo es uno de los principios fundamentales de la agricultura
            sostenible, ya que contribuye a controlar las enfermedades de las
            plantas, las tensiones ambientales como la sequía y a evitar la
            erosión del suelo. Practicamos podas y raleos para controlar la
            carga productiva.
          </li>
          <li>
            Hemos minimizado el uso de productos fitosanitarios gracias a las
            técnicas de gestión integrada de plagas, la observación de
            parámetros climáticos (pluviometría, temperatura y humedad) y el
            control de parásitos mediante las trampas de feromonas. Tenemos un
            sistema de producción capaz de proteger la biodiversidad vegetal y
            animal del viñedo, asegurando el equilibrio regular para una
            agricultura más sostenible, resiliente y de calidad.
          </li>
          <li>Cortamos los sarmientos de la poda "en el campo"</li>
          <li>
            Cortamos el pasto, pero no trabajamos el suelo, para evitar la
            erosión y el empobrecimiento del mismo.
          </li>
          <li>
            Una parte del área de la finca se mantiene con plantas y bosque
            nativo para preservar la biodiversidad.
          </li>
          <li>
            Los vinos que elaboramos son, por tanto, fruto de un trabajo serio y
            riguroso, de una atención constante a los valores del entorno y de
            la gran pasión que nos ha guiado en esta aventura y que tratamos de
            transmitir a cada una de nuestras botellas.
          </li>
          <li>
            Creamos vinos de personalidad que conjugan siempre verdadera
            territorialidad y buena precisión técnica.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sustentabilidad;
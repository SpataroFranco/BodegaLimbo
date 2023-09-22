import logo1 from "../../../assets/Iconos-01.png";
import logo2 from "../../../assets/Iconos-04.png";
import logo3 from "../../../assets/Iconos-02.png";
import logo4 from "../../../assets/Iconos-03.png";
import s1 from "../../../assets/Sostenibilidad-1.jpg";
import s2 from "../../../assets/Sostenibilidad-2.jpg";
import s3 from "../../../assets/Sostenibilidad-3.jpg";
import s4 from "../../../assets/Sostenibilidad-4.jpg";
import s5 from "../../../assets/Sostenibilidad-5.jpg";
import "./s.css";

const Sustentabilidad = () => {
  return (
    <div className="cont">
      <div className="contenedor-sostenibilidad">
        <h1>SOSTENIBILIDAD</h1>
        <div className="introSust">
          <p>
            Ser sostenible es generar valor económico, social, ambiental y
            ético-cultural. Esto genera impacto positivo en el medioambiente, el
            entorno, la gente y su comunidad, asegurando la viabilidad
            económica.
          </p>
          <p className="negrita">
            Nuestro “modo de hacer” desde Limbo refleja nuestra convicción y
            compromiso por alcanzar un desarrollo sostenible hoy y a futuro.
          </p>
        </div>
        <div className="img">
          <div className="item">
            <img src={logo1} alt="sostenibilidad1" />
            <p>
              Generamos parte de la energia que necesitamos mediante paneles
              solares.
            </p>
          </div>
          <div className="item">
            <img src={logo2} alt="sostenibilidad2" />
            <p>
              Utilizamos hidrolavadoras con ozono para limpieza y desinfección,
              minimizando el consumo de agua potable
            </p>
          </div>
          <div className="item">
            <img src={logo3} alt="sostenibilidad3" />
            <p>
              Preservamos la flora y fauna en diversas areas de la finca,
              fomentando de este modo el cuidado de la biodiversidad
            </p>
          </div>
          <div className="item">
            <img src={logo4} alt="sostenibilidad4" />
            <p>
              Integramos a nuestros vecinos en tareas de producción y en
              capacitaciones
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul class="lista">
          <li>
            Somos un equipo de 5 personas que trabajamos diariamente con
            espíritu colaborativo.
          </li>
          <li>
            Integramos a la comunidad vecina, en su mayoría mujeres, en tareas
            de producción y en capacitaciones.
          </li>
          <li>
            Generamos parte de la energía que necesitamos mediante paneles
            solares.
          </li>
          <li>
            Utilizamos hidrolavadora con ozono para limpieza y desinfección,
            minimizando el consumo de agua potable.
          </li>
          <li>
            Preservamos la flora y fauna en diversas áreas de la finca,
            fomentando de este modo el cuidado de la biodiversidad.
          </li>
          <li>
            Realizamos riegos por surcos. Toda el agua utilizada para la gestión
            de las actividades agropecuarias proviene de acequias con agua de
            deshielo del Río Diamante.
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
            Los sarmientos, residuos de la poda, quedan en el campo y son
            incorporados al suelo
          </li>
          <li>
            Hemos minimizado el uso de productos fitosanitarios gracias a las
            técnicas de gestión integrada del entorno natural, la observación de
            parámetros climáticos (pluviometría, temperatura y humedad) y el
            control de plagas mediante trampas de feromonas. Tenemos un sistema
            de producción capaz de proteger la biodiversidad vegetal y animal
            del viñedo, asegurando el equilibrio regular para una agricultura
            más sostenible, resiliente y de calidad.
          </li>
          <li>
            Cortamos el pasto, pero no trabajamos el suelo, para evitar la
            erosión y el empobrecimiento del mismo.
          </li>
          <li>
            Una parte del área de la finca se mantiene con plantas y bosque
            nativo para preservar la biodiversidad.
          </li>
        </ul>
      </div>
      <div className="galeria">
        <img src={s1} className="imagen-galeria" />
        <img src={s2} className="imagen-galeria" />
        <img src={s3} className="imagen-galeria" />
        <img src={s4} className="imagen-galeria" />
        <img src={s5} className="imagen-galeria" />
      </div>
    </div>
  );
};

export default Sustentabilidad;

import { Link } from "react-router-dom";
import Hero from "../hero";
import "./s.css";
import corteReserva2019 from "../../../assets/corte_reserva-2019.png";
import petitVerdot from "../../../assets/petit_verdot_reserva_2018.png";
import cabernetReserva from "../../../assets/cabernet_sauvignon_reserva_2020.png";
import malbecReserva from "../../../assets/Malbec_reserva_2019.png";
import cabernetSauvignon from "../../../assets/Cabernet_Sauvignon_2020.png";
import cabernetCORTE from "../../../assets/cabernet_sauvignon_2020_corte.png";

const Home = () => {
  return (
    <div className="contain">
      <Hero />
      <div className="sobre-nosotros">
        <div>
          <h2 className="tit">Sobre nosotros</h2>
        </div>
        <div className="opciones">
          <Link to="/home/proyecto">
            <p>img</p>
            <h3>EL PROYECTO</h3>
          </Link>
          <Link to="/home/proyecto">
            <p>img</p>
            <h3>VIÑEDO & BODEGA</h3>
          </Link>
          <Link to="/home/proyecto">
            <p>img</p>
            <h3>SOSTENIBILIDAD</h3>
          </Link>
        </div>
      </div>
      <div className="nuestra-cosecha">
        <div className="titulo">
          <h2>NUESTRA COSECHA</h2>
        </div>
        <div className="vinos">
          <div className="vino">
            <p>Corte</p>
            <p>Reserva 2019</p>
            <img src={corteReserva2019} alt="img corte reserva 2019" />
          </div>
          <div className="vino">
            <p>Petit Verdot</p>
            <p>Reserva 2018</p>
            <img src={petitVerdot} alt="img corte reserva 2019" />
          </div>
          <div className="vino">
            <p>Cabernet Sauvignon</p>
            <p>Reserva 2020</p>
            <img src={cabernetReserva} alt="img corte reserva 2019" />
          </div>
          <div className="vino">
            <p>Malbec</p>
            <p>Reserva 2019</p>
            <img src={malbecReserva} alt="img corte reserva 2019" />
          </div>
          <div className="vino">
            <p>Malbec</p>
            <p>Reserva 2019</p>
            <img src={cabernetSauvignon} alt="img corte reserva 2019" />
          </div>
          <div className="vino">
            <p>Malbec</p>
            <p>Reserva 2019</p>
            <img src={cabernetCORTE} alt="img corte reserva 2019" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="contain">
          <div className="contain-link">
            <p>IMG</p>
            <Link to="/home/proyecto"> El proyecto</Link>
          </div>
          <div className="contain-link">
            <p>IMG</p>
            <Link to="/home/viñedo-y-bodega">Viñedo y Bodega</Link>
          </div>
          <div className="contain-link">
            <p>IMG</p>
            <Link to="/home/sustentabilidad">Sustentabilidad</Link>
          </div>
        </div> */
}

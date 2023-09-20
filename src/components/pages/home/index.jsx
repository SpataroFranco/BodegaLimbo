import { Link } from "react-router-dom";
import proyecto from "../../../assets/proyecto.png";
import viñedoybodega from "../../../assets/vinedo-y-bodega.png";
import sostenibilidad from "../../../assets/sostenibilidad.png";
import corteReserva2019 from "../../../assets/corteReserva2019.png";
import petitVerdotReserva2018 from "../../../assets/petitVerdotReserva2018.png";
import cabernetSauReserva2020 from "../../../assets/cabernetSauReserva2020.png";
import malbecReserva2019 from "../../../assets/malbecReserva2019.png";
import cabernetSauvignon2020 from "../../../assets/cabernetSauvignon2020.png";
import cabernetSauvignon2020CORTE from "../../../assets/cabernetSauvignonCORTE2020.png";
import Carousel from "../carousel";
import "./s.css";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container-home">
        <div className="home-top"></div>
        <div className="contain">
          <div>
            <h1>SOBRE NOSOTROS</h1>
          </div>
          <div className="contain-l">
            <div className="contain-link">
              <Link to="/home/quienes-somos">
                <img src={proyecto} alt="imgProyecto" />
                <h3>QUIENES SOMOS</h3>
              </Link>
            </div>
            <div className="contain-link">
              <Link to="/home/viñedo-y-bodega">
                <img src={viñedoybodega} alt="imgProyecto" />
                <h3>VIÑEDO Y BODEGA</h3>
              </Link>
            </div>
            <div className="contain-link">
              <Link to="/home/sustentabilidad">
                <img src={sostenibilidad} alt="imgProyecto" />
                <h3>SOSTENIBILIDAD</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <div>
            <h2>NUESTRA COSECHA</h2>
          </div>
          <div className="nuestra-cosecha">
            <div>
              <p>Corte </p>
              <p>Reserva 2019</p>
              <img src={corteReserva2019} alt="corteReserva2019" />
            </div>
            <div>
              <p>Petit Verdot </p>
              <p>Reserva 2018</p>
              <img src={petitVerdotReserva2018} alt="petitVerdotReserva2018" />
            </div>
            <div>
              <p>Cabernet Sauvignon</p>
              <p>Reserva 2020</p>
              <img src={cabernetSauReserva2020} alt="cabernetSauReserva2020" />
            </div>
            <div>
              <p>Malbec </p>
              <p>Reserva 2019</p>
              <img src={malbecReserva2019} alt="malbecReserva2019" />
            </div>
            <div>
              <p>Cabernet Sauvignon </p>
              <p>2020</p>
              <img src={cabernetSauvignon2020} alt="corteReserva2019" />
            </div>
            <div>
              <p>Cabernet Sauvignon</p>
              <p>2020 CORTE</p>
              <img
                src={cabernetSauvignon2020CORTE}
                alt="cabernetSauvignon2020CORTE"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

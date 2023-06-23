import { Link } from "react-router-dom";
import Carousel from "../carousel";
import cava from "../../../assets/cava.jpg"
import banner from "../../../assets/banner-limbo.jpg"
import finca from "../../../assets/finca.jpeg"
import "./s.css";

const Home = () => {

  return (
    <>
      <div className="hero">
        <img src={cava} alt="cava" />
      </div>
      {/* <Carousel/> */}
      <div className="container-home">
        <div>
          <h1>Sobre nosotros</h1>
        </div>
        <div className="contain">
          <div className="contain-link">
            <p>IMG</p>
            <Link to="/home/proyecto">Proyecto</Link>
          </div>
          <div className="contain-link">
            <p>IMG</p>
            <Link to="/home/viñedo-y-bodega">Viñedo y Bodega</Link>
          </div>
          <div className="contain-link">
            <p>IMG</p>
            <Link to="/home/sustentabilidad">Sustentabilidad</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
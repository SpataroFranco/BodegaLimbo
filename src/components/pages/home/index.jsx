import { Link } from "react-router-dom";
import Hero from "../hero";
import Carousel from "../carousel";
import cava from "../../../assets/cava.jpg"
import banner from "../../../assets/bannerLimbo.jpg"
import finca from "../../../assets/finca.jpeg"
import "./s.css";

const Home = () => {

  return (
    <>
      <Hero />
      {/* <Carousel/> */}
      <div className="container-home">
        <div>
          <h1>Sobre nosotros</h1>
        </div>
        <div className="contain">
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
        </div>
      </div>
    </>
  );
};

export default Home;

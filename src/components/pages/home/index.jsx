import { Link } from "react-router-dom";
import Hero from "../hero";
import "./s.css";

const Home = () => {
  return (
    <>
      <Hero />
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

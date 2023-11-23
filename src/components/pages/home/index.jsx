import React from "react";
import { Link } from "react-router-dom";
import corteReserva2019 from "../../../assets/corteReserva2019.png";
import petitVerdotReserva2018 from "../../../assets/petitVerdotReserva2018.png";
import cabernetSauReserva2020 from "../../../assets/cabernetSauvignonRes2020.png";
import malbecReserva2019 from "../../../assets/malbecRes2019.png";
import cabernetSauvignon2020 from "../../../assets/CabernetSauvignon2020.png";
import corte2021 from "../../../assets/cabernetSauCorte2020.png";
import malbec2020 from "../../../assets/malbec2020.png";
import Carousel from "../carousel";
import "./s.css";

const Home = () => {
  const galeria = [
    {
      image: "/carousel/C.jpg",
      caption: "Cartel Limbo",
    },
    {
      image: "/carousel/yuyo.jpeg",
      caption: "Yuyos",
    },
    {
      image: "/carousel/B.jpg",
      caption: "Campo",
    },
    {
      image: "/carousel/otonio.jpg",
      caption: "Otoño",
    },
    {
      image: "/carousel/E.jpg",
      caption: "Invierno",
    },
    {
      image: "/carousel/F.jpg",
      caption: "Uvas desde adentro",
    },
    {
      image: "/carousel/G.jpg",
      caption: "Nieve",
    },
    {
      image: "/carousel/H.jpg",
      caption: "Cultivo",
    },
    {
      image: "/carousel/I.jpg",
      caption: "Finca",
    },
    {
      image: "/carousel/J.jpg",
      caption: "Uvas",
    },
  ];
  return (
    <>
      <Carousel data={galeria} />
      <div className="container-home">
        <div className="home-bottom">
          <div className="vinosTitle">
            <h1>VINOS</h1>
          </div>
          <div className="nuestra-cosecha">
            <Link to="/vinos/MALBEC%20RESERVA%202019">
              <div>
                <p>Malbec Reserva</p>
                <p>2019</p>
                <img src={malbecReserva2019} alt="malbecReserva2019" />
              </div>
            </Link>
            <Link to="/vinos/CABERNET%20SAUVIGNON%20RESERVA%202020">
              <div>
                <p>Cabernet Sauvignon</p>
                <p>Reserva 2020</p>
                <img
                  src={cabernetSauReserva2020}
                  alt="cabernetSauReserva2020"
                />
              </div>
            </Link>
            <Link to="/vinos/CORTE%20RESERVA%202019">
              <div>
                <p>Corte Reserva</p>
                <p>2019</p>
                <img src={corteReserva2019} alt="corteReserva2019" />
              </div>
            </Link>
            <Link to="/vinos/PETIT%20VERDOT%20RESERVA%202018">
              <div>
                <p>Petit Verdot</p>
                <p>Reserva 2018</p>
                <img
                  src={petitVerdotReserva2018}
                  alt="petitVerdotReserva2018"
                />
              </div>
            </Link>
            <Link to="/vinos/MALBEC%202021">
              <div>
                <p>Malbec</p>
                <p>2020</p>
                <img src={malbec2020} alt="malbec2020" />
              </div>
            </Link>
            <Link to="/vinos/CABERNET%20SAUVIGNON%202021">
              <div>
                <p>Cabernet Sauvignon</p>
                <p>2020</p>
                <img src={cabernetSauvignon2020} alt="corteReserva2019" />
              </div>
            </Link>
            <Link to="/vinos/CORTE%202021">
              <div>
                <p>Corte</p>
                <p>2021</p>
                <img src={corte2021} alt="corte2021" />
              </div>
            </Link>
          </div>
          <div className="botonHome">
            <Link to="/vinos">
              <button>Comprar vinos</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

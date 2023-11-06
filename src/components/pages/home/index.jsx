import React from "react";
import { Link } from "react-router-dom";
import corteReserva2019 from "../../../assets/corteReserva2019.png";
import petitVerdotReserva2018 from "../../../assets/petitVerdotReserva2018.png";
import cabernetSauReserva2020 from "../../../assets/cabernetSauReserva2020.png";
import malbecReserva2019 from "../../../assets/malbecReserva2019.png";
import cabernetSauvignon2020 from "../../../assets/cabernetSauvignon2020.png";
import cabernetSauvignon2020CORTE from "../../../assets/cabernetSauvignonCORTE2020.png";
import Carousel from "../carousel";
import "./s.css";

const Home = () => {
   const galeria = [
    {
      image:
        "/carousel/C.jpg",
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
      image:
        "/carousel/otoño.jpg",
      caption: "Otoño",
    },
    {
      image:
        "/carousel/E.jpg",
      caption: "Invierno",
    },
    {
      image:
        "/carousel/F.jpg",
      caption: "Uvas desde adentro",
    },
    {
      image:
      "/carousel/G.jpg",
      caption: "Nieve",
    },
    {
      image:
      "/carousel/H.jpg",
      caption: "Cultivo",
    },
    {
      image:"/carousel/I.jpg",
      caption: "Finca"
    },
    {
      image:"/carousel/J.jpg",
      caption: "Uvas"
    }
  ];
  return (
    <>
      <Carousel data={galeria} />
      <div className="container-home">
        <div className="home-bottom">
          <div>
            <h1>VINOS</h1>
          </div>
          <div className="nuestra-cosecha">
              <div>
                <p>Blend Reserva</p>
                <p>2019</p>
                <img src={corteReserva2019} alt="corteReserva2019" />
              </div>
              <div>
                <p>Petit Verdot</p>
                <p>Reserva 2018</p>
                <img src={petitVerdotReserva2018} alt="petitVerdotReserva2018" />
              </div>
              <div>
                <p>Cabernet Sauvignon</p>
                <p>Reserva 2020</p>
                <img src={cabernetSauReserva2020} alt="cabernetSauReserva2020" />
              </div>
              <div>
                <p>Malbec Reserva</p>
                <p>2019</p>
                <img src={malbecReserva2019} alt="malbecReserva2019" />
              </div>
              <div>
                <p>Cabernet Sauvignon</p>
                <p>2021</p>
                <img src={cabernetSauvignon2020} alt="corteReserva2019" />
              </div>
              <div>
                <p>Corte</p>
                <p>2021</p>
                <img
                  src={cabernetSauvignon2020CORTE}
                  alt="cabernetSauvignon2020CORTE"
                />
              </div>
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

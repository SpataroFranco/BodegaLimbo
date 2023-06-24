import "./s.css";
import mapa from "../../../assets/mapaLimbo.png";

const Ubicacion = () => {
  return (
    <div className="contenedor">
      <div>
        <a href="https://www.google.com/maps/place/Finca+y+Bodega+LIMBO/@-34.6944732,-68.4163814,17z/data=!3m1!4b1!4m6!3m5!1s0x9679a735e592d169:0x97694cba5e8b6bcf!8m2!3d-34.6944776!4d-68.4138065!16s%2Fg%2F11ppd2w9n7?entry=ttu" target="_blank" className="mapa">
          <img src={mapa} alt="mapa limbo" />
        </a>
      </div>
      <div className="data">Data</div>
    </div>
  );
};

export default Ubicacion;

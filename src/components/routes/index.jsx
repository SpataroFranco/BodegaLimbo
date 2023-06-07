import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Enoturismo from "../pages/enoturismo";
import Vinos from "../pages/vinos";
import Ubicacion from "../pages/ubicacion";
import Contacto from "../pages/contacto";
import Proyecto from "../pages/proyecto";
import Viñedoybodega from "../pages/viñedoYbodega";
import Sustentabilidad from "../pages/sustentabilidad";

const Router = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/proyecto" element={<Proyecto/>}/>
          <Route path="/home/viñedo-y-bodega" element={<Viñedoybodega/>}/>
          <Route path="/home/sustentabilidad" element={<Sustentabilidad/>}/>
          <Route path="/enoturismo" element={<Enoturismo />} />
          <Route path="/vinos" element={<Vinos />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    );
  };
  
  export default Router;
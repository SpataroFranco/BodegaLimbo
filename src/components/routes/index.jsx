import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Enoturismo from "../pages/enoturismo";
import Vinos from "../pages/vinos";
import Contacto from "../pages/contacto";
import Proyecto from "../pages/proyecto";
import LaObra from "../pages/laObra";
import Viñedoybodega from "../pages/viñedoYbodega";
import Sustentabilidad from "../pages/sustentabilidad";
import ItemDetailContainer from "../pages/itemDetailContainer";
import CartView from "../pages/cartView";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/proyecto" element={<Proyecto/>}/>
      <Route path="/home/viñedo-y-bodega" element={<Viñedoybodega/>}/>
      <Route path="/home/sustentabilidad" element={<Sustentabilidad/>}/>
      <Route path="/enoturismo" element={<Enoturismo />} />
      <Route path="/vinos" element={<Vinos />} />
      <Route path="/vinos/vino/:Titulo" element={<ItemDetailContainer />} />
      <Route path="/la-obra" element={<LaObra />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/cart" element={<CartView />} />
    </Routes>
  );
};

export default Router;
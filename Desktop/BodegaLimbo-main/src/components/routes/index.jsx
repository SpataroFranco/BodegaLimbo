import { Navigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/home";
import Proyecto from "../pages/proyecto";
import Viñedoybodega from "../pages/viñedoYbodega";
import Sustentabilidad from "../pages/sustentabilidad";
import Enoturismo from "../pages/enoturismo";
import Vinos from "../pages/vinos";
import ItemDetailContainer from "../pages/itemDetailContainer";
import Contacto from "../pages/contacto";
import CartView from "../pages/cartView";
import Checkout from "../pages/checkout";
import Error from "../pages/error";
import vinosReserva from "../../vinosDB/vinos.json"

const Router = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    setProducts(vinosReserva);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/proyecto" element={<Proyecto/>}/>
      <Route path="/home/viñedo-y-bodega" element={<Viñedoybodega/>}/>
      <Route path="/home/sustentabilidad" element={<Sustentabilidad/>}/>
      <Route path="/enoturismo" element={<Enoturismo />} />
      <Route path="/vinos" element={<Vinos products={products} />} />
      <Route path="/vinos/:Titulo" element={<ItemDetailContainer products={products}/>} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Error />} /> 
    </Routes>
  );
};

export default Router;
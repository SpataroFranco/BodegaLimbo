import { Navigate, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "../pages/home";
import QuienesSomos from "../pages/quienesSomos";
import Viñedoybodega from "../pages/viñedoYbodega";
import Sustentabilidad from "../pages/sustentabilidad";
import Enoturismo from "../pages/enoturismo";
import Vinos from "../pages/vinos";
import ItemDetailContainer from "../pages/itemDetailContainer";
import Contacto from "../pages/contacto";
import CartView from "../pages/cartView";
import Checkout from "../pages/checkout";
import Error from "../pages/error";
import vinosReserva from "../../vinosDB/vinos.json";
import vinosBotella from "../../vinosDB/vinosBotella.json";

const Router = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    setProducts(vinosReserva);
  };
  const [items, setItems] = useState([]);
  const getItems = () => {
    setItems(vinosBotella);
  };
  useEffect(() => {
    getProducts();
    getItems();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/viñedo-y-bodega" element={<Viñedoybodega />} />
      <Route path="/sustentabilidad" element={<Sustentabilidad />} />
      <Route path="/enoturismo" element={<Enoturismo />} />
      <Route path="/vinos" element={<Vinos products={products} items={items} />} />
      <Route path="/vinos/:Titulo" element={<ItemDetailContainer products={products} items={items} />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;

import React from "react";
import cava from "../../../assets/cava.jpg";
import "./s.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={cava} alt="imagen Cava" className="hero-img" />
    </div>
  );
};
export default Hero;

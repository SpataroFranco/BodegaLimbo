import React from "react";
import "./s.css";

const Location = () => {
  return (
    <div className="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.4244367533647!2d-68.41638142473914!3d-34.69447316229594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679a735e592d169%3A0x97694cba5e8b6bcf!2sFinca%20y%20Bodega%20LIMBO!5e0!3m2!1ses!2sar!4v1689125347107!5m2!1ses!2sar" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
};

export default Location;
import "./s.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [clicked, setClicked] = useState(false);
  const sendEmail = () => {
    emailjs.init("XKf7V2J_ZwcECDBKV");
    emailjs.sendForm("service_l5nnk8u", "template_a3302rn", ".form")
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setClicked(true);
      }, (error) => {
        console.log("FAILED", error.text);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };
  return (
    <>
      {clicked ?
      <div className="sent">
        <p>¡Tu mensaje fue enviado con éxito!</p>
      </div>
    :
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "30ch",
            backgroundColor: "rgb(218, 218, 218)",
            fontFamily: "Trade Gothic LT Std",
            opacity: "0.8"
          }
        }}
        autoComplete="on"
        className="form"
        onSubmit={handleSubmit}>
          <TextField
            name="nombre"
            label="Nombre y apellido"
            type="text"
            variant="outlined"
            required />
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            required />
          <TextField
            name="mensaje"
            label="Mensaje"
            type="text"
            multiline
            rows={4}
            variant="outlined"
            required />
          <div className="boton">
            <button type="submit">Enviar</button>
          </div>
      </Box>
    }
    </>
  );
};

export default Form;
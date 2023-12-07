import "./s.css";
import React, { useState } from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { styled } from "@mui/styles";
import emailjs from "@emailjs/browser";

const initialValues = ({
  nombre: "",
  email: "",
  mensaje: ""
});

const CssTextField = styled(TextField)({
  "& label": {
    color: "black",
    fontFamily: "Trade Gothic LT Std Light",
  },
  "& label.Mui-focused": {
    opacity: "0.1"
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: "black",
      backgroundColor: "rgb(218, 218, 218)",
      fontFamily: "Trade Gothic LT Std",
      borderRadius: "10px",
      opacity: "0.8",
    },
    "& input.Mui-focused": {
      color: "black",
    },
    "& fieldset": {
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const CssTextFieldMensaje = styled(TextField)({
  "& label": {
    color: "black",
    fontFamily: "Trade Gothic LT Std Light",
  },
  "& label.Mui-focused": {
    opacity: "0.1"
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: "black",
      backgroundColor: "rgb(218, 218, 218)",
      fontFamily: "Trade Gothic LT Std",
      borderRadius: "10px",
      opacity: "0.8",
      height: "10em",
    },
    "& input.Mui-focused": {
      color: "black",
    },
    "& fieldset": {
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const Form = () => {
  const [clicked, setClicked] = useState(false);
  const sendEmail = () => {
    emailjs.init("XKf7V2J_ZwcECDBKV");
    emailjs.sendForm("service_fy5or3h", "template_a3302rn", ".form")
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => (
          <form className="form">
            <div>
              <label htmlFor="nombre"></label>
              <CssTextField
                fullWidth
                name="nombre"
                label="Nombre y apellido"
                type="text"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                variant="outlined"
                style={{ marginBottom: 30 }}
                required />
            </div>
            <div>
              <label htmlFor="email"></label>
              <CssTextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                variant="outlined"
                style={{ marginBottom: 30 }}
                required />
            </div>
            <div>
              <label htmlFor="mensaje"></label>
              <CssTextFieldMensaje
                fullWidth
                name="mensaje"
                label="Mensaje"
                type="text"
                value={formik.values.mensaje}
                onChange={formik.handleChange}
                variant="outlined"
                required />
            </div>
            <div className="boton">
              <button type="submit">Enviar</button>
            </div>
          </form>
        )}
      </Formik>
    }
    </>
  );
};

export default Form;
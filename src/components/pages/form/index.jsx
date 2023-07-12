import "./s.css";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import { styled } from "@mui/styles";
import emailjs from "@emailjs/browser";

const initialValues = ({
  nombre: "",
  email: "",
  mensaje: ""
});

const schema = Yup.object().shape({
  nombre: Yup
      .string()
      .required("Se debe ingresar un nombre y apellido")
      .min(5, "El nombre es demasiado corto")
      .max(25, "El nombre es demasiado largo"),
  email: Yup
      .string()
      .required("Se debe ingresar un email")
      .email("Email inválido"),
  mensaje: Yup
      .string()
      .required("Se debe escribir un mensaje")
      .min(10, "El mensaje es demasiado corto")
      .max(300, "El mensaje es demasiado largo"),
});

const CssTextField = styled(TextField)({
  "& label": {
    color: "black",
    fontFamily: "Trade Gothic LT Std Light",
  },
  "& label.Mui-focused": {
    color: "black",
    fontFamily: "Trade Gothic LT Std",
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
    color: "black",
    fontFamily: "Trade Gothic LT Std",
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
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        {(formik) => (
          <form onSubmit={handleSubmit} className="form">
            <div>
              <CssTextField
                fullWidth
                name="nombre"
                label="Nombre y apellido"
                type="text"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
                variant="outlined"
                style={{ marginBottom: 30 }} />
            </div>
            <div>
              <CssTextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                style={{ marginBottom: 30 }} />
            </div>
            <div>
            <CssTextFieldMensaje
                fullWidth
                name="mensaje"
                label="Mensaje"
                type="text"
                value={formik.values.mensaje}
                onChange={formik.handleChange}
                error={formik.touched.mensaje && Boolean(formik.errors.mensaje)}
                helperText={formik.touched.mensaje && formik.errors.mensaje}
                variant="outlined" />
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
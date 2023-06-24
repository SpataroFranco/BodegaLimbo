const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const mensaje = document.getElementById("message");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  recolectarDatos();
});

const recolectarDatos = () => {
  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    numero: numero.value,
    mensaje: mensaje.value,
  };
  verificarDatosStorage(datos);
};

//Guardamos datos de la persona en el storage
const guardarDatosEnStorage = (datos) => {
  localStorage.setItem(datos.email, JSON.stringify(datos));
  enviarCorreo(datos);
};

//Verificamos si la persona tiene o no una consulta realizada
const verificarDatosStorage = (datos) => {
  localStorage.getItem(datos.email)
    ? console.log("Usted ya ha enviado una consulta")
    : console.log() && guardarDatosEnStorage(datos);
};

const enviarCorreo = (datos) => {
  //Enviar correo
};

import { responiveMediaMenu, hamburguerMenu, cargarMuestra } from "./menuJS.js";
responiveMediaMenu();
hamburguerMenu();
let button_carrrID = document.getElementById("button_carrrID");
button_carrrID.addEventListener("click", () => {
  seccionCarID.classList.toggle("seccionCarCambio");
});
function muestraStorage() {
  let pagina = "",
    lcstrage = "";
  if (localStorage.getItem("productoNu") == null) {
    pagina = "produc_accesorios.json";
    lcstrage = "productoACC";
  } else {
    pagina = "datosJson.json";
    lcstrage = "productoNu";
  }

  cargarMuestra(pagina, lcstrage);
}
muestraStorage();

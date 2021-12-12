import {
  responiveMediaMenu,
  hamburguerMenu,
  menuFloar,
  CargarProduct,
} from "./menuJS.js";
responiveMediaMenu();
hamburguerMenu();
menuFloar();
CargarProduct();

let button_carrrID = document.getElementById("button_carrrID");
button_carrrID.addEventListener("click", () => {
  seccionCarID.classList.toggle("seccionCarCambio");
});
const $pasarMuestraId = document.querySelector(".a_fotogalery"),
  foto_galeria_1 = document.querySelector(".foto-galeria-1");

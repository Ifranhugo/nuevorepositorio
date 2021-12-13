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

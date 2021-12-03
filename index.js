import responiveMedia from "./indexResponsev.js";
let contPubli = `   
       <button class="carrusel_atras"  value="">atras</button>
        <button class="carrusel_adelante"  value="" id="carrusel_izquierdoID">add</button>
        <img src="../imagenes-proyecto/imgpubli-1.jpeg" alt=""  class="imgPubli">`;

let body__practicaID = document.getElementById("body__practicaID"),
  containPrincipalID = document.getElementById("containPrincipalID");

responiveMedia(
  "containPrincipalID",
  "(max-width: 330px)",
  `${contPubli}`,
  "desktopcontent"
);
let imgPubli = document.querySelector(".imgPubli");
import { Carrusel, request, frj } from "./indexResponsev.js";

let flechaatras = document.querySelector(".carrusel_atras"),
  flechaadelante = document.querySelector(".carrusel_adelante");
export { flechaatras, flechaadelante, imgPubli };
document.addEventListener("DOMContentLoaded", () => {
  request(frj, Carrusel);
});

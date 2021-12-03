import responiveMedia from "./indexResponsev.js";
let contPubli = `   
       <button  value="" class ="btCarrusel"><i class="fas fa-chevron-left carrusel_atras" _mstvisible="2"></i></button>
        <div class="bu-publicidad">
          <a href="accesorios.html" class="bu-publi">ver</a>
        </div>
        <button value="" class ="btCarrusel"><i class="fas fa-chevron-right carrusel_adelante" _mstvisible="2"></i></button>
        <img src="../imagenes-proyecto/imgpubli-1.jpeg" alt=""  class="imgPubli">`;

let body__practicaID = document.getElementById("body__practicaID"),
  containPrincipalID = document.getElementById("containPrincipalID");

responiveMedia(
  "containPrincipalID",
  "(max-width: 3700px)",
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

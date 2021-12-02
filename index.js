import responiveMedia from "./indexResponsev.js";
let contPubli = `   
       <button class="carrusel_adelante"  value="" id="carrusel_izquierdoID"><i class="fas fa-chevron-left">
      </i></button>
      <button class="carrusel_atras"  value=""  id="carrusel_izquierdoID"><i class="fas fa-chevron-right"></i></button>
    
      <img src="", frj)" alt=""  id="imgPubli">`;

let body__practicaID = document.getElementById("body__practicaID");
let containPrincipalID = document.getElementById("containPrincipalID");
responiveMedia(
  "containPrincipalID",
  "(max-width: 330px)",
  `${contPubli}`,
  "desktopcontent"
);
import { Carrusel, request, frj } from "./indexResponsev.js";
request(frj, log);
let flechaatras = contenedor.querySelector(".carrusel_atras");
export { flechaatras };
document.addEventListener("domCont", () => {
  request(frj, Carrusel);

  console.log(contenedor, "euuuu");
});

function log(content) {
  console.log(content);
}

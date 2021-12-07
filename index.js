import responiveMedia from "./indexResponsev.js";
const d = document;
let contPubli = `   
       <button  value="" class ="btCarrusel" id="btCarrusel"><i class="fas fa-chevron-left carrusel_atras" _mstvisible="2"></i></button>
        <div class="bu-publicidad">
          <a href="accesorios.html" class="bu-publi">ver</a>
        </div>
        <button value="" class ="btCarrusel"><i class="fas fa-chevron-right carrusel_adelante" _mstvisible="2"></i></button>
        <img src="./imagenes-proyecto/imgpubli-1.jpeg" alt=""  class="imgPubli">`;
let contPubliDesck = `
  <section class="cont-publicidad-1 span_publi">
      <div class="bu-publicidad">
        <a href="#" class="bu-publi">ver</a>
      </div>
    </section>
    <section class="cont-publicidad-2  span_publi">
      <div class="bu-publicidad">
        <a href="accesorios.html" class="bu-publi">ver</a>
      </div>
    </section>
    <section class="cont-publicidad-3  span_publi">
      <div class="bu-publicidad">
        <a href="accesorios.html" class="bu-publi">ver</a>
      </div>
    </section>
    <section class="cont-publicidad-4 span_publi">
      <div class="bu-publicidad">
        <a href="accesorios.html" class="bu-publi">ver</a>
      </div>`;

let body__practicaID = d.getElementById("body__practicaID"),
  containPrincipalID = d.getElementById("containPrincipalID"),
  btCarrusel = d.getElementById("btCarrusel");
import { Carrusel, request, frj } from "./indexResponsev.js";
responiveMedia(
  "containPrincipalID",
  "(max-width: 420px)",
  `${contPubli}`,
  `${contPubliDesck}`
);

let flechaatras = d.querySelector(".carrusel_atras"),
  flechaadelante = d.querySelector(".carrusel_adelante"),
  imgPubli = d.querySelector(".imgPubli");
export { flechaatras, flechaadelante, imgPubli };
// Attaching the event listener function to window's resize event
//Get width and height of the window excluding scrollbars
function displayWindowSize() {
  var w = d.dElement.clientWidth;
  var h = d.dElement.clientHeight;
  if (w <= 420) {
    request(frj, Carrusel);
    console.log(flechaadelante);
    console.log("Carrusel");
  } else {
    console.log("no carrusel");
  }
}
window.addEventListener("resize", displayWindowSize, true);
displayWindowSize();
//-------------------------------------------------
import { hamburguerMenu } from "./indexResponsev.js";

d.addEventListener("DOMContentLoad", (e) => {
  hamburguerMenu(".panel_btn", "panel_hambur");
});

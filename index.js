import responiveMedia from "./indexResponsev.js";
let contPubli = `   
       <button  value="" class ="btCarrusel" id="btCarrusel"><i class="fas fa-chevron-left carrusel_atras" _mstvisible="2"></i></button>
        <div class="bu-publicidad">
          <a href="accesorios.html" class="bu-publi">ver</a>
        </div>
        <button value="" class ="btCarrusel"><i class="fas fa-chevron-right carrusel_adelante" _mstvisible="2"></i></button>
        <img src="../imagenes-proyecto/imgpubli-1.jpeg" alt=""  class="imgPubli">`;
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

let body__practicaID = document.getElementById("body__practicaID"),
  containPrincipalID = document.getElementById("containPrincipalID"),
  btCarrusel = document.getElementById("btCarrusel");
import { Carrusel, request, frj } from "./indexResponsev.js";
responiveMedia(
  "containPrincipalID",
  "(max-width: 420px)",
  `${contPubli}`,
  `${contPubliDesck}`
);

let flechaatras = document.querySelector(".carrusel_atras"),
  flechaadelante = document.querySelector(".carrusel_adelante"),
  imgPubli = document.querySelector(".imgPubli");
export { flechaatras, flechaadelante, imgPubli };
// Attaching the event listener function to window's resize event
//Get width and height of the window excluding scrollbars
function displayWindowSize() {
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
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

import responiveMedia from "./indexResponsev.js";
import { hamburguerMenu } from "./indexResponsev.js";

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("gil");
  hamburguerMenu(".panel_btn", ".panel_hambur");
});
let sectionMenu = `    <section class="menu">
        <div class="logo"><span class="off"><h4 class="logoCLass"> RAPSARVIA</h4></span></div>

      <section class="cont-enla">
        <ul>
          <li><a href="#"> <span class="off">INICIO</span></a></li>
          <li><a href="novedades.html"> <span class="off">NOVEDADES</span></a></li>
          <li><a href="productos.html" class="productos"><span class="off"> PRODUCTOS</span></a></li>
          <li class="off-1"><a href="accesorios.html"><span class="off">ACCESORIOS</span></a></li>
          <li><a href=""><i class="fas fa-shopping-bag "></i></a></li>
          <li><svg class="lupa" width="25" height="21" viewBox="0 0 65 61" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.4061 0.5C11.7233 0.5 0.628906 10.9418 0.628906 23.8198C0.628906 36.6978 11.7233 47.1395 25.4062 47.1395C30.6678 47.1395 35.5474 45.5949 39.5584 42.9639L39.5613 42.9611L57.9372 60.2562C58.2782 60.5771 58.8205 60.5854 59.1703 60.2562L64.1229 55.595C64.4639 55.274 64.4464 54.7418 64.12 54.4345L45.7467 37.1422C48.5422 33.3644 50.1834 28.7717 50.1834 23.8198C50.1834 10.9418 39.089 0.5 25.4061 0.5ZM25.4061 41.6525C14.9413 41.6525 6.45877 33.6689 6.45877 23.8198C6.45877 13.9706 14.9414 5.98702 25.4061 5.98702C35.8708 5.98702 44.3534 13.9706 44.3534 23.8198C44.3534 33.6689 35.8709 41.6525 25.4061 41.6525Z"
                fill="black" />
            </svg></li>
        </ul>
      </section>
    </section>`;
const menuHambur = `
<div class="menuHamCon">
  <div class="logo"><h4 class="logoCLass"> RAPSARVIA</h4></div>
  <button class="panel_btn hamburger hamburger--arrow" type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
  <aside class="panel_hambur">
    <ul class="ul_hambur">
      <h4 class="title_Hamburg">Primvera verano</h4>
      <li>
        <a href="#">Inicio</a>
      </li>
      <li>
        <a href="#">Novedades</a>
      </li>
      <li>
        <a href="#">Productos</a>
      </li>
      <li>
        <a href="#">Accesorios</a>
      </li>
    </ul>
    <ul class="ul_hambur_fas">
      <li>
        <a href="#" class="a_ul_fas">
          <i class="fas fa-comments"></i>Ayuuda y Soporte
        </a>
      </li>
      <li>
        <a href="#" class="a_ul_fas">
          <i class="fas fa-map-marker-alt"></i>Encontrar una tienda
        </a>
      </li>
    </ul>
  </aside>
  <button class="btnCarr_ham">
    <i class="fas fa-shopping-bag "></i>
  </button>
</div>`;

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
responiveMedia(
  "header",
  "(max-width: 420px)",
  `${menuHambur}`,
  `${sectionMenu}`
);

let flechaatras = d.querySelector(".carrusel_atras"),
  flechaadelante = d.querySelector(".carrusel_adelante"),
  imgPubli = d.querySelector(".imgPubli");
export { flechaatras, flechaadelante, imgPubli };
// Attaching the event listener function to window's resize event
//Get width and height of the window excluding scrollbars
function displayWindowSize() {
  var w = d.documentElement.clientWidth;
  var h = d.documentElement.clientHeight;
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

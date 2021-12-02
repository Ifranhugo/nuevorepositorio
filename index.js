import responiveMedia from "./indexResponsev.js";
let contPubli = `<button class="carrusel_izquierdo" id="carrusel_izquierdoID"><i class="fas fa-chevron-right"></i></button>
      <section class="cont-publiJS-1">
        <div class="bu-publicidadJS">
        <img src="" alt="">
          <a href="#" class="bu-publi">ver</a>
        </div>

      </section>
      <section class="cont-publiJS-2">
        <div class="bu-publicidad">
          <a href="accesorios.html" class="bu-publi">ver</a>
        </div>

      </section>
      <section class="cont-publiJS-3">
        <div class="bu-publicidad">
        
          <a href="accesorios.html" class="bu-publi">ver</a>
        </div>
      </section>
      <section class="cont-publiJS-4">
        <div class="bu-publicidad">
          <a href="accesorios.html" class="bu-publi">ver</a>
        </div>
      </section>
      <button class="carrusel_izquierdo" id="carrusel_izquierdoID"><i class="fas fa-chevron-left">
      </i></button>`;

console.log("hola");
let body__practicaID = document.getElementById("body__practicaID");
let containPrincipalID = document.getElementById("containPrincipalID");
responiveMedia(
  "containPrincipalID",
  "(min-width: 330px)",
  `${contPubli} `,
  "desktopcontent"
);

var sectionMenu = `        <section class="menu">
      <div class="logo">RAPSARVIA</div>
      <section class="cont-enla">
        <ul>
          <li><a href="index.html"> <span class="off">INICIO</span></a></li>
          <li><a href="novedades.html"> <span class="off">NOVEDADES</span></a></li>
          <li><a href="productos.html" class="productos"><span class="off"> PRODUCTOS</span></a></li>
          <li class="off-1"><a href="accesorios.html"><span class="off-1"> ACCESORIOS</span></a></li>
          <li><button class="button_carrr" id="button_carrrID"><i class="fas fa-shopping-bag "></i></li></button>
          <li><svg class="lupa" width="25" height="21" viewBox="0 0 65 61" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.4061 0.5C11.7233 0.5 0.628906 10.9418 0.628906 23.8198C0.628906 36.6978 11.7233 47.1395 25.4062 47.1395C30.6678 47.1395 35.5474 45.5949 39.5584 42.9639L39.5613 42.9611L57.9372 60.2562C58.2782 60.5771 58.8205 60.5854 59.1703 60.2562L64.1229 55.595C64.4639 55.274 64.4464 54.7418 64.12 54.4345L45.7467 37.1422C48.5422 33.3644 50.1834 28.7717 50.1834 23.8198C50.1834 10.9418 39.089 0.5 25.4061 0.5ZM25.4061 41.6525C14.9413 41.6525 6.45877 33.6689 6.45877 23.8198C6.45877 13.9706 14.9414 5.98702 25.4061 5.98702C35.8708 5.98702 44.3534 13.9706 44.3534 23.8198C44.3534 33.6689 35.8709 41.6525 25.4061 41.6525Z"
                fill="black" />
            </svg></li>
        </ul>
      </section>
    </section>`,
  menuHambur = `
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
   <button class="button_carrr" id="button_carrrID"><i class="fas fa-shopping-bag "></i></button>
</div>`;

export function responiveMediaMenu() {
  let breackpoint = window.matchMedia("(max-width: 420px)");
  let menuMovile = menuHambur,
    menuDesckot = sectionMenu;
  const resposive = (e) => {
    if (e.matches) {
      console.log();
      document.getElementById("header").innerHTML = menuMovile;
    } else {
      document.getElementById("header").innerHTML = menuDesckot;
    }
  };
  breackpoint.addListener(resposive);
  resposive(breackpoint);
}
export function hamburguerMenu(panel_btn, panel_hambur) {
  const d = document;
  d.addEventListener("click", (el) => {
    if (el.target.matches(panel_btn)) {
      d.querySelector(panel_hambur).classList.toggle("panelActive");
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel_btn", ".panel_hambur");
    console.log("hola");
  });
}

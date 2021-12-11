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
document.addEventListener("click", (e) => {
  console.log("agregando");
  if (e.target.matches(".a_fotogalery")) {
    let infor = e.target;
    const idproductos = infor.closest("#foto_productID");
    const idProduct = idproductos.querySelector("#title_galeriaID").textContent;
    const newElemen = {
      precioP: idProduct,
    };
    console.log(Object.entries(newElemen));
    localStorage.setItem(
      "productoNu",
      JSON.stringify(Object.entries(newElemen))
    );
  }
});

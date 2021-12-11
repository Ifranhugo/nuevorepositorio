import { responiveMediaMenu, hamburguerMenu, menuFloar } from "./menuJS.js";
responiveMediaMenu();
hamburguerMenu();
let carrito = [];
//funcion para el menu flotante

menuFloar();

const button_cerrar_modalID = document.getElementById("button_cerrar_modalID"),
  seccionCarID = document.getElementById("seccionCarID"),
  TbodyID = document.getElementById("TbodyID"),
  Clickbuttom = document.querySelectorAll("#buttom__galeryID"),
  body_productID = document.getElementById("body_productID"),
  button_carrrID = document.getElementById("button_carrrID");

button_carrrID.addEventListener("click", () => {
  seccionCarID.classList.toggle("seccionCarCambio");
});
button_cerrar_modalID.addEventListener("click", () => {
  seccionCarID.classList.remove("seccionCarCambio");
});
Clickbuttom.forEach((btn) => {
  btn.addEventListener("click", CarritoItem);
});
//funcion para  recorrer los botones del carrito
function CarritoItem(ev) {
  const button = ev.target,
    item = button.closest(".foto_product"),
    itemTitle = item.querySelector(".title_galeria").textContent,
    itemPrice = item.querySelector(".precio_original").textContent,
    itemImag = item.querySelector(".foto-galeria-1").src;
  //objeto para las variables del carrito y con el metodo para ejecutarlo
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    imag: itemImag,
    cantidad: 1,
  };
  addItemCarrito(newItem);
}
//funcion para el carrito entero
function addItemCarrito(newItem) {
  const alert = document.getElementById("alertCarrID");

  setTimeout(() => {
    alert.classList.remove("alertCarrCambio");
  }, 2000);
  alert.classList.add("alertCarrCambio");

  const inputElement = TbodyID.getElementsByClassName("input_carr");
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === newItem.title.trim()) {
      carrito[i].cantidad++;
      const inputValue = inputElement[i];
      inputValue.value++;
      TotalCarr();

      return null;
    }
  }
  carrito.push(newItem);
  renderCarrito();
}
//agrega parte de la tabla del carrito con el producto que se carga
function renderCarrito() {
  TbodyID.innerHTML = ``;
  carrito.map((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("itemCarrito");
    const Content = `      
              <td>
                <img src =${item.imag} class= "img_carr" alt = "">
              </td>
              <td>
                <h6 class="titlee">${item.title}</h6>
              </td>
              <td>
                <h6 class="precio_modd">${item.precio}</h6>
              </td>
              <td classe ="cantidad">
                <input type="number"  min ="1" class= "input_carr" value=${item.cantidad}>
              </td>
              <td>
                <button class="button_eliminar_modal " value="">X</button>
              </td>`;
    tr.innerHTML = Content;
    TbodyID.appendChild(tr);
    tr.querySelector(".button_eliminar_modal").addEventListener(
      "click",
      removeItemCarrito
    );
    tr.querySelector(".input_carr").addEventListener("change", SumaCantidad);
  });
  TotalCarr();
}
// funcion sumatoria de los productos que se agregan o quitan del carrito
function TotalCarr() {
  let Total = 0;
  const itemCarTotal = document.querySelector(".h3Total");
  carrito.forEach((item) => {
    const PrecioCarr = Number(item.precio.replace("$", " ").replace(",", ""));
    Total = Total + PrecioCarr * item.cantidad;
  });
  itemCarTotal.innerHTML = `Total : $${Total}`;
  addlocalStorage();
}
//funcion para remover los productos del carrito
function removeItemCarrito(e) {
  const buttomDelete = e.target,
    tr = buttomDelete.closest(".itemCarrito"),
    tituloRemove = tr.querySelector(".titlee").textContent;
  for (let ir = 0; ir < carrito.length; ir++) {
    if (carrito[ir].title.trim() === tituloRemove.trim()) {
      carrito.splice(ir, 1);
    }
  }

  const alertRE = document.getElementById("alertRemoveID");
  setTimeout(() => {
    alertRE.classList.remove("alertRemoveCambio");
  }, 2000);
  alertRE.classList.add("alertRemoveCambio");
  tr.remove();
  TotalCarr();
}
//funcion para sumar mas productos repetidos con el input
function SumaCantidad(e) {
  const Suma = e.target;
  const tr = Suma.closest(".itemCarrito");
  const titlee = tr.querySelector(".titlee").textContent;
  carrito.forEach((item) => {
    if (item.title.trim() === titlee.trim()) {
      Suma.value < 1 ? (Suma.value = 1) : Suma.value;
      item.cantidad = Suma.value;
      TotalCarr();
    } else {
      console.log("no entro");
    }
  });
}
// guardar al localstorage
function addlocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
window.onload = function (params) {
  const storage = JSON.parse(localStorage.getItem("carrito"));
  if (storage) {
    carrito = storage;
    renderCarrito();
  }
};
const $pasarMuestraId = document.querySelector(".a_fotogalery"),
  foto_galeria_1 = document.querySelector(".foto-galeria-1");
document.addEventListener("click", (e) => {
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
// function pasarPagina(e) {
//   console.log("2");
// }

// $pasarMuestraId.forEach((src) => {
//   src.addEventListener("click", pasarPagina);
// });

//---------------------------------------------

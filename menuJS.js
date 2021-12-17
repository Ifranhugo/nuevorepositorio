var sectionMenu = `        <section class="menu">
      <div class="logo">RAPSARVIA</div>
      <section class="cont-enla">
        <ul>
          <li><a href="index.html"> <span class="off">INICIO</span></a></li>
          <li><a href="novedades.html"> <span class="off">NOVEDADES</span></a></li>
          <li><a href="productos.html" class="productos"><span class="off"> PRODUCTOS</span></a></li>
          <li class="off-1"><a href="accesorios.html"><span class="off-1"> ACCESORIOS</span></a></li>
          <li><button class="button_carrr" id="button_carrrID"><i class="fas fa-shopping-bag "></i></button></li>
          <li><button class="button_busc"><i class="fas fa-search"></i></button></li>
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
        <a href="index.html">Inicio</a>
      </li>
      <li>
        <a href="novedades.html">Novedades</a>
      </li>
      <li>
        <a href="productos.html">Productos</a>
      </li>
      <li>
        <a href="accesorios.html">Accesorios</a>
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
  });
}
//------------------------------------MENU FLOTANTE
export function menuFloar() {
  let efecto_menu = document.getElementById("efecto_buttom"),
    menu_flotante = document.getElementById("opciones_en_js"),
    menu_opciones = document.querySelector(".menu_opciones"),
    contador = 0;
  efecto_menu.addEventListener("click", cambio, true);
  function cambio() {
    if (contador == 0) {
      menu_flotante.innerHTML = `       <div class="container_opciones_menu">
            <nav class="nav_opcion">
              <ul class="categorias_opciones">
                <h3 class="title_menu_opciones-1"> Categorias</h3>
                <li class="list_opciones"><a href="#" class="list_opciones-1">conjuntos</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Pantalones</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Pollera</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Vestidos</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Remeras</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Zapatos</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Pollera</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Vestidos</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Remeras</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">Zapatos</a> </li>
              </ul>
            </nav>
            <nav class="nav_colores">
              <ul class="color_opciones">
                <h3 class="title_menu_opciones-1"> Colores</h3>
                <li class="list_opciones_c"><a href="#" class="list_opciones_colores">colores</a>
                  <div class="cuadrados_colores"></div>
                </li>
                <li class="list_opciones_c"><a href="#" class="list_opciones_colores">colores</a>
                  <div class="cuadrados_colores"></div>
                </li>
                <li class="list_opciones_c"><a href="#" class="list_opciones_colores">colores</a>
                  <div class="cuadrados_colores"></div>
                </li>
                <li class="list_opciones_c"><a href="#" class="list_opciones_colores">colores</a>
                  <div class="cuadrados_colores"></div>
                </li>
                <li class="list_opciones_c"><a href="#" class="list_opciones_colores">colores</a>
                  <div class="cuadrados_colores"></div>
                </li>
                <li class="list_opciones_c"><a href="#" class="list_opciones_colores">colores</a>
                  <div class="cuadrados_colores"></div>
                </li>
              </ul>
            </nav>
            <nav class="nav_talles">
              <ul class="talle_opciones">
                <h3 class="title_menu_opciones-1"> Talle</h3>
                <li class="list_opciones"><a href="#" class="list_opciones-1">36</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">38</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">40</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">42</a> </li>

                <li class="list_opciones"><a href="#" class="list_opciones-1">L</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">M</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">S</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">UNICO</a> </li>
                <li class="list_opciones"><a href="#" class="list_opciones-1">XL</a> </li>
              </ul>
            </nav>


          </div>
        </div>`;
      menu_flotante.classList.add("opcion_cambio");
      contador = 1;
    } else {
      menu_flotante.classList.remove("opcion_cambio");
      contador = 0;
    }
  }
}
//-----------------------CARGAR PRODUCTOS
//ACCESORIOS
export function CargarProduct() {
  let dat = !!document.querySelector(".body_productAcce");
  let pagina;
  if (dat == true) {
    pagina = 1;
  } else if (dat == false) {
    dat = !!document.querySelector(".body_productProduct");
    if (dat == true) {
      pagina = 2;
    } else if (dat == false) {
      dat = !!document.querySelector(".body_carr");
      if (dat == true) {
        pagina = 3;
      }
    }
  }

  console.log(dat);
  if (pagina == 1) {
    let carrito = [];
    let insertProduct = document.querySelector(".insertProduct");
    fetch("./produc_accesorios.json")
      .then((res) => res.json())
      .then((datos) => {
        datos.forEach((producto) => {
          insertProduct.innerHTML += `
    <div class="foto_product  ${producto.id}" id="foto_productID"  data-aos="fade-up">
          <img class="foto-galeria-1 a_fotogalery" src="./${producto.img1}" alt="">
        <div class="carrto__comprar" id="carrto__comprarID"><button class="buttom__galery" id="buttom__galeryID">agregar
            al carrtito<i class="fas fa-shopping-cart carrLog" _mstvisible="2"></i></button></div>
        <div class="info-galeria">
          <h3 class="title_galeria">${producto.nombrePro}</h3>
          <h4 class="precio_original" id="title_galeriaID">$${producto.precioOriginal}</h4>
          <del class="precio_rebaja">$${producto.precioDescuento}</del>
          <div class="off_porciento">
            <p>-30%</p>
          </div>
        </div>
      </div>`;
          const button_cerrar_modalID = document.getElementById(
              "button_cerrar_modalID"
            ),
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
              tr.querySelector(".input_carr").addEventListener(
                "change",
                SumaCantidad
              );
            });
            TotalCarr();
          }
          // funcion sumatoria de los productos que se agregan o quitan del carrito
          function TotalCarr() {
            let Total = 0;
            const itemCarTotal = document.querySelector(".h3Total");
            carrito.forEach((item) => {
              const PrecioCarr = Number(
                item.precio.replace("$", " ").replace(",", "")
              );
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
          document.addEventListener("click", (e) => {
            if (e.target.matches(".a_fotogalery")) {
              let infor = e.target;
              const idproductos = infor.closest("#foto_productID");
              const idProduct =
                idproductos.querySelector("#title_galeriaID").textContent;
              const newElemen = {
                precioP: idProduct,
              };

              console.log(Object.entries(newElemen));
              localStorage.setItem(
                "productoACC",
                JSON.stringify(Object.entries(newElemen))
              );
            }
          });
          localStorage.removeItem("productoACC");
          const asincronaFuncion = async () => {
            try {
              const storage = JSON.parse(localStorage.getItem("carrito"));
              if (storage) {
                carrito = storage;
                await renderCarrito();
              }
            } catch (error) {
              console.error("error carr");
            }
          };
          window.onload = asincronaFuncion();
          function addlocalStorage() {
            localStorage.setItem("carrito", JSON.stringify(carrito));
          }
        });
      });
    localStorage.removeItem("productoNu");
    // pagina de productos.html----------------------------------------------------------------------------
  } else if (pagina === 2) {
    let carrito = [];

    let insertProduct = document.querySelector(".insertProduct");
    fetch("datosJson.json")
      .then((res) => res.json())
      .then((datos) => {
        datos.forEach((producto) => {
          insertProduct.innerHTML += `
        
    <div class="foto_product  ${producto.id}" id="foto_productID"  data-aos="fade-up">
 <img class="foto-galeria-1 a_fotogalery" src="./${producto.img1}" alt="">
        <div class="carrto__comprar" id="carrto__comprarID"><button class="buttom__galery" id="buttom__galeryID">agregar
            al carrtito<i class="fas fa-shopping-cart carrLog" _mstvisible="2"></i></button></div>
        <div class="info-galeria">
          <h3 class="title_galeria">${producto.nombrePro}</h3>
          <h4 class="precio_original" id="title_galeriaID">$${producto.precioOriginal}</h4>
          <del class="precio_rebaja">$${producto.precioDescuento}</del>
          <div class="off_porciento">
            <p>-30%</p>
          </div>
        </div>
      </div>`;
          const button_cerrar_modalID = document.getElementById(
              "button_cerrar_modalID"
            ),
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
              tr.querySelector(".input_carr").addEventListener(
                "change",
                SumaCantidad
              );
            });
            TotalCarr();
          }
          // funcion sumatoria de los productos que se agregan o quitan del carrito
          function TotalCarr() {
            let Total = 0;
            const itemCarTotal = document.querySelector(".h3Total");
            carrito.forEach((item) => {
              const PrecioCarr = Number(
                item.precio.replace("$", " ").replace(",", "")
              );
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
              }
            });
          }
          // guardar al localstorage
          document.addEventListener("click", (e) => {
            if (e.target.matches(".a_fotogalery")) {
              let infor = e.target;
              const idproductos = infor.closest("#foto_productID");
              const idProduct =
                idproductos.querySelector("#title_galeriaID").textContent;
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
          localStorage.removeItem("productoNu");
          const asincronaFuncion = async () => {
            try {
              const storage = JSON.parse(localStorage.getItem("carrito"));
              if (storage) {
                carrito = storage;
                await renderCarrito();
              }
            } catch (error) {
              console.error("error carr");
            }
          };
          window.onload = asincronaFuncion();
          function addlocalStorage() {
            localStorage.setItem("carrito", JSON.stringify(carrito));
          }
        });
      });
    localStorage.removeItem("productoNu");
  } //pagina de Caritto-----------------------------------------------------------------
  else if (pagina == 3) {
    let storage = [];
    storage = JSON.parse(localStorage.getItem("carrito"));
    function noCarr() {
      const noCarr = document.querySelector(".noCarr");
      noCarr.classList.add("noCarrCambio");
      console.log(noCarr);
    }
    function noCon() {
      let contain_principal = document.querySelector(".contain_principal");
      contain_principal.classList.add("container_PrinCam");
    }
    console.log(storage);
    if (storage.length == 0) {
      noCarr();
      noCon();
    } else {
      console.log(storage[0].precio);
      let sumaIDen = 0;
      storage[sumaIDen];
      let i = 0;
      iterarProduct();
    }
    //Funcion para mostrar total de productos mas envio----------------------------------------
    function TotalCarr(carrito) {
      let Total = 0,
        TotalEnvi = 0;
      const itemCarTotal = document.querySelector(".TotalFin"),
        envioFin = document.querySelector(".envioFin"),
        TotalT = document.querySelector(".TotalT");
      const PreEnvi = Number(
        envioFin.textContent.replace("$", " ").replace(",", "")
      );
      carrito.forEach((item) => {
        const PrecioCarr = Number(
          item.precio.replace("$", " ").replace(",", "")
        );
        Total = Total + PrecioCarr * item.cantidad;
      });
      TotalEnvi = TotalEnvi + Total + PreEnvi;
      console.log(PreEnvi);
      TotalT.innerHTML = `$ ${TotalEnvi}`;
      itemCarTotal.innerHTML = ` $${Total}`;
    } //funcion para remover del carrito-------------------------------------
    function removeItemCarrito(e) {
      const buttomDelete = e.target,
        tr = buttomDelete.closest(".container_carrito"),
        container_carr_segun = document.querySelector(".container_carr_segun"),
        tituloRemove = tr.querySelector(".nombre_esp").textContent;
      for (let ir = 0; ir < storage.length; ir++) {
        let container_carrito = document.querySelector(".container_carrito");
        if (storage[ir].title.trim() === tituloRemove.trim()) {
          storage.splice(ir, 1);
          console.log(storage);
          container_carr_segun.removeChild(container_carrito);
          TotalCarr(storage);
          /*           list.removeChild(list.childNodes[0]); */
        }
        localStorage.setItem("carrito", JSON.stringify(storage));
      }
      if (storage.length == 0) {
        console.log("Hola");
        noCarr();
        noCon();
      }
    }

    //funcion para sumar cantidad----------------
    function SumaCantidad(e) {
      const Suma = e.target;
      const tr = Suma.closest(".container_carrito");
      const titlee = tr.querySelector(".nombre_esp").textContent;
      storage.forEach((item) => {
        if (item.title.trim() === titlee.trim()) {
          Suma.value < 1 ? (Suma.value = 1) : Suma.value;
          item.cantidad = Suma.value;
          console.log("holaaa");
        }
        TotalCarr(storage);
        localStorage.setItem("carrito", JSON.stringify(storage));
      });
    }
    function iterarProduct() {
      let storage = [],
        contador = 0;
      storage = JSON.parse(localStorage.getItem("carrito"));
      const div = document.createElement("div");
      div.classList.add("container_carr_segun");
      const divSuma = document.createElement("div");
      divSuma.classList.add("sumatoriaCarr");

      storage.map((producto) => {
        contador++;
        let content = `   
          <div class="container_carrito">
      <div class="contain_img_esp">
        <img class="imagenPagCarr" src="${producto.imag}" alt="">
      </div>
      <div class="especificaciones">
        <h3 class="nombre_esp">${producto.title}</h3>
        <p class="precio_esp">${producto.precio}</p>
        <input type="number"  min ="1" class= "input_carr" value=${producto.cantidad}>
      </div>
      <div class="contain_deleteCarr">
        <button class="deleteCarr" value="">x</button>
      </div>
 
    `;
        let contentSuma = `
      <ul>
        <li>
          <span>${contador} productos</span>
          <span class="TotalFin">$ </span>
        </li>
        <li>
          <span>envio</span>
          <span class="envioFin">$ 200</span>
        </li>
        <li>
          <span>Total</span>
          <span class="TotalT"></span>
        </li>
      </ul>
      <div class="CTerminarCompra">
        <button class="TerminarComCar" value="">
          Finalizar Compra
        </button>
      </div>`;
        div.innerHTML += content;
        let contain_principal = document.querySelector(".contain_principal");
        contain_principal.appendChild(div);
        div.querySelectorAll(".deleteCarr").forEach((e) => {
          e.addEventListener("click", removeItemCarrito);
        });
        div.querySelectorAll(".input_carr").forEach((e) => {
          e.addEventListener("change", SumaCantidad);
        });

        divSuma.innerHTML = contentSuma;
        contain_principal.appendChild(divSuma);
        TotalCarr(storage);
      });
    }

    let tablaCarrito = document.querySelector(".tablaCarrito");
  }
}
//-----------------------------------------------------------------------------------------------------
//esta funcion lleva a la pagina muestra, pero por cuestion de tiempo no se llego tener interactividad con el carrito en la pagina y falto mejorar el codigo asi que saque el lingk de las fotos que llevaria a la pagina
export function cargarMuestra(pagina, lcstrage) {
  let formu_infoID = document.getElementById("formu_infoID"),
    container__product_imgID = document.getElementById(
      "container__product_imgID"
    );
  fetch(pagina)
    .then((res) => res.json())
    .then((datos) => {
      let storeej = [];
      storeej.push(JSON.parse(localStorage.getItem(lcstrage)));
      let nombreComparador = storeej[0][0][1];
      datos.forEach((producto) => {
        if (producto.precioOriginal == nombreComparador.replace("$", "")) {
          container__product_imgID.innerHTML = `
    <div class="muestra_product_img">
        <img class="img_muestra_p"   src="./${producto.img1}" alt="">
      </div>
      <div class="muestra_product_img">
        <img class="img_muestra_p" src="./${producto.img2}" alt="">
      </div>
      <div class="muestra_product_img">
        <img class="img_muestra_p"  src="./${producto.img3}" alt="">
      </div>
      `;
        }
      });
    });

  fetch(pagina)
    .then((res) => res.json())
    .then((datos) => {
      let storeej = [];
      storeej.push(JSON.parse(localStorage.getItem(lcstrage)));
      let nombreComparador = storeej[0][0][1];
      datos.forEach((producto) => {
        if (producto.precioOriginal == nombreComparador.replace("$", "")) {
          formu_infoID.innerHTML += `
      <div class="formu_info">   
        <h2 class="title_formu_info">${producto.nombrePro}</h2>
        <div class="off_porciento">
          <p>-30%</p>
        </div>
        <h4 class="precio_original">precio  $${producto.precioOriginal}</h4>
          <del class="precio_rebaja">  $${producto.precioDescuento}</del>
        </div>
      <div class="colores_formu">
        <h4 class="color_formu_">Color</h4>
        <div class="cuadrados_colores_formu   amarillo_1"></div>
        <div class="cuadrados_colores_formu   azul_1"></div>
        <div class="cuadrados_colores_formu   negro_1"></div>
      </div>
      <div class="talles_formul_muestra">
        <h4 class="ttitle_talles_formu">Talles</h4>
        <div class="cuadra_talles_formu">
          <p>XS</p>
        </div>
        <div class="cuadra_talles_formu">
          <p>S</p>
        </div>
        <div class="cuadra_talles_formu">
          <p>M</p>
        </div>
        <div class="cuadra_talles_formu">
          <p>L</p>
        </div>
      </div>
       <div class="agre_bolsa_formu">
        <div class="buttom_bolsa_formu"><button class="buTTOM_bolsa">
            <p class="text_carrito"> agregar al carrito</p>
          </button></div>
      </div>
      <div class="envio_bolsa_formu">
        <h4 class="buttom_envios_formu">Envio y devoluciones
        </h4>
        <div class="devoluciones_formu_container">
          <p class="title_devoluciones_formu">DEVOLUCIONES GRATIS</p>
          <p class="text_devoluciones_formu">
            Dispones de 1 mes para devolver tus artículos: con la etiqueta de devolución que encontrarás en tu
            cuenta. No se aceptan
            devoluciones en tiendas físicas ni outlets. Los artículos personalizados y la ropa interior no se pueden
            devolver.
          </p>
        </div>
      
      `;
        }
      });
    });
}

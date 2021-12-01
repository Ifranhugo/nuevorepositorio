formu_infoID = document.getElementById("formu_infoID");
container__product_imgID = document.getElementById("container__product_imgID");

fetch("datosJson.json")
  .then((res) => res.json())
  .then((datos) => {
    let storeej = [];
    storeej.push(JSON.parse(localStorage.getItem("productoNu")));
    console.log(storeej[0][0][1]);
    let nombreComparador = storeej[0][0][1];
    console.log(nombreComparador);
    datos.forEach((producto) => {
      if (producto.precioOriginal == nombreComparador.replace("$", "")) {
        container__product_imgID.innerHTML = `
<div class="muestra_product_img">
        <img src="./imagenes-muestra/${producto.img1}" alt="">
      </div>
      <div class="muestra_product_img">
        <img src="./imagenes-muestra/${producto.img2}" alt="">
      </div>
      <div class="muestra_product_img">
        <img src="./imagenes-muestra/${producto.img3}" alt="">
      </div>
      `;
      }
    });
  });

fetch("datosJson.json")
  .then((res) => res.json())
  .then((datos) => {
    let storeej = [];
    storeej.push(JSON.parse(localStorage.getItem("productoNu")));
    console.log(storeej[0][0][1]);
    let nombreComparador = storeej[0][0][1];
    console.log(nombreComparador);
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
    console.log(storeej);
  });

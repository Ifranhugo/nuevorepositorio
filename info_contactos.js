let divPersonas = document.getElementById("sobra");
let boton_tarjeta = document.getElementById("boton_tarjeta");
boton_tarjeta.addEventListener("click", () => {
  divPersonas.innerHTML = `
      <div class="tarjet_target">
        <h3 class="title_pago">ingresa nueva tarjeta de credito</h3>

        <form action="muestraDeDatos.html" class="form_target" id="form_target">
          <label for="num_tarjet" class="label_tarjet">Número
            De Tarjeta</label>
          <input type="tel" class="input_tarjet" name="number_tarjet" data-js="form-input" data-input-id="cardNumber"
            required="true" maxlength="19" minlength="12" pattern="^([0-9 ]+)+$" autocomplete="cc-number"
            spellcheck="false" data-hj-masked="data-hj-masked">
          <label for="nombres_De_tarjeta" class="label_tarjet">Nombre y Apellido Del Titular</label>
          <input type="text" class="input_tarjet" name="nametitular" data-js="form-input" data-input-id="ownerName"
            required="true" maxlength="70" minlength="5" pattern="^[a-zA-Z-À-Ÿà-ÿ][A-Za-zÀ-Ÿà-ÿ ,.']+$"
            autocomplete="cc-name" spellcheck="true" autocapitalize="words">
          <div class="datos_tarjeta2">
            <input type="tel" class="input_tarjet_se" name="fecha_expirer" placeholder="fecha de expiracion"
              data-js="form-input" data-input-id="expirationDate"  pastdate="" validdate="" autocomplete="cc-exp"
              spellcheck="false">
            <input type="tel" class="input_tarjet_se" placeholder="clave de seguridad" name="clave" data-js="form-input"
              data-input-id="securityCode" required="true" maxlength="4" minlength="3" pattern="^[0-9]+$"
              autocomplete="off" spellcheck="false" data-hj-masked="data-hj-masked">
          </div>
          <label for="dni_titular" class="label_tarjet">DNI Del Titular</label>
          <input type="number" class="input_tarjet" name="DNI_titular" data-js="form-input"
            data-input-id="userIdentificationNumber" required="true" pattern="^([0-9.]+)+$" minlength="7" maxlength="8"
            autocomplete="off" spellcheck="false">
          <div class="container_buttom_tarjet">
            <input type="submit" class="but-inp-tarjet" required="">
          </div>
        </form>
        <div class="img_tarjet">
          <img class="img_tajrt_img" src="../proyectoecomers/imagenes-novedades/tarjeta de credito.jpg" alt="">
        </div>
      </div>   <button class="button_ter_datos"><a class="datos_a" href="muestraDeDatos.html">finalizar</a></button>
`;
});
let boton_tarjeta_debito = document.getElementById("boton_tarjeta_debito");
boton_tarjeta_debito.addEventListener("click", () => {
  divPersonas.innerHTML = `
      <div class="tarjet_target">
        <h3 class="title_pago">ingresa nueva tarjeta de debito</h3>

        <form action="muestraDeDatos.html" class="form_target" id="form_target">
          <label for="num_tarjet" class="label_tarjet">Número
            De Tarjeta</label>
          <input type="tel" class="input_tarjet" name="number_tarjet" data-js="form-input" data-input-id="cardNumber"
            required="true" maxlength="19" minlength="12" pattern="^([0-9 ]+)+$" autocomplete="cc-number"
            spellcheck="false" data-hj-masked="data-hj-masked">
          <label for="nombres_De_tarjeta" class="label_tarjet">Nombre y Apellido Del Titular</label>
          <input type="text" class="input_tarjet" name="nametitular" data-js="form-input" data-input-id="ownerName"
            required="true" maxlength="70" minlength="5" pattern="^[a-zA-Z-À-Ÿà-ÿ][A-Za-zÀ-Ÿà-ÿ ,.']+$"
            autocomplete="cc-name" spellcheck="true" autocapitalize="words">
          <div class="datos_tarjeta2">
            <input type="tel" class="input_tarjet_se" name="fecha_expirer" placeholder="fecha de expiracion"
              data-js="form-input" data-input-id="expirationDate" required="true" maxlength="9" minlength="5"
              pattern="^(0[1-9]|1[0-2])( )?\/( )?([2][0]\d{2}|\d{2})$" pastdate="" validdate="" autocomplete="cc-exp"
              spellcheck="false">
            <input type="tel" class="input_tarjet_se" placeholder="clave de seguridad" name="clave" data-js="form-input"
              data-input-id="securityCode" required="true" maxlength="4" minlength="3" pattern="^[0-9]+$"
              autocomplete="off" spellcheck="false" data-hj-masked="data-hj-masked">
          </div>
          <label for="dni_titular" class="label_tarjet">DNI Del Titular</label>
          <input type="number" class="input_tarjet" name="DNI_titular" data-js="form-input"
            data-input-id="userIdentificationNumber" required="true" pattern="^([0-9.]+)+$" minlength="7" maxlength="8"
            autocomplete="off" spellcheck="false">
          <div class="container_buttom_tarjet">
            <input type="submit" class="but-inp-tarjet" required="">
          </div>
        </form>
        <div class="img_tarjet">
          <img class="img_tajrt_img" src="../proyectoecomers/imagenes-novedades/tarjeta_debito_diseño.png" alt="">
        </div>
      </div> <button class="button_ter_datos"><a class="datos_a" href="muestraDeDatos.html">finalizar</a></button>  

`;
});

let nuevocliente = [];

//funcion de el formulario de identificacion
function Clientes(email, email2, telefono) {
  this.email = email;
  this.email2 = email2;
  this.telefono = telefono;
}
let clientesCont = [];
let formulario_info = document.getElementById("formulario_info");
formulario_info.addEventListener("submit", (el) => {
  el.preventDefault();
  let formInfo = new FormData(el.target);
  const nuevocliente = new Clientes(
    formInfo.get("email"),
    formInfo.get("email2"),
    formInfo.get("telefono")
  );
  clientesCont.push(nuevocliente);
  localStorage.setItem(`clientesCont`, JSON.stringify(clientesCont));

  formulario_info.reset();
});
//funciones de el formulario de entrega
function ClientesEntrega(
  nombre,
  apellido,
  tipoDeDNI,
  numDocumento,
  calle,
  altrua,
  piso,
  depa,
  postal,
  ciudad
) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.tipoDeDNI = tipoDeDNI;
  this.numDocumento = numDocumento;
  this.calle = calle;
  this.altrua = altrua;
  this.piso = piso;
  this.depa = depa;
  this.postal = postal;
  this.ciudad = ciudad;
}
let formulario_entrega = document.getElementById("formulario_entrega");
let clientesDomicilio = [];
formulario_entrega.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  const datosEntrega = new ClientesEntrega(
    formData.get("nombre"),
    formData.get("apellido"),
    formData.get("tipo_de_documento"),
    formData.get("dni"),
    formData.get("calle"),
    formData.get("altura"),
    formData.get("piso"),
    formData.get("depa"),
    formData.get("postal"),
    formData.get("ciudad")
  );
  clientesDomicilio.push(datosEntrega);
  localStorage.setItem(`clientesDomicilio`, JSON.stringify(clientesDomicilio));

  formulario_entrega.reset();
});
//funciones de el formulario de tarjeta
function ClientesTarget(
  numeroTarget,
  nombreTitular,
  fechaExpirar,
  clave,
  dniTitular
) {
  this.numeroTarget = numeroTarget;
  this.nombreTitular = nombreTitular;
  this.fechaExpirar = fechaExpirar;
  this.clave = clave;
  this.dniTitular = dniTitular;
}

let form_target = document.getElementById("form_target");
let clientesTargeta = [];
form_target.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let formDataTarget = new FormData(ev.target);
  const datosTargeta = new ClientesTarget(
    formDataTarget.get("number_tarjet"),
    formDataTarget.get("nametitular"),
    formDataTarget.get("fecha_expirer"),
    formDataTarget.get("clave"),
    formDataTarget.get("DNI_titular")
  );

  clientesTargeta.push(datosTargeta);
  localStorage.setItem(`clientesTargeta`, JSON.stringify(clientesTargeta));

  form_target.reset();
});

//// pagina de muestra de datos

let mostrar_clientesID = document.getElementById("mostrar_clientesID");
let bottom_mostrarId = document.getElementById("bottom_mostrarId");
let iddatos_a = document.getElementById("iddatos_a");
let IDcontainer_sectionDatos1 = document.getElementById(
  "IDcontainer_sectionDatos1"
);
let container2_sectionDatos1ID = document.getElementById(
  "container2_sectionDatos1ID"
);
let container3_sectionDatos1ID = document.getElementById(
  "container3_sectionDatos1ID"
);
let container4_sectionDatos1ID = document.getElementById(
  "container4_sectionDatos1ID"
);
let tarjet_targetID = document.getElementById("formularioDePago");
let cambiarBody = document.getElementById("cambiarBody");
sector1DatosID = document.getElementById("sector1DatosID");

iddatos_a.addEventListener("click", () => {
  mostrar_clientesID.classList.add("mostrar_clientesCambio");
});
let clientesTargetaparce = JSON.parse(localStorage.getItem("clientesTargeta"));

bottom_mostrarId.addEventListener("click", () => {
  cambiarBody.classList.toggle("body_cambio");
  IDcontainer_sectionDatos1.classList.add("cambio_contain");
  container2_sectionDatos1ID.classList.add("cambio_contain2");
  clientesTargetaparce.forEach((clientesTargeta, indice) => {
    container2_sectionDatos1ID.innerHTML = `<div class="con_decartaDePago">
          <h3 class="title_decartaDePago">Forma de pago cliente numero</h3>
        </div>
        <div class="carta_deDatos1">
          <table class="tablaDePago">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td colspan="5">Tarjeta:</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${clientesTargeta.numeroTarget}</td>
            </tr>
            <tr>
              <td colspan="5">propietario:</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colspan="5">cuotas:</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${clientesTargeta.nombreTitular}</td>
            </tr>
          </table>
        </div>`;
  });
});

let clientesContparce = JSON.parse(localStorage.getItem("clientesCont"));

bottom_mostrarId.addEventListener("click", () => {
  container3_sectionDatos1ID.classList.add("cambio_contain3");
  clientesContparce.forEach((clientesCont, ind) => {
    container3_sectionDatos1ID.innerHTML = `
        <div class="con_decartaDedatos">
          <h3 class="title_decartaDedatos">Identificacion${ind}</h3>
        </div>
        <div class="carta_deDatos2">
          <p>${clientesCont.email}</p>
          <p>emanuel ifran</p>
          <p>${clientesCont.telefono}</p>
        </div>
      `;
  });
});
let clientesDomparce = JSON.parse(localStorage.getItem("clientesDomicilio"));

bottom_mostrarId.addEventListener("click", () => {
  container4_sectionDatos1ID.classList.add("cambio_contain4");
  clientesDomparce.forEach((clientesDomicilio, iner) => {
    container4_sectionDatos1ID.innerHTML = `
        <div class="con_decartaDeEntrega">
          <h3 class="title_decartaDeEntrega">entrega</h3>
        </div>
        <div class="carta_deDatos3">
          <table class="tablaDeEntrega">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td colspan="5">Domicio:</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>calle:${clientesDomicilio.calle} altura:${clientesDomicilio.altrua}</td>
            </tr>
            <tr>
              <td colspan="5">ciudad:</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td> ${clientesDomicilio.ciudad}</td>
            </tr>
            <tr>
              <td colspan="5">codigo postal</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>${clientesDomicilio.postal}</td>
            </tr>
          </table>

        </div>`;
  });
});

// let clientesTargetaparce =
//   JSON.parse(localStorage.getItem(clientesTargeta)) +
//   JSON.parse(getItem(clientesDomicilio)) +
//   JSON.parse(clientes)(
//     clientesTargetaparce.forEach((datosTargeta, indice) => {
//       IDcontainer_sectionDatos1.innerHTML = `
//       <div class="container3_sectionDatos1">
//         <div class="con_decartaDedatos">
//           <h3 class="title_decartaDedatos">Identificacion</h3>
//         </div>
//         <div class="carta_deDatos2">
//           <p>ifranluzbelito@gamil.com</p>
//           <p>emanuel ifran</p>
//           <p>11 34522737</p>
//         </div>
//       </div>
//       <div class="container4_sectionDatos1">
//         <div class="con_decartaDeEntrega">
//           <h3 class="title_decartaDeEntrega">entrega</h3>
//         </div>
//         <div class="carta_deDatos3">
//           <table class="tablaDeEntrega">
//             <tr>
//               <th></th>
//               <th></th>
//               <th></th>
//               <th></th>
//             </tr>
//             <tr>
//               <td colspan="5">Domicio:</td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>
//             <tr>
//               <td colspan="5">ciudad:</td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td> buenos aires, morenos</td>
//             </tr>
//             <tr>
//               <td colspan="5">tiempo de entrega:</td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td>de hasta 6 dias habiles</td>
//             </tr>
//           </table>

//         </div>

//   `;
//     })
//   );
bottom_mostrarId.addEventListener("click", () => {
  mostrar_clientesID.classList.remove("mostrar_clientesCambio");
});

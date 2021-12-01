function constructorProductos(
  nombre,
  color,
  talle,
  precio,
  precioViejo,
  numCuotas,
  cuotasDepago
) {
  this.nombre = nombre;
  this.color = color;
  this.talle = talle;
  this.precio = precio;
  this.precioViejo = precioViejo;
  this.impuestoIVA = 1.5;
  this.descuento = 30 / 100;
  this.numCuotas = numCuotas;
  this.cuotasDepago = cuotasDepago;
  this.compra = function () {
    return console.log(
      "el precio del producto con el impuestoIVA  y el descuento es de =",
      (this.varlor1 = this.precio * this.descuento * this.impuestoIVA)
    );
  };
}

const colorProducto = [
  "  ",
  "rojo",
  "  ",
  "azul",
  "  ",
  "negro",
  "  ",
  "blanco",
];
const tallesProductos = ["S", "  ", "XS", "  ", "M", "  ", "L"];
const nombresProductos = [
  "0 = CAMIZA GINZA",
  "1= BUZO DESTINI",
  "2 = VESTIDO LIBRE",
  "3 = REMERA MICKEY TIRAS",
  "4 = VESTIDO MORLEY HOMBRERAS ABIP",
  "5 = VESTIDO CORTO LEAH",
];

function cuotasGeneral() {
  const cuotas = (containerRopa, containerCuotas) =>
    containerRopa / containerCuotas;
  bandera3 = true;
  while (bandera3 == true) {
    numeroDeCuotas = parseInt(prompt(`lo quiere hacer en 3, 6 o 12 cuotas?`));
    if (numeroDeCuotas === 3 || numeroDeCuotas === 6 || numeroDeCuotas === 12) {
      guardarCuotas = cuotas(
        arrayDeObjet[comprador][1][1],
        numeroDeCuotas
      ).toFixed(2);
      alert(`lo puede hacer en ${numeroDeCuotas} cuotas de = ${guardarCuotas}`);
      bandera3 = false;
    } else {
      alert("numero de cuotas invalido");
    }
  }
}
const infoProductos = {
  produ1: ["CAMIZA GINZA", 4850, 4000],
  produ2: ["BUZO DESTINI", 3900, 5070],
  produ3: ["VESTIDO LIBRE", 1150, 3100],
  produ4: ["REMERA MICKEY TIRAS", 668, 955],
  produ5: ["VESTIDO MORLEY HOMBRERAS ABIP", 805, 1150],
  produ6: ["VESTIDO CORTO LEAH", 785, 1570],
};
let arrayDeObjet = Object.entries(infoProductos);
guardarColor = 0;
guardarTalle = 0;
bandera3 = true;
bandera = true;
bandera2 = true;
opcion = "";
contadora = 0;
contadoraT = 0;
function terminarCompra() {
  bandera2 = true;
  while (bandera2 == true) {
    opcion = parseInt(
      prompt(
        `quiere llevar otra cosa? precione "1" si quiere y "2"en caso de que este conforme`
      )
    );
    if (opcion === 1) {
      bandera2 = false;
      bandera = true;
    } else if (opcion === 2) {
      bandera2 = false;
      bandera = false;
    } else {
      alert("no escribio bien la opcion, vuelva a intentar porfavor");
      bandera2 = true;
      bandera = false;
    }
  }
}
function sumaDefunction(tipo) {
  if (comprador == tipo) {
    guardarColor = prompt(`los colores disponibles son ${colorProducto}`);
    while (bandera2) {
      for (let indice = 0; indice < colorProducto.length; indice++) {
        if (guardarColor == colorProducto[indice]) {
          bandera2 = false;
          break;
        } else {
          contadora++;
          if (contadora > colorProducto.length) {
            alert(
              "asegurese de haber escrito bien el color que elija porvafor"
            );
            contadora = 0;
            guardarColor = prompt(
              `los colores disponibles son ${colorProducto}`
            );
            break;
          }
        }
      }
    }
    guardarTalle = prompt(`los talles disponibles son ${tallesProductos}`);
    bandera2 = true;
    while (bandera2) {
      for (
        let indiceTalle = 0;
        indiceTalle < tallesProductos.length;
        indiceTalle++
      ) {
        if (guardarTalle == tallesProductos[indiceTalle]) {
          bandera2 = false;
          break;
        } else {
          contadoraT++;
          if (contadoraT > tallesProductos.length) {
            alert(
              "asegurese de haber escrito bien el talle que elija y en mayuscula porvafor"
            );
            contadoraT = 0;
            guardarTalle = prompt(
              `los talles disponibles son ${tallesProductos}`
            );
            break;
          }
        }
      }
    }
    cuotasGeneral();
    const producto1 = new constructorProductos(
      arrayDeObjet[comprador][1][0],
      guardarColor,
      guardarTalle,
      arrayDeObjet[comprador][1][1],
      arrayDeObjet[comprador][1][2],
      numeroDeCuotas,
      guardarCuotas
    );
    alert(
      "los detalles de su compra se mostraran por console al terminar las compras"
    );
    producto1.compra();
    console.log(`
        nombre =${producto1.nombre},
        color =  ${producto1.color}
        talle = ${producto1.talle}
        precio = ${producto1.precio}
        precio anterior= ${producto1.precioViejo}
        descuento = ${producto1.descuento}
        numeros de cuotas =${producto1.numCuotas}
        pago por mes de = ${producto1.cuotasDepago}
       impuesto IVA = ${producto1.impuestoIVA}% de iva`);

    terminarCompra();
  }
}
while (bandera) {
  bandera2 = true;
  comprador = prompt(
    `estos son los productos disponibles ${nombresProductos} elija el que quiera poniendo su enumeracion por favor`
  );

  sumaDefunction(comprador);
}

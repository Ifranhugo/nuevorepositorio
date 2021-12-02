const w = window,
  d = document;

export default function responiveMedia(id, mq, movilecontent, desktopcontent) {
  let breackpoint = w.matchMedia(mq);

  const resposive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = movilecontent;
    } else {
      d.getElementById(id);
    }
    Carrusel(containPrincipalID, frj);
  };

  breackpoint.addListener(resposive);
  resposive(breackpoint);
}
document.addEventListener("domCont", () => {
  request(frj, Carrusel(containPrincipalID));
  console.log(contenedor, "euuuu");
});

function log(content) {
  console.log(content);
}
import { flechaatras } from "./index.js";
export let frj = "./imag_publi.json";
export async function request(frj, fun) {
  let respuesta = await fetch(frj);
  let json = await respuesta.json();
  let jsonArray = Object.entries(json);
  fun(containPrincipalID, jsonArray, flechaatras);
}

request(frj, log);
export function Carrusel(contenedor, nam, atras) {
  contenedor.addEventListener("click", (ed) => {
    (adelante = contenedor.querySelector(".carrusel_adelante")),
      (cont = 0),
      (imgPubli = contenedor.querySelector("imgPubli")),
      (tgt = ed.target),
      (array = [nam]);
    array.forEach((ent) => {
      if (tgt === atras) {
        console.log("anda");
        if (cont > 0) {
          imgPubli.src = ent[cont - (1)[1]];
          cont--;
        } else {
          imgPubli.src = ent[ent.length - 1];
          cont = ent.length - 1;
        }
      } else if (tgt == adelante) {
        if (cont > ent.length - 1) {
          imgPubli.src = ent[ent.length + 1];
          cont++;
        } else {
          imgPubli.src = ent[0][1];
          cont = 0;
        }
      }
    });
  });
}

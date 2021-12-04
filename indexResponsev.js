const w = window,
  d = document;

export default function responiveMedia(id, mq, movilecontent, descktopt) {
  let breackpoint = w.matchMedia(mq);

  const resposive = (e) => {
    if (e.matches) {
      Carrusel(containPrincipalID, frj);
      d.getElementById(id).innerHTML = movilecontent;
    } else {
      d.getElementById(id).innerHTML = descktopt;
    }
  };

  breackpoint.addListener(resposive);
  resposive(breackpoint);
}

export let frj = "./imag_publi.json";
import { flechaatras, flechaadelante, imgPubli } from "./index.js";
export async function request(frj, fun) {
  let respuesta = await fetch(frj);
  let json = await respuesta.json();
  let jsonArray = Object.entries(json);
  fun(containPrincipalID, jsonArray, flechaatras, flechaadelante, imgPubli);
}

export function Carrusel(contenedor, nam, atras, adelante, imgPublicidad) {
  console.log("adentro de carruser");
  let cont = 0,
    array = [nam];
  console.log(imgPublicidad);
  contenedor.addEventListener("click", (ed) => {
    console.log(atras, " ", adelante);
    array.forEach((ent) => {
      if (ed.target == atras) {
        if (cont > 0) {
          imgPublicidad.src = ent[cont - 1][1].img;
          cont--;
        } else {
          imgPublicidad.src = ent[ent.length - 1][1].img;
          cont = ent.length;
        }
      } else if (ed.target == adelante) {
        console.log("else");
        if (cont < ent.length - 1) {
          imgPublicidad.src = ent[cont + 1][1].img;
          cont++;
        } else {
          imgPublicidad.src = ent[0][1].img;
          cont = 0;
        }
      }
    });
  });
}

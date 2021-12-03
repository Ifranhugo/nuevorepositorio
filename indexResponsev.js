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

export let frj = "./imag_publi.json";
import { flechaatras, flechaadelante, imgPubli } from "./index.js";
export async function request(frj, fun) {
  let respuesta = await fetch(frj);
  let json = await respuesta.json();
  let jsonArray = Object.entries(json);
  fun(containPrincipalID, jsonArray, flechaatras, flechaadelante, imgPubli);
}

request(frj, log);
export function Carrusel(contenedor, nam, atras, adelante, imgPublicidad) {
  let cont = 0,
    array = [nam];
  contenedor.addEventListener("click", (ed) => {
    array.forEach((ent) => {
      if (ed.target == atras) {
        if (cont > 0) {
          imgPublicidad.src = ent[cont - 1][1].img;
          cont--;
          //console.log(cont);
        } else {
          imgPublicidad.src = ent[ent.length - 1][1].img;
          console.log(ent[ent.length - 1][1].img);
          cont = ent.length;
        }
      } else if (ed.target == adelante) {
        if (cont < ent.length - 1) {
          // console.log("lenght  ", ent.length - 1);

          // console.log(ent[1][1]);
          // console.log(imgPublicidad.src);
          imgPublicidad.src = ent[1][1].img;
          cont++;
          //console.log(cont);
        } else {
          //console.log("else adealnte  ", ent.length - 1);
          imgPublicidad.src = ent[0][1].img;
          cont = 0;
        }
      }
    });
  });
}

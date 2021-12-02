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
    console.log(e.matches, breackpoint);
  };
  breackpoint.addListener(resposive);
  resposive(breackpoint);
  function log(content) {
    console.log(content);
  }

  function print(params) {}
  async function request(frj, fn) {
    let respuesta = await fetch(frj);
    let json = await respuesta.json();
    fn(json);
  }
  request(frj, log);
}
let frj = "./imag_publi.json";

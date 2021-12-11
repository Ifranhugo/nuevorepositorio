export default function responiveMedia(id, mq, movilecontent, descktopt) {
  let breackpoint = window.matchMedia(mq);
  const resposive = (e) => {
    if (e.matches) {
      console.log();
      document.getElementById(id).innerHTML = movilecontent;
    } else {
      document.getElementById(id).innerHTML = descktopt;
    }
  };
  breackpoint.addListener(resposive);
  resposive(breackpoint);
}

export function intervalHandler() {
  let decallageHoraire = 8;
  let day = new Date();
  let hours = day.getHours() + decallageHoraire;
  let minutes = day.getMinutes();
  let secondes = day.getSeconds();
  let timeTexte = `${hours}:${minutes}:${secondes}`;
  document.querySelector('#tokyo_time').innerHTML = timeTexte;
  setInterval('intervalHandler()', 1000);
}




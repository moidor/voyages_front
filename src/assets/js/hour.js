//***** TOKYO *****
// Ajout du zéro devant afin de formater l'affichage
function ajoutZeroDevant(chiffre) {
  if (chiffre < 10) {
    chiffre = "0"+chiffre;
  }
  return chiffre;
}

// Si l'heure passe à minuit
function passerAMinuit(heure) {
  if (heure < 24) {
    heure = hours;
  } else {
    heure = hours-24;
  }
  return heure;
}

function intervalHandler() {
  decalageHoraire = 8;
  let day = new Date();

  let secondes = day.getSeconds();
  secondes = ajoutZeroDevant(secondes);

  let minutes = day.getMinutes();
  minutes = ajoutZeroDevant(minutes);

  let hours = day.getHours() + decalageHoraire;
    if (hours < 24) {
      hours = hours;
    } else {
      hours = hours-24;
    }
  hours = ajoutZeroDevant(hours);

  let tokyoTime = `À Tokyo, il est ${hours}:${minutes}:${secondes}`;
  document.querySelector('#tokyo_time').innerHTML = tokyoTime;
}

setInterval("intervalHandler()", 1000);

//***** LOS ANGELES *****
function intervalHandlerLosAngeles() {
  decalageHoraireLosAngeles = -9;
  let day = new Date();

  let secondes = day.getSeconds();
  secondes = ajoutZeroDevant(secondes);

  let minutes = day.getMinutes();
  minutes = ajoutZeroDevant(minutes);

  let hours = day.getHours() + decalageHoraireLosAngeles;
  if (hours < 24) {
    hours = hours;
  } else {
    hours = hours-24;
  }
  hours = ajoutZeroDevant(hours);

  let losAngeles_time = `À Los Angeles, il est ${hours}:${minutes}:${secondes}`;
  document.querySelector('#losAngeles_time').innerHTML = losAngeles_time;
}

setInterval("intervalHandlerLosAngeles()", 1000);

//***** LE CAIRE *****
/* Si l'heure passe à minuit
function passerAMinuit(heure) {
  if (heure < 24) {
    heure = hours;
  } else {
    heure = hours-24;
  }
  return heure;
} */

function intervalHandlerNewDelhi() {
  decalageHoraireNewDelhi = 3;
  decalageHoraireNewDelhiMinutes = 30;
  // Instanciation d'un objet de type "Date"
  let day = new Date();

  // Récupération des secondes avec l'ajout du zéro devant si inférieures à 10
  let secondes = day.getSeconds();
  secondes = ajoutZeroDevant(secondes);

  // Formatage des hours avec
  let hours = day.getHours() + decalageHoraireNewDelhi;
  if (hours < 24) {
    hours;
  } else {
    hours = hours-24;
  }

  let minutes = day.getMinutes() + decalageHoraireNewDelhiMinutes;
  if(minutes < 60) {
    minutes;
  } else {
    minutes = minutes-60;
    hours = hours+1;
  }
  minutes = ajoutZeroDevant(minutes);
  hours = ajoutZeroDevant(hours);

  let newDelhi_time = `À New Delhi, il est ${hours}:${minutes}:${secondes}`;
  document.querySelector('#newDelhi_time').innerHTML = newDelhi_time;
}

setInterval("intervalHandlerNewDelhi()", 1000);

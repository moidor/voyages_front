import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  // decalageHoraire: number;
  displayTime: string;

  // Ajout du zéro devant afin de formater l'affichage
  ajoutZeroDevant(chiffre) {
    if (chiffre < 10) {
      chiffre = '0' + chiffre;
    }
    return chiffre;
  }

  // Si l'heure passe à minuit
  passerAMinuit(heure: number) {
    if (heure < 24) {
      heure = heure;
    } else {
      heure = heure - 24;
    }
    return heure;
  }

  intervalHandler(city: string, decalageHoraire: number) {
    decalageHoraire = decalageHoraire;
    const day = new Date();

    let secondes = day.getSeconds();
    secondes = this.ajoutZeroDevant(secondes);

    let minutes = day.getMinutes();
    minutes = this.ajoutZeroDevant(minutes);

    let hours = day.getHours() + decalageHoraire;
    if (hours < 24) {
        hours = hours;
      } else {
        hours = hours - 24;
      }
    hours = this.ajoutZeroDevant(hours);

    return `À ${city}, il est ${hours}:${minutes}:${secondes}`;
  }

}

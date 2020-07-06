import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // Affichage de la date du jour
  today = new Date();
  decalageHoraire: number;
  displayTimeMontreal: string;
  displayTimeHonolulu: string;

  montreal = setInterval(() => {
    return this.displayTimeMontreal = this.intervalHandler('Montréal', 18);
  }, 1000);

  honolulu = setInterval(() => {
    return this.displayTimeHonolulu = this.intervalHandler('Honolulu', 12);
  }, 1000);

  ngOnInit() {
  }

  // Ajout du zéro devant afin de formater l'affichage
  ajoutZeroDevant(chiffre) {
    if (chiffre < 10) {
      chiffre = '0' + chiffre;
    }
    return chiffre;
  }

  // Si l'heure passe à minuit
  passerAMinuit(heure) {
    if (heure < 24) {
      heure = heure;
    } else {
      heure = heure - 24;
    }
    return heure;
  }

  intervalHandler(city: string, decalageHoraire: number) {
    this.decalageHoraire = decalageHoraire;
    const day = new Date();

    let secondes = day.getSeconds();
    secondes = this.ajoutZeroDevant(secondes);

    let minutes = day.getMinutes();
    minutes = this.ajoutZeroDevant(minutes);

    let hours = day.getHours() + this.decalageHoraire;
    if (hours < 24) {
        hours = hours;
      } else {
        hours = hours - 24;
      }
    hours = this.ajoutZeroDevant(hours);

    return `À ${city}, il est ${hours}:${minutes}:${secondes}`;
  }

}

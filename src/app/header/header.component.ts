import { Component, OnInit } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

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
  decalageHoraireMinutes: number;
  displayTimeTokyo: string;
  displayTimeLosAngeles: string;
  displayTimeNewDelhi: string;
  displayTimeMontreal: string;
  displayTimeHonolulu: string;

  // Appel de la méthode setInterval pour les 5 villes
  tokyo = setInterval(() => {
    return this.displayTimeTokyo = this.intervalHandler('Tokyo', 8, 0);
  }, 1000);

  losAngeles = setInterval(() => {
    return this.displayTimeLosAngeles = this.intervalHandler('Los Angeles', 15, 0);
  }, 1000);

  newDelhi = setInterval(() => {
    return this.displayTimeNewDelhi = this.intervalHandler('New Delhi', 3, 30);
  }, 1000);

  montreal = setInterval(() => {
    return this.displayTimeMontreal = this.intervalHandler('Montréal', 18, 0);
  }, 1000);

  honolulu = setInterval(() => {
    return this.displayTimeHonolulu = this.intervalHandler('Honolulu', 12, 0);
  }, 1000);

  ngOnInit() {
  }

  // Ajout du zéro devant afin de formater l'affichage
  ajoutZeroDevant(chiffre: any) {
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

  // S'il y a des minutes de décalage horaire à ajouter
  ajout30Minutes(minutes: number, heure: number) {
    if (minutes < 60) {
      minutes = minutes;
    } else {
      heure = heure + 1;
      minutes = minutes - 60;
    }
    return heure && minutes;
  }

  intervalHandler(city: string, decalageHoraire: number, decalageHoraireMinutes: number) {
    this.decalageHoraire = decalageHoraire;
    this.decalageHoraireMinutes = decalageHoraireMinutes;
    const day = new Date();

    let secondes = day.getSeconds();
    secondes = this.ajoutZeroDevant(secondes);

    let hours = day.getHours() + this.decalageHoraire;
    hours = this.passerAMinuit(hours);
    hours = this.ajoutZeroDevant(hours);

    let minutes = day.getMinutes() + this.decalageHoraireMinutes;
    minutes = this.ajout30Minutes(minutes, hours);
    minutes = this.ajoutZeroDevant(minutes);

    const result = (heure: number) => {
      if (heure > 6 && heure < 19) {
        return `<div class="alert alert-warning" role="alert">
                  <h5 class="alert-heading">${city}</h5>
                  ${hours}:${minutes}:${secondes}
                </div>`;
      } else {
        return `<div class="alert alert-primary" role="alert">
                  <h5 class="alert-heading">${city}</h5>
                  ${hours}:${minutes}:${secondes}
                </div>`;
      }
    };
    return result(hours);
  }
}

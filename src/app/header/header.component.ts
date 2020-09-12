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
    return this.displayTimeTokyo = this.intervalHandler('Tokyo', 7, 0);
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
      minutes = minutes - 60;
    }
    return heure + 1 && minutes;
  }

  ajoutHeure(minutes: number, heure: number) {
    if (minutes >= 60) {
      heure = heure + 1;
    }
    return heure;
  }

  intervalHandler(city: string, decalageHoraire: number, decalageHoraireMinutes: number) {
    this.decalageHoraire = decalageHoraire;
    this.decalageHoraireMinutes = decalageHoraireMinutes;
    const day = new Date();
    let hours = day.getHours() + this.decalageHoraire;
    let minutes = day.getMinutes() + this.decalageHoraireMinutes;
    // Formatage des secondes
    let secondes = day.getSeconds();
    secondes = this.ajoutZeroDevant(secondes);
    // Formatage des minutes avec l'ajout des 30 minutes pour New Delhi
    minutes = this.ajout30Minutes(minutes, hours);
    minutes = this.ajoutZeroDevant(minutes);
// Formatage des heures avec le passage à minuit ainsi que l'heure en plus pour New Delhi
    hours = this.passerAMinuit(hours);
    hours = this.ajoutHeure(minutes, hours);
    hours = this.ajoutZeroDevant(hours);

    const result = (heure: number) => {
      if (heure > 6 && heure < 19) {
        return `<div class="alert alert-warning" role="alert" style="width: 180px">
                  <h5 class="alert-heading">${city}</h5>
                  <img src="../../assets/img/soleil.png" alt="">
                  ${hours}:${minutes}:${secondes}
                </div>`;
      } else {
        return `<div class="alert alert-primary" role="alert" style="width: 180px">
                  <h5 class="alert-heading">${city}</h5>
                  <img src="../../assets/img/lune.png" alt="">
                  ${hours}:${minutes}:${secondes}
                </div>`;
      }
    };
    return result(hours);
  }
}

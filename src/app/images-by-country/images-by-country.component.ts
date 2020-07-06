import {Component, OnInit} from '@angular/core';
import {City} from '../classes/City';
import { CITIES } from '../classes/cities-mock';

@Component({
  selector: 'app-images-by-country',
  templateUrl: './images-by-country.component.html',
  styleUrls: ['./images-by-country.component.css']
})
export class ImagesByCountryComponent implements OnInit {
  isShown = false;
  toggleDisplay() {
    this.isShown = !this.isShown;
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  // Listes des pays
  city: City[];
  cities = CITIES;
  usa = CITIES.slice(0, 6);
  canada = CITIES.slice(6, 7);
  asia = CITIES.slice(7, 11);
  newZealand = CITIES.slice(11, 16);
  southAfrica = CITIES.slice(16, 17);
  spain = CITIES.slice(17, 21);

  // Ville sélectionnée : le paramètre "city" de type "City" sera représenté par "this.selectedCity"
  selectedCity: City;
  onSelect(city: City): void {
    this.selectedCity = city;
    if (this.isShown) {
      this.isShown = !this.isShown;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  // Méthode showCitySelected() qui sera appelée avec une ville en paramètre dans l'instance de image-by-city grâce à l'émetteur
  showCityObject(city: City) {
    console.log('City : ', city);
  }

  // La méthode "iLoveIt()" émet une ville via la méthode native "emit()" et sera cliquée dans le template.
  // Une fois cliquée, l'émetteur envoie '(rate)="onRate($event)"' au template du composant parent "image-by-country"
  // La méthode "onRate()" se chargera de modifier le template et d'y faire pénétrer l'appréciation
  onRate(appreciation: string) {
    appreciation = 'I loved ' + this.selectedCity.name;
    const lovedCity = document.getElementById('iLoveThatCity');
    lovedCity.innerHTML = appreciation;
    const styleElement = document.querySelector('.lovedCityHidden');
    styleElement.setAttribute('class', 'loveCity');
    console.log(styleElement);
  }
}

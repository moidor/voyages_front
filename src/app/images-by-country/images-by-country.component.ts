import {Component, OnInit} from '@angular/core';
import {City} from '../classes/City';
import { CITIES } from '../classes/cities-mock';

@Component({
  selector: 'app-images-by-country',
  templateUrl: './images-by-country.component.html',
  styleUrls: ['./images-by-country.component.css']
})
export class ImagesByCountryComponent implements OnInit {

  constructor() { }
  isShown = false;

  // Listes des pays
  city: City[];
  cities = CITIES;
  usa = CITIES.slice(0, 10);
  canada = CITIES.slice(10, 11);
  asia = CITIES.slice(11, 16);
  newZealand = CITIES.slice(16, 21);
  southAfrica = CITIES.slice(21, 22);
  spain = CITIES.slice(22, 27);

  // Ville sélectionnée : le paramètre "city" de type "City" sera représenté par "this.selectedCity"
  selectedCity: City;

  toggleDisplay() {
    this.isShown = !this.isShown;
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  onSelect(city: City): void {
    this.selectedCity = city;
    if (this.isShown) {
      this.isShown = !this.isShown;
    }
  }

  ngOnInit() {
  }

  // Méthode showCitySelected() qui sera appelée avec une ville en paramètre dans l'instance de image-by-city grâce à l'émetteur
  showCityObject(city: City) {
    console.log('City : ', city);
  }
}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {City} from '../classes/City';
import { CITIES } from '../classes/cities-mock';

@Component({
  selector: 'app-image-by-city',
  templateUrl: './image-by-city.component.html',
  styleUrls: ['./image-by-city.component.css']
})
export class ImageByCityComponent implements OnInit {
  // Les inputs permettent d'envoyer des données entre un composant parent et enfant
  @Input() cities = CITIES;
  // Cet input permettra d'afficher la ville sélectionnée dans son sélecteur intégré dans le composant parent
  @Input() city: City;

  // Envoi d'un émetteur hors du composant afin de communiquer des données de villes avec d'autres composants parents
  // tslint:disable-next-line:no-output-rename
  @Output('citySelected')
  cityEmitter = new EventEmitter<City>();

  // Emitter qui contient l'appréciation de la visite d'une ville, communication d'un enfant vers son parent
  @Output() rate = new EventEmitter<any>();

  // Cette variable sera initialisée dans la méthode ".showCountryName()"
  countryName;

  applyColor = false;
  changeBackgroundColor() {
    this.applyColor = !this.applyColor;
  }

  // Ville sélectionnée : le paramètre "city" de type "City" sera représenté par "this.selectedCity"
  // Une fois le bouton "show map" cliqué, la carte s'affiche dans le sélecteur HTML <app-city-details>
  // avec l'input suivi de la variable selectedCity [city]="selectedCity". Toggle pour afficher et masquer la carte
  selectedCity: City;
  onSelect(city: City): void {
    this.selectedCity = city;
    const cityMapDiv = document.querySelector('#cityMapDiv');
    cityMapDiv.classList.toggle('showCountryNameClass');
  }

  constructor() { }

  ngOnInit() {
  }

  cityDetails() {
    this.cityEmitter.emit(this.city);
  }

  // Renvoie la ville et son image dans la directive structurelle *ngIf
  isImageVisible() {
    return this.city && this.city.image;
  }

  // Essai d'une méthode avec ngClass pour les villes dont le nom contient "San"
  includesSan() {
    if (this.city.name.includes('San')) {
      // Renvoie la classe css 'usa'
      return 'usaStyle';
    }
  }

  // La méthode "iLoveIt()" émet une ville via la méthode native "emit()" et sera cliquée dans le template.
  // Une fois cliquée, l'émetteur envoie '(rate)="onRate($event)"' au template du composant parent "image-by-country"
  // La méthode "onRate()" se chargera de modifier le template et d'y faire pénétrer l'appréciation avec innerHTML
  iLoveIt() {
    this.rate.emit(this.city);
  }

  /* Affichage du nom du pays de la ville sélectionnée avec la méthode native ".toggle()" qui appelle la classe
  .showCountryName */
  showCountryName() {
    this.countryName = this.city.country;
    const countryNameDiv = document.querySelector('#countryNameDiv');
    countryNameDiv.innerHTML = this.countryName;
    countryNameDiv.classList.toggle('showCountryNameClass');
  }

}

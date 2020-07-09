import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {City} from '../classes/City';
import { CITIES } from '../classes/cities-mock';


@Component({
  selector: 'app-image-by-city',
  templateUrl: './image-by-city.component.html',
  styleUrls: ['./image-by-city.component.css']
})
export class ImageByCityComponent implements OnInit {
  selectedCity: City;
  /* Création d'une deuxième variable de type "City" afin de ne pas déclencher la fenêtre modale lors
  de l'ouverture de la carte */
  selectedCityModal: City;
  isMapShown = false;
  isDisplayed = false;
  @Input() cities = CITIES;
  // Cet input permettra d'afficher la ville sélectionnée dans son sélecteur intégré dans le composant enfant
  @Input() city: City;
  @Input() isShown: boolean;
  // Emitter
  @Output() closeWindowEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeWindow() {
    this.closeWindowEmitter.emit(
      this.isShown = !this.isShown
    );
  }
  // Ville sélectionnée : le paramètre "city" de type "City" sera représenté par "this.selectedCity"
  // Une fois le bouton "Afficher la carte" cliqué, la carte s'affiche dans le sélecteur HTML <app-city-details>
  // avec l'input suivi de la variable selectedCity [city]="selectedCity". Toggle pour afficher et masquer la carte
  onSelect(city: City): void {
    this.selectedCity = city;
    // isMapShown permet de changer le texte au sein du bouton d'affichage de la carte ("Afficher" ou "masquer")
    this.isMapShown = !this.isMapShown;
    // Affichage de manière dynamique de la carte lors d'un clic sur deux en corrélation avec la classe
    // "removeMap"
    const cityMapDiv = document.querySelector('#cityMapDiv');
    cityMapDiv.classList.toggle('showMap');
  }

  // Fenêtre modale
  // Ouverture de la fenêtre modale lors du clic
  openModal(city: City) {
    this.selectedCityModal = city;
    if (this.isDisplayed) {
      this.isDisplayed = !this.isDisplayed;
    }
  }
  // Fermer la fenêtre modale
  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
  }

  // When the user clicks anywhere outside of the modal, close it
/*   closeModalClickingOut(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  } */

  applyBlock() {
    if (this.city.name.includes('San')) {
      // Renvoie la classe css 'usaStyle'
      return 'usaStyle';
    }
  }

  /* Couleur de fond en fonction des pays */
  applyBackgroundColor() {
    switch (this.city.country) {
      case 'États-Unis':
        return 'usaStyle';
        break;

        case 'Canada':
          return 'canadaStyle';
          break;

          case 'Nouvelle-Zélande':
          return 'newZealandStyle';
          break;

        case 'Afrique du Sud':
          return 'southAfricaStyle';
          break;

        case 'Espagne':
          return 'spainStyle';
          break;
        // Asie
        case 'Japon':
          return 'asiaStyle';
          break;
        case 'Singapour':
          return 'asiaStyle';
          break;
        case 'Malaisie':
          return 'asiaStyle';
          break;
      default:
        break;
    }
  }
}

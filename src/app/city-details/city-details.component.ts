import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {City} from '../classes/City';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  // Cet input permettra d'afficher la ville sélectionnée dans son sélecteur intégré dans le composant parent
  @Input() city: City;

  // Emitter qui communique la carte d'une ville
  @Output() cityMap = new EventEmitter<string>();

  // Ville sélectionnée : le paramètre "city" de type "City" sera représenté par "this.selectedCity"
  selectedCity: City;
  onSelect(city: City): void {
    this.selectedCity = city;
  }

  constructor() { }

  ngOnInit() {
  }

}

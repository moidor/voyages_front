import { Component, OnInit } from '@angular/core';
import {CITIES} from '../classes/cities-mock';
import { ImagesByCountryComponent } from '../images-by-country/images-by-country.component';
import {City} from '../classes/City';
import { TimeService } from '../shared/time.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private time: TimeService) { }
  displayTimeCity: string;
  cities = CITIES.slice(4, 9);

  // Ville sélectionnée
  selectedCity: City;

  cairo = setInterval(() => {
    return this.displayTimeCity = this.time.intervalHandler('Nantes', 0);
  }, 1000);

  onSelect(city: City): void {
    this.selectedCity = city;
  }

  ngOnInit() {
  }

}

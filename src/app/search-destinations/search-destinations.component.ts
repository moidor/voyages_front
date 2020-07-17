import { Component, OnInit } from '@angular/core';
import { Destination } from '../classes/Destination';
import { DestinationService } from '../shared/destination.service';

@Component({
  selector: 'app-search-destinations',
  templateUrl: './search-destinations.component.html',
  styleUrls: ['./search-destinations.component.css']
})
export class SearchDestinationsComponent implements OnInit {
  id: number;
  title: string;
  article: string;
  year: number;
  destinations: Destination[];

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
  }

  private searchDestinations() {
    this.destinationService.getDestinationByYear(this.year)
      .subscribe(destinations => this.destinations = destinations);
  }

  private searchDestinationsByName() {
    this.destinationService.getDestinationByName(this.title)
      .subscribe(destinations => this.destinations = destinations);
  }

  private searchDestinationsByArticle() {
    this.destinationService.getDestinationByArticle(this.article)
      .subscribe(destinations => this.destinations = destinations);
  }

  onSubmit() {
    this.searchDestinations();
    this.searchDestinationsByName();
    this.searchDestinationsByArticle();
  }
}

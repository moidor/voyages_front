import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationService } from '../shared/destination.service';
import { Destination } from '../classes/Destination';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.css']
})
export class DestinationsListComponent implements OnInit {
  destinations: Observable<Destination[]>;

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.destinations = this.destinationService.getDestinationsList();
  }

}

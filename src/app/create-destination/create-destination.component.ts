import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../shared/destination.service';
import { Destination } from '../classes/Destination';

@Component({
  selector: 'app-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrls: ['./create-destination.component.css']
})
export class CreateDestinationComponent implements OnInit {

  destination: Destination = new Destination();
  submitted = false;

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
  }

  newDestination(): void {
    this.submitted = false;
    this.destination = new Destination();
  }

  save() {
    this.destinationService.createDestination(this.destination)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.destination = new Destination();
  }

  onSubmit() {
    this.save();
  }

}

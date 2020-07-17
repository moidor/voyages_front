import { Component, OnInit, Input } from '@angular/core';
import { DestinationService } from '../shared/destination.service';
import { Destination } from '../classes/Destination';
import { DestinationsListComponent } from '../destinations-list/destinations-list.component';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
  @Input() destination: Destination;
  showDeleteModal = false;
  deleted = false;

  constructor(private destinationService: DestinationService,
              private listDestination: DestinationsListComponent) { }

  ngOnInit() {
  }

  openDeleteModal() {
    this.showDeleteModal = !this.showDeleteModal;
  }

  closeModal() {
    this.showDeleteModal = !this.showDeleteModal;
  }

  /*updateDestination(id: number, value: any) {
    this.destinationService.updateDestination(this.destination.id,
      { title: this.destination.title, article: this.destination.article, image: this.destination.image })
      .subscribe(
        data => {
          console.log(data);
          this.destination = data as Destination;
        },
        error => console.log(error));
  }*/

  deleteDestination() {
    this.destinationService.deleteDestination(this.destination.id)
      .subscribe(
        data => {
          console.log(data);
          this.listDestination.reloadData();
          this.deleted = !this.deleted;
        },
        error => console.log(error));
    this.showDeleteModal = !this.showDeleteModal;
    this.deleted = !this.deleted;
  }

}

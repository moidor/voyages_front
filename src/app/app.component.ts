import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Voyages autour du monde';
  nightMode = false;

  activateNightMode() {
    this.nightMode = !this.nightMode;
    if (!this.nightMode) {
      return 'nightMode';
    }
  }
}

import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {City} from '../classes/City';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // Cet input permettra d'afficher la ville sélectionnée dans son sélecteur intégré dans le composant parent
  @Input() city: City;
  @Input() isDisplayed: boolean;
  @Output() closeModalEmitter = new EventEmitter();
  @Output() closeClickingOutEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Fermeture de la fenêtre
  closeModal() {
    this.closeModalEmitter.emit(
      this.isDisplayed = !this.isDisplayed
    );
  }

  /* Fermeture de la fenêtre modale lors d'un clic hors de celle-ci. L'émetteur est envoyé au parent
  "image-by-city" afin qu'il exécute sa méthode "toggleDisplay($event)". */
  closeModalClickingOut() {
    const modal = document.getElementById('myModal');
    this.closeClickingOutEmitter.emit(
      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
  }
}

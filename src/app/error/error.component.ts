import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public typedUrl: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.typedUrl = `localhost:4200${this.router.url}`;
    console.log(`Désolé, l'adresse "localhost:4200${this.router.url}" est invalide.`);
  }

}

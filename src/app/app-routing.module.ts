import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DestinationsListComponent} from './destinations-list/destinations-list.component';
import {CreateDestinationComponent} from './create-destination/create-destination.component';
import {SearchDestinationsComponent} from './search-destinations/search-destinations.component';
import {ImagesByCountryComponent} from './images-by-country/images-by-country.component';
import {AproposComponent} from './apropos/apropos.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ImageByCityComponent } from './image-by-city/image-by-city.component';

const routes: Routes = [
  // Intégrer le dashboard dans AppComponent comme page d'accueil
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent },
  { path: 'galeries', component: ImagesByCountryComponent },
  { path: 'destinations', component: DestinationsListComponent},
  { path: 'ajouter', component: CreateDestinationComponent},
  { path: 'rechercher', component: SearchDestinationsComponent},
  { path: 'apropos', component: AproposComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cityWindow', component: ImageByCityComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

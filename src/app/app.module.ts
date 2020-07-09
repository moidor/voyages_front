import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateDestinationComponent } from './create-destination/create-destination.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { SearchDestinationsComponent } from './search-destinations/search-destinations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImagesByCountryComponent } from './images-by-country/images-by-country.component';
import { ImageByCityComponent } from './image-by-city/image-by-city.component';
import { HeaderComponent } from './header/header.component';
import { AproposComponent } from './apropos/apropos.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { SafePipe } from './safe.pipe';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

// Services
import { DestinationService } from './shared/destination.service';
import { RestapiService } from './shared/restapi.service';

// Horaires français
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    CreateDestinationComponent,
    DestinationDetailsComponent,
    DestinationsListComponent,
    SearchDestinationsComponent,
    DashboardComponent,
    ImagesByCountryComponent,
    ImageByCityComponent,
    HeaderComponent,
    AproposComponent,
    CityDetailsComponent,
    SafePipe,
    LoginComponent,
    ErrorComponent,
    HighlightDirective,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [DestinationService,
  RestapiService,
  { provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

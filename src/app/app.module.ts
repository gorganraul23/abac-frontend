import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import {AddPlanetComponent} from './components/add-planet/add-planet.component';
import {EditPlanetComponent} from './components/edit-planet/edit-planet.component';
import {PlanetsComponent} from './components/planets/planets.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPlanetComponent,
    EditPlanetComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

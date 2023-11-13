import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetsComponent} from "./components/planets/planets.component";
import {AddPlanetComponent} from "./components/add-planet/add-planet.component";
import {EditPlanetComponent} from "./components/edit-planet/edit-planet.component";

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  },
  {
    path: 'planets',
    component: PlanetsComponent
  },
  {
    path: 'planets/add',
    component: AddPlanetComponent
  },
  {
    path: 'planets/edit/:id',
    component: EditPlanetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

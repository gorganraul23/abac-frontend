import {Component} from '@angular/core';
import {Planet, PlanetStatus} from "../../models/planet";
import {PlanetService} from "../../services/planet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent {

  newPlanet: Planet = {
    id: '',
    name: '',
    description: '',
    status: PlanetStatus.TODO,
    captain: ''
  };

  constructor(private planetService: PlanetService, private router: Router) {
  }

  addPlanet(){
    this.planetService.addPlanet(this.newPlanet)
      .subscribe({
        next: (product) => {
          this.router.navigate(['planets']);
        },
        error: (response) => {
          console.log(response)
        }
      });
  }

  isEmpty() {
    return this.newPlanet.name == '';
  }
}

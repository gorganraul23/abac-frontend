import {Component} from '@angular/core';
import {PlanetStatus, PlanetToAdd} from "../../models/planet";
import {PlanetService} from "../../services/planet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent {

  newPlanet: PlanetToAdd = {
    id: '',
    name: '',
    description: '',
    status: PlanetStatus.TODO,
    imagePath: ''
  };

  constructor(private planetService: PlanetService, private router: Router) {
  }

  addPlanet() {
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
    return this.newPlanet.name == '' || this.newPlanet.imagePath == '';
  }

  onImagePathChange(event: any) {
    const fullPath = event.target.value;
    const parts = fullPath.split("\\");
    this.newPlanet.imagePath = parts[parts.length - 1];
  }

}

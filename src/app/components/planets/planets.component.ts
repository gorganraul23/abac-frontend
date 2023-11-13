import {Component, OnInit} from '@angular/core';
import {Planet, PlanetStatus} from "../../models/planet";
import {PlanetService} from "../../services/planet.service";
import {Router} from "@angular/router";
import {ExplorerService} from "../../services/explorer.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[] = [];

  constructor(private planetService: PlanetService, private router: Router, private explorerService: ExplorerService) {
  }

  ngOnInit() {
    this.planetService.getAllPlanets()
      .subscribe({
        next: (planets) => {
          this.planets = planets;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  goToAdd() {
    this.router.navigate(['planets', 'add']);
  }

  goToEdit(id: string) {
    this.router.navigate(['planets', 'edit', id])
  }

}

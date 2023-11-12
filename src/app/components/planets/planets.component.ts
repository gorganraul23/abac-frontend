import {Component, OnInit} from '@angular/core';
import {Planet, PlanetStatus} from "../../models/planet";
import {PlanetService} from "../../services/planet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit{

  planets: Planet[] = [];

  constructor(private planetService: PlanetService, private router: Router) {
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



}

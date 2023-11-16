import {Component, OnInit} from '@angular/core';
import {Planet} from "../../models/planet";
import {PlanetService} from "../../services/planet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

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

  goToAdd() {
    this.router.navigate(['planets', 'add']);
  }

  goToEdit(id: string) {
    this.router.navigate(['planets', 'edit', id])
  }

  public getFormattedRobotList(list: string[]): string {
    const maxRobotsToShow = 3;

    if (list.length <= maxRobotsToShow) {
      return list.map(robot => robot).join(', ');
    } else {
      const firstThreeRobots = list.slice(0, maxRobotsToShow).map(robot => robot).join(', ');
      return `${firstThreeRobots}...`;
    }
  }

}

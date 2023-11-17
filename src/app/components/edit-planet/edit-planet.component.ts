import {Component, OnInit} from '@angular/core';
import {PlanetService} from "../../services/planet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Planet, PlanetStatus} from "../../models/planet";
import {ExplorerService} from "../../services/explorer.service";
import {Explorer, ExplorerType} from "../../models/explorer";

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {

  updatePlanetRequest: Planet = {
    id: '',
    name: '',
    description: '',
    status: PlanetStatus.TODO,
    imagePath: '',
    captain: '',
    robots: []
  };

  captains: Explorer[] = [];
  robots: Explorer[] = [];
  selectedRobots: string[] = [];
  selectedRobotId: string = '';
  initialStatus: PlanetStatus = PlanetStatus.TODO;
  initialCaptain: string = '';

  constructor(private route: ActivatedRoute, private planetService: PlanetService, private router: Router,
              private explorerService: ExplorerService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.planetService.getPlanetById(id)
            .subscribe({
              next: (response) => {
                this.updatePlanetRequest = response;
                this.initialStatus = response.status;
                this.initialCaptain = response.captain;
              },
              error: (response) => {
                console.log(response);
              }
            })
        }
        this.explorerService.getExplorers()
          .subscribe({
            next: (response) => {
              this.captains = response.filter(explorer => explorer.type == ExplorerType.Captain);
              this.robots = response.filter(explorer => explorer.type == ExplorerType.Robot);
            },
            error: (response) => {
              console.log(response);
            }
          })
      }
    });
  }


  updatePlanet() {
    this.updatePlanetRequest.robots = this.selectedRobots;
    this.planetService.updatePlanet(this.updatePlanetRequest.id, this.updatePlanetRequest)
      .subscribe({
        next: (response) => {
          this.router.navigate(['planets']);
        },
        error: (response) => {
          console.log(response)
        }
      })
  }

  onStatusChange(event: any) {
    if (this.initialStatus == PlanetStatus.TODO || this.initialStatus == PlanetStatus.EN_ROUTE)
      if (event.target.value == PlanetStatus.TODO || event.target.value == PlanetStatus.EN_ROUTE) {
        this.updatePlanetRequest.description = '';
        this.updatePlanetRequest.captain = '';
        this.selectedRobots = [];
        this.selectedRobotId = '';
      }
    this.updatePlanetRequest.status = event.target.value;

    switch (event.target.value) {
      case "0":
        this.updatePlanetRequest.status = PlanetStatus.TODO;
        break;
      case "1":
        this.updatePlanetRequest.status = PlanetStatus.EN_ROUTE;
        break;
      case "2":
        this.updatePlanetRequest.status = PlanetStatus.OK;
        break;
      case "3":
        this.updatePlanetRequest.status = PlanetStatus.NOT_OK;
        break;
      default:
        break;
    }

    this.isButtonDisabled();
  }

  onCaptainChange(event: any) {
    if (this.initialCaptain != event.target.value)
      this.updatePlanetRequest.captain = event.target.value;
    this.isButtonDisabled();
  }

  onRobotsChange(event: any) {
    this.selectedRobotId = event.target.value;
  }

  addSelectedRobot() {
    this.selectedRobots.push(this.selectedRobotId);
  }

  isRobotDisabled(id: string) {
    return this.selectedRobots.includes(id) || this.updatePlanetRequest.robots.includes(id);
  }

  isButtonDisabled(): boolean {
    if (this.initialStatus == PlanetStatus.OK || this.initialStatus == PlanetStatus.NOT_OK)
      return this.updatePlanetRequest.description == '';

    if ((this.updatePlanetRequest.status !== PlanetStatus.TODO && this.updatePlanetRequest.status !== PlanetStatus.EN_ROUTE)
      && (this.updatePlanetRequest.description == ''
        || this.selectedRobots.length == 0
        || (this.updatePlanetRequest.captain == null || this.updatePlanetRequest.captain == '')))
      return true;
    return false;
  }

  isAlreadyVisited() {
    return this.initialStatus == PlanetStatus.OK || this.initialStatus == PlanetStatus.NOT_OK;
  }

  isDisabledInput() {
    return this.updatePlanetRequest.status == PlanetStatus.TODO || this.updatePlanetRequest.status == PlanetStatus.EN_ROUTE;
  }

}

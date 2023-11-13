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
    captain: '',
  };

  captains: Explorer[] = [];
  robots: Explorer[] = []

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
                console.log(this.updatePlanetRequest);
              }
            })
        }
        this.explorerService.getExplorersByType(ExplorerType.Captain)
          .subscribe({
            next: (response) => {
              console.log(response);
              this.captains = response;
            },
            error: (response) => {
              console.log(response);
            }
          })

      }
    });
  }


  updatePlanet() {
    console.log(this.updatePlanetRequest);
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

  isDisabledInput() {
    return this.updatePlanetRequest.status == PlanetStatus.TODO || this.updatePlanetRequest.status == PlanetStatus.EN_ROUTE;
  }

  onStatusChange(event: any) {
    this.updatePlanetRequest.status = event.target.value;
    this.isFormInvalid();
  }

  onCaptainChange(event: any) {
    this.updatePlanetRequest.captain = event.target.value;
  }

  isFormInvalid() {
    const statusOKorNotOK = this.updatePlanetRequest.status === PlanetStatus.OK || this.updatePlanetRequest.status === PlanetStatus.NOT_OK;
    const isDescriptionEmpty = this.updatePlanetRequest.description === '';

    return statusOKorNotOK && isDescriptionEmpty;
  }
}

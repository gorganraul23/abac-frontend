import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Planet, PlanetToAdd} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  baseApiUrl: string = "https://localhost:7266";

  constructor(private http: HttpClient) {
  }

  getAllPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.baseApiUrl + "/api/planets");
  }

  addPlanet(newPlanet: PlanetToAdd): Observable<PlanetToAdd> {
    newPlanet.id = '00000000-0000-0000-0000-000000000000';  //empty guid
    return this.http.post<PlanetToAdd>(this.baseApiUrl + "/api/planets", newPlanet);
  }

  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<Planet>(this.baseApiUrl + "/api/planets/" + id);
  }

  updatePlanet(id: string, updatePlanetRequest: Planet): Observable<Planet> {
    return this.http.put<Planet>(this.baseApiUrl + "/api/planets/" + id, updatePlanetRequest);
  }

  deletePlanet(id: string): Observable<Planet> {
    return this.http.delete<Planet>(this.baseApiUrl + "/api/planets/" + id);
  }

}


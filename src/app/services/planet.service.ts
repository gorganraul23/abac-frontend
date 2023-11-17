import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Planet, PlanetToAdd} from '../models/planet';
import {environments} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  baseApiUrl = environments.apiUrl;
  planets = environments.apiEndpoints.planets;

  constructor(private http: HttpClient) {
  }

  getAllPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.baseApiUrl + this.planets);
  }

  addPlanet(newPlanet: PlanetToAdd): Observable<PlanetToAdd> {
    return this.http.post<PlanetToAdd>(this.baseApiUrl + this.planets, newPlanet);
  }

  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<Planet>(this.baseApiUrl + this.planets + '/' + id);
  }

  updatePlanet(id: string, updatePlanetRequest: Planet): Observable<Planet> {
    return this.http.put<Planet>(this.baseApiUrl + this.planets + '/' + id, updatePlanetRequest);
  }

}

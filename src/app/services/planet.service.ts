import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Planet} from '../models/planet';

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

  addPlanet(newProduct: Planet): Observable<Planet> {
    newProduct.id = '00000000-0000-0000-0000-000000000000';  //empty guid
    return this.http.post<Planet>(this.baseApiUrl + "/api/planets", newProduct);
  }

  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<Planet>(this.baseApiUrl + "/api/planets/" + id);
  }

  updatePlanet(id: string, updateProductRequest: Planet): Observable<Planet> {
    return this.http.put<Planet>(this.baseApiUrl + "/api/planets/" + id, updateProductRequest);
  }

  deletePlanet(id: string): Observable<Planet> {
    return this.http.delete<Planet>(this.baseApiUrl + "/api/planets/" + id);
  }

}


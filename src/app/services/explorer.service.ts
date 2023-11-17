import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Explorer} from "../models/explorer";
import {environments} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  baseApiUrl = environments.apiUrl;
  explorer = environments.apiEndpoints.explorer;

  constructor(private http: HttpClient) {
  }

  getExplorers(): Observable<Explorer[]> {
    return this.http.get<Explorer[]>(this.baseApiUrl + this.explorer);
  }

}

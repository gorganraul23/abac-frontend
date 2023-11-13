import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Explorer, ExplorerType} from "../models/explorer";

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  baseApiUrl: string = "https://localhost:7266";

  constructor(private http: HttpClient) {
  }

  getExplorersByType(type: ExplorerType): Observable<Explorer[]> {
    return this.http.get<Explorer[]>(this.baseApiUrl + "/api/explorer/type/" + type);
  }

  getExplorersById(id: string): Observable<Explorer> {
    return this.http.get<Explorer>(this.baseApiUrl + "/api/explorer/" + id);
  }
}

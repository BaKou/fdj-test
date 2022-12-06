import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeagueModel } from '../models/league.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<LeagueModel[]> {
    return this.http.get<LeagueModel[]>(`${environment.apiUrl}/leagues`);
  }
}

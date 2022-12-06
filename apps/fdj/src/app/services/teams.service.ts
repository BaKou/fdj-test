import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamModel } from '../models/team.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TeamModel[]> {
    return this.http.get<TeamModel[]>(`${environment.apiUrl}/teams`);
  }

  getTeam(idTeam: string): Observable<TeamModel> {
    return this.http.get<TeamModel>(`${environment.apiUrl}/teams/${idTeam}`);
  }

  getTeamByLeague(idLeague: string): Observable<TeamModel[]>{
    return this.http.get<TeamModel[]>(`${environment.apiUrl}/teams/league/${idLeague}`);
  }
}

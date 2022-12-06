import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerModel } from '../models/player.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(`${environment.apiUrl}/players`);
  }

  getPlayersByTeam(idTeam: string): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(`${environment.apiUrl}/players/team/${idTeam}`);
  }
}

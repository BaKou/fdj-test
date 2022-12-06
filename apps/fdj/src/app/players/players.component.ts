import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { PlayerModel } from './../models/player.model';
import { PlayersService } from '../services/players.service';
import { TeamsService } from '../services/teams.service';
import { TeamModel } from './../models/team.model';

@Component({
  selector: 'fdj-test-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit{

  teamId!: string;
  players$!: Observable<PlayerModel[]>;
  team$!: Observable<TeamModel>;
  error = false;

  constructor(private teamsService:TeamsService, private playersService:PlayersService, private route: ActivatedRoute){}

  ngOnInit(){
    this.teamId = this.route.snapshot.params['teamId']
    this.players$ = this.playersService.getPlayersByTeam(this.teamId).pipe(
      catchError(err => {
        this.error = true;
        return throwError(() => err);
      })
    );
    this.team$ = this.teamsService.getTeam(this.teamId);
  }
}

import { Component, OnInit } from '@angular/core';
import { map, Observable, of, startWith } from 'rxjs';
import { LeagueModel } from '../models/league.model';
import { TeamsService } from '../services/teams.service';
import { LeaguesService } from '../services/leagues.service';
import { TeamModel } from '../models/team.model';
import { mockTeam } from '../mock/team.mock';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fdj-test-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})

export class TeamsComponent implements OnInit {

  leagues: LeagueModel[] = [];
  currentLeague: string| null = null;
  teams$!: Observable<TeamModel[]>;
  leagueControl = new FormControl<string | LeagueModel>('');
  filteredLeagues!: Observable<LeagueModel[]>;

  constructor(private teamsService: TeamsService, private leaguesService: LeaguesService){}

  ngOnInit(){
    this.leaguesService.getAll().subscribe(leagues => {
      leagues.shift();
      this.leagues = leagues
    });
    this.filteredLeagues = this.leagueControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(typeof value === 'string' ? value : value!.name)),
    );
  }

  getAllTeams(idLeague: number) {
    //this.teams$ = this.teamsService.getAll(idLeague);
    this.teams$ = of([mockTeam,mockTeam,mockTeam]);
  }

  actualizeTeam(league: LeagueModel):void {
    this.currentLeague = league._id;
    console.log(league);
    this.teams$ = this.teamsService.getTeamByLeague(league._id);
  }

  getOptionName(league: LeagueModel): string  {
    return league.name;
  }

  private _filter(value: string): LeagueModel[] {
    const filterValue = value.toLowerCase();
    return this.leagues.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}

import { Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/teams', pathMatch:'full' },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  { path: 'teams/:teamId', redirectTo: ':teamId/players', pathMatch:'full' },
  { path: 'teams/:teamId/players', component: PlayersComponent },
];

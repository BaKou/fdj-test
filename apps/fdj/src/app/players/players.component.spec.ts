import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';
import { PlayersService } from '../services/players.service';
import { of } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { mockPlayer } from '../mock/player.mock';
import { TeamsService } from '../services/teams.service';
import { mockTeam } from '../mock/team.mock';
import { DatePipe } from '../pipes/date.pipe';
import { By } from '@angular/platform-browser';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  const teamsServiceMock = {
    getTeamByLeague: jest.fn(),
    getTeam: jest.fn().mockReturnValue(of(mockTeam))
  };
  const playersServiceMock = {
    getPlayersByTeam: jest.fn().mockReturnValue(of([mockPlayer,mockPlayer]))
  }
  const activatedRouteStub = {
    snapshot: {params: {teamId: '123'}}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersComponent, DatePipe],
      imports:[RouterModule],
      providers:[
        {
          provide: TeamsService,
          useValue: teamsServiceMock
        },
        {
          provide: PlayersService,
          useValue: playersServiceMock
        },
        {
          provide:ActivatedRoute,
          useValue: activatedRouteStub
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get player and show them', () => {
    const spyPlayer  = jest.spyOn(playersServiceMock, 'getPlayersByTeam');
    component.ngOnInit();
    expect(spyPlayer).toBeCalledWith('123');
    const elmnt = fixture.debugElement.query(By.css('.player-name'));
    expect(elmnt.nativeElement.textContent).toBe('killian mbappe')
  });
});

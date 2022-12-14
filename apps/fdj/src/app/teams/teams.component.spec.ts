import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';
import { TeamsService } from '../services/teams.service';
import { LeaguesService } from '../services/leagues.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { mockTeam } from '../mock/team.mock';
import { of } from 'rxjs';
import { mockLeague } from '../mock/league.mock';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import {MatAutocompleteHarness} from '@angular/material/autocomplete/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;
  let loader: HarnessLoader;
  const teamsServiceMock = {
    getTeamByLeague: jest.fn(),
  };
  const leaguesServiceMock = {
    getAll: jest.fn().mockReturnValue(of([mockLeague, mockLeague])),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        RouterModule.forRoot([]),
      ],
      declarations: [TeamsComponent],
      providers:[
        {
          provide: TeamsService,
          useValue: teamsServiceMock
        },
        {
          provide: LeaguesService,
          useValue: leaguesServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get league', () => {
    const spyLeague = jest.spyOn(leaguesServiceMock, 'getAll');
    component.ngOnInit();
    expect(spyLeague).toHaveBeenCalled();
  });

  it('should get team when league is selected', async () => {
    const spyTeam = jest.spyOn(teamsServiceMock, 'getTeamByLeague').mockReturnValue(of([mockTeam]))
    const spyActualize  = jest.spyOn(component, 'actualizeTeam');

    const input = await loader.getHarness(MatAutocompleteHarness.with({selector: '#plain'}));
    await input.focus();
    await input.blur();
    await input.enterText('English');
    const options = await input.getOptions();
    expect(options.length).toBe(1);
    expect(await options[0].getText()).toBe('English Premier League');
    await options[0].click();

    fixture.detectChanges();
    expect(spyActualize).toBeCalled();
    expect(spyTeam).toHaveBeenCalledWith('12345');
  });
});



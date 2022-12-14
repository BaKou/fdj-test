import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LeaguesService } from './leagues.service';

describe('LeaguesService', () => {
  let service: LeaguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule ],
    });
    service = TestBed.inject(LeaguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

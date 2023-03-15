import { TestBed } from '@angular/core/testing';

import { SportsDbService } from './sports-db.service';

describe('SportsDbService', () => {
  let service: SportsDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

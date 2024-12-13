import { TestBed } from '@angular/core/testing';

import { cricketService } from './cricket.service';

describe('cricketService', () => {
  let service: cricketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cricketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LaptopContentService } from './laptop-content.service';

describe('LaptopContentService', () => {
  let service: LaptopContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FeralApiService } from './feral-api.service';

describe('FeralApiService', () => {
  let service: FeralApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeralApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

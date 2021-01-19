import { TestBed, inject } from '@angular/core/testing';

import { InterestRatesService } from './interest-rates.service';

describe('InterestRatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterestRatesService]
    });
  });

  it('should be created', inject([InterestRatesService], (service: InterestRatesService) => {
    expect(service).toBeTruthy();
  }));
});

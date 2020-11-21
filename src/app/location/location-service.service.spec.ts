/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocationServiceService } from './location-service.service';

describe('Service: LocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationServiceService]
    });
  });

  it('should ...', inject([LocationServiceService], (service: LocationServiceService) => {
    expect(service).toBeTruthy();
  }));
});

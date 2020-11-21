/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavorService } from './favor.service';

describe('Service: Favor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavorService]
    });
  });

  it('should ...', inject([FavorService], (service: FavorService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { MethodInvocationService } from './method-invocation.service';

describe('MethodInvocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MethodInvocationService = TestBed.get(MethodInvocationService);
    expect(service).toBeTruthy();
  });
});

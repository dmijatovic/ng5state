import { TestBed, inject } from '@angular/core/testing';

import { ThreeDataService } from './three.svc';

describe('Three.SvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreeDataService]
    });
  });

  it('should be created', inject([ThreeDataService], (service: ThreeDataService) => {
    expect(service).toBeTruthy();
  }));
});

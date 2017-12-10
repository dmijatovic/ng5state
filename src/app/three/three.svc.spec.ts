import { TestBed, inject } from '@angular/core/testing';

import { Three.SvcService } from './three.svc.service';

describe('Three.SvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Three.SvcService]
    });
  });

  it('should be created', inject([Three.SvcService], (service: Three.SvcService) => {
    expect(service).toBeTruthy();
  }));
});

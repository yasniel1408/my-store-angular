import { TestBed } from '@angular/core/testing';

import { CustomePreloadService } from './custome-preload.service';

describe('CustomePreloadService', () => {
  let service: CustomePreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomePreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

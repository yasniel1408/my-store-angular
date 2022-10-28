import { TestBed } from '@angular/core/testing';

import { UserProfileProviderService } from './user-profile-provider.service';

describe('UserProfileProviderService', () => {
  let service: UserProfileProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

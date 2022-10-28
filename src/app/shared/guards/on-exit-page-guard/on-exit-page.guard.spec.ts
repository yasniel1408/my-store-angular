import { TestBed } from '@angular/core/testing';

import { OnExitPageGuard } from './on-exit-page.guard';

describe('OnExitPageGuard', () => {
  let guard: OnExitPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnExitPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

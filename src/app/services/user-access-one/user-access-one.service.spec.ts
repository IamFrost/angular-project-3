import { TestBed } from '@angular/core/testing';

import { UserAccessOneService } from './user-access-one.service';

describe('UserAccessOneService', () => {
  let service: UserAccessOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAccessOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

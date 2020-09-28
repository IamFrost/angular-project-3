import { TestBed } from '@angular/core/testing';

import { LoginMessageOneService } from './login-message-one.service';

describe('LoginMessageOneService', () => {
  let service: LoginMessageOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginMessageOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

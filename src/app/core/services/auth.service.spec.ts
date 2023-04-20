import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let httpMock: HttpTestingController;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a POST request', () => {
    const params = {
      username: 'username',
      password: 'password',
    };

    const response = {
      access_token: 'access_token',
      message: 'message',
    };

    service.login(params.username, params.password).subscribe((data) => {
      expect(data).toEqual(response);
    });

    const req = httpMock.expectOne('auth/login');
    expect(req.request.method).toEqual('POST');

    req.flush(response);
  });
});

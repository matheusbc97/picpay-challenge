import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request', () => {
    const httpClient = TestBed.inject(HttpClient);

    const params = {
      username: 'username',
      password: 'password',
    };

    const response = {
      access_token: 'access_token',
      message: 'message',
    };

    spyOn(httpClient, 'post').and.returnValue(of(response));

    service.login(params.username, params.password).subscribe((data) => {
      expect(data).toEqual(response);
    });

    expect(httpClient.post).toHaveBeenCalledWith('auth/login', params);
  });
});

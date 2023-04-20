import { TestBed } from '@angular/core/testing';

import { AuthUserService } from './auth-user.service';
import { Router } from '@angular/router';

describe('AuthUserService', () => {
  let service: AuthUserService;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: mockRouter }],
    });
    service = TestBed.inject(AuthUserService);

    const store = new Map<string, string>();

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return store.get(key) || null;
    });
    spyOn(localStorage, 'removeItem').and.callFake((key: string) => {
      store.delete(key);
    });
    spyOn(localStorage, 'setItem').and.callFake(
      (key: string, value: string) => {
        store.set(key, value);
      }
    );
    spyOn(localStorage, 'clear').and.callFake(() => {
      store.clear();
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the username', () => {
    const username = 'username';
    service.setAuthenticatedUser(username, 'token');
    expect(service.getUserName()).toEqual(username);
  });

  it('should get the token', () => {
    const token = 'token';
    service.setAuthenticatedUser('username', token);
    expect(service.getToken()).toEqual(token);
  });

  it('Should reset the username and token', () => {
    const username = 'username';
    const token = 'token';

    service.setAuthenticatedUser(username, token);

    expect(service.getToken()).toEqual(token);
    expect(service.getUserName()).toEqual(username);

    service.logOut();

    expect(service.getToken()).toBeNull();
    expect(service.getUserName()).toBeNull();
  });

  it('should call navigate to auth/login', () => {
    service.setAuthenticatedUser('username', 'token');

    service.logOut();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});

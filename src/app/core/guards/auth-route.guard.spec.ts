import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';
import { AuthRouteGuard } from './auth-route.guard';

describe('AuthRouteGuard', () => {
  let router: Router;
  let authUserService: AuthUserService;

  beforeEach(() => {
    router = jasmine.createSpyObj('router', ['navigate']);
    authUserService = jasmine.createSpyObj('authUserService', [
      'getUserName',
      'loadUserFromLocalStorage',
    ]);
  });

  it('should be created', () => {
    const guard = new AuthRouteGuard(router, authUserService);
    expect(guard).toBeTruthy();
  });

  it('should return true if user is not logged in', () => {
    const guard = new AuthRouteGuard(router, authUserService);
    const isUserLoggedIn = guard.canActivate();

    expect(isUserLoggedIn).toBeTruthy();
  });

  it('should return false if user is logged in', () => {
    const guard = new AuthRouteGuard(router, authUserService);
    (authUserService.getUserName as jasmine.Spy).and.returnValue('User');
    (authUserService.loadUserFromLocalStorage as jasmine.Spy).and.returnValue(
      false
    );

    const isUserLoggedIn = guard.canActivate();

    expect(isUserLoggedIn).toBeFalsy();
  });

  it('should redirect user to main if user is logged in', () => {
    const guard = new AuthRouteGuard(router, authUserService);
    (authUserService.getUserName as jasmine.Spy).and.returnValue('User');
    (authUserService.loadUserFromLocalStorage as jasmine.Spy).and.returnValue(
      false
    );

    guard.canActivate();

    expect(router.navigate).toHaveBeenCalledWith(['/main']);
  });
});

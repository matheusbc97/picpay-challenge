import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/core/services/auth.service';
import { of, throwError } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-login-form',
  template: '',
})
class MockLoginFormComponent {}

class MockAuthService {
  login(username: string, password: string) {
    return {
      subscribe: () => {
        return {
          add: () => {},
        };
      },
    };
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, MockLoginFormComponent],
      imports: [MatSnackBarModule, SharedModule, BrowserAnimationsModule],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService,
        },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.login method', () => {
    const spy = spyOn(authService, 'login').and.returnValue(
      of({
        access_token: 'test',
        message: 'test',
      })
    );
    component.onSubmit({
      password: 'test',
      username: 'test',
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should have a picpay logo', () => {
    const logo = fixture.nativeElement.querySelector('img[alt="Pic Pay logo"]');
    expect(logo).toBeTruthy();
  });

  it('should set isLoading to true when login is called', () => {
    component.onSubmit({
      password: 'test',
      username: 'test',
    });
    expect(component.isLoading).toBeTrue();
  });

  it('should set isLoading to false after authService.login method is resolved (1)', () => {
    spyOn(authService, 'login').and.returnValue(
      of({
        access_token: 'test',
        message: 'test',
      })
    );

    component.onSubmit({
      password: 'test',
      username: 'test',
    });
    expect(component.isLoading).toBeFalse();
  });

  it('should set isLoading to false after authService.login method is rejected (2)', () => {
    spyOn(authService, 'login').and.returnValue(
      throwError(() => new Error('test'))
    );

    component.onSubmit({
      password: 'test',
      username: 'test',
    });

    expect(component.isLoading).toBeFalse();
  });

  it('should call navigate to main', () => {
    spyOn(authService, 'login').and.returnValue(
      of({
        access_token: 'test',
        message: 'test',
      })
    );

    component.onSubmit({
      password: 'test',
      username: 'test',
    });

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/main']);
  });
});

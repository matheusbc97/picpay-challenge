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
import { of } from 'rxjs';

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MatSnackBarModule, SharedModule, BrowserAnimationsModule],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService,
        },
      ],
    }).compileComponents();

    authService = TestBed.inject(AuthService);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a formGroup', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('should make the username control required', () => {
    const control = component.loginForm.controls.username;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    const control = component.loginForm.controls.password;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should call onSubmit method', () => {
    const spy = spyOn(component, 'onSubmit');
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    submitButton.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call authService.login method', () => {
    const spy = spyOn(authService, 'login').and.returnValue(
      of({
        access_token: 'test',
        message: 'test',
      })
    );
    component.onSubmit();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should have a form', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should have a username field', () => {
    const username = fixture.nativeElement.querySelector(
      'input[name="username"]'
    );
    expect(username).toBeTruthy();
  });

  it('should have a password field', () => {
    const password = fixture.nativeElement.querySelector(
      'input[name="password"]'
    );
    expect(password).toBeTruthy();
  });

  it('should have a submit button', () => {
    const submit = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submit).toBeTruthy();
  });

  it('should have a picpay logo', () => {
    const logo = fixture.nativeElement.querySelector('img[alt="Pic Pay logo"]');
    expect(logo).toBeTruthy();
  });

  it('should submit a valid form', () => {
    const form = fixture.nativeElement.querySelector('form');
    const username = fixture.nativeElement.querySelector(
      'input[name="username"]'
    );
    const password = fixture.nativeElement.querySelector(
      'input[name="password"]'
    );

    username.value = 'test';
    password.value = 'test';

    username.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));

    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should submit a invalid form', () => {
    //jasmine.createSpyObj(['getCustomer'])

    const form = fixture.nativeElement.querySelector('form');

    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('should set isLoading to true when login is called', () => {
    component.onSubmit();
    expect(component.isLoading).toBeTrue();
  });

  it('should set isLoading to false after authService.login method is resolved (1)', () => {
    spyOn(authService, 'login').and.returnValue(
      of({
        access_token: 'test',
        message: 'test',
      })
    );

    component.onSubmit();
    expect(component.isLoading).toBeFalse();
  });

  it('should set isLoading to false after authService.login method is rejected (2)', fakeAsync(() => {
    spyOn(authService, 'login').and.returnValue(
      of({
        access_token: 'test',
        message: 'test',
      })
    );
    component.onSubmit();
    tick();
    expect(component.isLoading).toBeFalse();
  }));
});

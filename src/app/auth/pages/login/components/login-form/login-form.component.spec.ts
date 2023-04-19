import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [SharedModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
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

  it('should be valid when form is filled', () => {
    component.loginForm.controls.username.setValue('john');
    component.loginForm.controls.password.setValue('123456');

    expect(component.loginForm.valid).toBeTrue();
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

    expect(component.loginForm.valid).toBeTrue();
  });

  it('should submit a invalid form', () => {
    const form = fixture.nativeElement.querySelector('form');

    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('should emit validSubmit when the form is valid and submitted', () => {
    spyOn(component.validSubmit, 'emit');

    const form = fixture.nativeElement.querySelector('form');
    const username = fixture.nativeElement.querySelector(
      'input[name="username"]'
    );
    const password = fixture.nativeElement.querySelector(
      'input[name="password"]'
    );

    const fakeUserName = 'picpay-test';
    const fakePassword = '123456';

    username.value = fakeUserName;
    password.value = fakePassword;

    username.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));

    //form.dispatchEvent(new Event('submit'));
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    submitButton.click();

    fixture.detectChanges();

    expect(component.validSubmit.emit).toHaveBeenCalledWith({
      username: fakeUserName,
      password: fakePassword,
    });
  });
});

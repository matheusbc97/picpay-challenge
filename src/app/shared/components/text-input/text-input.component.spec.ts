import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInputComponent } from './text-input.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatFormField } from '@angular/material/form-field';
import { InputErrorMessageEnum } from 'src/app/core/enums/input_error_messages.enum';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextInputComponent],
      imports: [
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct label', () => {
    component.label = 'test label';
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('label');
    expect(label.textContent).toBe('test label');
  });

  it('should have the correct input type', () => {
    component.type = 'email';
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('type')).toBe('email');
  });

  it('should have the correct input placeholder', () => {
    component.placeholder = 'test placeholder';
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('placeholder')).toBe('test placeholder');
  });

  it('should have the correct input autocomplete', () => {
    component.autocomplete = 'on';
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('autocomplete')).toBe('on');
  });

  it('should have the correct initial value', () => {
    const initialValue = 'test value';
    component.control = new FormControl(initialValue);
    fixture.detectChanges();

    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe(initialValue);
  });

  it('should have the correct width', () => {
    component.width = '100px';
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.directive(MatFormField));

    expect(input.styles['width']).toContain('100px');
  });

  it('should show the correct error message', () => {
    component.control = new FormControl('', [Validators.required]);
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector('mat-error');
    expect(errorMessage.textContent).toBe(InputErrorMessageEnum.REQUIRED);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyValueInputComponent } from './currency-value-input.component';
import { MatInputModule } from '@angular/material/input';
import { IMaskModule } from 'angular-imask';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CurrencyValueInputComponent', () => {
  let component: CurrencyValueInputComponent;
  let fixture: ComponentFixture<CurrencyValueInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        IMaskModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [CurrencyValueInputComponent],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyValueInputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

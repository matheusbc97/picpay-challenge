import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyValueInputComponent } from './currency-value-input.component';

describe('CurrencyValueInputComponent', () => {
  let component: CurrencyValueInputComponent;
  let fixture: ComponentFixture<CurrencyValueInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyValueInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyValueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndicatorComponent } from './loading-indicator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('LoadingIndicatorComponent', () => {
  let component: LoadingIndicatorComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingIndicatorComponent],
      imports: [MatProgressSpinnerModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

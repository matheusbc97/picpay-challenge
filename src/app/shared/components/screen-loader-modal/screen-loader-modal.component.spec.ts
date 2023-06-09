import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLoaderModalComponent } from './screen-loader-modal.component';
import { Component } from '@angular/core';

@Component({
  template: '',
  selector: 'app-loading-indicator',
})
class MockAppLoadingComponent {}

describe('ScreenLoaderModalComponent', () => {
  let component: ScreenLoaderModalComponent;
  let fixture: ComponentFixture<ScreenLoaderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenLoaderModalComponent, MockAppLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenLoaderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

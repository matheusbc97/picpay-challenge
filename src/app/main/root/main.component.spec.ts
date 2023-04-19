import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  template: '',
  selector: 'app-header',
})
class MockHeaderComponent {}

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent, MockHeaderComponent],
      imports: [RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

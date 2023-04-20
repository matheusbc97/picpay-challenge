import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconButtonComponent } from './icon-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconButtonComponent],
      imports: [MatIconModule, MatTooltipModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit buttonClick event on click', () => {
    spyOn(component.buttonClick, 'emit');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

  it('should set the button area label', () => {
    const buttonAreaLabel = 'Edit';
    component.buttonAreaLabel = buttonAreaLabel;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.getAttribute('aria-label')).toBe(
      buttonAreaLabel
    );
  });

  it('should set the button area pressed state', () => {
    component.buttonAreaPressed = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.getAttribute('aria-pressed')).toBe('true');
  });
});

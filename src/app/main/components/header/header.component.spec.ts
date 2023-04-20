import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AuthUserService } from 'src/app/core/services/auth-user.service';
import { MatIconModule } from '@angular/material/icon';

class MockAuthUserService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logOut() {}
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockAuthUserService: MockAuthUserService;

  beforeEach(async () => {
    mockAuthUserService = jasmine.createSpyObj(['logOut']);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatIconModule],
      providers: [
        {
          provide: AuthUserService,
          useValue: mockAuthUserService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout', () => {
    component.logout();
    expect(mockAuthUserService.logOut).toHaveBeenCalled();
  });
});

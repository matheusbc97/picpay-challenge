import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('ToastService', () => {
  const matSnackBarMock = {
    open: jasmine.createSpy('open'),
    dismiss: jasmine.createSpy('dismiss'),
  };

  let service: ToastService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useValue: matSnackBarMock,
        },
      ],
    });
    service = TestBed.inject(ToastService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call snackBar.open', () => {
    service.open('message');
    expect(snackBar.open).toHaveBeenCalledTimes(1);
  });

  it('should call snackBar.dismiss', fakeAsync(() => {
    service.open('message');
    tick(4000);
    expect(snackBar.dismiss).toHaveBeenCalledTimes(1);
  }));
});

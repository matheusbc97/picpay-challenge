import { TestBed } from '@angular/core/testing';

import { ScreenLoaderService } from './screen-loader.service';
import { MatDialog } from '@angular/material/dialog';

describe('ScreenLoaderService', () => {
  let service: ScreenLoaderService;

  const closeMock = jasmine.createSpy('close');

  const mockDialog = {
    open: jasmine.createSpy('open').and.returnValue({
      close: closeMock,
    }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MatDialog, useValue: mockDialog }],
    });
    service = TestBed.inject(ScreenLoaderService);

    closeMock.calls.reset();
    mockDialog.open.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open the modal', () => {
    service.open();

    expect(mockDialog.open).toHaveBeenCalledTimes(1);
  });

  it('should close the modal', () => {
    service.open();
    service.close();
    expect(closeMock).toHaveBeenCalledTimes(1);
  });
});

import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ScreenLoaderModalComponent } from 'src/app/shared/components/screen-loader-modal/screen-loader-modal.component';

@Injectable({
  providedIn: 'platform',
})
export class ScreenLoaderService {
  constructor(private dialog: MatDialog) {}

  private modalRef: MatDialogRef<ScreenLoaderModalComponent, any> | null = null;

  open() {
    this.modalRef = this.dialog.open(ScreenLoaderModalComponent, {
      disableClose: true,
    });
  }

  close() {
    this.modalRef?.close();
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _snackBar: MatSnackBar) {}

  open(text: string) {
    this._snackBar.open(text, 'Fechar', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}

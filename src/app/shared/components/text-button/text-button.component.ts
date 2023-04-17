import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
})
export class TextButtonComponent {
  @Output() public buttonClick: EventEmitter<MouseEvent> = new EventEmitter();

  public onClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}

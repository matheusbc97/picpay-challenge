import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() public buttonClick: EventEmitter<MouseEvent> = new EventEmitter();

  @Input() type = 'button';

  public onClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}

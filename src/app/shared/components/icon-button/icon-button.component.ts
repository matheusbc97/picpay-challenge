import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() tooltip = '';

  @Input() iconName = '';

  @Input() buttonAreaLabel = '';

  @Input() buttonAreaPressed: boolean | undefined;

  @Output() public buttonClick: EventEmitter<MouseEvent> = new EventEmitter();

  public onClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() control: any;

  @Input() label = '';

  @Input() type = 'text';

  @Input() placeholder = '';

  @Input() autocomplete = 'off';

  @Input() name = '';

  @Input() width = '100%';

  get errorMessage() {
    const errors = this.control.errors as any;

    if (!errors) {
      return '';
    }

    if (errors.required) {
      return 'Campo obrigatório';
    }

    return '';
  }
}

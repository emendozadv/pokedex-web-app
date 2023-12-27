import { Component, Input, signal } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
export type RadioOption = {
  id: string;
  value: string;
  label: string;
};
@Component({
  selector: 'app-radio-modal',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './radio-modal.component.html',
  styleUrl: './radio-modal.component.css',
})
export class RadioModalComponent {
  readonly open = signal(false);

  @Input({
    required: true,
  })
  name!: string;

  @Input({
    required: true,
  })
  options: RadioOption[] = [];

  @Input({
    required: true,
  })
  form!: FormGroup;

  onClick() {
    console.log('checadoS');
    this.open.update((oldValue) => !oldValue);
  }

  onClickCard(event: MouseEvent) {
    event.stopPropagation();
  }
}

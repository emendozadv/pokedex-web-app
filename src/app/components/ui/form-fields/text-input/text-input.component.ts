import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IconComponent, IconName } from '../../icon/icon.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, IconComponent],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent {
  @Input({
    required: true,
  })
  form!: FormGroup;

  @Input({
    required: true,
  })
  id!: string;

  @Input({
    required: true,
  })
  name!: string;

  @Input()
  type: 'text' | 'date' | 'password' = 'text';

  @Input()
  alt = '';

  @Input()
  placeholder = '';

  @Input({
    required: false,
  })
  leftIcon?: IconName;

  @Input({
    required: false,
  })
  rightIcon?: IconName;
}

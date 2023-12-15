import { Component , Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {

@Input({
  required:true
})
form!: FormGroup

@Input({
  required: true,
})
id!: string

@Input({
  required: true,
})
name!: string

@Input()
type: 'text' | 'date' | 'password' = 'text'

@Input()
alt =''
}

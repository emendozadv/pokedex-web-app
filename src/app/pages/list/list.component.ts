import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent } from '../../components/ui/icon/icon.component';
import { TextInputComponent } from '../../components/ui/form-fields/text-input/text-input.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {
  RadioModalComponent,
  RadioOption,
} from '../../components/ui/form-fields/radio-modal/radio-modal.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    IconComponent,
    TextInputComponent,
    ReactiveFormsModule,
    RadioModalComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  form = new FormGroup({
    search: new FormControl(''),
    sortBy: new FormControl('number'),
  });

  readonly sortByOptions: RadioOption[] = [
    {
      id: 'number',
      value: 'number',
      label: 'Number',
    },
    {
      id: 'name',
      value: 'name',
      label: 'Name',
    },
  ];

  constructor() {
    this.form.controls.search.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.form.controls.sortBy.valueChanges.subscribe((value) => {
      console.log(value);
    });

    //this.getAllPokemons();
  }
}

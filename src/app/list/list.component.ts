import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent } from '../components/ui/icon/icon.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, IconComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}

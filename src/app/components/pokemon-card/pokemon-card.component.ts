import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  @Input({ required: true }) pokemon!: Pokemon;
}

import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PokemonsService } from '../../shared/pokemons/pokemons.service';

export const listResolver: ResolveFn<void> = () => {
  const pokemonsService = inject(PokemonsService);
  return pokemonsService.getAllPokemons();
};

import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
export type PokemonData = {
  id: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
};

export type Pokemon = {
  name: string;
  url: string;
  data: PokemonData;
};

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly httpClient = inject(HttpClient);
  readonly pokemons = signal<Pokemon[]>([]);

  //constructor() { }

  async getAllPokemons() {
    const { results } = await lastValueFrom(
      this.httpClient.get<{
        count: number;
        next: string;
        previous: string;
        results: { name: string; url: string }[];
      }>('https://pokeapi.co/api/v2/pokemon?limit=10'),
    );

    const pokemons = await Promise.all(
      results.map(async ({ name, url }) => {
        const data = await lastValueFrom(this.httpClient.get<PokemonData>(url));

        return {
          name,
          url,
          data,
        };
      }),
    );
    this.pokemons.set(pokemons);
    //console.log(this.pokemons);
  }
}

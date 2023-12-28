import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly httpClient = inject(HttpClient);
  readonly pokemons = signal<{ name: string; url: string }[]>([]);

  //constructor() { }

  async getAllPokemons() {
    const { results } = await lastValueFrom(
      this.httpClient.get<{
        count: number;
        next: string;
        previous: string;
        results: { name: string; url: string }[];
      }>('https://pokeapi.co/api/v2/pokemon'),
    );

    this.pokemons.set(results);

    console.log(this.pokemons);
  }
}

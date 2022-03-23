import { Injectable } from '@angular/core';
import { Persoanje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Persoanje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  get personajes(): Persoanje[] {
      return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Persoanje) {
    this._personajes.push(personaje)
  }
}

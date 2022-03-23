import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Persoanje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
})
export class AgregarPersonajesComponent {
  
  @Input() nuevo: Persoanje = {
    nombre: '',
    poder: 0,
  };

  constructor( private dbzService: DbzService) {

  }

  // @Output() onNuevoPersonaje: EventEmitter<Persoanje> = new EventEmitter()

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }

}

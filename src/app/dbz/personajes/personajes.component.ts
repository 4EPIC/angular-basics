import { Component, Input } from '@angular/core';
import { Persoanje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input() personajes: Persoanje[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor (private dbzService: DbzService){}
}

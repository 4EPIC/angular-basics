import { Component } from '@angular/core';
import { Persoanje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Persoanje = {
    nombre: 'Maestro',
    poder: 1000,
  };

  constructor(){}

}

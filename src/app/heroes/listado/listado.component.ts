import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spider-Man',
    'Hulk',
    'Capitán America',
    'IronMan',
    'BlackWidow',
    'Thor',
    'Hawkeye',
  ];

heroeBorrado: string = ''

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }
  
}

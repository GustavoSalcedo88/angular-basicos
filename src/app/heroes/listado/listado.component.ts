import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  //Arreglo
  heroes: string[]=['Spiderman','hulk', 'iron man', 'thor'];
  heroeBorrado: string='';
  BorrarHeroe(){
    console.log('Borrrando...');
    this.heroeBorrado=this.heroes.shift()||'';
  }
}

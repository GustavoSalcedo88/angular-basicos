import { Component } from "@angular/core";

@Component({
    selector: 'app-heore',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre: string= 'IronMan';
    edad: number=34;

     get mayusculas(){
        return this.nombre.toUpperCase();
     }
    obtenerNombre():string {
        return `${this.nombre}- ${this.edad}`;
    }
    cambiarNombre():void{
        this.nombre='SpiderMan';
    }
    cambiarEdad():void{
        this.edad=33;
    }
}
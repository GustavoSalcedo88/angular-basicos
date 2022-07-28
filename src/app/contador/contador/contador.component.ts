import { Component } from '@angular/core'
@Component({
    selector: 'app-contador',
    template:`
        <h1>{{title}}</h1>
<button (click)=sumar()>+1</button>
<span>{{numero}}</span>
<button (click)=Restar()>-1</button>
<hr>
<h3>la base  es  : <strong>{{base}}</strong></h3>
<button (click)="base5(+5)" >+5</button>
<button (click)="base5(-5)">-5</button>
    `
})
export class contadorComponent{
    title = 'Contador';
  numero:number=10;
  base:number =5;
//metodo
  sumar() 
  {
    this.numero+=1;
  }
  //metodo Restar
  Restar()
  {
    this.numero-=1;
  }
  //base 5
  base5(valor: number){
    this.base+=valor
  }
}
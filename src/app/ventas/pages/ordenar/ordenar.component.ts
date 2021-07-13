import { Component } from '@angular/core';
import { Color, Sale } from '../../interfaces/sale.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  isTrue: boolean = false;
  ordenarPor: string = '';
  sales: Sale[] = [
    {
      nombre: 'diarias',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'semanal',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'anual',
      vuela: true,
      color: Color.rojo
    }
  ];

  enMayusculas(){
    this.isTrue ? this.isTrue = false : this.isTrue = true;
  }

  cambiarOrden(value: string){
    this.ordenarPor = value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Sale } from '../interfaces/sale.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(sale: Sale[], orderPor: string = 'sin valor'): Sale[] {

    switch(orderPor){
      case 'nombre':
        return sale.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1 );
      case 'vuela':
        return sale.sort((a,b) => (a.vuela > b.vuela) ? -1 : 1 );
      case 'color':
        return sale.sort((a,b) => (a.color > b.color) ? 1 : -1 );
      default:
        return sale;
    } 

  }

}

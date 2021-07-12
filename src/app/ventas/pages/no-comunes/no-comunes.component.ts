import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre: string = 'Miler';
  genero:string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Jasmin'];
  clientesMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.genero=='masculino'){
      this.nombre = 'Marta';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Miler';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeryValue pipe
  persona = {
    nombre: 'Fernando',
    edad: 54,
    direccion: 'Otawa, Canada'
  };

  //JsonPipe
  heroes = [
    {
    nombre: 'superman',
    vuela: true,
    },
    {
      nombre: 'robin',
      vuela: false,
    },
    {
      nombre: 'aquaman',
      vuela: false,
    },
  ]

  //Async Pipe
  myObservable = interval(1000);//0,1,2,3,4...

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3000);
  })

}

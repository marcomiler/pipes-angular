import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'miler';
  nombreUpper: string = 'rodriguez';
  nombreTitle: string = 'mArcO';

  fecha: Date = new Date();
  

}

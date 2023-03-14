import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicios-carta',
  templateUrl: './servicios-carta.component.html',
  styleUrls: ['./servicios-carta.component.css']
})
export class ServiciosCartaComponent {
  @Input() public data: any;
}

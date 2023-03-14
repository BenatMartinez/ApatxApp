import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-contacto-carta',
  templateUrl: './contacto-carta.component.html',
  styleUrls: ['./contacto-carta.component.css']
})
export class ContactoCartaComponent {
  @Input() public data: any;
}

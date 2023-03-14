import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-carta',
  templateUrl: './home-carta.component.html',
  styleUrls: ['./home-carta.component.css']
})
export class HomeCartaComponent {
  @Input() public data: any;
}

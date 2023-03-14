import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-index',
  templateUrl: './contacto-index.component.html',
  styleUrls: ['./contacto-index.component.css']
})
export class ContactoIndexComponent {

  public myData = [{ titulo: 'Telefono', imgUrl: 'assets/contacto/telefono.png', cuerpo: '943005505 / 688851143' },
  { titulo: 'Ubicación', imgUrl: 'assets/contacto/ubicacion.png', cuerpo: 'Lope de Irigoyen 15, entreplanta 3 (entrada por Lucas de Berroa), IRUN' },
  { titulo: 'Email', imgUrl: 'assets/contacto/email.png', cuerpo: 'apatxakademia@gmail.com' }];
}

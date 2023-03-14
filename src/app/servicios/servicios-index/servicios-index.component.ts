import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-index',
  templateUrl: './servicios-index.component.html',
  styleUrls: ['./servicios-index.component.css']
})
export class ServiciosIndexComponent {

  public myData = [{ titulo: 'Apoyo Escolar', imgUrl: 'assets/tigre.jpg', dirUrl: '/servicios/apoyo' },
  { titulo: 'Psicopedagogía', imgUrl: 'assets/tigre.jpg', dirUrl: '/servicios/psico' },
  { titulo: 'Idiomas', imgUrl: 'assets/tigre.jpg', dirUrl: '/servicios/idiomas' },
  { titulo: 'Talleres', imgUrl: 'assets/tigre.jpg', dirUrl: '/servicios/talleres' },];
}

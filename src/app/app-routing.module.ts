import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoIndexComponent } from './contacto/contacto-index/contacto-index.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { ServiciosIndexComponent } from './servicios/servicios-index/servicios-index.component';
import { ApoyoIndexComponent } from './servicios/subMenu/apoyo-index/apoyo-index.component';
import { IdiomasIndexComponent } from './servicios/subMenu/idiomas-index/idiomas-index.component';
import { PsicoIndexComponent } from './servicios/subMenu/psico-index/psico-index.component';
import { TalleresIndexComponent } from './servicios/subMenu/talleres-index/talleres-index.component';
import { SobreapatxIndexComponent } from './sobreapatx/sobreapatx-index/sobreapatx-index.component';


const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  { path: 'contacto', component: ContactoIndexComponent },
  { path: 'sobreapatx', component: SobreapatxIndexComponent },
  { path: 'servicios', component: ServiciosIndexComponent },
  { path: 'servicios/apoyo', component: ApoyoIndexComponent },
  { path: 'servicios/idiomas', component: IdiomasIndexComponent },
  { path: 'servicios/psico', component: PsicoIndexComponent },
  { path: 'servicios/talleres', component: TalleresIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

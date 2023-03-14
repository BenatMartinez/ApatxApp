import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ServiciosIndexComponent } from './servicios/servicios-index/servicios-index.component';
import { ServiciosCartaComponent } from './servicios/servicios-carta/servicios-carta.component';
import { ContactoIndexComponent } from './contacto/contacto-index/contacto-index.component';
import { ContactoCartaComponent } from './contacto/contacto-carta/contacto-carta.component';
import { SobreapatxIndexComponent } from './sobreapatx/sobreapatx-index/sobreapatx-index.component';
import { ApoyoIndexComponent } from './servicios/subMenu/apoyo-index/apoyo-index.component';
import { IdiomasIndexComponent } from './servicios/subMenu/idiomas-index/idiomas-index.component';
import { TalleresIndexComponent } from './servicios/subMenu/talleres-index/talleres-index.component';
import { PsicoIndexComponent } from './servicios/subMenu/psico-index/psico-index.component';
import { ImagencabeceraComponent } from './includes/imagencabecera/imagencabecera.component';
import { CaracteristicasCartaComponent } from './includes/caracteristicas-carta/caracteristicas-carta.component';
import { HomeCartaComponent } from './home/home-carta/home-carta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeIndexComponent,
    CarouselComponent,
    ServiciosIndexComponent,
    ServiciosCartaComponent,
    ContactoIndexComponent,
    ContactoCartaComponent,
    SobreapatxIndexComponent,
    ApoyoIndexComponent,
    IdiomasIndexComponent,
    TalleresIndexComponent,
    PsicoIndexComponent,
    ImagencabeceraComponent,
    CaracteristicasCartaComponent,
    HomeCartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

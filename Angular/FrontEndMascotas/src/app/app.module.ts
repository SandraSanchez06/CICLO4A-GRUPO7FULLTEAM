import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantillas/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantillas/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantillas/inicio/inicio.component';
import { ErrorComponent } from './plantillas/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

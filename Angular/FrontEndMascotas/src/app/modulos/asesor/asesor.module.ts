import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { AdministraSolicitudesComponent } from './administra-solicitudes/administra-solicitudes.component';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';


@NgModule({
  declarations: [
    AdministraSolicitudesComponent,
    ListarMascotasComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }

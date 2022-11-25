import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { AdministraSolicitudesComponent } from './administra-solicitudes/administra-solicitudes.component';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { ListarSOlicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EliminarMascotasComponent } from './eliminar-mascotas/eliminar-mascotas.component';


@NgModule({
  declarations: [
    AdministraSolicitudesComponent,
    ListaMascotasComponent,
    ListarSOlicitudesComponent,
    EditarMascotasComponent,
    EliminarMascotasComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsesorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { AsignarclienteMascotaComponent } from './asignarcliente-mascota/asignarcliente-mascota.component';


@NgModule({
  declarations: [
    AsignarclienteMascotaComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }

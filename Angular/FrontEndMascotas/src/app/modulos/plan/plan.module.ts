import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { AsignarMascotaComponent } from './asignar-mascota/asignar-mascota.component';


@NgModule({
  declarations: [
    AsignarMascotaComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }

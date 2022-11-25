import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { AfiliacionMascotaComponent } from './afiliacion-mascota/afiliacion-mascota.component';


@NgModule({
  declarations: [
    AfiliacionMascotaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }

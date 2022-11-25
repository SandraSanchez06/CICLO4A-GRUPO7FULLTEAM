import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearProductoComponent,
    BuscarProductoComponent,
    ModificarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductoModule { }

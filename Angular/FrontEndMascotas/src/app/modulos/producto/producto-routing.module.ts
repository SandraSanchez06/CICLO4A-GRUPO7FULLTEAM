import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';

const routes: Routes = [
  {
    path:'crearProducto',
    component: CrearProductoComponent
  },
  {
    path:'buscarProducto',
    component: BuscarProductoComponent
  },
  {
    path:'eliminarProducto',
    component: EliminarProductoComponent
  },
  {
    path:'listarProducto',
    component: BuscarProductoComponent
  },
  {
    path:'modificarProducto/:id',
    component: ModificarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }

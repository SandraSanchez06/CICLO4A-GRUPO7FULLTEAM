import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path:"crear-usuario",
    component:CrearUsuarioComponent
  },
  {
    path:"editar-usuario",
    component:EditarUsuarioComponent
  },
  {
    path:"eliminar-usuario",
    component:EliminarUsuarioComponent
  },
  {
    path:"buscar-usuario",
    component:BuscarUsuarioComponent
  },
  {
    path:"crear-sucursal",
    component:CrearSucursalComponent
  },
  {
    path:"editar-sucursal",
    component:EditarSucursalComponent
  },
  {
    path:"eliminar-sucursal",
    component:EliminarSucursalComponent
  },
  {
    path:"buscar-sucursal",
    component:BuscarSucursalComponent
  },
  {
    path:"crear-plan",
    component:CrearPlanComponent
  },
  {
    path:"editar-plan",
    component:EditarPlanComponent
  },
  {
    path:"eliminar-plan",
    component:EliminarPlanComponent
  },
  {
    path:"buscar-plan",
    component:BuscarPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

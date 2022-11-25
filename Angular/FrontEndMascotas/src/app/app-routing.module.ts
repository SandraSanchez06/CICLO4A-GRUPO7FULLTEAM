import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantillas/error/error.component';
import { InicioComponent } from './plantillas/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/inicio"
  },
  {
    path:"seguridad",
    loadChildren:() => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path:"administracion",
    loadChildren:() => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path:"asesor",
    loadChildren:() => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule)
  },
  {
    path:"cliente",
    loadChildren:() => import("./modulos/cliente/cliente.module").then(x => x.ClienteModule)
  },
  {
    path:"seguridad",
    loadChildren:() => import("./modulos/plan/plan.module").then(x => x.PlanModule)
  },
  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

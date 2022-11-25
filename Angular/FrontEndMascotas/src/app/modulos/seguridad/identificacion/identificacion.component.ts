import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({

    'usuario':['',[Validators.required, Validators.email]],
    'contrasena':['',[Validators.required]]
  });

  constructor(private fb:FormBuilder,  private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }

  IdentificarUsusario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let claveCifrada= cryptoJS.MD5(contrasena).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) =>{
      this.servicioSeguridad.AlmacenarSesion(datos);
      alert("Datos Correctos")
    this.router.navigate(["/inicio"]);
  }, (error: any) =>{
    //ok
    alert("Datos invalidos")
  })      
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-eliminar-mascotas',
  templateUrl: './eliminar-mascotas.component.html',
  styleUrls: ['./eliminar-mascotas.component.css']
})
export class EliminarMascotasComponent implements OnInit {
  id: string = '';
  constructor(private mascota: MascotaService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.EliminarMascota();
  }
  EliminarMascota() {
    this.mascota.EliminarMascota(this.id).subscribe(() => {
      alert("Mascota eliminada correctamente");
      this.router.navigate(["/asesor/listaMascotas"]);

    }, (error: any) => {
      alert("Ha habido un error al eliminar mascota");
    })


  }



}

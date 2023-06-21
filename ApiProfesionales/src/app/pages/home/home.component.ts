import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Star } from '../../models/star';
import { StarsService } from 'src/app/shared/stars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public stars: Star[] = [];
  public starBuscado!: Star;
  public starModificado: Star = new Star();

  constructor(public starsService: StarsService, public router: Router, private toastr: ToastrService) {}

  ;
  

  modificar(
    nuevoNombre: string,
    nuevoApellido: string,
    nuevaEdad: number,
    nuevaPhoto: string,
    nuevaNacionalidad: string,
    nuevoOscar: number,
    nuevaProfesion: string
  ): void {
    this.starModificado.name = nuevoNombre;
    this.starModificado.surname = nuevoApellido;
    this.starModificado.age = nuevaEdad;
    this.starModificado.photo = nuevaPhoto;
    this.starModificado.nationality = nuevaNacionalidad;
    this.starModificado.oscarsNumber = nuevoOscar;
    this.starModificado.profession = nuevaProfesion;

    this.starsService.updateStar(this.starModificado).subscribe((listo) => {
      if (listo) {
        this.toastr.success('La estrella se ha modificado correctamente');
        this.router.navigateByUrl('/estrellas');
      } else {
        this.toastr.error('No se ha modificado la estrella');
      }
    });
  }

  register(
    nuevoNombre: string,
    nuevoApellido: string,
    nuevaEdad: number,
    nuevaPhoto: string,
    nuevaNacionalidad: string,
    nuevoOscar: number,
    nuevaProfesion: string
  ): void {
    const nuevaEstrella: Star = new Star(
      nuevoNombre,
      nuevoApellido,
      nuevaEdad,
      nuevaPhoto,
      nuevaNacionalidad,
      nuevoOscar,
      nuevaProfesion
    );

    this.starsService.addStar(nuevaEstrella).subscribe((star: Star) => {
      if (star) {
        this.toastr.success('La estrella ha sido añadida correctamente');
        this.router.navigateByUrl('/estrellas');
      } else {
        this.toastr.error('La estrella no ha podido añadirse correctamente');
      }
    });
  }

  ngOnInit(): void {}
}

import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Star} from '../../models/star';
import { StarsService } from '../../shared/stars.service';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  public stars: Star[];
  public star!: Star;
  public starBuscado!: Star;

  constructor(private toastr: ToastrService, private starsService: StarsService) {
    this.stars=[]
    }
  ngOnInit(): void {
    this.starsService.getStars().subscribe((resp: Respuesta) => {
      this.stars= resp.data
      console.log(resp)
    })
    }
    busqueda(nombre: string, apellido: string): void {
      this.starsService.getByNameAndSurname(nombre, apellido).subscribe((star: Star) => {
        if (star) { 
          this.starBuscado = { ...star };
          this.toastr.success('La estrella se ha encontrado');
        } else {
          this.toastr.error('No ha sido posible encontrar la estrella introducida');
        }
      });
    }
  
  
    deleteStar(name: string): void {
      this.starsService.deleteStar(name).subscribe(() => {
          let filtrado = this.stars.filter(star => star.name !== name);
          this.stars = filtrado;
          console.log(name)
          this.toastr.success('La estrella seleccionada ha sido borrado');
        }
      )}
    }
  

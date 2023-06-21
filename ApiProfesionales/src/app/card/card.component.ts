import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { literalMap } from '@angular/compiler';
import { StarsService } from '../shared/stars.service';
import { Star } from '../models/star';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit
 {


  @Input()
  starPadre: Star = new Star();
  @Input()
  esImpar: boolean = false;
@Output() quitar = new EventEmitter<string>();
constructor(){}
quitarCaja(){
this.quitar.emit(this.starPadre.name);
}
ngOnInit(): void {  
}
}
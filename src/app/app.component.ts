import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/tarea.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  filtro:Tarea[]= [];
  public paginaActual:number;

  constructor(){
    this.paginaActual= 1;
  }
  

  eventofiltrar(datos:Tarea[]):void{
    this.filtro = datos;
  }

  async eventoDeBotonerafiltrar():Promise<void>{
    this.paginaActual = 1;
  }
  
}

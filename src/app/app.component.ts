import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  filtro:any[]= [];
  paginaActual:number = 1;
  

  eventofiltrar(datos:any):void{
    this.filtro = datos;
  }

  async eventoDeBotonerafiltrar():Promise<void>{
    this.paginaActual = 1;
  }
  
}

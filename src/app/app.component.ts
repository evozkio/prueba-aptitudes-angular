import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filtro:any[]= [];


  eventoDeBotonerafiltrar(datos:any):void{
    this.filtro = datos;
  }
  
}

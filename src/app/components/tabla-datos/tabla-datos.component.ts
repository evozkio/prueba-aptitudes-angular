import { Component, HostListener, Input, OnInit } from '@angular/core';
import {faExclamationCircle,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { Tarea } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/service/tarea.model';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class TablaDatosComponent implements OnInit{

  faExclamationCircle = faExclamationCircle;
  faInfoCircle = faInfoCircle;
  filtroPadre: Tarea[] = [];
  cuerpoTabla:any;
  numeroElementos:number = 31;

  constructor(public tareaSvc: TareaService){
  }
 
  ngOnInit(): void {
    this.recalcularFilas();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event:any) {
      this.recalcularFilas();
  }

  recalcularFilas(){
    let alto_div = 0;
    let div_tareas = document.getElementById("cuerpo-tabla");
    if(div_tareas!==null){
      alto_div = div_tareas.offsetHeight;
    }
    let num_pag = Math.floor(alto_div/30);
    console.log(num_pag)
    this.cambiarPaginacion(1, num_pag);
  }

  cambiarPaginacion(pag: number, items:number){
    this.numeroElementos = items;
    setTimeout(() => this.tareaSvc.pagina = pag, 100);
  }

  numeroPorPagina():number{
    return this.numeroElementos;
  }
  

}

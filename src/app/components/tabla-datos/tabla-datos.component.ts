import { Component, HostListener, Input, OnInit } from '@angular/core';
import {faExclamationCircle,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { Tarea } from 'src/app/models/tarea.module';




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
  @Input() currentPage:any;
  @Input()filtroPadre: Tarea[] = [];
  cuerpoTabla:any;
  numeroElementos:number = 31;
 
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
    this.cambiarPaginacion(1, num_pag);
  }

  cambiarPaginacion(pag: number, items:number){
    this.numeroElementos = items;
    setTimeout(() => this.currentPage = pag, 100);
  }

  calcularHora(item:any):string{
    return item.fecha.slice(11,16);
  }

  calcularDia(item:any):string{
    return item.fecha.slice(8,11);
  }
  calcularMes(item:any):string{
    let cadena:string = item.fecha.slice(5,7);
    switch (cadena) {
      case '01':
        cadena = 'ene.';
        break;
      case '02':
        cadena = 'feb.';
        break;
      case '03':
        cadena = 'mar.';
        break;
      case '04':
        cadena = 'abr.';
        break;
      case '05':
        cadena = 'may.';
        break;
      case '06':
        cadena = 'jun.';
        break;
      case '07':
        cadena = 'jul.';
        break;
      case '08':
        cadena = 'ago.';
        break;
      case '09':
        cadena = 'sep.';
        break;
      case '10':
        cadena = 'oct.';
        break;
      case '11':
        cadena = 'nov.';
        break;
      case '12':
        cadena = 'dic.';
        break;
      default:
        break;
    }
    return cadena;
  }
  calcularAnio(item:any):string{
    return item.fecha.slice(2,4);
  }


  numeroPorPagina():number{
    return this.numeroElementos;
  }
  

}

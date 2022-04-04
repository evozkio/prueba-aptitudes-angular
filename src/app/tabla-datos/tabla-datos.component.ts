import { Component, HostListener, Input, OnInit } from '@angular/core';
import {faExclamationCircle,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { PageChangedEvent } from 'ngx-bootstrap/pagination';



@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class TablaDatosComponent implements OnInit{

  faExclamationCircle =faExclamationCircle;
  faInfoCircle = faInfoCircle;
  returnedArray?: any[];
  currentPage:number = 1;
  @Input() filtroPadre:any;
  cuerpoTabla:any;
  numeroElementos:number = 31;
 
  ngOnInit(): void {
    this.cuerpoTabla = document.getElementById("cuerpo-tabla");
    this.numeroElementos = this.cuerpoTabla.offsetHeight/30; 
  }

  @HostListener('window:resize', ['$event'])
    onResize(event:any) {
      this.currentPage = 1;
      this.numeroElementos = this.cuerpoTabla.offsetHeight/30; 
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
  
  logo(item:any):string{
    return item.logo;
  }
  referencia(item:any):string{
    return item.referencia;
  }

  observacion(item:any):string{
    return item.observacion;
  }

  cantidad(item:any):string{
    return item.cantidad;
  }

  estado(item:any):string{
    return item.estado;
  }

  tipo(item:any):string{
    return item.tipo;
  }

  codigoCliente(item:any):string{
    return item.codigo_cliente;
  }

  aliasCliente(item:any):string{
    return item.alias_cliente;
  }

  tipoPrimeraLetra(item:any){
    return item.tipo.substring(0,1);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.filtroPadre.slice(startItem, endItem);
  }

  inicio():number{
    return (this.currentPage-1)*this.numeroElementos;
  }

  fin():number{
    return ((this.currentPage-1)*this.numeroElementos)+this.numeroElementos;
  }

  numeroPorPagina():number{
    return this.numeroElementos;
  }
  
}

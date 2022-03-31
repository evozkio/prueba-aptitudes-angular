import { Component, Input, OnInit } from '@angular/core';
import {faExclamationCircle,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { PageChangedEvent } from 'ngx-bootstrap/pagination';



@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})
export class TablaDatosComponent implements OnInit{

  faExclamationCircle =faExclamationCircle;
  faInfoCircle = faInfoCircle;
  @Input() filtroPadre:any;
  returnedArray?: any[];
 
  ngOnInit(): void {
      this.returnedArray =this.filtroPadre.slice(0, 30);
  }



  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.filtroPadre.slice(startItem, endItem);
  }


}

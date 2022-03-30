import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent{
  @Output() buscarFiltroHijo = new EventEmitter<any>();
  filtro = {
    'cliente': '',
    'usuario': '',
    'referencia':'',
    'tipos':'',
  };

  actionBuscar(){
      this.buscarFiltroHijo.emit(this.filtro);
  }
}

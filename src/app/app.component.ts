import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  filtro:any;

  ngOnInit(): void {
    this.filtro = {
      'cliente': '',
      'usuario': '',
      'referencia':'',
      'tipos':'',
    };
  }


  buscarFiltro(filtroHijo: any) {
    this.filtro = Object.assign({},filtroHijo);
  }
  
}

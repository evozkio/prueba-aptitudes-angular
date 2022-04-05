import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { TablaDatosComponent } from './components/tabla-datos/tabla-datos.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FiltroComponent,
    TablaDatosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FontAwesomeModule,
    PopoverModule.forRoot(),
    NgxPaginationModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

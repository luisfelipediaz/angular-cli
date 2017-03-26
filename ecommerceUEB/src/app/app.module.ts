import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CardproductComponent } from './cardproduct/cardproduct.component';
import { ProductosService } from './productos.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaProductosComponent,
    CardproductComponent
  ],
  providers: [ ProductosService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

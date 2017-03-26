import { Component, OnInit } from '@angular/core';

import { Producto } from 'app/producto';
import { ProductosService } from 'app/productos.service';

@Component({
  moduleId: module.id,
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos()
      .then(pro => this.productos = pro);
  }
}

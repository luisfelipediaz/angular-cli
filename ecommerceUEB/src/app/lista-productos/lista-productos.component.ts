import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Producto } from 'app/producto';
import { ProductosService } from 'app/productos.service';
import { Compra } from "../compra";

@Component({
  moduleId: module.id,
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];
  @Input() compra: Compra;
  @Output() AddProducto: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos()
      .then(pro => this.productos = pro);
  }

  addProducto(producto: Producto){
    this.compra.agregarProducto(producto);
    this.AddProducto.emit(true);
  }
}

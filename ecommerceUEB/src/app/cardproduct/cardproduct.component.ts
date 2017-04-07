import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from "app/producto";

@Component({
  selector: 'app-cardproduct',
  templateUrl: './cardproduct.component.html',
  styleUrls: ['./cardproduct.component.css']
})
export class CardproductComponent implements OnInit {
  @Input() producto: Producto;
  @Output() onAddProducto: EventEmitter<Producto> = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite(): void{
    this.producto.favorito = !this.producto.favorito;
  }

  agregarProducto(): void{
    this.onAddProducto.emit(this.producto);
  }

}
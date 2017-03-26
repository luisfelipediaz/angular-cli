import { Component, OnInit, Input } from '@angular/core';
import { Producto } from "app/producto";

@Component({
  selector: 'app-cardproduct',
  templateUrl: './cardproduct.component.html',
  styleUrls: ['./cardproduct.component.css']
})
export class CardproductComponent implements OnInit {
  @Input() producto: Producto;

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite(): void{
    this.producto.favorito = !this.producto.favorito;
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { trigger } from '@angular/animations'
import { Compra } from '../compra';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  @Input() compra: Compra;

  constructor() { }

  ngOnInit() {
    
  }

}
